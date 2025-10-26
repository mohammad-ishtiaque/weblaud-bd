export default function FAQ() {
  const faqs = [
    {
      question: "What services does Dev Nest provide?",
      answer: "We offer comprehensive digital services including UI/UX design, web development, mobile app development, AI solutions, blockchain development, and custom software solutions. Our team specializes in creating user-friendly, scalable, and innovative digital products."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, bug fixes, and feature enhancements. We have different support packages to suit your needs and budget."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Next.js, Node.js, Python, React Native, Flutter, AI/ML frameworks, blockchain technologies, and cloud platforms like AWS, Azure, and Google Cloud."
    },
    {
      question: "How do you ensure project quality?",
      answer: "We follow industry best practices including code reviews, automated testing, continuous integration, and regular client feedback sessions. Our team has extensive experience and we maintain high standards throughout the development process."
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-arrow bg-[#111111] border border-[#1b1b1b] rounded-2xl">
              <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
              <div className="collapse-title text-lg font-semibold flex items-center gap-4">
                <span className="text-blue-500 font-bold text-lg">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
