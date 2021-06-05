document.querySelector("html").dataset.theme = `theme-light`;

function switchTheme(theme) {
  document.querySelector("html").dataset.theme = `theme-${theme}`;
}