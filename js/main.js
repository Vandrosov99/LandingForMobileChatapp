 // Вызов библиотеки wow.js


 var wow = new WOW(
  {
    boxClass:     'wow',      // Какой класс тут
    animateClass: 'animated', // класс анимация
    offset:       100,          // 100 пикселей при прокрутке
    mobile:       true,       // вкл или выкл анимация для смартфонов
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

