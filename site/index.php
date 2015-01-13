<?php
    $PROJECTS_DIR = '<absolute-path-to-qgis-server-projects>/';
    $redirect_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]gemeindegis?showThemeSwitcher=True";
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <title>QGIS Mapserver Client</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <meta http-equiv="refresh" content="0; url=<?php echo $redirect_link ?>" />
    <!-- Framework CSS --> 
    <link rel="stylesheet" href="css/blueprint/screen.css" type="text/css" media="screen, projection"> 
    <link rel="stylesheet" href="css/blueprint/print.css" type="text/css" media="print"> 
    <!--[if lt IE 8]><link rel="stylesheet" href="css/blueprint/ie.css" type="text/css" media="screen, projection"><![endif]--> 
    
    <!-- Import fancy-type plugin for the sample page. --> 
    <link rel="stylesheet" href="css/blueprint/plugins/fancy-type/screen.css" type="text/css" media="screen, projection"> 
    <!-- Tims styles on top of blueprint -->
    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen, projection"> 
  </head>
  <body>
    <div class="container">
    <p>Falls Sie nicht automatisch weitergeleitet wurden, bitte hier klicken:
        <?php
            echo "&nbsp;<a href='".$redirect_link."'>".$redirect_link."</a>";
        ?>
    </p>
    </div>
  </body>
</html>
