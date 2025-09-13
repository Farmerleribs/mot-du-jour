/*
 * Script principal pour gérer la navigation entre les mots du jour.
 * Ce fichier se charge après la définition des mots dans words.js.
 */

(() => {
  // Date courante utilisée pour parcourir les mots
  let currentDate = new Date();

  // Date du jour tronquée à minuit pour comparer sans l'heure
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  /**
   * Rafraîchit l'affichage avec la date actuelle.
   */
  function refresh() {
    renderWord(currentDate);
    // Afficher le conseil du jour associé à la date actuelle
    if (typeof renderTip === 'function') {
      renderTip(currentDate);
    }
    // Gestion du fondu en appliquant une classe temporaire
    const card = document.querySelector('.word-card');
    if (card) {
      card.classList.add('fade');
      // Retirer la classe après une courte durée pour revenir à l'état visible
      setTimeout(() => {
        card.classList.remove('fade');
      }, 400);
    }
    // Mise à jour de l'état du bouton "Jour suivant" en fonction de la date du jour
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
      // Calculer la date candidate si l'utilisateur avançait d'un jour
      const candidate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
      nextBtn.disabled = candidate > today;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Premier affichage
    refresh();

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        // Reculer d'un jour (en prenant en compte les fuseaux horaires)
        currentDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
        refresh();
      });
      nextBtn.addEventListener('click', () => {
        // Avancer d'un jour seulement si ce n'est pas dans le futur
        const candidate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
        if (candidate > today) {
          // Ne pas permettre l'accès aux mots du futur
          return;
        }
        currentDate = candidate;
        refresh();
      });
    }
  });
})();

// Masquer l'animation d'introduction après un délai défini, afin que l'effet
// soit perçu comme une entrée en scène et non comme un simple temps de chargement.
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    // Attendre suffisamment longtemps pour laisser l'animation se dérouler
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 2000);
  }
});