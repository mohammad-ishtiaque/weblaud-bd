import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function AboutDetails() {
  return (
    <section className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          We’re Engineers of Intelligent Change
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Propelling the intersection of AI, blockchain, and sustainable finance to
          deliver intelligent solutions that drive business transformation.
        </p>
        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition inline-flex items-center gap-2"
        >
          Get in Touch <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
        {[
          { label: "Clients", value: "200+" },
          { label: "Projects", value: "280+" },
          { label: "Happy Clients", value: "100%" },
          { label: "Followers", value: "420K" },
          { label: "Years of Experience", value: "10+" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-[#111111] border border-[#1b1b1b] text-center rounded-2xl py-6 shadow-md"
          >
            <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Story + Mission Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        {/* Story */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <p className="text-gray-400 leading-relaxed">
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/images/story-3d.png"
            alt="Our Story"
            className="w-[80%] md:w-[70%] object-contain"
          />
        </div>

        {/* Mission */}
        <div className="flex justify-center items-center order-2 md:order-1">
          <img
            src="/images/mission-3d.png"
            alt="Our Mission"
            className="w-[80%] md:w-[70%] object-contain"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <p className="text-gray-400 leading-relaxed">
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>

      {/* Track Record Section */}
      <div className="max-w-6xl mx-auto px-6 mb-24 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Track Record</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { value: "12+", label: "Years AI & ML Development" },
            { value: "$2B+", label: "Website Development Value" },
            { value: "100+", label: "Custom Mobile Apps" },
            { value: "25+", label: "AI Website Optimization" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-[#1b1b1b] rounded-2xl p-8 shadow-inner"
            >
              <h3 className="text-3xl font-bold mb-2">{item.value}</h3>
              <p className="text-gray-400 text-sm leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <h3 className="text-blue-500 font-semibold mb-2">The Team</h3>
        <h2 className="text-3xl font-bold mb-10">
          Meet The Awesome and Creative Members of Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "SV Hriday", role: "CEO / Co-Founder", image: "/images/team1.jpg" },
            { name: "SV Hriday", role: "Full Stack Developer", image: "/images/team2.jpg" },
            { name: "SV Hriday", role: "Graphic Designer", image: "/images/team3.jpg" },
            { name: "SV Hriday", role: "UI/UX Designer", image: "/images/team4.jpg" },
          ].map((member, i) => (
            <div key={i} className="bg-[#111111] rounded-2xl overflow-hidden shadow-md hover:shadow-blue-600/20 transition">
              <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-white">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0a0a0a] py-16 px-8 text-center rounded-2xl max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-2">READY TO DISCUSS</h2>
        <p className="text-gray-400 mb-6">
          Your Product Needs With <span className="text-blue-500">Catalyst Analytic</span> Experts?
        </p>
        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition inline-flex items-center gap-2"
        >
          Get in Touch <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
