import React from 'react';
import { Select } from './ui/Select';
import { BackpackIcon, GlobeIcon } from '@radix-ui/react-icons';

interface SearchFilterBarProps {
  search: string;
  setSearch: (val: string) => void;
  field: string;
  setField: (val: string) => void;
  location: string;
  setLocation: (val: string) => void;
  fields: string[];
  locations: string[];
  tab?: 'home' | 'saved';
  onTabChange?: (tab: 'home' | 'saved') => void;
}

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({ search, setSearch, field, setField, location, setLocation, fields, locations, tab, onTabChange }) => (
  <div className="flex flex-col gap-3 lg:flex-row lg:gap-4 my-8 w-full max-w-5xl mx-auto items-center z-30 relative px-3 sm:px-5">
    {/* Mobile Home/Saved nav */}
    <div className="flex sm:hidden w-full justify-center gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
      <button
        className={`flex-1 px-3 py-2 font-semibold transition-colors flex items-center justify-center gap-2 border-b-2 ${tab === 'home' ? 'border-sobYellow text-sobGreen bg-transparent' : 'border-transparent text-gray-400 bg-transparent'}`}
        onClick={() => onTabChange && onTabChange('home')}
        style={{ borderRadius: 0 }}
      >
        Home
      </button>
      <button
        className={`flex-1 px-3 py-2 font-semibold transition-colors flex items-center justify-center gap-2 border-b-2 ${tab === 'saved' ? 'border-sobYellow text-sobGreen bg-transparent' : 'border-transparent text-gray-400 bg-transparent'}`}
        onClick={() => onTabChange && onTabChange('saved')}
        style={{ borderRadius: 0 }}
      >
        Saved
      </button>
    </div>

        <div className="w-full mb-1 px-2 sm:px-0">
      <span className="block text-sobGreen font-semibold text-lg tracking-wide">Filters</span>
    </div>
  <div className="relative w-full mx-2 sm:mx-0">
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search by name"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow pl-10"
      />
      <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2"/><path d="M15 15L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    </div>
  <div className="relative w-full z-50 mx-2 sm:mx-0">
      <Select
        options={["", ...fields]}
        value={field}
        onValueChange={setField}
        placeholder="All Fields"
        className="w-full pl-7 whitespace-nowrap"
      />
      <BackpackIcon className="absolute left-2 top-1/2 -translate-y-1/2 text-sobBlue pointer-events-none w-4 h-4" />
    </div>
  <div className="relative w-full z-40 mx-2 sm:mx-0">
      <Select
        options={["", ...locations]}
        value={location}
        onValueChange={setLocation}
        placeholder="All Locations"
        className="w-full pl-7 whitespace-nowrap"
      />
      <GlobeIcon className="absolute left-2 top-1/2 -translate-y-1/2 text-sobBlue pointer-events-none w-4 h-4" />
    </div>
  </div>
);

export default SearchFilterBar;
