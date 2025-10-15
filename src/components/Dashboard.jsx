import React from 'react';
import { Users, Briefcase, TrendingUp, Award } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Students', value: '1,234', icon: Users, color: 'bg-blue-500' },
    { label: 'Active Internships', value: '89', icon: Briefcase, color: 'bg-green-500' },
    { label: 'Placements', value: '456', icon: Award, color: 'bg-purple-500' },
    { label: 'Success Rate', value: '94%', icon: TrendingUp, color: 'bg-orange-500' }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Dashboard Overview</h1>
        <p className="text-slate-600 mt-2">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-slate-800 font-medium">New internship posted</p>
                <p className="text-slate-600 text-sm">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
