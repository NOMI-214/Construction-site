import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./styles/main.css";

// Import Components
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesComponent from "./components/Services";
import ProjectsComponent from "./components/Projects";
import ProjectsPageComponent from "./pages/Projects";
import Stats from "./components/Stats";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import LatestNews from "./components/LatestNews";
import Footer from "./components/Footer";
import About from "./pages/About";
import BlogHero from "./components/BlogHero";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Contact from "./pages/Contact";
import Elements from "./pages/Elements";
import ProjectDetails from "./pages/ProjectDetails";
import ServicesDetails from "./pages/ServicesDetails";
import ServicesPageComponent from "./pages/Services";
import Loader from "./components/Loader";
// Placeholder pages for routing

const ServicesPage = () => <ServicesPageComponent />;

const ProjectsPage = () => (
  <>
    <ProjectsPageComponent />
  </>
);

// Contact page is now imported from pages/Contact.jsx

const BlogPage = () => (
  <>
    <BlogHero />
    <Blog />
  </>
);

const HomePage = () => (
  <>
    <HeroSection />
    <ServicesComponent />
    <ProjectsComponent />
    {/* <ContactSection /> */}
    <Stats />
    <Team />
    <Testimonial />
    <LatestNews />
  </>
);

// Wrapper component to handle loader logic
const AppContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading time and hide loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="App">
      <Loader isLoading={isLoading} />
      {/* <TopBar /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/services-details" element={<ServicesDetails />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
