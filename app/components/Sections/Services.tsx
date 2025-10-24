import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Services() {
  const [current, setCurrent] = useState(0);

  const services = [
    {
      title: "Let's Learn UI/UX Design",
      description: "Learn how to become a UI/UX designer and start your course.",
      button: "Come Join Us",
      image: "/images/uiux-service.png",
    },
    {
      title: "Website Development Service",
      description:
        "E-commerce Website Setup, Landing Pages, Sales Funnels, and Custom Websites.",
      button: "Learn More",
      image: "/images/webdev-service.png",
    },
  ];

  const next = () => {
    setCurrent((prev) => (prev + 1) % services.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
  };

  // 🕒 Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(timer); // cleanup on unmount
  }, [services.length]);

  return (
    <section className="bg-black text-white py-20 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">Our Service</h2>

        <div className="relative flex justify-center items-center">
          {/* Cards Wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="min-w-full md:min-w-[650px] bg-gradient-to-br from-[#0b57ff] to-[#0046a5] rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between text-left overflow-hidden mx-2"
              >
                {/* Left Side */}
                <div className="p-8 md:w-1/2">
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-md hover:bg-gray-200 transition">
                    {service.button}
                  </button>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center p-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-[90%] md:w-[95%] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-0 right-0 flex gap-3 mt-4 pr-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center hover:bg-blue-700 hover:text-white transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center hover:bg-blue-700 hover:text-white transition"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
