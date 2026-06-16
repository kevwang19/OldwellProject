import type { SummaryStat } from "@/lib/api";

function StatIcon({ icon }: { icon: string }) {
  const className = "h-5 w-5 text-gray-400";

  if (icon === "dollar") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2" />
      </svg>
    );
  }

  if (icon === "alert") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    );
  }

  if (icon === "trending") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17l6-6 4 4 8-8" />
      </svg>
    );
  }

  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4-4 4 4 8-8" />
    </svg>
  );
}

export function StatCards({ stats }: { stats: SummaryStat[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="mb-4 flex items-start justify-between">
            <StatIcon icon={stat.icon} />
            <span
              className={`text-sm font-medium ${
                stat.trend === "up" ? "text-green-600" : "text-red-500"
              }`}
            >
              {stat.trend === "up" ? "↗" : "↘"} {stat.change}
            </span>
          </div>
          <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
          <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
