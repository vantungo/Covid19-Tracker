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
    "https://newsapi.org/v2/everything?q=tesla&from=2021-06-30&sortBy=publishedAt&apiKey=fc8af3e7de314fd5906e0a24c11b336b"
  );
