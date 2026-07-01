let lightmode = localStorage.getItem("light-mode");
const themeSwitcher = document.querySelector(".theme-btn");
const images = document.querySelectorAll(".theme-image");
const menuBtn = document.querySelector(".menu-btn");
const header = document.querySelector("header");
const navLinks = document.querySelector(".nav-links");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
};

const enableLightmode = () => {
  document.body.classList.add("light-mode");
  localStorage.setItem("light-mode", "active");
};

const disableLightmode = () => {
  document.body.classList.remove("light-mode");
  localStorage.setItem("light-mode", "inactive");
};

function updateThemeImages(isLight) {
  images.forEach((img) => {
    img.src = isLight ? img.dataset.light : img.dataset.dark;
  });
}

if (lightmode === "active") {
  enableLightmode();
  updateThemeImages(true);
} else {
  disableLightmode();
  updateThemeImages(false);
}

themeSwitcher.addEventListener("click", () => {
  lightmode = localStorage.getItem("light-mode");

  if (lightmode !== "active") {
    enableLightmode();
    updateThemeImages(true);
  } else {
    disableLightmode();
    updateThemeImages(false);
  }
});

document.addEventListener("click", (e) => {
  const isMenuOpen = header.classList.contains("menu-open");

  if (!isMenuOpen) return;

  if (navLinks.contains(e.target)) return;


  header.classList.remove("menu-open");

}) 

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  header.classList.toggle("menu-open");
});
