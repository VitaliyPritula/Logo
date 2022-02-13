
var swiper = new Swiper("._swiper", {
  // стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // навигация
  // буллеты, текущее положение, прогрессбар
  pagination: {
    el: ".mainSlider__dotts",
    true: "bullets",
    // буллеты (точки слайдеров)
    clickable: true,

    // динамические буллеты точки-карусель
    // dynamicBullets: true,

    // Костомные буллеты, вывод номера слайда номер слайда
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },

    //фракция (cлайд дроб 1/6)
    // type: "fraction",
    // // кастомный вывод фракции (фото 1 из 6)
    // renderFraction: function (currentClass, totalClass) {
    //   return (
    //     'фото <span class="' +
    //     currentClass +
    //     '"></span>' +
    //     " из " +
    //     '<span class="' +
    //     totalClass +
    //     '"></span>'
    //   );
    // },
    // // прогрессбар
    // type: 'progressbar'
  },

  // скрол
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  //   // возможность перетаскивать скрол
  //   draggable: true,
  // },

  // включение/ выключение
  // перетаскивание на ПК
  // simulateTouch: true,

  // чувствительность свайпа
  // touchRatio: 1,

  // угол срабатывания свайпа
  // touchAngle: 45,

  // курсор перетаскивание
  // grabCursor: true,

  // переключение при клике на слайд
  // slideToClickedSlide: true,

  // // управление клавиатурой
  // kayboard: {
  //   // включение/ выключение
  //   enabled: true,

  //   // вьюпорт
  //   onliInViewport: true,

  //   // управление клавиатурой
  //   pageUpDown: true,
  // },

  // прокрутка слайдов колесом мыши
  // mousewheel: {
  //   sensitivity: 1,
  // },

  // Автовысота слайда
  // autoHeight: false,

  // количество слайдов для показа
  // slidesPerView: 1,
  // slidesPerView: 'auto',

  // отключение функционала если слайдов менше чем нужна
  // watchOverflow: true,

  // отступ меду слайдами
  // spaceBetween: 30,

  // количество пролистываемых слайдов
  // slidesPerGroup: 1,

  // активный слайд по центу
  // centeredSlides: true,

  // Стартовый слайд
  // initialSlide: 0,

  // Мультирядность
  // slidesPerColumn: 1,

  // бесконечность слайда
  // loop: true,

  // свободный режим
  // freeMode: true,
  // скорость слайда
  speed: false,
  // Автопрокрутка слайдера
  // autoplay: {
  //   пауза между прокруткой
  //   delay: 10000,
  //   закончить на посдедним слайде
  //   stopOnLastSlide: true,
    // отключить после ручного переключение
  //   disableOnInteraction: false,
  // },

  // скорость слайдера
  // speed: 0,

  // вертикальный слайдер
  // direction: 'vertical',

  // эффект переключение слайда
  // листание обычный
  // effect:'slide',

  // эффект fade (наложение)
  // effect:'fade',
  // faddeEffect: {
  //   // паралельная смена прозначности
  //   crossFade: true
  // },

  // эффект переворот
  // effect:'flip',
  // flipEffect: {
  //   // тень
  //   slideShadows: true,
  //   // показать тень только активного слайда
  //   limitRotation: true,
  // },

  // // эффект переключение слайда куб
  // effect: "cube",
  // // дополнение к cube
  // cubeEffect: {
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94
  // },

  // адаптивный слайдер свайп
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   480: {
  //     slidesPerView: 2,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //   }
  // },
});

