import React, { useRef } from "react";
import "./Contact.css";
import transition from "../transition";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Logo from "./logo.svg";

const Contact = () => {
  const containerRef = useRef(null);

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
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div className="fixed-logo-wrap">
            <img className="fixed-logo" src={Logo} alt="Logo" />
      </div>
      <section className="contact" data-scroll-container ref={containerRef}>
        <div className="contact-copy">
          <div className="empty_space"></div>
          <p>Hello,</p>
          <a href="#">info@tenartist.com</a>
          <div className="empty_space_2"></div>
          <p>Silvia Cammilli</p>
          <h6>Producer Manager</h6>
          <a href="mailto:silvia@tenartist.com">silvia@tenartist.com</a>
          <br /><br />
          <p>Valentina Tarolli</p>
          <h6>Producer</h6>
          <a href="mailto:valentina@tenartist.com">valentina@tenartist.com</a>
          <br /><br />
          <a href="https://www.instagram.com/ten_artist/">Instagram</a>
          <br /><br /><br />
          <span id="copyright">
            COPYRIGHT 2024 TEN ARTIST. MILANO, ITALY <br />
            © 2023 ALLRIGHTS RESERVED.
          </span>
          <div className="empty_space"></div>
          <p>Hello,</p>
          <a href="mailto:info@tenartist.com">info@tenartist.com</a>
          <div className="empty_space_2"></div>
          <p>Silvia Camilli</p>
          <a href="mailto:info@tenartist.com">info@tenartist.com</a>
          <div className="empty_space_2"></div>
          <p>Silvia Camilli</p>
          <a href="mailto:silvia@tenartist.com">silvia@tenartist.com</a>
          <br /><br />
          <p>Valentina Tarolli</p>
          <a href="mailto:valentina@tenartist.com">valentina@tenartist.com</a>
          <br /><br />
          <a href="https://www.instagram.com/ten_artist/">Instagram</a>
          <br /><br /><br />
          <span id="copyright">
            COPYRIGHT 2024 TEN ARTIST. MILANO, ITALY <br />
            © 2023 ALLRIGHTS RESERVED.
          </span>
          <div className="empty_space"></div>
          <p>Hello,</p>
          <a href="mailto:info@tenartist.com">info@tenartist.com</a>
          <div className="empty_space_2"></div>
          <p>Silvia Camilli</p>
          <a href="mailto:silvia@tenartist.com">silvia@tenartist.com</a>
          <br /><br />
          <p>Valentina Tarolli</p>
          <a href="mailto:valentina@tenartist.com">valentina@tenartist.com</a>
          <br /><br />
          <a href="https://www.instagram.com/ten_artist/">Instagram</a>
          <br /><br /><br />
          <span id="copyright">
            COPYRIGHT 2024 TEN ARTIST. MILANO, ITALY <br />
            © 2023 ALLRIGHTS RESERVED.
          </span>
          <div className="empty_space"></div>
          <p>Hello,</p>
          <a href="mailto:info@tenartist.com">info@tenartist.com</a>
          <div className="empty_space_2"></div>
          <p>Silvia Camilli</p>
          <a href="mailto:silvia@tenartist.com">silvia@tenartist.com</a>
          <br /><br />
          <p>Valentina Tarolli</p>
          <a href="mailto:valentina@tenartist.com">valentina@tenartist.com</a>
          <br /><br />
          <a href="https://www.instagram.com/ten_artist/">Instagram</a>
          <br /><br /><br />
          <span id="copyright">
            COPYRIGHT 2024 TEN ARTIST. MILANO, ITALY <br />
            © 2023 ALLRIGHTS RESERVED.
          </span>
          <div className="empty_space"></div>
          <p>Hello,</p>
          <a href="mailto:info@tenartist.com">info@tenartist.com</a>
          <div className="empty_space_2"></div>
          <p>Silvia Camilli</p>
          <a href="mailto:silvia@tenartist.com">silvia@tenartist.com</a>
          <br /><br />
          <p>Valentina Tarolli</p>
          <a href="mailto:valentina@tenartist.com">valentina@tenartist.com</a>
          <br /><br />
          <a href="https://www.instagram.com/ten_artist/">Instagram</a>
          <br /><br /><br />
          <span id="copyright">
            COPYRIGHT 2024 TEN ARTIST. MILANO, ITALY <br />
            © 2023 ALLRIGHTS RESERVED.
          </span>
          <div className="empty_space"></div>
          <p>Hello,</p>
          <a href="mailto:info@tenartist.com">info@tenartist.com</a>
          <div className="empty_space_2"></div>
          <p>Silvia Camilli</p>
          <a href="mailto:silvia@tenartist.com">silvia@tenartist.com</a>
          <br /><br />
          <p>Valentina Tarolli</p>
          <a href="mailto:valentina@tenartist.com">valentina@tenartist.com</a>
          <br /><br />
          <a href="https://www.instagram.com/ten_artist/">Instagram</a>
          <br /><br /><br />
          <span id="copyright">
            COPYRIGHT 2024 TEN ARTIST. MILANO, ITALY <br />
            © 2023 ALLRIGHTS RESERVED.
          </span>
          <div className="empty_space"></div>
          <p>Hello,</p>
          <a href="mailto:info@tenartist.com">info@tenartist.com</a>
          <div className="empty_space_2"></div>
          <p>Silvia Camilli</p>
          <a href="mailto:silvia@tenartist.com">silvia@tenartist.com</a>
          <br /><br />
          <p>Valentina Tarolli</p>
          <a href="mailto:valentina@tenartist.com">valentina@tenartist.com</a>
          <br /><br />
          <a href="https://www.instagram.com/ten_artist/">Instagram</a>
          <br /><br /><br />
          <span id="copyright">
            COPYRIGHT 2024 TEN ARTIST. MILANO, ITALY <br />
            © 2023 ALLRIGHTS RESERVED.
          </span>
          <div className="empty_space"></div>
          <p>Hello,</p>
          <a href="mailto:info@tenartist.com">info@tenartist.com</a>
          <div className="empty_space_2"></div>
          <p>Silvia Camilli</p>
          <a href="mailto:silvia@tenartist.com">silvia@tenartist.com</a>
          <br /><br />
          <p>Valentina Tarolli</p>
          <a href="mailto:valentina@tenartist.com">valentina@tenartist.com</a>
          <br /><br />
          <a href="https://www.instagram.com/ten_artist/">Instagram</a>
          <br /><br /><br />
          <span id="copyright">
            COPYRIGHT 2024 TEN ARTIST. MILANO, ITALY <br />
            © 2023 ALLRIGHTS RESERVED.
          </span>
          <div className="empty_space"></div>
          <p>Hello,</p>
          <a href="mailto:info@tenartist.com">info@tenartist.com</a>
          <div className="empty_space_2"></div>
          <p>Silvia Camilli</p>
          <a href="mailto:silvia@tenartist.com">silvia@tenartist.com</a>
          <br /><br />
          <p>Valentina Tarolli</p>
          <a href="mailto:valentina@tenartist.com">valentina@tenartist.com</a>
          <br /><br />
          <a href="https://www.instagram.com/ten_artist/">Instagram</a>
          <br /><br /><br />
          <span id="copyright">
            COPYRIGHT 2024 TEN ARTIST. MILANO, ITALY <br />
            © 2023 ALLRIGHTS RESERVED.
          </span>
          <div className="empty_space"></div>
          <p>Hello,</p>
          <a href="mailto:info@tenartist.com">info@tenartist.com</a>
          <div className="empty_space_2"></div>
          <p>Silvia Camilli</p>
          <a href="mailto:silvia@tenartist.com">silvia@tenartist.com</a>
          <br /><br />
          <p>Valentina Tarolli</p>
          <a href="mailto:valentina@tenartist.com">valentina@tenartist.com</a>
          <br /><br />
          <a href="https://www.instagram.com/ten_artist/">Instagram</a>
          <br /><br /><br />
          <span id="copyright">
            COPYRIGHT 2024 TEN ARTIST. MILANO, ITALY <br />
            © 2023 ALLRIGHTS RESERVED.
          </span>
        </div>
      </section>
    </LocomotiveScrollProvider>
  );
};

export default transition(Contact);
