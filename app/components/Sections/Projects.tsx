import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "machine-learning-project",
      title: "Machine Learning Project",
      description: "Advanced AI-powered solution that revolutionizes data processing and predictive analytics.",
      category: "AI Development",
      image: "/images/ml-project.png"
    },
    {
      id: "blockchain-platform", 
      title: "Blockchain Platform",
      description: "Secure decentralized platform for financial transactions with smart contract integration.",
      category: "Blockchain Development",
      image: "/images/blockchain-project.png"
    },
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform", 
      description: "Full-stack e-commerce solution with AI recommendations and seamless payment integration.",
      category: "Web Development",
      image: "/images/ecommerce-project.png"
    },
    {
      id: "health-fitness-app",
      title: "Health & Fitness App",
      description: "Mobile application with real-time tracking, workout plans, and health analytics.",
      category: "Mobile Development", 
      image: "/images/health-app.png"
    },
    {
      id: "analytics-dashboard",
      title: "Business Analytics Dashboard",
      description: "Enterprise dashboard with real-time data visualization and reporting features.",
      category: "UI/UX Design",
      image: "/images/analytics-dashboard.png"
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot Solution",
      description: "Intelligent customer service chatbot with natural language processing capabilities.",
      category: "AI Development",
      image: "/images/chatbot.png"
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Recent Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful digital transformations and innovative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.id}
              to={`/projects/${project.id}`}
              className="group bg-[#111111] border border-[#1b1b1b] rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-500 text-sm font-semibold">{project.category}</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition inline-flex items-center gap-2"
          >
            View All Projects <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}