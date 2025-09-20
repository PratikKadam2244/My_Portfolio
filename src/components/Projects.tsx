import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play } from 'lucide-react';

const projects = [
  {
    title: 'Online Expense Tracker System',
    description: 'A comprehensive web application for tracking personal and business expenses with advanced analytics and reporting features.',
    technologies: ['Java', 'Hibernate', 'MySQL', 'JSP', 'CSS'],
    demoLink: 'https://youtube.com/watch?v=demo',
    type: 'Full Stack Web App',
    image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Bank ATM Simulator',
    description: 'Desktop application simulating ATM operations including account management, transactions, and security features.',
    technologies: ['Java Swing', 'MySQL', 'JDBC', 'OOP'],
    githubLink: 'https://github.com/pratikkadam/bank-atm-simulator',
    type: 'Desktop Application',
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Developer Hire Project',
    description: 'Object-oriented Java application for managing developer recruitment process with advanced filtering and matching algorithms.',
    technologies: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
    githubLink: 'https://github.com/pratikkadam/developer-hire',
    type: 'Console Application',
    image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Tourism Website',
    description: 'Dynamic tourism website with booking system, user authentication, and content management features.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    liveLink: 'https://tourism-website.vercel.app',
    type: 'Web Application',
    image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'AI Desktop Virtual Assistant',
    description: 'Python-based virtual assistant with speech recognition, natural language processing, and task automation capabilities.',
    technologies: ['Python', 'Speech Recognition', 'NLP', 'AI'],
    githubLink: 'https://github.com/pratikkadam/ai-virtual-assistant',
    type: 'AI Application',
    image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/70 dark:bg-white/20 text-white">
                      {project.type}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-blue-200 text-blue-700 hover:bg-blue-50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.liveLink && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.liveLink, '_blank')}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                    
                    {project.demoLink && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.demoLink, '_blank')}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    )}
                    
                    {project.githubLink && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    )}
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