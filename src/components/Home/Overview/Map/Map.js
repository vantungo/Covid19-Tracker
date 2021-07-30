import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { cloneDeep } from "lodash";

// Load Highcharts modules
highchartsMap(Highcharts);
const initOptions = {
  chart: {
    height: "500",
  },
  title: {
    text: null,
  },
  mapNavigation: {
    enabled: true,
  },
  colorAxis: {
    dataClasses: [
      {
        color: "#95DCF4",
        from: 0,
        name: "cases <100K",
        to: 100000,
      },
      {
        color: "#00ACE3",
        from: 1000000,
        name: "100K< cases <1M",
        to: 1e6,
      },
      {
        color: "#008EBC",
        from: 1e6,
        name: "1M< cases <10M",
        to: 1e7,
      },
      {
        color: "#007092",
        from: 1e7,
        name: "cases >10M",
      },
    ],
  },
  legend: {
    layout: "horizontal",
    align: "right",
    verticalAlign: "bottom",
  },
  responsive: {
    maxWidth: "100%",
  },
  tooltip: {
    pointFormat: "{point.properties.name}: {point.textCases}",
  },
  series: [
    {
      name: "Total case",
      joinBy: ["iso-a3", "code3"],
      type: "mapline",
      showInLegend: true,
    },
  ],
};

function Map({ mapData, data }) {
  const [options, setOptions] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (mapData && Object.keys(mapData).length) {
      setOptions(() => ({
        ...initOptions,
        title: {
          text: null,
        },
        // series: [{ ...initOptions.series[0], mapData: mapData, data: data }],
        series: [
          {
            data: data,
            mapData: mapData,
            joinBy: ["iso-a3", "code3"],
            name: "Total cases",
            states: {
              hover: {
                color: Highcharts.getOptions().colors[2],
              },
            },
          },

          {
            type: "mapline",
            name: "Separators",
            data: data,
            nullColor: "gray",
            showInLegend: false,
            enableMouseTracking: true,
          },
        ],
      }));

      if (!mapLoaded) setMapLoaded(true);
    }
  }, [mapData, mapLoaded, data]);
  if (!mapLoaded) return null;

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={cloneDeep(options)}
      constructorType={"mapChart"}
    />
  );
}

export default Map;
