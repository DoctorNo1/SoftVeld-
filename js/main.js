// Scroll-reveal animations for [data-reveal] / [data-reveal-group] elements.
// html.js-ready (set inline in <head>, before paint) is what actually
// hides them via CSS - if this script fails to load, or the browser
// prefers reduced motion, the CSS falls back to fully visible content.
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const revealTargets = document.querySelectorAll(
    "[data-reveal], [data-reveal-group]"
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));
}

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

// Contact form: submit to Web3Forms so messages actually get delivered
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const submitLabel = submitButton.innerHTML;

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    contactForm.querySelector(".form-error")?.remove();
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm))),
      });
      const result = await response.json();

      if (result.success) {
        const success = document.createElement("p");
        success.className = "form-success";
        success.textContent =
          "Thanks for reaching out — our team will respond within 24 business hours.";
        contactForm.replaceWith(success);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch {
      const error = document.createElement("p");
      error.className = "form-error";
      error.textContent =
        "Something went wrong sending your message. Please try again in a moment.";
      submitButton.insertAdjacentElement("afterend", error);
      submitButton.disabled = false;
      submitButton.innerHTML = submitLabel;
    }
  });
}

// Current year in the footer
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
