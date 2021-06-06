const homePageBackground = document.querySelector(".homepage");
const toggleTheme = document.querySelector(".btn-theme");
const colorPallete = document.querySelector(":root");
let checkTheme;

window.onload = () => {
  checkTheme = localStorage.getItem("theme") || toggleTheme.classList.value;
  if (checkTheme.includes("fas")) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
};

const setDarkTheme = () => {
  toggleTheme.classList.remove("far", "fa-moon");
  toggleTheme.classList.add("fas", "fa-sun");
  colorPallete.style.setProperty("--off-white", "#251e1e");
  colorPallete.style.setProperty("--bg-color", "#160f0f");
  colorPallete.style.setProperty("--font-color", "#FEF2F2");
  colorPallete.style.setProperty("--dark-gray", "#ABAEB4");
  colorPallete.style.setProperty("--primary-color", "#A60808");
  if (homePageBackground) {
    homePageBackground.style.setProperty("background", "#160f0f");
  }
  checkTheme = toggleTheme.classList.value;
};

const setLightTheme = () => {
  toggleTheme.classList.add("far", "fa-moon");
  toggleTheme.classList.remove("fas", "fa-sun");
  colorPallete.style.setProperty("--off-white", "#FEF2F2");
  colorPallete.style.setProperty("--bg-color", "#ffffff");
  colorPallete.style.setProperty("--font-color", "#000000");
  colorPallete.style.setProperty("--dark-gray", "#555b66");
  colorPallete.style.setProperty("--primary-color", "#A60808"); //#DC2626
  if (homePageBackground) {
    homePageBackground.style.setProperty(
      "background",
      `linear-gradient(rgba(255, 255, 255, .9), rgba(255, 255, 255, .9)), url("/images/home-bg.jpg")`
    );
  }

  checkTheme = toggleTheme.classList.value;
};

toggleTheme.addEventListener("click", () => {
  if (checkTheme.includes("far")) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
  localStorage.setItem("theme", checkTheme);
});
