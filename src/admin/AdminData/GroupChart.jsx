import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GroupedChart = () => {
  const years = Array.from({ length: 8 }, (_, i) => 2014 + i);

  const data = {
    labels: years.map((year) => year.toString()),
    datasets: [
      {
        label: "User Logins",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [39, 42, 92, 132, 140, 180, 134, 234],
        barPercentage: 0.2,
      },
      {
        label: "User Registrations",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [189, 265, 330, 390, 445, 523, 449, 561],
        barPercentage: 0.2,
      },
      {
        label: "Avg Session Duration",
        backgroundColor: "rgba(75, 255, 67, 0.2)",
        borderColor: "rgba(75, 255, 67, 1)",
        borderWidth: 1,
        data: [39, 59, 78, 94, 125, 153, 121, 189],
        barPercentage: 0.2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
        labels: years.map((year) => year.toString()),
        grid: {
          offset: true,
        },
      },
      y: {
        beginAtZero: true,
        max: 600,
        stepSize: 100,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "User Engagement Trend",

        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          size: 16,
        },
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GroupedChart;
