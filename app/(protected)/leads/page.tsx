export default function Leads() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Leads</h1>
        <p className="text-gray-600 mt-2">Manage your sales leads</p>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 text-gray-700 font-medium">Name</th>
                <th className="text-left py-2 text-gray-700 font-medium">Company</th>
                <th className="text-left py-2 text-gray-700 font-medium">Status</th>
                <th className="text-left py-2 text-gray-700 font-medium">Contact</th>
                <th className="text-left py-2 text-gray-700 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td colSpan={5} className="py-8 text-center text-gray-500">
                  No leads found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
