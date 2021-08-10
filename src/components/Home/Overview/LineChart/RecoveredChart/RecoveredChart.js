import React, { useState, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import { Highcharts } from "highcharts";
import { Button, ButtonGroup, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

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
    colors: ["#F4B400"],
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
        name: "Recovered",
        data: date.map((item) => report[item]),
      },
    ],
  };
};

function RecoveredChart({ report }) {
  const [options, setOptions] = useState({});
  const [reportType, setReportType] = useState("all");
  const { t } = useTranslation();

  useEffect(() => {
    let customData = [];
    let reportRecovered = [];
    for (const date in report.recovered) {
      reportRecovered.push(date);
    }
    switch (reportType) {
      case "all":
        customData = reportRecovered;
        break;
      case "30":
        customData = reportRecovered.slice(
          Math.max(reportRecovered.length - 30, 1)
        );
        break;
      case "7":
        customData = reportRecovered.slice(
          Math.max(reportRecovered.length - 7, 1)
        );
        break;

      default:
        customData = reportRecovered;
        break;
    }

    setOptions(generateOptions(customData, report.recovered));
  }, [report, reportType]);

  return (
    <div>
      <Typography variant="h6" color="textSecondary">{t("Recovered.1")}</Typography>
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

export default RecoveredChart;
