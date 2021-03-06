var openLayersVectorClickPoint = new OpenLayers.Layer.Vector("ClickPoint");  // create global variable with layer for click point
var openLayersMarkerClickPoint = new OpenLayers.Layer.Markers("ClickPoint2");

// customInit() is called before any map initialization
function customInit() {

    //set project settings 
    //setSOGISProjectSettings();

    // I create a new control click event class
    OpenLayers.Control.Click = OpenLayers.Class(OpenLayers.Control, {
         defaultHandlerOptions: {
                 'single': true,
                 'double': false,
                 'pixelTolerance': 0,
                 'stopSingle': false,
                 'stopDouble': false
         },
         initialize: function(options) {
                 this.handlerOptions = OpenLayers.Util.extend(
                         {}, this.defaultHandlerOptions
                 );
                 OpenLayers.Control.prototype.initialize.apply(
                         this, arguments
                 );
                 this.handler = new OpenLayers.Handler.Click(
                         this, {
                                 'click': this.trigger
                         }, this.handlerOptions
                 );
         }
     });

}

// called before map initialization
function customBeforeMapInit() {
    setProjectSettings();
}

// called before print
function customBeforePrint() {
}

// called when printing is launched
function customAfterPrint() {
    // do something. e.g. rearrange your layers
}

// called after map initialization
function customAfterMapInit() {

    if (typeof(geoExtMap.map.getLayersByName('ClickPoint')[0]) == "undefined"){
        geoExtMap.map.addLayer(openLayersVectorClickPoint);  // add click point layer to map
        geoExtMap.map.addLayer(openLayersMarkerClickPoint);
    }

     // Create a new map control based on Control Click Event
    openlayersClickEvent = new OpenLayers.Control.Click( {
         id: 'sogistooltipcontrol',
         trigger: function(e) {
             Ext.getBody().mask('Abfrage ist erfolgt...', 'x-mask-loading');
             var xy = geoExtMap.map.getLonLatFromViewPortPx(e.xy);
             var x = xy.lon;
             var y = xy.lat;
             var left = Math.round(geoExtMap.map.getExtent().left);
             var bottom = Math.round(geoExtMap.map.getExtent().bottom);
             var right = Math.round(geoExtMap.map.getExtent().right);
             var top = Math.round(geoExtMap.map.getExtent().top);
             var extent = left + ',' + bottom + ',' + right + ',' + top;
             var scale = Math.round(geoExtMap.map.getScale());
             
             
             // we want opaque external graphics and non-opaque internal graphics
             var click_point_style = new OpenLayers.Style({
                'fillColor': '#000000',
                'fillOpacity': 0.2,
                'strokeColor': '#00000000',
                'strokeWidth': 1,
                'pointRadius': 2

             });
             var click_point_style_map = new OpenLayers.StyleMap({
                'default': click_point_style
             });
             
             point = new OpenLayers.Geometry.Point(x, y);
             openLayersVectorClickPoint.styleMap = click_point_style_map;
             openLayersVectorClickPoint.removeAllFeatures(); // remove click point
             openLayersVectorClickPoint.addFeatures([new OpenLayers.Feature.Vector(point)]);


             // marker
             var size = new OpenLayers.Size(11,23);
             var offset = new OpenLayers.Pixel(-(size.w/2 - 4), -size.h);
             var icon = new OpenLayers.Icon('img/stecknadel.png', size, offset);
             openLayersMarkerClickPoint.clearMarkers(); // remove click point on map
             openLayersMarkerClickPoint.addMarker(new OpenLayers.Marker(new OpenLayers.LonLat(x, y), icon));
            

             Ext.Ajax.request({
                isLoading: true,
                url:  strSOGISTooltipURL + getProject() + '/', // URL to the SOGIS tooltip
                params: {
                    'x': x, 
                    'y': y,
                    'scale': scale,
                    'extent': extent,
                    'visiblelayers': selectedLayers.toString()
                },
                method: 'GET',
                failure: function(){
                    Ext.getBody().unmask();
                },
                success: function(response){
                    if (Ext.getCmp('IdentifyTool').hidden){ // TODO: better
                        showTooltip(response.responseText); 
                        Ext.getBody().unmask();
                    }
                }
             });
         }
     });

    // unregister tooltip after theme switching
    for (var i=0;i<geoExtMap.map.controls.length; i++){
        if ( geoExtMap.map.controls[i].id == "sogistooltipcontrol" ){
            geoExtMap.map.controls[i].destroy();
        }
    }

    // remove click features after layer switching
    openLayersVectorClickPoint.removeAllFeatures(); // remove click point on map
    openLayersMarkerClickPoint.clearMarkers(); // remove click point on map
 
    geoExtMap.map.addControl(openlayersClickEvent);
    initSOGISProjects(); //INIT SOGIS PROJECT
    //geoExtMap.map.zoomTo(1); //initial zoom


     // show ThemeSwitcher when variable - value showThemeSwitcher=true
    if (urlParams.showThemeSwitcher != null){
        if ( urlParams.showThemeSwitcher == 'true' || urlParams.showThemeSwitcher == 'True' ) {
            mapThemeSwitcher.initialize();
            urlParams.showThemeSwitcher = 'false'; // to prevent after theme has been swichted
        }
    }
}

// called at the end of GetMapUrls
function customAfterGetMapUrls() {
}

function customPostLoading() {
}

customButtons = [ 
    // Add a separator and a button
    {
        xtype: 'tbseparator',
        id: 'separator5'
    }, {
        xtype: 'button',
        enableToggle: true,
        allowDepress: true,
        toggleGroup: 'mapTools',
        scale: 'medium',
        icon: 'gis_icons/mActionIdentify.png',
        tooltipType: 'qtip',
        tooltip: "Tooltip - Zum Abfragen auf Kartenobjekt klicken",
        id: 'sogistooltip'
        }
];  

// code to add buttons in the toolbar
function customToolbarLoad() {
    Ext.getCmp('sogistooltip').toggleHandler = mapToolbarHandler;
}



// called when an event on toolbar is invoked
function customMapToolbarHandler(btn, evt) {
     // Check if the button is pressed or unpressed
     if (btn.id == "sogistooltip") {
         if (btn.pressed) {
              //alert ( "You clicked on Test Button!" );
              openlayersClickEvent.activate();
         }
         else
         {
              //alert ( "TEST button is toggled up!" );
              openlayersClickEvent.deactivate();
         }
     }

    if (btn.id != "sogistooltip" && btn.id != "IdentifyTool"){
        if (!btn.pressed && strSOGISDefaultButton == "sogistooltip") {
            Ext.getCmp("sogistooltip").toggle(true);
        }
    }
}

// called when the user clicks on a check in layerTree.
// n is a Ext.TreeNode object
function customActionLayerTreeCheck(n) {
//    if (n.text == "test layer") {
//        alert ("test layer check state:" + n.attributes.checked);
//    }
}


// called when the user zooms.
function customActionOnZoomEvent() {
	// NOTE: if you define customActionOnMoveEvent() (see below)
	// that function is called during zooms, too!

	// ... action to do on call
}

// called after a drag, pan, or zoom completed
function customActionOnMoveEvent() {
	// ... action to do on call
}
