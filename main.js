const button = document.getElementById("toggleTheme");
  const body = document.body;

  button.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    button.textContent = body.classList.contains("dark-mode") ? "☀️ Modo claro" : "🌙 Modo oscuro";
  });


  const sections = document.querySelectorAll('section');

  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, options);

  sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });

  