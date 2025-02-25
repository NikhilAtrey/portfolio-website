import React, { useState } from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-black/95">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Get in <span className="text-emerald-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gray-900/50 rounded-lg p-8 border border-emerald-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
              <p className="text-gray-400 mb-6">
                Feel free to reach out for collaboration opportunities, security consulting,
                or just to chat about cybersecurity!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://linkedin.com/in/nikhil-atrey01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-emerald-500 transition-colors"
              >
                <Linkedin className="w-6 h-6 mr-3" />
                LinkedIn
              </a>
              <a
                href="https://x.com/AtreyNikhil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-emerald-500 transition-colors"
              >
                <Twitter className="w-6 h-6 mr-3" />
                Twitter
              </a>
              <a
                href="https://github.com/NikhilAtrey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-emerald-500 transition-colors"
              >
                <Github className="w-6 h-6 mr-3" />
                GitHub
              </a>
              <a
                href="mailto:nikhilatrey4@gmail.com"
                className="flex items-center text-gray-300 hover:text-emerald-500 transition-colors"
              >
                <Mail className="w-6 h-6 mr-3" />
                nikhilatrey4@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;