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
var bolSOGISWMSServiceInfo = false;
var strSOGISMaxScale = null;
var strSOGISSearchHelpText = '';

// definition of WMTS-Layers
var wmts_layer_orthofoto = 	{
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
                        "tileOrigin": new OpenLayers.LonLat(420000.0, 350000.0),
                        "resolutions": [250.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.5, 2.0, 1.5, 1.0, 0.5, 0.25, 0.1],
                        "isBaseLayer": true,
                        "formatSuffix": "jpeg"
					}
                }

var wmts_layer_strassenkarte_sw = {
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
                        "tileOrigin": new OpenLayers.LonLat(420000.0, 350000.0),
                        "resolutions": [250.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.5, 2.0, 1.5, 1.0, 0.5, 0.25, 0.1],
                        "formatSuffix": "jpeg"
                     }
				}

var wmts_layer_strassenkarte_farbig = {
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "< 1:20'000 Strassenkarte",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "Strassenkarte",
						"url": "http://www.sogis1.so.ch/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Strassenkarte_farbig",
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
                        "tileOrigin": new OpenLayers.LonLat(420000.0, 350000.0),
                        "resolutions": [250.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.5, 2.0, 1.5, 1.0, 0.5, 0.25, 0.1],
                        "formatSuffix": "jpeg"
                     }
				}

var wmts_layer_basisplan_sw = {
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "> 1:20'000 Basisplan",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "Basisplan",
						"url": "http://www.sogis1.so.ch/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Basisplan_sw",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "21781",
                        "zoomOffset": 16,
						"format": "image/png",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:21781'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(420000.0, 350000.0),
                        "resolutions": [250.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.5, 2.0, 1.5, 1.0, 0.5, 0.25, 0.1],
                        "formatSuffix": "png"
                     }
				}

var wmts_layer_basisplan_farbig = {
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "> 1:20'000 Basisplan",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "Basisplan",
						"url": "http://www.sogis1.so.ch/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Basisplan_farbig",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "21781",
                        "zoomOffset": 16,
						"format": "image/png",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:21781'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(420000.0, 350000.0),
                        "resolutions": [250.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.5, 2.0, 1.5, 1.0, 0.5, 0.25, 0.1],
                        "formatSuffix": "png"
                     }
				};

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
          
    },
    {
          "projectpath": "",
          "projectfile": "hoheitsgrenzsteine",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Hoheitsgrenzsteine,Grundkarte",
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
          "sogismaxscale" : null,
          "name": "Hoheitsgrenzsteine Kt. SO",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_farbig,
                wmts_layer_basisplan_farbig
				]

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
          "sogismaxscale" : null,
          "name": "MOCHECKSO ERROR und Warning",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
				]
    },{
          "projectpath": "",
          "projectfile": "nomenklatur",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Grundkarte,Geländenamen (AV),Flurnamen (AV)",
          "updateInterval": "occasional",
          "responsible": "Amtliche Vermessung",
          "tags": "nomenklatur",
          "switcher": false,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 300,
          "sogisbuttons" : ['measureDistance','measureArea','SendPermalink','PrintMap','ShowHelp'],
          "sogisdefaultbutton" : "", // no tooltip at all
          "sogismaxscale" : null,
          "name": "Nomenklatur",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
				]
    },{
          "projectpath": "",
          "projectfile": "nutzungszonen",
          "fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Nutzungszonen,Orthofoto,Gemeindegrenzen,Ortsplan",
          "updateInterval": "occasional",
          "responsible": "Amt für Raumplanung",
          "tags": "Nutzungszonen",
          "switcher": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 400,
          "sogistooltipheight" : 300,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "Nutzungszonen im Siedlungsgebiet",
		  "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
				]
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
          "sogismaxscale" : null,
          "name": "Plan für das Grundbuch",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                {
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "Strassenkarte",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "Strassenkarte",
						"url": "http://www.sogis1.so.ch/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Strassenkarte_farbig",
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
				},{
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "Basisplan (schwarz-weiss)",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "Basisplan",
						"url": "http://www.sogis1.so.ch/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Basisplan_sw",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "21781",
                        "zoomOffset": 16,
						"format": "image/png",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:21781'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(420000, 350000),
                        "resolutions": [250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5, 0.25, 0.1],
                        "formatSuffix": "png"
                     }
				},{
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "Basisplan (farbig)",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "Basisplan",
						"url": "http://www.sogis1.so.ch/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Basisplan_farbig",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "21781",
                        "zoomOffset": 16,
						"format": "image/png",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:21781'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(420000, 350000),
                        "resolutions": [250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5, 0.25, 0.1],
                        "formatSuffix": "png"
                     }
				}
				]
    }]
  },{
    "name": "Natur und Umwelt",
    "projects": [{
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
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 1000,
          "sogistooltipheight" : 350,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "Grundwasserbewirtschaftung",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                {
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "Basisplan",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "Basisplan",
						"url": "http://www.sogis1.so.ch/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Basisplan_sw",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "21781",
                        "zoomOffset": 16,
						"format": "image/png",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:21781'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(420000, 350000),
                        "resolutions": [250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5, 0.25, 0.1],
                        "formatSuffix": "png"
                     }
				}
				]
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
          "name": "Naturgefahren Hinweiskarte",
          "projectpath": "",
          "projectfile": "natgef",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Überflutungsgebiete,sehr flache Talböden ausserhalb der modellierten Überflutungsbereiche: Überflutung kann nicht ausgeschlossen werden,Übersarung / Schwemmkegel,Murgang,bekannte Ereignisse ausserhalb des modellierten Steinschlaggebietes,Steinschlag,Doline,tatsächliche Ereignisse,Übersichtsplan,Strassenkarte mit Relief,Orthofoto",
          "updateInterval": "occasional",
          "responsible": "Amt für Umwelt",
          "tags": "Naturgefahren Hinweiskarte",
          "switcher": false,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 300,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
				]

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
          "name": "Inventar der geowissenschaftlich schützenswerten Objekte Kanton Solothurn (Ingeso) ",
          "projectpath": "",
          "projectfile": "ingeso",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte,Ingeso Objekte/ Geotope",
          "updateInterval": "occasional",
          "responsible": "Amt für Umwelt",
          "tags": "Inventar der geowissenschaftlich schützenswerten Objekte Kanton Solothurn Ingeso",
          "switcher": true,
          "sogistooltipwidth" : "500",
          "sogistooltipheight" : "350",
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
				]
    },{
          "name": "Inventarplan Wanderwege",
          "projectpath": "",
          "projectfile": "wanderwege",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte,Wanderwege,Grundstücke",
          "updateInterval": "occasional",
          "responsible": "Amt für Raumplanung",
          "tags": "Inventarplan Wanderwege",
          "switcher": true,
          "sogistooltipwidth" : "500",
          "sogistooltipheight" : "350",
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_basisplan_farbig,
                wmts_layer_strassenkarte_farbig,
				]
    },{
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
          "sogismaxscale" : null,
          "name": "Neophyten",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
				]
    }]  
  },{
    "name": "Bevölkerung und Wirtschaft",
    "projects": [{
          "projectpath": "",
          "projectfile": "bienenstandorte",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Bienenstandorte,Sperrgebiete aktuelles Jahr,Streptomycineinsatz,Feuerbrand Schutzobjekte,Gemeindegrenzen,Grundkarte,Grundstücke,Feuerbrand Schutzperimeter (inkl. Streptomycinbewilligungen)",
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
          "sogismaxscale" : null,
          "name": "Bienenstandorte und Sperrgebiete",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_basisplan_farbig,
                wmts_layer_strassenkarte_farbig,
				]

    },{
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
          "sogismaxscale" : null,
          "name": "Gesamtverkehrsmodell 2010",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_farbig,
                wmts_layer_basisplan_farbig
				]
    },{
          "projectpath": "",
          "projectfile": "gemeindegis",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Grundkarte,Wasser Leitungsbeschriftung,Wasser Leitung,Abwasser Leitung,Abwasser Leitungsbeschriftung,Elektro",
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
          "sogismaxscale" : 50000,
          //"sogismaxscale" : null,
          "name": "Leitungskataster",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_basisplan_farbig,
                wmts_layer_strassenkarte_farbig,
				]

    },{
          "projectpath": "",
          "projectfile": "strom",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte,Netzbetreiber Ebene 3",
          "updateInterval": "occasional",
          "responsible": "Amt für Wirtschaft und Arbeit",
          "tags": "Meine Tags",
          "switcher": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 450,
          "sogistooltipheight" : 400,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "Netzbetreiber Strom im Kanton Solothurn",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_farbig,
                wmts_layer_basisplan_farbig
				]
    },{
          "projectpath": "",
          "projectfile": "npkkw",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte,Zoneneinteilung",
          "updateInterval": "occasional",
          "responsible": "Amt für Militär und Bevölkerungsschutz",
          "tags": "Meine Tags",
          "switcher": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 450,
          "sogistooltipheight" : 400,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "Notfallplanung KKW",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_farbig,
                wmts_layer_basisplan_farbig
				]
    },{
          "projectpath": "",
          "projectfile": "oev_guete",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte,Erschliessungsgüte,Haltestellen",
          "updateInterval": "occasional",
          "responsible": "Amt für Raumplanung",
          "tags": "Meine Tags",
          "switcher": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 450,
          "sogistooltipheight" : 400,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "ÖV-Erschliessungsgüte",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_farbig,
                wmts_layer_basisplan_farbig
				]
    }]
 }]
};
