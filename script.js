// Animasi scroll masuk
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section, .hero");
  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, options);

  sections.forEach(section => {
    section.classList.add("invisible");
    observer.observe(section);
  });
});
    

