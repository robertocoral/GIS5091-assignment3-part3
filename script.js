require([
        "esri/Map",
        "esri/layers/CSVLayer",
        "esri/views/MapView",
        "esri/widgets/Legend"
      ], (Map, CSVLayer, MapView, Legend) => {
        const url =
          "https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%202%20-%20ArcGIS%20JavaScript%20API/stl_crime_wgs_84.csv";

        const template = {
          title: "Crime committed at {ILEADSStreet}"
      };

        const renderer = {
          type: "heatmap",
          colorStops: [
            { color: "rgba(63, 40, 102, 0)", ratio: 0 },
            { color: "#FFFFAF", ratio: 0.083 },
            { color: "#FEF480", ratio: 0.166 },
            { color: "#FCDA54", ratio: 0.249 },
            { color: "#FEC64E", ratio: 0.332 },
            { color: "#FE9E4E", ratio: 0.415 },
            { color: "#FE8E4E", ratio: 0.498 },
            { color: "#FB8039", ratio: 0.581 },
            { color: "#FB6B39", ratio: 0.664 },
            { color: "#F9571F", ratio: 0.747 },
            { color: "#F9431F", ratio: 0.83 },
            { color: "#F9331F", ratio: 0.913 },
            { color: "#C80000", ratio: 1 }
          ],
          maxPixelIntensity: 25,
          minPixelIntensity: 0
        };

        const layer = new CSVLayer({
          url: url,
          title: "St. Louis Crime Heatmap",
          copyright: "St. Louis Police Department",
          popupTemplate: template,
          renderer: renderer
        });

        const map = new Map({
          basemap: "gray-vector",
          layers: [layer]
        });

        const view = new MapView({
          container: "viewDiv",
          center: [-90.19973698105836, 38.625784113754406],
          zoom: 10,
          map: map
        });

        view.ui.add(
          new Legend({
            view: view
          }),
          "bottom-left"
        );
      });
