/*
 * Collection de mots du jour avec définitions et exemples d'utilisation.
 * Chaque entrée du tableau « words » contient :
 *  - mot : le terme à découvrir
 *  - definition : une explication succincte de son sens
 *  - exemples : un tableau de phrases illustrant son emploi
 *
 * Les mots ont été sélectionnés pour enrichir le vocabulaire et nourrir
 * la curiosité linguistique. Les définitions et exemples sont rédigés
 * spécialement pour cette application et ne proviennent pas d'une source
 * protégée.
 */

const words = [
  {
    mot: 'Résilience',
    definition:
      "Capacité d'une personne ou d'une communauté à surmonter les difficultés et à se reconstruire après un choc.",
    exemples: [
      "Après la tempête, les habitants ont fait preuve de résilience et ont rebâti leurs maisons.",
      "Sa résilience lui a permis de poursuivre ses études malgré les obstacles."
    ]
  },
  {
    mot: 'Éphémère',
    definition: "Qui ne dure ou ne vit que très peu de temps.",
    exemples: [
      "La beauté d'un coucher de soleil est éphémère mais toujours saisissante.",
      "Ils savent que le succès est éphémère si l'on cesse de travailler."
    ]
  },
  {
    mot: 'Perspicace',
    definition:
      "Qui comprend vite et voit clairement les choses ; doté d'un esprit d'analyse pénétrant.",
    exemples: [
      "Grâce à son esprit perspicace, elle a rapidement décelé la faille dans l'argument.",
      "Un professeur perspicace repère les talents cachés de ses élèves."
    ]
  },
  {
    mot: 'Aménité',
    definition:
      "Manière agréable et courtoise d'être en société ; affabilité délicate.",
    exemples: [
      "Il accueillait ses invités avec une aménité qui les mettait tout de suite à l'aise.",
      "Son aménité naturelle faisait de lui un interlocuteur apprécié de tous."
    ]
  },
  {
    mot: 'Sagacité',
    definition:
      "Pénétration d'esprit qui permet de comprendre et de juger rapidement et avec justesse.",
    exemples: [
      "Sa sagacité l'a aidé à résoudre l'énigme avant tout le monde.",
      "Les journalistes comptent sur la sagacité de leurs collègues pour vérifier les informations."
    ]
  },
  {
    mot: 'Volubile',
    definition:
      "Qui parle beaucoup, rapidement et abondamment, parfois au point de fatiguer son auditoire.",
    exemples: [
      "Elle est si volubile qu'il est parfois difficile de placer un mot dans la conversation.",
      "Les commentaires volubiles du présentateur animaient l'émission."
    ]
  },
  {
    mot: 'Mélancolie',
    definition:
      "État de tristesse douce et vague, souvent lié à la nostalgie ou à un sentiment de perte.",
    exemples: [
      "La mélancolie qui se dégageait de sa musique touchait profondément les auditeurs.",
      "Un air de mélancolie planait dans la pièce lorsqu'ils évoquaient leurs souvenirs." 
    ]
  },
  {
    mot: 'Équivoque',
    definition: "Qui peut s'interpréter de plusieurs manières et manque de clarté ; ambigu.",
    exemples: [
      "Sa réponse équivoque laissait planer le doute sur ses intentions.",
      "Il préférait être précis pour éviter toute remarque équivoque."
    ]
  },
  {
    mot: 'Imbroglio',
    definition:
      "Situation confuse où les éléments s'enchevêtrent de manière complexe et difficile à démêler.",
    exemples: [
      "Un imbroglio administratif ralentissait le traitement des dossiers.",
      "Ils ont mis plusieurs semaines à sortir de cet imbroglio financier."
    ]
  },
  {
    mot: 'Intrépidité',
    definition: "Courage à toute épreuve qui ne craint pas le danger ou l'adversité.",
    exemples: [
      "Son intrépidité l'a poussé à explorer des territoires inconnus.",
      "Les premiers secouristes ont fait preuve d'une intrépidité admirable."
    ]
  },
  {
    mot: 'Exaltation',
    definition:
      "État d'enthousiasme intense ou de surexcitation morale pouvant parfois mener à des excès.",
    exemples: [
      "L'exaltation de la foule pendant le concert était palpable.",
      "Il parlait de son projet avec une exaltation communicative."
    ]
  },
  {
    mot: 'Altruisme',
    definition: "Disposition à se soucier et à se dévouer au bien d'autrui de manière désintéressée.",
    exemples: [
      "Son altruisme l'a poussé à consacrer ses vacances à des actions humanitaires.",
      "L'altruisme est une valeur centrale de cette association caritative."
    ]
  },
  {
    mot: 'Désinvolture',
    definition:
      "Attitude ou manière d'être qui dénote une liberté excessive ou une certaine indifférence aux conventions sociales.",
    exemples: [
      "Il répondait aux questions avec une désinvolture déconcertante.",
      "Sa désinvolture face aux critiques étonnait ses collègues."
    ]
  },
  {
    mot: 'Flagornerie',
    definition:
      "Flatterie excessive et intéressée destinée à obtenir des faveurs ou à gagner les bonnes grâces d'autrui.",
    exemples: [
      "La flagornerie de certains courtisans agaçait le roi.",
      "Elle n'appréciait guère la flagornerie de ses interlocuteurs qui espéraient obtenir une promotion."
    ]
  },
  {
    mot: 'Méticuleux',
    definition:
      "Qui témoigne d'un grand souci du détail et d'une grande précision dans son travail ou ses actions.",
    exemples: [
      "Un comptable méticuleux vérifie chaque chiffre avec soin.",
      "Elle était si méticuleuse qu'aucune erreur ne lui échappait."
    ]
  },
  {
    mot: 'Empathie',
    definition:
      "Capacité de comprendre et de partager les sentiments d'autrui, en se mettant à sa place.",
    exemples: [
      "L'empathie est essentielle pour construire des relations de confiance.",
      "Grâce à son empathie, elle savait toujours trouver les mots justes."
    ]
  },
  {
    mot: 'Candeur',
    definition:
      "Qualité de celui qui exprime ses pensées et ses sentiments avec une franchise innocente et sans artifice.",
    exemples: [
      "La candeur de son témoignage a touché l'assistance.",
      "Il parlait avec une candeur désarmante, sans chercher à embellir la vérité."
    ]
  },
  {
    mot: 'Taciturne',
    definition:
      "Qui parle peu, par caractère ou par humeur, et reste généralement silencieux.",
    exemples: [
      "Contrairement à sa sœur volubile, il était plutôt taciturne et réservé.",
      "On le croyait taciturne alors qu'il observait simplement avant de parler."
    ]
  },
  {
    mot: 'Fastidieux',
    definition: "Qui ennuie ou lasse par sa longueur, sa monotonie ou sa difficulté.",
    exemples: [
      "Les démarches administratives étaient fastidieuses mais nécessaires.",
      "Il lui fallait du courage pour achever cette lecture fastidieuse."
    ]
  },
  {
    mot: 'Hédonisme',
    definition:
      "Doctrine morale qui fait du plaisir et de la recherche du bonheur le but essentiel de la vie.",
    exemples: [
      "Son mode de vie reposait sur un hédonisme assumé, sans culpabilité.",
      "L'hédonisme ne consiste pas à tout s'autoriser mais à rechercher une joie durable."
    ]
  },
  {
    mot: 'Laconique',
    definition:
      "Qui s'exprime en peu de mots, parfois de manière sèche ou brève.",
    exemples: [
      "Sa réponse laconique a clos la discussion en quelques secondes.",
      "Il était connu pour ses discours laconiques mais percutants."
    ]
  },
  {
    mot: 'Paradoxe',
    definition:
      "Proposition ou situation qui semble contenir une contradiction, mais qui peut révéler une vérité plus profonde.",
    exemples: [
      "Le paradoxe de ce projet est qu'il est à la fois coûteux et économique à long terme.",
      "Elle aimait les paradoxes qui obligent à penser autrement."
    ]
  },
  {
    mot: 'Prérogative',
    definition:
      "Avantage ou privilège exclusif lié à une fonction, un statut ou une situation particulière.",
    exemples: [
      "Le choix de l'horaire était la prérogative du directeur.",
      "Ils rappelaient que la prérogative de décider revient au conseil."
    ]
  },
  {
    mot: 'Séraphique',
    definition:
      "Qui évoque un ange ou un séraphin ; d'une beauté ou d'une pureté céleste.",
    exemples: [
      "Son sourire séraphique calmait les esprits agités.",
      "La voix séraphique de la chanteuse transportait le public."
    ]
  },
  {
    mot: 'Soliloque',
    definition:
      "Discours d'une personne qui se parle à elle-même, sans interlocuteur.",
    exemples: [
      "Dans cette pièce, le héros s'abandonne à un long soliloque sur sa destinée.",
      "Elle avait l'habitude de faire des soliloques lorsqu'elle réfléchissait."
    ]
  },
  {
    mot: 'Ubiquité',
    definition: "Fait d'être présent en plusieurs lieux au même moment, ou impression que donne une personne très active.",
    exemples: [
      "Son ubiquité sur les réseaux sociaux donnait l'impression qu'il était partout à la fois.",
      "Dans les mythes, certains dieux possédaient le don d'ubiquité."
    ]
  },
  {
    mot: 'Ineffable',
    definition:
      "Qui ne peut être exprimé par des mots tant il est intense ou extraordinaire.",
    exemples: [
      "Une joie ineffable l'envahit à la naissance de sa fille.",
      "Devant le paysage, il éprouva un sentiment ineffable qui le dépassait."
    ]
  },
  {
    mot: 'Onirique',
    definition: "Relatif au rêve, qui a la qualité d'un rêve.",
    exemples: [
      "Le film se déroule dans un univers onirique et poétique.",
      "Elle dessine des paysages oniriques sortis tout droit de son imagination."
    ]
  },
  {
    mot: 'Austérité',
    definition:
      "Rigueur morale ou sociale ; caractère de ce qui est dépourvu d'ornement ou de ce qui impose des restrictions.",
    exemples: [
      "L'austérité de sa chambre reflétait son mode de vie minimaliste.",
      "Les politiques d'austérité économique suscitent souvent des débats."
    ]
  },
  {
    mot: 'Cryptique',
    definition: "Qui est obscur, mystérieux ou difficile à comprendre.",
    exemples: [
      "Le message cryptique laissa tout le monde perplexe.",
      "Son style d'écriture cryptique demande une lecture attentive."
    ]
  },
  {
    mot: 'Éloquence',
    definition:
      "Art ou talent de bien parler et de persuader par la parole ; expression puissante et élégante.",
    exemples: [
      "Son éloquence a captivé l'assemblée pendant des heures.",
      "L'éloquence ne se limite pas aux mots, elle se traduit aussi par la gestuelle."
    ]
  },
  {
    mot: 'Perfidie',
    definition: "Trahison sournoise, duplicité malveillante.",
    exemples: [
      "Il a découvert la perfidie de son associé lorsqu'il était déjà trop tard.",
      "La légende raconte la perfidie de ce personnage qui trahit ses amis."
    ]
  },
  {
    mot: 'Équanimité',
    definition:
      "État d'esprit caractérisé par la sérénité et l'égalité d'humeur, même face aux événements difficiles.",
    exemples: [
      "Elle affrontait les critiques avec une équanimité remarquable.",
      "La méditation aide à développer l'équanimité dans la vie quotidienne."
    ]
  }
];

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
  dateElem.textContent = formatFrenchDate(date);
}