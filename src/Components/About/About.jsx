import React, { useRef } from "react";
import transition from "../transition";
import "./About.css";


const About = () => {

  return (
    <div className="about" data-scroll-container id="scroll-container">
      <div className="about-copy">
        <p className="copy-about-margins">
          TEN ARTIST IS A PRODUCTION COMPANY SPECIALIZED IN PRINT AND VIDEO CAMPAIGNS, DIGITAL AND SOCIAL CONTENTS, WE ARE BASED IN MILAN BUT WE TAKE CARE OF PROJECTS EVERYWHERE IN ITALY AND EUROPE. TEN ARTIST HAS MORE THAN 10 YEARS OF EXPERIENCE. WE ORGANIZE PHOTO AND VIDEO SHOOTINGS, STARTING FROM THE VERY BEGINNING WITH THE CREATIVE BRIEF, UNTIL THE FINALIZATION AND DELIVERY OF THE FINAL IMAGES, READY TO BE PUBLISHED. WE COLLABORATE WITH AMAZING CLIENTS, BIG PHOTOGRAPHERS, GREAT STYLIST EITHER FOR COMMERCIAL OR EDITORIAL PROJECTS. WE WORK IN STUDIO AS IN PRIVATE LOCATION OF ALL SORT, OUTDOOR IN THE CITY AS IN THE WILD NATURE.
        </p>
        <br />
        <br />
        <span className="about-copy-2">
          Our space, located in Milan, is available for photo shooting and events
        </span>

        <div className="image-marquee">
          <div className="image-container">
            <span>
              <img src="/assets/ab9.jpg" alt="About Hero" />
              <img src="/assets/ab1.jpg" alt="About Office" />
              <img src="/assets/ab12.jpg" alt="About Office" />
              <img src="/assets/ab3.jpg" alt="About Office" />
              <img src="/assets/ab14.jpg" alt="About Feature" />
              <img src="/assets/ab4.jpg" alt="About Feature" />
              <img src="/assets/ab11.jpg" alt="About Feature" />
              <img src="/assets/ab2.jpg" alt="About Feature" />
              <img src="/assets/ab10.jpg" alt="About Feature" />
              <img src="/assets/ab7.jpg" alt="About Feature" />
              <img src="/assets/ab13.jpg" alt="About Feature" />
              <img src="/assets/ab5.jpg" alt="About Feature" />
              <img src="/assets/ab6.jpg" alt="About Feature" />
              <img src="/assets/ab15.jpg" alt="About Feature" />
              <img src="/assets/ab8.jpg" alt="About Feature" />
            </span>
            <span>
              <img src="/assets/ab9.jpg" alt="About Hero" />
              <img src="/assets/ab1.jpg" alt="About Office" />
              <img src="/assets/ab12.jpg" alt="About Office" />
              <img src="/assets/ab3.jpg" alt="About Office" />
              <img src="/assets/ab14.jpg" alt="About Feature" />
              <img src="/assets/ab4.jpg" alt="About Feature" />
              <img src="/assets/ab11.jpg" alt="About Feature" />
              <img src="/assets/ab2.jpg" alt="About Feature" />
              <img src="/assets/ab10.jpg" alt="About Feature" />
              <img src="/assets/ab7.jpg" alt="About Feature" />
              <img src="/assets/ab13.jpg" alt="About Feature" />
              <img src="/assets/ab5.jpg" alt="About Feature" />
              <img src="/assets/ab6.jpg" alt="About Feature" />
              <img src="/assets/ab15.jpg" alt="About Feature" />
              <img src="/assets/ab8.jpg" alt="About Feature" />
            </span>
          </div>
        </div>

        <div className="marquee">
          <span>
            Creative Direction, Budget Management, Art buying, Crew selection, Location research and scouting, Municipality permits, Casting, Logistics, Transportations, Insurance, Lighting and Equipment, Digital tech and retouching services, Props, Set design/building, Location vehicles and prop cars, Catering services
          </span>
          <span>
            Creative Direction, Budget Management, Art buying, Crew selection, Location research and scouting, Municipality permits, Casting, Logistics, Transportations, Insurance, Lighting and Equipment, Digital tech and retouching services, Props, Set design/building, Location vehicles and prop cars, Catering services
          </span>
        </div>
      </div>
    </div>
  );
};

export default transition(About);
