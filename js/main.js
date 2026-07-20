// Mobile navigation toggle
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if (menuToggle && mobileNav) {
  const openIcon = menuToggle.querySelector('[data-icon="menu"]');
  const closeIcon = menuToggle.querySelector('[data-icon="x"]');
  closeIcon.style.display = "none";

  menuToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    openIcon.style.display = open ? "none" : "";
    closeIcon.style.display = open ? "" : "none";
  });
}

// Contact form: show a confirmation message instead of navigating
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const success = document.createElement("p");
    success.className = "form-success";
    success.textContent =
      "Thanks for reaching out — our team will respond within 24 business hours.";
    contactForm.replaceWith(success);
  });
}

// Current year in the footer
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
