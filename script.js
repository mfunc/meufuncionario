// O site institucional usa links diretos para a plataforma.
// Este script adiciona uma pequena animação de entrada sem interferir no redirecionamento.

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".hero-copy, .hero-visual, .feature, .cta").forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = `opacity .65s ease ${i * 70}ms, transform .65s ease ${i * 70}ms`;
    requestAnimationFrame(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  });
});
