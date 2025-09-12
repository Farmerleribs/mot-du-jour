/*
 * Conseils quotidiens pour enrichir son vocabulaire et améliorer sa
 * mémoire.  Chaque conseil est formulé de manière simple et peut
 * être utilisé indépendamment du mot du jour.  Le choix du conseil
 * est basé sur la date (jour de l'année) afin d'en afficher un
 * différent chaque jour.
 */

const tips = [
  // Conseils axés sur l'orthographe et les règles de la langue française
  { tip: "Relisez toujours vos écrits à voix haute pour repérer les fautes d'orthographe et les homophones." },
  { tip: "Vérifiez l'orthographe des mots dans un dictionnaire ou un outil en ligne lorsque vous avez un doute." },
  { tip: "Apprenez progressivement les règles d'accord du participe passé (avec avoir et être) et appliquez-les." },
  { tip: "Décomposez les mots difficiles en syllabes ou en racines pour mémoriser leur orthographe." },
  { tip: "Soyez attentif aux homophones : utilisez des astuces pour distinguer \"a\" et \"à\", \"ver\" et \"vers\", \"son\" et \"sont\", etc." },
  { tip: "Tenez un carnet des mots que vous écrivez mal et notez la règle ou l'astuce qui aide à les corriger." },
  { tip: "Pratiquez régulièrement des dictées ou des exercices d'orthographe pour améliorer votre précision." },
  { tip: "Utilisez des applications ou des jeux de lettres pour renforcer votre maîtrise de l'orthographe au quotidien." },
  { tip: "Familiarisez-vous avec les exceptions courantes aux règles d'orthographe et de grammaire." },
  { tip: "Apprenez les familles de mots : connaître un mot racine vous aide à orthographier ses dérivés." },
  { tip: "Écrivez lentement et attentivement pour laisser le temps à votre cerveau d'appliquer les règles d'orthographe." },
  { tip: "Étudiez l'étymologie des mots : comprendre leur origine facilite souvent la mémorisation de l'orthographe." }
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