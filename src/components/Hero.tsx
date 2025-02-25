import React from 'react';
import { Shield, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10"></div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-2 bg-emerald-500/10 rounded-full mb-8">
            <Shield className="w-6 h-6 text-emerald-500 mr-2" />
            <span className="text-emerald-500">Bug Bounty Hunter & Cybersecurity Enthusiast</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Hi, I'm Nikhil Atrey</span>
            <span className="block text-emerald-500">Securing the Digital World</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Aspiring cybersecurity specialist with a passion for bug bounty hunting and ethical hacking. 
            Currently focused on mastering web security and uncovering vulnerabilities to make the digital world safer.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-colors"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-emerald-500 text-emerald-500 font-semibold rounded-lg hover:bg-emerald-500/10 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-emerald-500 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;