import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Sterling Institute of Management Studies',
    university: 'Mumbai University',
    year: '2025',
    status: 'Pursuing',
    description: 'Advanced studies in computer applications with focus on software development, database management, and system design.',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Mumbai University',
    university: 'Mumbai University',
    year: '2022',
    status: 'Completed',
    description: 'Comprehensive study of computer science fundamentals including programming, algorithms, data structures, and software engineering.',
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <Badge 
                          variant={edu.status === 'Completed' ? 'default' : 'secondary'}
                          className={edu.status === 'Completed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                          }
                        >
                          {edu.status}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-6 mb-4 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <GraduationCap size={16} />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{edu.university}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                    
                    <div className="lg:col-span-1 flex lg:justify-end">
                      <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-6 rounded-2xl">
                        <GraduationCap size={48} className="text-blue-600 dark:text-blue-400 mx-auto" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}