import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { blogData } from '../Components/BlogsData';
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegramPlane, FaArrowLeft, FaUser, FaEnvelope, FaPaperPlane, FaStar, FaQuoteLeft } from 'react-icons/fa';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find(b => b.id === parseInt(id));
  
  // Scroll to top when component mounts or blog changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // State for comments
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      comment: "This article perfectly captures the essence of what makes Stoney-River special. The attention to detail in every dish is remarkable!",
      date: "June 15, 2023",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah@example.com",
      comment: "I had the pleasure of dining at Stoney-River last weekend, and this blog post resonates with my experience. Can't wait to come back!",
      date: "June 18, 2023",
      rating: 4
    }
  ]);
  
  // State for new comment form
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    comment: '',
    rating: 5
  });
  
  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State for animation triggers
  const [isVisible, setIsVisible] = useState({
    content: false,
    comments: false,
    recentBlogs: false
  });

  // Trigger animations when component mounts
  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(prev => ({ ...prev, content: true })), 100);
    const timer2 = setTimeout(() => setIsVisible(prev => ({ ...prev, comments: true })), 400);
    const timer3 = setTimeout(() => setIsVisible(prev => ({ ...prev, recentBlogs: true })), 700);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center p-4">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md w-full transform transition-all duration-500 hover:scale-105">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
          <Link to="/blogs" className="inline-flex items-center bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            <FaArrowLeft className="mr-2" /> Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Get recent blogs excluding current one
  const recentBlogs = blogData
    .filter(b => b.id !== blog.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  const handleRecentBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment({
      ...newComment,
      [name]: value
    });
  };

  const handleRatingChange = (rating) => {
    setNewComment({
      ...newComment,
      rating
    });
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const comment = {
        id: comments.length + 1,
        name: newComment.name,
        email: newComment.email,
        comment: newComment.comment,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        rating: newComment.rating
      };
      
      setComments([comment, ...comments]);
      setNewComment({
        name: '',
        email: '',
        comment: '',
        rating: 5
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${blog.heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end pb-12 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl transform transition-all duration-1000 ease-out opacity-0 translate-y-10 animate-fadeInUp">
              <div className="mb-6 inline-block">
                <span className="inline-block px-5 py-2 bg-amber-700 text-white text-sm font-bold rounded-full uppercase tracking-wider shadow-lg transform transition-transform duration-300 hover:scale-105">
                  {blog.date}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 text-white font-serif leading-tight drop-shadow-lg">{blog.title}</h1>
              <div className="h-1 w-24 md:w-32 bg-amber-500 rounded-full mb-6 transition-all duration-1000 ease-out animate-widthExpand"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <div 
          className={`bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 md:mb-16 transform transition-all duration-700 ease-out ${
            isVisible.content ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-0 overflow-hidden">
            <img 
              src={blog.contentImage} 
              alt={blog.title} 
              className="w-full h-64 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          
          <div className="p-6 md:p-8 lg:p-12">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{blog.content}</p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">Our commitment to excellence begins with sourcing the finest ingredients. We work directly with local farmers and artisans who share our passion for quality and sustainability. Each dish that leaves our kitchen tells a story of dedication, craftsmanship, and respect for the ingredients.</p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">At Stoney-River, we believe that dining is not just about nourishment, but about creating memorable experiences. From the moment you step through our doors, you're enveloped in an atmosphere of warmth and hospitality that sets the stage for an exceptional culinary journey.</p>
            </div>
            
            {/* Share Links and Back Button */}
            <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <h3 className="text-xl font-bold text-gray-800">Share this article</h3>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
                  <Link to="/blogs" className="flex items-center text-gray-700 hover:text-amber-700 font-medium transition-colors group whitespace-nowrap">
                    <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Blogs
                  </Link>
                  <div className="flex space-x-3">
                    <a href="#" className="bg-white text-blue-700 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110">
                      <FaFacebookF className="w-4 h-4" />
                    </a>
                    <a href="#" className="bg-white text-blue-500 p-3 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110">
                      <FaTwitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="bg-white text-pink-500 p-3 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white shadow-md hover:shadow-lg transform hover:scale-110">
                      <FaInstagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="bg-white text-blue-500 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110">
                      <FaTelegramPlane className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Comments Section */}
        <div 
          className={`bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 mb-12 md:mb-16 transform transition-all duration-700 ease-out ${
            isVisible.comments ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-serif mb-4 sm:mb-0">Comments</h2>
            <div className="flex items-center">
              <div className="ml-0 sm:ml-4 h-1 w-16 md:w-24 bg-amber-600 rounded-full"></div>
              <span className="ml-4 bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium shadow-sm">
                {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
              </span>
            </div>
          </div>
          
          {/* Comment Form */}
          <div className="mb-10 md:mb-12 p-6 md:p-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl border border-amber-200 shadow-inner">
            <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
              <FaQuoteLeft className="text-amber-600 mr-2" /> Leave a Comment
            </h3>
            <form onSubmit={handleSubmitComment}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="group">
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
                    <FaUser className="inline mr-2 text-amber-600" /> Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newComment.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 group-hover:border-amber-400"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                    <FaEnvelope className="inline mr-2 text-amber-600" /> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={newComment.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 group-hover:border-amber-400"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6 group">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="comment">
                  Your Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={newComment.comment}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 group-hover:border-amber-400"
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  Rating
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className="text-2xl focus:outline-none transform transition-transform duration-200 hover:scale-110"
                    >
                      <FaStar
                        className={star <= newComment.rating ? "text-amber-500 drop-shadow-md" : "text-gray-300"}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center disabled:opacity-70 shadow-lg hover:shadow-xl transform hover:scale-105 w-full md:w-auto justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Posting...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" /> Post Comment
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Comments List */}
          <div className="space-y-6 md:space-y-8">
            {comments.map((comment, index) => (
              <div 
                key={comment.id} 
                className="border-b border-gray-200 pb-6 md:pb-8 last:border-0 last:pb-0 group hover:bg-amber-50 -mx-4 px-4 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 group-hover:text-amber-700 transition-colors">{comment.name}</h4>
                    <p className="text-gray-500 text-sm">{comment.date}</p>
                  </div>
                  <div className="flex mt-2 sm:mt-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={star <= comment.rating ? "text-amber-500 drop-shadow-sm" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Blogs Section */}
        <div 
          className={`mb-12 md:mb-16 transform transition-all duration-700 ease-out ${
            isVisible.recentBlogs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-serif">Recent Stories</h2>
            <div className="ml-4 h-1 w-16 md:w-24 bg-amber-600 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {recentBlogs.map((blog, index) => (
              <div 
                key={blog.id} 
                className="group bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden h-48 md:h-56">
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 cursor-pointer" 
                    style={{ backgroundImage: `url(${blog.heroImage})` }}
                    onClick={() => handleRecentBlogClick(blog.id)}
                  ></div>
                  <div className="absolute top-4 left-4 bg-amber-700 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    {blog.date}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Read More</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="h-1 w-8 bg-amber-600 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-amber-700 transition-colors">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.subtitle}</p>
                  <button 
                    onClick={() => handleRecentBlogClick(blog.id)}
                    className="inline-flex items-center text-amber-700 font-bold group-hover:text-amber-900 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes widthExpand {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-widthExpand {
          animation: widthExpand 1.2s ease-out forwards;
        }
        
        @media (max-width: 768px) {
          .animate-widthExpand {
            animation: widthExpand 1s ease-out forwards;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPost;