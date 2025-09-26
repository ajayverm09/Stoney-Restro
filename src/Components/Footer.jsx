import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const linkVariants = {
    hover: {
      x: 5,
      color: "#B9A38F",
      transition: { duration: 0.2 }
    }
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      color: "#B9A38F",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <motion.footer 
      className="bg-[#363544] text-gray-300 font-sans tracking-wide w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main Footer Section */}
      <div className="container mx-auto py-16 px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <motion.div 
            className="flex flex-col items-start justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-white text-2xl font-serif font-bold">N.K. Verma & Associates</div>
              <div className="w-16 h-1 bg-[#B9A38F] mt-2"></div>
            </motion.div>
            <motion.p 
              className="text-sm mb-4"
              variants={itemVariants}
            >
              Providing exceptional legal services with integrity and professionalism for over 25 years.
            </motion.p>
            <motion.div 
              className="flex space-x-3 mt-2"
              variants={itemVariants}
            >
              <motion.a 
                href="#" 
                aria-label="LinkedIn"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-[#2a2933] p-2 rounded-full"
              >
                <FaLinkedinIn className="text-white" />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="Twitter"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-[#2a2933] p-2 rounded-full"
              >
                <FaTwitter className="text-white" />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="Facebook"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-[#2a2933] p-2 rounded-full"
              >
                <FaFacebookF className="text-white" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Practice Areas */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-bold text-white mb-4 uppercase"
              variants={itemVariants}
            >
              Practice Areas
            </motion.h3>
            <ul className="space-y-3">
              {[
                "Corporate Law", 
                "Family Law", 
                "Property Law", 
                "Contract Law",
                "Intellectual Property",
                "Dispute Resolution"
              ].map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a 
                    href="#" 
                    className="hover:text-[#B9A38F] transition-colors text-sm"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-bold text-white mb-4 uppercase"
              variants={itemVariants}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {[
                { text: "About Us", href: "/about" },
                { text: "Our Team", href: "/team" },
                { text: "Blog", href: "/blogs" },
                { text: "Careers", href: "#" },
                { text: "Contact Us", href: "/contact" },
                { text: "Book Consultation", href: "/book-consultation" }
              ].map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a 
                    href={item.href} 
                    className="hover:text-[#B9A38F] transition-colors text-sm"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {item.text}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-bold text-white mb-4 uppercase"
              variants={itemVariants}
            >
              Contact Us
            </motion.h3>
            <ul className="space-y-4">
              <motion.li variants={itemVariants} className="flex items-start">
                <FaMapMarkerAlt className="text-[#B9A38F] mt-1 mr-3" />
                <span className="text-sm">123 Legal District, Suite 500<br />New Delhi, India 110001</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <FaPhone className="text-[#B9A38F] mr-3" />
                <span className="text-sm">+91 11 2345 6789</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <FaEnvelope className="text-[#B9A38F] mr-3" />
                <span className="text-sm">info@nkverma.com</span>
              </motion.li>
            </ul>
            
            <motion.div 
              className="mt-6"
              variants={itemVariants}
            >
              <motion.a 
                href="/book-consultation" 
                className="inline-block px-4 py-2 bg-[#B9A38F] text-[#363544] font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#B9A38F"
                }}
                transition={{ duration: 0.3 }}
              >
                Book Consultation
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <motion.div 
        className="bg-[#2a2933] py-6 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 w-full">
          <motion.p 
            className="text-xs md:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            © {new Date().getFullYear()} N.K. Verma & Associates. All Rights Reserved.
          </motion.p>
          
          <motion.div 
            className="flex items-center text-xs md:text-sm mt-4 md:mt-0 space-x-4 md:space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[
              "Terms of Use", 
              "Privacy Policy", 
              "Disclaimer"
            ].map((item, index) => (
              <React.Fragment key={index}>
                <motion.a 
                  href="#" 
                  className="hover:text-[#B9A38F] transition-colors"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {item}
                </motion.a>
                {index < 2 && <span className="text-gray-600">|</span>}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;