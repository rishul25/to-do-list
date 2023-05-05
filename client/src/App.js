import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";





import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Edit from "./components/pages/Edit";

function App() {
  return (
    <>

    
    

    
    <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/edit/:id" element={<Edit />} />
        
       
        </Routes>



    </Router>
      
      
      
      
    </>
  );
}

export default App;
