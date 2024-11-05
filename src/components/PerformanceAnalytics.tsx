import React from 'react';
import { BarChart2, TrendingUp, Users, Hotel, Mail, MessageSquare, Phone } from 'lucide-react';

interface AnalyticsData {
  totalLeads: number;
  activeDeals: number;
  conversionRate: number;
  averageDealSize: number;
  responseRate: number;
  meetingBookingRate: number;
  campaignStats: {
    emails: {
      sent: number;
      opened: number;
      clicked: number;
    };
    whatsapp: {
      sent: number;
      delivered: number;
      responded: number;
    };
    calls: {
      attempted: number;
      connected: number;
      scheduled: number;
    };
  };
}

export default function PerformanceAnalytics() {
  const sampleData: AnalyticsData = {
    totalLeads: 250,
    activeDeals: 45,
    conversionRate: 18,
    averageDealSize: 15000,
    responseRate: 35,
    meetingBookingRate: 12,
    campaignStats: {
      emails: {
        sent: 1200,
        opened: 840,
        clicked: 156
      },
      whatsapp: {
        sent: 450,
        delivered: 442,
        responded: 98
      },
      calls: {
        attempted: 180,
        connected: 85,
        scheduled: 32
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500">Total Leads</span>
            <Users className="text-blue-500" size={20} />
          </div>
          <div className="text-2xl font-bold">{sampleData.totalLeads}</div>
          <div className="text-sm text-green-600 mt-1">
            <TrendingUp size={14} className="inline mr-1" />
            +12% this month
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500">Active Deals</span>
            <Hotel className="text-purple-500" size={20} />
          </div>
          <div className="text-2xl font-bold">{sampleData.activeDeals}</div>
          <div className="text-sm text-gray-500 mt-1">
            {sampleData.conversionRate}% conversion rate
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500">Response Rate</span>
            <Mail className="text-green-500" size={20} />
          </div>
          <div className="text-2xl font-bold">{sampleData.responseRate}%</div>
          <div className="text-sm text-gray-500 mt-1">
            {sampleData.meetingBookingRate}% meeting rate
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500">Avg Deal Size</span>
            <BarChart2 className="text-yellow-500" size={20} />
          </div>
          <div className="text-2xl font-bold">
            ${sampleData.averageDealSize.toLocaleString()}
          </div>
          <div className="text-sm text-green-600 mt-1">
            <TrendingUp size={14} className="inline mr-1" />
            +5% vs last month
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Campaign Performance</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="flex items-center">
                <Mail size={16} className="text-blue-500 mr-2" /> Email Campaigns
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Sent</span>
                <span className="font-medium">{sampleData.campaignStats.emails.sent}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Opened</span>
                <span className="font-medium">
                  {Math.round((sampleData.campaignStats.emails.opened / sampleData.campaignStats.emails.sent) * 100)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Clicked</span>
                <span className="font-medium">
                  {Math.round((sampleData.campaignStats.emails.clicked / sampleData.campaignStats.emails.sent) * 100)}%
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="flex items-center">
                <MessageSquare size={16} className="text-green-500 mr-2" /> WhatsApp
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Sent</span>
                <span className="font-medium">{sampleData.campaignStats.whatsapp.sent}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Delivered</span>
                <span className="font-medium">
                  {Math.round((sampleData.campaignStats.whatsapp.delivered / sampleData.campaignStats.whatsapp.sent) * 100)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Responded</span>
                <span className="font-medium">
                  {Math.round((sampleData.campaignStats.whatsapp.responded / sampleData.campaignStats.whatsapp.sent) * 100)}%
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="flex items-center">
                <Phone size={16} className="text-purple-500 mr-2" /> Calls
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Attempted</span>
                <span className="font-medium">{sampleData.campaignStats.calls.attempted}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Connected</span>
                <span className="font-medium">
                  {Math.round((sampleData.campaignStats.calls.connected / sampleData.campaignStats.calls.attempted) * 100)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Meetings</span>
                <span className="font-medium">{sampleData.campaignStats.calls.scheduled}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}