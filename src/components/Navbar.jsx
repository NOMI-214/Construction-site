import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ✅ TopBar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-r from-black via-gray-900 to-black text-gray-200 text-sm py-2"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Left */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2">
              <i className="fas fa-phone text-orange-500"></i> 00(23) 567-890
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-envelope text-orange-500"></i> info@domain.com
            </span>
            <span className="hidden md:flex items-center gap-2">
              <i className="fas fa-clock text-orange-500"></i> Mon - Sat: 8:00 - 17:30
            </span>
          </div>

          {/* Right (socials) */}
          <div className="flex items-center gap-3">
            {["twitter", "facebook-f", "linkedin-in", "google-plus-g"].map((icon) => (
              <a key={icon} href="#" className="hover:text-orange-500 transition">
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ✅ Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-xl font-bold">
              <i className="fas fa-building text-orange-500"></i>
              <span>Construction</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className={`relative group transition ${
                    location.pathname === path ? "text-orange-500" : "hover:text-orange-500"
                  }`}
                >
                  {name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300 
                      ${location.pathname === path ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              ))}

              {/* Blog Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setOpenDropdown("blog")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-orange-500 transition">
                  Blog <i className="fas fa-chevron-down text-xs"></i>
                </button>
                <AnimatePresence>
                  {openDropdown === "blog" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-40 z-50"
                    >
                      <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">
                        Blog
                      </Link>
                      <Link to="/blog/1" className="block px-4 py-2 hover:bg-gray-100">
                        Blog Details
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pages Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setOpenDropdown("pages")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-orange-500 transition">
                  Pages <i className="fas fa-chevron-down text-xs"></i>
                </button>
                <AnimatePresence>
                  {openDropdown === "pages" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48 z-50"
                    >
                      <Link to="/elements" className="block px-4 py-2 hover:bg-gray-100">
                        Elements
                      </Link>
                      <Link to="/project-details" className="block px-4 py-2 hover:bg-gray-100">
                        Project Details
                      </Link>
                      <Link to="/services-details" className="block px-4 py-2 hover:bg-gray-100">
                        Services Detail
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/contact"
                className={`relative group transition ${
                  location.pathname === "/contact"
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
              >
                Contact
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300 
                    ${location.pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            </div>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="hidden lg:inline-block bg-orange-500 hover:bg-orange-600 text-black px-5 py-2 rounded-md font-semibold transition"
            >
              Contact Now
            </Link>

            {/* Mobile Toggle */}
            <motion.button
              className="lg:hidden text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`} />
            </motion.button>
          </div>

          {/* ✅ Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden flex flex-col gap-2 pb-4"
              >
                {navLinks.map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    className={`block px-3 py-2 rounded transition ${
                      location.pathname === path ? "text-orange-500" : "hover:bg-gray-800"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {name}
                  </Link>
                ))}

                {/* Blog (Mobile) */}
                <div>
                  <button
                    className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-800 rounded"
                    onClick={() => toggleDropdown("blog")}
                  >
                    Blog <i className="fas fa-chevron-down text-xs"></i>
                  </button>
                  {openDropdown === "blog" && (
                    <div className="pl-6 flex flex-col">
                      <Link to="/blog" className="py-1 hover:text-orange-500">
                        Blog
                      </Link>
                      <Link to="/blog/1" className="py-1 hover:text-orange-500">
                        Blog Details
                      </Link>
                    </div>
                  )}
                </div>

                {/* Pages (Mobile) */}
                <div>
                  <button
                    className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-800 rounded"
                    onClick={() => toggleDropdown("pages")}
                  >
                    Pages <i className="fas fa-chevron-down text-xs"></i>
                  </button>
                  {openDropdown === "pages" && (
                    <div className="pl-6 flex flex-col">
                      <Link to="/elements" className="py-1 hover:text-orange-500">
                        Elements
                      </Link>
                      <Link to="/project-details" className="py-1 hover:text-orange-500">
                        Project Details
                      </Link>
                      <Link to="/services-details" className="py-1 hover:text-orange-500">
                        Services Detail
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/contact"
                  className={`block px-3 py-2 rounded transition ${
                    location.pathname === "/contact" ? "text-orange-500" : "hover:bg-gray-800"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <Link
                  to="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-lg font-semibold transition mt-2 text-center"
                >
                  Contact Now
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
