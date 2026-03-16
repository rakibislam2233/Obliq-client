"use client";

export default function SettingsPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">Manage your account and system preferences</p>
      </div>

      {/* Settings Tabs */}
      <div className="flex gap-2 sm:gap-4 border-b border-gray-200 overflow-x-auto">
        <button className="pb-3 sm:pb-4 px-2 sm:px-3 text-orange-600 border-b-2 border-orange-600 font-semibold text-xs sm:text-sm whitespace-nowrap">
          General
        </button>
        <button className="pb-3 sm:pb-4 px-2 sm:px-3 text-gray-600 hover:text-gray-900 font-semibold text-xs sm:text-sm whitespace-nowrap">
          Security
        </button>
        <button className="pb-3 sm:pb-4 px-2 sm:px-3 text-gray-600 hover:text-gray-900 font-semibold text-xs sm:text-sm whitespace-nowrap">
          Notifications
        </button>
        <button className="pb-3 sm:pb-4 px-2 sm:px-3 text-gray-600 hover:text-gray-900 font-semibold text-xs sm:text-sm whitespace-nowrap">
          Integrations
        </button>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm sm:max-w-2xl">
          <div className="p-4 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">General Settings</h2>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm text-gray-700 font-semibold mb-2">
                  Application Name
                </label>
                <input
                  type="text"
                  defaultValue="Obliq"
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-xs sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-gray-700 font-semibold mb-2">
                  Support Email
                </label>
                <input
                  type="email"
                  placeholder="support@example.com"
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-xs sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-gray-700 font-semibold mb-2">
                  Timezone
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-xs sm:text-sm">
                  <option>UTC</option>
                  <option>EST (UTC-5)</option>
                  <option>PST (UTC-8)</option>
                  <option>IST (UTC+5:30)</option>
                </select>
              </div>
              <div className="pt-2 sm:pt-4">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg transition-colors text-xs sm:text-sm">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-xl border border-red-200 shadow-sm sm:max-w-2xl">
          <div className="p-4 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-red-600 mb-2 sm:mb-4">Danger Zone</h2>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">Irreversible and destructive actions</p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg transition-colors text-xs sm:text-sm">
              Clear All Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
