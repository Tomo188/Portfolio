import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import React from "react";
import About from "./componets/About";
import Technologies from "./componets/Technologies";
import Experience from "./componets/Experience";
import Projects from "./componets/Projects";

import Contact from "./componets/Contact";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection  selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />  
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
