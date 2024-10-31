import React from 'react';
import { Building2 } from 'lucide-react';

export default function FacilitySelector() {
  return (
    <div className="relative">
      <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg border border-gray-200 cursor-pointer">
        <Building2 size={18} className="text-gray-500" />
        <span className="text-sm font-medium text-gray-700">All Facilities</span>
      </div>
    </div>
  );
}