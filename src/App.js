import AOS from "aos";

// custom styles
import "./assets/css/style.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import "boxicons/css/boxicons.min.css";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Facts from "./components/Facts";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";


AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

const App = () => {
  return (
    <div>
      <Sidebar />
      <Hero />
      <div id="main">
        <About />
        <Facts />
        <Skills />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
