import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css'

import Navbar2 from './components/Navbar2';
import Home from './components/Home';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Video from './components/Video';
import Contact from './components/Contact';
import About3 from './components/About3';
import Services from './components/Services';
import Projects2 from './components/Projects2';
import Projects1 from './components/Projects1';

function App() {

  return (
    <Router>
      <div>
        {/* <Video/> */}
        {/* <Slider/> */}
        {/* <Preloader/> */}
        <Routes>
          {/* <Navbar2/> */}
          <Route path="/" element={<><Navbar2/><Slider/><Home/><Footer/></>} />
          <Route path="/home" element={<><Navbar2/><Slider/><Home/><Footer/></>} />

          <Route path="/about" element={<><Navbar2/><About3/></>}/>
          <Route path="/projects" element={<><Navbar2/><Projects2/></>}/>



          <Route path="/contact" element={<><Navbar2/><Contact/></>}/>
          <Route path="/services" element={<><Navbar2/><Services/></>}/>


          
          {/* <Route path='/Home' element={<><Home/></>}/> */}
        </Routes>
      </div>
    </Router>
  )
}
// Structure -- Navbar + Homepg + footer + About Us + Contacts + Vision and Mission
// Navbar button color -- black
// APP BG COLOR WILL BE DECIDED LATER.... 
// About curr vs About - Mission & Vision 

// Font size of the site
// 1.Home
// 2.About Us 
//// Our Story
//// Our Mission
//// Team
//// Certifications
// 3.Products and Services
// About 2 is services



// Steel Railings
// Stainless Steel Products
// Custom Fabrication
// Glass Railings
// Industrial Solutions
// Services
// Design & Engineering
// Manufacturing
// Installation
// Maintenance
// Quality Testing


// 4.Projects (with dropdown)

//// Residential
//// Commercial
//// Industrial
//// Infrastructure
//// Project Gallery

// 5.Contact






export default App
