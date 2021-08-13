import axios from "axios";

export const getAll = () => axios.get("https://disease.sh/v3/covid-19/all");

export const getCountries = () =>
  axios.get("https://disease.sh/v3/covid-19/countries");

export const getAllHistory = () =>
  axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all");

export const getCountryDetail = (country) =>
  axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);

export const getCountryHisTory = (country) =>
  axios.get(
    `https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`
  );

export const getNews = () =>
  axios.get(
    "https://article-json-server.herokuapp.com/articles"
  );

  export const getMapDataByCountryIso = (countryIso) =>
  import(
    `@highcharts/map-collection/countries/${countryIso}/${countryIso}-all.geo.json`
  );
