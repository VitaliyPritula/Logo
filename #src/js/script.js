@@include('../js/function.js', {})
@@include('../js/popup.js', {})
@@include('../js/burger.js', {})
@@include('../js/dynamicAdapt.js', {})
@@include('../js/swiper.js', {})

if (isMobile.any()) {
	let menuParents = document.querySelectorAll('.menu-page__parent > a');
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener("click", function (e) {
			menuParent.parentElement.classList.toggle('_active');
			e.preventDefault();
		});
	}
} else {
	let menuParents = document.querySelectorAll('.menu-page__parent');
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener("mouseenter", function (e) {
			menuParent.classList.add('_active');
		});
		menuParent.addEventListener("mouseleavel", function (e) {
			menuParent.classList.remove('_active');
		});
	}
}
	

let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuPageBurger.addEventListener("click", function (e) {
	menuPageBurger.classList.toggle('_active');
	menuPageBody.classList.toggle('_active');	
});
/*======Плавное выадающее меню на сатегории==============================================================================*/
var searchSelect = document.getElementsByClassName("search-page__title")[0];
var categorieSearch = document.getElementsByClassName("categories-search")[0];
searchSelect.addEventListener("click", function (e){
  categorieSearch.classList.toggle("current");
}, false);

/*=====работа с выбранным checkbox======================================================================================*/
let checkboxCategories = document.querySelectorAll('.checkbox');

for (let index = 0; index < checkboxCategories.length; index++) {
	const checkboxCategory = checkboxCategories[index];
	checkboxCategory.addEventListener("change", function (e) {
		checkboxCategory.classList.toggle('_active');
			
		let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');

		if (checkboxActiveCategories.length > 0) {
			searchSelect.classList.add('_categories');
			let searchQuantity = document.querySelector('.search-page__quantity');
			searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + '' + checkboxActiveCategories.length;
		} else {
			searchSelect.classList.remove('_categories');
		}
	});
};

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
  speed: false,	
});

if (document.querySelector('.mainSlider')) {
	let mainsliderImages = document.querySelectorAll('.mainSlider__image');
	let mainSliderDotts = document.querySelectorAll('.mainSlider__dotts .swiper-pagination-bullet');
	
	for (let index = 0; index < mainsliderImages.length; index++) {
		const mainSliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
		mainSliderDotts[index].style.backgroundImage = "url('" + mainSliderImage + "')";
	}
}

if (document.querySelector('.products-slider')) {
	let productsSlider = new Swiper('.products-slider__item', {
		// стрелки
  navigation: {
		prevEl: '.products-slider__arrow_prev',
    nextEl: '.products-slider__arrow_next',
  },	
	
		speed: false,	
	});	
}









