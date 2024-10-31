import React from 'react';
import { Brain, TrendingUp, AlertTriangle, Clock, Tool } from 'lucide-react';

const recommendations = [
  {
    id: 1,
    type: 'optimization',
    title: 'MRI Scanner Utilization',
    description: 'Schedule maintenance during low-usage periods to maximize availability.',
    impact: 'High',
    icon: TrendingUp,
  },
  {
    id: 2,
    type: 'alert',
    title: 'CT Scanner Maintenance',
    description: 'Preventive maintenance recommended within next 48 hours.',
    impact: 'Medium',
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: 'scheduling',
    title: 'Wait Time Reduction',
    description: 'Redistribute patient load to alternate time slots to reduce peak wait times.',
    impact: 'High',
    icon: Clock,
  },
];

export default function AIRecommendations() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Brain className="h-8 w-8 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">AI Recommendations</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Current Recommendations</h3>
          <div className="space-y-4">
            {recommendations.map((rec) => {
              const Icon = rec.icon;
              return (
                <div key={rec.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <Icon className={`h-5 w-5 ${
                        rec.type === 'optimization' ? 'text-blue-500' :
                        rec.type === 'alert' ? 'text-yellow-500' : 'text-green-500'
                      }`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{rec.title}</h4>
                      <p className="mt-1 text-sm text-gray-500">{rec.description}</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-xs font-medium text-gray-500">Impact:</span>
                        <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          rec.impact === 'High' 
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {rec.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Predictive Analytics</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="text-sm font-medium text-blue-900">Peak Hours Prediction</h4>
              <p className="mt-1 text-sm text-blue-700">
                Expected high volume: Tomorrow 10 AM - 2 PM
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-sm font-medium text-green-900">Resource Optimization</h4>
              <p className="mt-1 text-sm text-green-700">
                Suggested staff allocation: +2 technicians during peak hours
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="text-sm font-medium text-yellow-900">Maintenance Forecast</h4>
              <p className="mt-1 text-sm text-yellow-700">
                Next optimal maintenance window: Sunday, 2 AM - 6 AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}