import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MenuAnimation = () => {
  const menuItemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline().set('.menu', { autoAlpha: 1 });

    menuItemsRef.current.forEach((item, index) => {
      const imageWrapper = item.querySelector('.menu__item-image_wrapper');

      const onMouseEnter = () => {
        gsap.set(imageWrapper, { scale: 0.5 });
        gsap.to(imageWrapper, { opacity: 1, scale: 1, zIndex: 0 });
      };

      const onMouseLeave = () => {
        gsap.to(imageWrapper, { opacity: 0, scale: 1 });
      };

      const onMouseMove = ({ x, y }) => {
        let yOffset = item.getBoundingClientRect().top / imageWrapper.getBoundingClientRect().height;
        yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
        gsap.to(imageWrapper, { duration: 1 });
      };

      tl.fromTo(
        item.querySelectorAll('.menu__item-innertext'),
        { duration: 0.85, skewY: gsap.utils.wrap([-8, 8]), ease: 'expo.out' },
        { opacity: 1, stagger: 0.095, skewY: 0 },
        index * 0.1
      );

      item.addEventListener('mouseenter', onMouseEnter);
      item.addEventListener('mouseleave', onMouseLeave);
      item.addEventListener('mousemove', onMouseMove);
    });

    tl.set('.menu', { pointerEvents: 'all' });

    return () => {
      menuItemsRef.current.forEach((item) => {
        if (item) {
          item.removeEventListener('mouseenter', onMouseEnter);
          item.removeEventListener('mouseleave', onMouseLeave);
          item.removeEventListener('mousemove', onMouseMove);
        }
      });
    };
  }, []);

  const menuItems = [
    { name: "Cesare Paciotti,", imagePath: "/assets/cesarepaciotti.jpg" },
    { name: "Corneliani,", imagePath: "/assets/corneliani.jpg" },
    { name: "EA7,", imagePath: "/assets/armani.jpg" }, 
    { name: "ELLE,", imagePath: "/assets/elle.jpg" },
    { name: "Ermenegildo Zegna,", imagePath: "/assets/zegna.jpg" },
    { name: "Fay,", imagePath: "/assets/project-img-fay.jpg" },
    { name: "Golden Point,", imagePath: "/assets/goldenpoint.jpg" },
    { name: "GQ China,", imagePath: "/assets/gq.jpg" },
    { name: "Louis Vuitton,", imagePath: "/assets/lv.jpg" },
    { name: "Mia Le Journal,", imagePath: "/assets/mia-journal.jpg" },
    { name: "MSGM,", imagePath: "/assets/msgm.jpg" },
    { name: "Odda,", imagePath: "/assets/odda.jpg" },
    { name: "Puma,", imagePath: "/assets/puma.jpg" },
    { name: "Pal Zileri,", imagePath: "/assets/palzileri001.jpg" },
    { name: "Sisley Young,", imagePath: "/assets/sisley.jpg" },
    { name: "The Collector,", imagePath: "/assets/thecollector.jpg" },
    { name: "Tissot,", imagePath: "/assets/tissot.jpg" },
    { name: "Vogue,", imagePath: "/assets/vogue.jpg" },
    { name: "Zalando", imagePath: "/assets/zalando.jpg" }


  ];

  return (
    <div className="menu">
      {menuItems.map((item, index) => (
        <div className="menu__item" key={index} ref={(el) => (menuItemsRef.current[index] = el)}>
          <div className="menu__item-image_wrapper">
            <div className="menu__item-image_inner">
              <img className="menu__item-image" src={item.imagePath} alt={item.name} />
            </div>
          </div>
          <span className="menu__item-text">
            <span className="menu__item-innertext">{item.name}</span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default MenuAnimation;
