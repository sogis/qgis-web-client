var default_buttons_seperators = [
                            'sogistooltip',
                            'measureDistance',
                            'measureArea',
                            'PrintMap',
                            'SendPermalink',
                            'ShowHelp',
                            //'navZoomBoxButton',
                            //'zoomNext',
                            //'zoomLast'
                            ];
                            
// default values when project is not yet configured in this document
var intSOGISTooltipWidth = 300;
var intSOGISTooltipHeight = 400;
var arr_SOGISButtons = ['measureDistance','measureArea','PrintMap','SendPermalink','ShowHelp','IdentifyTool'];
var strSOGISDefaultButton = 'IdentifyTool';
var strSOGISMinScale = null;
var strSOGISMaxScale = null;
var strSOGISSearchHelpText = '';


var gis_projects = {
  "path": "/maptest", /* DEPLOY !!! */
  "mapserver": "/wmstest",
  "thumbnails": "/thumbnails",
  "title": "SO!GIS",
  "topics": [{
      "name": "Amtliche Vermessung",
      "projects": [{
          "name": "Ortsplan",
          "projectpath": "",
          "projectfile": "ortsplan",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Hoheitsgrenzen,Ortsplan",
          "updateInterval": "occasional",
          "responsible": "Amtliche Vermessung",
          "tags": "Ortsplan",
          "switcher": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 300,
          "sogistooltipheight" : 400,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null
          
    },{
          "name": "Richtplan Stand Januar 2013",
          "projectpath": "",
          "projectfile": "richtplan",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Übersichtsplan,Orthofoto 2006,Grundnutzung,Überlagerte Nutzung",
          "updateInterval": "occasional",
          "responsible": "Amtliche Vermessung",
          "tags": "Richtplan",
          "switcher": false,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 300,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null
   },{
          "name": "Mocheckso Error/Warning",
          "projectpath": "",
          "projectfile": "mocheckso",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen",
          "updateInterval": "occasional",
          "responsible": "Amtliche Vermessung",
          "tags": "mocheckso",
          "switcher": false,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 300,
          "sogisbuttons" : ['measureDistance','measureArea','SendPermalink','PrintMap','IdentifyTool'],
          "sogisdefaultbutton" : "IdentifyTool",
          "sogismaxscale" : null
    },{
          "name": "Grundbuchplan",
          "projectpath": "",
          "projectfile": "grundbuchplan",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Baulinien,Amtliche Vermessung (schwarz-weiss),Strassenkarte",
          "updateInterval": "occasional",
          "responsible": "Amtliche Vermessung",
          "tags": "Grundbuchplan",
          "switcher": false,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 400,
          "sogistooltipheight" : 300,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null
    },{
          "name": "Grundbuchplan",
          "projectpath": "",
          "projectfile": "grundbuchplan-nf",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Baulinien,Amtliche Vermessung (schwarz-weiss),Strassenkarte",
          "updateInterval": "occasional",
          "responsible": "Amtliche Vermessung",
          "tags": "Grundbuchplan",
          "switcher": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 400,
          "sogistooltipheight" : 300,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null
    },
    {

          "name": "Hoheitsgrenzsteine",
          "projectpath": "",
          "projectfile": "hoheitsgrenzsteine",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Hoheitsgrenzsteine,Amtliche Vermessung (schwarz-weiss),Strassenkarte",
          "updateInterval": "occasional",
          "responsible": "Amtliche Vermessung",
          "tags": "Hoheitsgrenzsteine",
          "switcher": false,
          "searchtables": "qwebclient.search_hgs",
          "sogissearchhint": "- Hoheitsgrenzsteine: <b>hgs</b>",
          "sogistooltipwidth" : 400,
          "sogistooltipheight" : 300,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null
    }]
  },{
    "name": "Amt für Umwelt",
    "projects": [{
          "name": "Neophyten",
          "projectpath": "",
          "projectfile": "neophyten",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "2011 Pflanzenliste,2012 Pflanzenliste,2013 Pflanzenliste,2014 Pflanzenliste,Gemeindegren    zen,Orthofoto",
          "format": "image/png; mode=8bit",
          "fullColorLayers" : "Orthofoto",
          "updateInterval": "occasional",
          "responsible": "Amt für Umwel",
          "tags": "Neophyten",
          "switcher": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 400,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null

    },{
          "name": "Grundwasserbewirtschaftung",
          "projectpath": "",
          "projectfile": "grundwasserbewirtschaftung",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Orthofoto Kt. Solothurn",
          "updateInterval": "occasional",
          "responsible": "Amt für Umwelt",
          "tags": "Grundwasserbewirtschaftung",
          "switcher": false,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 1000,
          "sogistooltipheight" : 350,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null

    },{
          "name": "Baugrundklassen",
          "projectpath": "",
          "projectfile": "baugrundklassen",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenze,Baugrundklassen,Übersichtsplan,Strassenkarte",
          "updateInterval": "occasional",
          "responsible": "Amt für Umwelt",
          "tags": "Baugrundklassen",
          "switcher": false,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 300,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null

    },{
          "name": "Naturgefahrenhinweiskarte",
          "projectpath": "",
          "projectfile": "natgef",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Überflutungsgebiete,sehr flache Talböden ausserhalb der modellierten Überflutungsbereiche: Überflutung kann nicht ausgeschlossen werden,Übersarung / Schwemmkegel,Murgang,bekannte Ereignisse ausserhalb des modellierten Steinschlaggebietes,Steinschlag,Doline,tatsächliche Ereignisse,Übersichtsplan,Strassenkarte mit Relief,Orthofoto",
          "updateInterval": "occasional",
          "responsible": "Amt für Umwelt",
          "tags": "Naturgefahrenhinweiskarte",
          "switcher": false,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 300,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null
    },{
          "name": "Naturgefahren",
          "projectpath": "",
          "projectfile": "naturgefahren",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Naturgefahren",
          "updateInterval": "occasional",
          "responsible": "Amt für Umwelt",
          "tags": "Naturgefahren",
          "switcher": false,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 400,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null

    },{
          "name": "Ingeso",
          "projectpath": "",
          "projectfile": "ingeso",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte schwarz-weiss,Ingeso Objekte/ Geotope",
          "updateInterval": "occasional",
          "responsible": "Amt für Umwelt",
          "tags": "Inventar der geowissenschaftlich schützenswerten Objekte Kanton Solothurn Ingeso",
          "switcher": false,
          "sogistooltipwidth" : "500",
          "sogistooltipheight" : "350",
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip"
    }]  
  },{
    "name": "Amt für Landwirtschaft",
    "projects": [{
          "name": "Bienenstandorte",
          "projectpath": "",
          "projectfile": "bienenstandorte",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Bienenstandorte,Streptomycineinsatz,Feuerbrand Schutzobjekte,Gemeindegrenzen,Grundkarte",
          "updateInterval": "occasional",
          "responsible": "Amt für Landwirtschaft",
          "tags": "Bienenstandorte",
          "switcher": true,
          "searchtables": "qwebclient.search_bienenstnr",
          "sogissearchhint": "- Bienenstandorte: <b>bienen</b>",
          "sogistooltipwidth" : 400,
          "sogistooltipheight" : 300,
          "sogisbuttons" : ['measureDistance','measureArea','SendPermalink','PrintMap','IdentifyTool'],
          "sogisdefaultbutton" : "IdentifyTool",
          "sogismaxscale" : null
    }]  
  },{
    "name": "Amt für Raumplanung",
    "projects": [{
          "name": "Nutzungszonen",
          "projectpath": "",
          "projectfile": "nutzungszonen",
          "format": "image/jpeg", //only active after switching, initial def in GetUrlParams.js
          "fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Nutzungszonen,Orthofoto,Gemeindegrenzen,Ortsplan",
          "updateInterval": "occasional",
          "responsible": "Amt für Raumplanung",
          "tags": "Nutzungszonen",
          "switcher": false,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 400,
          "sogistooltipheight" : 300,
          "sogisbuttons" : ['measureDistance','measureArea','SendPermalink','PrintMap','IdentifyTool'],
          "sogisdefaultbutton" : "IdentifyTool",
          "sogismaxscale" : null
 
    },{
          "name": "Inventarplan Wanderwege",
          "projectpath": "",
          "projectfile": "wanderwege",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte schwarz-weiss,Wanderwege",
          "updateInterval": "occasional",
          "responsible": "Amt für Raumplanung",
          "tags": "Inventarplan Wanderwege",
          "switcher": false,
          "sogistooltipwidth" : "500",
          "sogistooltipheight" : "350",
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip"
    }]
  },{
    "name": "Gemeinden",
    "projects": [{
          "name": "Leitungskataster",
          "projectpath": "",
          "projectfile": "gemeindegis",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Amtliche Vermessung,Wasser,Abwasser,Elektro",
          "updateInterval": "occasional",
          "responsible": "Gemeinden Kanton SO",
          "tags": "Leitungskataster,GemeindeGIS",
          "switcher": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 300,
          "sogisbuttons" : ['measureDistance','measureArea','SendPermalink','PrintMap','IdentifyTool'],
          "sogisdefaultbutton" : "IdentifyTool",
          //"sogismaxscale" : 50000
          "sogismaxscale" : null

    }]
  },{
    "name": "Amt für Verkehr und Tiefbau",
    "projects": [{
          "name": "Verkehrsmodell 2010",
          "projectpath": "",
          "projectfile": "verkehrsmodell2010",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte",
          "updateInterval": "occasional",
          "responsible": "Amt für Verkehr und Tiefbau",
          "tags": "Meine Tags",
          "switcher": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 450,
          "sogistooltipheight" : 400,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null

    }]
 }]
};
