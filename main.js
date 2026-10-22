
"use strict";

// 1. Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 2. Light / dark theme toggle
const themeButton = document.getElementById("theme-toggle");

if (themeButton) {
  themeButton.addEventListener("click", () => {
    // Toggle the CSS class defined in style.css
    const isLight = document.body.classList.toggle("light-theme");

    // Update the button icon and accessibility label
    themeButton.textContent = isLight ? "🌙" : "☀";
    themeButton.setAttribute(
      "aria-label",
      isLight ? "Switch to dark theme" : "Switch to light theme"
    );
  });
}

// 3. Highlight the active navigation link
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${entry.target.id}`;

        link.style.color = isActive ? "var(--accent)" : "";
        link.style.fontWeight = isActive ? "bold" : "";
      });
    });
  },
  {
    rootMargin: "-20% 0px -55% 0px",
    threshold: 0
  }
);

sections.forEach((section) => observer.observe(section));
