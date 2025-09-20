import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Lightbulb, 
  Users, 
  Target, 
  Heart, 
  Zap,
  Coffee,
  Rocket
} from "lucide-react";

const philosophyItems = [
  {
    icon: Code2,
    title: "Clean Code Philosophy",
    description: "I believe in writing code that is not just functional, but elegant, maintainable, and self-documenting.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation Mindset",
    description: "Always exploring new technologies and methodologies to solve problems in creative and efficient ways.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Strong believer in teamwork, knowledge sharing, and building solutions that benefit the entire community.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Target,
    title: "Goal-Oriented Approach",
    description: "Focused on delivering results that align with business objectives while maintaining high quality standards.",
    color: "from-purple-500 to-pink-500"
  }
];

const values = [
  { label: "Problem Solving", icon: Zap },
  { label: "Continuous Learning", icon: Rocket },
  { label: "Quality First", icon: Heart },
  { label: "Innovation", icon: Coffee }
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, philosophy, and what drives me 🚀
          </p>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Main About Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-20"
        >
          <Card className="max-w-6xl mx-auto backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
                {/* Image Section */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative group">
                    {/* Animated Background Rings */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    />
                    <motion.div
                      animate={{ 
                        scale: [1.1, 1, 1.1],
                        rotate: [360, 180, 0]
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-2 rounded-full bg-gradient-to-bl from-cyan-400 via-blue-400 to-indigo-400 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    />
                    
                    <motion.img
                      src="/pk1.JPG"
                      alt="Pratik Kadam"
                      className="relative h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-700 transition-all duration-700 ease-in-out"
                      whileHover={{ 
                        scale: 1.05,
                        rotate: 2,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                    
                    {/* Floating Elements */}
                    <motion.div
                      animate={{ 
                        y: [-10, 10, -10],
                        x: [-5, 5, -5]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow-lg"
                    >
                      <Code2 size={20} />
                    </motion.div>
                    
                    <motion.div
                      animate={{ 
                        y: [10, -10, 10],
                        x: [5, -5, 5]
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white p-3 rounded-full shadow-lg"
                    >
                      <Rocket size={20} />
                    </motion.div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="lg:col-span-2 text-center lg:text-left space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      Career Objective
                    </h3>
                    <div className="space-y-4 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      <p>
                        As a dedicated <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Java Developer</span> 
                        with hands-on experience in modern web technologies, I am passionate about creating 
                        robust, scalable applications that solve real-world problems and deliver exceptional user experiences.
                      </p>
                      <p>
                        My expertise spans across <span className="text-purple-600 dark:text-purple-400 font-medium">Java, Spring Boot, Angular</span>, 
                        and various databases, combined with a strong foundation in 
                        <span className="font-medium text-green-600 dark:text-green-400"> system design</span> and 
                        <span className="font-medium text-orange-600 dark:text-orange-400"> software architecture</span>.
                      </p>
                      <p>
                        I thrive in <span className="text-blue-600 dark:text-blue-400 font-medium">collaborative environments</span> 
                        and am always eager to learn new technologies while contributing to 
                        <span className="text-purple-600 dark:text-purple-400 font-medium"> innovative projects</span> 
                        that make a positive impact on businesses and communities.
                      </p>
                    </div>
                  </motion.div>

                  {/* Values Badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-wrap gap-3 justify-center lg:justify-start"
                  >
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group"
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 px-4 py-2 text-sm font-medium hover:shadow-lg transition-all duration-300 cursor-pointer"
                        >
                          <value.icon size={16} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                          {value.label}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Workplace Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Workplace Philosophy
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The principles and values that guide my approach to software development and professional collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {philosophyItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`p-3 md:p-4 rounded-2xl bg-gradient-to-br ${item.color} flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        <item.icon size={24} className="text-white" />
                      </motion.div>
                      
                      <div className="flex-1 space-y-3">
                        <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {[
            { number: "2+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
            { number: "10+", label: "Projects Completed", color: "from-green-500 to-emerald-500" },
            { number: "5+", label: "Technologies Mastered", color: "from-purple-500 to-pink-500" },
            { number: "100%", label: "Commitment Level", color: "from-orange-500 to-red-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group"
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl p-4 md:p-6">
                <motion.div
                  className={`text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}