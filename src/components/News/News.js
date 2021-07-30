import React, { useState, useEffect } from "react";
import ListNews from "./ListNews/ListNews";
import MainLayout from "../MainLayout/MainLayout";
import { Typography, Grid, Container } from "@material-ui/core";
import { getNews } from "../../apis/apis";
function News(props) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getAllNews();
  }, []);
  const getAllNews = () => {
    getNews().then((res) => setNews(res.data.articles));
  };
  return (
    <MainLayout>
      <Container>
        <Typography variant="h2">News</Typography>
        <ListNews listNews={news} />
      </Container>
    </MainLayout>
  );
}

export default News;
