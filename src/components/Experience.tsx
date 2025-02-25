import React from 'react';
import { Award, Calendar, Building } from 'lucide-react';

const experiences = [
  {
    title: 'Bug Bounty Hunter and Cybersecurity Enthusiast',
    company: 'Independent',
    period: 'January 2024 - Present',
    description: 'Identifying and reporting web application vulnerabilities, continuously learning and practicing web security techniques, and participating in bug bounty programs.',
  },
];

const certifications = [
  {
    name: 'Coding Ninjas C++ Certificate',
    issuer: 'Coding Ninjas',
    date: '2023',
  },
  {
    name: 'Bash Scripting Certificate',
    issuer: 'Udemy',
    date: '2023',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Experience & <span className="text-emerald-500">Certifications</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-lg p-6 border border-emerald-500/20"
                >
                  <div className="flex items-start mb-4">
                    <Building className="w-6 h-6 text-emerald-500 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <p className="text-emerald-500">{exp.company}</p>
                      <div className="flex items-center text-gray-400 text-sm mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-lg p-6 border border-emerald-500/20"
                >
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-emerald-500 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
                      <p className="text-emerald-500">{cert.issuer}</p>
                      <div className="flex items-center text-gray-400 text-sm mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {cert.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;