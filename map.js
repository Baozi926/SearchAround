/**
 * Created by Caihm on 2017/5/10.
 */

var map;
var view;
var s;
var test;
var layer;

require([

    "dojo/parser",
    "dojo/dom-class",
    "dojo/dom-construct",
    "dojo/on",
    'dojo/_base/lang',
    "esri/Map",
    "esri/views/MapView",
    "esri/request",
    "esri/geometry/Point",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleFillSymbol",
    "esri/geometry/support/webMercatorUtils",
    'esri/Graphic',
    "esri/geometry/support/jsonUtils",
    "widgets/SearchAround",
    "esri/PopupTemplate",

    "dojo/domReady!"
], function (parser, domClass, domConstruct, on, lang, Map, MapView, esriRequest, Point, SimpleMarkerSymbol, SimpleFillSymbol, webMercatorUtils, Graphic, geometryUtils, SearchAround, PopupTemplate) {
    parser.parse();

    // mapManager = MapManager.getInstance({     appConfig: appConfig },
    // 'mapishere'); mapManager.showMap();

    map = new Map({basemap: "streets"});
    view = new MapView({
        container: "mapishere", // Reference to the scene div created in step 5
        map: map, // Reference to the map object created before the scene
        zoom: 4, // Sets zoom level based on level of detail (LOD)
        center: [15, 65]
    });

    view.then(function () {
        console.log('view loaded');
		
		test = new SearchAround({
            center:view.extent.center,
            view:view
		});
  

        // view     .popup     .open({title: title, content: dom, location:
        // view.extent.center})

    })

});
