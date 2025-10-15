import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Internships from './components/Internships';
import TestTerminals from './components/TestTerminals';

function App() {
  const [activeSection, setActiveSection] = useState('internships');
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      name: 'Priya Sharma',
      company: 'Google',
      package: '₹18 LPA'
    },
    {
      id: 2,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      name: 'Rahul Kumar',
      company: 'Microsoft',
      package: '₹22 LPA'
    },
    {
      id: 3,
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      name: 'Ananya Patel',
      company: 'Amazon',
      package: '₹20 LPA'
    }
  ]);

  const addTestimonial = (testimonial) => {
    setTestimonials([...testimonials, { ...testimonial, id: Date.now() }]);
  };

  const deleteTestimonial = (id) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
  };

  const renderContent = () => {
    switch(activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'internships':
        return <Internships testimonials={testimonials} />;
      case 'test-terminals':
        return <TestTerminals 
          testimonials={testimonials}
          onAdd={addTestimonial}
          onDelete={deleteTestimonial}
        />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 lg:ml-64 w-full overflow-x-hidden">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
