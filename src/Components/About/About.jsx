import React, { useRef } from "react";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import transition from "../transition";

import "./About.css";

const Contact = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div
        className="about"
        data-scroll-container
        ref={containerRef}
        id="scroll-container"
      >
        <div className="about-copy">
          <p className="copy-about-margins">TEN ARTIST is a production company specialized in Print Campaigns, Digital and Social Contents, we are based
              in Milan but we take care of projects everywhere in Italy and Europe. Ten Artist has more than 10 years of experience. We organize photo and video shootings, starting from the very beginning with the creative brief,
              until the finalization and delivery of the final images, ready to be published. We collaborate with amazing Clients, big photographers, great stylist either for commercial or editorial projects. We work in studio
              as in private location of all sort, outdoor in the city as in the wild nature.
          </p>
          <br />
          <br />
          <span id="copyright">
            COPYRIGHT 2023 TEN ARTIST. MILANO, ITALY © 2023 ALL
            RIGHTS RESERVED.
          </span>

          <div className="image-marquee">
            <div className="image-container">
              <img src="/assets/about-hero.jpg"/>
              <img src="/assets/about-office.jpg"/>
              <img src="/assets/about-feature.jpg"/>
              <img src="/assets/about-hero.jpg"/>
              <img src="/assets/about-office.jpg"/>
              <img src="/assets/about-feature.jpg"/>
              <img src="/assets/about-hero.jpg"/>
            </div>
          </div>

          <div className="marquee">
            <span>
              Creative Direction, Budget Management, Art buying, Crew selection, Location research and scouting, Municipality permits, Casting, Logistics, Transportations, Insurance, Lighting and Equipment, Digital tech and retouching services, Props, Set design/building, Location vehicles and prop cars, Catering services
              Creative Direction, Budget Management, Art buying, Crew selection, Location research and scouting, Municipality permits, Casting, Logistics, Transportations, Insurance, Lighting and Equipment, Digital tech and retouching services, Props, Set design/building, Location vehicles and prop cars, Catering services
            </span>
        </div>
        </div>
      </div>
    </LocomotiveScrollProvider>
  );
};

export default transition(Contact);
