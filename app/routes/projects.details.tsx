import type { MetaFunction } from "react-router";
import { useParams } from "react-router";
import { ArrowRight, ExternalLink } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Project Details - Dev Nest" },
    { 
      name: "description", 
      content: "Explore our portfolio of successful digital transformations and innovative solutions." 
    },
  ];
};

export default function ProjectDetails() {
  const { projectId } = useParams();
  
  const projects = {
    "machine-learning-project": {
      title: "Machine Learning Project",
      description: "Advanced AI-powered solution that revolutionizes data processing and predictive analytics for enterprise clients.",
      category: "AI Development",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      features: [
        "Real-time data processing",
        "Predictive analytics dashboard", 
        "Machine learning model training",
        "Automated reporting system"
      ],
      image: "/images/ml-project.png",
      liveUrl: "#",
      githubUrl: "#"
    },
    "blockchain-platform": {
      title: "Blockchain Platform",
      description: "Secure decentralized platform for financial transactions with smart contract integration.",
      category: "Blockchain Development", 
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      features: [
        "Smart contract development",
        "Wallet integration",
        "Transaction security",
        "DeFi protocol implementation"
      ],
      image: "/images/blockchain-project.png",
      liveUrl: "#",
      githubUrl: "#"
    },
    "ecommerce-platform": {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with AI recommendations and seamless payment integration.",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: [
        "AI-powered recommendations",
        "Secure payment processing",
        "Inventory management",
        "Analytics dashboard"
      ],
      image: "/images/ecommerce-project.png",
      liveUrl: "#",
      githubUrl: "#"
    }
  };

  const project = projects[projectId as keyof typeof projects] || projects["machine-learning-project"];

  return (
    <section className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-500 font-semibold mb-2 block">{project.category}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{project.title}</h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">{project.description}</p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a 
                href={project.liveUrl}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition inline-flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                View Live
              </a>
              <a 
                href={project.githubUrl}
                className="border border-gray-500 hover:border-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition inline-flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full max-w-lg rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.features.map((feature, index) => (
            <div key={index} className="bg-[#111111] border border-[#1b1b1b] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              <p className="text-gray-400">Comprehensive implementation with modern best practices and scalable architecture.</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0a0a0a] py-16 px-8 text-center rounded-2xl max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-4">Interested in Similar Projects?</h2>
        <p className="text-gray-400 mb-6">Let's discuss how we can bring your ideas to life with our expertise.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition inline-flex items-center gap-2">
          Start Your Project <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
