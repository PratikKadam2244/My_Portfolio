import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
    color: 'from-blue-500 to-blue-700'
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Spring Boot', 'Hibernate', 'Angular', 'React', 'Node.js'],
    color: 'from-green-500 to-green-700'
  },
  {
    title: 'Databases & Tools',
    skills: ['MySQL', 'Redis', 'Docker', 'Kafka', 'Git'],
    color: 'from-purple-500 to-purple-700'
  },
  {
    title: 'Development Tools',
    skills: ['VS Code', 'Eclipse', 'Android Studio', 'Figma', 'GitHub'],
    color: 'from-orange-500 to-orange-700'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                      <div className="w-6 h-6 bg-white rounded-md opacity-90" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.6 }}
                        whileHover={{ scale: 1.05, x: 10 }}
                        className={`p-4 rounded-xl bg-gradient-to-r ${category.color} text-white font-medium cursor-pointer`}
                      >
                        {skill}
                      </motion.div>
                    ))}
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