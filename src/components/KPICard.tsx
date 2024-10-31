import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down';
  metric?: string;
}

export default function KPICard({ title, value, change, trend, metric }: KPICardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <span className={`flex items-center text-sm ${trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
          {trend === 'up' ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
          {change}%
        </span>
      </div>
      <div className="flex items-baseline">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {metric && <span className="ml-2 text-gray-500 text-sm">{metric}</span>}
      </div>
    </div>
  );
}