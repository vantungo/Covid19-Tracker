import React from "react";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";

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
  const { t } = useTranslation();

  return (
    <Box style={{ marginTop: "2em" }}>
      <Grid container spacing="3">
        <Grid item sm={4} xs={12}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {t("Confirmed cases.1")}
              </Typography>
              <Typography variant="h6">
                {" "}
                <CountUp end={reportGlobal.cases} separator=" " duration={3} />
              </Typography>
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
                {t("Deaths.1")}
              </Typography>
              <Typography variant="h6">
                <CountUp end={reportGlobal.deaths} separator=" " duration={3} />
              </Typography>
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
                {t("Recovered.1")}
              </Typography>
              <Typography variant="h6">
                <CountUp
                  end={reportGlobal.recovered}
                  separator=" "
                  duration={3}
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Highlight;
