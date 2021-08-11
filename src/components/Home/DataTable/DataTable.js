import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ListCountries from "./ListCountries/ListCountries";
import SearchCountry from "./SearchCountry/SearchCountry";
import { getCountries } from "./../../../apis/apis";
import { useDispatch } from "react-redux";
import { GlobalActions } from "../../../redux/slices/globalSlice";

function DataTable(props) {
  const [countries, setCountries] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    getCountries()
      .then((res) => setCountries(res.data))
      .catch((error) => alert(error));
  };

  const handleOnChange = (e, value) => {
    dispatch(GlobalActions.loadingPage(true));
    setTimeout(() => {
      dispatch(GlobalActions.loadingPage(false));
    }, 2000);
    history.push(`/detail/${value.countryInfo.iso2.toLowerCase()}`);
  };

  return (
    <div>
      <SearchCountry countries={countries} handleOnChange={handleOnChange} />
      <ListCountries countries={countries} />
    </div>
  );
}

export default DataTable;
