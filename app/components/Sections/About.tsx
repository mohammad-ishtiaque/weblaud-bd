import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="bg-black text-white py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side — Abstract Shape */}
        <div className="relative flex justify-center items-center">
          <div className="grid grid-cols-2 gap-6 w-[80%] md:w-[75%]">
            <div className="bg-gray-300 rounded-tl-[80px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[0px] aspect-square" />
            <div className="bg-gray-300 aspect-square" />
            <div className="bg-gray-300 aspect-square rounded-bl-[80px]" />
            <div className="bg-gray-300 aspect-square" />
          </div>

          {/* Decorative floating shape */}
          <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-br from-blue-700 to-teal-400 rounded-full blur-xl opacity-60 animate-pulse" />
        </div>

        {/* Right Side — Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold">About <span className="text-white">US</span></h2>

          <p className="text-gray-300 leading-relaxed">
            We are a full-service digital agency passionate about transforming ideas into impactful digital products. 
            With a strong focus on mobile app and website design & development, we aim to create solutions that not 
            only look stunning but also deliver measurable results.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Our team of experienced designers, developers, and strategists work hand in hand to understand your business 
            goals and turn them into intuitive, user-friendly, and scalable digital experiences. Whether it's building a 
            custom mobile application, designing a responsive website, or creating a complete digital ecosystem, we 
            combine creativity and technology to bring your vision to life.
          </p>

          <p className="text-gray-300 leading-relaxed">
            At our agency, we value collaboration, transparency, and innovation. Every project is treated as a partnership, 
            where your success is our ultimate priority. By staying up to date with the latest technologies, design trends, 
            and market demands, we ensure that our clients receive future-ready solutions that give them a competitive edge.
          </p>

          {/* Explore Button */}
          <Link
            to="/about/details"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-700/40 hover:scale-105 transition-all duration-300"
          >
            Explore Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
