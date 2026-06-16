import { DollarSign, AlertTriangle, TrendingUp, BarChart3, ArrowUp, ArrowDown } from "lucide-react";

type SummaryStat = {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
};

function StatIcon({ icon }: { icon: string }) {
  if (icon === "dollar") {
    return <DollarSign className="h-5 w-5 text-green-600" />;
  }

  if (icon === "alert") {
    return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
  }

  if (icon === "trending") {
    return <TrendingUp className="h-5 w-5 text-blue-600" />;
  }

  return <BarChart3 className="h-5 w-5 text-purple-600" />;
}

function SkeletonStatCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-4 flex items-start justify-between">
        <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
      </div>
      <div className="h-8 w-20 bg-gray-200 rounded animate-pulse mb-2"></div>
      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
    </div>
  );
}

export function StatCards({ stats, isLoading }: { stats?: SummaryStat[]; isLoading: boolean }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SkeletonStatCard />
        <SkeletonStatCard />
        <SkeletonStatCard />
        <SkeletonStatCard />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats?.map((stat) => (
        <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="mb-4 flex items-start justify-between">
            <StatIcon icon={stat.icon} />
            <span
              className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === "up" ? "text-green-600" : "text-red-500"
              }`}
            >
              {stat.trend === "up" ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
              {stat.change}
            </span>
          </div>
          <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
          <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
