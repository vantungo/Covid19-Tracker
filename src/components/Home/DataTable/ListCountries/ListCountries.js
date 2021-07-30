import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "country", headerName: "Country", width: 200 },
  {
    field: "cases",
    headerName: "Cases - cumulative total",
    width: 235,
    editable: true,
  },
  {
    field: "todayCases",
    headerName: "Cases - newly reported in last 24 hours",
    width: 330,
    editable: true,
  },
  {
    field: "deaths",
    headerName: "Deaths - cumulative total",
    width: 240,
    editable: true,
  },
  {
    field: "todayDeaths",
    headerName: "Deaths - newly reported in last 24 hours",
    sortable: false,
    width: 320,
  },
];

function ListCountries({countries}) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={countries}
        columns={columns}
        getRowId={(row) => row.updated}
        rowsPerPageOptions={[10, 25, 100]}
      />
    </div>
  );
}

export default ListCountries;
