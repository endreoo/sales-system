import React from 'react';
import { Phone, Mail, MessageSquare, Star, User } from 'lucide-react';
import type { Contact } from '../types/types';

interface ContactListProps {
  contacts: Contact[];
  onContactSelect: (contact: Contact) => void;
}

export default function ContactList({ contacts, onContactSelect }: ContactListProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Contacts</h3>
      </div>
      <div className="divide-y">
        {contacts.map(contact => (
          <div
            key={contact.id}
            className="p-4 hover:bg-gray-50 cursor-pointer"
            onClick={() => onContactSelect(contact)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <User className="text-gray-500" size={20} />
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    <span className="font-medium">{contact.name}</span>
                    {contact.is_decision_maker && (
                      <Star className="ml-2 text-yellow-400" size={16} />
                    )}
                  </div>
                  <div className="text-sm text-gray-500">{contact.position}</div>
                </div>
              </div>
              <div className="flex space-x-2">
                {contact.email && (
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
                    <Mail size={18} />
                  </button>
                )}
                {contact.whatsapp && (
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-full">
                    <MessageSquare size={18} />
                  </button>
                )}
                {contact.phone && (
                  <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-full">
                    <Phone size={18} />
                  </button>
                )}
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <span className="mr-4">Last contacted: {contact.last_contacted ? 
                new Date(contact.last_contacted).toLocaleDateString() : 'Never'}</span>
              <span>Engagement: {contact.engagement_score}/10</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}