/*
 * Conseils quotidiens pour enrichir son vocabulaire et améliorer sa
 * mémoire.  Chaque conseil est formulé de manière simple et peut
 * être utilisé indépendamment du mot du jour.  Le choix du conseil
 * est basé sur la date (jour de l'année) afin d'en afficher un
 * différent chaque jour.
 */

const tips = [
  { tip: "Pour retenir un mot, utilisez‑le dans une phrase personnelle." },
  { tip: "Associez un mot à une image mentale pour le mémoriser plus facilement." },
  { tip: "Répétez le mot plusieurs fois à haute voix pour en ancrer la prononciation." },
  { tip: "Regroupez les mots par thèmes ou familles pour mieux les retenir." },
  { tip: "Créez des cartes mémoire et révisez‑les régulièrement." },
  { tip: "Expliquez la signification d'un mot à quelqu'un d'autre pour vérifier votre compréhension." },
  { tip: "Utilisez des jeux de mots ou des rimes pour vous rappeler l'orthographe et le sens." },
  { tip: "Écrivez le mot à la main : l'écriture favorise la mémorisation." },
  { tip: "Associez chaque nouveau mot à un synonyme déjà connu pour en renforcer l'apprentissage." },
  { tip: "Lisez le mot dans différents contextes pour en saisir toutes les nuances." }
];

/**
 * Calcule l'indice du conseil à afficher pour une date donnée.
 * On utilise le jour dans l'année (commençant à 0) pour sélectionner
 * cycliquement un conseil parmi la liste.
 *
 * @param {Date} date Une date JavaScript
 * @returns {number} L'indice dans le tableau tips
 */
function getTipIndexForDate(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const diff = date.getTime() - startOfYear.getTime();
  const dayNumber = Math.floor(diff / (24 * 60 * 60 * 1000));
  return dayNumber % tips.length;
}

/**
 * Met à jour l'élément d'interface contenant le texte du conseil.
 *
 * @param {Date} date La date pour laquelle on veut afficher un conseil
 */
function renderTip(date) {
  const tipElem = document.getElementById('tip-text');
  if (!tipElem) return;
  const index = getTipIndexForDate(date);
  const item = tips[index];
  tipElem.textContent = item.tip;
}