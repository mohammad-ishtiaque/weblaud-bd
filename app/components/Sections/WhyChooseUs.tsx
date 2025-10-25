export default function WhyChooseUs() {
  const features = [
    {
      icon: "💡",
      title: "Innovation",
      description: "Focused on creativity and forward-thinking, providing cutting-edge solutions."
    },
    {
      icon: "🤝",
      title: "Collaboration", 
      description: "Working closely with clients to develop tailored solutions that drive measurable results."
    },
    {
      icon: "⭐",
      title: "Excellence",
      description: "Maintaining the highest standards in every project, we deliver outstanding and future-ready solutions."
    },
    {
      icon: "🕐",
      title: "24/7 Hours",
      description: "Operating with 24/7 support and assistance, we ensure that our clients receive timely and efficient solutions."
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#111111] border border-[#1b1b1b] rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
