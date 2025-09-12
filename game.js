/*
 * Script pour la page de jeu. Ce module sélectionne un mot au hasard
 * parmi la collection « words » définie dans words.js, affiche sa
 * définition et permet à l'utilisateur de deviner le mot en trois
 * tentatives. Si les essais sont épuisés, un bouton permet de
 * révéler le mot. Les champs et boutons sont désactivés une fois
 * le mot deviné ou révélé.
 */

(() => {
  let targetWord = null;
  let attempts = 0;
  // Le nombre maximum de tentatives est désormais ajustable selon le niveau de difficulté
  let maxAttempts = 4;

  // Niveau de difficulté actuel ('facile', 'moyen' ou 'difficile')
  let currentDifficulty = 'moyen';

  /**
   * Filtre les mots en fonction de la difficulté choisie. La difficulté est déterminée
   * par la longueur du mot :
   *  - Facile : mots courts (7 lettres ou moins)
   *  - Moyen : mots de longueur moyenne (entre 8 et 11 lettres)
   *  - Difficile : mots longs (12 lettres ou plus)
   * Si aucun mot ne correspond, renvoie l'ensemble complet.
   *
   * @param {string} difficulty Niveau de difficulté ('facile', 'moyen', 'difficile')
   * @returns {Array} Tableau de mots filtré selon la difficulté
   */
  function filterWordsByDifficulty(difficulty) {
    if (!Array.isArray(words) || words.length === 0) return [];
    let pool = [];
    if (difficulty === 'facile') {
      pool = words.filter((item) => item.mot && item.mot.length <= 7);
    } else if (difficulty === 'moyen') {
      pool = words.filter((item) => item.mot && item.mot.length > 7 && item.mot.length <= 11);
    } else if (difficulty === 'difficile') {
      pool = words.filter((item) => item.mot && item.mot.length > 11);
    }
    return pool.length > 0 ? pool : words;
  }

  // Tableau d'indices générés pour le mot courant.
  let hints = [];

  /**
   * Sélectionne un mot aléatoirement dans la liste des mots et
   * initialise l'affichage.
   */
  function initGame() {
    // Sélectionner la liste de mots selon le niveau de difficulté actuel
    const wordPool = filterWordsByDifficulty(currentDifficulty);
    // Tirage aléatoire d'un mot dans ce sous-ensemble
    const index = Math.floor(Math.random() * wordPool.length);
    targetWord = wordPool[index];
    attempts = 0;
    // Définir le nombre maximum de tentatives en fonction du niveau
    if (currentDifficulty === 'facile') {
      maxAttempts = 6;
    } else if (currentDifficulty === 'moyen') {
      maxAttempts = 4;
    } else {
      maxAttempts = 3;
    }
    // Générer des indices si le mot est défini
    hints = [];
    if (targetWord && targetWord.mot) {
      const mot = targetWord.mot;
      // Préparer une liste d'indices variés sur le mot lui-même
      const candidateHints = [];
      // Catégorie grammaticale si disponible
      if (targetWord.categorie) {
        candidateHints.push(`Il s’agit d’un ${targetWord.categorie.toLowerCase()}`);
      } else {
        if (typeof determineCategory === 'function') {
          const cat = determineCategory(mot);
          candidateHints.push(`Il s’agit d’un ${cat.toLowerCase()}`);
        }
      }
      // Première lettre
      candidateHints.push(`La première lettre est : ${mot.charAt(0).toUpperCase()}`);
      // Dernière lettre
      candidateHints.push(`La dernière lettre est : ${mot.charAt(mot.length - 1).toUpperCase()}`);
      // Nombre de lettres
      candidateHints.push(`Il contient ${mot.length} lettres`);
      // Indice extrait de la définition : première phrase sans le mot lui-même
      if (targetWord.definition) {
        const phrase = targetWord.definition.split('. ')[0];
        const cleaned = phrase.replace(new RegExp(mot, 'gi'), '').trim();
        if (cleaned && cleaned.length > 10) {
          candidateHints.push(cleaned.charAt(0).toUpperCase() + cleaned.slice(1));
        }
      }
      // Mélanger les indices et en prendre un nombre égal au nombre de tentatives autorisées
      candidateHints.sort(() => Math.random() - 0.5);
      hints = candidateHints.slice(0, maxAttempts);
    }
    // Mettre à jour la définition
    const definitionElem = document.getElementById('game-definition');
    if (definitionElem) {
      definitionElem.textContent = targetWord.definition;
    }
    // Réinitialiser les champs
    const input = document.getElementById('game-guess');
    const feedback = document.getElementById('game-feedback');
    const hintElem = document.getElementById('game-hint');
    const revealBtn = document.getElementById('reveal-btn');
    const revealedWord = document.getElementById('revealed-word');
    if (input) input.value = '';
    if (feedback) feedback.textContent = '';
    // Réinitialiser l'indice
    if (hintElem) {
      hintElem.textContent = '';
      hintElem.style.display = 'none';
    }
    // Cacher et réinitialiser le bouton Révéler et le mot
    if (revealBtn) revealBtn.style.display = 'none';
    if (revealBtn) revealBtn.disabled = false;
    if (revealedWord) {
      revealedWord.style.display = 'none';
      revealedWord.textContent = '';
    }
    // Activer l'input et le bouton Valider
    const guessBtn = document.getElementById('guess-btn');
    if (input) input.disabled = false;
    if (guessBtn) guessBtn.disabled = false;
  }

  /**
   * Traite la tentative de l'utilisateur et met à jour l'interface.
   */
  function handleGuess() {
    const input = document.getElementById('game-guess');
    const feedback = document.getElementById('game-feedback');
    const hintElem = document.getElementById('game-hint');
    if (!input || !feedback || !targetWord) return;
    const userGuess = input.value.trim().toLowerCase();
    // Si l'entrée est vide, ne rien faire
    if (userGuess === '') {
      feedback.textContent = 'Veuillez entrer un mot.';
      return;
    }
    attempts += 1;
    if (userGuess === targetWord.mot.toLowerCase()) {
      feedback.textContent = `Bravo ! Vous avez trouvé le mot en ${attempts} tentative${attempts > 1 ? 's' : ''} .`;
      // Désactiver input et boutons
      input.disabled = true;
      const guessBtn = document.getElementById('guess-btn');
      if (guessBtn) guessBtn.disabled = true;
      // Masquer l'indice puisque le mot est trouvé
      if (hintElem) hintElem.style.display = 'none';
      // Animation de succès
      const card = document.querySelector('.game-card');
      if (card) {
        card.classList.remove('shake-animation');
        card.classList.add('success-animation');
        setTimeout(() => {
          card.classList.remove('success-animation');
        }, 1000);
      }
      // Déclencher des particules de succès
      createFallingParticles('success');
      return;
    }
    if (attempts >= maxAttempts) {
      // Masquer le bouton Valider et désactiver l'input
      const guessBtn = document.getElementById('guess-btn');
      if (guessBtn) guessBtn.disabled = true;
      input.disabled = true;
      feedback.textContent = `Dommage ! Vous avez épuisé vos essais.`;
      // Afficher le dernier indice si disponible
      if (hintElem && hints[attempts - 1]) {
        hintElem.textContent = `Indice : ${hints[attempts - 1]}`;
        hintElem.style.display = 'block';
      }
      const revealBtn = document.getElementById('reveal-btn');
      if (revealBtn) revealBtn.style.display = 'inline-block';
      // Déclencher des particules d'erreur après avoir épuisé les essais
      createFallingParticles('error');
      return;
    }
    // Donner un retour temporaire et indiquer le nombre d'essais restants
    const remaining = maxAttempts - attempts;
    feedback.textContent = `Ce n'est pas le mot recherché. Tentatives restantes : ${remaining}.`;
    // Afficher un indice correspondant au nombre d'essais effectués
    if (hintElem && hints[attempts - 1]) {
      hintElem.textContent = `Indice : ${hints[attempts - 1]}`;
      hintElem.style.display = 'block';
    }
    // Animation de vibration en cas d'erreur
    const card = document.querySelector('.game-card');
    if (card) {
      card.classList.remove('success-animation');
      card.classList.remove('shake-animation');
      // Forcer le reflow pour redémarrer l'animation
      void card.offsetWidth;
      card.classList.add('shake-animation');
      setTimeout(() => {
        card.classList.remove('shake-animation');
      }, 600);
    }

    // Déclencher des particules d'erreur pour chaque mauvaise réponse
    createFallingParticles('error');
  }

  /**
   * Révèle le mot recherché lorsque l'utilisateur l'a demandé.
   */
  function revealWord() {
    const revealedWordElem = document.getElementById('revealed-word');
    const revealBtn = document.getElementById('reveal-btn');
    if (!revealedWordElem || !targetWord || !revealBtn) return;
    revealedWordElem.textContent = `Le mot était : ${targetWord.mot}`;
    revealedWordElem.style.display = 'block';
    revealBtn.disabled = true;
  }

  /**
   * Génère des particules qui tombent du haut vers le bas de l'écran.
   * Le paramètre `type` détermine la couleur: 'success' pour succès
   * (accent color) et 'error' pour une mauvaise réponse (rouge).
   * Chaque particule est supprimée après la fin de son animation.
   * @param {'success'|'error'} type
   */
  function createFallingParticles(type) {
    // Augmenter le nombre et la taille des particules pour un effet plus spectaculaire
    const count = 50;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('span');
      particle.classList.add('falling');
      if (type === 'success') {
        particle.classList.add('success');
      } else {
        particle.classList.add('error');
      }
      // Position horizontale aléatoire (0 à 100%)
      particle.style.left = Math.random() * 100 + '%';
      // Durée d'animation aléatoire (entre 2 et 4,5 secondes) pour varier la chute
      const duration = 1.5 + Math.random() * 3;
      particle.style.animationDuration = duration + 's';
      // Taille aléatoire plus grande pour un effet « explosif »
      const size = 0.6 + Math.random() * 1.0; // 0.6 à 1.6 rem
      particle.style.width = size + 'rem';
      particle.style.height = size + 'rem';
      document.body.appendChild(particle);
      // Supprimer l'élément après la fin de l'animation
      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Initialiser le jeu
    initGame();
    // Sélecteur de difficulté : mettre à jour la difficulté et relancer la partie
    const difficultySelect = document.getElementById('difficulty-select');
    if (difficultySelect) {
      // Initialiser la difficulté à la valeur sélectionnée par défaut
      currentDifficulty = difficultySelect.value;
      difficultySelect.addEventListener('change', () => {
        currentDifficulty = difficultySelect.value;
        initGame();
      });
    }
    // Soumettre un essai
    const guessBtn = document.getElementById('guess-btn');
    if (guessBtn) {
      guessBtn.addEventListener('click', handleGuess);
    }
    // Permettre d'appuyer sur Entrée depuis le champ texte
    const input = document.getElementById('game-guess');
    if (input) {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleGuess();
        }
      });
    }
    // Bouton pour révéler le mot
    const revealBtn = document.getElementById('reveal-btn');
    if (revealBtn) {
      revealBtn.addEventListener('click', revealWord);
    }
  });
})();