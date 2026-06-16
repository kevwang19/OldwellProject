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
    return (
      <svg className={`${className} text-orange-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    );
  }

  if (type === "person") {
    return (
      <svg className={`${className} text-blue-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    );
  }

  if (type === "document") {
    return (
      <svg className={`${className} text-gray-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6M9 8h1m8 12H8a2 2 0 01-2-2V6a2 2 0 012-2h5.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V18a2 2 0 01-2 2z" />
      </svg>
    );
  }

  return (
    <svg className={`${className} text-blue-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4-4 4 4 8-8" />
    </svg>
  );
}

export function AlertsPanel({ alerts }: { alerts: Alert[] }) {
  return (
    <aside className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Alerts</h2>
        <button type="button" className="text-sm text-blue-600 hover:underline">
          Mark all read
        </button>
      </div>

      <ul className="space-y-4">
        {alerts.map((alert) => (
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
