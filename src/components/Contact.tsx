// import React from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
//             Get In Touch
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             I'm always open to discussing new opportunities and interesting projects.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           <div className="space-y-8">
//             <div className="flex items-center space-x-4">
//               <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
//                 <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h3>
//                 <p className="text-gray-600 dark:text-gray-300">contact@example.com</p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
//                 <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Phone</h3>
//                 <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
//                 <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Location</h3>
//                 <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
//               </div>
//             </div>
//           </div>

//           <form className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//                 placeholder="Your name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//                 placeholder="your.email@example.com"
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows={5}
//                 className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//                 placeholder="Your message..."
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2"
//             >
//               <Send className="w-5 h-5" />
//               <span>Send Message</span>
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;








import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Github,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState<Record<string, string>>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handlePhoneChange = (e: { target: { value: any } }) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) return;
    if (value.length > 10) return;

    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));

    if (errors.phone) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.phone;
        return updated;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      setTimeout(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const handleBlur = (field: string) => {
    if (!formData[field].trim()) {
      setErrors((prev) => ({
        ...prev,
        [field]:
          field.charAt(0).toUpperCase() + field.slice(1) + " is required",
      }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's connect and build something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg cursor-pointer"
              >
                <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    praitkadam3356@gmail.com
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg cursor-pointer"
              >
                <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +91 8975623356
                  </p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg cursor-pointer"
              >
                <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thane, Maharashtra
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {[
                  { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/pratikkadam3356/", hoverColor: "hover:bg-blue-700 hover:text-white hover:border-blue-700" },
                  { icon: <Github className="w-5 h-5" />, link: "https://github.com/PratikKadam2244", hoverColor: "hover:bg-gray-900 hover:text-white hover:border-gray-900" },
                  { icon: <Instagram className="w-5 h-5" />, link: "https://www.instagram.com/all_tech_knowledge/", hoverColor: "hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-500 hover:text-white hover:border-transparent" },
                  { icon: <Facebook className="w-5 h-5" />, link: "#", hoverColor: "hover:bg-blue-600 hover:text-white hover:border-blue-600" },
                  { icon: <Youtube className="w-5 h-5" />, link: "https://www.youtube.com/@alltechknowledge8623", hoverColor: "hover:bg-red-600 hover:text-white hover:border-red-600" },
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={item.link}
                    target="_blank"
                    className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-colors duration-300 ${item.hoverColor}`}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur("name")}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur("email")}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  onBlur={() => handleBlur("phone")}
                  maxLength={10}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 ${
                    errors.phone
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="Enter 10-digit phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 border-gray-300 dark:border-gray-600"
                  placeholder="Your message (optional)..."
                ></textarea>
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
