export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Configure system settings</p>
      </div>

      <div className="bg-white rounded-lg shadow max-w-2xl">
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Application Name
              </label>
              <input
                type="text"
                value="Obliq"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Support Email
              </label>
              <input
                type="email"
                placeholder="support@example.com"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Timezone
              </label>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>UTC</option>
                <option>EST</option>
                <option>PST</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
