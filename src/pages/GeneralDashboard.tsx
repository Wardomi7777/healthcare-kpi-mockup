import React from 'react';
import KPICard from '../components/KPICard';
import DateRangeSelector from '../components/DateRangeSelector';
import PerformanceChart from '../components/PerformanceChart';
import DepartmentAnalytics from '../components/DepartmentAnalytics';

export default function GeneralDashboard() {
  const [selectedDate, setSelectedDate] = React.useState('month');

  return (
    <div>
      <div className="mb-8">
        <DateRangeSelector selected={selectedDate} onSelect={setSelectedDate} />
      </div>

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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceChart />
        <DepartmentAnalytics />
      </div>
    </div>
  );
}