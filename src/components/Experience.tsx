import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Java Developer',
    company: 'GRT Global Logistics Pvt Ltd',
    location: 'Mumbai, India',
    duration: 'Nov 2024 - May 2025',
    type: 'Full-time',
    description: 'Developing and maintaining full-stack applications using Java, Spring Boot, and Angular. Working on logistics management systems and implementing modern web technologies.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'REST APIs', 'Microservices']
  },
  {
    title: 'Trainee IT Engineer',
    company: 'Tritorc Equipment Pvt Ltd',
    location: 'Mumbai, India',
    duration: 'May 2022 - Jan 2023',
    type: 'Internship',
    description: 'Gained hands-on experience in software development, database management, and system administration. Contributed to various IT projects and learned industry best practices.',
    technologies: ['Java', 'SQL', 'HTML', 'CSS', 'JavaScript', 'System Administration']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-6 mb-4 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <Building2 size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-blue-200 text-blue-700 hover:bg-blue-50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1 flex lg:justify-end">
                      <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-6 rounded-2xl">
                        <Building2 size={48} className="text-blue-600 dark:text-blue-400 mx-auto" />
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