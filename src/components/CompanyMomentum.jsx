import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

function CompanyMomentum({ positive, negative }) {
  const CompanyCard = ({ company, isPositive }) => (
    <div className={`border rounded-md p-3 ${isPositive ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h5 className="font-semibold text-gray-900 text-sm">{company.company}</h5>
          <p className="text-xs text-gray-600">{company.ticker}</p>
        </div>
        <span className={`px-2 py-1 text-xs font-semibold rounded ${
          company.rating === 'BUY' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {company.rating}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs mb-2">
        <div>
          <span className="text-gray-500">Market Cap:</span>
          <span className="ml-1 font-medium">{company.marketCap}</span>
        </div>
        <div>
          <span className="text-gray-500">Price Target:</span>
          <span className="ml-1 font-medium">{company.priceTarget}</span>
        </div>
      </div>
      <p className="text-xs text-gray-700 leading-relaxed">{company.insights}</p>
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center space-x-2 mb-3">
          <TrendingUp className="h-5 w-5 text-green-600" />
          <h4 className="text-base font-semibold text-gray-900">Positive Momentum</h4>
        </div>
        <div className="space-y-2">
          {positive.map((company, index) => (
            <CompanyCard key={index} company={company} isPositive={true} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-2 mb-3">
          <TrendingDown className="h-5 w-5 text-red-600" />
          <h4 className="text-base font-semibold text-gray-900">Negative Momentum</h4>
        </div>
        <div className="space-y-2">
          {negative.map((company, index) => (
            <CompanyCard key={index} company={company} isPositive={false} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyMomentum;
