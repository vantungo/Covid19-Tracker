import React from "react";
import { Typography, Box } from "@material-ui/core";

function NationalFlag({ countryInfo, countryDetail }) {
  return (
    <Box style={{ textAlign: "center", marginBottom: "2em" }}>
      <Typography gutterBottom variant="h3" color="textSecondary">
        {countryDetail.country}
      </Typography>
      <img src={countryInfo.flag} alt="" />
    </Box>
  );
}

export default NationalFlag;
