import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WhyWeStarted() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "So we built a platform that empowers companies to transform raw data into real-time decisions using the power of AI.",
      author: "John Doe"
    },
    {
      quote: "Our mission is to bridge the gap between complex technology and practical business solutions.",
      author: "Jane Smith"
    },
    {
      quote: "We believe in creating technology that not only works but makes a meaningful impact on people's lives.",
      author: "Mike Johnson"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-black text-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16">Why We Started</h2>
        
        <div className="relative">
          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-[#111111] border border-[#1b1b1b] rounded-2xl p-8 transition-all duration-500 ${
                  index === currentTestimonial ? 'border-blue-500/50 scale-105' : 'opacity-70'
                }`}
              >
                <div className="text-6xl text-blue-500 mb-4">"</div>
                <p className="text-gray-300 leading-relaxed mb-6">{testimonial.quote}</p>
                <p className="font-semibold text-white">{testimonial.author}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Learn More Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
