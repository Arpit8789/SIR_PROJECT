import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';
import { Search, Filter } from 'lucide-react';

const Internships = ({ testimonials }) => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Find Your Dream Internship</h1>
          <p className="text-base md:text-xl text-slate-300 mb-6 md:mb-8 px-4">
            Gain real-world experience and kickstart your career with our industry-leading internship programs
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-3xl mx-auto px-4">
            <Search className="absolute left-8 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search internships..."
              className="w-full pl-12 pr-12 py-3 md:py-4 rounded-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-full transition-colors duration-200">
              <Filter size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="bg-white py-4 md:py-6 px-4 md:px-8 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 md:space-x-4 min-w-max md:min-w-0">
            <span className="text-slate-600 font-medium text-sm md:text-base">Level:</span>
            {['All Levels', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
              <button
                key={level}
                className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-200 text-sm md:text-base whitespace-nowrap ${
                  level === 'All Levels'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {level}
              </button>
            ))}
            <div className="flex-1 hidden md:block"></div>
            <span className="text-slate-600 text-sm md:text-base whitespace-nowrap">Duration:</span>
            <select className="px-3 md:px-4 py-2 rounded-lg bg-slate-100 text-slate-700 border-none focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm md:text-base">
              <option>3-6 months</option>
              <option>1-3 months</option>
              <option>6+ months</option>
            </select>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 py-12 md:py-16 px-4 md:px-8 w-full overflow-hidden">
        <div className="max-w-full mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 md:mb-4">Success Stories</h2>
            <p className="text-slate-600 text-base md:text-lg px-4">
              Our students are achieving amazing career milestones
            </p>
          </div>
          
          {/* Testimonial Carousel */}
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </div>
  );
};

export default Internships;
