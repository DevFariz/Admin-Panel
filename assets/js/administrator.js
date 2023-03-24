const popup = document.querySelector('.administrator-popup');
const popupContent = document.querySelector('.administrator-popup-content');
const closeBtn = document.querySelector('.administrator-close-btn');
const popupTriggers = document.querySelectorAll('.adminitrator-table-item__popup');

popupTriggers.forEach(trigger => {
  trigger.addEventListener('click', e => {
    e.preventDefault();
    popup.classList.add('popup-transition');
    popup.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  popup.classList.remove('popup-transition');
  popup.style.display = 'none';
});

popup.addEventListener('click', e => {
  if (e.target === popup) {
    popup.classList.remove('popup-transition');
    popup.style.display = 'none';
  }
});