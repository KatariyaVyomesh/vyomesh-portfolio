function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("showing");
}

function toggleDetails(projectElement) {
  projectElement.classList.toggle("active");
}
