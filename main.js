document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput"); // Đảm bảo phần tử tồn tại
  if (!searchInput) return; // Nếu không tìm thấy phần tử, dừng script

  const placeholderText = "Bạn cần tìm gì?";
  let currentIndex = 0;

  function typePlaceholder() {
    if (currentIndex < placeholderText.length) {
      searchInput.setAttribute(
        "placeholder",
        placeholderText.substring(0, currentIndex + 1)
      );
      currentIndex++;
      setTimeout(typePlaceholder, 100); // Tăng tốc độ gõ chữ (giảm thời gian chờ)
    } else {
      setTimeout(() => {
        currentIndex = 0;
        searchInput.setAttribute("placeholder", "");
        setTimeout(typePlaceholder, 500); // Đợi 0.5 giây trước khi bắt đầu lại
      }, 2000); // Đợi 2 giây trước khi reset
    }
  }

  typePlaceholder();
});
document.addEventListener("DOMContentLoaded", function () {
  const email = document.getElementById("email"); // Đảm bảo phần tử tồn tại
  if (!email) return; // Nếu không tìm thấy phần tử, dừng script

  const placeholderText = "Nhập email của bạn";
  let currentIndex = 0;

  function typePlaceholder() {
    if (currentIndex < placeholderText.length) {
      email.setAttribute(
        "placeholder",
        placeholderText.substring(0, currentIndex + 1)
      );
      currentIndex++;
      setTimeout(typePlaceholder, 100); // Tăng tốc độ gõ chữ (giảm thời gian chờ)
    } else {
      setTimeout(() => {
        currentIndex = 0;
        email.setAttribute("placeholder", "");
        setTimeout(typePlaceholder, 100); // Đợi 0.5 giây trước khi bắt đầu lại
      }, 2000); // Đợi 2 giây trước khi reset
    }
  }

  typePlaceholder();
});

//bạn muốn đi đâu--------
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const headerBot = document.querySelector(".header_bot");
  const toggleButton = document.querySelector(".header_middle .a");
  const toggleButtonIcon = toggleButton.querySelector("i");
  let lastScrollTop = 0;
  let headerBotVisible = false;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      header.style.top = "-150px";
      if (headerBotVisible) {
        headerBot.style.height = "0";
      }
    } else {
      // Scrolling up
      header.style.top = "0";
    }

    lastScrollTop = scrollTop;

    // Adding transition for smooth hide/show effect
    header.style.transition = "top 0.5s";
  });

  toggleButton.addEventListener("click", function (event) {
    event.preventDefault();
    headerBotVisible = !headerBotVisible;
    headerBot.style.height = headerBotVisible ? "315px" : "0";

    // Rotate the toggle button icon 180 degrees
    toggleButtonIcon.style.transform = headerBotVisible
      ? "rotate(180deg)"
      : "rotate(0deg)";
    toggleButtonIcon.style.transition = "transform 0.5s";
  });
});

// slider-----------------------------------
let list = document.querySelector(".slider .list");
let item = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.querySelector(".slider .buttons .prev");
let next = document.querySelector(".slider .buttons .next");

let active = 0;
let lengthitem = item.length - 1;
next.onclick = function () {
  if (active + 1 > lengthitem) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
};
prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthitem;
  } else {
    active = active - 1;
  }
  reloadSlider();
};
let refreshSlider = setInterval(() => {
  next.click();
}, 5000);
function reloadSlider() {
  let itemWidth = item[active].offsetWidth;
  list.style.left = -itemWidth * active + "px";

  let lastActiveDot = document.querySelector(".slider .dots li.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");
  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => {
    next.click();
  }, 5000);
}
dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadSlider();
  });
});
document.querySelector(".prev").addEventListener("click", function () {
  // Thêm class prev-clicked khi click vào nút prev
  this.classList.add("prev-clicked");
});
