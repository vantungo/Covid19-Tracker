import React from "react";
import CountryCasesChart from "./CountryCasesChart/CountryCasesChart";
import CountryDeathsChart from "./CountryDeathsChart/CountryDeathsChart";
import CountryRecoveredChart from "./CountryRecoveredChart/CountryRecoveredChart";
import { Grid } from '@material-ui/core';
function CountryCharts({ reportCountryHistory }) {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm={4} xs={12}>
          <CountryCasesChart reportCountryHistory={reportCountryHistory} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CountryDeathsChart reportCountryHistory={reportCountryHistory} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CountryRecoveredChart reportCountryHistory={reportCountryHistory} />
        </Grid>
      </Grid>
    </div>
  );
}

export default CountryCharts;
