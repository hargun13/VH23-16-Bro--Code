import React from "react";
import { Doughnut } from "react-chartjs-2";
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

const DoughnutChart = () => {
  const totalPercentage = 100;
  const scholarshipsApplied = 3;
  const otherPercentage = totalPercentage - scholarshipsApplied;

  const data = {
    labels: ["Scholarships", "AllScholarships"],
    datasets: [
      {
        data: [scholarshipsApplied, otherPercentage],
        backgroundColor: ["#a747ba", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%", // Adjust this value to control the size of the hole in the center
    legend: {
      position: "right",
    },
    plugins: {
      title: {
        display: true,
        text: "Number of Scholarships applied",
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
    width: "400px",
    height: "350px",
  };

  return (
    <div style={containerStyle}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
