import React, { useState } from 'react';
import { MapPin, Users, Clock, Activity, Building } from 'lucide-react';

interface Facility {
  id: number;
  name: string;
  location: { x: number; y: number };
  metrics: {
    patientVolume: number;
    waitTime: number;
    satisfaction: number;
    equipmentUtilization: number;
  };
}

const facilities: Facility[] = [
  {
    id: 1,
    name: "Central Medical Center",
    location: { x: 30, y: 40 },
    metrics: {
      patientVolume: 245,
      waitTime: 12,
      satisfaction: 94,
      equipmentUtilization: 88
    }
  },
  {
    id: 2,
    name: "North District Hospital",
    location: { x: 70, y: 20 },
    metrics: {
      patientVolume: 180,
      waitTime: 15,
      satisfaction: 92,
      equipmentUtilization: 85
    }
  },
  {
    id: 3,
    name: "South Medical Complex",
    location: { x: 60, y: 70 },
    metrics: {
      patientVolume: 210,
      waitTime: 18,
      satisfaction: 89,
      equipmentUtilization: 82
    }
  },
  {
    id: 4,
    name: "East Wing Clinic",
    location: { x: 85, y: 50 },
    metrics: {
      patientVolume: 156,
      waitTime: 10,
      satisfaction: 96,
      equipmentUtilization: 90
    }
  }
];

export default function FacilitiesMap() {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handlePinHover = (facility: Facility, event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setTooltipPosition({
      x: rect.left,
      y: rect.top + window.scrollY
    });
    setSelectedFacility(facility);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Building className="h-8 w-8 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Facilities Map</h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="relative" style={{ height: '600px' }}>
          {/* Map Background */}
          <div className="absolute inset-0 bg-blue-50 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
              alt="City Map"
              className="w-full h-full object-cover rounded-lg opacity-20"
            />
          </div>

          {/* Facility Pins */}
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${facility.location.x}%`, top: `${facility.location.y}%` }}
              onMouseEnter={(e) => handlePinHover(facility, e)}
              onMouseLeave={() => setSelectedFacility(null)}
            >
              <MapPin className="h-8 w-8 text-blue-600 hover:text-blue-700" />
            </div>
          ))}

          {/* Tooltip */}
          {selectedFacility && (
            <div
              className="absolute z-10 w-80 bg-white rounded-lg shadow-lg p-4 border border-gray-200"
              style={{
                left: `${tooltipPosition.x + 20}px`,
                top: `${tooltipPosition.y - 100}px`
              }}
            >
              <h3 className="font-semibold text-gray-900 mb-3">{selectedFacility.name}</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    Patient Volume
                  </div>
                  <span className="font-medium">{selectedFacility.metrics.patientVolume} today</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Average Wait
                  </div>
                  <span className="font-medium">{selectedFacility.metrics.waitTime} mins</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Activity className="h-4 w-4 mr-2" />
                    Equipment Usage
                  </div>
                  <span className="font-medium">{selectedFacility.metrics.equipmentUtilization}%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Facilities List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {facilities.map((facility) => (
          <div key={facility.id} className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">{facility.name}</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Patients Today:</span>
                <span className="font-medium">{facility.metrics.patientVolume}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Wait Time:</span>
                <span className="font-medium">{facility.metrics.waitTime} mins</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Satisfaction:</span>
                <span className="font-medium">{facility.metrics.satisfaction}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}