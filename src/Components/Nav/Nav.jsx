import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import "./Nav.css";

const Nav = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="nav">
      <div className="nav-items">
        <div className="nav-item">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'home-return active-link' : 'home-return'}
          >
            {({ isActive }) => isActive ? currentTime : 'Home'}
          </NavLink>
        </div>
        <div className="nav-item second">
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? 'active-link' : undefined}
          >
            Works
          </NavLink>
        </div>
        <div className="nav-item third">
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'active-link' : undefined}
          >
            About
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'active-link' : undefined}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
