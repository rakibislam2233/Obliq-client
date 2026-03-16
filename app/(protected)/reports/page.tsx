export default function Reports() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-600 mt-2">View analytics and reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-700 font-medium mb-4">Monthly Summary</h3>
          <p className="text-gray-500">Report data will appear here</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-700 font-medium mb-4">Performance Metrics</h3>
          <p className="text-gray-500">Report data will appear here</p>
        </div>
      </div>
    </div>
  );
}
