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

  new Swiper('.detail-slider', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });

  // Скролл к элементу
  let scrollTrigger = document.querySelectorAll('.js-scroll-trigger')
  if (scrollTrigger.length) {
    scrollTrigger.forEach(trigger => {
      trigger.addEventListener('click', function () {
        let triggerData = this.dataset.scroll;
        let scrollItem = document.querySelector('.js-scroll-item[data-scroll="' + triggerData + '"]');
        scrollItem.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    });
  };

  let infoHover = document.querySelectorAll('.js-info-item');

  if (infoHover.length) {
    infoHover.forEach(infoItem => {
      let infoWrapper = infoItem.closest('.info');
      infoItem.addEventListener('mouseover', function () {
        infoWrapper.classList.add('hover');
      });
      infoItem.addEventListener('mouseout', function () {
        infoWrapper.classList.remove('hover');
      });
    });
  };

  // Выпадающие списки
  let toggleBtn = document.querySelectorAll('.js-toggle-btn');

  if (toggleBtn.length) {
    toggleBtn.forEach(btn => {
      let dropItem = btn.closest('.js-toggle-container');
      let dropList = dropItem.querySelector('.js-toggle-dropdown');
      let dropListHeight = dropList.offsetHeight;
      dropList.style.height = 0;
      btn.addEventListener('click', function () {
        let activeDropItem = document.querySelector('.js-toggle-container.active');
        if (activeDropItem) {
          activeDropItem.classList.remove('active');
          activeDropItem.querySelector('.js-toggle-dropdown').style.height = 0;
        };

        if (activeDropItem != dropItem) {
          dropItem.classList.add('active');
        };
        let dropListNewHeight = dropList.offsetHeight;
        if (dropListNewHeight == 0) {
          dropList.style.height = `${dropListHeight}px`;
        } else {
          dropList.style.height = 0;
        };
      });
    });
  };

  // Маска для инпута https://github.com/RobinHerbots/Inputmask
  let inputTel = document.querySelectorAll('input[type="tel"]');

  if (inputTel.length) {
    inputTel.forEach(tel => {
      new Inputmask("+7(999)999-99-99").mask(tel);
    });
  };

  // Анимации
  gsap.registerPlugin(ScrollTrigger);

  // header
  if (window.innerWidth >= 760) {
    gsap.from('.anim-opacity', {
      scrollTrigger: {
        trigger: '.anim-opacity',
        toggleActions: 'play pause resume none',
      },
      duration: 0.5,
      delay: 0.5,
      opacity: 0,
    });
  };

  gsap.from('.swiper-slide-active .anim-banner-title', {
    scrollTrigger: {
      trigger: '.banner',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    x: -2000,
  });

  gsap.from('.anim-banner-subtitle', {
    scrollTrigger: {
      trigger: '.banner',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    x: -2000,
  });

  // banner
  gsap.from('.anim-banner-translate', {
    scrollTrigger: {
      trigger: '.banner',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    y: 300,
    opacity: 0,
  });

  gsap.from('.anim-banner-prev', {
    scrollTrigger: {
      trigger: '.banner',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    // delay: 1,
    x: 50,
    opacity: 0,
  });

  gsap.from('.anim-banner-next', {
    scrollTrigger: {
      trigger: '.banner',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    // delay: 1,
    x: -50,
    opacity: 0,
  });

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
    delay: 0.5,
    opacity: 0,
  });

  // history
  gsap.from('.anim-history-line', {
    scrollTrigger: {
      trigger: '.history',
      toggleActions: 'play pause resume none',
      start: 'center bottom',
    },
    duration: 1,
    x: -2000,
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

  gsap.from('.anim-centered-blur-bg', {
    scrollTrigger: {
      trigger: '.centered_one',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    delay: 2,
    filter: 'blur(40px)',
  });

  gsap.from('.anim-centered-left', {
    scrollTrigger: {
      trigger: '.centered_one',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    x: -2000,
  });

  gsap.from('.anim-centered-left-delay', {
    scrollTrigger: {
      trigger: '.centered_one',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    delay: 1,
    x: -2000,
  });

  gsap.from('.anim-centered-top', {
    scrollTrigger: {
      trigger: '.centered_one',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    delay: 0.5,
    y: 100,
    opacity: 0,
  });

  // statistics
  let animStatisticsImg = document.querySelectorAll('.anim-statistics-img');

  if (animStatisticsImg.length && window.innerWidth >= 760) {
    animStatisticsImg.forEach(img => {
      let parent = img.closest('.anim-statistics-item');
      let titleLeft = parent.querySelector('.anim-statistics-title-left');
      let titleRight = parent.querySelector('.anim-statistics-title-right');
      let description = parent.querySelector('.anim-statistics-description');

      if (titleLeft) {
        gsap.from(titleLeft, {
          scrollTrigger: {
            trigger: parent,
            toggleActions: 'play pause resume none',
          },
          duration: 1,
          x: -2000,
        });
      };

      if (titleRight) {
        gsap.from(titleRight, {
          scrollTrigger: {
            trigger: parent,
            toggleActions: 'play pause resume none',
          },
          duration: 1,
          x: 2000,
        });
      };

      gsap.from(description, {
        scrollTrigger: {
          trigger: parent,
          toggleActions: 'play pause resume none',
        },
        duration: 1,
        delay: 0.5,
        opacity: 0,
        y: 100,
      });

      gsap.to(img, {
        scrollTrigger: {
          trigger: parent,
          toggleActions: 'play pause resume none',
        },
        duration: 1,
        width: '50%',
      });
    });
  };

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
    delay: 2,
    filter: 'blur(40px)',
  });

  gsap.from('.anim-centered-title', {
    scrollTrigger: {
      trigger: '.centered_two',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    delay: 0.5,
    x: -2000,
  });

  gsap.from('.anim-centered-opacity', {
    scrollTrigger: {
      trigger: '.centered_two',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    delay: 1,
    opacity: 0,
  });

  // companions
  gsap.from('.anim-companions-title', {
    scrollTrigger: {
      trigger: '.companions',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    x: -2000,
  });

  gsap.from('.anim-companions-img', {
    scrollTrigger: {
      trigger: '.companions',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    delay: 0.5,
    opacity: 0,
  });

  // contacts
  gsap.from('.anim-contacts-item', {
    scrollTrigger: {
      trigger: '.contacts',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    x: -2000,
    stagger: 0.2,
  });

  // map
  gsap.from('.anim-map-title', {
    scrollTrigger: {
      trigger: '.map',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    x: -2000,
  });

  gsap.from('.anim-map-btn', {
    scrollTrigger: {
      trigger: '.map',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    y: 150,
    opacity: 0,
  });
});

