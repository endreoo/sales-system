import React from 'react';
import PerformanceAnalytics from './PerformanceAnalytics';

export default function AnalyticsView() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        </div>

        <PerformanceAnalytics />
      </div>
    </div>
  );
}