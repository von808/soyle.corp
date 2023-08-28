const burgerBtn = document.getElementById('burger-btn');
const burgerMenu = document.getElementById('burger-menu');

burgerBtn.onclick = function(){
  burgerBtn.classList.toggle('active')
  burgerMenu.classList.toggle('active')
}