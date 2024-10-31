import React, { useState } from 'react';
import { BarChart3, Users, Clock, Activity, Heart, Stethoscope, Wrench } from 'lucide-react';
import KPICard from './components/KPICard';
import DateRangeSelector from './components/DateRangeSelector';
import FacilitySelector from './components/FacilitySelector';
import PerformanceChart from './components/PerformanceChart';
import DepartmentAnalytics from './components/DepartmentAnalytics';

function App() {
  const [selectedDate, setSelectedDate] = useState('month');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-xl font-semibold text-gray-900">HealthMetrics</h1>
            </div>
            <FacilitySelector />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Date Range */}
        <div className="mb-8">
          <DateRangeSelector selected={selectedDate} onSelect={setSelectedDate} />
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <KPICard
            title="Total Patient Volume"
            value="2,847"
            change={12.5}
            trend="up"
            metric="patients"
          />
          <KPICard
            title="Average Wait Time"
            value="14.2"
            change={8.3}
            trend="down"
            metric="minutes"
          />
          <KPICard
            title="Patient Satisfaction"
            value="94.8"
            change={3.2}
            trend="up"
            metric="%"
          />
          <KPICard
            title="Equipment Utilization"
            value="87.3"
            change={5.7}
            trend="up"
            metric="%"
          />
          <KPICard
            title="Revenue per Patient"
            value="$842"
            change={2.1}
            trend="up"
            metric="avg"
          />
          <KPICard
            title="Staff Efficiency"
            value="96.5"
            change={1.8}
            trend="up"
            metric="%"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PerformanceChart />
          <DepartmentAnalytics />
        </div>

        {/* AI Insights */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Wrench className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Insights</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-blue-600 mr-2" />
                  Cardiology department shows 15% increase in patient satisfaction
                </li>
                <li className="flex items-center">
                  <Users className="h-4 w-4 text-blue-600 mr-2" />
                  Staff scheduling optimization could reduce wait times by 23%
                </li>
                <li className="flex items-center">
                  <Clock className="h-4 w-4 text-blue-600 mr-2" />
                  Peak hours predicted between 10 AM - 2 PM next week
                </li>
                <li className="flex items-center">
                  <BarChart3 className="h-4 w-4 text-blue-600 mr-2" />
                  Resource utilization can be improved by 12% in Radiology
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;