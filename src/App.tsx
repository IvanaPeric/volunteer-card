import React, { useState } from 'react';
import VolunteerCardList from './components/VolunteerCardList';
import DashboardHeader from './components/DashboardHeader';
import DashboardSidebar from './components/DashboardSidebar';

function App() {
  const [tab, setTab] = useState<'home' | 'saved'>('home');
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <DashboardHeader />
      <div className="flex w-full max-w-7xl mx-auto">
        <DashboardSidebar active={tab} onChange={setTab} />
        <main className="flex-1 py-2 px-2 sm:px-6 sm:py-8">
          <VolunteerCardList showSaved={tab === 'saved'} tab={tab} onTabChange={setTab} />
        </main>
      </div>
    </div>
  );
}

export default App;
