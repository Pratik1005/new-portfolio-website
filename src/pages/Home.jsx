import {NavMenu} from "../components/NavMenu";
import {HeroText} from "../components/HeroText";
import {ProjectSection} from "../components/ProjectSection";
import {Footer} from "../components/Footer";
import {Blog} from "../components/Blog";

export const Home = () => {
  return (
    <div>
      <NavMenu />
      <HeroText />
      <ProjectSection />
      <Blog />
      <Footer />
    </div>
  );
};
