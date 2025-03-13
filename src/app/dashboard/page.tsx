export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          className="p-6 rounded-lg"
          style={{
            backgroundColor: "var(--background-card)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h2 className="text-xl font-semibold mb-2">Total Firms</h2>
          <p className="text-3xl font-bold">5</p>
        </div>

        <div
          className="p-6 rounded-lg"
          style={{
            backgroundColor: "var(--background-card)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h2 className="text-xl font-semibold mb-2">Active Firms</h2>
          <p className="text-3xl font-bold">3</p>
        </div>

        <div
          className="p-6 rounded-lg"
          style={{
            backgroundColor: "var(--background-card)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold">24</p>
        </div>

        <div
          className="p-6 rounded-lg"
          style={{
            backgroundColor: "var(--background-card)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h2 className="text-xl font-semibold mb-2">New Requests</h2>
          <p className="text-3xl font-bold">7</p>
        </div>
      </div>
    </div>
  );
}
