export default function Audit() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Audit Log</h1>
        <p className="text-gray-600 mt-2">View system activity and changes</p>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 text-gray-700 font-medium">Actor</th>
                <th className="text-left py-2 text-gray-700 font-medium">Action</th>
                <th className="text-left py-2 text-gray-700 font-medium">Target</th>
                <th className="text-left py-2 text-gray-700 font-medium">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td colSpan={4} className="py-8 text-center text-gray-500">
                  No activities found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
