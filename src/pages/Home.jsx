import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import HomeBanner from "../components/home/HomeBanner";
import HomeAbout from "../components/home/HomeAbout";
import ChooseUs from "../components/home/ChooseUs"
import Services from "../components/home/Services"
import StatsSection from "../components/home/StatsSection";
import Projects from "../components/home/Projects";
import WorkPlatforms from "../components/home/WorkPlatforms";
import Testimonials from "../components/home/Testimonials";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
          <title>Home WBF Steel |Precision Steel Detailing & BIM Solutions | WBF Steel</title>
          <meta name="description" content="WBF Steel provides expert structural steel detailing, connection design, and BIM solutions worldwide. We deliver accurate, efficient, and high-quality services. Request a quote today!" />
          <meta name="keywords" content="steel detailing, structural steel, BIM modeling, connection design, shop drawings, erection drawings, steel fabrication, Navi Mumbai, Delaware, Nashik, construction services" />
          <meta name="author" content="WBF Steel" />
      </Helmet>
      <HomeBanner />
      <HomeAbout />
      <ChooseUs />
      <Services />
      <StatsSection />
      <Projects />
      <WorkPlatforms/>
      <Testimonials/>
  
      
    </>
  );
}

export default Home;

