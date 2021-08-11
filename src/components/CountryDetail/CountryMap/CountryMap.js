import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { cloneDeep } from "lodash";
import { useSelector } from "react-redux";

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
    min: 0,
    stops: [
      [0.2, "#FFC4AA"],
      [0.4, "#FF8A66"],
      [0.6, "#FF392B"],
      [0.8, "#B71525"],
      [1, "	#7A0826"],
    ],
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "bottom",
  },
  series: [
    {
      name: "Cases",
      joinBy: ["hc-key", "key"],
    },
  ],
};
function CountryMap({ mapData }) {
  const [options, setOptions] = useState({});
  const themeMode = useSelector((state) => state.GlobalReducer.themeMode);

  useEffect(() => {
    if (mapData && Object.keys(mapData).length) {
      const fakeData = mapData.features.map((feature, index) => ({
        key: feature.properties["hc-key"],
        value: index,
      }));

      setOptions(() => ({
        ...initOptions,
        title: {
          text: null,
        },
        series: [
          { ...initOptions.series[0], mapData: mapData, data: fakeData },
        ],
      }));
    }
  }, [mapData]);

  useEffect(() => {
    if (themeMode === "light") {
      setOptions({
        chart: {
          backgroundColor: "white",
        },
      });
    } else if (themeMode === "dark") {
      setOptions({
        chart: {
          backgroundColor: "#424242",
        },
      });
    }
  }, [themeMode]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={cloneDeep(options)}
      constructorType={"mapChart"}
    />
  );
}

export default CountryMap;
