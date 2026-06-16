import { AlertTriangle, User, FileText, TrendingUp } from "lucide-react";

type Alert = {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "performance" | "warning" | "person" | "document";
};

function AlertIcon({ type }: { type: Alert["type"] }) {
  const className = "mt-0.5 h-4 w-4 shrink-0";

  if (type === "warning") {
    return <AlertTriangle className={`${className} text-orange-500`} />;
  }

  if (type === "person") {
    return <User className={`${className} text-blue-500`} />;
  }

  if (type === "document") {
    return <FileText className={`${className} text-gray-500`} />;
  }

  return <TrendingUp className={`${className} text-blue-500`} />;
}

function SkeletonAlert() {
  return (
    <li className="flex gap-3 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
      <div className="mt-0.5 h-4 w-4 bg-gray-200 rounded animate-pulse shrink-0"></div>
      <div className="min-w-0 flex-1">
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-1"></div>
        <div className="h-4 w-48 bg-gray-200 rounded animate-pulse mb-1"></div>
        <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </li>
  );
}

export function AlertsPanel({ alerts, isLoading }: { alerts: Alert[]; isLoading: boolean }) {
  return (
    <aside className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Alerts</h2>
        <button type="button" className="text-sm text-blue-600 hover:underline">
          Mark all read
        </button>
      </div>

      <ul className="space-y-4">
        {isLoading
          ? [1, 2, 3, 4].map((i) => <SkeletonAlert key={i} />)
          : alerts.map((alert) => (
              <li key={alert.id} className="flex gap-3 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <AlertIcon type={alert.type} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                  <p className="text-sm text-gray-500">{alert.description}</p>
                  <p className="mt-1 text-xs text-gray-400">{alert.time}</p>
                </div>
              </li>
            ))}
      </ul>
    </aside>
  );
}
