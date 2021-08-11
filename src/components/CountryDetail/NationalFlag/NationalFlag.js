import React from "react";
import { Typography, Box } from "@material-ui/core";

function NationalFlag({ countryInfo, countryDetail }) {
  return (
    <Box style={{ textAlign: "center", marginBottom: "2em" }}>
      <img src={countryInfo.flag} alt="" style={{width:"300px"}} />
    </Box>
  );
}

export default NationalFlag;
