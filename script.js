/* =================================================
   NAYA — script.js
   ================================================= */

(function () {
  "use strict";

  /* ---------------------------------------------
     1. Menu burger (mobile)
     --------------------------------------------- */
  const burger = document.querySelector(".nav-burger");
  const menu = document.getElementById("main-nav");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      const isOpen = menu.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 1023px)").matches) {
          menu.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  /* ---------------------------------------------
     2. Formulaire de préinscription (Mailchimp)
     --------------------------------------------- */
  const form = document.querySelector(".signup-form");

  if (form) {
    const input = form.querySelector('input[type="email"]');
    const feedback = form.querySelector(".signup-feedback");

    form.addEventListener("submit", function (e) {
      const value = (input.value || "").trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Validation côté client AVANT l'envoi vers Mailchimp
      if (!value) {
        e.preventDefault();
        feedback.textContent = "Merci de renseigner votre adresse e-mail.";
        feedback.style.color = "#925E78";
        return;
      }

      if (!emailRegex.test(value)) {
        e.preventDefault();
        feedback.textContent = "L'adresse e-mail ne semble pas valide.";
        feedback.style.color = "#925E78";
        return;
      }

      // Email valide : on laisse le formulaire partir vers Mailchimp
      feedback.textContent =
        "Merci ! Vérifiez votre boîte mail pour confirmer votre inscription. 🌸";
      feedback.style.color = "#12263A";
    });
  }
})();
