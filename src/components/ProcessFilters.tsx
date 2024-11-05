import React from 'react';
import { Filter, MapPin } from 'lucide-react';

interface ProcessFiltersProps {
  selectedStage: string;
  onStageChange: (stage: string) => void;
  selectedProcess: string;
  onProcessChange: (process: string) => void;
  selectedMarket: string;
  onMarketChange: (market: string) => void;
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  selectedAssignee: string;
  onAssigneeChange: (assignee: string) => void;
}

export default function ProcessFilters({
  selectedStage,
  onStageChange,
  selectedProcess,
  onProcessChange,
  selectedMarket,
  onMarketChange,
  selectedLocation,
  onLocationChange,
  selectedAssignee,
  onAssigneeChange
}: ProcessFiltersProps) {
  const getProcessOptions = (stage: string) => {
    switch (stage) {
      case 'Pre Sales':
        return ['Information Gathering', 'Contact Acquisition'];
      case 'Campaign':
        return ['Campaign Started', 'Email Series', 'WhatsApp Series', 'Call Required'];
      case 'Closing':
        return ['First Meeting', 'Negotiations', 'Contract Review'];
      case 'Win Back':
        return ['Terminated', 'Previous Client'];
      default:
        return [];
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center">
          <Filter size={20} className="text-gray-400 mr-2" />
          <span className="text-sm font-medium text-gray-700">Filters:</span>
        </div>
        
        <select
          value={selectedStage}
          onChange={(e) => onStageChange(e.target.value)}
          className="text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Stages</option>
          <option value="Pre Sales">Pre Sales</option>
          <option value="Campaign">Campaign</option>
          <option value="Closing">Closing</option>
          <option value="Win Back">Win Back</option>
        </select>

        <select
          value={selectedProcess}
          onChange={(e) => onProcessChange(e.target.value)}
          className="text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          disabled={!selectedStage}
        >
          <option value="">All Processes</option>
          {getProcessOptions(selectedStage).map(process => (
            <option key={process} value={process}>{process}</option>
          ))}
        </select>

        <div className="flex items-center">
          <MapPin size={20} className="text-gray-400 mr-2" />
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Locations</option>
            <option value="Paris">Paris</option>
            <option value="London">London</option>
            <option value="Berlin">Berlin</option>
            <option value="Rome">Rome</option>
            <option value="Madrid">Madrid</option>
          </select>
        </div>

        <select
          value={selectedMarket}
          onChange={(e) => onMarketChange(e.target.value)}
          className="text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Markets</option>
          <option value="Luxury">Luxury</option>
          <option value="Business">Business</option>
          <option value="Resort">Resort</option>
        </select>

        <select
          value={selectedAssignee}
          onChange={(e) => onAssigneeChange(e.target.value)}
          className="text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Sales Reps</option>
          <option value="John Doe">John Doe</option>
          <option value="Jane Smith">Jane Smith</option>
        </select>
      </div>
    </div>
  );
}