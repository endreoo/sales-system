import React, { useState } from 'react';
import { Play, Pause, Plus, Settings, Clock, Mail, MessageSquare, Phone } from 'lucide-react';

interface AutomationRule {
  id: string;
  name: string;
  trigger: {
    type: 'time' | 'event';
    condition: string;
  };
  actions: {
    type: 'email' | 'whatsapp' | 'task';
    template?: string;
    delay?: number;
  }[];
  isActive: boolean;
}

export default function AutomationRules() {
  const [rules, setRules] = useState<AutomationRule[]>([
    {
      id: '1',
      name: 'Initial Contact Sequence',
      trigger: {
        type: 'event',
        condition: 'contact_added'
      },
      actions: [
        { type: 'email', template: 'welcome_email', delay: 0 },
        { type: 'whatsapp', template: 'follow_up', delay: 2 },
        { type: 'task', delay: 5 }
      ],
      isActive: true
    }
  ]);

  const getActionIcon = (type: string) => {
    switch (type) {
      case 'email':
        return <Mail size={16} className="text-blue-500" />;
      case 'whatsapp':
        return <MessageSquare size={16} className="text-green-500" />;
      case 'task':
        return <Phone size={16} className="text-purple-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Automation Rules</h2>
        <button className="btn-primary">
          <Plus size={16} className="mr-2" />
          New Rule
        </button>
      </div>

      <div className="divide-y">
        {rules.map(rule => (
          <div key={rule.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <button
                  className={`p-2 rounded-full ${
                    rule.isActive ? 'text-green-600 hover:bg-green-50' : 'text-gray-400 hover:bg-gray-100'
                  }`}
                >
                  {rule.isActive ? <Play size={16} /> : <Pause size={16} />}
                </button>
                <span className="ml-2 font-medium">{rule.name}</span>
              </div>
              <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full">
                <Settings size={16} />
              </button>
            </div>

            <div className="ml-8 space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Clock size={14} className="mr-2" />
                Trigger: {rule.trigger.condition}
              </div>

              <div className="space-y-2">
                {rule.actions.map((action, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    {getActionIcon(action.type)}
                    <span className="ml-2">
                      {action.type.charAt(0).toUpperCase() + action.type.slice(1)}
                      {action.template && ` - ${action.template}`}
                      {action.delay && action.delay > 0 && ` (After ${action.delay} days)`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}