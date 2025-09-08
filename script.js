// Validation formulaire
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const nom = document.getElementById('nom').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('form-message');

  if (!nom || !email || message.length < 10) {
    feedback.textContent = "Veuillez remplir tous les champs correctement.";
    feedback.style.color = "red";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    feedback.textContent = "Email invalide.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Merci pour votre message !";
  feedback.style.color = "green";
  this.reset();
});

// Thème clair/sombre
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Bouton retour en haut
document.getElementById('scroll-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
