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
var arr_SOGISButtons = ['measureDistance','measureArea','PrintMap','SendPermalink','IdentifyTool','ShowHelp'];
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
      "name": "Grundlagen und Planung",
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
          "switcher": false,
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
          "sogisbuttons" : ['measureDistance','measureArea','SendPermalink','PrintMap','IdentifyTool','ShowHelp'],
          "sogisdefaultbutton" : "IdentifyTool",
          "sogismaxscale" : null
    },{
          "name": "Grundbuchplan (wms)",
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
          "visibleLayers": "Hoheitsgrenzsteine,Grundkarte farbig",
          "updateInterval": "occasional",
          "responsible": "Amtliche Vermessung",
          "tags": "Hoheitsgrenzsteine",
          "switcher": true,
          "searchtables": "qwebclient.search_hgs",
          "sogissearchhint": "- Hoheitsgrenzsteine: <b>hgs</b>",
          "sogistooltipwidth" : 400,
          "sogistooltipheight" : 300,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null
    },{
          "name": "Nutzungszonen im Siedlungsgebiet",
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
          "sogisbuttons" : ['measureDistance','measureArea','SendPermalink','PrintMap','IdentifyTool','ShowHelp'],
          "sogisdefaultbutton" : "IdentifyTool",
          "sogismaxscale" : null,
		  "wmtsLayers": [
				{
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "Orthofoto",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "Orthofoto",
						"url": "http://www.sogis1.so.ch/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Orthofoto",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "21781",
                        "zoomOffset": 16,
						"format": "image/jpeg",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:21781'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(420000, 350000),
                        "resolutions": [250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5, 0.25, 0.1],
                        "visibility": true,
                        "isBaseLayer": true,
                        "formatSuffix": "jpeg"
					}
				},{
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "< 1:20'000 Strassenkarte",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "Strassenkarte",
						"url": "http://www.sogis1.so.ch/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Strassenkarte_sw",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "21781",
                        "zoomOffset": 16,
						"format": "image/jpeg",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:21781'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(420000, 350000),
                        "resolutions": [250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5, 0.25, 0.1],
                        "formatSuffix": "jpeg"
                     }
				}]
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
    "name": "Natur und Umwelt",
    "projects": [{
          "name": "Neophyten",
          "projectpath": "",
          "projectfile": "neophyten",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "2011 Pflanzenliste,2012 Pflanzenliste,2013 Pflanzenliste,2014 Pflanzenliste,Gemeindegrenzen,Orthofoto",
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
          "visibleLayers": "Bohrung,Bohrung mit Piezometer,Baggerschlitz,Gerammtes Piezometer,Sodbrunnen,\
Horizontalfilterbrunnen,Vertikalfilterbrunnen,Quelle gefasst,Quelle ungefasst,Versickerungsschacht,\
Erdsonde,Erdkollektor,Entnahmeschacht für eine Grundwasserwärmenutzung,Gemeindegrenzen,Grundwasser (HGW),\
Fliessgewässer,Orthofoto",
          "updateInterval": "occasional",
          "responsible": "Amt für Umwelt",
          "tags": "Grundwasserbewirtschaftung",
          "switcher": true,
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
          "sogistooltipwidth" : 940,
          "sogistooltipheight" : 500,
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
    "name": "Bevölkerung und Wirtschaft",
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
          "sogisbuttons" : ['measureDistance','measureArea','SendPermalink','PrintMap','IdentifyTool','ShowHelp'],
          "sogisdefaultbutton" : "IdentifyTool",
          "sogismaxscale" : null
    },{
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
          "sogisbuttons" : ['measureDistance','measureArea','SendPermalink','PrintMap','IdentifyTool','ShowHelp'],
          "sogisdefaultbutton" : "IdentifyTool",
          //"sogismaxscale" : 50000
          "sogismaxscale" : null

    },{
          "name": "Gesamtverkehrsmodell 2010",
          "projectpath": "",
          "projectfile": "gesamtverkehrsmodell2010",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte,DTV 2010 gesamt",
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
