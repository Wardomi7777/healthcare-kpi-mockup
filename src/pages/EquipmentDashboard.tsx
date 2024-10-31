import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, AlertTriangle, CheckCircle } from 'lucide-react';

const equipmentData = [
  { name: 'MRI Scanner', utilization: 85, maintenance: '2024-04-15', status: 'active' },
  { name: 'CT Scanner', utilization: 78, maintenance: '2024-03-30', status: 'maintenance' },
  { name: 'X-Ray Machine', utilization: 92, maintenance: '2024-05-01', status: 'active' },
  { name: 'Ultrasound', utilization: 88, maintenance: '2024-04-10', status: 'active' },
];

export default function EquipmentDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Equipment Analytics</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Equipment Utilization</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={equipmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="utilization" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Equipment Status</h3>
          <div className="space-y-4">
            {equipmentData.map((equipment) => (
              <div key={equipment.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  {equipment.status === 'active' ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  )}
                  <div>
                    <p className="font-medium text-gray-900">{equipment.name}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      Next maintenance: {equipment.maintenance}
                    </div>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {equipment.utilization}% utilized
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}