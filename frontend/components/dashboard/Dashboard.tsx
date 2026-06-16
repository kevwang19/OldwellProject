"use client";

import { useEffect, useState } from "react";

import { fetchDashboard } from "@/lib/api";
import type { DashboardData } from "@/lib/api";

import { AlertsPanel } from "./AlertsPanel";
import { AllocationChart } from "./AllocationChart";
import { Header } from "./Header";
import { PerformanceChart } from "./PerformanceChart";
import { StatCards } from "./StatCards";

export function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboard()
      .then(setData)
      .catch((err: Error) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700">
          {error}. Is the backend running on port 8000?
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="mx-auto grid max-w-7xl gap-6 p-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <StatCards stats={data.summary} />

          <div className="grid gap-6 xl:grid-cols-2">
            <PerformanceChart
              title={data.performance.title}
              subtitle={data.performance.subtitle}
              data={data.performance.data}
            />
            <AllocationChart
              title={data.allocation.title}
              subtitle={data.allocation.subtitle}
              data={data.allocation.data}
            />
          </div>
        </div>

        <AlertsPanel alerts={data.alerts} />
      </div>
    </div>
  );
}
