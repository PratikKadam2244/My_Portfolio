// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import { ThemeToggle } from './ThemeToggle';

// interface NavbarProps {
//   activeSection: string;
// }

// const navItems = [
//   { id: 'hero', label: 'Home' },
//   { id: 'about', label: 'About' },
//   { id: 'experience', label: 'Experience' },
//   { id: 'education', label: 'Education' },
//   { id: 'skills', label: 'Skills' },
//   { id: 'achievements', label: 'Achievements' },
//   { id: 'projects', label: 'Projects' },
//   { id: 'contact', label: 'Contact' },
// ];

// export default function Navbar({ activeSection }: NavbarProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsOpen(false);
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-400/20 dark:border-gray-100/20"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center space-x-3"
//           >
//             <img
//               src="/logo.png"
//               alt="Pratik Kadam"
//               className="h-12 w-auto"
//             />
//             {/* <span className="text-2xl font-bold text-gray-900 dark:text-white">
//               PK
//             </span> */}
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <motion.button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`relative px-3 py-2 text-sm font-medium transition-colors ${
//                   activeSection === item.id
//                     ? 'text-blue-600 dark:text-blue-400'
//                     : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {item.label}
//                 {activeSection === item.id && (
//                   <motion.div
//                     layoutId="activeSection"
//                     className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
//                     initial={false}
//                     transition={{ type: 'spring', stiffness: 500, damping: 30 }}
//                   />
//                 )}
//               </motion.button>
//             ))}
//             <ThemeToggle />
//           </div>

//           {/* Mobile Menu Button and Theme Toggle */}
//           <div className="md:hidden flex items-center space-x-2">
//             <ThemeToggle />
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700"
//           >
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
//                   activeSection === item.id
//                     ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
//                     : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   );
// }







import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  activeSection: string; // you can still use this for scroll tracking if needed
}

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>(''); // track clicked item

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveItem(sectionId); // highlight clicked item
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 left-0 right-0 z-50 
                 bg-white/70 dark:bg-gray-900/70 
                 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img
              src="/color logo .png"
              alt="Pratik Kadam"
              className="h-10 sm:h-12 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-2 py-1 text-[15px] lg:text-[16px] font-semibold transition-colors 
                  ${
                    activeItem === item.id
                      ? 'text-blue-600 dark:text-blue-400 underline underline-offset-4 decoration-2'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 
                         hover:text-blue-600 dark:hover:text-blue-400 
                         hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown (Scrollable) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute top-full left-0 w-full max-h-[60vh] 
                       bg-white/95 dark:bg-gray-900/95 
                       backdrop-blur-md shadow-lg 
                       flex flex-col items-center 
                       z-40 space-y-4 pt-6 overflow-y-auto"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-center text-lg font-semibold py-2 transition-colors
                  ${
                    activeItem === item.id
                      ? 'text-blue-600 dark:text-blue-400 underline underline-offset-4 decoration-2'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * index }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
