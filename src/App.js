import Navbar from "./components/navbar";
import LandingBanner from "./components/landing";
import About from "./components/about";
import ServicesList from "./components/serviceslist";
import Technologies from "./components/technologies";
import Mission from "./components/mission";
import ProjectTalk from "./components/projectTalk";
import Focus from "./components/focus";
import OurTeam from './components/ourteam';
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <LandingBanner />
      <About />
      <ServicesList />
      <Technologies />
      <Mission />
      <Focus />
      <OurTeam />
      <ProjectTalk />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
