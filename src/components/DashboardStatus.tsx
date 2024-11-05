import React from 'react';
import { Activity, CheckCircle2, XCircle } from 'lucide-react';
import type { DashboardStatus } from '../types/types';

interface DashboardStatusProps {
  status: DashboardStatus;
}

export default function DashboardStatus({ status }: DashboardStatusProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Dashboard Status</h3>
        <Activity className={status.has_account ? 'text-green-500' : 'text-gray-400'} />
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Account Status</span>
          {status.has_account ? (
            <span className="flex items-center text-green-600 text-sm">
              <CheckCircle2 size={16} className="mr-1" /> Active
            </span>
          ) : (
            <span className="flex items-center text-gray-500 text-sm">
              <XCircle size={16} className="mr-1" /> Not Created
            </span>
          )}
        </div>

        {status.has_account && (
          <>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Last Login</span>
              <span className="text-sm">
                {status.last_login ? new Date(status.last_login).toLocaleDateString() : 'Never'}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Login Count</span>
              <span className="text-sm">{status.login_count}</span>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Feature Usage</h4>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(status.feature_usage).map(([feature, used]) => (
                  <div key={feature} className="flex items-center">
                    {used ? (
                      <CheckCircle2 size={14} className="text-green-500 mr-1" />
                    ) : (
                      <XCircle size={14} className="text-gray-400 mr-1" />
                    )}
                    <span className="text-xs text-gray-600">
                      {feature.split('_').map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}