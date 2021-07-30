import React from "react";
import CasesChart from "./CasesChart/CasesChart";
import DeathsChart from "./DeathsChart/DeathsChart";
import RecoveredChart from "./RecoveredChart/RecoveredChart";
import { Grid, Typography } from "@material-ui/core";

function LineChart({ reportHistory }) {
  return (
    <div>
        <Grid container spacing={3}>
          <Grid item sm={4} xs={12}>
            <CasesChart report={reportHistory} />
          </Grid>
          <Grid item sm={4} xs={12}>
            <DeathsChart report={reportHistory} />
          </Grid>
          <Grid item sm={4} xs={12}>
            <RecoveredChart report={reportHistory} />
          </Grid>
        </Grid>
    </div>
  );
}

export default LineChart;
