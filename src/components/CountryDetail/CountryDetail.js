import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryHisTory, getCountryDetail } from "./../../apis/apis";
import CountryCharts from "./CountryCharts/CountryCharts";
import CountryHighlight from "./CountryHighlight/CountryHighlight";
import { Grid } from "@material-ui/core";
import NationalFlag from "./NationalFlag/NationalFlag";
import MainLayout from "../MainLayout/MainLayout";

function CountryDetail(props) {
  const { country } = useParams();
  const [countryDetail, setCountryDetail] = useState([]);
  const [countryInfo, setCountryInfo] = useState([]);

  const [reportCountryHistory, setReportCountryHistory] = useState([]);
  useEffect(() => {
    getReportCountry(country);
  }, [country]);

  const getReportCountry = (country) => {
    getCountryDetail(country).then((res) => {
      setCountryDetail(res.data);
      setCountryInfo(res.data.countryInfo);
    });
  };

  useEffect(() => {
    getReportCountryHistory(country);
  }, [country]);

  const getReportCountryHistory = (country) => {
    getCountryHisTory(country).then((res) =>
      setReportCountryHistory(res.data.timeline)
    );
  };

  return (
    <MainLayout>
      <div style={{ padding: "24px" }}>
        <NationalFlag countryInfo={countryInfo} countryDetail={countryDetail} />
        <CountryHighlight countryDetail={countryDetail} />
        <CountryCharts reportCountryHistory={reportCountryHistory} />
      </div>
    </MainLayout>
  );
}

export default CountryDetail;
