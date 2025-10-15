import React from 'react';
import { Award, Building2 } from 'lucide-react';

const TestimonialCarousel = ({ testimonials }) => {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden py-4 md:py-8">
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-cyan-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex animate-scroll hover:pause">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="flex-shrink-0 w-72 md:w-80 mx-3 md:mx-4"
          >
            <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 hover:shadow-2xl transition-shadow duration-300 h-full">
              <div className="flex flex-col items-center text-center">
                {/* Photo */}
                <div className="w-20 h-20 md:w-24 md:h-24 mb-3 md:mb-4 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg flex-shrink-0">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">
                  {testimonial.name}
                </h3>

                {/* Company */}
                <div className="flex items-center space-x-2 mb-3">
                  <Building2 size={16} className="text-slate-500 flex-shrink-0" />
                  <p className="text-slate-600 font-medium text-sm md:text-base">{testimonial.company}</p>
                </div>

                {/* Package */}
                <div className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 px-3 md:px-4 py-2 rounded-full">
                  <Award size={16} className="text-green-600 flex-shrink-0" />
                  <p className="text-green-700 font-bold text-sm md:text-base">{testimonial.package}</p>
                </div>

                {/* Success Badge */}
                <div className="mt-3 md:mt-4 bg-cyan-50 text-cyan-700 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold">
                  ✨ Success Story
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
