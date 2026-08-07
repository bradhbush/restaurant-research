import React, { useState } from 'react';
import { reportData } from './data/reportData';
import KeyTakeaways from './components/KeyTakeaways';
import CompanyMomentum from './components/CompanyMomentum';
import ConsumerSentiment from './components/ConsumerSentiment';
import ValuePerceptions from './components/ValuePerceptions';
import FrequencyDrivers from './components/FrequencyDrivers';
import CompanyList from './components/CompanyList';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'momentum', label: 'Company Momentum' },
    { id: 'sentiment', label: 'Consumer Sentiment' },
    { id: 'value', label: 'Value Perceptions' },
    { id: 'drivers', label: 'Frequency Drivers' },
    { id: 'companies', label: 'All Companies' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Page Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">GSB Industry Reports</h2>
        
        {/* Tab Navigation */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Platforms Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Platforms</h3>
            {activeTab === 'overview' && <KeyTakeaways takeaways={reportData.keyTakeaways} />}
            {activeTab === 'momentum' && <CompanyMomentum positive={reportData.positiveMomentum} negative={reportData.negativeMomentum} />}
            {activeTab === 'sentiment' && <ConsumerSentiment data={reportData.consumerSentiment} />}
            {activeTab === 'value' && <ValuePerceptions data={reportData.valuePerceptions} />}
            {activeTab === 'drivers' && <FrequencyDrivers data={reportData.frequencyDrivers} />}
            {activeTab === 'companies' && <CompanyList companies={reportData.allCompaniesMentioned} searchTerm={searchTerm} />}
          </div>

          {/* Regions Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Regions</h3>
            <div className="space-y-4">
              {reportData.consumerSentiment && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Financial Health by Region</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-600">South</span>
                      <span className="text-sm font-medium text-green-600">Improving</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-600">Northeast</span>
                      <span className="text-sm font-medium text-green-600">Improving</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-600">Pacific</span>
                      <span className="text-sm font-medium text-green-600">Improving</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-600">Midwest</span>
                      <span className="text-sm font-medium text-red-600">Declining</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-600">Mountain</span>
                      <span className="text-sm font-medium text-red-600">Declining</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
