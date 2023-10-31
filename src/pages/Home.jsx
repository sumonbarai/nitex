import AboutSection from "../components/Home/AboutSection";
import Carousel from "../components/Home/Carousel";
import ChefSection from "../components/Home/ChefSection";
import GallerySection from "../components/Home/GallerySection";
import Hero from "../components/Home/Hero";
import VisitorSection from "../components/Home/VisitorSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <GallerySection />
      <AboutSection />
      <ChefSection />
      <VisitorSection />
    </div>
  );
};

export default Home;
