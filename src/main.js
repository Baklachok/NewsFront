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

document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.getElementById("likeBtn");
  const dislikeBtn = document.getElementById("dislikeBtn");
  const likeCountEl = document.getElementById("likeCount");
  const dislikeCountEl = document.getElementById("dislikeCount");

  let liked = localStorage.getItem("liked") === "true";
  let disliked = localStorage.getItem("disliked") === "true";

  let likeCount = parseInt(localStorage.getItem("likeCount"), 10) || 0;
  let dislikeCount = parseInt(localStorage.getItem("dislikeCount"), 10) || 0;

  likeCountEl.textContent = likeCount;
  dislikeCountEl.textContent = dislikeCount;

  if (liked) {
    likeBtn.classList.remove("btn-outline-primary");
    likeBtn.classList.add("btn-primary");
  } else {
    likeBtn.classList.remove("btn-primary");
    likeBtn.classList.add("btn-outline-primary");
  }

  if (disliked) {
    dislikeBtn.classList.remove("btn-outline-danger");
    dislikeBtn.classList.add("btn-danger");
  } else {
    dislikeBtn.classList.remove("btn-danger");
    dislikeBtn.classList.add("btn-outline-danger");
  }

  likeBtn.addEventListener("click", () => {
    if (!liked) {
      likeCount++;
      liked = true;
    } else {
      likeCount--;
      liked = false;
    }
    if (liked) {
      likeBtn.classList.remove("btn-outline-primary");
      likeBtn.classList.add("btn-primary");
    } else {
      likeBtn.classList.remove("btn-primary");
      likeBtn.classList.add("btn-outline-primary");
    }
    likeCountEl.textContent = likeCount;
    localStorage.setItem("likeCount", likeCount);
    localStorage.setItem("liked", liked);
  });

  dislikeBtn.addEventListener("click", () => {
    if (!disliked) {
      dislikeCount++;
      disliked = true;
    } else {
      dislikeCount--;
      disliked = false;
    }
    if (disliked) {
      dislikeBtn.classList.remove("btn-outline-danger");
      dislikeBtn.classList.add("btn-danger");
    } else {
      dislikeBtn.classList.remove("btn-danger");
      dislikeBtn.classList.add("btn-outline-danger");
    }
    dislikeCountEl.textContent = dislikeCount;
    localStorage.setItem("dislikeCount", dislikeCount);
    localStorage.setItem("disliked", disliked);
  });
});

window.addEventListener('DOMContentLoaded', updateLayout);
window.addEventListener('resize', updateLayout);