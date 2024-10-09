const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const themeSwitcherBtns = document.querySelectorAll(".theme-switcher");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (userTheme === "dark" || (!userTheme && systemTheme)) {
  document.documentElement.classList.add("dark");
  sunIcon.classList.add("hidden");
} else {
  document.documentElement.classList.remove("dark");
  moonIcon.classList.add("hidden");
}

function iconSwitcher(theme) {
  if (theme === "dark") {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else if (theme === "light") {
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
  }
}

themeSwitcherBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.dataset.theme);
    const theme = e.target.dataset.theme;
    switch (theme) {
      case "dark": {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        iconSwitcher("dark");
        break;
      }
      case "light": {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconSwitcher("light");
        break;
      }
      case "system": {
        localStorage.removeItem("theme");
        if (systemTheme) {
          document.documentElement.classList.add("dark");
          iconSwitcher("dark");
        } else {
          document.documentElement.classList.remove("dark");
          iconSwitcher("light");
        }
        break;
      }
      default:
        break;
    }
  });
});
