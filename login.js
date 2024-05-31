const registerBtn = document.getElementById("register");
const container = document.getElementById("container");
const loginBtn = document.getElementById("login");

// Đảm bảo sự kiện đăng ký và đăng nhập được gắn với các nút đúng cách
document.getElementById("registerBtn").addEventListener("click", () => {
  const password = document.querySelector('input[name="password"]').value;
  const confirmPassword = document.querySelector(
    'input[name="confirmPassword"]'
  ).value;
  const user = document.querySelector('input[name="username"]').value;

  if (password === "" || confirmPassword === "" || user === "") {
    alert("Không để thông tin trống");
  } else if (password === confirmPassword) {
    alert("Đăng ký thành công!");
  } else {
    alert("Mật khẩu không trùng khớp!");
  }
});

document.getElementById("loginBtn").addEventListener("click", () => {
  container.classList.remove("active");
});

// Chuyển đổi giữa các giao diện đăng nhập và đăng ký
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
