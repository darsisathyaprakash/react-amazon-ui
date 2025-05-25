import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'other';
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<
    'all' | 'frontend' | 'backend' | 'other'
  >('all');

  const skills: Skill[] = [
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'React.js', level: 85, category: 'frontend' },
    { name: 'HTML/CSS', level: 90, category: 'frontend' },
    { name: 'Python', level: 80, category: 'backend' },
    { name: 'Git/GitHub', level: 85, category: 'other' },
    { name: 'Data Structures', level: 80, category: 'other' },
    { name: 'Problem Solving', level: 85, category: 'other' },
  ];

  const filteredSkills =
    activeTab === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>

          <div className="max-w-3xl mx-auto mb-10">
            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-gray-200 dark:bg-gray-700 p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'all'
                      ? 'bg-white dark:bg-gray-600 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab('frontend')}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'frontend'
                      ? 'bg-white dark:bg-gray-600 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  Frontend
                </button>
                <button
                  onClick={() => setActiveTab('backend')}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'backend'
                      ? 'bg-white dark:bg-gray-600 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  Backend
                </button>
                <button
                  onClick={() => setActiveTab('other')}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'other'
                      ? 'bg-white dark:bg-gray-600 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  Other
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium">{skill.name}</h3>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        skill.category === 'frontend'
                          ? 'bg-blue-600'
                          : skill.category === 'backend'
                          ? 'bg-green-600'
                          : 'bg-purple-600'
                      }`}
                      style={{
                        width: `${skill.level}%`,
                        transition: 'width 1s ease-in-out',
                        transitionDelay: `${index * 0.1}s`,
                      }}
                    ></div>
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

export default Skills;
