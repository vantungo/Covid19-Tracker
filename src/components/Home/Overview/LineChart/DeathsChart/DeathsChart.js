import React, { useState, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import { Highcharts } from "highcharts";
import { Button, ButtonGroup, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const generateOptions = (date, report) => {
  return {
    chart: {
      height: 500,
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: date,
      crosshair: true,
    },
    colors: ["#F3585B"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: "right",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Deaths",
        data: date.map((item) => report[item]),
      },
    ],
  };
};

function DeathsChart({ report }) {
  const [options, setOptions] = useState({});
  const [reportType, setReportType] = useState("all");
  const { t } = useTranslation();
  const themeMode = useSelector((state) => state.GlobalReducer.themeMode);

  useEffect(() => {
    let customData = [];
    let reportDeaths = [];
    for (const date in report.deaths) {
      reportDeaths.push(date);
    }
    switch (reportType) {
      case "all":
        customData = reportDeaths;
        break;
      case "30":
        customData = reportDeaths.slice(Math.max(reportDeaths.length - 30, 1));
        break;
      case "7":
        customData = reportDeaths.slice(Math.max(reportDeaths.length - 7, 1));
        break;

      default:
        customData = reportDeaths;
        break;
    }

    setOptions(generateOptions(customData, report.deaths));
  }, [report, reportType]);

  useEffect(() => {
    if (themeMode === "light") {
      setOptions({
        chart: {
          backgroundColor: "white",
        },
      });
    } else if (themeMode === "dark") {
      setOptions({
        chart: {
          backgroundColor: "#424242",
        },
      });
    }
  }, [themeMode]);

  return (
    <div>
      <Typography variant="h6" color="textSecondary">
        {t("Deaths.1")}
      </Typography>
      <ButtonGroup
        size="small"
        aria-label="small outlined button group"
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          color={reportType === "all" ? "secondary" : ""}
          onClick={() => setReportType("all")}
        >
          {t("All.1")}
        </Button>
        <Button
          color={reportType === "30" ? "secondary" : ""}
          onClick={() => setReportType("30")}
        >
          {t("Monthly.1")}
        </Button>
        <Button
          color={reportType === "7" ? "secondary" : ""}
          onClick={() => setReportType("7")}
        >
          {t("Weekly.1")}
        </Button>
      </ButtonGroup>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default DeathsChart;
