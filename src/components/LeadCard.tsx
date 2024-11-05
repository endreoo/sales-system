import React from 'react';
import { Star, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import type { Hotel } from '../types/types';

interface LeadCardProps {
  hotel: Hotel;
  onSelect: (hotel: Hotel) => void;
}

export default function LeadCard({ hotel, onSelect }: LeadCardProps) {
  return (
    <div 
      onClick={() => onSelect(hotel)}
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{hotel.name}</h3>
          <div className="flex items-center text-gray-600 mt-1">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{hotel.location}</span>
          </div>
        </div>
        <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
          <Star size={16} className="text-yellow-500 mr-1" />
          <span className="text-sm font-medium">{hotel.google_review_score || 'N/A'}</span>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center text-sm text-gray-600">
          <div className="mr-4">
            <span className="font-medium">Reviews:</span> {hotel.number_of_reviews || 0}
          </div>
          <div>
            <span className="font-medium">Rooms:</span> {hotel.number_of_rooms || 'N/A'}
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-2">
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
            <Phone size={18} />
          </button>
          <button className="p-2 text-green-600 hover:bg-green-50 rounded-full">
            <MessageSquare size={18} />
          </button>
          <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-full">
            <Mail size={18} />
          </button>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          hotel.sales_process === 'Not Started' ? 'bg-gray-100 text-gray-800' :
          hotel.sales_process === 'Campaign Started' ? 'bg-blue-100 text-blue-800' :
          hotel.sales_process === 'First Meeting' ? 'bg-green-100 text-green-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {hotel.sales_process}
        </span>
      </div>
    </div>
  );
}