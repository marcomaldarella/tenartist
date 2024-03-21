import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MenuAnimation = () => {
  const menuItemsRef = useRef([]);

  useEffect(() => {
    gsap.set('.menu__item-image_wrapper', { autoAlpha: 0 });

    const onMouseEnter = (imageWrapper, image) => {
      gsap.to(imageWrapper, { autoAlpha: 1, duration: 0.3 });
      gsap.to(image, { scale: 1, autoAlpha: 1, duration: 0.3 });
    };

    const onMouseLeave = (imageWrapper) => {
      gsap.to(imageWrapper, { autoAlpha: 0, duration: 0.3 });
    };

    menuItemsRef.current.forEach((item, index) => {
      const imageWrapper = item.querySelector('.menu__item-image_wrapper');
      const image = imageWrapper.querySelector('.menu__item-image');

      gsap.set(image, { scale: 1.5, autoAlpha: 0, xPercent: 0, yPercent: 0 });

      item.addEventListener('mouseenter', () => onMouseEnter(imageWrapper, image));
      item.addEventListener('mouseleave', () => onMouseLeave(imageWrapper));

      gsap.fromTo(
        item.querySelector('.menu__item-innertext'),
        { autoAlpha: 0, x: -10 },
        { autoAlpha: 1, x: 0, duration: 0.3, delay: index * 0.1 }
      );
    });

    gsap.set('.menu', { pointerEvents: 'all' });

    return () => {
      menuItemsRef.current.forEach((item) => {
        const imageWrapper = item ? item.querySelector('.menu__item-image_wrapper') : null;
        if (imageWrapper) {
          imageWrapper.removeEventListener('mouseenter', () => onMouseEnter(imageWrapper, imageWrapper.querySelector('.menu__item-image')));
          imageWrapper.removeEventListener('mouseleave', () => onMouseLeave(imageWrapper));
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
    { name: "Luisaviaroma,", imagePath: "/assets/luisaviaroma.jpg" },
    { name: "Mia Le Journal,", imagePath: "/assets/mia-journal.jpg" },
    { name: "MSGM,", imagePath: "/assets/msgm.jpg" },
    { name: "Odda,", imagePath: "/assets/odda.jpg" },
    { name: "Puma,", imagePath: "/assets/puma.jpg" },
    { name: "Pal Zileri,", imagePath: "/assets/palzileri001.jpg" },
    { name: "Sisley Young,", imagePath: "/assets/sisley.jpg" },
    { name: "Tissot,", imagePath: "/assets/tissot.jpg" },
    { name: "Vogue,", imagePath: "/assets/vogue.jpg" },
    { name: "Zalando", imagePath: "/assets/zalando.jpg" }


  ];

  return (
    <div className="menu" style={{
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'center',
    }}>
      {menuItems.map((item, index) => (
        <div className="menu__item" key={index} ref={(el) => (menuItemsRef.current[index] = el)}>
          <span className="menu__item-text">
            <span className="menu__item-innertext">{item.name}</span>
          </span>
          <div className="menu__item-image_wrapper">
            <div className="menu__item-image_inner">
              <img className="menu__item-image" src={item.imagePath} alt={item.name} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuAnimation;