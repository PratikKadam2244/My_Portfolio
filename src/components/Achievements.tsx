import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Star } from 'lucide-react';

const achievements = [
  {
    title: 'Smart India Hackathon 2024',
    type: 'Competition Winner',
    organization: 'Government of India',
    description: 'Winner of the prestigious Smart India Hackathon 2024, developing innovative solutions for real-world problems.',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-600'
  },
  {
    title: 'HTML & CSS Certification',
    type: 'Certification',
    organization: 'SkillUp',
    description: 'Completed comprehensive course on modern HTML5 and CSS3 with responsive design principles.',
    icon: Award,
    color: 'from-blue-500 to-blue-700'
  },
  {
    title: 'Java Programming Certification',
    type: 'Certification',
    organization: 'Infosys',
    description: 'Advanced Java programming certification covering OOP concepts, data structures, and best practices.',
    icon: Star,
    color: 'from-green-500 to-green-700'
  },
  {
    title: 'Python Basics Certification',
    type: 'Certification',
    organization: 'Jspider',
    description: 'Foundation course in Python programming including syntax, data types, and basic algorithms.',
    icon: Award,
    color: 'from-purple-500 to-purple-700'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} flex-shrink-0`}>
                      <achievement.icon size={24} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h3>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          {achievement.type}
                        </Badge>
                      </div>
                      
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                        {achievement.organization}
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {achievement.description}
                      </p>
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