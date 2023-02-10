document.addEventListener("DOMContentLoaded", function () {
  let body = document.querySelector('body');

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
      delay: 4000,
    },
    speed: 700,
  });

  let sliders = document.querySelectorAll('.js-slider');

  if (sliders.length) {
    sliders.forEach(function (slider) {
      new Swiper(slider, {
        pagination: {
          el: slider.closest('.slider').querySelector('.slider-pagination__page'),
          type: "fraction",
          formatFractionCurrent: function (number) {
            if (number <= 9) {
              number = '0' + number;
            };
            return number;
          },
          formatFractionTotal: function (number) {
            if (number <= 9) {
              number = '0' + number;
            };
            return number;
          },
        },
        navigation: {
          nextEl: slider.closest('.slider').querySelector('.js-slider-pagination__arrow--next'),
          prevEl: slider.closest('.slider').querySelector('.js-slider-pagination__arrow--prev'),
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 34,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 34,
          },
        },
      });
    });
  };

  // Отрытие меню в шапке на мобильных
  let menuBtns = document.querySelectorAll('.menu__link');
  if (menuBtns.length) {
    function resizeHeader() {
      menuBtns.forEach(menuBtn => {
        if (window.innerWidth <= 1024) {
          menuBtn.addEventListener('click', function () {
            this.classList.toggle('active');
          });
        } else {
          if (menuBtn.classList.contains('active')) {
            menuBtn.classList.remove('active');
          };
        };
      });
    };

    resizeHeader();
    window.addEventListener('resize', resizeHeader);
  };

  // Перенос адаптивных стрелок слайдеров
  let adaptiveArrows = document.querySelectorAll('.js-adaptive-arrows');

  function resizeAdaptiveArrows() {
    if (adaptiveArrows.length) {
      adaptiveArrows.forEach(arrows => {
        if (window.innerWidth <= 768) {
          let slider = arrows.closest('.slider').querySelector('.js-slider');
          slider.after(arrows);
        } else {
          let sliderTop = arrows.closest('.slider').querySelector('.slider__top');
          sliderTop.append(arrows);
        };
      });
    };
  };

  resizeAdaptiveArrows();
  window.addEventListener('resize', resizeAdaptiveArrows);

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

      window.addEventListener('resize', function () {
        if (document.querySelector('.js-toggle-container.active')) {
          document.querySelector('.js-toggle-container.active').classList.remove('active');
        };
        dropList.style.height = '';
        dropListHeight = dropList.offsetHeight;
        dropList.style.height = 0;
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

  // Модалка
  let modalTrigger = document.querySelectorAll('.js-modal-trigger');

  if (modalTrigger.length >= 1) {
    modalTrigger.forEach(trigger => {
      // Открыетие
      trigger.addEventListener('click', function () {
        let trigger = this;
        let triggerData = this.dataset.modal;
        let modal = document.querySelector('.js-modal[data-modal="' + triggerData + '"]');
        modal.classList.add('active');
        body.classList.add('noscroll');

        // Расположение контейнера по центру
        let modalContainer = modal.querySelector('.modal__container');
        function modalPosition() {
          let modalPaddingTop = parseInt(getComputedStyle(modal).getPropertyValue('padding-top'));
          let modalPaddingBottom = parseInt(getComputedStyle(modal).getPropertyValue('padding-bottom'));
          let modalHeight = modal.offsetHeight - modalPaddingTop - modalPaddingBottom;
          if (modalHeight > modalContainer.offsetHeight) {
            let freeSpace = modalHeight - modalContainer.offsetHeight;
            modalContainer.style.top = freeSpace / 2 + 'px';
          };
        };
        modalPosition();
        window.addEventListener('resize', modalPosition);
      });
    });

    let modal = document.querySelectorAll('.js-modal');
    modal.forEach(modal => {
      // Закрытие через клик на крестик
      let closeBtn = modal.querySelector('.js-modal-close');
      closeBtn.addEventListener('click', function () {
        this.closest('.js-modal').classList.remove('active');
        body.classList.remove('noscroll');
      });

      // Закрытие через клик по фону
      let modalBg = modal.querySelector('.js-modal-bg');
      modalBg.addEventListener('click', function () {
        this.closest('.js-modal').classList.remove('active');
        body.classList.remove('noscroll');
      });
    });
  };

  // 
  let social = document.querySelectorAll('.js-social-item');

  if (social.length) {
    social.forEach(item => {
      item.addEventListener('click', function () {
        let itemContainer = item.closest('.js-social');
        let itemActive = itemContainer.querySelector('.js-social-item.active');
        if (itemActive) {
          itemActive.classList.remove('active');
        };

        this.classList.toggle('active');
      });

    });
  };

  // Прикрепление файла
  // Прикрепление файла
  let msgInput = document.querySelectorAll('.pin__input');

  if (msgInput) {
    msgInput.forEach(input => {
      let filesList = [];
      let bottom = input.closest('.pin');

      function checkFiles(bottom, files) {
        if (files.length != 0) {
          bottom.querySelector('.pin__attach').style.display = 'none';
        } else {
          bottom.querySelector('.pin__attach').style.display = 'block';
        };
      }

      function assignFiles(bottom, files) {
        const fileInput = bottom.querySelector('.submit-files');
        const dataTransfer = new DataTransfer();
        files.forEach(file => {
          dataTransfer.items.add(file);
        });
        fileInput.files = dataTransfer.files;
      }

      function renderFileList(files, bottom) {
        let filesWrapper = bottom.querySelector('.pin__file-list');
        filesWrapper.innerHTML = '';

        checkFiles(bottom, filesList);

        //Проходимся по файлам
        for (let i = 0; i < files.length; i++) {
          let span = document.createElement('span');
          span.classList.add('pin__file');
          span.innerHTML = files[i].name;

          let removeBtn = document.createElement('button');
          removeBtn.setAttribute('type', 'button');
          removeBtn.classList.add('pin__file-remove-button');
          removeBtn.insertAdjacentHTML('beforeend', `
                  <svg class="pin__file-remove" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px">
                      <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/>
                  </svg>
              `);

          function onRemoveButtonClick(e) {
            e.preventDefault();
            let fileHTML = this.closest('.pin__file');
            filesList = filesList.filter((f) => f.name !== files[i].name);
            fileHTML.remove();

            checkFiles(bottom, filesList);
            assignFiles(bottom, filesList);

            removeBtn.removeEventListener('click', onRemoveButtonClick)
          }

          removeBtn.addEventListener('click', onRemoveButtonClick)

          span.append(removeBtn);
          filesWrapper.append(span)
        };

        assignFiles(bottom, filesList);
      };

      input.addEventListener('click', (e) => {
        e.target.value = '';
      });

      input.addEventListener('change', (e) => {
        let files = e.target.files;

        Array.from(files).forEach(file => {
          let foundFile = filesList.find(f => f.name === file.name);
          if (!foundFile) {
            filesList.push(file);
          }
        });

        renderFileList(filesList, bottom);
      });
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

  // vacancy
  gsap.from('.anim-vacancy-item', {
    scrollTrigger: {
      trigger: '.vacancy',
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

  // characteristic
  gsap.from('.anim-characteristic-title', {
    scrollTrigger: {
      trigger: '.characteristic',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    x: -2000,
  });

  gsap.from('.anim-characteristic-slide', {
    scrollTrigger: {
      trigger: '.characteristic',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    y: 150,
    opacity: 0,
  });

  // slider
  gsap.from('.anim-slider-title', {
    scrollTrigger: {
      trigger: '.slider',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    x: -2000,
  });

  gsap.from('.anim-slider-name', {
    scrollTrigger: {
      trigger: '.slider',
      toggleActions: 'play pause resume none',
    },
    duration: 1,
    y: 150,
    opacity: 0,
  });
});

