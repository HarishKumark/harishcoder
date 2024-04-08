import React from "react";
import { Helmet } from 'react-helmet'

import { headerData } from '../../data/headerData'
import Landing from "../Landing/Landing";

function Main() {
  return (
    <div>
        
        <div>{headerData.name} - Porfolio</div>
        <Landing/>

      {/* <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievement />
      <Services />
      <Testimonials />
      <Blog />
      <Contacts />
      <Footer /> */}
    </div>
  );
}

export default Main;
