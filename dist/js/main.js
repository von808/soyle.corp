const burgerBtn = document.getElementById('burger-btn');
const burgerMenu = document.getElementById('burger-menu');

burgerBtn.onclick = function () {
  burgerBtn.classList.toggle('active')
  burgerMenu.classList.toggle('active')
  document.body.classList.toggle('no-scroll')
}

$(function () {

  $('.faqs__item-title').click(function (event) {
    if ($('.faqs__items').hasClass('accardion')) {
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

qTitle1.onclick = function () {
  qItem1.classList.toggle('active')
  qItem2.classList.remove('active')
  qItem3.classList.remove('active')
  qItem4.classList.remove('active')
  qItem5.classList.remove('active')
}

qTitle2.onclick = function () {
  qItem1.classList.remove('active')
  qItem2.classList.toggle('active')
  qItem3.classList.remove('active')
  qItem4.classList.remove('active')
  qItem5.classList.remove('active')
}

qTitle3.onclick = function () {
  qItem1.classList.remove('active')
  qItem2.classList.remove('active')
  qItem3.classList.toggle('active')
  qItem4.classList.remove('active')
  qItem5.classList.remove('active')
}

qTitle4.onclick = function () {
  qItem1.classList.remove('active')
  qItem2.classList.remove('active')
  qItem3.classList.remove('active')
  qItem4.classList.toggle('active')
  qItem5.classList.remove('active')
}

qTitle5.onclick = function () {
  qItem1.classList.remove('active')
  qItem2.classList.remove('active')
  qItem3.classList.remove('active')
  qItem4.classList.remove('active')
  qItem5.classList.toggle('active')
}

const input = document.querySelector("#phone");
window.intlTelInput(input, {
  onlyCountries: ["kz", "ru", "tr"],
  utilsScript: "../libs/intlTelInput/js/utils.js",
});

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

  dropDownBtn.addEventListener('click', function (e) {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
  });

  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });
});


$(function () {

  $('.progress__item-topbar').click(function (event) {
    if ($('.progress__item-content').hasClass('accardion')) {
      $('.progress__item-topbar').not($(this)).removeClass('active');
      $('.progress__item-content').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  })

});

const circle = document.querySelector('.progress-ring__circle-1');
const circle2 = document.querySelector('.progress-ring__circle-2');
const circle3 = document.querySelector('.progress-ring__circle-3');
const circle4 = document.querySelector('.progress-ring__circle-4');
const circle5 = document.querySelector('.progress-ring__circle-5');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
const inputPb = document.querySelector('.percent-1');

inputPb.addEventListener('change', function () {
  setProgress(inputPb.value);
})

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

circle2.style.strokeDasharray = `${circumference} ${circumference}`;
circle2.style.strokeDashoffset = circumference;

circle3.style.strokeDasharray = `${circumference} ${circumference}`;
circle3.style.strokeDashoffset = circumference;

circle4.style.strokeDasharray = `${circumference} ${circumference}`;
circle4.style.strokeDashoffset = circumference;

circle5.style.strokeDasharray = `${circumference} ${circumference}`;
circle5.style.strokeDashoffset = circumference;

const f1 = function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;
}
f1(52);

const f2 = function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle2.style.strokeDashoffset = offset;
}
f2(52);

const f3 = function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle3.style.strokeDashoffset = offset;
}
f3(25);

const f4 = function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle4.style.strokeDashoffset = offset;
}
f4(25);

const f5 = function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle5.style.strokeDashoffset = offset;
}
f5(0);


(function () {
  var caseItem = document.querySelectorAll('.lesson__selected-1-item'),
    active = document.getElementsByClassName('selected');

  Array.from(caseItem).forEach(function (item, i, caseItem) {
    item.addEventListener('click', function (e) {
      if (active.length > 0 && active[0] !== this)
        active[0].classList.remove('selected');

      this.classList.toggle('selected');
    });
  });
})();