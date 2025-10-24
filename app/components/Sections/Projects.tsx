import type { Project } from "~/types";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with AI recommendations and seamless payment integration",
      category: "Web Development"
    },
    {
      title: "Health & Fitness App",
      description: "Mobile application with real-time tracking, workout plans, and health analytics",
      category: "Mobile Development"
    },
    {
      title: "Business Analytics Dashboard",
      description: "Enterprise dashboard with real-time data visualization and reporting features",
      category: "UI/UX Design & Development"
    },
    {
      title: "AI Chatbot Solution",
      description: "Intelligent customer service chatbot with natural language processing",
      category: "AI Development"
    },
    {
      title: "FinTech Mobile App",
      description: "Secure financial application with investment tracking and portfolio management",
      category: "Mobile Development"
    },
    {
      title: "Educational Platform",
      description: "Interactive learning management system with video streaming and assessments",
      category: "Web Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Recent Projects</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Explore our portfolio of successful digital transformations and innovative solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <figure className="px-4 pt-4">
                <div className="w-full h-48 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="card-actions justify-end mt-4">
                  <span className="badge badge-primary badge-lg">{project.category}</span>
                </div>
                <button className="btn btn-outline btn-sm mt-4">View Details</button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-primary btn-lg">View All Projects</button>
        </div>
      </div>
    </section>
  );
}