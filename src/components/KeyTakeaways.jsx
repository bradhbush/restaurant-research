import React from 'react';
import { Lightbulb } from 'lucide-react';

function KeyTakeaways({ takeaways }) {
  return (
    <div>
      <div className="flex items-center space-x-3 mb-6">
        <Lightbulb className="h-5 w-5 text-green-600" />
        <h4 className="text-base font-semibold text-gray-900">Key Takeaways</h4>
      </div>
      <div className="space-y-4">
        {takeaways.map((takeaway, index) => (
          <div key={index} className="border-l-4 border-green-500 pl-3">
            <h5 className="font-medium text-gray-900 mb-1 text-sm">{takeaway.title}</h5>
            <p className="text-gray-600 leading-relaxed text-sm">{takeaway.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyTakeaways;
