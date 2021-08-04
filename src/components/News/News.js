import React, { useState, useEffect } from "react";
import ListNews from "./ListNews/ListNews";
import MainLayout from "../MainLayout/MainLayout";
import { Typography, Grid, Container } from "@material-ui/core";
import { getNews } from "../../apis/apis";
import { useDispatch } from "react-redux";
import { GlobalActions } from "../../redux/slices/globalSlice";
function News(props) {
  const [news, setNews] = useState([]);
  const dispatch = useDispatch();
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
  return (
    <MainLayout>
      <Container>
        <div style={{ marginTop: "2em" }}>
          <ListNews listNews={news} />
        </div>
      </Container>
    </MainLayout>
  );
}

export default News;
