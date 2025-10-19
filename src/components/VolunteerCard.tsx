import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Volunteer } from '../types/Volunteer';
import { SewingPinIcon, Crosshair2Icon, GlobeIcon, BackpackIcon, StarIcon, StarFilledIcon } from '@radix-ui/react-icons';


interface VolunteerCardProps {
  volunteer: Volunteer;
  onSave: (id: number) => void;
  layout?: 'vertical' | 'horizontal';
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({ volunteer, onSave, layout = 'horizontal' }) => {
  const [hovered, setHovered] = useState(false);

  if (layout === 'vertical') {
    // Image left, text center, star top right, Apply bottom right
    return (
      <div
        className={`font-sans transition-all duration-300 bg-sobGray dark:bg-sobGray-dark rounded-xl shadow-lg flex flex-row relative group hover:scale-[1.02] hover:shadow-2xl hover:bg-sobYellow-light dark:hover:bg-sobGreen-dark ${hovered ? 'ring-1 ring-sobGreen' : ''}`}
        tabIndex={0}
        aria-label={`Volunteer opportunity at ${volunteer.ngo}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        style={{ minHeight: 200, alignItems: 'stretch' }}
      >
        {volunteer.imageUrl && (
          <img
            src={volunteer.imageUrl}
            alt={volunteer.ngo}
            className="w-48 h-full object-cover rounded-l-xl"
            style={{ minHeight: 200, maxHeight: 260 }}
          />
        )}
        <div className="flex-1 flex flex-col justify-between p-6 gap-2 relative">
          <button
            aria-label={volunteer.saved ? 'Unsave' : 'Save'}
            className={`absolute top-4 right-4 text-2xl z-10 hover:text-sobYellow transition-colors focus:outline-none focus:ring-2 focus:ring-sobYellow`}
            onClick={(e) => { e.stopPropagation(); onSave(volunteer.id); }}
            style={{ background: 'rgba(255,255,255,0.85)', borderRadius: '9999px', padding: '0.25rem' }}
          >
            {volunteer.saved ? (
              <StarFilledIcon className="w-7 h-7 text-sobYellow drop-shadow" />
            ) : (
              <StarIcon className="w-7 h-7 text-gray-400" />
            )}
          </button>
          <div className="flex flex-col gap-1 pr-12">
            <h2 className="text-xl font-bold text-sobGreen truncate flex items-center gap-2" title={volunteer.ngo}>
              {volunteer.ngo}
            </h2>
            <div className="flex flex-wrap gap-2 text-sm text-sobGreen items-center">
              <span className="flex items-center font-medium px-2 py-1 bg-sobYellow-light dark:bg-sobBlue-light rounded-full border border-sobYellow text-sobGreen gap-1">
                <GlobeIcon className="w-4 h-4 text-sobBlue dark:text-sobYellow" />
                {volunteer.location}
              </span>
              <span className="flex items-center px-2 py-1 bg-sobBlue-light dark:bg-sobYellow-light text-sobBlue dark:text-sobYellow rounded-full border border-sobBlue text-xs font-semibold gap-1">
                <BackpackIcon className="w-4 h-4 text-sobBlue dark:text-sobYellow" />
                {volunteer.field}
              </span>
            </div>
            <p className="text-sobGreen text-sm mt-2 mb-2 line-clamp-3">{volunteer.description}</p>
          </div>
          <div className="flex justify-end items-end mt-auto">
            <Link
              to={`/opportunity/${volunteer.id}`}
              className="inline-block bg-sobYellow text-sobGreen font-semibold py-2 px-6 rounded-lg shadow hover:bg-sobGreen hover:text-sobYellow focus:outline-none focus:ring-2 focus:ring-sobGreen transition-all"
            >
              <span className="flex items-center gap-2">
                Apply now
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Default horizontal card
  return (
    <div
      className={`font-sans transition-all duration-300 bg-sobGray dark:bg-sobGray-dark rounded-xl shadow-lg p-0 flex flex-col gap-0 relative group hover:scale-[1.02] hover:shadow-2xl hover:bg-sobYellow-light dark:hover:bg-sobGreen-dark ${hovered ? 'ring-1 ring-sobGreen' : ''}`}
      tabIndex={0}
      aria-label={`Volunteer opportunity at ${volunteer.ngo}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{ minHeight: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    >
      <div className="relative">
        {volunteer.imageUrl && (
          <img
            src={volunteer.imageUrl}
            alt={volunteer.ngo}
            className="w-full h-48 object-cover rounded-t-xl mb-0"
            style={{ aspectRatio: '3/2' }}
          />
        )}
        <button
          aria-label={volunteer.saved ? 'Unsave' : 'Save'}
          className={`absolute top-3 right-3 text-2xl z-10 hover:text-sobYellow transition-colors focus:outline-none focus:ring-2 focus:ring-sobYellow`}
          onClick={(e) => { e.stopPropagation(); onSave(volunteer.id); }}
          style={{ background: 'rgba(255,255,255,0.85)', borderRadius: '9999px', padding: '0.25rem' }}
        >
          {volunteer.saved ? (
            <StarFilledIcon className="w-7 h-7 text-sobYellow drop-shadow" />
          ) : (
            <StarIcon className="w-7 h-7 text-gray-400" />
          )}
        </button>
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-center mb-2">
          <h2 className="text-xl font-bold text-sobGreen truncate flex items-center gap-2" title={volunteer.ngo}>
            {volunteer.ngo}
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-sobGreen mb-2 items-center">
          <span className="flex items-center font-medium px-2 py-1 bg-sobYellow-light dark:bg-sobBlue-light rounded-full border border-sobYellow text-sobGreen gap-1">
            <GlobeIcon className="w-4 h-4 text-sobBlue dark:text-sobYellow" />
            {volunteer.location}
          </span>
          <span className="flex items-center px-2 py-1 bg-sobBlue-light dark:bg-sobYellow-light text-sobBlue dark:text-sobYellow rounded-full border border-sobBlue text-xs font-semibold gap-1">
            <BackpackIcon className="w-4 h-4 text-sobBlue dark:text-sobYellow" />
            {volunteer.field}
          </span>
        </div>
        <p className="text-sobGreen text-sm mb-4">{volunteer.description}</p>
        <Link
          to={`/opportunity/${volunteer.id}`}
          className="mt-auto w-full inline-block text-center bg-sobYellow text-sobGreen font-semibold py-2 rounded-lg shadow hover:bg-sobGreen hover:text-sobYellow focus:outline-none focus:ring-1 focus:ring-sobGreen transition-all"
        >
          <span className="flex items-center gap-2 justify-center">
            Apply now
          </span>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerCard;
