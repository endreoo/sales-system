import React from 'react';
import { Plus } from 'lucide-react';
import AutomationRules from './AutomationRules';
import TemplateEditor from './TemplateEditor';

export default function CampaignsView() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
          <button className="btn-primary flex items-center">
            <Plus size={20} className="mr-2" />
            New Campaign
          </button>
        </div>

        <div className="space-y-8">
          <AutomationRules />
        </div>
      </div>
    </div>
  );
}