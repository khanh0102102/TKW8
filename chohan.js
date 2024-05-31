// slider-----------------------------------
let list = document.querySelector(".slider .list");
let item = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.querySelector(".slider .buttons .prev");
let next = document.querySelector(".slider .buttons .next");
let list1 = document.querySelector(".anh .list1");
let item1 = document.querySelectorAll(".anh .list1 .item");

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
  let item1Width = item1[active].offsetWidth;
  list.style.left = -itemWidth * active + "px";
  list1.style.left = -item1Width * active + "px";

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

//infomation----------------------------
document.addEventListener("DOMContentLoaded", function () {
  const link = document.querySelector(".content a");
  const info = document.querySelector(".infomation");

  link.addEventListener("mouseover", function () {
    info.style.display = "block";
  });

  link.addEventListener("mouseout", function () {
    info.style.display = "none";
  });
});

// feedback----------------------------------
let listfeedback = document.querySelector(".feedback .list-feedback");
let item3 = document.querySelectorAll(".feedback .list-feedback .item ");
let prev1 = document.querySelector(".feedback .buttonss .prev1");
let next1 = document.querySelector(".feedback .buttonss .next1");

let active1 = 0;
let lengthitem1 = item3.length - 1;

// Ẩn nút prev khi lần đầu tiên vào trang web
prev1.style.display = "none";

next1.onclick = function () {
  if (active1 < lengthitem1) {
    active1++;
    prev1.style.display = "block"; // Hiển thị nút prev khi nhấn nút next
    reloadSlider1();
  }
  // Kiểm tra nếu đến phần tử cuối cùng, ẩn nút next
  if (active1 === lengthitem1) {
    next1.style.display = "none";
  }
};

prev1.onclick = function () {
  if (active1 > 0) {
    active1--;
    next1.style.display = "block"; // Hiển thị lại nút next khi nhấn nút prev
    reloadSlider1();
  }
  // Kiểm tra nếu đang ở phần đầu tiên, ẩn nút prev
  if (active1 === 0) {
    prev1.style.display = "none";
  }
};

function reloadSlider1() {
  let itemWidth1 = item3[active1].offsetWidth;
  listfeedback.style.left = -itemWidth1 * active1 + "px";

  // Kiểm tra nếu đang ở vị trí đầu tiên, ẩn nút prev
  if (active1 === 0) {
    prev1.style.display = "none";
  }
}

let listimg = document.querySelector(".slider-img .list-item");
let item4 = document.querySelectorAll(".slider-img .list-item .item");
let prev2 = document.querySelector(".xuhuong .buttonsss .prev2");
let next2 = document.querySelector(".xuhuong .buttonsss .next2");

let active2 = 0;
let lengthitem2 = item4.length - 1;

// Ẩn nút prev khi lần đầu tiên vào trang web
prev2.style.display = "none";

next2.onclick = function () {
  if (active2 < lengthitem2) {
    active2++;
    prev2.style.display = "block"; // Hiển thị nút prev khi nhấn nút next
    reloadSlider2();
  }
  // Kiểm tra nếu đến phần tử cuối cùng, ẩn nút next
  if (active2 === lengthitem2) {
    next2.style.display = "none";
  }
};

prev2.onclick = function () {
  if (active2 > 0) {
    active2--;
    next2.style.display = "block"; // Hiển thị lại nút next khi nhấn nút prev
    reloadSlider2();
  }
  // Kiểm tra nếu đang ở phần đầu tiên, ẩn nút prev
  if (active2 === 0) {
    prev2.style.display = "none";
  }
};

function reloadSlider2() {
  let itemWidth2 = item4[active2].offsetWidth;
  listimg.style.left = -itemWidth2 * active2 + "px";

  // Kiểm tra nếu đang ở vị trí đầu tiên, ẩn nút prev
  if (active2 === 0) {
    prev2.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const xuhuong = document.querySelector(".xuhuong");
  const content1 = document.querySelector(".xuhuong .content1");
  const xemthem = document.querySelector(".xuhuong .xemthem");
  const xemithon = document.querySelector(".xuhuong .xemithon");

  xemthem.addEventListener("click", function () {
    content1.style.height = "max-content";
    xemthem.style.display = "none";
    xemithon.style.display = "block";
    xuhuong.style.height = "500px";
  });

  xemithon.addEventListener("click", function () {
    content1.style.height = "135px"; // hoặc giá trị bạn muốn
    xemithon.style.display = "none";
    xemthem.style.display = "block";
    xuhuong.style.height = "350px";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const thongtinDivs = document.querySelectorAll(".thongtin div");

  thongtinDivs.forEach(function (div) {
    const upIcon = div.querySelector(".fa-chevron-up");
    const downIcon = div.querySelector(".fa-chevron-down");

    // Ẩn icon .down ban đầu
    downIcon.style.display = "none";

    div.addEventListener("click", function () {
      // Nếu chiều cao của div là scrollHeight hoặc max-content, đặt lại thành 62px và hiển thị icon .up
      if (
        this.style.height === `${this.scrollHeight}px` ||
        this.style.height === "max-content"
      ) {
        this.style.height = "62px";
        upIcon.style.display = "block";
        downIcon.style.display = "none";
      } else {
        // Nếu không, đặt chiều cao của div được click là scrollHeight và hiển thị icon .down
        this.style.height = `${this.scrollHeight}px`;

        // Ẩn icon .up và hiển thị icon .down của các div khác
        thongtinDivs.forEach(function (otherDiv) {
          if (otherDiv !== div) {
            otherDiv.style.height = "62px";
            otherDiv.querySelector(".fa-chevron-up").style.display = "block";
            otherDiv.querySelector(".fa-chevron-down").style.display = "none";
          }
        });

        // Hiển thị icon .down và ẩn icon .up của div được click
        upIcon.style.display = "none";
        downIcon.style.display = "block";
      }
    });
  });
});
