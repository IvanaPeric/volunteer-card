import React from 'react';
import { HomeIcon, StarIcon } from '@radix-ui/react-icons';

interface DashboardSidebarProps {
  active: 'home' | 'saved';
  onChange: (tab: 'home' | 'saved') => void;
}

const navItems = [
  { label: 'Home', icon: <HomeIcon />, tab: 'home' },
  { label: 'Saved', icon: <StarIcon />, tab: 'saved' },
];

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ active, onChange }) => (
  <aside className="font-sans hidden md:flex flex-col gap-4 bg-sobGray dark:bg-sobGray-dark shadow h-full py-8 px-4 w-56 rounded-r-xl">
    <nav>
      <ul className="flex flex-col gap-2">
        {navItems.map(item => (
          <li key={item.label}>
            <button
              className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg font-medium transition text-base ${active === item.tab ? 'bg-sobYellow text-sobGreen shadow' : 'text-sobBlue dark:text-sobYellow hover:bg-sobYellow-light dark:hover:bg-sobBlue-light hover:text-sobGreen'}`}
              onClick={() => onChange(item.tab as 'home' | 'saved')}
            >
              {item.icon}
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

export default DashboardSidebar;
