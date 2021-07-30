import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
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
function Highlight({ reportGlobal }) {
  const classes = useStyles();

  return (
    <div style={{marginTop:"2em"}}>
      {/* <div style={{ textAlign: "center", marginBottom: "2em" }}>
        <Typography variant="h4">Global Situation</Typography>
      </div> */}
      <Grid container spacing="3">
        <Grid item sm={4} xs={12}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Confirmed cases
              </Typography>
              <Typography variant="h6">{reportGlobal.cases}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={4} xs={12}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Deaths
              </Typography>
              <Typography variant="h6">{reportGlobal.deaths}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={4} xs={12}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Recovered
              </Typography>
              <Typography variant="h6">{reportGlobal.recovered}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Highlight;
