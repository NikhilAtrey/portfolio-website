import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Command Injection Exploit in DVWA',
    description: 'Successfully exploited a command injection vulnerability to gain shell access in DVWA lab environment, demonstrating advanced penetration testing skills.',
    impact: 'High',
    tools: ['Burp Suite', 'DVWA', 'Custom Scripts'],
    writeup: '#',
  },
  {
    title: 'SQL Injection Lab Completion',
    description: 'Completed comprehensive SQL injection lab exercises, successfully extracting sensitive data from the database using various techniques.',
    impact: 'Medium',
    tools: ['SQLMap', 'Burp Suite', 'DVWA'],
    writeup: '#',
  },
  {
    title: 'Network Security Tools Suite',
    description: 'Developed a suite of security tools including ARP spoofer, MAC changer, network scanner, and packet sniffer for network security testing.',
    impact: 'High',
    tools: ['Python', 'Scapy', 'Network Protocols'],
    writeup: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Featured <span className="text-emerald-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  project.impact === 'Critical' ? 'bg-red-500/20 text-red-400' :
                  project.impact === 'High' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {project.impact}
                </span>
              </div>

              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-emerald-500 mb-2">Tools Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-sm rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.writeup}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-500 hover:text-emerald-400"
              >
                Read Write-up <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;