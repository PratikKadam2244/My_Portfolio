import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, TrendingUp, Code, FileText, Briefcase } from "lucide-react";

export default function About() {
  const floatingIcons = [
    { icon: Rocket, color: "text-blue-500", delay: 0 },
    { icon: TrendingUp, color: "text-green-500", delay: 0.5 },
    { icon: Code, color: "text-purple-500", delay: 1 },
    { icon: FileText, color: "text-orange-500", delay: 1.5 },
    { icon: Briefcase, color: "text-indigo-500", delay: 2 },
  ];

  const stats = [
    { number: "2+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
    { number: "15+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
    { number: "5+", label: "Technologies", color: "from-green-500 to-emerald-500" },
    { number: "100%", label: "Client Satisfaction", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-lg blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-extrabold mb-6 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </span>
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
            />
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover my journey, passion, and the drive that fuels my innovation 🚀
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <div className={`bg-gradient-to-r ${stat.color} p-6 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20`}>
                <motion.h3 
                  className="text-3xl lg:text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.1) + 0.3, duration: 0.5 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-white/90 font-medium text-sm lg:text-base">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Career Objective Card */}
            <Card className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 border-0 shadow-2xl rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
              <CardContent className="p-8 lg:p-10 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                      Career Objective
                    </h3>
                  </div>
                  
                  <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      As a dedicated <Badge className="mx-1 bg-blue-100 text-blue-700 hover:bg-blue-200">Full Stack Java Developer</Badge> 
                      with experience in modern web technologies, I am passionate about creating 
                      robust, scalable applications that solve real-world problems. My expertise spans across 
                      <Badge className="mx-1 bg-purple-100 text-purple-700 hover:bg-purple-200">Java, Spring Boot, Angular</Badge>, 
                      and various databases, combined with a strong foundation in 
                      <Badge className="mx-1 bg-green-100 text-green-700 hover:bg-green-200">system design</Badge> and 
                      <Badge className="mx-1 bg-orange-100 text-orange-700 hover:bg-orange-200">software architecture</Badge>.
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      I thrive in <Badge className="mx-1 bg-blue-100 text-blue-700 hover:bg-blue-200">collaborative environments</Badge> 
                      and am always eager to learn new technologies and contribute to 
                      <Badge className="mx-1 bg-purple-100 text-purple-700 hover:bg-purple-200">innovative projects</Badge> 
                      that make a positive impact.
                    </motion.p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            {/* Additional Skills & Interests */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <Card className="backdrop-blur-lg bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-900/30 dark:to-indigo-900/30 border-0 shadow-xl rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="w-6 h-6 text-blue-600" />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Technical Focus</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Specialized in building scalable web applications with modern frameworks and best practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-lg bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:from-purple-900/30 dark:to-pink-900/30 border-0 shadow-xl rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Growth Mindset</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Continuously learning and adapting to emerging technologies and industry trends.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo with Animations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative">
              {/* Floating Icons */}
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 3 + index, 
                    repeat: Infinity, 
                    delay: item.delay,
                    ease: "easeInOut" 
                  }}
                  className={`absolute z-10 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg backdrop-blur-sm ${
                    index === 0 ? 'top-10 -left-6' :
                    index === 1 ? 'top-20 -right-8' :
                    index === 2 ? 'bottom-32 -left-8' :
                    index === 3 ? 'bottom-20 -right-6' :
                    'top-1/2 -left-10'
                  }`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </motion.div>
              ))}

              {/* Animated Background Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-3xl border-2 border-dashed border-blue-300/50 dark:border-blue-500/30"
                style={{ transform: 'scale(1.1)' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-3xl border-2 border-dashed border-purple-300/50 dark:border-purple-500/30"
                style={{ transform: 'scale(1.2)' }}
              />

              {/* Main Photo Container */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                {/* Glowing Background */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                />
                
                {/* Photo */}
                <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                  <motion.img
                    src="/pk1.JPG"
                    alt="Pratik Kadam"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Floating Name Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                >
                  <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Pratik Kadam
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}