async function loadTemplate(selector, url) {
  const response = await fetch(url);
  const content = await response.text();
  document.querySelector(selector).innerHTML = content;
}

document.addEventListener("DOMContentLoaded", () => {
  loadTemplate('#header-placeholder', 'header.html');
  loadTemplate('#footer-placeholder', 'footer.html');
});

function updateLayout() {
  const newsItems = document.querySelectorAll('#news-container .news-small');
  const rightCol = document.querySelector('.col-md-4');
  let maxVisible = 5;
  let marginTop = '40px';

  const width = window.innerWidth;

  if (width < 768) {
    maxVisible = 2;
  } else if (width >= 768 && width < 992) {
    maxVisible = 3;
    marginTop = '80px';
  } else if (width >= 992 && width < 1200) {
    maxVisible = 4;
  }

  newsItems.forEach((item, index) => {
    item.style.display = index < maxVisible ? 'block' : 'none';
  });

  if (rightCol) {
    rightCol.style.marginTop = marginTop;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.getElementById("likeBtn");
  const dislikeBtn = document.getElementById("dislikeBtn");
  const likeCountEl = document.getElementById("likeCount");
  const dislikeCountEl = document.getElementById("dislikeCount");

  let liked = localStorage.getItem("liked") === "true";
  let disliked = localStorage.getItem("disliked") === "true";

  let likeCount = parseInt(localStorage.getItem("likeCount")) || 0;
  let dislikeCount = parseInt(localStorage.getItem("dislikeCount")) || 0;

  likeCountEl.textContent = likeCount;
  dislikeCountEl.textContent = dislikeCount;

  function updateLikeButtonState() {
    likeBtn.classList.toggle("btn-primary", liked);
    likeBtn.classList.toggle("btn-outline-primary", !liked);
  }

  function updateDislikeButtonState() {
    dislikeBtn.classList.toggle("btn-danger", disliked);
    dislikeBtn.classList.toggle("btn-outline-danger", !disliked);
  }

  updateLikeButtonState();
  updateDislikeButtonState();

  likeBtn.addEventListener("click", () => {
    liked = !liked;
    likeCount += liked ? 1 : -1;
    localStorage.setItem("liked", liked);
    localStorage.setItem("likeCount", likeCount);
    likeCountEl.textContent = likeCount;
    updateLikeButtonState();
  });

  dislikeBtn.addEventListener("click", () => {
    disliked = !disliked;
    dislikeCount += disliked ? 1 : -1;
    localStorage.setItem("disliked", disliked);
    localStorage.setItem("dislikeCount", dislikeCount);
    dislikeCountEl.textContent = dislikeCount;
    updateDislikeButtonState();
  });
});

window.addEventListener('DOMContentLoaded', updateLayout);
window.addEventListener('resize', updateLayout);
