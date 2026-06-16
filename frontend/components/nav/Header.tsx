import { Bell } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-blue-600">OWL Project</span>
      </div>
      <div className="flex items-center gap-4">
        <button type="button" aria-label="Notifications" className="text-gray-500 hover:text-gray-700">
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-medium text-white">
          JD
        </div>
      </div>
    </header>
  );
}
