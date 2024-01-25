

import React, { useEffect, useRef } from "react";
import "./Contact.css";
import transition from "../transition";
import Logo from "./logo.svg";


const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      // Fine-tune this threshold for when to reset the scroll
      if (scrollTop + clientHeight >= scrollHeight - 200) {
        // Consider adjusting this scroll position to match where duplicated content begins
        containerRef.current.scrollTo({ top: 100, behavior: 'auto' });
      }
    };

    const scrollContainer = containerRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderContent = () => (
    <>
     
     <div className="empty_space"></div>
     <div className="empty_space"></div>

     <p>Hello,</p>
      <div className="empty_space_2"></div>
      <a href="#">info@tenartist.com</a>
      <div className="empty_space_2"></div>
      <p>Silvia Camilli</p>
      <a href="#">silvia@tenartist.com</a>
      <br />
      <br />
      <p>Valentina Tarolli</p>
      <a href="#">valentina@tenartist.com</a>
      <br />
      <br />
      <a href="#">Instagram</a>
      <br />
      <br />
      <br />
      <span id="copyright">
        COPYRIGHT 2023 TEN ARTIST. MILANO, ITALY <br />
        © 2023 ALLRIGHTS RESERVED.
      </span>
      <div className="empty_space"></div>
      <div className="empty_space_2"></div>

    </>
  );

  return (
    
    <section className="contact" ref={containerRef}>
      <div className="contact-copy" data-scroll-section>
          <div className="fixed-logo">
            <img src={Logo} />
        </div>
        {renderContent()}
        {renderContent()} {/* Duplicate the content */}
        {renderContent()} {/* Additional duplication for a longer scroll */}
        {renderContent()} {/* Additional duplication for a longer scroll */}
        {renderContent()} {/* Additional duplication for a longer scroll */}


      </div>
    </section>
  );
};

export default transition(Contact);

