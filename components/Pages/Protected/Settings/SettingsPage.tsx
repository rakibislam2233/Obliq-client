"use client";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your account and system preferences</p>
      </div>

      {/* Settings Tabs */}
      <div className="flex gap-4 border-b border-gray-200">
        <button className="pb-4 px-2 text-orange-600 border-b-2 border-orange-600 font-semibold">
          General
        </button>
        <button className="pb-4 px-2 text-gray-600 hover:text-gray-900 font-semibold">
          Security
        </button>
        <button className="pb-4 px-2 text-gray-600 hover:text-gray-900 font-semibold">
          Notifications
        </button>
        <button className="pb-4 px-2 text-gray-600 hover:text-gray-900 font-semibold">
          Integrations
        </button>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm max-w-2xl">
          <div className="p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">General Settings</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Application Name
                </label>
                <input
                  type="text"
                  defaultValue="Obliq"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Support Email
                </label>
                <input
                  type="email"
                  placeholder="support@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Timezone
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500">
                  <option>UTC</option>
                  <option>EST (UTC-5)</option>
                  <option>PST (UTC-8)</option>
                  <option>IST (UTC+5:30)</option>
                </select>
              </div>
              <div className="pt-4">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-xl border border-red-200 shadow-sm max-w-2xl">
          <div className="p-8">
            <h2 className="text-xl font-bold text-red-600 mb-4">Danger Zone</h2>
            <p className="text-gray-600 mb-6">Irreversible and destructive actions</p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
              Clear All Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
