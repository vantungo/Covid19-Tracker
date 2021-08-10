import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import { Highcharts } from "highcharts";
import { Button, ButtonGroup, Typography } from "@material-ui/core";
import { useTranslation } from 'react-i18next';

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
    colors: ["#4285F4"],
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
        name: "Confirmed cases",
        data: date.map(item => report[item]),
      },
    ],
  };
};
function CountryCasesChart({ reportCountryHistory }) {
  const [options, setOptions] = useState({});
  const [reportType, setReportType] = useState("all");
  const { t } = useTranslation();

  useEffect(() => {
    let customData = [];
    let reportCasesCountry = [];
    for (const date in reportCountryHistory.cases) {
      reportCasesCountry.push(date);
    }
    switch (reportType) {
      case "all":
        customData = reportCasesCountry;
        break;
      case "30":
        customData = reportCasesCountry.slice(
          Math.max(reportCasesCountry.length - 30, 1)
        );
        break;
      case "7":
        customData = reportCasesCountry.slice(
          Math.max(reportCasesCountry.length - 7, 1)
        );
        break;

      default:
        customData = reportCasesCountry;
        break;
    }

    setOptions(generateOptions(customData, reportCountryHistory.cases));
  }, [reportCountryHistory, reportType]);
  return (
    <div>
      <Typography variant="h6" color="textSecondary">
      {t("Confirmed cases.1")}
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

export default CountryCasesChart;
