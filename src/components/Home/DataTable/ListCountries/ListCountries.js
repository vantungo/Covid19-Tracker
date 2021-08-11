import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useTranslation } from "react-i18next";

function ListCountries({ countries }) {
  const { t } = useTranslation();
  const columns = [
    { field: "country", headerName: `${t("Country.1")}`, width: 200 },
    {
      field: "cases",
      headerName: `${t("Cases - cumulative total.1")}`,
      width: 235,
      editable: true,
    },
    {
      field: "todayCases",
      headerName: `${t("Cases - newly reported in last 24 hours.1")}`,
      width: 330,
      editable: true,
    },
    {
      field: "deaths",
      headerName: `${t("Deaths - cumulative total.1")}`,
      width: 240,
      editable: true,
    },
    {
      field: "todayDeaths",
      headerName: `${t("Deaths - newly reported in last 24 hours.1")}`,
      sortable: false,
      width: 320,
    },
  ];
  return (
    <div style={{ height: 500, width: "100%", marginBottom: "70px" }}>
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
