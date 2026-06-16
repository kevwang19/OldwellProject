const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

export type SummaryStat = {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
};

export type PerformancePoint = {
  month: string;
  portfolio: number;
  benchmark: number;
};

export type AllocationSlice = {
  name: string;
  value: number;
  color: string;
};

export type Alert = {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "performance" | "warning" | "person" | "document";
};

export type DashboardData = {
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

export async function fetchDashboard(): Promise<DashboardData> {
  const res = await fetch(`${API_URL}/api/dashboard`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to load dashboard data");
  }

  return res.json();
}
