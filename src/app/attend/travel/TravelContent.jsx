'use client';
import { useState } from 'react';
import {
  TABS,
  TAB_CONFIG
} from '@/placesNearby';
import { Paragraph } from '@/components/Typography';

const DataTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-6 py-4 ${
                    colIndex === 0
                      ? 'font-medium text-gray-900 dark:text-gray-100'
                      : 'text-gray-700 dark:text-gray-300'
                  } ${column.noWrap ? 'whitespace-nowrap' : ''}`}
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

const TravelContent = () => {
  const [activeTab, setActiveTab] = useState('attractions');
  const currentTabConfig = TAB_CONFIG[activeTab];

  return (
    <div className="w-full">
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="flex space-x-8" aria-label="Tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-4 px-1 border-b-2 font-medium transition-colors
                ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        <Paragraph level={4} className="mb-6 text-gray-700 dark:text-gray-300">
          {currentTabConfig.description}
        </Paragraph>
        <DataTable
          columns={currentTabConfig.columns}
          data={currentTabConfig.data}
        />
      </div>
    </div>
  );
};

export default TravelContent;
