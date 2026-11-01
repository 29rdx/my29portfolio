// Smoke test for portfolio elements
function validateLayout() {
  const elements = ['#hero', '#terminal', '#projects', '#skills', '#contact'];
  return elements.every(sel => document.querySelector(sel) !== null);
}
