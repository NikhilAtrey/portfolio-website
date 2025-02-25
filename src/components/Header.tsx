import React, { useState } from 'react';
import { Menu, X, Terminal, Shield, Bug, ChevronDown, Lock } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoAnimated, setIsLogoAnimated] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tools', href: '#tools' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleLogo = () => {
    setIsLogoAnimated(!isLogoAnimated);
  };

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-emerald-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={toggleLogo}
            className="group flex items-center space-x-3 transition-all duration-300"
          >
            <div className="relative">
              <Bug 
                className={`w-8 h-8 text-emerald-500 transition-all duration-300 ${
                  isLogoAnimated ? 'opacity-0' : 'opacity-100'
                } md:group-hover:opacity-0`} 
              />
              <Lock 
                className={`w-8 h-8 text-emerald-500 absolute top-0 left-0 transition-all duration-300 ${
                  isLogoAnimated ? 'opacity-100' : 'opacity-0'
                } md:group-hover:opacity-100`} 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">Nikhil Atrey</span>
              <span className="text-sm text-emerald-500 font-medium">Security Researcher</span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-emerald-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-emerald-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-300 hover:text-emerald-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;