import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: "18em",
      [theme.breakpoints.up("sm")]: {
        width: "35em",
      },
    },
    "& input": {
      padding: "12.5px 14px",
      outline:"none"
    },
  },
}));
function SearchCountry({ countries, value, handleOnChange }) {

  const classes = useStyles();
  return (
    <div style={{ width: 325 }}>
      <Autocomplete
        disableClearable
        openOnFocus
        autoComplete
        options={countries}
        onChange={handleOnChange}
        getOptionLabel={option=> option.country}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search country..."
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
}

export default SearchCountry;
