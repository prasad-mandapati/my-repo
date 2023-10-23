import React from "react";
import "./graph.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Bargraph = () => {
  const options = {
    plugins: {
      responsive:true,
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Nevember",
    "December",
  ];
  const values = labels.map(() =>
    faker.datatype.number({ min: 100, max: 1000 })
  );
  const soredvalues = values.map((item) => item);
  soredvalues.sort((a, b) => a - b).reverse();

  const data = {
    labels,
    datasets: [
      {
        labels,
        data: values,
        backgroundColor: values.map((item) =>
          item === soredvalues[0]
            ? "rgba(62, 0, 145, 0.87)"
            : "rgba(62, 0, 145, 0.24)"
        ),
        borderRadius: "5",
      },
    ],
  };

  return (
    <div className="--p bargraph">
      <Bar options={options} data={data} />
    </div>
  );
};

export default Bargraph;
