import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Send } from 'lucide-react';
import type { Hotel } from '../types/types';

interface CampaignActionsProps {
  hotel: Hotel;
}

export default function CampaignActions({ hotel }: CampaignActionsProps) {
  const [selectedCampaign, setSelectedCampaign] = useState<'email' | 'whatsapp' | 'call' | null>(null);

  const campaigns = {
    email: [
      { id: 1, name: 'Initial Introduction', template: 'intro_template' },
      { id: 2, name: 'Product Overview', template: 'product_template' },
      { id: 3, name: 'Special Offer', template: 'offer_template' }
    ],
    whatsapp: [
      { id: 1, name: 'Quick Intro', template: 'whatsapp_intro' },
      { id: 2, name: 'Follow Up', template: 'whatsapp_followup' }
    ]
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-3">
        <button
          onClick={() => setSelectedCampaign('email')}
          className={`flex items-center px-4 py-2 rounded-lg ${
            selectedCampaign === 'email'
              ? 'bg-blue-600 text-white'
              : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Mail size={16} className="mr-2" />
          Email Campaign
        </button>
        <button
          onClick={() => setSelectedCampaign('whatsapp')}
          className={`flex items-center px-4 py-2 rounded-lg ${
            selectedCampaign === 'whatsapp'
              ? 'bg-green-600 text-white'
              : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <MessageSquare size={16} className="mr-2" />
          WhatsApp Campaign
        </button>
        <button
          onClick={() => setSelectedCampaign('call')}
          className={`flex items-center px-4 py-2 rounded-lg ${
            selectedCampaign === 'call'
              ? 'bg-purple-600 text-white'
              : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Phone size={16} className="mr-2" />
          Schedule Calls
        </button>
      </div>

      {selectedCampaign && selectedCampaign !== 'call' && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Select Campaign Template</h4>
          <div className="space-y-2">
            {campaigns[selectedCampaign].map((campaign) => (
              <div
                key={campaign.id}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <div>
                  <h5 className="font-medium">{campaign.name}</h5>
                  <p className="text-sm text-gray-500">Template: {campaign.template}</p>
                </div>
                <button className="btn-primary flex items-center">
                  <Send size={16} className="mr-2" />
                  Start Campaign
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedCampaign === 'call' && (
        <div className="mt-4 p-4 border rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Schedule Call Session</h4>
          <div className="space-y-3">
            <input
              type="datetime-local"
              className="input-primary w-full"
            />
            <textarea
              placeholder="Call notes and agenda..."
              className="input-primary w-full"
              rows={3}
            />
            <button className="btn-primary w-full flex items-center justify-center">
              <Phone size={16} className="mr-2" />
              Schedule Call Session
            </button>
          </div>
        </div>
      )}
    </div>
  );
}