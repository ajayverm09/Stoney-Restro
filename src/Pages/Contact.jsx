import React from "react";
import {
  FaMapMarkerAlt,
  FaUser,
  FaClock,
  FaPhone,
  FaShoppingCart,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaUtensils,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative py-24 md:py-32 lg:py-48 flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://stoneyriver.com/wp-content/uploads/2023/07/SR_WebsitePhotos_1404x667_Atmosphere3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

        <div className="relative z-10 p-4 md:p-8 max-w-4xl">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-[#99815B] text-white text-sm font-bold rounded-full uppercase tracking-wider shadow-lg">
              Stoney River
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white uppercase tracking-wide mb-6 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 font-light mb-12 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for reservations or inquiries.
          </p>

          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 justify-center items-center">
            {/* Reservations */}
            <a
              href="#"
              className="group px-8 py-4 bg-gradient-to-r from-[#99815B] to-[#b49a70] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex items-center space-x-3
               hover:bg-white hover:from-transparent hover:to-transparent hover:text-[#99815B]"
            >
              <FaPhone className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>Reservations</span>
              <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Order Online */}
            <a
              href="#"
              className="group px-8 py-4 bg-gradient-to-r from-[#99815B] to-[#b49a70] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex items-center space-x-3
               hover:bg-white hover:from-transparent hover:to-transparent hover:text-[#99815B]"
            >
              <FaShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>Order Online</span>
              <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-amber-400 rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-[#99815B]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16 bg-gradient-to-br from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help and answer any question you might have. We look
              forward to hearing from you.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaMapMarkerAlt className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Our Location
              </h3>
              <p className="text-gray-600 text-center">
                123 Gourmet Street
                <br />
                Culinary District
                <br />
                Foodville, CA 90210
              </p>
              <div className="mt-4 flex justify-center">
                <a
                  href="#"
                  className="text-amber-600 hover:text-amber-800 font-medium flex items-center"
                >
                  Get Directions <FaArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaClock className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Opening Hours
              </h3>
              <p className="text-gray-600 text-center">
                <span className="font-medium">Monday - Thursday:</span> 11am -
                10pm
                <br />
                <span className="font-medium">Friday - Saturday:</span> 11am -
                11pm
                <br />
                <span className="font-medium">Sunday:</span> 11am - 9pm
              </p>
              <div className="mt-4 flex justify-center">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  Open Now
                </span>
              </div>
            </div>

            {/* Contact Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaPhone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Contact
              </h3>
              <p className="text-gray-600 text-center">
                <span className="font-medium">Phone:</span> (123) 456-7890
                <br />
                <span className="font-medium">Email:</span> info@stoneyriver.com
                <br />
                <span className="font-medium">Reservations:</span> (123)
                456-7891
              </p>
              <div className="mt-4 flex justify-center">
                <a
                  href="tel:+1234567890"
                  className="text-amber-600 hover:text-amber-800 font-medium flex items-center"
                >
                  Call Now <FaArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-br from-amber-100 to-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-700">
              Have a question or feedback? Fill out the form below and we'll get
              back to you as soon as possible.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
            <form className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className=" text-gray-700 font-medium mb-2 flex items-center"
                  >
                    <FaUser className="mr-2 text-amber-600" /> Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="= text-gray-700 font-medium mb-2 flex items-center"
                  >
                    <FaEnvelope className="mr-2 text-amber-600" /> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-gray-700 font-medium mb-2 flex items-center"
                >
                  <FaUtensils className="mr-2 text-amber-600" /> Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-gray-700 font-medium mb-2 flex items-center"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg shadow-md hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center mx-auto"
                >
                  Send Message <FaArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600">
              Visit us at our convenient location in the heart of the city.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-2xl">
            {/* Google Maps Embed */}
            <iframe
              title="Stoney River Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509179!2d144.95373531531677!3d-37.81627977975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ceed30!2sMelbourne!5e0!3m2!1sen!2sau!4v1633072800000!5m2!1sen!2sau"
              className="w-full h-96 transition duration-500 lg:grayscale lg:hover:grayscale-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
