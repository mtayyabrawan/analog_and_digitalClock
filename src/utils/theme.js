export const _themeContainer = document.querySelector("html");

export function setTheme(theme = "system") {
  localStorage.setItem("clockion_site_theme", JSON.stringify(theme));
  _themeContainer.setAttribute("data-theme", theme);
}

export function getLocalTheme() {
  let theme = localStorage.getItem("clockion_site_theme");
  if (!theme) {
    setTheme();
    return "system";
  }
  theme = JSON.parse(theme);
  if (
    typeof theme !== "string" ||
    (theme !== "system" && theme !== "dark" && theme !== "light")
  ) {
    setTheme();
    return "system";
  } else {
    return theme;
  }
}

const theme = getLocalTheme();
_themeContainer.setAttribute("data-theme", theme);
