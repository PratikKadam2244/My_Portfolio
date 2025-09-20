import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my career journey and ambitions 🚀
          </p>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Card Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Card className="max-w-5xl mx-auto backdrop-blur-lg bg-white/30 dark:bg-gray-800/50 border border-gray-200/20 dark:border-gray-700/30 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-10 lg:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
                {/* Image Section */}
                <div className="flex justify-center">
                  <div className="relative group">
                    {/* Glowing Ring */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 blur-2xl opacity-40 group-hover:opacity-60 transition"
                    />
                    <motion.img
                      src="/pk1.JPG"
                      alt="Pratik Kadam"
                      className="relative h-52 w-52 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-700 transition-transform duration-700 ease-in-out group-hover:scale-110"
                      whileHover={{ rotate: 2, scale: 1.12 }}
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div className="lg:col-span-2 text-center lg:text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Career Objective
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    As a dedicated <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Java Developer </span> 
                     with experience in modern web technologies, I am passionate about creating 
                    robust, scalable applications that solve real-world problems. My expertise spans across 
                    <span className="text-purple-600 dark:text-purple-400 font-medium"> Java, Spring Boot, Angular</span>, 
                    and various databases, combined with a strong foundation in 
                    <span className="font-medium"> system design</span> and 
                    <span className="font-medium"> software architecture</span>.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                    I thrive in <span className="text-blue-600 dark:text-blue-400">collaborative environments </span> 
                    and am always eager to learn new technologies and contribute to 
                    <span className="text-purple-600 dark:text-purple-400"> innovative projects </span> 
                    that make a positive impact.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
