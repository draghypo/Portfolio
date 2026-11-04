// Mobile menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuBtn.querySelector("i");

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuIcon.className = open ? "ri-close-line" : "ri-menu-line";
}
menuBtn.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
navLinks.addEventListener("click", () => setMenu(false));

// Contact form: opens the visitor's email app with the message filled in
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const subject = encodeURIComponent("Portfolio message from " + data.get("name"));
  const body = encodeURIComponent(data.get("message") + "\n\nFrom: " + data.get("name") + " (" + data.get("email") + ")");
  window.location.href = "mailto:sadique.alam2023@gmail.com?subject=" + subject + "&body=" + body;
});
