var servername = "http://" + location.href.split(/\/+/)[1];
var strSOGISTooltipURL = servername + '/sogis/qgis-web-tooltip/'; // URL to the SOGIS tooltip
var strSOGISTooltipURL = servername + '/sogis/qgis-web-tooltip-lv95/'; // TODO: Delete after testing LV95
var origPrintCapabilities = printCapabilities;

var cursorX; // global var holding cursor position
var cursorY;

Ext.override(Ext.data.Connection, { timeout: 240000 });
Ext.Ajax.timeout = 240000;

function setProjectSettings() {
    strSOGISSearchHelpText = '';
    //get sogis settings
    for (var i=0;i<gis_projects.topics.length; i++){
        for (var j=0;j<gis_projects.topics[i].projects.length; j++){
            if ( gis_projects.topics[i].projects[j].projectfile == getProject() ){
                SOGISSettings = gis_projects.topics[i].projects[j]
                intSOGISTooltipWidth = SOGISSettings.sogistooltipwidth;
                intSOGISTooltipHeight = SOGISSettings.sogistooltipheight;
                arr_SOGISButtons = SOGISSettings.sogisbuttons;
                strSOGISDefaultButton = SOGISSettings.sogisdefaultbutton;
                strSOGISMaxScale = SOGISSettings.sogismaxscale;
                searchtables = SOGISSettings.searchtables;
                strSOGISSearchHelpText = SOGISSettings.sogissearchhint;
                bolSOGISWMSServiceInfo = SOGISSettings.sogiswmsserviceinfo;
            }
        }
    }

    // additional searchtables from url (GET)
    if (urlParams.searchtables) {
        if (searchtables.trim() == '') {
            searchtables = urlParams.searchtables;
        } else {
            searchtables += ',' + urlParams.searchtables;
        }
    }

    // build search hint
    strSearchHelpText = '<b>Suche</b><br/>';
    strSearchHelpText += 'Zu einer Koordinate zoomen: <b>2607890 1228256</b><br/>';
    strSearchHelpText += '<br/>'
    strSearchHelpText += 'Um nur in bestimmten Datenbereichen zu suchen,<br/>';
    strSearchHelpText += 'können Sie Kürzel verwenden:<br/>';
    strSearchHelpText += '- Point of Interest: <b>poi</b><br/>';
    strSearchHelpText += '- Flurnamen: <b>flurname</b><br/>';
    strSearchHelpText += '- GB-Nummer: <b>gbnr</b><br/>';
    strSearchHelpText += '- EGID: <b>egid</b><br/>';
    strSearchHelpText += '- BFS-Gemeindenummer: <b>bfsnr</b><br/>';
    strSOGISSearchHelpText = strSearchHelpText + strSOGISSearchHelpText;
}


/**
* @desc initialises the individual sogis projects
*
*/
function initSOGISProjects() {

    Ext.getCmp("sogistooltip").toggle(false);
    removeButtons(); //remove all buttons
    setProjectSettings(); //set settings from GISProjectlisting.js

    //reset search field for projectspecifig search
    Ext.getCmp('qgissearchcombo').clearSearchResult();
    Ext.getCmp('qgissearchcombo').destroy();
    qgisSearchCombo = new QGIS.SearchComboBox({
                        map: geoExtMap.map,
                        highlightLayerName: 'attribHighLight',
                        hasReverseAxisOrder: false,
                        useWmsHighlight: enableSearchBoxWmsHighlight,
                        highlighter: highlighter,
                        id: 'qgissearchcombo',
                        width: 300,
                        searchtables: searchtables
                    });
     myTopToolbar = Ext.getCmp('mytoptoolbar');
     myTopToolbar.insert(myTopToolbar.items.length, qgisSearchCombo);
     myTopToolbar.doLayout();


    // if a max scale has been set
    MapOptions.maxScale = strSOGISMaxScale;
    geoExtMap.map.setOptions(MapOptions);

    geoExtMap.map.events.on({ "zoomend": function (e) {

        // if zoom inside sogisMaxScale zoom back
        if (geoExtMap.map.getScale() < parseInt(strSOGISMaxScale) && strSOGISMaxScale != null) {
            geoExtMap.map.zoomToScale(strSOGISMaxScale);
            //Ext.MessageBox.alert("Masstabsbeschränkung", "Bei diesem Projekt darf nicht weiter hineingezoomt werden\n als 1:"+strSOGISMaxScale);
            mainStatusText.setText('<p style="color:#ff0000;">Bei diesem Projekt darf nicht weiter hineingezoomt werden\n als 1:'+strSOGISMaxScale + '</p>');
            // auto-hide message afer 4 sec.
            Ext.defer(function() {
                //Ext.MessageBox.hide();
                mainStatusText.setText(modeNavigationString[lang]);
            }, 4000);
        }
    }
    });

    // if service info from wms has to be displayed
    if (bolSOGISWMSServiceInfo == true && showWMSServiceInfoTab == true) {
        Ext.getCmp('WMSServiceInfoPanel').setVisible(true);
        Ext.getCmp('WMSServiceInfoPanel').loadServiceInfo();
    } else {
        Ext.getCmp('WMSServiceInfoPanel').setVisible(false);
    }
    Ext.getCmp('LeftPanel').doLayout();


    //close tooltip window, if opened
    if (typeof(Ext.getCmp('tooltipWindow')) != 'undefined'){
            Ext.getCmp('tooltipWindow').destroy();
        }

    //close permalink window, if opened
    if (typeof(Ext.getCmp('permalinkWindow')) != 'undefined'){
        Ext.getCmp('permalinkWindow').destroy();
    }




    /* EXCEPTION SOVOTE */
    if ((getProject().indexOf('ea_') != -1 ||
        getProject().indexOf('ka_') != -1) &&
        getProject().indexOf('_vorlage_') != -1){
        intSOGISTooltipWidth = 600
        intSOGISTooltipHeight = 420
        addButtons(['sogistooltip','PrintMap']);
        strSOGISDefaultButton = 'sogistooltip';
        setDefaultButton(strSOGISDefaultButton);
        Ext.getCmp('mapThemeButton').hide();  // disable theme switcher button
        Ext.getCmp('LeftPanel').doLayout();
    /* all regular projects */
    } else {
        //handle buttons
        addButtons(arr_SOGISButtons);
        setDefaultButton(strSOGISDefaultButton);

    }


    // ============================================
    // BEGIN handle print when switching themes - handling different max-scales
    // ============================================
    // reset var printCapabilities
    if (parseInt(strSOGISMaxScale) > 0) {
        var scales = [];
        for (var values in origPrintCapabilities.scales){
            if ( parseInt(origPrintCapabilities.scales[values].value) >= parseInt(strSOGISMaxScale) ) {
                scales.push(origPrintCapabilities.scales[values]);
            }
        }

        printCapabilities = { "scales": scales,
             "dpis": origPrintCapabilities.dpis,
             "layouts": origPrintCapabilities.layouts,
             "method": origPrintCapabilities.method,
             "url_proxy": origPrintCapabilities.url_proxy
        };


    } else {
        printCapabilities = origPrintCapabilities;
    }

    // create new JsonStore for PrintCapabilities Combobox
    var SOGISprintCapabilities = new Ext.data.JsonStore({
                                // store configs
                                data: printCapabilities,
                                storeId: 'sogisprintcapabilities',
                                // reader configs
                                root: 'scales',
                                fields: [{
                                    name: 'name',
                                    type: 'string'
                                }, {
                                    name: 'value',
                                    type: 'int'
                                }]
                            });
    Ext.getCmp('PrintScaleCombobox').bindStore('sogisprintcapabilities');

    // get the right print project
    printProvider.url = printServer + "/" + getProject() + "?" + 'SERVICE=WMS&VERSION=1.3&REQUEST=GetPrint&FORMAT=pdf&EXCEPTIONS=application/vnd.ogc.se_inimage&TRANSPARENT=true';

    // ============================================
    // END handle print when switching themes - handling different max-scales
    // ============================================


    if ( strSOGISDefaultButton == "sogistooltip" ||
         strSOGISDefaultButton == "" ) {
        Ext.getCmp("ObjectIdentificationText").hide();
        Ext.getCmp("sogistooltip").hide(); // TODO BETTER
        Ext.getCmp("ObjectIdentificationModeCombo").hide();
        Ext.getCmp("CenterPanel").doLayout();
        return true;
    } else {
        Ext.getCmp("ObjectIdentificationText").show();
        Ext.getCmp("ObjectIdentificationModeCombo").show();
        Ext.getCmp("CenterPanel").doLayout();
        return false;
    }

}

/**
* @desc shows a window with html inside, used for sogis tooltip
* @param string with html
*/
function showTooltip(str_html){
    
    var activeTabIndex = 0; 

    // close already opened windows
    if (typeof(Ext.getCmp('tooltipWindow')) != 'undefined'){
        // determine, which tab is active, if tabs exist
        try {
            // remember active tab
            var activeTab = Ext.getCmp('sogistooltippanel').getActiveTab();
            activeTabIndex = Ext.getCmp('sogistooltippanel').items.findIndex('id', activeTab.id);

        } catch (err) {
            // pass
        }
        Ext.getCmp('tooltipWindow').destroy();
    }

    // is the tooltip (/var/wwwroot/sogis/qgis-web-tooltip/) sending json?
    try {
        var decodedString = Ext.decode(str_html, true); // decode json
        var number_of_tabs = decodedString['tabs'].length; // how many tabs have to be generated?
        is_json = true;
        if (number_of_tabs == 1){ // only one tab, decode message
            str_html = decodedString['tabs'][0]['html'];
            is_json = false;
        }
    } 
    // no correct json
    catch (err){
        is_json = false;
    }

    if (is_json){ // more than one tab
        var tabs = []; // tabs in tooltip window
            for (i=0;i<number_of_tabs;i++){
                var simpleTab = {
                    title: decodedString['tabs'][i]['title'],
                    html: decodedString['tabs'][i]['html'],
                }
                tabs.push(simpleTab);
            }
        var tooltipPanel = new Ext.TabPanel({
            activeTab : activeTabIndex,
            id: 'sogistooltippanel',
            autoHeight: true,
            autoWidth: true,
            items : tabs
        });

    } else { // no tabs
        var tooltipPanel = new Ext.Panel({
            id: 'sogistooltippanel',
            header: false,
            html: str_html,
            autoHeight: true,
            autoWidth: true
        });
    }

    var tooltipWindow = new Ext.Window({
        title: 'Abfrage', //getProject(),
        minWidth: intSOGISTooltipWidth,
        width: intSOGISTooltipWidth,
        minHeight: intSOGISTooltipHeight,
        height: intSOGISTooltipHeight,
        bodyStyle: 'background:#ffffff;height:' + intSOGISTooltipHeight + 'px;',
        layout: 'fit',
        floating: true,
        items: tooltipPanel,
        id: 'tooltipWindow',
        renderTo: document.body,
        closable: true,
        autoScroll: true,
        x: cursorX - intSOGISTooltipWidth/2,
        y: cursorY + 10,
        initCenter: false,
        listeners:{
            'close': function(win){
                openLayersVectorClickPoint.removeAllFeatures(); // remove click point on map
                openLayersMarkerClickPoint.clearMarkers(); // remove click point on map
            }
        }
    });

    Ext.getCmp('sogistooltippanel').body.applyStyles({'border-color':'white',
                                                             'border':'0px'}); // at least it works
    tooltipWindow.show();
}

/**
* @desc this function opens a new tooltip-window and stores the old content to be able to switch back
*/
var prior_content = ''; // global var to store the prior content of the tooltip-window
function showTooltipFromSite(url){
    prior_content = Ext.get('tooltipWindow').dom.getElementsByClassName('sogisTooltip')[0].outerHTML;
    Ext.Ajax.request({
                isLoading: true,
                url:  strSOGISTooltipURL + getProject() + '/' + url,
                //params: params,
                method: 'GET',
                failure: function(){
                    Ext.getBody().unmask();
                },
                success: function(response){
                    if (Ext.getCmp('IdentifyTool').hidden){ // TODO: better
                        content = response.responseText;
                        content += '<p align="center"><a href="javascript:showPriorTooltip();">zurück</a>';
                        showTooltip(content);
                        Ext.getBody().unmask();
                    }
                }
             });
}

function showPriorTooltip(){
    showTooltip(prior_content);
}

/**
* @desc returns a comma-separated string with the visible layers
* @return string with the visible layers
*
*/
function showVisibleLayers(){
    visibleLayers = getVisibleLayers([],layerTree.root.firstChild);
    visibleLayers = uniqueLayersInLegend(visibleLayers);
    return visibleLayers;
}


/**
* @desc gets the last part of a url. In this context ist is the project name
* @return string with the project name
*/
function getProject(){
    str_return = wmsMapName.replace("/", "");
    /* EXCEPTION legacy communes  */
    if (str_return == "gempen" ||
    str_return == "zuchwil" ||
    str_return == "grindel" ||
    str_return == "haerkingen" ||
    str_return == "langendorf" ||
    str_return == "oberdorf" ||
    str_return == "selzach" ||
    str_return == "obergerlafingen" ||
    str_return == "schnottwil" ||
    str_return == "dulliken"){
        str_return = "gemeindegis";
    }
    return str_return;
}

/**
* @desc removes all buttons from the map
*/
function removeButtons(){
    arr_buttons_seperators = ['measureDistance',
                            'measureArea',
                            'PrintMap',
                            'IdentifyTool',
                            'ShowHelp',
                            'navZoomBoxButton',
                            'zoomNext',
                            'zoomLast',
                            'SendPermalink', // button SendEmail
                            'separator1',
                            'separator2',
                            'separator3',
                            'separator4',
                            'separator5',
                            'sogistooltip'];
    for (var i=0; i<arr_buttons_seperators.length; i++){
        Ext.getCmp(arr_buttons_seperators[i]).hide();
    }
}

/**
* @desc adds buttons to the map
*
*/
function addButtons(arr_buttons_seperators){
    for (var i=0; i<arr_buttons_seperators.length; i++){
        if (Ext.getCmp(arr_buttons_seperators[i])) {
          Ext.getCmp(arr_buttons_seperators[i]).show();
        }
    }
}

/**
* @desc adds buttons to the map
*
*/
function setDefaultButton(defaultButton){
    if (defaultButton != ""){
        Ext.getCmp(defaultButton).toggle(true);
    }
}

/**
* @desc this function opens a window with a permalink
*/
function openPermaLink(permalink) {
    var formPanel =  {
        xtype       : 'form',
        layout      : 'auto',
        height      : 22,
        autoScroll  : false,
        id          : 'permalinkpanel',
        border      : false,
        defaultType : 'field',
        frame       : false,
        bodyStyle: 'border-width:0px;',
        items       : [
            {
                xtype: 'textfield',
                height: 20,
                value: permalink,
                hideLabel: true,
                border: false,
                editable: false,
                width: 600,
                selectOnFocus:true,
                id: 'permalinkfield'
            }
        ]
    };

    if (typeof(Ext.getCmp('permalinkWindow')) != 'undefined'){
        Ext.getCmp('permalinkWindow').destroy();
    }

    var permalinkWindow = new Ext.Window({
        title: 'Permalink',
        minWidth: 615,
        width: 615,
        minHeight: 80,
        height: 80,
        layout: 'auto',
        //bodyStyle: 'background:#ffffff;',
        //floating: true,
        id: 'permalinkWindow',
        items: [formPanel],
        renderTo: document.body,
        buttonAlign: 'center',
        html: '<p align="left" style="vertical-align:bottom;margin:5px;">Mit diesem Link kann die jetzige Kartenansicht jederzeit wieder hergestellt werden. Kopieren: Ctrl+C</p>',
        /*buttons : [
            {
                text: 'OK',
                handler: function(){
                permalinkWindow.close();
                }
            }
        ],
        */
        closable: true,
        autoScroll: true
    });
    permalinkWindow.show();
    Ext.getCmp('permalinkfield').focus(false, 100);
}

/*
* @desc sets a ideal scale when pushing the print-button (id=PrintMap)
        as there are different max-scales this function had to be integrated withing the PrintMap-Button in WebGIS.js
*/
function setPrintScaleCombobox(printExtentPageScaleDataValue) {
    // Set default value of
    if (printCapabilities.scales[0].value > printExtentPageScaleDataValue && parseInt(strSOGISMaxScale) > 0) {
        theScale = printCapabilities.scales[0].value;
    } else {
        theScale = printExtentPageScaleDataValue;
    }
    return theScale;
}

/*
* @desc wird für die Abfrage in ÖV verwendet liefert korrektes HTML für showTooltip, das im Infobutton von ÖV noch mal aufgerufen wird.
* @param string with html
*/
function httpGet(theUrl) {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

/*
 * @desc Wird für den Download und die Statistik der LIDAR-Daten benötigt 
 * @param 
 */

 function download(url,download) {
    // Request erzeugen
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest(); // Mozilla, Safari, Opera
    } else if (window.ActiveXObject) {
    try {
        request = new ActiveXObject('Msxml2.XMLHTTP'); // IE 5
    } catch (e) {
        try {
            request = new ActiveXObject('Microsoft.XMLHTTP'); // IE 6
            } catch (e) {}
        }
    }
 
     // überprüfen, ob Request erzeugt wurde
    if (!request) {
        alert("Kann keine XMLHTTP-Instanz erzeugen");
        return false;
    } else {
        var url = "../sogis/qgis-web-tooltip/lidar/counter.php?" + url;
        // Request öffnen
        request.open('get', url, true);
        request.onreadystatechange = self.location=download;
        // Request senden
        request.send(null);
    }
}

/*
 * Overwrite Translations.js
*/
sendPermalinkTooltipString["de"] = "Permalink";

leftPanelTitleString["de"] = "";

mapThemeButtonTitleString["de"] = "Weitere Karten";

mapPanelTitleString["de"] = "";

themeSwitcherWindowTitleString["de"] = "Kartenthemen";

modeObjectIdentificationString["de"] = "Bewegen Sie die Maus über das Objekt, um es zu identifizeren, klicken Sie es an, um seine Attributdaten anzuzeigen.";

metadataTabTitleString["de"] = "Weitere Information";

function printMousePos(e) {
    cursorX = e.clientX;
    cursorY = e.clientY;
}
document.addEventListener("click", printMousePos);
