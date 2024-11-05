import React from 'react';
import { User, Building, Bell, Shield, Database } from 'lucide-react';

export default function SettingsView() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="grid grid-cols-4 divide-x">
            <div className="p-4">
              <nav className="space-y-1">
                {[
                  { icon: User, label: 'Profile' },
                  { icon: Building, label: 'Organization' },
                  { icon: Bell, label: 'Notifications' },
                  { icon: Shield, label: 'Security' },
                  { icon: Database, label: 'Data Management' },
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    className="flex items-center w-full px-4 py-2 text-sm rounded-lg hover:bg-gray-50"
                  >
                    <Icon size={16} className="mr-3 text-gray-500" />
                    {label}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="col-span-3 p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Profile Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="input-primary w-full mt-1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="input-primary w-full mt-1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <select className="input-primary w-full mt-1">
                    <option>Sales Representative</option>
                    <option>Sales Manager</option>
                    <option>Administrator</option>
                  </select>
                </div>
                <div className="pt-4">
                  <button className="btn-primary">Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}