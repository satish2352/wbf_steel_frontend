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

function Home() {
  return (
    <>
      
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

