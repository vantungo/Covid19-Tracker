import { React, useState, useEffect } from "react";
import Map from "./Map/Map";
import LineChart from "./LineChart/LineChart";
import Highlight from "./Highlight/Highlight";
import { Grid } from "@material-ui/core";
import { getAll, getCountries, getAllHistory } from "./../../../apis/apis";
import { transformToMapData } from "../../../utils/utils";
import { Box } from "@material-ui/core";

function Overview(props) {
  const [countries, setCountries] = useState();
  const [mapData, setMapData] = useState({});
  const [reportHistory, setReportHistory] = useState([]);
  const [reportGlobal, setReportGlobal] = useState([]);

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    getCountries()
      .then((res) => {
        const data = transformToMapData(res.data);
        setCountries(data);
        import(`@highcharts/map-collection/custom/world.geo.json`).then(
          (res) => {
            setMapData(res);
          }
        );
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    getAllReportHistory();
  }, []);

  const getAllReportHistory = () => {
    getAllHistory()
      .then((res) => {
        setReportHistory(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    getReportGlobal();
  }, []);

  const getReportGlobal = () => {
    getAll()
      .then((res) => {
        setReportGlobal(res.data);
      })
      .catch((error) => alert(error));
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        {countries && <Map mapData={mapData} data={countries} />}
      </Grid>
      <Grid item xs={12}>
        <Highlight reportGlobal={reportGlobal} />
      </Grid>
      <Grid item xs={12}>
        <LineChart reportHistory={reportHistory} />
      </Grid>
    </Grid>
  );
}

export default Overview;
