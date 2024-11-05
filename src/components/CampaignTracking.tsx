import React from 'react';
import { BarChart, Mail, MessageSquare, Phone } from 'lucide-react';
import type { CampaignStats } from '../types/types';

interface CampaignTrackingProps {
  stats: CampaignStats;
}

export default function CampaignTracking({ stats }: CampaignTrackingProps) {
  const getEngagementRate = (sent: number, engaged: number) => {
    if (sent === 0) return 0;
    return Math.round((engaged / sent) * 100);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Campaign Performance</h3>
        <BarChart className="text-blue-500" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Mail className="text-blue-500 mr-2" size={20} />
            <span className="text-sm font-medium">Email</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Sent</span>
              <span>{stats.emails_sent}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Opened</span>
              <span>{getEngagementRate(stats.emails_sent, stats.emails_opened)}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Clicked</span>
              <span>{getEngagementRate(stats.emails_sent, stats.emails_clicked)}%</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-green-50 rounded-lg">
          <div className="flex items-center mb-2">
            <MessageSquare className="text-green-500 mr-2" size={20} />
            <span className="text-sm font-medium">WhatsApp</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Sent</span>
              <span>{stats.whatsapp_sent}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Delivered</span>
              <span>{getEngagementRate(stats.whatsapp_sent, stats.whatsapp_delivered)}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Read</span>
              <span>{getEngagementRate(stats.whatsapp_sent, stats.whatsapp_read)}%</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-purple-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Phone className="text-purple-500 mr-2" size={20} />
            <span className="text-sm font-medium">Calls</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Attempted</span>
              <span>{stats.calls_attempted}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Connected</span>
              <span>{getEngagementRate(stats.calls_attempted, stats.calls_connected)}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Meetings</span>
              <span>{stats.meetings_scheduled}</span>
            </div>
          </div>
        </div>
      </div>

      {stats.response_received && (
        <div className="mt-4 p-2 rounded bg-gray-50">
          <span className="text-sm font-medium">Last Response: </span>
          <span className={`text-sm ${
            stats.response_type === 'positive' ? 'text-green-600' :
            stats.response_type === 'negative' ? 'text-red-600' :
            'text-yellow-600'
          }`}>
            {stats.response_type?.charAt(0).toUpperCase() + stats.response_type?.slice(1)}
          </span>
        </div>
      )}
    </div>
  );
}