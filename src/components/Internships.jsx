import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';
import { Search, Filter } from 'lucide-react';

const Internships = ({ testimonials }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Find Your Dream Internship</h1>
          <p className="text-xl text-slate-300 mb-8">
            Gain real-world experience and kickstart your career with our industry-leading internship programs
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-3xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search internships..."
              className="w-full pl-12 pr-12 py-4 rounded-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-full transition-colors duration-200">
              <Filter size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="bg-white py-6 px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center space-x-4">
          <span className="text-slate-600 font-medium">Level:</span>
          {['All Levels', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
            <button
              key={level}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                level === 'All Levels'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {level}
            </button>
          ))}
          <div className="flex-1"></div>
          <span className="text-slate-600">Duration:</span>
          <select className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 border-none focus:outline-none focus:ring-2 focus:ring-cyan-500">
            <option>All Durations</option>
            <option>1-3 months</option>
            <option>3-6 months</option>
            <option>6+ months</option>
          </select>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Success Stories</h2>
            <p className="text-slate-600 text-lg">
              Our students are achieving amazing career milestones
            </p>
          </div>
          
          {/* Testimonial Carousel */}
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-800 font-semibold text-lg mb-2">
            Showing 4 of 4 internships
          </p>
        </div>
      </div>
    </div>
  );
};

export default Internships;
