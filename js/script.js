document.addEventListener('DOMContentLoaded', function () {

  // Получаем необходимые элементы DOM
  const $carousel = document.querySelector('.carousel__wrap');
  const $controlsLeft = document.querySelector('.controls__item_left');
  const $controlsRight = document.querySelector('.controls__item_right');
  const $items = document.querySelectorAll('.item');
  const $currentCounter = document.querySelector('.counter__current');

  // Объявляем счетчик слайдов
  let sliderCounter = 1;

  $controlsLeft.addEventListener('click', function () {

    // Если слайдер не в начале
    if (sliderCounter > 1) {
      // Получаем текущее смещение
      const currentTranslate = +$carousel.style.transform.split('(')[1].split('px)')[0];

      // Получаем ширину элемента
      const itemWidth = getElementWidth($items[0]);

      // Смещаем карусель на ширину одного элемента
      $carousel.style.transform = `translateX(${currentTranslate + itemWidth}px)`

      // Изменяем счетчик
      sliderCounter--;

      // Изменяем счетчик в DOM
      $currentCounter.innerText = sliderCounter;
    }

  });

  $controlsRight.addEventListener('click', function () {
    // Если слайдер не в конце
    if (sliderCounter < $items.length) {
      const currentTranslate = +$carousel.style.transform.split('(')[1].split('px)')[0];
      const itemWidth = getElementWidth($items[0]);
      $carousel.style.transform = `translateX(${currentTranslate - itemWidth}px)`

      sliderCounter++;
      $currentCounter.innerText = sliderCounter;
    }
    
  });
});

function getElementWidth(element) {
  // Вычисляем ширину элемента карусели
  const style = window.getComputedStyle(element, null);
  const margin = parseFloat(style.marginRight);
  return element.getBoundingClientRect().width + margin;
}