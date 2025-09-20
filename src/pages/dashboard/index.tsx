import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import type { ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useUser } from "../../shared/lib/useDashboard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export interface IUser {
  id: number;
  state: string;
  merc: number;
  bmw: number;
  tesla: number;
}

const Dashboard = () => {
  const { users, getUser } = useUser();

  useEffect(() => {
    getUser();
  }, [getUser]);

  const labels = users.length
    ? users.map((u) => u.state)
    : ["USA", "Uzbekistan", "Germany", "China"];

  const merc = users.length
    ? users.map((u) => u.merc)
    : [1500000, 500000, 3000000, 3500000];

  const bmw = users.length
    ? users.map((u) => u.bmw)
    : [1200000, 300000, 2700000, 3200000];

  const tesla = users.length
    ? users.map((u) => u.tesla)
    : [2000000, 200000, 1500000, 5000000];

  const total = merc.map((m, i) => m + bmw[i] + tesla[i]);

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: "MERC",
        data: merc,
        backgroundColor: "rgba(53, 162, 235, 1)",
      },
      {
        label: "BMW",
        data: bmw,
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "TESLA",
        data: tesla,
        backgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      datalabels: {
        anchor: "end",
        align: "end",
        formatter: (value: number, ctx) => {
          const i = ctx.dataIndex;
          const stateTotal = total[i];
          const percent = ((value / stateTotal) * 100).toFixed(1) + "%";
          return percent;
        },
        color: "#111",
        font: {
          weight: "bold",
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="rounded-xl bg-white p-6 shadow">
        <h3 className="mb-4 text-lg font-semibold">Car Brands by Country</h3>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default React.memo(Dashboard);
