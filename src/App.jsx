import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Testimonials from "./components/Testimonials";
import Certifications from "./components/Certifications";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <CustomCursor />
      <About />
      <Skills />
      <Projects />
      <CaseStudies />
      <Services />
      <Contact />
      <Testimonials />
      <Certifications />
      <Footer />
    </ThemeProvider>
  );
}

export default App;