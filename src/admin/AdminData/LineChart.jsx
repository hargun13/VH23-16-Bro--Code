import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { useState } from "react";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

const LineChart = () => {
  const [data, setData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Total scholarships",
        data: [23, 37, 40, 45, 54, 67, 57, 71],
        borderColor: "rgba(225, 23, 255, 1)",
        backgroundColor: "rgba(225, 23, 255, 0.2)",
        fill: true,
      },
      {
        label: "New Scholarships",
        data: [5, 14, 13, 25, 35, 37, 25, 30],
        borderColor: "rgba(45, 125, 230, 1)",
        backgroundColor: "rgba(45, 125, 230, 0.2)",
        fill: true,
      },
      {
        label: "Expired Scholarships",
        data: [18, 23, 27, 20, 19, 30, 32, 41],
        borderColor: "rgba(255, 20, 30, 1)",
        backgroundColor: "rgba(255, 20, 30, 0.2)",
        fill: true,
      },
    ],
  });

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Trends in scholarship availability",
        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          size: 16,
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} className="mx-16 "></Line>
    </div>
  );
};

export default LineChart;
