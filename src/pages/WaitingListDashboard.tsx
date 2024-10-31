import React from 'react';
import { Clock, Users, AlertCircle } from 'lucide-react';

const waitingListData = [
  { id: 1, department: 'MRI', patients: 15, avgWait: '45 mins', priority: 'high' },
  { id: 2, department: 'CT Scan', patients: 8, avgWait: '30 mins', priority: 'medium' },
  { id: 3, department: 'X-Ray', patients: 5, avgWait: '15 mins', priority: 'low' },
  { id: 4, department: 'Ultrasound', patients: 12, avgWait: '35 mins', priority: 'medium' },
];

export default function WaitingListDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Waiting List Management</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-500" />
            <h3 className="text-lg font-semibold">Total Waiting</h3>
          </div>
          <p className="text-3xl font-bold mt-2">40</p>
          <p className="text-sm text-gray-500">Patients in queue</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-yellow-500" />
            <h3 className="text-lg font-semibold">Average Wait</h3>
          </div>
          <p className="text-3xl font-bold mt-2">31</p>
          <p className="text-sm text-gray-500">Minutes</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <h3 className="text-lg font-semibold">High Priority</h3>
          </div>
          <p className="text-3xl font-bold mt-2">15</p>
          <p className="text-sm text-gray-500">Cases</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Current Queue Status</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Waiting Patients
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Average Wait
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority Level
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {waitingListData.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.patients} patients
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.avgWait}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.priority === 'high' 
                          ? 'bg-red-100 text-red-800'
                          : item.priority === 'medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {item.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}