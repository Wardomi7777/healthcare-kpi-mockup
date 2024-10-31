import React from 'react';
import { Calendar } from 'lucide-react';

interface DateRangeSelectorProps {
  selected: string;
  onSelect: (range: string) => void;
}

export default function DateRangeSelector({ selected, onSelect }: DateRangeSelectorProps) {
  const ranges = ['today', 'week', 'month', 'quarter'];

  return (
    <div className="flex items-center space-x-4">
      {ranges.map((range) => (
        <button
          key={range}
          onClick={() => onSelect(range)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            selected === range
              ? 'text-gray-900 bg-gray-100'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {range.charAt(0).toUpperCase() + range.slice(1)}
        </button>
      ))}
      <div className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer">
        <Calendar size={16} className="mr-2" />
        Custom Range
      </div>
    </div>
  );
}