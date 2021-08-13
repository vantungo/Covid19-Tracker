import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import MainLayout from "./../MainLayout/MainLayout";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useSelector, useDispatch } from "react-redux";
import { GlobalActions } from "../../redux/slices/globalSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  boxContentMain: {
    width: 345,
    marginBottom: "1.5em",
    [theme.breakpoints.up("sm")]: {
      width: 992,
      margin: "0 auto",
    },
  },
  imgNews: {
    height: "100%",
  },
  title: {
    fontSize: "25px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "50px",
    },
  },
  author: {
    fontSize: "15px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
    },
  },
  publishedAt: {
    fontSize: "15px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
    },
  },
  content: {
    fontSize: "18px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "22px",
    },
  },
}));

function NewsDetail(props) {
  const classes = useStyles();
  const [newsDetail, setNewsDetai] = useState([]);
  const [themeModeNewsDetailPage, setThemeModeNewsDetailPage] = useState({});
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.GlobalReducer.themeMode);

  useEffect(() => {
    if (themeMode === "light") {
      setThemeModeNewsDetailPage({
        backgroundColor: "white",
      });
    } else if (themeMode === "dark") {
      setThemeModeNewsDetailPage({
        backgroundColor: "#424242",
        color: "white",
      });
    }
  }, [themeMode]);
  return (
    <MainLayout>
      <div className={classes.root} style={themeModeNewsDetailPage}>
        <Container style={{ paddingTop: "1em" }} className={classes.boxContent}>
          <Grid container style={{ display: "block" }}>
            <Grid>
              <Box className={classes.boxContentMain}>
                <CardActionArea>
                  <CardMedia
                    className={classes.imgNews}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://s.yimg.com/os/creatr-uploaded-images/2021-08/782fb860-fb79-11eb-9f7b-1e1e5dbabf06"
                    title="Contemplative Reptile"
                  />
                  <CardContent style={{ padding: "16px 0 100px " }}>
                    <Typography gutterBottom className={classes.title}>
                      New Driverless Semi Truck Demo
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="p"
                      component="p"
                      className={classes.author}
                    >
                      Chetan Woodun
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="textSecondary"
                      className={classes.publishedAt}
                    >
                      2021-08-12T15:17:14Z
                    </Typography>
                    <Typography
                      variant="p"
                      component="p"
                      style={{ textAlign: "justify" }}
                      className={classes.content}
                    >
                      The entry-level Polestar 2 with a single motor will start
                      at $45,900", "description": "Polestar is finally ready to
                      confirm pricing and details for its more affordable
                      single-motor Polestar 2. As Autoblogreports, the 2022
                      \"entry-level\" EV will start at $45,900 before
                      incentives, or a cool $14,000 below the original
                      dual-motor version's price. I…
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </MainLayout>
  );
}

export default NewsDetail;
