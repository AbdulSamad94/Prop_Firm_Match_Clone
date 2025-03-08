import {} from "next-auth";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { signOut } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">{session.user?.email}</span>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome back, {session.user?.name}!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example Dashboard Cards */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800">
                Total Projects
              </h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">12</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-800">
                Completed Tasks
              </h3>
              <p className="text-3xl font-bold text-green-600 mt-2">24</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-purple-800">
                Upcoming Events
              </h3>
              <p className="text-3xl font-bold text-purple-600 mt-2">3</p>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-gray-50">
                <p className="text-sm text-gray-600">
                  Created new project Website Redesign
                </p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2 bg-gray-50">
                <p className="text-sm text-gray-600">
                  Completed task Homepage Layout
                </p>
                <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
