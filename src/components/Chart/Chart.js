import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import "./Chart.css";

ChartJS.register(ArcElement, Tooltip, Legend);



const Chart = ({ value }) => {


  const data = {
    datasets: [
      {
        data: [`${value}`, `${15 - value}`],
        backgroundColor: ["#438AF6", "rgba(54, 162, 235, 0.05)"],
        borderColor: ["#438AF6", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
    animations: {
      tension: {
        duration: 10000,
        easing: "linear",
        loop: false,
      },
    },

    
    
  };

  return (
    <div className="chart">
    <Doughnut
      data={data}
    /></div>
  );
};

export default Chart;
