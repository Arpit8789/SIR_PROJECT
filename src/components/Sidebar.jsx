import React from 'react';
import { LayoutDashboard, Briefcase, Monitor } from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'internships', label: 'Internships', icon: Briefcase },
    { id: 'test-terminals', label: 'Test Terminals', icon: Monitor }
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-2xl">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold">DT</span>
          </div>
          <h1 className="text-2xl font-bold text-cyan-400">DATA-TECH</h1>
        </div>
        <p className="text-xs text-slate-400 mt-2 ml-12">Admin Dashboard</p>
      </div>
      
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
