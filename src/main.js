function updateLayout() {
  const newsItems = document.querySelectorAll('#news-container .news-small');
  const rightCol = document.querySelector('.col-md-4');
  let maxVisible = 5;
  let marginTop = '40px';

  const width = window.innerWidth;

  if (width < 992) {
    maxVisible = 3;
    marginTop = '80px';
  } else if (width >= 992 && width < 1200) {
    maxVisible = 4;
    marginTop = '40px';
  } else {
    maxVisible = 5;
    marginTop = '40px';
  }

  newsItems.forEach((item, index) => {
    item.style.display = index < maxVisible ? 'block' : 'none';
  });

  if (rightCol) {
    rightCol.style.marginTop = marginTop;
  }
}

// Обновляем при загрузке и изменении размера окна
window.addEventListener('DOMContentLoaded', updateLayout);
window.addEventListener('resize', updateLayout);