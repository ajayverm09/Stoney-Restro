import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest, FaTimes } from "react-icons/fa";

const DiningGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "https://www.juicer.io/api/media/4865102?s=663a65c63019c30b9b327d8a5f2416960a4e4b28",
      text: "Brunch is calling, and we're answering with our signature Shrimp and Grits. Brunch times and days may vary by location.",
    },
    {
      src: "https://www.juicer.io/api/media/7961266?s=1206e04d8d86db4ead15fb865fd9c9525d435fe3",
      text: "Happy National Bourbon Heritage Month. Join us in raising a glass to tradition, craftsmanship and unforgettable pours. 🥃",
    },
    {
      src: "https://www.juicer.io/api/media/6833142?s=5fbc4b5d02e22bda72f8fe178bc5913381237a23",
      text: "Full-bodied, rich and best enjoyed slowly. Just like the Stoney River experience. Happy National Red Wine Day. Make reservations at the link in our bio",
    },
    {
      src: "https://www.juicer.io/api/media/6447158?s=e6c9da92396a83b96282b01ac7550d94dea4036e",
      text: "Let brunch be the reason you slow down this weekend. Great food, great company and a table worth gathering around",
    },
    {
      src: "https://www.juicer.io/api/media/6103715?s=9cbeac1fdadddd21599a1fe84e5c22246917852c",
      text: "Date night done right. Exceptional flavors, cozy atmosphere and a table made for two. Head to the link in our bio to make a reservation.",
    },
    {
      src: "https://www.juicer.io/api/media/5893750?s=f778139f6a7f491a1e4346dad44c117f88feca30",
      text: "A spread designed to be savored. Every detail perfectly in place. 📸 @goodeatshsv",
    },
    {
      src: "https://www.juicer.io/api/media/5658738?s=896a7ae8ff2d4085611f4b1d26c0046250d0b905",
      text: "Take your dining experience up a notch with our Cedar Plank Salmon - a true standout on the menu.",
    },
    {
      src: "https://www.juicer.io/api/media/4865102?s=663a65c63019c30b9b327d8a5f2416960a4e4b28",
      text: "This kind of sweet finish every fresh meal deserves. 📸@thekultureka",
    },
  ];

  const openPopup = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
  };

  const closePopup = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

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

  const socialVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const popupVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Gallery Section */}
      <motion.div 
        className="bg-gradient-to-br from-amber-50 to-rose-50 py-16 px-4 md:px-8 lg:px-16 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold leading-tight uppercase tracking-wide text-gray-800 mb-12 relative inline-block"
            variants={itemVariants}
          >
            SNAP-WORTHY DINING
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-rose-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => openPopup(image)}
              >
                <img
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-60 md:h-72 lg:h-80 object-cover"
                />

                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent flex flex-col justify-end p-6 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p 
                    className="text-white text-lg font-medium mb-4 text-center drop-shadow-lg"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    {image.text.substring(0, 60)}...
                  </motion.p>

                  <motion.div 
                    className="flex justify-center"
                    initial={{ y: 30 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-400 to-rose-500 rounded-full shadow-lg">
                      <FaInstagram className="text-white text-2xl" />
                    </div>
                  </motion.div>
                </motion.div>

                <div className="absolute inset-0 border-2 border-white/30 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Follow Us Section */}
      <motion.div 
        className="bg-gradient-to-br from-amber-50 to-rose-50 py-16 px-4 md:px-8 lg:px-16 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold leading-tight uppercase tracking-wide text-gray-800 mb-12 relative inline-block"
            variants={itemVariants}
          >
            FOLLOW US
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-rose-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
            variants={itemVariants}
          >
            Stay connected with us for the latest updates, special offers, and behind-the-scenes glimpses of our culinary creations.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 md:gap-12"
            variants={containerVariants}
          >
            {/* Instagram Icon */}
            <motion.a
              href="https://www.instagram.com/stoneyriversteaks"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              aria-label="Instagram link"
              variants={socialVariants}
              whileHover="hover"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center shadow-lg">
                <FaInstagram className="text-white text-3xl" />
              </div>
              <span className="mt-3 text-gray-700 font-medium">
                Instagram
              </span>
            </motion.a>
            
            {/* Facebook Icon */}
            <motion.a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              aria-label="Facebook link"
              variants={socialVariants}
              whileHover="hover"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                <FaFacebook className="text-white text-3xl" />
              </div>
              <span className="mt-3 text-gray-700 font-medium">
                Facebook
              </span>
            </motion.a>
            
            {/* Twitter Icon */}
            <motion.a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              aria-label="Twitter link"
              variants={socialVariants}
              whileHover="hover"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg">
                <FaTwitter className="text-white text-3xl" />
              </div>
              <span className="mt-3 text-gray-700 font-medium">
                Twitter
              </span>
            </motion.a>
            
            {/* Pinterest Icon */}
            <motion.a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              aria-label="Pinterest link"
              variants={socialVariants}
              whileHover="hover"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg">
                <FaPinterest className="text-white text-3xl" />
              </div>
              <span className="mt-3 text-gray-700 font-medium">
                Pinterest
              </span>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="mt-12 pt-8 border-t border-gray-200"
            variants={itemVariants}
          >
            <p className="text-gray-600">
              Follow our handles <span className="font-semibold">@stoneyriversteaks</span> for daily updates
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Popup */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePopup}
        >
          <motion.div 
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button 
              className="absolute top-4 right-4 z-10 cursor-pointer bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closePopup}
              aria-label="Close popup"
            >
              <FaTimes className="text-gray-700 text-xl" />
            </motion.button>
            
            {/* Image Section */}
            <div className="md:w-1/2 h-64 md:h-auto">
              <img 
                src={selectedImage.src} 
                alt="Gallery popup" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Section */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <motion.h3 
                  className="text-3xl font-serif font-bold text-gray-800 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Stoney River
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedImage.text}
                </motion.p>
              </div>
              
              <motion.div 
                className="mt-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="https://www.instagram.com/stoneyriversteaks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500 to-rose-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full justify-center"
                >
                  <FaInstagram className="text-xl" />
                  View on Instagram
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default DiningGallery;