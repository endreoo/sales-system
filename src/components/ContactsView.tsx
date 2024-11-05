import React from 'react';
import { Search, Plus } from 'lucide-react';
import ContactList from './ContactList';

export default function ContactsView() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Contacts</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search contacts..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="btn-primary flex items-center">
              <Plus size={20} className="mr-2" />
              Add Contact
            </button>
          </div>
        </div>

        <ContactList
          contacts={[]} // Add sample contacts here
          onContactSelect={(contact) => console.log('Contact selected:', contact)}
        />
      </div>
    </div>
  );
}