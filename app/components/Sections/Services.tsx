import type { Service } from "~/types";

export default function Services() {
  const services: Service[] = [
    {
      title: "UI/UX Design",
      description: "Let's Learn UI/UX Design",
      subtitle: "PERFECT TO ENHANCE USER EXPERIENCE AND START YOUR JOURNEY",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      title: "Website Development Service",
      description: "Custom website development tailored to your business needs",
      features: ["Responsive Design", "SEO Optimization", "Fast Performance", "Security"]
    },
    {
      title: "AI Mobile App Development",
      description: "Intelligent mobile applications powered by AI",
      features: ["AI Integration", "Cross-platform", "Real-time Analytics", "Cloud Services"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Comprehensive digital solutions powered by deep expertise in creative frontend development
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service, index: number) => (
            <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">{service.title}</h3>
                <p className="text-lg mb-4">{service.description}</p>
                {service.subtitle && (
                  <p className="text-sm text-accent mb-4 font-semibold">{service.subtitle}</p>
                )}
                <ul className="space-y-2">
                  {service.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}