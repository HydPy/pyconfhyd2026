'use client';
import { useState } from 'react';
import { TABS, TAB_CONFIG } from '@/placesNearby';

const DataTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="py-2 pr-3 text-left font-medium uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`py-2 pr-3 ${column.noWrap ? 'whitespace-nowrap' : ''}`}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const TravelContent = () => {
  const [activeTab, setActiveTab] = useState('attractions');
  const currentTabConfig = TAB_CONFIG[activeTab];

  return (
    <div className="w-full">
      <p className="mb-3">
        Find attractions, stays, and food options near both PyConf Hyderabad 2026 venues. Listings are for convenience only; we do not have any partnership with these places.
      </p>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8" aria-label="Tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                pt-4 px-1 border-b-2 font-medium transition-colors
                ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                    : 'border-transparent'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div>
        <DataTable
          columns={currentTabConfig.columns}
          data={currentTabConfig.data}
        />
      </div>
    </div>
  );
};
