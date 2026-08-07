import React from 'react';

function Header() {
  const menuItems = [
    'GSBai',
    'GSB Sales Flash',
    'Deep Dive',
    'Brand - Quick',
    'Period Insights',
    'Labor Efficiency',
    'Company Stats',
    'P-Mix',
    'Development Tracker',
    'Real Estate',
    'Board Budget',
    'Inspection Checklist',
    'New Photo Capture',
    'Other'
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Top Branding Bar */}
      <div className="bg-green-600 px-4 py-3">
        <h1 className="text-white text-xl font-bold tracking-wide">GREEN SHOOT BRANDS.</h1>
      </div>
      
      {/* Secondary Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="flex items-center space-x-1 px-4 py-2 overflow-x-auto">
          {menuItems.map((item) => (
            <button
              key={item}
              className={`px-3 py-2 text-sm font-medium whitespace-nowrap rounded-md transition-colors ${
                item === 'GSB Sales Flash'
                  ? 'bg-green-100 text-green-800'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Header;
