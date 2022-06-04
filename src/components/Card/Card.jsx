import React, { useState } from "react";
import "./Card.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
function Card(props) {
  const [expended, setExpended] = useState(false);
  return (
    <AnimateSharedLayout>
      {expended ? (
        <ExpandedCard
          parms={props}
          setExpended={() => {
            setExpended(false);
          }}
        />
      ) : (
        <CompactCard
          parms={props}
          setExpended={() => {
            setExpended(true);
          }}
        />
      )}
    </AnimateSharedLayout>
  );
}

// CompactCard
function CompactCard({ parms, setExpended }) {
  const Png = parms.png;
  return (
    <motion.div
      className="CompactCard "
      style={{
        background: parms.color.background,
        boxShadow: parms.color.boxShadow,
      }}
      onClick={setExpended}
      layoutId="expandable-card"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={parms.barValue}
          text={`${parms.barValue}%`}
        />
        <span>{parms.title}</span>
      </div>
      <div className="details">
        <span>
          <Png />
        </span>
        <span>${parms.value}</span>
        <span>Last 24 Hours</span>
      </div>
    </motion.div>
  );
}
// ExpandedCard

function ExpandedCard({ parms, setExpended }) {
  const data = {
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
    <motion.div
      className="ExpandedCard"
      style={{
        background: parms.color.background,
        boxShadow: parms.color.boxShadow,
      }}
      layoutId="expandable-card"
    >
      <div className="UilTimes">
        <UilTimes onClick={setExpended} />
      </div>
      <span>{parms.title}</span>
      <div className="ChartContainer">
        <Chart series={parms.series} options={data.options} />
      </div>
      <span>Last 24 Hours</span>
    </motion.div>
  );
}
export default Card;
