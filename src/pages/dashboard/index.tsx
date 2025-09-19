import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  type ChartType,
} from "chart.js";
import { Chart, Doughnut } from "react-chartjs-2";
import type { ChartData } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const trafficLabels = [
  "Jan 01",
  "Jan 02",
  "Jan 03",
  "Jan 04",
  "Jan 05",
  "Jan 06",
  "Jan 07",
  "Jan 08",
  "Jan 09",
  "Jan 10",
  "Jan 11",
  "Jan 12",
];

const trafficData: ChartData<ChartType, number[], string> = {
  labels: trafficLabels,
  datasets: [
    {
      type: "bar",
      label: "Website Blog",
      data: [400, 500, 450, 600, 250, 400, 200, 300, 700, 350, 250, 150],
      backgroundColor: "rgba(53, 162, 235, 0.7)",
    },
    {
      type: "line",
      label: "Social Media",
      data: [20, 40, 30, 45, 35, 25, 30, 50, 40, 35, 25, 15],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.3)",
      tension: 0.3,
    },
  ],
};

const incomeData = {
  labels: ["Completed", "Remaining"],
  datasets: [
    {
      data: [75, 25],
      backgroundColor: ["#34d399", "#e5e7eb"],
      cutout: "75%",
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-white p-4 shadow">
          <p className="text-sm text-gray-500">New Accounts</p>
          <h2 className="text-2xl font-bold text-green-600">+234%</h2>
          <p className="text-sm text-gray-400">58</p>
        </div>
        <div className="rounded-xl bg-white p-4 shadow">
          <p className="text-sm text-gray-500">Total Expenses</p>
          <h2 className="text-2xl font-bold text-red-600">-71%</h2>
          <p className="text-sm text-gray-400">62</p>
        </div>
        <div className="rounded-xl bg-white p-4 shadow">
          <p className="text-sm text-gray-500">Company Value</p>
          <h2 className="text-2xl font-bold">$1.45M</h2>
          <p className="text-sm text-yellow-600">↑ 72</p>
        </div>
        <div className="rounded-xl bg-white p-4 shadow">
          <p className="text-sm text-gray-500">New Employees</p>
          <h2 className="text-2xl font-bold text-green-600">+34</h2>
          <p className="text-sm text-green-500">81 hires</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="col-span-2 rounded-xl bg-white p-6 shadow">
          <h3 className="mb-4 text-lg font-semibold">Traffic Sources</h3>
          <Chart type="bar" data={trafficData} />
        </div>

        <div className="rounded-xl bg-white p-6 shadow flex flex-col items-center justify-center">
          <h3 className="mb-4 text-lg font-semibold">Income</h3>
          <div className="w-40">
            <Doughnut data={incomeData} />
          </div>
          <p className="mt-4 text-xl font-bold">75%</p>
          <p className="text-sm text-gray-500">Spending Target: 32%</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Dashboard);
