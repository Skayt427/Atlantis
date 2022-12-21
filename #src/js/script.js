document.addEventListener("DOMContentLoaded", function () {

  new Swiper('.js-slider-banner-content', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      prevEl: '.js-banner__btn_prev',
      nextEl: '.js-banner__btn_next',
    },
  });

  new Swiper('.js-slider-banner-bg', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      prevEl: '.js-banner__btn_prev',
      nextEl: '.js-banner__btn_next',
    },
  });

  // Анимации
  gsap.registerPlugin(ScrollTrigger);

  // header
  gsap.from('.anim-rotate-scale', {
    scrollTrigger: {
      trigger: '.anim-rotate-scale',
      toggleActions: 'play pause resume none',
    },
    duration: 2,
    rotation: -60,
    scale: 0,
  });

  gsap.from('.anim-banner__line', {
    scrollTrigger: {
      trigger: '.banner',
      toggleActions: 'play pause resume none',
    },
    duration: 2,
    rotation: -30,
    y: -200,

  });

  gsap.from('.anim-translate-bottom', {
    scrollTrigger: {
      trigger: '.anim-translate-bottom',
      toggleActions: 'play pause resume none',
    },
    duration: 2,
    y: 100,
    opacity: 0,
  });

  gsap.from('.anim-translate-bottom-delay', {
    scrollTrigger: {
      trigger: '.anim-translate-bottom-delay',
      toggleActions: 'play pause resume none',
    },
    duration: 2,
    y: 100,
    opacity: 0,
    stagger: 1,
    delay: 1,
  });

  // banner
  gsap.from('.anim-banner__text', {
    scrollTrigger: {
      trigger: '.banner',
      toggleActions: 'play pause resume none',
    },
    duration: 2,
    y: 100,
    opacity: 0,
    delay: 1,
  });

  gsap.from('.anim-banner-prev', {
    scrollTrigger: {
      trigger: '.banner',
      toggleActions: 'play pause resume none',
    },
    duration: 2,
    delay: 1,
    x: 50,
    opacity: 0,
  });

  gsap.from('.anim-banner-next', {
    scrollTrigger: {
      trigger: '.banner',
      toggleActions: 'play pause resume none',
    },
    duration: 2,
    delay: 1,
    x: -50,
    opacity: 0,
  });

  gsap.from('.anim-banner__link', {
    scrollTrigger: {
      trigger: '.banner',
      toggleActions: 'play pause resume none',
    },
    duration: 2,
    y: 100,
    opacity: 0,
    delay: 1,
  });

  // history
  gsap.from('.anim-history-line', {
    scrollTrigger: {
      trigger: '.history',
      toggleActions: 'play pause resume none',
    },
    duration: 2,
    y: -100,
    rotation: -35,
  });

  gsap.from('.anim-history-img', {
    scrollTrigger: {
      trigger: '.history',
      toggleActions: 'play pause resume none',
      start: 'center bottom',
    },
    duration: 1,
    clipPath: 'inset(0 100% 0 0)',
  });

  gsap.from('.anim-history-text', {
    scrollTrigger: {
      trigger: '.history',
      toggleActions: 'play pause resume none',
      start: 'center bottom',
    },
    duration: 1,
    delay: 2,
    y: 100,
    opacity: 0,
  });

  // centered
  gsap.from('.anim-centered-blur-bg-wrap', {
    scrollTrigger: {
      trigger: '.centered_one',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    clipPath: 'inset(0 50% 0 50%)',
  });

  gsap.from('.anim-centered-name', {
    scrollTrigger: {
      trigger: '.centered_one',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    y: -100,
    rotation: -35,
  });

  gsap.from('.anim-centered-blur-bg', {
    scrollTrigger: {
      trigger: '.centered_one',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    delay: 2,
    filter: 'blur(40px)',
  });

  gsap.from('.anim-centered-top', {
    scrollTrigger: {
      trigger: '.centered_one',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    delay: 1,
    y: 100,
    opacity: 0,
  });

  // statistics
  let animStatisticsImg = document.querySelectorAll('.anim-statistics-img');

  if (animStatisticsImg.length && window.innerWidth >= 760) {
    animStatisticsImg.forEach(img => {
      let parent = img.closest('.anim-statistics-item');
      let title = parent.querySelector('.anim-statistics-title');
      let description = parent.querySelector('.anim-statistics-description');

      gsap.from(title, {
        scrollTrigger: {
          trigger: parent,
          toggleActions: 'play pause resume none',
          start: 'center bottom',
        },
        duration: 2,
        y: -100,
        rotation: -35,
      });

      gsap.from(description, {
        scrollTrigger: {
          trigger: parent,
          toggleActions: 'play pause resume none',
          start: 'center bottom',
        },
        duration: 1,
        delay: 2,
        opacity: 0,
        y: 100,
      });

      gsap.to(img, {
        scrollTrigger: {
          trigger: parent,
          toggleActions: 'play pause resume none',
          start: 'center bottom',
        },
        duration: 1,
        width: '50%',
      });
    });
  };

  // info
  gsap.from('.anim-info-bg', {
    scrollTrigger: {
      trigger: '.anim-info-bg',
      toggleActions: 'play pause resume none',
    },
    duration: 4,
    backgroundSize: '120%',
  });

  gsap.from('.anim-info__title', {
    scrollTrigger: {
      trigger: '.anim-info__title',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    y: 100,
  });

  // centered_two
  gsap.from('.anim-blur-bg-wrap', {
    scrollTrigger: {
      trigger: '.centered_two',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    clipPath: 'inset(0 50% 0 50%)',
  });


  gsap.from('.anim-blur-bg', {
    scrollTrigger: {
      trigger: '.centered_two',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    delay: 3,
    filter: 'blur(40px)',
  });

  gsap.from('.anim-centered-title', {
    scrollTrigger: {
      trigger: '.centered_two',
      toggleActions: 'play pause resume none',
    },
    duration: 2,
    rotation: -35,
  });

  gsap.from('.anim-centered-translate', {
    scrollTrigger: {
      trigger: '.centered_two',
      toggleActions: 'play pause resume none',
    },
    duration: 2,
    delay: 2,
    y: 100,
    opacity: 0,
  });

  // companions
  gsap.from('.anim-companions-title', {
    scrollTrigger: {
      trigger: '.companions',
      toggleActions: 'play pause resume none',
    },
    duration: 2,
    rotation: -35,
    y: -140,
  });

  gsap.from('.anim-companions-img', {
    scrollTrigger: {
      trigger: '.companions',
      toggleActions: 'play pause resume none',
    },
    duration: 2,
    delay: 1,
    scaleX: 0,
  });

  // footer
  // if (window.innerWidth >= 760) {
  gsap.from('.anim-footer-translate', {
    scrollTrigger: {
      trigger: '.footer',
      toggleActions: 'play pause resume none',
    },
    duration: 2,
    delay: 2,
    y: 100,
    opacity: 0,
  });
  // };

  gsap.from('.anim-footer-logo', {
    scrollTrigger: {
      trigger: '.footer',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    delay: 1,
    rotation: -60,
    scale: 0,
  });
});