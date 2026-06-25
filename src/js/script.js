let lightmode = localStorage.getItem(".light-mode");
const themeSwitcher = document.querySelector(".theme-btn");
const images = document.querySelectorAll(".theme-image");

const enableLightmode = () => {
  document.body.classList.add("light-mode");
  localStorage.setItem("light-mode", "active");
};

if (lightmode === "active") enableLightmode();

updateThemeImages(lightmode === "active");

const disableLightmode = () => {
  document.body.classList.remove("light-mode");
  localStorage.setItem("light-mode", null);
};

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

function updateThemeImages(isLight) {
  images.forEach(img => {
    img.src = isLight ? img.dataset.light : img.dataset.dark;
  });
}