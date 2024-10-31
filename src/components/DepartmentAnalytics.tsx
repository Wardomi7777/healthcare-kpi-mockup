import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const departmentData = {
  efficiency: [
    { name: 'Cardiology', value: 85 },
    { name: 'Neurology', value: 78 },
    { name: 'Pediatrics', value: 92 },
    { name: 'Oncology', value: 88 },
    { name: 'Emergency', value: 95 },
  ],
  satisfaction: [
    { name: 'Cardiology', value: 90 },
    { name: 'Neurology', value: 85 },
    { name: 'Pediatrics', value: 95 },
    { name: 'Oncology', value: 87 },
    { name: 'Emergency', value: 82 },
  ],
  utilization: [
    { name: 'Cardiology', value: 75 },
    { name: 'Neurology', value: 82 },
    { name: 'Pediatrics', value: 88 },
    { name: 'Oncology', value: 79 },
    { name: 'Emergency', value: 93 },
  ],
};

type MetricType = 'efficiency' | 'satisfaction' | 'utilization';

export default function DepartmentAnalytics() {
  const [activeMetric, setActiveMetric] = useState<MetricType>('efficiency');

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Department Analytics</h3>
        <div className="flex space-x-2">
          {(['efficiency', 'satisfaction', 'utilization'] as MetricType[]).map((metric) => (
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
          <BarChart data={departmentData[activeMetric]} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" tickFormatter={(value) => `${value}%`} />
            <Tooltip formatter={(value: number) => [`${value}%`, activeMetric.charAt(0).toUpperCase() + activeMetric.slice(1)]} />
            <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}