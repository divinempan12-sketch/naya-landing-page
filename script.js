/* =================================================
   NAYA — script.js
   Responsabilités :
   - ouverture / fermeture du menu mobile (burger)
   - validation légère du formulaire de préinscription
   - fermeture auto du menu au clic sur un lien (mobile)
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

    // Ferme le menu quand on clique sur un lien (mobile)
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        // On ne referme que si le menu est en mode mobile (affiché en overlay)
        if (window.matchMedia("(max-width: 1023px)").matches) {
          menu.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  /* ---------------------------------------------
     2. Formulaire de préinscription
     --------------------------------------------- */
  const form = document.querySelector(".signup-form");

  if (form) {
    const input = form.querySelector('input[type="email"]');
    const feedback = form.querySelector(".signup-feedback");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const value = (input.value || "").trim();

      // Validation simple d'email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!value) {
        feedback.textContent = "Merci de renseigner votre adresse e-mail.";
        feedback.style.color = "#925E78";
        return;
      }

      if (!emailRegex.test(value)) {
        feedback.textContent = "L'adresse e-mail ne semble pas valide.";
        feedback.style.color = "#925E78";
        return;
      }

      // Succès (simulé côté client)
      feedback.textContent =
        "Merci ! Vous êtes bien inscrite à la liste d'attente. 🌸";
      feedback.style.color = "#12263A";
      input.value = "";
    });
  }
})();
