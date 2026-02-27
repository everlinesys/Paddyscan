import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h2 className="text-3xl font-bold mb-6">My Crops Dashboard</h2>

      <div className="space-x-4">
        <Link to="/upload">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Scan New Crop
          </button>
        </Link>

        <Link to="/history">
          <button className="bg-white border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-100">
            View History
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;