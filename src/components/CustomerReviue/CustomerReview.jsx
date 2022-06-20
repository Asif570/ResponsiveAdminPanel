import React from "react";
import Chart from "react-apexcharts";
import "./CoustomerReview.css";

function CustomerReview() {
  const CustomerReviewData = {
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        color: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#fff"],
      },
      tooltip: {
        x: {
          show: true,
          format: "dd/MMM/yy HH:mm ",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2019-09-19T00:00:00.000Z",
          "2019-09-19T01:30:00.000Z",
          "2019-09-19T02:30:00.000Z",
          "2019-09-19T03:30:00.000Z",
          "2019-09-19T04:30:00.000Z",
          "2019-09-19T05:30:00.000Z",
          "2019-09-19T06:30:00.000Z",
        ],
      },
    },
  };
  return (
    <div className="CustomerReview">
      <Chart
        series={CustomerReviewData.series}
        options={CustomerReviewData.options}
        type="area"
      />
    </div>
  );
}

export default CustomerReview;
