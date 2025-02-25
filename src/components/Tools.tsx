import React from 'react';
import { Terminal, Shield, Bug, Search, Code, Network } from 'lucide-react';

const tools = [
  {
    name: 'Burp Suite',
    icon: Bug,
    description: 'Primary web application security testing tool for intercepting and modifying HTTP/HTTPS traffic.',
  },
  {
    name: 'Nmap',
    icon: Network,
    description: 'Network discovery and security auditing tool for port scanning and service detection.',
  },
  {
    name: 'Metasploit',
    icon: Terminal,
    description: 'Penetration testing framework for discovering and exploiting security vulnerabilities.',
  },
  {
    name: 'OWASP ZAP',
    icon: Shield,
    description: 'Open-source web application security scanner for finding vulnerabilities.',
  },
  {
    name: 'Custom Scripts',
    icon: Code,
    description: 'Python and JavaScript tools developed for specific testing scenarios and automation.',
  },
  {
    name: 'Recon Tools',
    icon: Search,
    description: 'Various reconnaissance tools for gathering information about target systems.',
  },
];

const Tools = () => {
  return (
    <section id="tools" className="py-20 bg-black/95">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Tools & <span className="text-emerald-500">Techniques</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/50 rounded-lg p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:transform hover:-translate-y-1"
              >
                <Icon className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
                <p className="text-gray-400">{tool.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;