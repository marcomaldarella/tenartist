import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import './App.css';

function App() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project/');
  const containerRef = useRef(null);

  const content = (
    <>
      {!isProjectPage && <Nav />}
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/project/:projectSlug" element={<Project />} />
          <Route index element={<Home />} />
          <Route path='/projects' element={<Projects />} /> 
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sample-project-page' element={<Project />} />
        </Routes>
      </AnimatePresence>
    </>
  );

  return isProjectPage ? content : (
    <LocomotiveScrollProvider 
      options={{ smooth: true }}
      watch={[location]}
      containerRef={containerRef}
    >
      {content}
    </LocomotiveScrollProvider>
  );
}

export default App;
