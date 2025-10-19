import React from 'react';

const SkeletonCard: React.FC = () => (
  <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-xl shadow-md p-6 flex flex-col gap-4 relative">
    <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mb-2"></div>
    <div className="flex gap-2">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
    </div>
    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full mb-2"></div>
    <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
  </div>
);

export default SkeletonCard;
