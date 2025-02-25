import React from 'react';
import { Code, Shield, Terminal, Bug, Lock, Database } from 'lucide-react';

const skills = [
  { name: 'Web Security', icon: Shield, level: 90 },
  { name: 'Penetration Testing', icon: Terminal, level: 85 },
  { name: 'Python', icon: Code, level: 80 },
  { name: 'JavaScript', icon: Code, level: 75 },
  { name: 'SQL', icon: Database, level: 70 },
  { name: 'Network Security', icon: Lock, level: 75 },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/95">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          About <span className="text-emerald-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 mb-6">
              I'm a dedicated cybersecurity enthusiast and bug bounty hunter with a passion for
              uncovering vulnerabilities in web applications. My journey began with a fascination
              for understanding how systems work and evolved into a mission to make the internet
              more secure.
            </p>
            <p className="text-gray-300">
              With experience in various bug bounty programs and a deep understanding of modern
              web technologies, I specialize in identifying and responsibly disclosing security
              vulnerabilities. My approach combines technical expertise with creative problem-solving
              to uncover potential threats before they can be exploited.
            </p>
          </div>

          <div className="space-y-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name}>
                  <div className="flex items-center mb-2">
                    <Icon className="w-5 h-5 text-emerald-500 mr-2" />
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;