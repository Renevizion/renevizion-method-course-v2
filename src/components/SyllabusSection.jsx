import React, { useState } from 'react';

const SyllabusSection = () => {
  const [openModule, setOpenModule] = useState(null);

  const modules = [
    {
      id: 1,
      title: 'Module 1: Foundations of Visual Storytelling',
      outcomes: [
        'Understand the core principles of compelling visual narratives.',
        'Learn to identify and analyze effective visual communication.',
        'Develop your unique visual voice and artistic style.',
      ],
      details: 'This module lays the groundwork for your visual storytelling journey. We\"ll explore fundamental concepts, analyze successful case studies, and start building your personal artistic framework.',
    },
    {
      id: 2,
      title: 'Module 2: Mastering Composition and Aesthetics',
      outcomes: [
        'Apply advanced composition techniques to create impactful visuals.',
        'Understand color theory and its psychological effects.',
        'Develop a keen eye for aesthetic detail and visual harmony.',
      ],
      details: 'Dive deep into the elements that make visuals captivating. From the rule of thirds to leading lines, and the emotional impact of color, you\"ll learn to craft visually stunning and meaningful imagery.',
    },
    {
      id: 3,
      title: 'Module 3: Lights, Camera, Action: Technical Skills',
      outcomes: [
        'Gain proficiency in essential tools and software for visual creation (e.g., Photoshop, Illustrator, Premiere).',
        'Understand lighting principles and their application in various scenarios.',
        'Learn effective post-production techniques to enhance your work.',
      ],
      details: 'This module focuses on the practical \"how-to.\" We\"ll demystify the technical aspects of visual production, giving you hands-on experience with industry-standard tools and techniques.',
    },
    {
      id: 4,
      title: 'Module 4: Project & Presentation: Bringing Your Vision to Life',
      outcomes: [
        'Execute a comprehensive visual project from concept to completion.',
        'Develop strategies for presenting and defending your creative work.',
        'Receive constructive feedback and refine your visual storytelling abilities.',
      ],
      details: 'The culmination of your learning! You\"ll apply all acquired knowledge to a personal project, culminating in a professional presentation and peer review, solidifying your skills and confidence.',
    },
  ];

  const toggleModule = (id) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <section id="syllabus" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Course Syllabus</h2>
        <div className="max-w-3xl mx-auto">
          {modules.map((module) => (
            <div key={module.id} className="mb-6 p-6 bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleModule(module.id)}
                className="flex justify-between items-center w-full text-left font-semibold text-xl text-gray-800 focus:outline-none"
              >
                {module.title}
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${openModule === module.id ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openModule === module.id && (
                <div className="mt-4 text-gray-600">
                  <p className="mb-3">{module.details}</p>
                  <h3 className="font-semibold mb-2">Key Learning Outcomes:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {module.outcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SyllabusSection;
