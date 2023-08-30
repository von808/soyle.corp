const burgerBtn = document.getElementById('burger-btn');
const burgerMenu = document.getElementById('burger-menu');

burgerBtn.onclick = function(){
  burgerBtn.classList.toggle('active')
  burgerMenu.classList.toggle('active')
}

$(function () {

  $('.faqs__item-title').click(function(event) {
    if ($('.faqs__items').hasClass('accardion')){
      $('.faqs__item-title').not($(this)).removeClass('active');
      $('.faqs__item-text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  })

});

const qTitle1 = document.getElementById('faq-title-1')
const qItem1 = document.getElementById('faq-item-1')
const qTitle2 = document.getElementById('faq-title-2')
const qItem2 = document.getElementById('faq-item-2')
const qTitle3 = document.getElementById('faq-title-3')
const qItem3 = document.getElementById('faq-item-3')
const qTitle4 = document.getElementById('faq-title-4')
const qItem4 = document.getElementById('faq-item-4')
const qTitle5 = document.getElementById('faq-title-5')
const qItem5 = document.getElementById('faq-item-5')

qTitle1.onclick = function() {
  qItem1.classList.toggle('active')
  qItem2.classList.remove('active')
  qItem3.classList.remove('active')
  qItem4.classList.remove('active')
  qItem5.classList.remove('active')
}

qTitle2.onclick = function() {
  qItem1.classList.remove('active')
  qItem2.classList.toggle('active')
  qItem3.classList.remove('active')
  qItem4.classList.remove('active')
  qItem5.classList.remove('active')
}

qTitle3.onclick = function() {
  qItem1.classList.remove('active')
  qItem2.classList.remove('active')
  qItem3.classList.toggle('active')
  qItem4.classList.remove('active')
  qItem5.classList.remove('active')
}

qTitle4.onclick = function() {
  qItem1.classList.remove('active')
  qItem2.classList.remove('active')
  qItem3.classList.remove('active')
  qItem4.classList.toggle('active')
  qItem5.classList.remove('active')
}

qTitle5.onclick = function() {
  qItem1.classList.remove('active')
  qItem2.classList.remove('active')
  qItem3.classList.remove('active')
  qItem4.classList.remove('active')
  qItem5.classList.toggle('active')
}

const input = document.querySelector("#phone");
window.intlTelInput(input, {
  onlyCountries: ["kz", "ru", "tr"],
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});

// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

  // Клик по кнопке. Открыть/Закрыть select
  dropDownBtn.addEventListener('click', function (e) {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
  });

  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
    });
  });

  // Клик снаружи дропдауна. Закрыть дропдаун
  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });

  // Нажатие на Tab или Escape. Закрыть дропдаун
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });
});