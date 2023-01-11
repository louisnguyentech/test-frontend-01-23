import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      ticks: {
        color: "white",
      },
      grid: {
        color: "#777777",
      },
    },
    y: {
      ticks: {
        display: false,
      },
      border: {
        display: false,
      },
      grid: {
        display: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
    },
  },
};

const labels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [
        70,
        ...labels
          .slice(1, labels.length)
          .map(() => Math.floor(Math.random() * 100)),
      ],
      borderColor: "#FFCC21",
      backgroundColor: "#FFCC21",
    },
    {
      label: "Dataset 2",
      data: [
        70,
        ...labels
          .slice(1, labels.length)
          .map(() => Math.floor(Math.random() * 100)),
      ],
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
    },
  ],
};

const View = () => {
  return <Line options={options} data={data} />;
};

export default View;
