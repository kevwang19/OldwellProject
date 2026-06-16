"use client";

import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
);

type AllocationSlice = {
  name: string;
  value: number;
  color: string;
};

export function AllocationChart({
  data,
  isLoading = false,
}: {
  data: AllocationSlice[];
  isLoading?: boolean;
}) {
  const chartData = {
    labels: data.map((slice) => slice.name),
    datasets: [
      {
        data: data.map((slice) => slice.value),
        backgroundColor: data.map((slice) => slice.color),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "65%",
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-gray-900">Asset Allocation</h2>
      <p className="text-sm text-gray-500">Current Holdings</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-[180px_1fr] sm:items-center">
        {isLoading ? (
          <>
            <div className="mx-auto h-44 w-44 bg-gray-100 rounded-full animate-pulse"></div>
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 bg-gray-200 rounded-sm animate-pulse"></div>
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="h-4 w-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mx-auto h-44 w-44">
              <Doughnut data={chartData} options={options} />
            </div>

            <ul className="space-y-2">
              {data.map((slice) => (
                <li key={slice.name} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-gray-700">
                    <span
                      className="h-3 w-3 rounded-sm"
                      style={{ backgroundColor: slice.color }}
                    />
                    {slice.name}
                  </span>
                  <span className="font-medium text-gray-900">{slice.value}%</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
