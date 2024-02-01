import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import transition from "../transition";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import "./Home.css";
import MenuAnimation from '../Home/MenuAnimation';


const Home = () => {
  const containerRef = useRef(null);
  const [time, setTime] = useState(getCurrentTime());



  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours} : ${minutes} : ${seconds}`;
  }


  const [backgroundImage, setBackgroundImage] = useState("");


  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        direction: 'vertical',

        smartphone: {
          smooth: true,
          direction: 'vertical',

        },
        tablet: {
          direction: 'vertical',
          smooth: true,
        }
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div className="home" data-scroll-container ref={containerRef} id="scroll-container">
        <video autoPlay loop muted playsInline className="background-video"><source src="/assets/mobile_home.mp4" type="video/mp4" /></video>
        <section className="hero-img" data-scroll-section>
          <MenuAnimation className="menu-animation" />
          <div className="hero-img-copy">
            <div className="logo-home-page-big" style={{ zIndex: 999 }}>
              <svg id="logo" viewBox="0 0 905 123" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 999 }}>
                <path d="M0 82.2261L23.7618 83.2518V1.88037H67.0117V83.2518L90.7736 82.2261V120.86H0V82.2261Z" fill="white" />
                <path d="M98.6372 1.88037H179.838V34.3605H142.229V45.985H175.564V76.9267H142.229V88.2093H178.641V120.689H98.6372V1.88037Z" fill="white" />
                <path d="M194.025 1.88037H235.395V40.5147C235.395 48.3783 234.198 56.071 232.66 64.2765H233.856L271.807 1.88037H313.176V120.86H271.807V85.3031C271.807 75.2172 273.687 64.9603 275.397 55.0453H274.2L235.395 121.031H193.854V1.88037H194.025Z" fill="white" />
                <path d="M367.709 16.7529H400.36L404.292 1.88037H450.106L407.711 120.86H359.846L318.476 1.88037H364.29L367.709 16.7529ZM375.402 44.9593L383.265 81.2004H384.804C385.659 76.0719 386.343 70.9435 387.71 65.815L392.839 44.7884H375.402V44.9593Z" fill="white" />
                <path d="M456.09 1.88037H498.314V40.0018H499.169L518.144 1.88037H568.061L542.248 40.5147C539.855 43.9337 537.119 45.8141 535.068 47.6945V48.5493C551.137 53.8487 558.146 61.5413 558.146 79.4909C558.146 109.407 535.41 120.86 508.571 120.86H456.432V1.88037H456.09ZM498.314 88.3802H501.562C508.913 88.3802 515.409 87.3545 515.409 78.1233C515.409 69.234 508.229 68.2083 501.22 68.2083H498.143V88.3802H498.314Z" fill="white" />
                <path d="M561.053 82.2261L584.815 83.2518V1.88037H628.064V83.2518L651.826 82.2261V120.86H561.053V82.2261Z" fill="white" />
                <path d="M660.715 1.88037H703.794V120.86H660.544V1.88037H660.715Z" fill="white" />
                <path d="M714.735 10.9407C728.069 4.10276 745.506 0 760.55 0C786.192 0 812.176 14.0178 812.176 42.3952C812.176 62.5671 798.842 72.3111 780.55 76.4139L770.806 78.6362C767.558 79.491 762.088 80.0038 762.088 84.4485C762.088 89.406 767.558 90.7736 771.319 90.7736C780.55 90.7736 788.927 86.8418 796.449 81.7133L808.073 112.142C796.449 119.322 783.969 122.57 770.294 122.57C744.48 122.57 718.667 106.843 718.667 78.6362C718.667 60.0029 732.856 50.0879 749.78 47.0108L758.498 45.4723C762.43 44.6175 768.071 44.2756 768.071 38.8053C768.071 33.5059 761.233 31.6254 756.96 31.6254C747.045 31.6254 737.642 36.5829 729.95 42.5661L727.727 44.2756L714.735 10.9407Z" fill="white" />
                <path d="M814.227 82.2261L837.988 83.2518V1.88037H881.238V83.2518L905 82.2261V120.86H814.227V82.2261Z" fill="white" />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </LocomotiveScrollProvider>
  );
};

export default transition(Home);

