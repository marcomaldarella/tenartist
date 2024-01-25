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
    { name: "Cesare Paciotti,", imagePath: "src/assets/cesarepaciotti.jpg" },
    { name: "Corneliani,", imagePath: "src/assets/corneliani.jpg" },
    { name: "EA7,", imagePath: "src/assets/ea7.jpg" }, 
    { name: "ELLE,", imagePath: "src/assets/elle.jpg" },
    { name: "Ermenegildo Zegna,", imagePath: "src/assets/zegna.jpg" },
    { name: "Fay,", imagePath: "src/assets/fay.jpg" },
    { name: "Giorgio Armani,", imagePath: "src/assets/armani.jpg" },
    { name: "Golden Point,", imagePath: "src/assets/goldenpoint.jpg" },
    { name: "GQ China Wildlife,", imagePath: "src/assets/gq.jpg" },
    { name: "Louis Vuitton,", imagePath: "src/assets/lv.jpg" },
    { name: "Mia Le Journal,", imagePath: "src/assets/mialejournal.jpg" },
    { name: "MSGM,", imagePath: "src/assets/msgm.jpg" },
    { name: "Odda,", imagePath: "src/assets/odda.jpg" },
    { name: "Pal Zileri,", imagePath: "src/assets/palzileri.jpg" },
    { name: "Sisley Young,", imagePath: "src/assets/sisley.jpg" },
    { name: "The Collector,", imagePath: "src/assets/thecollector.jpg" },
    { name: "Tissot,", imagePath: "src/assets/tissot.jpg" },
    { name: "Vogue,", imagePath: "src/assets/vogue.jpg" },
    { name: "Zalando", imagePath: "src/assets/zalando.jpg" }


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
