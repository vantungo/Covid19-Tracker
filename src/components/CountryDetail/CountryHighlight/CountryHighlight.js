import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function CountryHighlight({ countryDetail }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing="3">
        <Grid item sm={4} xs="12">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                gutterBottom
              >
                Confirmed cases
              </Typography>
              <Typography variant="h6">{countryDetail.cases}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={4} xs="12">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                gutterBottom
              >
                Deaths
              </Typography>
              <Typography variant="h6">{countryDetail.deaths}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={4} xs="12">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                gutterBottom
              >
                Recovered
              </Typography>
              <Typography variant="h6">{countryDetail.recovered}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default CountryHighlight;
