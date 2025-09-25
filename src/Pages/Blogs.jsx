import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogData } from '../Components/BlogsData';

const BlogsPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "6rem",
      transition: { duration: 0.8, delay: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffbeb] via-[#fef3c7] to-[#fde68a] w-full overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[80vh] w-full bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80')` }}
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 flex items-center justify-center w-full">
          <motion.div 
            className="text-center text-white px-4 max-w-4xl w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-6" variants={itemVariants}>
              <span className="inline-block px-4 py-1 bg-amber-700 text-white text-sm font-bold rounded-full uppercase tracking-wider">
                Stoney-River Blogs
              </span>
            </motion.div>
            <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif tracking-wide" variants={itemVariants}>
              Culinary Stories
            </motion.h1>
            <motion.p className="text-xl md:text-2xl max-w-2xl mx-auto text-amber-100 mb-10" variants={itemVariants}>
              Discover the passion behind our dishes, the stories of our ingredients, and the artistry of our chefs.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row justify-center gap-4" variants={itemVariants}>
              <Link 
                to="/blogs" 
                className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Explore Stories
              </Link>
              <a 
                href="#blog-grid" 
                className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-gray-900"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                View All
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Featured Section */}
      <motion.div 
        className="container mx-auto px-4 py-16 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl font-bold mb-4 text-gray-800 font-serif" variants={itemVariants}>
            Featured Stories
          </motion.h2>
          <motion.div className="w-24 h-1 bg-amber-600 mx-auto rounded-full" variants={lineVariants}></motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {blogData.slice(0, 3).map((blog) => (
            <motion.div 
              key={blog.id} 
              className="group bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative overflow-hidden h-64">
                <Link to={`/blog/${blog.id}`}>
                  <motion.div 
                    className="h-full w-full bg-cover bg-center" 
                    style={{ backgroundImage: `url(${blog.heroImage})` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </Link>
                <div className="absolute top-4 left-4 bg-amber-700 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Featured
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center mb-4">
                  <div className="h-1 w-12 bg-amber-600 rounded-full"></div>
                  <span className="ml-3 text-amber-700 font-medium">{blog.date}</span>
                </div>
                <motion.h2 
                  className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-amber-700 transition-colors"
                  whileHover={{ color: "#b45309" }}
                >
                  {blog.title}
                </motion.h2>
                <p className="text-gray-600 mb-6">{blog.subtitle}</p>
                <Link 
                  to={`/blog/${blog.id}`} 
                  className="inline-flex items-center text-amber-700 font-bold group-hover:text-amber-900 transition-colors"
                >
                  Read More
                  <motion.svg 
                    className="ml-2 w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    whileHover={{ x: 5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </motion.svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* All Blogs Grid */}
        <motion.div id="blog-grid" className="mb-16" variants={containerVariants}>
          <div className="text-center mb-16">
            <motion.h2 className="text-4xl font-bold mb-4 text-gray-800 font-serif" variants={itemVariants}>
              All Stories
            </motion.h2>
            <motion.div className="w-24 h-1 bg-amber-600 mx-auto rounded-full" variants={lineVariants}></motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogData.slice(3).map((blog) => (
              <motion.div 
                key={blog.id} 
                className="group bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="relative overflow-hidden h-56">
                  <Link to={`/blog/${blog.id}`}>
                    <motion.div 
                      className="h-full w-full bg-cover bg-center" 
                      style={{ backgroundImage: `url(${blog.heroImage})` }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  </Link>
                </div>
                <div className="p-7">
                  <div className="flex items-center mb-4">
                    <div className="h-1 w-12 bg-amber-600 rounded-full"></div>
                    <span className="ml-3 text-amber-700 font-medium">{blog.date}</span>
                  </div>
                  <motion.h2 
                    className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-amber-700 transition-colors"
                    whileHover={{ color: "#b45309" }}
                  >
                    {blog.title}
                  </motion.h2>
                  <p className="text-gray-600 mb-6">{blog.subtitle}</p>
                  <Link 
                    to={`/blog/${blog.id}`} 
                    className="inline-flex items-center text-amber-700 font-bold group-hover:text-amber-900 transition-colors"
                  >
                    Read More
                    <motion.svg 
                      className="ml-2 w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                      whileHover={{ x: 5 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </motion.svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Newsletter Section */}
      <motion.div 
        className="bg-gradient-to-t from-amber-100 to-amber-200/60 py-16 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 text-center w-full">
          <motion.h2 className="text-3xl font-bold mb-4 text-gray-800 font-serif" variants={itemVariants}>
            Stay Updated
          </motion.h2>
          <motion.p className="text-gray-600 max-w-2xl mx-auto mb-8" variants={itemVariants}>
            Subscribe to our newsletter and get the latest stories, recipes, and exclusive offers delivered to your inbox.
          </motion.p>
          <motion.form 
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button 
              type="submit" 
              className="bg-white text-[#99815B] font-bold px-6 py-3 rounded-full hover:text-amber-100 hover:bg-[#99815B] transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogsPage;