import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ListCountries from "./ListCountries/ListCountries";
import SearchCountry from "./SearchCountry/SearchCountry";
import { getCountries, getCountryDetail } from "./../../../apis/apis";

function DataTable(props) {
  const [countries, setCountries] = useState([]);
  const history = useHistory();


  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleOnChange = (e, value) => {
    history.push(`/detail/${value.country.toLowerCase()}`)
  };

  return (
    <div>
      <SearchCountry countries={countries} handleOnChange={handleOnChange} />
      <ListCountries countries={countries} />
    </div>
  );
}

export default DataTable;
