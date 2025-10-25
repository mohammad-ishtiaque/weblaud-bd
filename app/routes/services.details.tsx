import type { MetaFunction } from "react-router";
import { useParams } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Service Details - Dev Nest" },
    { 
      name: "description", 
      content: "Explore our comprehensive digital services including AI development, blockchain solutions, and custom software development." 
    },
  ];
};

export default function ServiceDetails() {
  const { serviceId } = useParams();
  
  const services = {
    "ai-mobile-app": {
      title: "AI Mobile App Design & Development",
      description: "Transform your business with intelligent mobile applications powered by cutting-edge AI technology.",
      features: [
        "Deep learning model development",
        "Computer vision solutions", 
        "Intelligent automation monitoring",
        "Neural network architecture design",
        "Natural language processing"
      ],
      image: "/images/ai-service.png"
    },
    "blockchain-development": {
      title: "Blockchain Development",
      description: "Build secure, decentralized applications with our expert blockchain development services.",
      features: [
        "Decentralized app development",
        "Blockchain integration",
        "Token implementation", 
        "DeFi protocol design",
        "Wallet development"
      ],
      image: "/images/blockchain-service.png"
    },
    "algorithmic-trading": {
      title: "Algorithmic Trading",
      description: "Automate your trading strategies with our advanced algorithmic trading solutions.",
      features: [
        "Trading strategy development",
        "Market analysis platforms",
        "Risk management integration",
        "High-frequency trading systems",
        "Risk management systems"
      ],
      image: "/images/trading-service.png"
    }
  };

  const service = services[serviceId as keyof typeof services] || services["ai-mobile-app"];

  return (
    <section className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{service.title}</h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">{service.description}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition inline-flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex justify-center">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 bg-[#111111] border border-[#1b1b1b] rounded-2xl p-6">
              <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0a0a0a] py-16 px-8 text-center rounded-2xl max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-400 mb-6">Let's discuss your project requirements and create something amazing together.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition">
          Contact Us Now
        </button>
      </div>
    </section>
  );
}
