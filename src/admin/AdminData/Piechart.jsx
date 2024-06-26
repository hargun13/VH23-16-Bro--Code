import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement
);

const PieChart = () => {
  const data = {
    labels: [
      "New Scholarships",
      "Pvt Scholarships",
      "Govt Scholarships",
      "Expired Scholarships",
      "Others",
    ],
    datasets: [
      {
        data: [28, 25, 20, 6, 21],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#a747ba",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#a747ba",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: "right",
    },
    plugins: {
      title: {
        display: true,
        text: "Classification and count of Scholarships",
        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.parsed.toFixed(2);
            return value + "%";
          },
        },
      },
    },
  };

  const containerStyle = {
    width: "550px",
    height: "300px",
  };

  return (
    <div style={containerStyle}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
