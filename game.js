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
  const maxAttempts = 3;

  // Tableau d'indices générés pour le mot courant.
  let hints = [];

  /**
   * Sélectionne un mot aléatoirement dans la liste des mots et
   * initialise l'affichage.
   */
  function initGame() {
    // Tirage aléatoire d'un mot
    const index = Math.floor(Math.random() * words.length);
    targetWord = words[index];
    attempts = 0;
    // Générer des indices si le mot est défini
    hints = [];
    if (targetWord && targetWord.mot) {
      const mot = targetWord.mot;
      // Indice 1 : la première lettre
      hints.push(`Le mot commence par : ${mot.charAt(0).toUpperCase()}`);
      // Indice 2 : le nombre de lettres
      hints.push(`Le mot contient ${mot.length} lettres`);
      // Indice 3 : la dernière lettre
      hints.push(`Le mot se termine par : ${mot.charAt(mot.length - 1).toUpperCase()}`);
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
      return;
    }
    if (attempts >= maxAttempts) {
      // Masquer le bouton Valider et afficher Révéler
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

  document.addEventListener('DOMContentLoaded', () => {
    // Initialiser le jeu
    initGame();
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