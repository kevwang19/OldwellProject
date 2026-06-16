"use client";

import { useEffect, useState } from "react";

import { AlertsPanel } from "@/components/dashboard/AlertsPanel";
import { AllocationChart } from "@/components/dashboard/AllocationChart";
import { Header } from "@/components/nav/Header";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { StatCards } from "@/components/dashboard/StatCards";

type SummaryStat = {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
};

type PerformancePoint = {
  month: string;
  portfolio: number;
  benchmark: number;
};

type AllocationSlice = {
  name: string;
  value: number;
  color: string;
};

type Alert = {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "performance" | "warning" | "person" | "document";
};

type DashboardData = {
  summary: SummaryStat[];
  performance: {
    title: string;
    subtitle: string;
    data: PerformancePoint[];
  };
  allocation: {
    title: string;
    subtitle: string;
    data: AllocationSlice[];
  };
  alerts: Alert[];
};

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

async function fetchDashboard(): Promise<DashboardData> {
  const res = await fetch(`${API_URL}/api/dashboard`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to load dashboard data");
  }

  return res.json();
}

export default function DashboardPage() {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="mx-auto grid max-w-7xl gap-6 p-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <StatCards stats={data?.summary} isLoading={!data} />

          <div className="grid gap-6 xl:grid-cols-2">
            <PerformanceChart
              title={data?.performance.title || "Portfolio Performance"}
              subtitle={data?.performance.subtitle || "vs Benchmark"}
              data={data?.performance.data || []}
              isLoading={!data}
            />
            <AllocationChart
              title={data?.allocation.title || "Asset Allocation"}
              subtitle={data?.allocation.subtitle || "Current Holdings"}
              data={data?.allocation.data || []}
              isLoading={!data}
            />
          </div>
        </div>

        <AlertsPanel alerts={data?.alerts || []} isLoading={!data} />
      </div>
    </div>
  );
}