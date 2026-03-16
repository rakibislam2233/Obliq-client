export default function Tasks() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
        <p className="text-gray-600 mt-2">Manage your team tasks</p>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 text-gray-700 font-medium">Title</th>
                <th className="text-left py-2 text-gray-700 font-medium">Assigned To</th>
                <th className="text-left py-2 text-gray-700 font-medium">Status</th>
                <th className="text-left py-2 text-gray-700 font-medium">Due Date</th>
                <th className="text-left py-2 text-gray-700 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td colSpan={5} className="py-8 text-center text-gray-500">
                  No tasks found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
