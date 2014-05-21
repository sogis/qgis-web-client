#!/usr/bin/python
# -*- coding: utf-8 -*-
#sample queries
#http://localhost/wsgi/search.wsgi?searchtables=abwasser.such§tabelle&query=1100&cb=bla
#http://localhost/wsgi/search.wsgi?query=Oberlandstr&cb=bla

import re #regular expression support
import string #string manipulation support
import psycopg2 #PostgreSQL DB Connection
import psycopg2.extras #z.b. für named column indexes
import json
import sys #für Fehlerreporting
#import logging
# barpareb: added module webob 
sys.path.append("/opt/wsgi/")
from webob import Request
from webob import Response


def application(environ, start_response):
  
  #logging.basicConfig(filename='/opt/wwwroot/sogis/gifs/martins_suche.log', level=logging.DEBUG, format='%(asctime)s %(message)s')

  #logging.debug('Beginne mit der Funktion')

  request = Request(environ)
  #  searchtables = ["qwebclient.search_gemeinde","qwebclient.search_adresse","qwebclient.search_gbnr"]; # enter your default searchtable(s) here
  searchtables = ["qwebclient.search_gemeinde","qwebclient.search_adresse","qwebclient.search_gbnr","qwebclient.search_egid","qwebclient.search_flur","qwebclient.search_poi"]; # enter your default searchtable(s) here
  searchtablesstring = '';
  if "searchtables" in request.params:
    searchtablesstring = request.params["searchtables"]
    if len(searchtablesstring) > 0:
      searchtables.extend(searchtablesstring.split(','))

  querystring = request.params["query"]
  
  #Easter Egg
  if querystring == 'God':
    querystring = '607890 228256'
    
  #strip away leading and trailing whitespaces
  querystring = querystring.strip()
  #split on whitespaces
  regex = re.compile(r'\s+')
  querystring = querystring.replace("'"," ")
  querystrings = regex.split(querystring)
  
  searchtableLength = len(searchtables)
  querystringsLength = len(querystrings)
  sql = ""
  errorText = ''
  
  # any searchtable given?
  if searchtableLength == 0:
    errorText += 'error: no search table'
    # write the error message to the error.log
    print >> environ['wsgi.errors'], "%s" % errorText
    response_headers = [('Content-type', 'text/plain'),
                        ('Content-Length', str(len(errorText)))]
    start_response('500 INTERNAL SERVER ERROR', response_headers)

    return [errorText]
  #Hier wird untersucht, ob die Eingabe eine Koordinate ist (6 oder 8 Stellig!). 
  #querystring = querystring.replace(" ","")
  r = re.compile('([0-9]{6}(\.?[0-9]*?))((\s)|( / )|(/))([0-9]{6}(\.?[0-9]*?))$')
  n = re.compile('([0-9]{7}(\.?[0-9]*?))((\s)|( / )|(/))([0-9]{7}(\.?[0-9]*?))$')
  if (r.match(querystring) is not None) or (n.match(querystring) is not None):
    
    #Die srids werden gesetzt. Bei 6 Stellen auf lv03, bei 8 auf lv95
    if r.match(querystring) is not None: 
      srid = '21781'
    #if n.match(querystring) is not None: 
      #srid = '2056'
      
    #DIESE LÖSUNG IST TEMPORÄR!!! Es werden die ersten Zahlen der lv95 Koordinaten gelöscht, so dass sie danach (fast) 
    #lv03 Koordinaten sind. Entsprechend wird auch die srid standardmässig auf 21781 gesetzt! 
    
    else:
      srid = '21781'
      
    querystring_koord = querystring
    #Wenn der querystring_koord ein / hat, werden zuerst die Leerzeichen entfernt und dann der / durch ein , ersetzt.
    if querystring_koord.find("/") != -1: 
      querystring_koord = querystring_koord.replace(" ","")
      querystring_koord = querystring_koord.replace("/",", ")  
    #Wenn querystring_koord einen Leerschlag, aber kein ", " hat, wird der Leerschlag durch ein , und Leerschlag ersetzt. 
    if querystring_koord.find(" ") != -1 and querystring_koord.find(", ") == -1:
      querystring_koord = querystring_koord.replace(" ",", ")
    #Wenn ein Punkt gefunden wird, sollen die Zahlen die dahinter sind gelöscht. 
    #logging.debug('Query_koord ist jetzt hier 1: '+querystring_koord)
    
    if querystring_koord.find(".") != -1:
      querystring_koord = re.sub(r'\..*?\,', ',', querystring_koord)
      querystring_koord = re.sub(r'\..*', '', querystring_koord)
      
    #logging.debug('Query_koord ist jetzt hier 2: '+querystring_koord)
      
    #Wenn der querystring im lv95 abgesetzt wurde, werden die ersten Zahlen der beiden Koordinaten gelöscht (= umprojeziert!)
    if n.match(querystring) is not None:
      l = list(querystring_koord)  # convert to list
      l[0:1] = [] 
      l[8:9] = []
      querystring_koord = "".join(l)
    #Wenn dann noch Leerzeichen gefunden werden (und NICHT leerzeichen + ,) wird dieses Leerzeichen auch noch in ein , umgewandelt!
    #logging.debug('Die Eingabe ist:'+querystring+' Koord = '+querystring_koord)
    
    #Jetzt wird überprüft ob die Koordinaten in der Bounding-Box des Kantons Solothurn liegen
    presql = ''
    presql += "SELECT St_Intersects(ST_SetSRID(ST_MakePoint("+querystring_koord+"), "+srid+"),setsrid(ST_MakePolygon(ST_GeomFromText('LINESTRING(590000 210000, 590000 270000, 650000 270000, 650000 210000, 590000 210000)')),21781));"
    #logging.debug('Presql = '+presql)
    try:
      conn = psycopg2.connect("host='sogis1.so.ch' dbname='sogis' port='5432' user='' password=''")
      conn.set_client_encoding("UTF-8")
    except:
      errorText += 'error: database connection failed'
      # write the error message to the error.log
      print >> environ['wsgi.errors'], "%s" % errorText
      response_headers = [('Content-type', 'text/plain'),
                          ('Content-Length', str(len(errorText)))]
      start_response('500 INTERNAL SERVER ERROR', response_headers)

      return [errorText]
  
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    
    try:
      cur.execute(presql)
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
      #Und das ist dann der fertige sql-Query-String
    rowData = [];
    rows = cur.fetchall()
    
    
    sql += "SELECT '"+querystring+"' AS displaytext, 'Koordinaten' AS searchtable, 'Koordinaten' AS search_category, 1::integer AS search_order, 'Koordinaten' AS searchcat_trimmed, "
    sql += "'['||replace(regexp_replace(BOX2D(ST_SetSRID(ST_MakePoint("+querystring_koord+"), "+srid+"))::text,'BOX[(]|[)]','','g'),' ',',')||']'::text AS bbox "
  else:  
  #for each table
    for i in range(searchtableLength):
      sql += "SELECT displaytext, '"+searchtables[i]+r"' AS searchtable, search_category::text, search_order, substring(search_category::text from 4) AS searchcat_trimmed, "
      # the following line is responsible for zooming in to the features
      # this is supposed to work in PostgreSQL since version 9.0
      #sql += "'['||replace(regexp_replace(BOX2D(the_geom)::text,'BOX\(|\)','','g'),' ',',')||']'::text AS bbox "
      # if the above line does not work for you, deactivate it and uncomment the next line
      sql += "'['||replace(regexp_replace(BOX2D(the_geom)::text,'BOX[(]|[)]','','g'),' ',',')||']'::text AS bbox "
      sql += "FROM "+searchtables[i]+" WHERE "
      #for each querystring
      for j in range(0, querystringsLength):
      
        # for tsvector issues see the docs, use whichever version works best for you
        # this search does not use the field searchstring_tsvector at all but converts searchstring into a tsvector, its use is discouraged!
        #sql += "searchstring::tsvector @@ lower('"+querystrings[j]+":*')::tsquery"
        # this search uses the searchstring_tsvector field, which _must_ have been filled with to_tsvector('not_your_language', 'yourstring')
        sql += "(searchstring_tsvector @@ to_tsquery(\'finnish\', '"+querystrings[j]+":*')"
        # if all tsvector stuff fails you can use this string comparison on the searchstring field
        sql += "OR searchstring ILIKE \'%"+querystrings[j]+"%\')"
        
        if j < querystringsLength - 1:
          sql += " AND "
      #union for next table
      if i < searchtableLength - 1:
        sql += " UNION "

    sql += " ORDER BY search_category ASC, search_order ASC, displaytext ASC LIMIT 100;"
  #logging.debug('SQL-Query: '+sql)  
  try:
    conn = psycopg2.connect("host='sogis1.so.ch' dbname='sogis' port='5432' user='mspublic' password=''")
    conn.set_client_encoding("UTF-8")
  except:
    errorText += 'error: database connection failed'
    # write the error message to the error.log
    print >> environ['wsgi.errors'], "%s" % errorText
    response_headers = [('Content-type', 'text/plain'),
                        ('Content-Length', str(len(errorText)))]
    start_response('500 INTERNAL SERVER ERROR', response_headers)

    return [errorText]
  
  cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    
  try:
    cur.execute(sql)
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
    
  rowData = [];
  rows = cur.fetchall()
  lastSearchCategory = '';
  for row in rows:
    if lastSearchCategory != row['search_category']:
      rowData.append({"displaytext":row['searchcat_trimmed'],"searchtable":None,"bbox":None})
      lastSearchCategory = row['search_category']
    rowData.append({"displaytext":row['displaytext'],"searchtable":row['searchtable'],"bbox":row['bbox']})
  
  resultString = '{"results": '+json.dumps(rowData)+'}'
  resultString = string.replace(resultString,'"bbox": "[','"bbox": [')
  resultString = string.replace(resultString,']"}',']}')
  
  #we need to add the name of the callback function if the parameter was specified
  if "cb" in request.params:
    resultString = request.params["cb"] + '(' + resultString + ')'
  
  response = Response(resultString,"200 OK",[("Content-type","application/json"),("Content-length", str(len(resultString)) )])
  
  conn.close()
  
  return response(environ, start_response)
