
import React, { useEffect, useState } from 'react';
import VolunteerCard from './VolunteerCard';
import SkeletonCard from './SkeletonCard';
import SearchFilterBar from './SearchFilterBar';
import { Volunteer } from '../types/Volunteer';


interface VolunteerCardListProps {
  showSaved?: boolean;
  tab?: 'home' | 'saved';
  onTabChange?: (tab: 'home' | 'saved') => void;
}

const VolunteerCardList: React.FC<VolunteerCardListProps> = ({ showSaved = false, tab = 'home', onTabChange }) => {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [field, setField] = useState('');
  const [location, setLocation] = useState('');
  const [layout, setLayout] = useState<'vertical' | 'horizontal'>(window.innerWidth < 640 ? 'horizontal' : 'horizontal');

  // On mobile, always force horizontal layout
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setLayout('horizontal');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch('/data/volunteers.json')
      .then((res) => res.json())
      .then((data) => {
        setVolunteers(data.map((v: Volunteer) => ({ ...v, saved: false })));
        setLoading(false);
      });
  }, []);

  const handleSave = (id: number) => {
    setVolunteers((prev) =>
      prev.map((v) =>
        v.id === id ? { ...v, saved: !v.saved } : v
      )
    );
  };

  // Unique fields and locations for filter dropdowns
  const fields = Array.from(new Set(volunteers.map(v => v.field)));
  const locations = Array.from(new Set(volunteers.map(v => v.location)));

  // Filtered volunteers
  const filtered = volunteers.filter(v =>
    (!search || v.ngo.toLowerCase().includes(search.toLowerCase())) &&
    (!field || v.field === field) &&
    (!location || v.location === location)
  );

  // Saved volunteers
  const savedVolunteers = volunteers.filter(v => v.saved);

  // Layout classes
  const gridClass = layout === 'horizontal'
    ? 'grid grid-cols-1 lg:grid-cols-3 gap-6 p-4'
    : 'grid grid-cols-1 gap-6 p-4';

  return (
    <>
      <div className="flex items-center justify-end mb-4 px-4 gap-2">
        <div className="hidden sm:flex gap-2">
          <button
            className={`px-3 py-2 rounded-lg font-semibold shadow transition-colors flex items-center gap-2 ${layout === 'horizontal' ? 'bg-sobGreen text-sobYellow' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
            onClick={() => setLayout('horizontal')}
            aria-label="Show cards in 3 columns"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="2" y="3" width="4" height="14" rx="1" fill="currentColor"/><rect x="8" y="3" width="4" height="14" rx="1" fill="currentColor"/><rect x="14" y="3" width="4" height="14" rx="1" fill="currentColor"/></svg>
          </button>
          <button
            className={`px-3 py-2 rounded-lg font-semibold shadow transition-colors flex items-center gap-2 ${layout === 'vertical' ? 'bg-sobGreen text-sobYellow' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
            onClick={() => setLayout('vertical')}
            aria-label="Show cards vertically"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="3" y="2" width="14" height="4" rx="1" fill="currentColor"/></svg>
          </button>
        </div>
      </div>
      <SearchFilterBar
        search={search}
        setSearch={setSearch}
        field={field}
        setField={setField}
        location={location}
        setLocation={setLocation}
        fields={fields}
        locations={locations}
        tab={tab}
        onTabChange={onTabChange}
      />
      <div className={gridClass}>
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
          : (showSaved ? savedVolunteers : filtered).length > 0
            ? (showSaved ? savedVolunteers : filtered).map((volunteer) => (
                <VolunteerCard key={volunteer.id} volunteer={volunteer} onSave={handleSave} layout={layout} />
              ))
            : <div className="col-span-3 text-center text-gray-500 dark:text-gray-400">No results found.</div>
        }
      </div>
    </>
  );
};

export default VolunteerCardList;
