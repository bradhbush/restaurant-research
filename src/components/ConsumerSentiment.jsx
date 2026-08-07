import React from 'react';
import { PieChart, TrendingUp, TrendingDown, Minus } from 'lucide-react';

function ConsumerSentiment({ data }) {
  const SentimentCard = ({ title, data, icon: Icon, insight }) => (
    <div className="mb-4">
      <div className="flex items-center space-x-2 mb-3">
        <Icon className="h-4 w-4 text-green-600" />
        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
      </div>
      
      <div className="space-y-2">
        {Object.entries(data).map(([key, value]) => (
          key !== 'insight' && (
            <div key={key} className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-700 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <span className="text-xs font-semibold text-gray-900">{value}</span>
            </div>
          )
        ))}
      </div>

      <div className="mt-2 pt-2 border-t border-gray-200">
        <p className="text-xs text-gray-600 italic">{insight}</p>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <PieChart className="h-5 w-5 text-green-600" />
        <h4 className="text-base font-semibold text-gray-900">Consumer Sentiment Analysis</h4>
      </div>
      
      <div className="space-y-4">
        <SentimentCard 
          title="Current Financial Situation"
          data={data.currentFinancialSituation}
          icon={PieChart}
          insight={data.currentFinancialSituation.insight}
        />
        <SentimentCard 
          title="Financial Outlook"
          data={data.financialOutlook}
          icon={TrendingUp}
          insight={data.financialOutlook.insight}
        />
        <SentimentCard 
          title="Restaurant Frequency"
          data={data.restaurantFrequency}
          icon={Minus}
          insight={data.restaurantFrequency.insight}
        />
      </div>
    </div>
  );
}

export default ConsumerSentiment;
