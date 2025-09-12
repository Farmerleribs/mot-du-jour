/*
 * Collection de fonctions pour gérer l'affichage des mots du jour.
 *
 * La liste des mots (tableau `words`) n'est plus définie dans ce fichier
 * afin d'alléger sa taille et de permettre d'inclure aisément plusieurs
 * centaines de termes. Elle est désormais fournie par le module
 * `words_data.js`, chargé séparément dans les pages HTML. Ce fichier
 * conserve les fonctions utilitaires qui calculent l'indice du mot en
 * fonction de la date, formattent les dates en français, rendent le
 * contenu à l'écran et devinent la catégorie grammaticale des mots.
 */

/**
 * Calcule l'indice du mot à afficher pour une date donnée.
 * On utilise le numéro du jour dans l'année (commençant à 0) pour
 * parcourir cycliquement la liste des mots.
 *
 * @param {Date} date Une date JavaScript
 * @returns {number} L'indice dans le tableau words
 */
function getWordIndexForDate(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const dayInMs = 24 * 60 * 60 * 1000;
  const diff = date - startOfYear;
  const dayNumber = Math.floor(diff / dayInMs);
  return dayNumber % words.length;
}

/**
 * Formate une date en français dans un style long (ex : lundi 2 septembre 2025).
 *
 * @param {Date} date Une date JavaScript
 * @returns {string} La date formatée
 */
function formatFrenchDate(date) {
  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Met à jour le contenu de la page avec le mot correspondant à la date fournie.
 *
 * @param {Date} date La date de référence
 */
function renderWord(date) {
  const index = getWordIndexForDate(date);
  const item = words[index];
  const wordElem = document.getElementById('word');
  const defElem = document.getElementById('definition');
  const examplesElem = document.getElementById('examples');
  const dateElem = document.getElementById('date');
  const grammarElem = document.getElementById('grammar');
  const phoneticElem = document.getElementById('phonetic');
  const synonymsElem = document.getElementById('synonyms');

  if (!wordElem || !defElem || !examplesElem || !dateElem) return;

  wordElem.textContent = item.mot;
  defElem.textContent = item.definition;
  // vider puis remplir la liste des exemples
  examplesElem.innerHTML = '';
  item.exemples.forEach((ex) => {
    const li = document.createElement('li');
    li.textContent = ex;
    examplesElem.appendChild(li);
  });
  // Afficher la catégorie grammaticale (genre/type) si disponible ou tenter de la deviner
  if (grammarElem) {
    let categorie;
    // Utiliser la propriété definie dans l'objet s'il y en a une
    if (item.categorie) {
      categorie = item.categorie;
    } else {
      // Sinon essayer de deviner à partir du mot
      categorie = determineCategory(item.mot);
    }
    grammarElem.textContent = categorie || '';
  }
  dateElem.textContent = formatFrenchDate(date);

  // Afficher la prononciation phonétique si disponible
  if (phoneticElem) {
    if (item.prononciation) {
      phoneticElem.style.display = 'block';
      phoneticElem.textContent = item.prononciation;
    } else {
      phoneticElem.style.display = 'none';
    }
  }

  // Afficher les synonymes s'ils existent
  if (synonymsElem) {
    synonymsElem.innerHTML = '';
    if (Array.isArray(item.synonymes) && item.synonymes.length > 0) {
      item.synonymes.forEach((syn) => {
        const span = document.createElement('span');
        span.className = 'syn-tag';
        span.textContent = syn;
        synonymsElem.appendChild(span);
      });
    } else {
      // Aucun synonyme défini : ne rien afficher
    }
  }
}

/**
 * Tente de deviner la catégorie grammaticale (nom masculin/féminin, adjectif, verbe)
 * à partir de la terminaison du mot.
 * Cette méthode est approximative et vise simplement à fournir une indication.
 *
 * @param {string} mot Le mot dont on veut deviner le genre ou la catégorie
 * @returns {string} Une chaîne décrivant la catégorie (Nom masculin/féminin, adjectif ou verbe).
 */
function determineCategory(mot) {
  if (!mot) return '';
  const w = mot.toLowerCase();
  // Terminaisons courantes des noms féminins en français
  const femEndings = ['tion', 'sion', 'té', 'ie', 'ure', 'ence', 'ance', 'ude', 'ade', 'ode', 'ise', 'esse', 'eur'];
  // Terminaisons courantes des noms masculins
  const mascEndings = ['isme', 'ment', 'teur', 'age', 'oir', 'on', 'eau'];
  // Terminaisons courantes des adjectifs
  const adjEndings = ['eux', 'euse', 'able', 'ible', 'ique', 'iste', 'ile', 'if', 'ive', 'aire', 'ant', 'ent', 'in', 'ien', 'ienne'];
  // Verbes à l'infinitif
  const verbEndings = ['er', 'ir', 're', 'oir'];
  // Vérifier les suffixes des verbes en premier
  for (const suffix of verbEndings) {
    if (w.endsWith(suffix)) {
      return 'Verbe';
    }
  }
  // Puis les adjectifs
  for (const suffix of adjEndings) {
    if (w.endsWith(suffix)) {
      return 'Adjectif';
    }
  }
  // Puis les noms féminins
  for (const suffix of femEndings) {
    if (w.endsWith(suffix)) {
      return 'Nom féminin';
    }
  }
  // Puis les noms masculins
  for (const suffix of mascEndings) {
    if (w.endsWith(suffix)) {
      return 'Nom masculin';
    }
  }
  // Par défaut, retourner 'Nom'
  return 'Nom';
}