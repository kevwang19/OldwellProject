"use client";

import "@/lib/chart-setup";
import { Doughnut } from "react-chartjs-2";

import type { AllocationSlice } from "@/lib/api";

export function AllocationChart({
  title,
  subtitle,
  data,
}: {
  title: string;
  subtitle: string;
  data: AllocationSlice[];
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
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <p className="text-sm text-gray-500">{subtitle}</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-[180px_1fr] sm:items-center">
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
      </div>
    </div>
  );
}
