import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Old Well Project</h1>
      <Link 
        href="/dashboard" 
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
