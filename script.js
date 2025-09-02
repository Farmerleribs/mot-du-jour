/*
 * Script principal pour gérer la navigation entre les mots du jour.
 * Ce fichier se charge après la définition des mots dans words.js.
 */

(() => {
  // Date courante utilisée pour parcourir les mots
  let currentDate = new Date();

  /**
   * Rafraîchit l'affichage avec la date actuelle.
   */
  function refresh() {
    renderWord(currentDate);
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
        // Avancer d'un jour
        currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
        refresh();
      });
    }
  });
})();