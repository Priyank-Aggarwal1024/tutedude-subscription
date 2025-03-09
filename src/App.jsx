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
import PlatformTestimonial from "./components/PlatformTestimonial";
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

        <div className="tutedude-subs-floater-outer">
          <div className="tutedude-subs-floater">
            <div className="tutedude-subs-floater-left">
              <div className="tutedude-subs-floater-left-head">₹1200/year</div>
              <div className="tutedude-subs-floater-left-subhead">
                ₹10,000/year
              </div>
            </div>
            <div className="tutedude-subs-floater-right">
              Start Subscription
            </div>
          </div>
        </div>
        <Courses />
        <div className="certificate-3-section">
          <TutedudeLearn />
          <div className="certificate-circle-design"></div>

          <Certificate />
          <InternshipAssistance />
        </div>
        <TutedudePlus />
        <VideoCarousel />
        {/* <Testimonials /> */}
        {/* <Best /> */}
        <PlatformTestimonial />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
