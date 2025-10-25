import type { MetaFunction } from "react-router";
import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us - Dev Nest" },
    { 
      name: "description", 
      content: "Get in touch with Dev Nest to discuss your project requirements and bring your ideas to life." 
    },
  ];
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Get in touch with our team to discuss how we can help transform your business, we're here to help.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
          Get in Touch Now
        </button>
      </div>

      {/* Contact Form & Info */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#111111] border border-[#1b1b1b] rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#111111] border border-[#1b1b1b] rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#111111] border border-[#1b1b1b] rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#111111] border border-[#1b1b1b] rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-[#111111] border border-[#1b1b1b] rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition inline-flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-500" />
                  <span>hridoy6247@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-500" />
                  <span>01714621520</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-500" />
                  <span>Dhaka Bangladesh 2000-2001-1257 Dhaka</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-400 mb-6">
                Want to discuss your project in detail? Schedule a free 30-minute consultation with our team today. 
                We'll help you understand how our solutions can benefit your business.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
                Book a Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
