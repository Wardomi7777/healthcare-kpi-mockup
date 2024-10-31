import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = {
  patients: [
    { name: 'Jan', value: 2400 },
    { name: 'Feb', value: 1398 },
    { name: 'Mar', value: 9800 },
    { name: 'Apr', value: 3908 },
    { name: 'May', value: 4800 },
    { name: 'Jun', value: 3800 },
  ],
  revenue: [
    { name: 'Jan', value: 24000 },
    { name: 'Feb', value: 13980 },
    { name: 'Mar', value: 98000 },
    { name: 'Apr', value: 39080 },
    { name: 'May', value: 48000 },
    { name: 'Jun', value: 38000 },
  ],
  satisfaction: [
    { name: 'Jan', value: 85 },
    { name: 'Feb', value: 88 },
    { name: 'Mar', value: 92 },
    { name: 'Apr', value: 89 },
    { name: 'May', value: 94 },
    { name: 'Jun', value: 95 },
  ],
};

type MetricType = 'patients' | 'revenue' | 'satisfaction';

export default function PerformanceChart() {
  const [activeMetric, setActiveMetric] = useState<MetricType>('patients');

  const getChartColor = (metric: MetricType) => {
    switch (metric) {
      case 'patients':
        return '#3b82f6';
      case 'revenue':
        return '#10b981';
      case 'satisfaction':
        return '#8b5cf6';
      default:
        return '#3b82f6';
    }
  };

  const formatYAxis = (value: number) => {
    if (activeMetric === 'revenue') {
      return `$${value.toLocaleString()}`;
    }
    if (activeMetric === 'satisfaction') {
      return `${value}%`;
    }
    return value.toLocaleString();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Performance Metrics</h3>
        <div className="flex space-x-2">
          {(['patients', 'revenue', 'satisfaction'] as MetricType[]).map((metric) => (
            <button
              key={metric}
              onClick={() => setActiveMetric(metric)}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                activeMetric === metric
                  ? 'text-gray-900 bg-gray-100'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {metric.charAt(0).toUpperCase() + metric.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data[activeMetric]} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" tickFormatter={formatYAxis} />
            <Tooltip
              formatter={(value: number) => [formatYAxis(value), activeMetric.charAt(0).toUpperCase() + activeMetric.slice(1)]}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={getChartColor(activeMetric)}
              strokeWidth={2}
              dot={{ fill: getChartColor(activeMetric) }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}