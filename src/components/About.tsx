import React, { useEffect, useRef, useState } from 'react';
import { User, Star, Coffee, Code } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h2>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                I'm a passionate Computer Science student with a strong foundation in frontend development. 
                I enjoy solving complex problems and building intuitive, user-friendly applications.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                My journey in programming began with a curiosity about how websites work, which led me to 
                explore various technologies and frameworks. I'm constantly learning new skills and 
                staying updated with the latest industry trends.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-lg">
                      <Code className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <h3 className="ml-4 text-xl font-semibold">Development</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Experienced in  frontend development, with a focus on building 
                    scalable and maintainable applications.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded-lg">
                      <Star className="text-purple-600 dark:text-purple-400" size={24} />
                    </div>
                    <h3 className="ml-4 text-xl font-semibold">Problem Solving</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Active on competitive programming platforms with strong analytical skills and 
                    a methodical approach to problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;