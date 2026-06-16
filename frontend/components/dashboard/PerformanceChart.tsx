"use client";

import "@/lib/chart-setup";
import { Line } from "react-chartjs-2";

import type { PerformancePoint } from "@/lib/api";

export function PerformanceChart({
  title,
  subtitle,
  data,
}: {
  title: string;
  subtitle: string;
  data: PerformancePoint[];
}) {
  const chartData = {
    labels: data.map((point) => point.month),
    datasets: [
      {
        label: "Portfolio",
        data: data.map((point) => point.portfolio),
        borderColor: "#2563eb",
        backgroundColor: "#2563eb",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.3,
      },
      {
        label: "Benchmark",
        data: data.map((point) => point.benchmark),
        borderColor: "#9ca3af",
        backgroundColor: "#9ca3af",
        borderWidth: 2,
        borderDash: [6, 4],
        pointRadius: 0,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        align: "start" as const,
        labels: { boxWidth: 16, boxHeight: 2 },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6b7280", font: { size: 11 } },
      },
      y: {
        min: 0,
        max: 16,
        ticks: {
          stepSize: 4,
          color: "#6b7280",
          font: { size: 11 },
          callback: (value: number | string) => `${value}%`,
        },
        grid: { color: "#f3f4f6" },
      },
    },
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <p className="text-sm text-gray-500">{subtitle}</p>
      <div className="mt-4 h-64">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
