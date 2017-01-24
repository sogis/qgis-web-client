var default_buttons_seperators = [
                            'sogistooltip',
                            'measureDistance',
                            'measureArea',
                            'PrintMap',
                            'SendPermalink',
                            'ShowHelp',
                            'ExportMap'
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
var bolSOGISWMSServiceInfo = false;

// definition of WMTS-Layers
var wmts_layer_orthofoto = 	{
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "Orthofoto",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "Orthofoto",
						"url": "http://geoweb-t.rootso.org/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Orthofoto",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "2056",
                        "zoomOffset": 16,
						"format": "image/jpeg",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:2056'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(2420000.0, 1350000.0),
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
						"url": "http://geoweb-t.rootso.org/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Strassenkarte_sw",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "2056",
                        "zoomOffset": 16,
						"format": "image/jpeg",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:2056'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(2420000.0, 1350000.0),
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
						"url": "http://geoweb-t.rootso.org/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Strassenkarte_farbig",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "2056",
                        "zoomOffset": 16,
						"format": "image/jpeg",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:2056'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(2420000.0, 1350000.0),
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
						"url": "http://geoweb-t.rootso.org/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Basisplan_sw",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "2056",
                        "zoomOffset": 16,
						"format": "image/png",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:2056'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(2420000.0, 1350000.0),
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
						"url": "http://geoweb-t.rootso.org/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Basisplan_farbig",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "2056",
                        "zoomOffset": 16,
						"format": "image/png",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:2056'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(2420000.0, 1350000.0),
                        "resolutions": [250.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.5, 2.0, 1.5, 1.0, 0.5, 0.25, 0.1],
                        "formatSuffix": "png"
                     }
				}

var gis_projects = {
  "path": "/map", /* DEPLOY !!! */
  "mapserver": "/wms",
  "thumbnails": "/thumbnails",
  "title": "SO!GIS",
  "topics": [{
      "name": "Grundlagen und Planung",
      "projects": [{
          "name": "Agglomerationsprogramm",
          "projectpath": "",
          "projectfile": "agglo",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Massnahmen,Grundkarte",
          "updateInterval": "",
          "responsible": "Amt für Raumplanung",
          "tags": "Agglomerationsprogramm",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 300,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : 3000,
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
				]
   
    },{        
          "projectpath": "",
          "projectfile": "gebaeudeadressen",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gebäudeeingang,Hausnummer,Verbindungslinie,Lokalisation,PLZ / Ortschaft,Gemeindegrenzen,Grundkarte",
          "updateInterval": "",
          "responsible": "Amtliche Vermessung",
          "tags": "Gebäudeadressen",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 420, 
          "sogistooltipheight" : 300, 
          "sogisbuttons" : ['measureDistance','measureArea','SendPermalink','PrintMap','sogistooltip','ShowHelp'],
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "Gebäudeadressen",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
                ] 
   },{
          "projectpath": "",
          "projectfile": "av_gb_abgleich",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gebäudeeingang,Hausnummer,Verbindungslinie,Lokalisation,PLZ / Ortschaft,Gemeindegrenzen,Grundkarte",
          "updateInterval": "",
          "responsible": "Amtliche Vermessung",
          "tags": "Abgleich GB AV",
          "switcher": false,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 420, 
          "sogistooltipheight" : 300, 
          "sogisbuttons" : ['measureDistance','measureArea','SendPermalink','PrintMap','sogistooltip','ShowHelp'],
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "av_gb_abgleich",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
          ] 
   },{
          "projectpath": "",
          "projectfile": "av_kaso_abgleich",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Übersicht, Gemeindegrenzen, Grundkarte",
          "updateInterval": "",
          "responsible": "Amtliche Vermessung",
          "tags": "Abgleich KASO AV",
          "switcher": false,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 420, 
          "sogistooltipheight" : 300, 
          "sogisbuttons" : ['measureDistance','measureArea','SendPermalink','PrintMap','sogistooltip','ShowHelp'],
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "av_kaso_abgleich",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
          ]   
    },{
          "projectpath": "",
          "projectfile": "hoheitsgrenzsteine",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Hoheitsgrenzsteine,Gemeindegrenzen,Grundkarte",
          "updateInterval": "",
          "responsible": "Amt für Geoinformation",
          "tags": "Hoheitsgrenzsteine",
          "switcher": true,
          "sogiswmsserviceinfo": true,
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
          "name": "LIDAR",
          "projectpath": "",
          "projectfile": "lidar",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "LIDAR-Daten-Index,Digitales Oberflächenmodell (DOM)",
          "updateInterval": "",
          "responsible": "Amt für Geoinformation",
          "tags": "Lidar",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 550,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_farbig,
                wmts_layer_basisplan_farbig
				]
        },{
          "projectpath": "",
          "projectfile": "mocheckso",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen",
          "updateInterval": "",
          "responsible": "Amtliche Vermessung",
          "tags": "Mocheckso",
          "switcher": false,
          "sogiswmsserviceinfo": true,
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
          "updateInterval": "",
          "responsible": "Amtliche Vermessung",
          "tags": "Nomenklatur",
          "switcher": false,
          "sogiswmsserviceinfo": true,
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
          "visibleLayers": "Nutzungszonen,Grundkarte,Gemeindegrenzen",
          "updateInterval": "",
          "responsible": "Amt für Raumplanung",
          "tags": "Nutzungszonen",
          "switcher": true,
          "sogiswmsserviceinfo": true,
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
          "updateInterval": "",
          "responsible": "Amtliche Vermessung",
          "tags": "Grundbuchplan",
          "switcher": false,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 400,
          "sogistooltipheight" : 300,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null
    },{
          "name": "Ortsplan Kanton Solothurn",
          "projectpath": "",
          "projectfile": "ortsplan",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          "fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Grundkarte,Gemeindegrenzen,Ortsplan",
          "updateInterval": "",
          "responsible": "Amt für Geoinformation",
          "tags": "Ortsplan",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 300,
          "sogistooltipheight" : 400,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
		  		"wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_farbig
				]
    },{
          "projectpath": "",
          "projectfile": "grundbuchplan-nf",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Baulinien,Amtliche Vermessung (schwarz-weiss),Strassenkarte",
          "updateInterval": "täglich",
          "responsible": "Amtliche Vermessung",
          "tags": "Grundbuchplan",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 400,
          "sogistooltipheight" : 300,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefultbutton" : "sogistooltip",
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
						"url": "http://geoweb-t.rootso.org/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Strassenkarte_farbig",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "2056",
                        "zoomOffset": 16,
						"format": "image/jpeg",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:2056'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(2420000.0, 1350000.0),
                        "resolutions": [250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5, 0.25, 0.1],
                        "formatSuffix": "jpeg"
                     }
				},{
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "Basisplan (schwarz-weiss)",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "Basisplan",
						"url": "http://geoweb-t.rootso.org/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Basisplan_sw",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "2056",
                        "zoomOffset": 16,
						"format": "image/png",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:2056'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(2420000.0, 1350000.0),
                        "resolutions": [250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5, 0.25, 0.1],
                        "formatSuffix": "png"
                     }
				},{
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "Basisplan (farbig)",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "Basisplan",
						"url": "http://geoweb-t.rootso.org/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Basisplan_farbig",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "2056",
                        "zoomOffset": 16,
						"format": "image/png",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:2056'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(2420000.0, 1350000.0),
                        "resolutions": [250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5, 0.25, 0.1],
                        "formatSuffix": "png"
                     }
				}
				]
    },
    {
          "projectpath": "",
          "projectfile": "grundbuchplan-nf-test",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Baulinien,Amtliche Vermessung (schwarz-weiss),Strassenkarte",
          "updateInterval": "täglich",
          "responsible": "Amtliche Vermessung",
          "tags": "Grundbuchplan",
          "switcher": false,
          "sogiswmsserviceinfo": true,
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
						"url": "http://geoweb-t.rootso.org/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Strassenkarte_farbig",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "2056",
                        "zoomOffset": 16,
						"format": "image/jpeg",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:2056'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(2420000, 1350000),
                        "resolutions": [250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5, 0.25, 0.1],
                        "formatSuffix": "jpeg"
                     }
				},{
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "Basisplan (schwarz-weiss)",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "Basisplan",
						"url": "http://geoweb-t.rootso.org/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Basisplan_sw",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "2056",
                        "zoomOffset": 16,
						"format": "image/png",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:2056'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(2420000, 1350000),
                        "resolutions": [250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5, 0.25, 0.1],
                        "formatSuffix": "png"
                     }
				},{
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "Basisplan (farbig)",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "Basisplan",
						"url": "http://geoweb-t.rootso.org/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Basisplan_farbig",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "2056",
                        "zoomOffset": 16,
						"format": "image/png",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:2056'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(2420000, 1350000),
                        "resolutions": [250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5, 0.25, 0.1],
                        "formatSuffix": "png"
                     }
				}
				]
    },{
          "name": "Richtplankarte",
          "projectpath": "",
          "projectfile": "richtplan",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundnutzung,Überlagerte Nutzung,Einzelobjekte,Grundkarte",
          "updateInterval": "",
          "responsible": "Amt für Raumplanung",
          "tags": "Richtplan",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 300,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : 18000,
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
				]
   },{
          "name": "Anhörung Richtplan 2015",
          "projectpath": "",
          "projectfile": "richtplan_anhoerung2015",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "",
          "updateInterval": "",
          "responsible": "Amt für Raumplanung",
          "tags": "Richtplan",
          "switcher": false,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 300,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : 18000
          //"wmtsLayers": []
   }

]
  },{
/* NATUR UND UMWELT *************************************************************************************** */
    "name": "Natur und Umwelt",
    "projects": [{
          "name": "Baugrundklassen nach SIA 261",
          "projectpath": "",
          "projectfile": "baugrundklassen",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Baugrundklassen,Grundkarte",
          "updateInterval": "",
          "responsible": "Amt für Umwelt",
          "tags": "Baugrundklassen",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 650,
          "sogistooltipheight" : 420,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : 9000,
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_basisplan_sw,
                wmts_layer_strassenkarte_sw
         ]
    },{
          "name": "Bodeninformationen Kanton Solothurn",
          "projectpath": "",
          "projectfile": "isboden",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Bodentypen,Profilstandorte,Grundkarte,Gemeindegrenzen",
          "updateInterval": "",
          "responsible": "Amt für Umwelt",
          "tags": "Bodeninformationen Kanton Solothurn",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 400,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
         ]

    },{
          "name": "Fischereireviere ",
          "projectpath": "",
          "projectfile": "fischrev",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Fischereireviere,Gewässer,Grundkarte,Gemeindegrenzen,Übersicht Wald",
          "updateInterval": "",
          "responsible": "Amt für Wald, Jagd und Fischerei",
          "tags": "Fischereireviere",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "qwebclient.search_revierid, qwebclient.search_gewaesser",
          "sogissearchhint": "- Revier-ID: <b>revierid</b> </br> - Gewässername: <b>gwname</b>",
          "sogistooltipwidth" : 600, 
          "sogistooltipheight" : 400, 
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
         ]    
    },{
          "name": "Forstliche Grundlagendaten",
          "projectpath": "",
          "projectfile": "wald",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Übersicht Wald,Grundkarte schwarz-weiss",
          "updateInterval": "",
          "responsible": "Amt für Wald, Jagd und Fischerei",
          "tags": "Forstliche Grundlagendaten",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 400,
          "sogistooltipheight" : 600,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_farbig,
                wmts_layer_basisplan_farbig,
                {
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "< 1:20'000 Strassenkarte s/w",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "Strassenkarte",
						"url": "http://geoweb-t.rootso.org/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Strassenkarte_sw",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "2056",
                        "zoomOffset": 16,
						"format": "image/jpeg",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:2056'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(2420000.0, 1350000.0),
                        "resolutions": [250.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.5, 2.0, 1.5, 1.0, 0.5, 0.25, 0.1],
                        "formatSuffix": "jpeg"
                    }
                },{
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "> 1:20'000 Basisplan s/w",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "Basisplan",
						"url": "http://geoweb-t.rootso.org/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Basisplan_sw",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "2056",
                        "zoomOffset": 16,
						"format": "image/png",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:2056'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(2420000.0, 1350000.0),
                        "resolutions": [250.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.5, 2.0, 1.5, 1.0, 0.5, 0.25, 0.1],
                        "formatSuffix": "png"
                     }
            }
         ]
        },{
          "projectpath": "",
          "projectfile": "geologie",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Fliessgewässer,Gemeindegrenzen,Parzellen,Schichtfallen,Abrisskanten,Karst,Tektonische Strukturen,Holozän,Pleistozän,Grundschicht,Basisplan (WMS),Grundkarte",
          "updateInterval": "",
          "responsible": "Amt für Umwelt",
          "tags": "Geologie",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 300,
          "sogisbuttons" : ['measureDistance','measureArea','SendPermalink','PrintMap','sogistooltip','ShowHelp'],
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "Geologische Karte",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
                ]
       },{  
      "projectpath": "",
          "projectfile": "pruefperimeter",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Strasse,Eisenbahn,Flugplatz,Schiessanlage,Korrosionsgeschützte Objekte,Familiengarten,"
        + "Gärtnerei,Rebbaugebiet,Hopfenbaugebiet,Siedlungsgebiet,Bodenbelastungsgebiet,Gemeindegrenzen,Basisplan sw,Grundkarte",
          //"format": "image/png; mode=8bit",
          "fullColorLayers" : "Orthofoto",
          "updateInterval": "",
          "responsible": "Amt für Umwelt",
          "tags": "Pruefperimeter",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600, 
          "sogistooltipheight" : 400, 
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : 1800,
          "name": "Prüfperimeter Bodenabtrag",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
                ]    
    },{  
          "projectpath": "",
          "projectfile": "sorkas",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Betriebe,Nationalstrassen,Durchgangsstrassen,Gasleitungen,Eisenbahn,Gemeindegrenzen,Konsultationsbereiche,Grundkarte schwarz-weiss",
          //"format": "image/png; mode=8bit",
          "fullColorLayers" : "Orthofoto",
          "updateInterval": "",
          "responsible": "Amt für Umwelt",
          "tags": "SORKAS",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600, 
          "sogistooltipheight" : 400, 
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "Gefahrenhinweiskarte Störfälle",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
                ]    
       },{
          "projectpath": "",
          "projectfile": "gs",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Schutzzonen und -areale,Fliessgewässer  ,Gewässerschutzbereiche,Grundkarte,Gemeindegrenzen",
          "updateInterval": "",
          "responsible": "Amt für Umwelt",
          "tags": "Gewässerschutzkarte, Grundwasserkarte",
          "switcher": true,
          "searchtables": "",
	  "sogiswmsserviceinfo": true,
          "sogissearchhint": "",
          "sogistooltipwidth" : 400,
          "sogistooltipheight" : 300,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "Gewässerschutz- und Grundwasserkarte",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_basisplan_sw,
                wmts_layer_strassenkarte_sw
				]
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
          "updateInterval": "",
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
						"url": "http://geoweb-t.rootso.org/mapcache/wmts",
                        "requestEncoding": "REST",
						"layer": "Basisplan_sw",
                        "visibility": "True",
                        "isBaseLayer": "False",
						"matrixSet": "2056",
                        "zoomOffset": 16,
						"format": "image/png",
                        "buffer": 0,
                        "transitionEffect": "resize",
						"style": "default",
                        "projection" : new OpenLayers.Projection('EPSG:2056'),
                        "version": "1.0.0",
                        "tileOrigin": new OpenLayers.LonLat(2420000, 1350000),
                        "resolutions": [250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5, 0.25, 0.1],
                        "formatSuffix": "png"
                     }
				}
				]
    },{
          "name": "Inventar der geowissenschaftlich schützenswerten Objekte Kanton Solothurn (Ingeso) ",
          "projectpath": "",
          "projectfile": "ingeso",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte,Ingeso Objekte/ Geotope",
          "updateInterval": "",
          "responsible": "Amt für Umwelt",
          "tags": "Inventar der geowissenschaftlich schützenswerten Objekte Kanton Solothurn Ingeso",
          "switcher": true,
          "sogiswmsserviceinfo": true,
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
          "updateInterval": "",
          "responsible": "Amt für Raumplanung",
          "tags": "Inventarplan Wanderwege",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "sogistooltipwidth" : "500",
          "sogistooltipheight" : "350",
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_basisplan_sw,
                wmts_layer_strassenkarte_sw
				]
    },{
          "name": "Kataster der belasteten Standorte",
          "projectpath": "",
          "projectfile": "altlast",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Belastete Standorte,Grundkarte,Fliessgewässer ,Belastete Standorte BAV,Belastete Standorte BAZL",
          "updateInterval": "",
          "responsible": "Amt für Umwelt",
          "tags": "Kataster der belasteten Standorte",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 650,
          "sogistooltipheight" : 300,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
         ]

    },{
      "projectpath": "",
          "projectfile": "luftbelastung",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Stickstoffdioxid NO2 2010,Kantons- und Gemeindegrenzen,Grundkarte",
          //"format": "image/png; mode=8bit",
          "fullColorLayers" : "Orthofoto",
          "updateInterval": "",
          "responsible": "Amt für Umwelt",
          "tags": "Luftbelastung",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 400,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : 18000,
          "name": "Luftbelastung",
          "wmtsLayers": [
                //wmts_layer_orthofoto,
                //wmts_layer_basisplan_sw
				]
    },{
          "name": "Naturgefahrenkarten und Gefahrenhinweiskarte",
          "projectpath": "",
          "projectfile": "naturgefahren",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Einzelereignisse,Gefahrenkarte synoptisch,Gemeindegrenzen,Grundkarte",
          "updateInterval": "",
          "responsible": "Amt für Umwelt",
          "tags": "Naturgefahren",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 940,
          "sogistooltipheight" : 500,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_basisplan_sw,
                wmts_layer_strassenkarte_sw
         ]
    },{
      "projectpath": "",
          "projectfile": "neophyten",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Arten und Menge 2016,Gemeindegrenzen,Orthofoto",
          //"format": "image/png; mode=8bit",
          "fullColorLayers" : "Orthofoto",
          "updateInterval": "",
          "responsible": "Amt für Umwel",
          "tags": "Neophyten",
          "switcher": true,
          "sogiswmsserviceinfo": true,
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
    },{
          "name": "Ökomorphologie der Fliessgewässer",
          "projectpath": "",
          "projectfile": "oeko",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Klassierung,Grundkarte",
          "updateInterval": "",
          "responsible": "Amt für Umwelt",
          "tags": "Ökomorphologie der Fliessgewässer",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 800,
          "sogistooltipheight" : 600,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_basisplan_sw,
                wmts_layer_strassenkarte_sw
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
          "updateInterval": "",
          "responsible": "Amt für Landwirtschaft",
          "tags": "Bienenstandorte",
          "switcher": true,
          "sogiswmsserviceinfo": true,
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
                wmts_layer_basisplan_sw,
                wmts_layer_strassenkarte_sw,
				]

    },{
          "projectpath": "",
          "projectfile": "ews",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Fliessgewässer,Gemeindegrenzen,Belastete Standorte,Grundwasserschutzzonen und -areale,Abfrage-Perimeter,Grundstücke,Grundkarte",
          "updateInterval": "",
          "responsible": "Amt für Umwelt",
          "tags": "Meine Tags",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 750,
          "sogistooltipheight" : 500,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "Erdwärmesonden Online-Abfrage",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
				]
    },{
          "projectpath": "",
          "projectfile": "gesamtverkehrsmodell2010",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte,DTV 2010 gesamt",
          "updateInterval": "",
          "responsible": "Amt für Verkehr und Tiefbau",
          "tags": "Gesamtverkehrsmodell 2010",
          "switcher": true,
          "sogiswmsserviceinfo": true,
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
          "projectfile": "oev_netz",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte,Streckennetz 2010",
          "updateInterval": "",
          "responsible": "Amt für Verkehr und Tiefbau",
          "tags": "ÖV Netz",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 450,
          "sogistooltipheight" : 400,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "GVM 2010/2030 ÖV-Netz",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_farbig,
                wmts_layer_basisplan_farbig
				]
    },{
          "projectpath": "",
          "projectfile": "ivs",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte,IVS-Wegbegleiter,IVS-Objekte",
          "updateInterval": "",
          "responsible": "Amt für Raumplanung",
          "tags": "Inventar der historischen Verkehrswege",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 450,
          "sogistooltipheight" : 400,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "Inventar der historischen Verkehrswege",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_farbig,
                wmts_layer_basisplan_farbig
                                ]
    },{
          "projectpath": "",
          "projectfile": "lw_grund",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte",
          "updateInterval": "",
          "responsible": "Amt für Landwirtschaft",
          "tags": "Landwirtschaftliche Grundlagendaten",
          "switcher": true,
          "searchtables": "",
          "sogiswmsserviceinfo": true,
          "sogissearchhint": "",
          "sogistooltipwidth" : 400,
          "sogistooltipheight" : 450,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "Landwirtschaftliche Grundlagendaten",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_basisplan_farbig,
                wmts_layer_strassenkarte_farbig,
				]

    },{
          "projectpath": "",
          "projectfile": "gemeindegis",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Grundkarte,Wasser Leitungsbeschriftung,Wasser Leitung,Abwasser Leitung,Abwasser Leitungsbeschriftung,Elektro,Kein Leitungskataster verfügbar",
          "updateInterval": "",
          "responsible": "Gemeinden Kanton SO",
          "tags": "Leitungskataster,GemeindeGIS",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 600,
          "sogistooltipheight" : 300,
          "sogisbuttons" : ['measureDistance','measureArea','SendPermalink','PrintMap','IdentifyTool','ShowHelp'],
          "sogisdefaultbutton" : "IdentifyTool",
          //"sogismaxscale" : 50000
          "sogismaxscale" : null,
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
          "updateInterval": "",
          "responsible": "Amt für Wirtschaft und Arbeit",
          "tags": "Strom",
          "switcher": true,
          "sogiswmsserviceinfo": true,
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
                wmts_layer_basisplan_sw,
                wmts_layer_strassenkarte_sw
				]
    },{
          "projectpath": "",
          "projectfile": "npkkw",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte,Zoneneinteilung",
          "updateInterval": "",
          "responsible": "Amt für Militär und Bevölkerungsschutz",
          "tags": "Notfallplan KKW",
          "switcher": true,
          "sogiswmsserviceinfo": true,
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
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
				]
    },{
          "projectpath": "",
          "projectfile": "sirenenplanung",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Sirenen, Gemeindegrenzen, Wald, Grundkarte",
          "updateInterval": "",
          "responsible": "Amt für Militär und Bevölkerungsschutz",
          "tags": "Sirenenplanung",
          "switcher": false,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 450,
          "sogistooltipheight" : 400,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "Sirenenplanung",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
				]
    },{
          "projectpath": "",
          "projectfile": "oev",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte,ÖV Haltestellen Kanton Solothurn,ÖV Haltestellen andere Kantone,Öffentlicher Verkehr Kanton Solothurn,Öffentlicher Verkehr andere Kantone",
          "updateInterval": "",
          "responsible": "Amt für Verkehr",
          "tags": "Öffentlicher Verkehr",
          "switcher": true,
          "sogiswmsserviceinfo": true, 
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 450,
          "sogistooltipheight" : 600,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "Öffentlicher Verkehr",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
				]
    },{
          "projectpath": "",
          "projectfile": "oev_guete",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte,Erschliessungsgüte,Haltestellen",
          "updateInterval": "",
          "responsible": "Amt für Raumplanung",
          "tags": "ÖV Gueteklassen",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 450,
          "sogistooltipheight" : 400,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "ÖV-Erschliessungsgüte 2016",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_sw,
                wmts_layer_basisplan_sw
				]
    },{
          "projectpath": "",
          "projectfile": "veza",
          //"format": "image/png; mode=8bit", //only active after switching, initial def in GetUrlParams.js
          //"fullColorLayers" : "Orthofoto", //obsolete
          "visibleLayers": "Gemeindegrenzen,Grundkarte,Kantonsstrassen",
          "updateInterval": "",
          "responsible": "Amt für Verkehr und Tiefbau",
          "tags": "Verkehrszählung 2005 / 2010",
          "switcher": true,
          "sogiswmsserviceinfo": true,
          "searchtables": "",
          "sogissearchhint": "",
          "sogistooltipwidth" : 450,
          "sogistooltipheight" : 400,
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip",
          "sogismaxscale" : null,
          "name": "Verkehrszählung 2005 / 2010",
          "wmtsLayers": [
                wmts_layer_orthofoto,
                wmts_layer_strassenkarte_farbig,
                wmts_layer_basisplan_farbig
				]
    }]
 }]
};
