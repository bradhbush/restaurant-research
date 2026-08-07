import React from 'react';
import { Plus, Minus } from 'lucide-react';

function FrequencyDrivers({ data }) {
  const DriverBar = ({ factor, strength, isPositive }) => (
    <div className="flex items-center space-x-2">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
        isPositive ? 'bg-green-100' : 'bg-red-100'
      }`}>
        {isPositive ? (
          <Plus className="h-3 w-3 text-green-600" />
        ) : (
          <Minus className="h-3 w-3 text-red-600" />
        )}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-medium text-gray-900">{factor}</span>
          <span className={`text-xs font-semibold ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {strength}
          </span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full ${
              isPositive ? 'bg-green-500' : 'bg-red-500'
            }`}
            style={{ 
              width: strength === 'Highest' ? '100%' : strength === 'High' ? '75%' : '50%' 
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <Plus className="h-5 w-5 text-green-600" />
        <h4 className="text-base font-semibold text-gray-900">Frequency Drivers Analysis</h4>
      </div>
      
      <div className="space-y-4">
        <div>
          <h5 className="text-sm font-medium text-gray-900 mb-2">Positive Drivers</h5>
          <p className="text-xs text-gray-600 mb-3">Factors driving increased restaurant visit frequency</p>
          <div className="space-y-2">
            {data.positive.map((driver) => (
              <DriverBar key={driver.factor} {...driver} isPositive={true} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-sm font-medium text-gray-900 mb-2">Negative Drivers</h5>
          <p className="text-xs text-gray-600 mb-3">Factors driving decreased restaurant visit frequency</p>
          <div className="space-y-2">
            {data.negative.map((driver) => (
              <DriverBar key={driver.factor} {...driver} isPositive={false} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 bg-green-50 border border-green-200 rounded p-3">
        <p className="text-xs text-green-800">
          <strong>Key Insight:</strong> Restaurant operators can still drive incremental frequency through 
          improved access/convenience, value-oriented messaging, operational execution, and menu enhancements, 
          despite the challenging consumer backdrop where affordability remains the primary hurdle.
        </p>
      </div>
    </div>
  );
}

export default FrequencyDrivers;
