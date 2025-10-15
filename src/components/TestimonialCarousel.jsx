import React from 'react';
import { Award, Building2 } from 'lucide-react';

const TestimonialCarousel = ({ testimonials }) => {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex animate-scroll">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="flex-shrink-0 w-80 mx-4"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 h-full">
              <div className="flex flex-col items-center text-center">
                {/* Photo */}
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {testimonial.name}
                </h3>

                {/* Company */}
                <div className="flex items-center space-x-2 mb-3">
                  <Building2 size={16} className="text-slate-500" />
                  <p className="text-slate-600 font-medium">{testimonial.company}</p>
                </div>

                {/* Package */}
                <div className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full">
                  <Award size={16} className="text-green-600" />
                  <p className="text-green-700 font-bold">{testimonial.package}</p>
                </div>

                {/* Success Badge */}
                <div className="mt-4 bg-cyan-50 text-cyan-700 px-4 py-1 rounded-full text-sm font-semibold">
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
