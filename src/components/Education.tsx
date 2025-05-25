import React, { useEffect, useRef, useState } from 'react';
import { CalendarClock, GraduationCap, Award } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const educationList: Education[] = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering with specialization in AIML",
      institution: "CMR Technical Campus | Hyderabad, Telangana ",
      location: "Kandlakoya, Hyderabad,Telangana ",
      period: "2022 - 2025",
      description: "Currently pursuing BTech in Computer Science with a focus on software development and algorithms. Maintaining a strong academic record with notable projects in web development and machine learning."
    },
    {
      degree: "Dipolma",
      institution: "Abdul Kalam Engineering College",
      location: "Kothagudam, Khammam, Telangana",
      period: "2019 - 2022",
      description: "Completed higher secondary education dipolma in  Mining Engineering. Participated in various technical competitions ."
    },
    {
      degree: "Secondary Education",
      institution: " ST France Em High School ",
      location: "Madhira, Khammam,Telangana ",
      period: "2018 - 2019",
      description: "Graduated with excellent academic performance. Developed strong foundation in mathematics and science."
    }
  ];

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
      id="education"
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
            My <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h2>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 transform md:-translate-x-1/2"></div>

            {educationList.map((edu, index) => (
              <div 
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8 md:pr-0 md:text-left' : 'md:mr-auto md:pr-8 md:pl-0 md:text-right'
                } pl-12 md:w-1/2`}
                style={{
                  transition: 'all 0.5s ease',
                  transitionDelay: `${index * 0.2}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 top-3 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center transform ${
                  index % 2 === 0 ? 'md:-translate-x-1/2' : 'md:-translate-x-1/2'
                }`}>
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={16} />
                </div>

                <div className={`bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm ${
                  index % 2 === 0 ? 'md:rounded-tl-none' : 'md:rounded-tr-none'
                }`}>
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">{edu.institution}</h4>
                  <div className="flex items-center mb-3 text-sm text-gray-600 dark:text-gray-300">
                    <CalendarClock size={16} className="mr-1" />
                    <span>{edu.period}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.location}</span>
                  </div>
                  {edu.description && (
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="text-blue-600 dark:text-blue-400">Certifications</span> & Achievements
            </h3>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm">
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Award className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Problem Solving (Basic) Certificate - HackerRank</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Earned certification for strong problem-solving skills in data structures and algorithms.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Award className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Web Development Bootcamp - Udemy</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Completed comprehensive web development bootcamp covering HTML, CSS, JavaScript, and React.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Award className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">First Place - College Coding Competition</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Won first place in the annual coding competition at CMR Technical campus  hyderbad.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;