window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
    preloader.classList.add('preloader-hidden');
    }, 990);
}
document.addEventListener('DOMContentLoaded', () => {

  // Кнопка по которой происходит клик
let callBackButton = document.getElementById('button');

  // Модальное окно, которое необходимо открыть
let modal1 = document.getElementById('modal-1');

  // Кнопка "закрыть" внутри модального окна
let closeButton = modal1.getElementsByClassName('modal__close-button')[0];


  // Тег body для запрета прокрутки
let tagBody = document.getElementsByTagName('body');

callBackButton.onclick = function (e) {
    e.preventDefault();
    modal1.classList.add('modal_active');
    tagBody.classList.add('hidden');
}

closeButton.onclick = function (e) {
    e.preventDefault();
    modal1.classList.remove('modal_active');
    tagBody.classList.remove('hidden');
}

modal1.onmousedown = function (e) {
    let target = e.target;
    let modalContent = modal1.getElementsByClassName('modal__content')[0];
    if (e.target.closest('.' + modalContent.className) === null) {
    this.classList.remove('modal_active');
    tagBody.classList.remove('hidden');
    }
};

  // Вызов модального окна несколькими кнопками на странице
let buttonOpenModal1 = document.getElementsByClassName('get-modal_1');

for (let button of buttonOpenModal1) {
    button.onclick = function (e) {
e.preventDefault();
modal1.classList.add('modal_active');
tagBody.classList.add('hidden');
    }
}
});
var Accordions = (function () {
    'use strict';
    //
    // Methods
    //
    /**
     * Закрыть все открытые элементы аккордиона
     * @param  {Node} current элемент, который останется открытым
     * @param  {Node} parent  контейнер элементов аккордиона
     */
    var closeOthers = function (current, parent) {
      // получить все открытые элементы внутри контейнера
    var opened = Array.from(parent.querySelectorAll('details[open]'));
      // закрыть все, кроме того, который должен остаться открытым
    opened.forEach(function (accordion) {
        if (accordion === current) return;
        accordion.removeAttribute('open');
    });
    };

    /**
     * Перехватчик события toggle
     * @param  {Event} event     объект Event
     * @param  {String} selector селектор контейнера аккордиона
     */
    var toggle = function (event, selector) {
      // запускается только для аккордиона внутри селектора
    var parent = event.target.closest(selector);
    if (!parent) return;
      // запускать только если аккордион раскрыт
    if (!event.target.hasAttribute('open')) return;
      // свернуть все остальные элементы аккордиона
    closeOthers(event.target, parent);
    };
    /**
     * Конструктор класса
     */
    var Constructor = function (selector) {
      //
      // переменные
      //
    var publicAPIs = {};
      //
      // методы
      //
    /**
       * для перехвата события toggle
       * @param  {Event} event объект Event
       */
    var toggleHandler = function (event) {
        toggle(event, selector);
    };
    /**
       * api для уничтожения экземпляра
       */
    publicAPIs.destroy = function () {
        document.removeEventListener('toggle', toggleHandler, true);
    };
    /**
       * инициализация экземпляра
       */
    publicAPIs.init = function () {
        // Check for errors
        if (!selector || typeof selector !== 'string') {
        throw new Error('Please provide a valid selector');
        }
        // наблюдение за состоянием: раскрыт-закрыт
        document.addEventListener('toggle', toggleHandler, true);
    };
      //
      // инициализируем и возвращаем публичный api
      //
    publicAPIs.init();
    return publicAPIs;
    };
    //
    // djpdhfoftv конструктор
    //
    return Constructor;
}
)();
// инициализация плагина
var accordion = new Accordions('[data-accordion="1"]');
var otherAccordion = new Accordions('[data-accordion="2"]');
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    } 
});
}
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
}
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Показать отфильтрованные элементы
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Скрыть элементы, которые не выбраны
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Добавить активный класс к текущей кнопке управления (выделите ее)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
let menuToggle = document.querySelector(".menuToggle");
let navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  navigation.classList.toggle("active");
};
window.addEventListener('load', function() {
  carouselRUN();
}, false);

function carouselRUN() {
  var carousel = document.getElementById("carousel");
  var scene = document.getElementById("scene");
  var carousel_items_Arrey = document.getElementsByClassName("carousel_item");
  var carousel_btn = document.getElementById("carousel_btn");
  var n = carousel_items_Arrey.length;
  var curr_carousel_items_Arrey = 0;
  var theta = Math.PI * 2 / n;
  var interval = null;
  var autoCarousel = carousel.dataset.auto;

  setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
  window.addEventListener('resize', function() {
      clearInterval(interval);
      setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
  }, false);
  setupNavigation();


  function setupCarousel(n, width) {
      var apothem = width / (2 * Math.tan(Math.PI / n));
      scene.style.transformOrigin = `50% 50% ${- apothem}px`;

      for (i = 1; i < n; i++) {
          carousel_items_Arrey[i].style.transformOrigin = `50% 50% ${- apothem}px`;
          carousel_items_Arrey[i].style.transform = `rotateY(${i * theta}rad)`;
      }

      if (autoCarousel === "true") {
          setCarouselInterval();
      }
  }

  function setCarouselInterval() {
      interval = setInterval(function() {
          curr_carousel_items_Arrey++;
          scene.style.transform = `rotateY(${(curr_carousel_items_Arrey) * -theta}rad)`;
      }, 3000);
  }

  function setupNavigation() {
      carousel_btn.addEventListener('click', function(e) {
          e.stopPropagation();
          var target = e.target;

          if (target.classList.contains('next')) {
              curr_carousel_items_Arrey++;
          } else if (target.classList.contains('prev')) {
              curr_carousel_items_Arrey--;
          }
          clearInterval(interval);
          scene.style.transform = `rotateY(${curr_carousel_items_Arrey * -theta}rad)`;

          if (autoCarousel === "true") {
              setTimeout(setCarouselInterval(), 3000);
          }
      }, true);
  }
}