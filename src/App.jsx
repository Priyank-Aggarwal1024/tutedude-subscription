import "./App.css";
import Benefits from "./components/Benefits";
import Best from "./components/Best";
import Certificate from "./components/Certificate";
import Courses from "./components/Courses";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InternshipAssistance from "./components/InternshipAssistance";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import TutedudeLearn from "./components/TutedudeLearn";
import TutedudePlus from "./components/TutedudePlus";
import VideoCarousel from "./components/VideoCarousel";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="fixed-offer">
          <span>10hr : 07mn : 28s </span>
          <span>Offer Ending tonight</span>
        </div>
        <Hero />
        <Benefits />
        <Courses />
        <TutedudeLearn />
        <Certificate />
        <InternshipAssistance />
        <TutedudePlus />
        <VideoCarousel />
        <Testimonials />
        <Best />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
