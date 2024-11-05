import React from 'react';
import { Menu, Hotel, Users, MessageSquare, BarChart3, Settings } from 'lucide-react';
import type { View } from '../App';

interface NavbarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export default function Navbar({ currentView, onViewChange }: NavbarProps) {
  const NavItem = ({ view, icon: Icon, onClick }: { 
    view: View; 
    icon: typeof Hotel; 
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`p-3 rounded-lg transition-colors ${
        currentView === view
          ? 'bg-gray-800 text-white'
          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
      }`}
      title={view.charAt(0).toUpperCase() + view.slice(1)}
    >
      <Icon size={24} />
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 h-screen w-16 bg-gray-900 flex flex-col items-center py-4 space-y-8">
      <button className="p-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg">
        <Menu size={24} />
      </button>
      
      <NavItem
        view="dashboard"
        icon={Hotel}
        onClick={() => onViewChange('dashboard')}
      />
      
      <NavItem
        view="contacts"
        icon={Users}
        onClick={() => onViewChange('contacts')}
      />
      
      <NavItem
        view="campaigns"
        icon={MessageSquare}
        onClick={() => onViewChange('campaigns')}
      />
      
      <NavItem
        view="analytics"
        icon={BarChart3}
        onClick={() => onViewChange('analytics')}
      />
      
      <div className="flex-1" />
      
      <NavItem
        view="settings"
        icon={Settings}
        onClick={() => onViewChange('settings')}
      />
    </nav>
  );
}