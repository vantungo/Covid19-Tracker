import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryHisTory, getCountryDetail, getMapDataByCountryIso } from "./../../apis/apis";
import CountryCharts from "./CountryCharts/CountryCharts";
import CountryHighlight from "./CountryHighlight/CountryHighlight";
import NationalFlag from "./NationalFlag/NationalFlag";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CountryMap from './CountryMap/CountryMap';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));
function CountryDetail(props) {
  const classes = useStyles();
  const { country } = useParams();
  const [countryDetail, setCountryDetail] = useState([]);
  const [countryInfo, setCountryInfo] = useState([]);
  const [mapData, setMapData] = useState({});

  const [reportCountryHistory, setReportCountryHistory] = useState([]);
  useEffect(() => {
    getReportCountry(country);
  }, [country]);

  const getReportCountry = (country) => {
    getCountryDetail(country)
      .then((res) => {
        setCountryDetail(res.data);
        setCountryInfo(res.data.countryInfo);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    getReportCountryHistory(country);
  }, [country]);

  const getReportCountryHistory = (country) => {
    getCountryHisTory(country)
      .then((res) => setReportCountryHistory(res.data.timeline))
      .catch((error) => alert(error));
  };

  useEffect(() => {
    if (country) {
      getMapDataByCountryIso(country)
        .then((res) => {
          setMapData(res);
        })
        .catch((error) => alert(error));
    }
  }, [country]);

  return (
    <div className={classes.root}>
      <Box>
        <Typography
          gutterBottom
          variant="h3"
          color="textSecondary"
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            paddingTop: "20px",
            fontWeight: 400,
          }}
        >
          {countryDetail.country}
        </Typography>
      </Box>
      <Grid container spacing={0} style={{ marginTop: "20px" }}>
        <Grid item sm={6} xs={12}>
          <NationalFlag
            countryInfo={countryInfo}
            countryDetail={countryDetail}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <CountryMap mapData={mapData} />
        </Grid>
      </Grid>
      <Box style={{ padding: "24px" }}>
        <CountryHighlight countryDetail={countryDetail} />
        <CountryCharts reportCountryHistory={reportCountryHistory} />
      </Box>
    </div>
  );
}

export default CountryDetail;
