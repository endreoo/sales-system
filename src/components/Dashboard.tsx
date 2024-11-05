import React, { useState } from 'react';
import { Search } from 'lucide-react';
import LeadList from './LeadList';
import ProcessFilters from './ProcessFilters';
import HotelDetails from './HotelDetails';
import type { Hotel } from '../types/types';

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStage, setSelectedStage] = useState('');
  const [selectedProcess, setSelectedProcess] = useState('');
  const [selectedMarket, setSelectedMarket] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedAssignee, setSelectedAssignee] = useState('');
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  // Sample data - replace with actual data fetching
  const sampleHotels: Hotel[] = [
    {
      id: 1,
      name: "Grand Hotel Example",
      location: "Paris",
      sub_location: "8th Arrondissement",
      number_of_rooms: 150,
      review_score: "4.5",
      number_of_reviews: 1250,
      market: "Luxury",
      sales_stage: "Information Gathering",
      sales_process: "Initial Research",
      importance: 5,
      google_review_score: 4.7,
      address: "123 Example Street",
      assigned_to: "John Doe",
      next_action: "Acquire contact information",
      next_action_date: new Date("2024-03-20"),
      dashboard_status: {
        has_account: false,
        login_count: 0,
        onboarding_completed: false,
        feature_usage: {
          inventory_management: false,
          channel_management: false,
          revenue_management: false,
          reporting: false
        }
      }
    },
    {
      id: 2,
      name: "Business Hotel Pro",
      location: "London",
      sub_location: "City",
      number_of_rooms: 200,
      review_score: "4.3",
      number_of_reviews: 980,
      market: "Business",
      sales_stage: "Campaign",
      sales_process: "Email Series",
      importance: 4,
      google_review_score: 4.5,
      address: "456 Business Ave",
      assigned_to: "Jane Smith",
      next_action: "Follow-up email",
      next_action_date: new Date("2024-03-21"),
      dashboard_status: {
        has_account: true,
        login_count: 5,
        onboarding_completed: true,
        feature_usage: {
          inventory_management: true,
          channel_management: true,
          revenue_management: false,
          reporting: true
        }
      }
    }
  ];

  return (
    <div className="flex-1 bg-gray-50 p-8 ml-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Sales Pipeline</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search hotels..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <ProcessFilters
          selectedStage={selectedStage}
          onStageChange={setSelectedStage}
          selectedProcess={selectedProcess}
          onProcessChange={setSelectedProcess}
          selectedMarket={selectedMarket}
          onMarketChange={setSelectedMarket}
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
          selectedAssignee={selectedAssignee}
          onAssigneeChange={setSelectedAssignee}
        />

        <LeadList
          hotels={sampleHotels}
          onSelect={setSelectedHotel}
        />

        {selectedHotel && (
          <HotelDetails
            hotel={selectedHotel}
            onClose={() => setSelectedHotel(null)}
          />
        )}
      </div>
    </div>
  );
}