import { Form } from "react-router";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    setIsSubmitting(true);
    // Form submission will be handled by Remix action
    // This is just for the loading state
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            READY TO DISCUSS<br />
            Your Product Needs With Our Experts?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's transform your ideas into reality. Get in touch with us and we'll help you bring your vision to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">123 Tech Street, Digital City</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">contact@devnest.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Form 
              method="post" 
              action="/api/contact"
              className="card bg-base-200 shadow-xl"
              onSubmit={handleSubmit}
            >
              <div className="card-body">
                <div className="grid grid-cols-1 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Your Name *</span>
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Enter your full name" 
                      className="input input-bordered" 
                      required 
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Your Email *</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Enter your email address" 
                      className="input input-bordered" 
                      required 
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Subject *</span>
                    </label>
                    <input 
                      type="text" 
                      name="subject"
                      placeholder="Enter subject" 
                      className="input input-bordered" 
                      required 
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Message *</span>
                    </label>
                    <textarea 
                      name="message"
                      className="textarea textarea-bordered h-32" 
                      placeholder="Tell us about your project, requirements, and goals..."
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button 
                    type="submit" 
                    className={`btn btn-primary btn-lg ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}