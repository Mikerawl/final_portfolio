import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"

import Contact from "./components/pages/Contact"
import Biography from "./components/pages/Biography"
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume"

function App() {
  return (
   <Router>
     <div className="flex flex-col justify-between h-screen">
       <Navbar />
        <Routes>
          <Route path="/" element= {<Biography />} />
          <Route path="/contact" element= {<Contact />} />
          <Route path="/portfolio" element= {<Portfolio />} />
          <Route path="/resume" element= {<Resume />} />
        </Routes>

       <Footer />
     </div>
   </Router> 
  );
}

export default App;
