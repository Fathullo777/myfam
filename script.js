// Бургер-меню
const burgerMenu = document.getElementById('burger-menu');
const menu = document.getElementById('menu');

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Добавляем анимацию при скролле (Intersection Observer)
document.querySelectorAll('[data-aos]').forEach(el => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
  });

  el.style.opacity = 0;
  el.style.transform = 'translateY(50px)';
  observer.observe(el);
});

// Обработка изображений в галерее (полноэкранное изображение)
const galleryImages = document.querySelectorAll('.gallery img');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup-image');
const closeButton = document.querySelector('.popup .close');

// Открытие popup при клике на любое изображение
galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    popup.style.display = 'flex'; // Показать popup
    popupImage.src = img.src;    // Установить источник изображения
  });
});

// Закрытие popup при клике на кнопку "закрыть"
closeButton.addEventListener('click', () => {
  popup.style.display = 'none'; // Скрыть popup
});

// Закрытие popup при клике на темный фон (но не на изображение)
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
