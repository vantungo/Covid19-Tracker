import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography, Box } from "@material-ui/core";

function NationalFlag({ countryInfo, countryDetail }) {
  return (
    <Box style={{ textAlign: "center", marginBottom: "2em" }}>
      <Typography gutterBottom variant="h3">
        {countryDetail.country}
      </Typography>
      <img src={countryInfo.flag} alt="" />
    </Box>
  );
}

export default NationalFlag;
