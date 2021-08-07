import React, { useState, useEffect } from "react";
import ListNews from "./ListNews/ListNews";
import MainLayout from "../MainLayout/MainLayout";
import { Typography, Grid, Container } from "@material-ui/core";
import { getNews } from "../../apis/apis";
import { useSelector, useDispatch } from "react-redux";
import { GlobalActions } from "../../redux/slices/globalSlice";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    "& .MuiContainer-root": {
      [theme.breakpoints.up("sm")]: {
        marginRight: "38px",
      },
    },
  },
}));
function News(props) {
  const [news, setNews] = useState([]);
  const [themeModeNewsPage, setThemeModeNewsPage] = useState({});
  const dispatch = useDispatch();
  const classes = useStyles();
  const themeMode = useSelector((state) => state.GlobalReducer.themeMode);

  useEffect(() => {
    getAllNews();
  }, []);
  const getAllNews = () => {
    dispatch(GlobalActions.loadingPage(true));
    getNews()
      .then((res) => {
        setNews(res.data.articles);
        setTimeout(() => {
          dispatch(GlobalActions.loadingPage(false));
        }, 2000);
      })
      .catch((error) => {
        alert(error);
        dispatch(GlobalActions.loadingPage(true));
        setTimeout(() => {
          dispatch(GlobalActions.loadingPage(false));
        }, 2000);
      });
  };

  useEffect(() => {
    if (themeMode === "light") {
      setThemeModeNewsPage({
        backgroundColor: "white",
      });
    } else if (themeMode === "dark") {
      setThemeModeNewsPage({
        backgroundColor: "#424242",
      });
    }
  }, [themeMode]);

  return (
    <MainLayout>
      <div className={classes.root} style={themeModeNewsPage}>
        <Container>
          <div style={{ paddingTop: "1em" }}>
            <ListNews listNews={news} />
          </div>
        </Container>
      </div>
    </MainLayout>
  );
}

export default News;
