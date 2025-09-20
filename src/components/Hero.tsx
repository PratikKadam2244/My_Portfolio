import { motion } from "framer-motion";
import { Download, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "./TypewriterEffect";

import {
  FaJava,
  FaPython,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import {
  SiMysql,
  SiSpringboot,
  SiPostman,
  SiGithub,
  SiDocker,
  SiAndroidstudio,
  SiAngular,
  SiSpring,
} from "react-icons/si";

export default function Hero() {
  const typewriterTexts = [
    "Co-Founder Of Airavata Technologies",
    "Full Stack Java Developer",
    "Web Developer",
    "Youtuber",
    "Software Developer",
    "Network Engineer",
    "Digital Marketing",
  ];

  return (
    <section
      id="hero"
      className="flex items-center bg-gradient-to-br from-blue-50 via-white to-gray-50 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-4">
              {/* Gradient Text */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              >
                <span className="bg-gradient-to-r from-[#1E4E9C] via-[#2E75D1] to-[#5CB3F9] bg-clip-text text-transparent">
                  Hello, It's Me
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#1E4E9C] via-[#2E75D1] to-[#5CB3F9] bg-clip-text text-transparent">
                  Pratik Kadam
                </span>
                <br />
                <span className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mt-2 block">
                  And I'm a{" "}
                  <TypewriterEffect
                    texts={typewriterTexts}
                    className="bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 bg-clip-text text-transparent font-bold"
                    speed={150}
                    deleteSpeed={100}
                    delayBetweenTexts={2000}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mt-4 lg:mt-6 px-4 sm:px-0"
              >
                {"\u00A0\u00A0"} Strong in design and integration with intuitive
                problem solving skills. Proficient in JAVA, SpringBoot, JAVASCRIPT, MYSQL
                and Website Building. Passionate about implementing and
                launching new projects. Ability to translate business
                requirements into technical solutions.
              </motion.p>
            </div>

            {/* Social Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center lg:justify-start gap-2 sm:gap-3 flex-wrap px-2 sm:px-0"
            >
              <Button
                size="sm"
                className="text-xs sm:text-sm bg-[#0077B5] hover:bg-[#006097] text-white transform transition-transform duration-700 hover:scale-110"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/pratikkadam3356/",
                    "_blank"
                  )
                }
              >
                <Linkedin className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> LinkedIn
              </Button>
              <Button
                size="sm"
                className="text-xs sm:text-sm bg-gray-800 hover:bg-gray-900 text-white transform transition-transform duration-700 hover:scale-110"
                onClick={() =>
                  window.open("https://github.com/PratikKadam2244", "_blank")
                }
              >
                <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> GitHub
              </Button>
              <Button
                size="sm"
                className="text-xs sm:text-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:opacity-90 transform transition-transform duration-700 hover:scale-110"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/all_tech_knowledge/",
                    "_blank"
                  )
                }
              >
                <Instagram className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Instagram
              </Button>
              <Button
                size="sm"
                className="text-xs sm:text-sm bg-[#FF0000] hover:bg-red-700 text-white transform transition-transform duration-700 hover:scale-110"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/@alltechknowledge8623",
                    "_blank"
                  )
                }
              >
                <Youtube className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> YouTube
              </Button>
              <a
                href="/PratikKadam.pdf"  
                target="_blank"
                rel="noopener noreferrer"
                download="PratikKadam.pdf"
                className="inline-block"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs sm:text-sm transform transition-transform duration-700 hover:scale-110"
                >
                  <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile with Two Orbit Lines */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] flex items-center justify-center">
              {/* Outer Orbit - 6 icons (Hexagon) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full rounded-full border border-blue-300"
              >
                {/* Docker - Top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-1 sm:p-2 rounded-full shadow-md">
                  <a href="https://www.docker.com/" target="_blank"><SiDocker className="text-sky-500 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" /></a>
                </div>
                {/* Spring Boot - Top Right */}
                <div className="absolute top-1/4 right-2 sm:right-3 -translate-y-1/2 bg-white dark:bg-gray-800 p-1 sm:p-2 rounded-full shadow-md">
                  <a href="https://spring.io/projects/spring-boot" target="_blank"><SiSpringboot className="text-green-600 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" /></a>
                </div>
                {/* Postman - Bottom Right */}
                <div className="absolute bottom-1/4 right-2 sm:right-3 translate-y-1/2 bg-white dark:bg-gray-800 p-1 sm:p-2 rounded-full shadow-md">
                  <a href="https://www.postman.com/" target="_blank"><SiPostman className="text-orange-500 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" /></a>
                </div>
                {/* GitHub - Bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white dark:bg-gray-800 p-1 sm:p-2 rounded-full shadow-md">
                  <a href="https://github.com/" target="_blank"><SiGithub className="text-gray-800 dark:text-white h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" /></a>
                </div>
                {/* Android Studio - Bottom Left */}
                <div className="absolute bottom-1/4 left-2 sm:left-3 translate-y-1/2 bg-white dark:bg-gray-800 p-1 sm:p-2 rounded-full shadow-md">
                  <a href="https://developer.android.com/studio" target="_blank"><SiAndroidstudio className="text-green-500 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" /></a>
                </div>
                {/* Angular - Top Left */}
                <div className="absolute top-1/4 left-2 sm:left-3 -translate-y-1/2 bg-white dark:bg-gray-800 p-1 sm:p-2 rounded-full shadow-md">
                  <a href="https://angular.dev/" target="_blank"><SiAngular className="text-red-600 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" /></a>
                </div>
              </motion.div>

              {/* Inner Orbit - 6 icons (Hexagon) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-52 h-52 sm:w-60 sm:h-60 md:w-70 md:h-70 lg:w-80 lg:h-80 rounded-full border border-blue-300"
              >
                {/* Java - Top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-200 p-1 sm:p-2 rounded-full shadow-md">
                  <a href="https://www.java.com/en/" target="_blank"><FaJava className="text-red-700 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" /></a>
                </div>
                {/* Python - Top Right */}
                <div className="absolute top-1/4 right-2 sm:right-3 -translate-y-1/2 bg-white dark:bg-gray-800 p-1 sm:p-2 rounded-full shadow-md">
                  <a href="https://www.python.org/" target="_blank"><FaPython className="text-yellow-400 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" /></a>
                </div>
                {/* MySQL - Bottom Right */}
                <div className="absolute bottom-1/4 right-2 sm:right-3 translate-y-1/2 bg-white dark:bg-gray-800 p-1 sm:p-2 rounded-full shadow-md">
                  <a href="https://www.mysql.com/" target="_blank"><SiMysql className="text-sky-600 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" /></a>
                </div>
                {/* HTML5 - Bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white dark:bg-gray-800 p-1 sm:p-2 rounded-full shadow-md">
                  <a href="https://en.wikipedia.org/wiki/HTML" target="_blank"><FaHtml5 className="text-orange-600 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" /></a>
                </div>
                {/* JavaScript - Bottom Left */}
                <div className="absolute bottom-1/4 left-2 sm:left-3 translate-y-1/2 bg-white dark:bg-gray-800 p-1 sm:p-2 rounded-full shadow-md">
                  <a href="https://www.javascript.com/" target="_blank"><FaJs className="text-yellow-400 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" /></a>
                </div>
                {/* Spring - Top Left */}
                <div className="absolute top-1/4 left-2 sm:left-3 -translate-y-1/2 bg-white dark:bg-gray-800 p-1 sm:p-2 rounded-full shadow-md">
                  <a href="https://spring.io/" target="_blank"><SiSpring className="text-green-700 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" /></a>
                </div>
              </motion.div>

              {/* Profile Image */}
              <div className="relative rounded-full shadow-2xl border-4 border-blue-400 dark:border-blue-500 overflow-hidden h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 bg-white dark:bg-gray-800">
                <img
                  src="/pk2.JPG"
                  alt="Pratik Kadam"
                  className="h-full w-full object-cover scale-110"
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}