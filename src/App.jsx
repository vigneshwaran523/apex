import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Projects />
      
      <Footer />
    </div>
  );
};

export default App;
