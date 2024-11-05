import React from 'react';
import { ChevronRight, Star, MapPin, User2, Phone } from 'lucide-react';
import type { Hotel } from '../types/types';

interface LeadListProps {
  hotels: Hotel[];
  onSelect: (hotel: Hotel) => void;
}

export default function LeadList({ hotels, onSelect }: LeadListProps) {
  const getStageColor = (stage: Hotel['sales_stage']) => {
    const colors = {
      'Pre Sales': 'bg-blue-100 text-blue-800',
      'Campaign': 'bg-yellow-100 text-yellow-800',
      'Closing': 'bg-green-100 text-green-800',
      'Win Back': 'bg-purple-100 text-purple-800'
    };
    return colors[stage] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hotel</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reviews</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Process</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Action</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {hotels.map((hotel) => (
            <tr 
              key={hotel.id}
              onClick={() => onSelect(hotel)}
              className="hover:bg-gray-50 cursor-pointer"
            >
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{hotel.name}</div>
                    <div className="text-sm text-gray-500">{hotel.number_of_rooms} rooms</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <MapPin size={14} className="text-gray-400 mr-1" />
                  <div>
                    <div className="text-sm text-gray-900">{hotel.location}</div>
                    {hotel.sub_location && (
                      <div className="text-sm text-gray-500">{hotel.sub_location}</div>
                    )}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <Star size={14} className="text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-900">{hotel.google_review_score}</span>
                  <span className="text-sm text-gray-500 ml-2">({hotel.number_of_reviews})</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-gray-900">{hotel.market}</span>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStageColor(hotel.sales_stage)}`}>
                  {hotel.sales_stage}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-gray-900">{hotel.sales_process}</span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  {hotel.assigned_to ? (
                    <>
                      <User2 size={14} className="text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{hotel.assigned_to}</span>
                    </>
                  ) : (
                    <span className="text-sm text-gray-500">Unassigned</span>
                  )}
                </div>
              </td>
              <td className="px-6 py-4">
                {hotel.next_action && (
                  <div>
                    <div className="text-sm text-gray-900">{hotel.next_action}</div>
                    <div className="text-sm text-gray-500">
                      {hotel.next_action_date?.toLocaleDateString()}
                    </div>
                  </div>
                )}
              </td>
              <td className="px-6 py-4 text-right">
                <ChevronRight size={20} className="text-gray-400" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}