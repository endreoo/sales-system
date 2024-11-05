import React, { useState } from 'react';
import { Building2, Users, MessageCircle, Phone, Mail, Plus, X } from 'lucide-react';
import type { Hotel, Contact } from '../types/types';
import ContactList from './ContactList';
import AddContactForm from './AddContactForm';
import CampaignActions from './CampaignActions';

interface HotelDetailsProps {
  hotel: Hotel;
  onClose: () => void;
}

export default function HotelDetails({ hotel, onClose }: HotelDetailsProps) {
  const [showAddContact, setShowAddContact] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);

  const getNextAction = () => {
    switch (hotel.sales_stage) {
      case 'Information Gathering':
        return <button className="btn-primary">Add Hotel Information</button>;
      case 'Contact Acquisition':
        return (
          <button 
            onClick={() => setShowAddContact(true)}
            className="btn-primary flex items-center"
          >
            <Plus size={16} className="mr-2" />
            Add Contact
          </button>
        );
      case 'Campaign':
        return <CampaignActions hotel={hotel} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
      <div className="w-2/5 bg-white h-full overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{hotel.name}</h2>
              <p className="text-gray-500 mt-1">{hotel.location}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center text-gray-700 mb-2">
                <Building2 size={16} className="mr-2" />
                <span className="font-medium">Property Details</span>
              </div>
              <div className="space-y-2 text-sm">
                <p>Rooms: {hotel.number_of_rooms}</p>
                <p>Market: {hotel.market}</p>
                <p>Reviews: {hotel.number_of_reviews}</p>
                <p>Score: {hotel.google_review_score}</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center text-gray-700 mb-2">
                <Users size={16} className="mr-2" />
                <span className="font-medium">Sales Progress</span>
              </div>
              <div className="space-y-2 text-sm">
                <p>Stage: {hotel.sales_stage}</p>
                <p>Process: {hotel.sales_process}</p>
                <p>Assigned: {hotel.assigned_to || 'Unassigned'}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Next Actions</h3>
              {getNextAction()}
            </div>
          </div>

          <div className="mb-6">
            <ContactList 
              contacts={contacts}
              onContactSelect={(contact) => console.log('Contact selected:', contact)}
            />
          </div>

          {showAddContact && (
            <AddContactForm
              hotelId={hotel.id}
              onSubmit={(contact) => {
                setContacts([...contacts, contact]);
                setShowAddContact(false);
              }}
              onCancel={() => setShowAddContact(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}