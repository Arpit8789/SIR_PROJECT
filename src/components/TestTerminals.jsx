import React, { useState } from 'react';
import CreateTestTerminal from './CreateTestTerminal';
import { Plus, Trash2, Award } from 'lucide-react';

const TestTerminals = ({ testimonials, onAdd, onDelete }) => {
  const [activeTab, setActiveTab] = useState('create');

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Test Terminals Management</h1>
        <p className="text-slate-600 mt-2">Manage student success stories and testimonials</p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('create')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            activeTab === 'create'
              ? 'bg-cyan-500 text-white shadow-lg'
              : 'bg-white text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Plus size={20} />
          <span>Create Test Terminal</span>
        </button>
        <button
          onClick={() => setActiveTab('delete')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            activeTab === 'delete'
              ? 'bg-red-500 text-white shadow-lg'
              : 'bg-white text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Trash2 size={20} />
          <span>Delete Existing Test Terminal</span>
        </button>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        {activeTab === 'create' ? (
          <CreateTestTerminal onAdd={onAdd} />
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Existing Testimonials</h2>
            {testimonials.length === 0 ? (
              <div className="text-center py-12">
                <Award className="mx-auto text-slate-300 mb-4" size={48} />
                <p className="text-slate-500 text-lg">No testimonials found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="border border-slate-200 rounded-xl p-6 hover:border-red-300 transition-colors duration-200"
                  >
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-slate-200 mb-4"
                      />
                      <h3 className="font-bold text-slate-800 mb-1">{testimonial.name}</h3>
                      <p className="text-slate-600 text-sm mb-1">{testimonial.company}</p>
                      <p className="text-green-600 font-semibold mb-4">{testimonial.package}</p>
                      <button
                        onClick={() => onDelete(testimonial.id)}
                        className="w-full flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                      >
                        <Trash2 size={16} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestTerminals;
