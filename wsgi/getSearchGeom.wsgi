#!/usr/bin/python
# -*- coding: utf-8 -*-
#http://localhost/wsgi/getSearchGeom.wsgi?searchtable=av_user.suchtabelle&displaytext=Oberlandautobahn (Strasse, Uster)

import re #regular expression support
import psycopg2 #PostgreSQL DB Connection
import psycopg2.extras #z.b. für named column indexes
import sys #für Fehlerreporting
# barpareb: added module webob 
sys.path.append("/opt/wsgi/")
from webob import Request
from webob import Response

def application(environ, start_response):
  #logging.basicConfig(filename='/opt/wwwroot/sogis/gifs/martins_suche.log', level=logging.DEBUG, format='%(asctime)s %(message)s')
  request = Request(environ)
  searchtable = request.params["searchtable"]
  displaytext = request.params["displaytext"]
  #logging.debug('Bin jetzt im getSearchGeom')
  
  if searchtable == 'Koordinaten':

    querystring_koord = displaytext
    #Wenn der querystring ein / hat, werden zuerst die Leerzeichen entfernt und dann der / durch ein , ersetzt.
    if querystring_koord.find("/") != -1: 
      querystring_koord = querystring_koord.replace(" ","")
      querystring_koord = querystring_koord.replace("/",", ")  
      
    if querystring_koord.find(" ") != -1 and querystring_koord.find(", ") == -1:
      querystring_koord = querystring_koord.replace(" ",", ")
      
    #logging.debug('Query_koord_geom ist jetzt hier 1: '+querystring_koord)
    
    if querystring_koord.find(".") != -1:
      querystring_koord = re.sub(r'\..*?\,', ',', querystring_koord)
      querystring_koord = re.sub(r'\..*', '', querystring_koord)

    #Die srids werden gesetzt. Bei 6 Stellen auf lv03, bei 8 auf lv95
    n = re.compile('([0-9]{7}(\.?[0-9]*?))((\s)|(,)|(, ))([0-9]{7}(\.?[0-9]*?))$')
    if n.match(querystring_koord) is not None:
      srid = '2056'
    else:
      srid = '21781'

    
    sql = "SELECT ST_AsText(st_transform(ST_SetSRID(ST_MakePoint("+querystring_koord+"), "+srid+"),2056)) AS geom"
  else:  
    sql = "SELECT ST_AsText(ST_Simplify(ST_SnapToGrid(the_geom, 0.1),0.1)) AS geom FROM "+searchtable+" WHERE displaytext = %(displaytext)s;"
  
  errorText = ''
  try:
    conn = psycopg2.connect("host='srsofaioi19589.verw.rootso.org' dbname='sogis' port='5432' user='mspublic' password=''")
    conn.set_client_encoding("UTF-8")
  except:
    errorText += 'error: database connection failed.'
    # write the error message to the error.log
    print >> environ['wsgi.errors'], "%s" % errorText
    response_headers = [('Content-type', 'text/plain'),
                        ('Content-Length', str(len(errorText)))]
    start_response('500 INTERNAL SERVER ERROR', response_headers)

    return [errorText]

  #logging.warning(sql)
  cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
  if searchtable == 'Koordinaten':
    try:
      cur.execute(sql)
    except:
      exceptionType, exceptionValue, exceptionTraceback = sys.exc_info()
      conn.close()
      errorText += 'error: could not coordinate-execute query'
      # write the error message to the error.log
      print >> environ['wsgi.errors'], "%s" % errorText+": "+str(exceptionValue)
      response_headers = [('Content-type', 'text/plain'),
                          ('Content-Length', str(len(errorText)))]
      start_response('500 INTERNAL SERVER ERROR', response_headers)

      return [errorText]
      
  else:
    try:
      cur.execute(sql,{'displaytext':displaytext})
    except:
      exceptionType, exceptionValue, exceptionTraceback = sys.exc_info()
      conn.close()
      errorText += 'error: could not execute query'
      # write the error message to the error.log
      print >> environ['wsgi.errors'], "%s" % errorText+": "+str(exceptionValue)
      response_headers = [('Content-type', 'text/plain'),
                          ('Content-Length', str(len(errorText)))]
      start_response('500 INTERNAL SERVER ERROR', response_headers)

      return [errorText]
    
  #result = sql;
  #result += ";" + errorText;
  row = cur.fetchone()
  result = row['geom']
  #logging.debug('result = '+result)
  
  response = Response(result,"200 OK",[("Content-type","text/plain"),("Content-length", str(len(result)) )])
  
  conn.close()
  
  return response(environ, start_response)
