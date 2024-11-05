import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ContactsView from './components/ContactsView';
import CampaignsView from './components/CampaignsView';
import AnalyticsView from './components/AnalyticsView';
import SettingsView from './components/SettingsView';

export type View = 'dashboard' | 'contacts' | 'campaigns' | 'analytics' | 'settings';

function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'contacts':
        return <ContactsView />;
      case 'campaigns':
        return <CampaignsView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-1 ml-16">
        {renderView()}
      </main>
    </div>
  );
}

export default App;