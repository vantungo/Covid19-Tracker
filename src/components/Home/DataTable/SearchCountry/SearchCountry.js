import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useTranslation } from 'react-i18next';

function SearchCountry({ countries, value, handleOnChange }) {
  const { t } = useTranslation();

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
            label={t("Search country.1")}
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
