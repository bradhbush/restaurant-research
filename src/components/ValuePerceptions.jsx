import React from 'react';
import { ArrowUp, ArrowDown, Award, AlertCircle } from 'lucide-react';

function ValuePerceptions({ data }) {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <Award className="h-5 w-5 text-green-600" />
        <h4 className="text-base font-semibold text-gray-900">Value Perceptions Analysis</h4>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <h5 className="text-sm font-medium text-gray-900 mb-2">Highest Value Scores</h5>
            <div className="space-y-2">
              {data.highestValue.map((item) => (
                <div key={item.company} className="flex items-center justify-between p-2 bg-green-50 rounded">
                  <span className="text-xs font-medium text-gray-900">{item.company}</span>
                  <span className="text-xs text-green-600 font-bold">#{item.rank}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-sm font-medium text-gray-900 mb-2">Lowest Value Scores</h5>
            <div className="space-y-2">
              {data.lowestValue.map((item) => (
                <div key={item.company} className="flex items-center justify-between p-2 bg-red-50 rounded">
                  <span className="text-xs font-medium text-gray-900">{item.company}</span>
                  <span className="text-xs text-red-600 font-bold">#{Math.abs(item.rank)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <h5 className="text-sm font-medium text-gray-900 mb-2">Sequential Improvement</h5>
            <div className="space-y-1">
              {data.sequentialImprovement.map((company) => (
                <div key={company} className="flex items-center space-x-1 p-1 bg-green-50 rounded">
                  <ArrowUp className="h-3 w-3 text-green-600" />
                  <span className="text-xs font-medium text-gray-900">{company}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-sm font-medium text-gray-900 mb-2">Sequential Decline</h5>
            <div className="space-y-1">
              {data.sequentialDecline.map((company) => (
                <div key={company} className="flex items-center space-x-1 p-1 bg-red-50 rounded">
                  <ArrowDown className="h-3 w-3 text-red-600" />
                  <span className="text-xs font-medium text-gray-900">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValuePerceptions;
