document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Optional: also toggle header if needed
  const header = document.querySelector(".header-top");
  header.classList.toggle("dark-header");

  // Change button icon/text
  const button = this;
  if (document.body.classList.contains("dark-mode")) {
    button.innerHTML = "☀️ Light Mode";
  } else {
    button.innerHTML = "🌙 Dark Mode";
  }
});