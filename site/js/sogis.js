var servername = "http://" + location.href.split(/\/+/)[1];
var strSOGISTooltipURL = servername + '/sogis/qgis-web-tooltip/'; // URL to the SOGIS tooltip



/**
* @desc initialises the individual sogis projects
* 
*/
function initSOGISProjects() {
    //fun with zoom
    //To iterate an entire layerTree

    var allLayerTreeIDs = Array();
    layerTree.root.firstChild.cascade(
	   function (n) {
           if (n.isLeaf()) {
                allLayerTreeIDs.push([n.text,n.id]);
           }
    }
);

    function setTOCgray() {
        for (var i=0;i<wmsLoader.projectSettings.capability.layers.length;i++){
            MaxScale = Math.round(wmsLoader.projectSettings.capability.layers[i].maxScale);
            if (MaxScale < 1){
                MaxScale = 1;
            } 

            MinScale = Math.round(wmsLoader.projectSettings.capability.layers[i].minScale);
            if (MinScale < 1){
                MinScale = 1200000;
            } 

            //set content gray
            if (wmsLoader.projectSettings.capability.layers[i].maxScale > geoExtMap.map.getScale() ||
                wmsLoader.projectSettings.capability.layers[i].minScale < geoExtMap.map.getScale()) {
                    try{
                    for (var j=0;j<allLayerTreeIDs.length;j++){
                        //comparison layerTree and info from getProjectsettings
                        if (allLayerTreeIDs[j][0] == wmsLoader.projectSettings.capability.layers[i].title) {
                            layerTree.root.findChild('id', allLayerTreeIDs[j][1], true).setCls('outsidescale');//add css for outside scale

                            strTOCTooltip = 'Layer wird in den Massstäben 1:' + MaxScale + ' bis 1:' + MinScale + ' dargestellt.' 
                            layerTree.root.findChild('id', allLayerTreeIDs[j][1], true).setTooltip(strTOCTooltip);
                            layerTree.root.findChild('id', allLayerTreeIDs[j][1], true).isOutsideScale = true;
                            layerTree.root.findChild('id', allLayerTreeIDs[j][1], true).MinScale = MinScale;
                            layerTree.root.findChild('id', allLayerTreeIDs[j][1], true).MaxScale = MaxScale;
                        }
                    }
                } catch(err){}
                // reset gray
                } else {
                    try {
                    for (var j=0;j<allLayerTreeIDs.length;j++){
                        if (allLayerTreeIDs[j][0] == wmsLoader.projectSettings.capability.layers[i].title) {
                            layerTree.root.findChild('id', allLayerTreeIDs[j][1], true).setTooltip(''); //empty tooltip
                            node = layerTree.root.findChild('id', allLayerTreeIDs[j][1], true); //remove css class
                            node.ui.removeClass('outsidescale'); //remove css class
                            layerTree.root.findChild('id', allLayerTreeIDs[j][1], true).isOutsideScale = false;
                            layerTree.root.findChild('id', allLayerTreeIDs[j][1], true).MinScale = MinScale;
                            layerTree.root.findChild('id', allLayerTreeIDs[j][1], true).MinScale = MaxScale;
                        }
                    }
                    } catch(err) {}
                }
            }
    }
    
    //get sogis settings
    for (var i=0;i<gis_projects.topics.length; i++){
        for (var j=0;j<gis_projects.topics[i].projects.length; j++){
            if ( gis_projects.topics[i].projects[j].projectfile == getProject() ){
                intSOGISTooltipWidth = gis_projects.topics[i].projects[j].sogistooltipwidth;
                intSOGISTooltipHeight = gis_projects.topics[i].projects[j].sogistooltipheight;
                arr_SOGISButtons = gis_projects.topics[i].projects[j].sogisbuttons;
                strSOGISDefaultButton = gis_projects.topics[i].projects[j].sogisdefaultbutton;
                strSOGISMaxScale = gis_projects.topics[i].projects[j].sogismaxscale;
            }
        }
    }

    removeButtons(); // remove all buttons

    function graygroups() {
         arrLayerGroups = Array();
         arrOutsideScale = Array();
         arrMaxScale = Array();
         arrMinScale = Array();
         layerTree.root.firstChild.cascade(
            function (n) {
                if (!(n.isLeaf())) {
                    layerTree.root.findChild('id', n.id, true).cascade(
                    function (m) {
                        // has to be a leaf and outside scale 
                        if (m.isLeaf()){
                            arrOutsideScale.push(m.isOutsideScale);
                            arrMaxScale.push(m.MaxScale);
                            arrMinScale.push(m.MinScale);
                        }
                    });
                    arrLayerGroups.push([n.id, n.text, arrOutsideScale, arrMaxScale, arrMinScale]);
                }
                arrOutsideScale = [];
                arrMaxScale = [];
                arrMinScale = [];
            }
            );
            //console.log(arrLayerGroups);

            for (var i=0;i<arrLayerGroups.length;i++){
                // iterate all leaf layers within a group
                bolGroupOutsideScale = true;
                MinScale = 0;
                MaxScale = 1000000;
                for (var j=0;j<arrLayerGroups[i][2].length;j++){
                    if (MinScale < arrLayerGroups[i][4][j]){
                        MinScale = arrLayerGroups[i][4][j];
                    } 

                    if (MaxScale > arrLayerGroups[i][3][j]){
                        MaxScale = arrLayerGroups[i][3][j];
                    } 

                    // if one single leaf layer is declared visible, the group has as well to be declared visible
                    if (!arrLayerGroups[i][2][j]){
                        bolGroupOutsideScale = false;
                    }
                }

                // the group is declared invisible
                if (bolGroupOutsideScale){
                    layerTree.root.findChild('id', arrLayerGroups[i][0], true).setCls('outsidescale'); // add css class 
                    strTOCTooltip = 'Layergruppe wird in den Massstäben 1:' + MaxScale + ' bis 1:' + MinScale + ' dargestellt.' 
                    layerTree.root.findChild('id', arrLayerGroups[i][0], true).setTooltip(strTOCTooltip);

                // the group is declared visible
                } else { 
                    node = layerTree.root.findChild('id', arrLayerGroups[i][0], true); //remove css class
                    node.ui.removeClass('outsidescale'); //remove css class
                    layerTree.root.findChild('id', arrLayerGroups[i][0], true).setTooltip('');
                }
            }
    }
//maxScale
//TODO
MapOptions.maxScale = strSOGISMaxScale;
geoExtMap.map.setOptions(MapOptions);


setTOCgray(); //when initialising
graygroups(); //when initialising

geoExtMap.map.events.on({ "zoomend": function (e) {
    setTOCgray();
    graygroups();
    //if zoom inside sogisMaxScale zoom back
    if (geoExtMap.map.getScale() < parseInt(strSOGISMaxScale) && strSOGISMaxScale != null) {
            geoExtMap.map.zoomToScale(strSOGISMaxScale);
            //Ext.MessageBox.alert("Masstabsbeschränkung", "Bei diesem Projekt darf nicht weiter hineingezoomt werden\n als 1:"+strSOGISMaxScale);  
            mainStatusText.setText('<p style="color:#ff0000;">Bei diesem Projekt darf nicht weiter hineingezoomt werden\n als 1:'+strSOGISMaxScale + '</p>');
            //auto-hide message afer 2 sec.
            Ext.defer(function() {
                //Ext.MessageBox.hide();
                mainStatusText.setText(modeNavigationString[lang]);
            }, 4000);
        }
            }
    });


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
    /* all regular projects */
    } else {
        //handle buttons
        addButtons(arr_SOGISButtons);
        setDefaultButton(strSOGISDefaultButton);

    }

    if ( strSOGISDefaultButton == "sogistooltip") {
        Ext.getCmp("ObjectIdentificationText").hide();
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
    var str_message = str_html;
        /*
        Ext.Msg.show({
        minWidth: 400,
        title: 'Tooltip ' + getProject(),
        msg: str_message,
        buttons: Ext.MessageBox.OK,
        maxHeight: 5,
        resizable: false,
        autoScroll: true
        //icon: Ext.MessageBox.INFO
        });
        */ 
        if (typeof(Ext.getCmp('tooltipWindow')) != 'undefined'){
            Ext.getCmp('tooltipWindow').destroy();
        }

        var tooltipWindow = new Ext.Window({
            title: 'Tooltip ' + getProject(),
            minWidth: intSOGISTooltipWidth,
            width: intSOGISTooltipWidth,
            minHeight: intSOGISTooltipHeight,
            height: intSOGISTooltipHeight,
            bodyStyle: 'background:#ffffff;height:' + intSOGISTooltipHeight + 'px;',
            floating: true,
            html: str_message,
            id: 'tooltipWindow',
            renderTo: document.body,
            /*
            buttonAlign: 'center',
            buttons : [
                {
                text: 'OK',
                handler: function(){
                    tooltipWindow.close();
                }                
        }
            ],
            */
            closable: true,
            autoScroll: true
        });
        tooltipWindow.show();
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

//Send permalink. Overwrite from Translation.js
var sendPermalinkTooltipString = new Array();
sendPermalinkTooltipString["en"] = "Permalink";
sendPermalinkTooltipString["es"] = "Permalink"; //FIXME
sendPermalinkTooltipString["de"] = "Permalink";
sendPermalinkTooltipString["fr"] = "Permalink";
sendPermalinkTooltipString["it"] = "Permalink"; //FIXME
sendPermalinkTooltipString["pt_PT"] = "Permalink";
sendPermalinkTooltipString["uk"] = "Permalink"; //FIXME
sendPermalinkTooltipString["hu"] = "Permalink";
sendPermalinkTooltipString["ro"] = "Permalink";

//mode string for attribute data detailed
var modeObjectIdentificationString = new Array();
modeObjectIdentificationString["en"] = "Mode: object identification. Move the mouse over an object to identify it, click it to view its attribute data.";
modeObjectIdentificationString["es"] = "Modo: Identificación de objeto. Mueva el cursor sobre un objeto para identificarlo, haga click sobre él para ver sus atributos.";
modeObjectIdentificationString["de"] = "Bewegen Sie die Maus über das Objekt, um es zu identifizeren, klicken Sie es an, um seine Attributdaten anzuzeigen.";
modeObjectIdentificationString["fr"] = "Mode: identification d'objets. Déplacez la souris sur un objet pour l'identifier, cliquez dessus pour afficher les attributs.";
modeObjectIdentificationString["it"] = "Modalità: identificazione di elementi. Identificare un elemento tramite il click.";
modeObjectIdentificationString["pt_PT"] = "Modo: identificação do elemento. Ver atributos dos dados por meio de um clique do rato.";
modeObjectIdentificationString["uk"] = "Режим: вибір об'єкта. Клацніть лівою кнопкою щоб побачити атрибути об'єкта.";
modeObjectIdentificationString["hu"] = "Mód: térképi elem azonosítás. Mozgasd az egeret a kívánt térképi elem fölé, klikkelj rá.";
modeObjectIdentificationString["ro"] = "Mod: identificare obiect. Pentru aceasta se pune mouse-ul pe el; se poate da click pentru a-i vizualiza atributele";


