import React from 'react';
import { Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-emerald-500/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Terminal className="w-6 h-6 text-emerald-500 mr-2" />
            <span className="text-gray-400">
              © {new Date().getFullYear()} Nikhil Atrey. All rights reserved.
            </span>
          </div>

          <div className="text-gray-500 italic">
            "Security is not a product, but a process." - Bruce Schneier
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;