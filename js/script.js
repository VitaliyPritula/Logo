// Меню бургер
const iconMenu = document.querySelector(".icon-menu");
if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

/*====Dynamic Adapt v.1================================================================================================*/
function DynamicAdapt(type) {
  this.type = type;
}
DynamicAdapt.prototype.init = function () {
  const _this = this;
  // массив объектов
  this.оbjects = [];
  this.daClassname = "_dynamic_adapt_";
  // массив DOM-элементов
  this.nodes = document.querySelectorAll("[data-da]");

  // наполнение оbjects объктами
  for (let i = 0; i < this.nodes.length; i++) {
    const node = this.nodes[i];
    const data = node.dataset.da.trim();
    const dataArray = data.split(",");
    const оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }

  this.arraySort(this.оbjects);

  // массив уникальных медиа-запросов
  this.mediaQueries = Array.prototype.map.call(
    this.оbjects,
    function (item) {
      return (
        "(" +
        this.type +
        "-width: " +
        item.breakpoint +
        "px)," +
        item.breakpoint
      );
    },
    this
  );
  this.mediaQueries = Array.prototype.filter.call(
    this.mediaQueries,
    function (item, index, self) {
      return Array.prototype.indexOf.call(self, item) === index;
    }
  );

  // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске
  for (let i = 0; i < this.mediaQueries.length; i++) {
    const media = this.mediaQueries[i];
    const mediaSplit = String.prototype.split.call(media, ",");
    const matchMedia = window.matchMedia(mediaSplit[0]);
    const mediaBreakpoint = mediaSplit[1];

    // массив объектов с подходящим брейкпоинтом
    const оbjectsFilter = Array.prototype.filter.call(
      this.оbjects,
      function (item) {
        return item.breakpoint === mediaBreakpoint;
      }
    );
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });
    this.mediaHandler(matchMedia, оbjectsFilter);
  }
};
DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      if (оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(оbject.parent, оbject.element, оbject.index);
      }
    }
  }
};
// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);
  if (place === "last" || place >= destination.children.length) {
    destination.insertAdjacentElement("beforeend", element);
    return;
  }
  if (place === "first") {
    destination.insertAdjacentElement("afterbegin", element);
    return;
  }
  destination.children[place].insertAdjacentElement("beforebegin", element);
};
// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);
  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement("beforebegin", element);
  } else {
    parent.insertAdjacentElement("beforeend", element);
  }
};
// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
  const array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
};
// Функция сортировки массива по breakpoint и place
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === "min") {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return -1;
        }

        if (a.place === "last" || b.place === "first") {
          return 1;
        }

        return a.place - b.place;
      }

      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return 1;
        }

        if (a.place === "last" || b.place === "first") {
          return -1;
        }

        return b.place - a.place;
      }

      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};
const da = new DynamicAdapt("max");
da.init();

/*===сдайди======================================================================================================*/
var swiper = new Swiper("._swiper", {
  // стрелки
  navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
    nextEl: ".products-slider__arrow_next",
    prevEl: ".products-slider__arrow_prev",
  },
  // навигация
  // буллеты, текущее положение, прогрессбар
  pagination: {
    el: ".products-slider__info",
    // true: "bullets",
    // буллеты (точки слайдеров)
    clickable: true,

    // динамические буллеты точки-карусель
    // dynamicBullets: true,

    // Костомные буллеты, вывод номера слайда номер слайда
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },

    //фракция (cлайд дроб 1/6)
    type: "fraction",
    // кастомный вывод фракции (фото 1 из 6)
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
    // прогрессбар
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
  autoHeight: true,

  // количество слайдов для показа
  slidesPerView: 1,
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
  speed: 800,
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

  // эффект переключение слайда куб
  // effect: "cube",
  // дополнение к cube
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

/*====работа с боковым всплывающим меню===================================================================================*/
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.querySelector("body").classList.add("_touch");
}
if (isMobile.any()) {
  let menuParents = document.querySelectorAll(".menu-page__parent > a");
  for (let index = 0; index < menuParents.length; index++) {
    const menuParent = menuParents[index];
    menuParent.addEventListener("click", function (e) {
      menuParent.parentElement.classList.toggle("_active");
      e.preventDefault();
    });
  }
} else {
  let menuParents = document.querySelectorAll(".menu-page__parent");
  for (let index = 0; index < menuParents.length; index++) {
    const menuParent = menuParents[index];
    menuParent.addEventListener("mouseenter", function (e) {
      menuParent.classList.add("_active");
    });
    menuParent.addEventListener("mouseleavel", function (e) {
      menuParent.classList.remove("_active");
    });
  }
}

let menuPageBurger = document.querySelector(".menu-page__burger");
let menuPageBody = document.querySelector(".menu-page__body");
menuPageBurger.addEventListener("click", function (e) {
  menuPageBurger.classList.toggle("_active");
  menuPageBody.classList.toggle("_active");
});
/*======Плавное выадающее меню на сатегории==============================================================================*/
var searchSelect = document.getElementsByClassName("search-page__title")[0];
var categorieSearch = document.getElementsByClassName("categories-search")[0];
searchSelect.addEventListener(
  "click",
  function (e) {
    categorieSearch.classList.toggle("current");
  },
  false
);

/*=====работа с выбранным checkbox======================================================================================*/
let checkboxCategories = document.querySelectorAll(".checkbox");

for (let index = 0; index < checkboxCategories.length; index++) {
  const checkboxCategory = checkboxCategories[index];
  checkboxCategory.addEventListener("change", function (e) {
    checkboxCategory.classList.toggle("_active");

    let checkboxActiveCategories = document.querySelectorAll(
      ".categories-search__checkbox._active"
    );

    if (checkboxActiveCategories.length > 0) {
      searchSelect.classList.add("_categories");
      let searchQuantity = document.querySelector(".search-page__quantity");
      searchQuantity.innerHTML =
        searchQuantity.getAttribute("data-text") +
        "" +
        checkboxActiveCategories.length;
    } else {
      searchSelect.classList.remove("_categories");
    }
  });
}

/*========главный сдайд==================================================================================================*/
var swiper = new Swiper(".mainSlider", {
  // навигация
  // буллеты, текущее положение, прогрессбар
  pagination: {
    el: ".mainSlider__dotts",
    true: "bullets",
    // буллеты (точки слайдеров)
    clickable: true,
  },
  autoplay: true,
  speed: 800,
});

if (document.querySelector(".mainSlider")) {
  let mainsliderImages = document.querySelectorAll(".mainSlider__image");
  let mainSliderDotts = document.querySelectorAll(
    ".mainSlider__dotts .swiper-pagination-bullet"
  );

  for (let index = 0; index < mainsliderImages.length; index++) {
    const mainSliderImage = mainsliderImages[index]
      .querySelector("img")
      .getAttribute("src");
    mainSliderDotts[index].style.backgroundImage =
      "url('" + mainSliderImage + "')";
  }
}
if (document.querySelector(".products-slider")) {
  let productsSlider = new Swiper(".products-slider__item", {
    // стрелки
    navigation: {
      prevEl: ".products-slider__arrow_prev",
      nextEl: ".products-slider__arrow_next",
    },
    speed: false,
  });
}

/* сдайд товара */
var swiper = new Swiper(".brandsSlider", {
  // навигация
  navigation: {
    prevEl: ".brands-slider__arrow_prev",
    nextEl: ".brands-slider__arrow_next",
  },

  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
  },
});

/*=============================================================================================================*/
/*работа с ползунками для цены */
const priceSlider = document.querySelector(".price-filter__slider");
noUiSlider.create(priceSlider, {
  start: [0, 200000],
  connect: true,
  tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
  range: {
    min: [0],
    max: [200000],
  },
});

const priceStart = document.getElementById("price-start");
const priceEnd = document.getElementById("price-end");
priceStart.addEventListener("change", setPriceValues);
priceEnd.addEventListener("change", setPriceValues);

function setPriceValues() {
  let priceStartValue;
  let priceEndValue;
  if (priceStart.value != '') {
    priceStartValue = priceStart.value;
  }
  if (priceEnd.value != '') {
    priceEndValue = priceEnd.value;
  }
  priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
}
/*=============================================================================================================*/
// spoller
