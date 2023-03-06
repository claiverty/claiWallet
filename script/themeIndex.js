const btn = document.getElementById("theme-toggle");
const body = document.body;
const iconSun = document.querySelector(".bxs-sun");
const iconMoon = document.querySelector(".bxs-moon");
let isDarkMode = localStorage.getItem("isDarkMode") === "true";

if (isDarkMode) {
  body.classList.add("dark");
  iconSun.style.display = "none";
  iconMoon.style.display = "inline-block";
} else {
  body.classList.remove("dark");
  iconSun.style.display = "inline-block";
  iconMoon.style.display = "none";
}

btn.addEventListener("click", function () {
  isDarkMode = !isDarkMode;
  localStorage.setItem("isDarkMode", isDarkMode);
  body.classList.toggle("dark");
  updateIcon();
});

function updateIcon() {
  if (body.classList.contains("dark")) {
    iconSun.style.display = "none";
    iconMoon.style.display = "inline-block";
  } else {
    iconSun.style.display = "inline-block";
    iconMoon.style.display = "none";
  }
}
