import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Home from "../pages/Home";
import About from '../pages/About';
import Services from "../pages/Services";
// import Projects from "../pages/Projects";
import ContactUs from "../pages/ContactUs";
import ProjectDetails from "../pages/ProjectDetails";
import ProjectNav from "../components/projectCom/ProjectNav";
import Careers from "../pages/Careers";
import Blog from "../pages/Blog";
import BlogDetails from "../components/blog/BlogDetails";
import ProjectProducts1 from "../components/project1/ProjectProducts1";
import ProjectProducts2 from "../components/project1/ProjectProducts2";
// import Careers from "../pages/Careers"; 

// ScrollToTop component resets scroll on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projectproducts1" element={<ProjectProducts1 />} />
        <Route path="/projectproducts2/:slug" element={<ProjectProducts2 />} />
        {/* <Route path="/projectproducts2" element={<ProjectProducts2 />} /> */}
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
         <Route path="/blog/:slug" element={<BlogDetails />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
