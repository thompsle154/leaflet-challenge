<!DOCTYPE html>
<html lang="en">
<head>
    <meta 
        charset="UTF-8">
    <meta 
        name="viewport" 
        content="width=device-width, initial-scale=1.0">
    <meta 
        http-equiv="X-UA-Compatible" 
        content="ie=edge">

    <title>Leaflet Basic Map</title>

    <!-- Leaflet CSS -->
    <link 
        rel="stylesheet" 
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" 
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin=""
    />

    <!-- d3 JavaScript -->
    <script src="https://d3js.org/d3.v5.min.js"></script>

    <!-- Our CSS -->
    <link 
        rel="stylesheet" 
        type="text/css" 
        href="static/css/style.css">

</head>
<body>
    <!-- The div that holds our map -->
    <div id="mapid"></div>

    <!-- Leaflet JavaScript -->
    <script 
        src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
        integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
        crossorigin="">
    </script>
    
    <!-- API key -->
    <script 
        type="text/javascript" 
        src="static/js/config.js">
    </script>

    <!-- Our JavaScript -->
    <script 
        type="text/javascript" 
        src="static/js/cities.js">
    </script>

    <script 
        type="text/javascript" 
        src="static/js/challenge_logic.js">
    </script>

</body>
</html>


  //  API link
  var USGSlink = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
  // need a GET request to the query URL
  d3.json(USGSlink, function (data) {
    console.log(data)
    // Once we get a response, send the data.features object to the createFeatures function
    createFeatures(data.features);
  });