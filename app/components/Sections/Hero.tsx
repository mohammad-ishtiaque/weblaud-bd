import { Link } from "react-router";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-black text-white min-h-[90vh] flex items-center justify-center px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="relative">
          <h4 className="text-gray-400 mb-3 text-lg font-medium">Hello,</h4>

          <h1 className="text-5xl md:text-6xl lg:text-[3.8rem] font-extrabold leading-tight mb-6">
            We Help People To <br />
            Bring Their Ideas <br />
            <span className="text-white">Alive</span>
          </h1>

          <p className="text-gray-400 mb-10 max-w-md leading-relaxed">
            A talented team to help you in your journey on creating useful and easy-to-use products.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full shadow-lg transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" /> Wanna Talk?
            </Link>

            <Link
              to="/services"
              className="flex items-center gap-2 border border-gray-500 hover:border-blue-600 text-white font-semibold px-7 py-3 rounded-full transition-all duration-300"
            >
              Check our Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Right 3D Illustration */}
        <div className="flex justify-center items-center relative">
          <div className="w-[360px] md:w-[480px] lg:w-[850px]">
            <img
              src="../../../public/assets/images/hero.png"
              alt="3D Illustration"
              className="w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
