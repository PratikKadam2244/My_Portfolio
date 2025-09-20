import React, { useState } from "react";
import { Linkedin, Github, MessageCircle, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/pratikkadam3356/',
      label: 'LinkedIn',
      color: 'hover:bg-blue-700' // LinkedIn blue
    },
    {
      icon: Github,
      href: 'https://github.com/PratikKadam2244',
      label: 'GitHub',
      color: 'hover:bg-gray-700' // GitHub gray
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/918975623356',
      label: 'WhatsApp',
      color: 'hover:bg-green-600' // WhatsApp green
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/all_tech_knowledge/',
      label: 'Instagram',
      color: 'hover:bg-pink-600' // Instagram pink
    }
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info - First column */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              <img
                src="/color logo .png"   // your logo path
                alt="Airavata Technologies Logo"
                className="h-16 md:h-[78px] w-auto"   // responsive height
              />
            </h2>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Crafting Code, Creating Impact —Delivering Smart IT Solutions that transform challenges into opportunities and ideas into reality.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 md:p-3 bg-gray-800 rounded-full transition-colors duration-300 ${social.color} text-white`}
                  aria-label={social.label}
                >
                  <social.icon size={18} className="md:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services - Second column */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 relative pb-2">
              Services
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Mobile Application</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Custom Software Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">AI & Automation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Web Application</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Quick Links - Third column */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('achievements')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Achievements
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter - Fourth column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 relative pb-2">
              Newsletter
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-blue-500"></span>
            </h3>
            <p className="text-gray-300 mb-3 text-sm md:text-base">
              Stay updated with our latest insights and innovations.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-3 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors text-sm md:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center gap-2 text-sm md:text-base">
            © {currentYear} All rights reserved. Made with
            <Heart size={16} className="text-red-500 fill-current" />
            by <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Pratik Kadam</a>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm md:text-base">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm md:text-base">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;