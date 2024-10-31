import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Activity, Stethoscope, Clock, Brain, MapPin } from 'lucide-react';

export default function Layout() {
  const navItems = [
    { path: '/', icon: Activity, label: 'Overview' },
    { path: '/equipment', icon: Stethoscope, label: 'Equipment' },
    { path: '/waiting-list', icon: Clock, label: 'Waiting List' },
    { path: '/facilities-map', icon: MapPin, label: 'Facilities' },
    { path: '/ai-recommendations', icon: Brain, label: 'AI Insights' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <nav className="flex space-x-8">
              {navItems.map(({ path, icon: Icon, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-gray-900'
                    }`
                  }
                >
                  <Icon className="h-5 w-5 mr-1.5" />
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}