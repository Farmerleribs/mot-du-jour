const words = [
  {
    'mot': 'Abscons',
    'definition': 'Terme qui signifie obscur, abstrus ou hermétique.',
    'exemples': [
      'Ce texte est si abscons qu’il semble obscur et abstrus.',
      'Son discours abscons a laissé une impression de obscur.'
    ],
    'synonymes': [
      'obscur',
      'abstrus',
      'hermétique'
    ],
    'prononciation': '[a-b-s-c-o-n-s]'
  },
  {
    'mot': 'Acrimonie',
    'definition': 'Terme qui signifie amertume, aigreur ou rancœur.',
    'exemples': [
      'La acrimonie est souvent associée à amertume et aigreur.',
      'Dans cette situation, la acrimonie reflétait amertume.'
    ],
    'synonymes': [
      'amertume',
      'aigreur',
      'rancœur'
    ],
    'prononciation': '[a-c-r-i-m-o-n-i-e]'
  },
  {
    'mot': 'Ataraxie',
    'definition': 'Terme qui signifie sérénité, imperturbabilité ou calme.',
    'exemples': [
      'La ataraxie est souvent associée à sérénité et imperturbabilité.',
      'Dans cette situation, la ataraxie reflétait sérénité.'
    ],
    'synonymes': [
      'sérénité',
      'imperturbabilité',
      'calme'
    ],
    'prononciation': '[a-t-a-r-a-x-i-e]'
  },
  {
    'mot': 'Béotien',
    'definition': 'Terme qui signifie ignorant, profane ou inexpérimenté.',
    'exemples': [
      'Ce texte est si béotien qu’il semble ignorant et profane.',
      'Son discours béotien a laissé une impression de ignorant.'
    ],
    'synonymes': [
      'ignorant',
      'profane',
      'inexpérimenté'
    ],
    'prononciation': '[b-é-o-t-i-e-n]'
  },
  {
    'mot': 'Caustique',
    'definition': 'Terme qui signifie acerbe, sarcastique ou mordant.',
    'exemples': [
      'Ce texte est si caustique qu’il semble acerbe et sarcastique.',
      'Son discours caustique a laissé une impression de acerbe.'
    ],
    'synonymes': [
      'acerbe',
      'sarcastique',
      'mordant'
    ],
    'prononciation': '[c-a-u-s-t-i-q-u-e]'
  },
  {
    'mot': 'Concupiscence',
    'definition': 'Terme qui signifie luxure, désir ou sensualité.',
    'exemples': [
      'La concupiscence est souvent associée à luxure et désir.',
      'Dans cette situation, la concupiscence reflétait luxure.'
    ],
    'synonymes': [
      'luxure',
      'désir',
      'sensualité'
    ],
    'prononciation': '[c-o-n-c-u-p-i-s-c-e-n-c-e]'
  },
  {
    'mot': 'Dichotomie',
    'definition': 'Terme qui signifie division, clivage ou bipartition.',
    'exemples': [
      'La dichotomie est souvent associée à division et clivage.',
      'Dans cette situation, la dichotomie reflétait division.'
    ],
    'synonymes': [
      'division',
      'clivage',
      'bipartition'
    ],
    'prononciation': '[d-i-c-h-o-t-o-m-i-e]'
  },
  {
    'mot': 'Effluve',
    'definition': 'Terme qui signifie arôme, émanation ou odeur.',
    'exemples': [
      'Ce texte est si effluve qu’il semble arôme et émanation.',
      'Son discours effluve a laissé une impression de arôme.'
    ],
    'synonymes': [
      'arôme',
      'émanation',
      'odeur'
    ],
    'prononciation': '[e-f-f-l-u-v-e]'
  },
  {
    'mot': 'Emphatique',
    'definition': 'Terme qui signifie grandiloquent, ampoulé ou pompeux.',
    'exemples': [
      'Ce texte est si emphatique qu’il semble grandiloquent et ampoulé.',
      'Son discours emphatique a laissé une impression de grandiloquent.'
    ],
    'synonymes': [
      'grandiloquent',
      'ampoulé',
      'pompeux'
    ],
    'prononciation': '[e-m-p-h-a-t-i-q-u-e]'
  },
  {
    'mot': 'Endémique',
    'definition': 'Terme qui signifie permanent, persistant ou habituel.',
    'exemples': [
      'Ce texte est si endémique qu’il semble permanent et persistant.',
      'Son discours endémique a laissé une impression de permanent.'
    ],
    'synonymes': [
      'permanent',
      'persistant',
      'habituel'
    ],
    'prononciation': '[e-n-d-é-m-i-q-u-e]'
  },
  {
    'mot': 'Éphémère',
    'definition': 'Terme qui signifie passager, transitoire ou fugace.',
    'exemples': [
      'Il a décidé de éphémère, montrant ainsi passager et transitoire.',
      'Ils ont dû éphémère pour atteindre passager.'
    ],
    'synonymes': [
      'passager',
      'transitoire',
      'fugace'
    ],
    'prononciation': '[é-p-h-é-m-è-r-e]'
  },
  {
    'mot': 'Épicurien',
    'definition': 'Terme qui signifie hédoniste, jouisseur ou sensuel.',
    'exemples': [
      'Ce texte est si épicurien qu’il semble hédoniste et jouisseur.',
      'Son discours épicurien a laissé une impression de hédoniste.'
    ],
    'synonymes': [
      'hédoniste',
      'jouisseur',
      'sensuel'
    ],
    'prononciation': '[é-p-i-c-u-r-i-e-n]'
  },
  {
    'mot': 'Éponyme',
    'definition': 'Terme qui signifie qui donne son nom, titulaire ou parrain.',
    'exemples': [
      'Ce texte est si éponyme qu’il semble qui donne son nom et titulaire.',
      'Son discours éponyme a laissé une impression de qui donne son nom.'
    ],
    'synonymes': [
      'qui donne son nom',
      'titulaire',
      'parrain'
    ],
    'prononciation': '[é-p-o-n-y-m-e]'
  },
  {
    'mot': 'Ésotérique',
    'definition': 'Terme qui signifie mystique, hermétique ou occultiste.',
    'exemples': [
      'Ce texte est si ésotérique qu’il semble mystique et hermétique.',
      'Son discours ésotérique a laissé une impression de mystique.'
    ],
    'synonymes': [
      'mystique',
      'hermétique',
      'occultiste'
    ],
    'prononciation': '[é-s-o-t-é-r-i-q-u-e]'
  },
  {
    'mot': 'Exutoire',
    'definition': 'Terme qui signifie échappatoire, soupape ou déversoir.',
    'exemples': [
      'Il a décidé de exutoire, montrant ainsi échappatoire et soupape.',
      'Ils ont dû exutoire pour atteindre échappatoire.'
    ],
    'synonymes': [
      'échappatoire',
      'soupape',
      'déversoir'
    ],
    'prononciation': '[e-x-u-t-o-i-r-e]'
  },
  {
    'mot': 'Factieux',
    'definition': 'Terme qui signifie séditieux, rebelle ou agité.',
    'exemples': [
      'Ce texte est si factieux qu’il semble séditieux et rebelle.',
      'Son discours factieux a laissé une impression de séditieux.'
    ],
    'synonymes': [
      'séditieux',
      'rebelle',
      'agité'
    ],
    'prononciation': '[f-a-c-t-i-e-u-x]'
  },
  {
    'mot': 'Fulgurance',
    'definition': 'Terme qui signifie éclair, brillance ou intensité.',
    'exemples': [
      'La fulgurance est souvent associée à éclair et brillance.',
      'Dans cette situation, la fulgurance reflétait éclair.'
    ],
    'synonymes': [
      'éclair',
      'brillance',
      'intensité'
    ],
    'prononciation': '[f-u-l-g-u-r-a-n-c-e]'
  },
  {
    'mot': 'Hégémonie',
    'definition': 'Terme qui signifie domination, suprématie ou ascendant.',
    'exemples': [
      'La hégémonie est souvent associée à domination et suprématie.',
      'Dans cette situation, la hégémonie reflétait domination.'
    ],
    'synonymes': [
      'domination',
      'suprématie',
      'ascendant'
    ],
    'prononciation': '[h-é-g-é-m-o-n-i-e]'
  },
  {
    'mot': 'Heuristique',
    'definition': 'Terme qui signifie méthodique, expérimental ou exploratoire.',
    'exemples': [
      'Ce texte est si heuristique qu’il semble méthodique et expérimental.',
      'Son discours heuristique a laissé une impression de méthodique.'
    ],
    'synonymes': [
      'méthodique',
      'expérimental',
      'exploratoire'
    ],
    'prononciation': '[h-e-u-r-i-s-t-i-q-u-e]'
  },
  {
    'mot': 'Iconoclaste',
    'definition': 'Terme qui signifie anticonformiste, révolutionnaire ou subversif.',
    'exemples': [
      'Ce texte est si iconoclaste qu’il semble anticonformiste et révolutionnaire.',
      'Son discours iconoclaste a laissé une impression de anticonformiste.'
    ],
    'synonymes': [
      'anticonformiste',
      'révolutionnaire',
      'subversif'
    ],
    'prononciation': '[i-c-o-n-o-c-l-a-s-t-e]'
  },
  {
    'mot': 'Idiosyncrasie',
    'definition': 'Terme qui signifie particularité, singularité ou spécificité.',
    'exemples': [
      'La idiosyncrasie est souvent associée à particularité et singularité.',
      'Dans cette situation, la idiosyncrasie reflétait particularité.'
    ],
    'synonymes': [
      'particularité',
      'singularité',
      'spécificité'
    ],
    'prononciation': '[i-d-i-o-s-y-n-c-r-a-s-i-e]'
  },
  {
    'mot': 'Immarcescible',
    'definition': 'Terme qui signifie impérissable, inaltérable ou immortel.',
    'exemples': [
      'Ce texte est si immarcescible qu’il semble impérissable et inaltérable.',
      'Son discours immarcescible a laissé une impression de impérissable.'
    ],
    'synonymes': [
      'impérissable',
      'inaltérable',
      'immortel'
    ],
    'prononciation': '[i-m-m-a-r-c-e-s-c-i-b-l-e]'
  },
  {
    'mot': 'Inchoatif',
    'definition': 'Terme qui signifie initial, commençant ou naissant.',
    'exemples': [
      'Ce texte est si inchoatif qu’il semble initial et commençant.',
      'Son discours inchoatif a laissé une impression de initial.'
    ],
    'synonymes': [
      'initial',
      'commençant',
      'naissant'
    ],
    'prononciation': '[i-n-c-h-o-a-t-i-f]'
  },
  {
    'mot': 'Ineffable',
    'definition': 'Terme qui signifie indescriptible, inexprimable ou inénarrable.',
    'exemples': [
      'Ce texte est si ineffable qu’il semble indescriptible et inexprimable.',
      'Son discours ineffable a laissé une impression de indescriptible.'
    ],
    'synonymes': [
      'indescriptible',
      'inexprimable',
      'inénarrable'
    ],
    'prononciation': '[i-n-e-f-f-a-b-l-e]'
  },
  {
    'mot': 'Ingénu',
    'definition': 'Terme qui signifie candide, naïf ou innocent.',
    'exemples': [
      'Ce texte est si ingénu qu’il semble candide et naïf.',
      'Son discours ingénu a laissé une impression de candide.'
    ],
    'synonymes': [
      'candide',
      'naïf',
      'innocent'
    ],
    'prononciation': '[i-n-g-é-n-u]'
  },
  {
    'mot': 'Insidieux',
    'definition': 'Terme qui signifie sournois, pernicieux ou dangereux.',
    'exemples': [
      'Ce texte est si insidieux qu’il semble sournois et pernicieux.',
      'Son discours insidieux a laissé une impression de sournois.'
    ],
    'synonymes': [
      'sournois',
      'pernicieux',
      'dangereux'
    ],
    'prononciation': '[i-n-s-i-d-i-e-u-x]'
  },
  {
    'mot': 'Invective',
    'definition': 'Terme qui signifie insulte, injure ou outrage.',
    'exemples': [
      'Ce texte est si invective qu’il semble insulte et injure.',
      'Son discours invective a laissé une impression de insulte.'
    ],
    'synonymes': [
      'insulte',
      'injure',
      'outrage'
    ],
    'prononciation': '[i-n-v-e-c-t-i-v-e]'
  },
  {
    'mot': 'Itératif',
    'definition': 'Terme qui signifie répétitif, réitéré ou récurrent.',
    'exemples': [
      'Ce texte est si itératif qu’il semble répétitif et réitéré.',
      'Son discours itératif a laissé une impression de répétitif.'
    ],
    'synonymes': [
      'répétitif',
      'réitéré',
      'récurrent'
    ],
    'prononciation': '[i-t-é-r-a-t-i-f]'
  },
  {
    'mot': 'Laudatif',
    'definition': 'Terme qui signifie élogieux, flatteur ou complimenteur.',
    'exemples': [
      'Ce texte est si laudatif qu’il semble élogieux et flatteur.',
      'Son discours laudatif a laissé une impression de élogieux.'
    ],
    'synonymes': [
      'élogieux',
      'flatteur',
      'complimenteur'
    ],
    'prononciation': '[l-a-u-d-a-t-i-f]'
  },
  {
    'mot': 'Lénifiant',
    'definition': 'Terme qui signifie apaisant, calmant ou adoucissant.',
    'exemples': [
      'Ce texte est si lénifiant qu’il semble apaisant et calmant.',
      'Son discours lénifiant a laissé une impression de apaisant.'
    ],
    'synonymes': [
      'apaisant',
      'calmant',
      'adoucissant'
    ],
    'prononciation': '[l-é-n-i-f-i-a-n-t]'
  },
  {
    'mot': 'Magnanimité',
    'definition': 'Terme qui signifie générosité, clémence ou bienveillance.',
    'exemples': [
      'La magnanimité est souvent associée à générosité et clémence.',
      'Dans cette situation, la magnanimité reflétait générosité.'
    ],
    'synonymes': [
      'générosité',
      'clémence',
      'bienveillance'
    ],
    'prononciation': '[m-a-g-n-a-n-i-m-i-t-é]'
  },
  {
    'mot': 'Manichéen',
    'definition': 'Terme qui signifie dualiste, simpliste ou binaire.',
    'exemples': [
      'Ce texte est si manichéen qu’il semble dualiste et simpliste.',
      'Son discours manichéen a laissé une impression de dualiste.'
    ],
    'synonymes': [
      'dualiste',
      'simpliste',
      'binaire'
    ],
    'prononciation': '[m-a-n-i-c-h-é-e-n]'
  },
  {
    'mot': 'Misanthrope',
    'definition': 'Terme qui signifie asocial, ermite ou insociable.',
    'exemples': [
      'Ce texte est si misanthrope qu’il semble asocial et ermite.',
      'Son discours misanthrope a laissé une impression de asocial.'
    ],
    'synonymes': [
      'asocial',
      'ermite',
      'insociable'
    ],
    'prononciation': '[m-i-s-a-n-t-h-r-o-p-e]'
  },
  {
    'mot': 'Nébuleux',
    'definition': 'Terme qui signifie vague, obscur ou confus.',
    'exemples': [
      'Ce texte est si nébuleux qu’il semble vague et obscur.',
      'Son discours nébuleux a laissé une impression de vague.'
    ],
    'synonymes': [
      'vague',
      'obscur',
      'confus'
    ],
    'prononciation': '[n-é-b-u-l-e-u-x]'
  },
  {
    'mot': 'Néologisme',
    'definition': 'Terme qui signifie mot nouveau, terme inventé ou nouvelle expression.',
    'exemples': [
      'La néologisme est souvent associée à mot nouveau et terme inventé.',
      'Dans cette situation, la néologisme reflétait mot nouveau.'
    ],
    'synonymes': [
      'mot nouveau',
      'terme inventé',
      'nouvelle expression'
    ],
    'prononciation': '[n-é-o-l-o-g-i-s-m-e]'
  },
  {
    'mot': 'Obstination',
    'definition': 'Terme qui signifie entêtement, acharnement ou persévérance.',
    'exemples': [
      'La obstination est souvent associée à entêtement et acharnement.',
      'Dans cette situation, la obstination reflétait entêtement.'
    ],
    'synonymes': [
      'entêtement',
      'acharnement',
      'persévérance'
    ],
    'prononciation': '[o-b-s-t-i-n-a-t-i-o-n]'
  },
  {
    'mot': 'Obsolescence',
    'definition': 'Terme qui signifie désuétude, périmé ou vieillissement.',
    'exemples': [
      'La obsolescence est souvent associée à désuétude et périmé.',
      'Dans cette situation, la obsolescence reflétait désuétude.'
    ],
    'synonymes': [
      'désuétude',
      'périmé',
      'vieillissement'
    ],
    'prononciation': '[o-b-s-o-l-e-s-c-e-n-c-e]'
  },
  {
    'mot': 'Oxymore',
    'definition': 'Terme qui signifie paradoxe, contradiction ou figure paradoxale.',
    'exemples': [
      'Il a décidé de oxymore, montrant ainsi paradoxe et contradiction.',
      'Ils ont dû oxymore pour atteindre paradoxe.'
    ],
    'synonymes': [
      'paradoxe',
      'contradiction',
      'figure paradoxale'
    ],
    'prononciation': '[o-x-y-m-o-r-e]'
  },
  {
    'mot': 'Palliatif',
    'definition': 'Terme qui signifie atténuant, calmant ou temporaire.',
    'exemples': [
      'Ce texte est si palliatif qu’il semble atténuant et calmant.',
      'Son discours palliatif a laissé une impression de atténuant.'
    ],
    'synonymes': [
      'atténuant',
      'calmant',
      'temporaire'
    ],
    'prononciation': '[p-a-l-l-i-a-t-i-f]'
  },
  {
    'mot': 'Paradigme',
    'definition': 'Terme qui signifie modèle, schéma ou référence.',
    'exemples': [
      'Ce texte est si paradigme qu’il semble modèle et schéma.',
      'Son discours paradigme a laissé une impression de modèle.'
    ],
    'synonymes': [
      'modèle',
      'schéma',
      'référence'
    ],
    'prononciation': '[p-a-r-a-d-i-g-m-e]'
  },
  {
    'mot': 'Perspicace',
    'definition': 'Terme qui signifie clairvoyant, lucide ou sagace.',
    'exemples': [
      'Ce texte est si perspicace qu’il semble clairvoyant et lucide.',
      'Son discours perspicace a laissé une impression de clairvoyant.'
    ],
    'synonymes': [
      'clairvoyant',
      'lucide',
      'sagace'
    ],
    'prononciation': '[p-e-r-s-p-i-c-a-c-e]'
  },
  {
    'mot': 'Pléthore',
    'definition': 'Terme qui signifie abondance, profusion ou excès.',
    'exemples': [
      'Il a décidé de pléthore, montrant ainsi abondance et profusion.',
      'Ils ont dû pléthore pour atteindre abondance.'
    ],
    'synonymes': [
      'abondance',
      'profusion',
      'excès'
    ],
    'prononciation': '[p-l-é-t-h-o-r-e]'
  },
  {
    'mot': 'Polyglotte',
    'definition': 'Terme qui signifie multilingue, plurilingue ou linguiste.',
    'exemples': [
      'Ce texte est si polyglotte qu’il semble multilingue et plurilingue.',
      'Son discours polyglotte a laissé une impression de multilingue.'
    ],
    'synonymes': [
      'multilingue',
      'plurilingue',
      'linguiste'
    ],
    'prononciation': '[p-o-l-y-g-l-o-t-t-e]'
  },
  {
    'mot': 'Polysémique',
    'definition': 'Terme qui signifie ambigu, à plusieurs sens ou polyvalent.',
    'exemples': [
      'Ce texte est si polysémique qu’il semble ambigu et à plusieurs sens.',
      'Son discours polysémique a laissé une impression de ambigu.'
    ],
    'synonymes': [
      'ambigu',
      'à plusieurs sens',
      'polyvalent'
    ],
    'prononciation': '[p-o-l-y-s-é-m-i-q-u-e]'
  },
  {
    'mot': 'Postulat',
    'definition': 'Terme qui signifie axiome, hypothèse ou principe.',
    'exemples': [
      'Ce texte est si postulat qu’il semble axiome et hypothèse.',
      'Son discours postulat a laissé une impression de axiome.'
    ],
    'synonymes': [
      'axiome',
      'hypothèse',
      'principe'
    ],
    'prononciation': '[p-o-s-t-u-l-a-t]'
  },
  {
    'mot': 'Procrastination',
    'definition': 'Terme qui signifie ajournement, report ou temporisation.',
    'exemples': [
      'La procrastination est souvent associée à ajournement et report.',
      'Dans cette situation, la procrastination reflétait ajournement.'
    ],
    'synonymes': [
      'ajournement',
      'report',
      'temporisation'
    ],
    'prononciation': '[p-r-o-c-r-a-s-t-i-n-a-t-i-o-n]'
  },
  {
    'mot': 'Prolégomènes',
    'definition': 'Terme qui signifie préliminaires, introduction ou préface.',
    'exemples': [
      'Ce texte est si prolégomènes qu’il semble préliminaires et introduction.',
      'Son discours prolégomènes a laissé une impression de préliminaires.'
    ],
    'synonymes': [
      'préliminaires',
      'introduction',
      'préface'
    ],
    'prononciation': '[p-r-o-l-é-g-o-m-è-n-e-s]'
  },
  {
    'mot': 'Prolixe',
    'definition': 'Terme qui signifie bavard, loquace ou verbeux.',
    'exemples': [
      'Ce texte est si prolixe qu’il semble bavard et loquace.',
      'Son discours prolixe a laissé une impression de bavard.'
    ],
    'synonymes': [
      'bavard',
      'loquace',
      'verbeux'
    ],
    'prononciation': '[p-r-o-l-i-x-e]'
  },
  {
    'mot': 'Prosélyte',
    'definition': 'Terme qui signifie converti, nouveau croyant ou adepte.',
    'exemples': [
      'Ce texte est si prosélyte qu’il semble converti et nouveau croyant.',
      'Son discours prosélyte a laissé une impression de converti.'
    ],
    'synonymes': [
      'converti',
      'nouveau croyant',
      'adepte'
    ],
    'prononciation': '[p-r-o-s-é-l-y-t-e]'
  },
  {
    'mot': 'Pusillanime',
    'definition': 'Terme qui signifie craintif, timoré ou lâche.',
    'exemples': [
      'Ce texte est si pusillanime qu’il semble craintif et timoré.',
      'Son discours pusillanime a laissé une impression de craintif.'
    ],
    'synonymes': [
      'craintif',
      'timoré',
      'lâche'
    ],
    'prononciation': '[p-u-s-i-l-l-a-n-i-m-e]'
  },
  {
    'mot': 'Quintessence',
    'definition': 'Terme qui signifie essence, fondement ou cœur.',
    'exemples': [
      'La quintessence est souvent associée à essence et fondement.',
      'Dans cette situation, la quintessence reflétait essence.'
    ],
    'synonymes': [
      'essence',
      'fondement',
      'cœur'
    ],
    'prononciation': '[q-u-i-n-t-e-s-s-e-n-c-e]'
  },
  {
    'mot': 'Sagacité',
    'definition': 'Terme qui signifie perspicacité, clairvoyance ou judicieuse.',
    'exemples': [
      'La sagacité est souvent associée à perspicacité et clairvoyance.',
      'Dans cette situation, la sagacité reflétait perspicacité.'
    ],
    'synonymes': [
      'perspicacité',
      'clairvoyance',
      'judicieuse'
    ],
    'prononciation': '[s-a-g-a-c-i-t-é]'
  },
  {
    'mot': 'Sagouin',
    'definition': 'Terme qui signifie sale, négligé ou souillon.',
    'exemples': [
      'Ce texte est si sagouin qu’il semble sale et négligé.',
      'Son discours sagouin a laissé une impression de sale.'
    ],
    'synonymes': [
      'sale',
      'négligé',
      'souillon'
    ],
    'prononciation': '[s-a-g-o-u-i-n]'
  },
  {
    'mot': 'Salutaire',
    'definition': 'Terme qui signifie bénéfique, profitable ou utile.',
    'exemples': [
      'Il a décidé de salutaire, montrant ainsi bénéfique et profitable.',
      'Ils ont dû salutaire pour atteindre bénéfique.'
    ],
    'synonymes': [
      'bénéfique',
      'profitable',
      'utile'
    ],
    'prononciation': '[s-a-l-u-t-a-i-r-e]'
  },
  {
    'mot': 'Sardonique',
    'definition': 'Terme qui signifie moqueur, sarcastique ou ironique.',
    'exemples': [
      'Ce texte est si sardonique qu’il semble moqueur et sarcastique.',
      'Son discours sardonique a laissé une impression de moqueur.'
    ],
    'synonymes': [
      'moqueur',
      'sarcastique',
      'ironique'
    ],
    'prononciation': '[s-a-r-d-o-n-i-q-u-e]'
  },
  {
    'mot': 'Scabreux',
    'definition': 'Terme qui signifie délicat, graveleux ou risqué.',
    'exemples': [
      'Ce texte est si scabreux qu’il semble délicat et graveleux.',
      'Son discours scabreux a laissé une impression de délicat.'
    ],
    'synonymes': [
      'délicat',
      'graveleux',
      'risqué'
    ],
    'prononciation': '[s-c-a-b-r-e-u-x]'
  },
  {
    'mot': 'Séditieux',
    'definition': 'Terme qui signifie rebelle, factieux ou subversif.',
    'exemples': [
      'Ce texte est si séditieux qu’il semble rebelle et factieux.',
      'Son discours séditieux a laissé une impression de rebelle.'
    ],
    'synonymes': [
      'rebelle',
      'factieux',
      'subversif'
    ],
    'prononciation': '[s-é-d-i-t-i-e-u-x]'
  },
  {
    'mot': 'Séculaire',
    'definition': 'Terme qui signifie centenaire, ancestral ou ancien.',
    'exemples': [
      'Il a décidé de séculaire, montrant ainsi centenaire et ancestral.',
      'Ils ont dû séculaire pour atteindre centenaire.'
    ],
    'synonymes': [
      'centenaire',
      'ancestral',
      'ancien'
    ],
    'prononciation': '[s-é-c-u-l-a-i-r-e]'
  },
  {
    'mot': 'Sinécure',
    'definition': 'Terme qui signifie emploi tranquille, poste facile ou fonction honorifique.',
    'exemples': [
      'Il a décidé de sinécure, montrant ainsi emploi tranquille et poste facile.',
      'Ils ont dû sinécure pour atteindre emploi tranquille.'
    ],
    'synonymes': [
      'emploi tranquille',
      'poste facile',
      'fonction honorifique'
    ],
    'prononciation': '[s-i-n-é-c-u-r-e]'
  },
  {
    'mot': 'Spoliation',
    'definition': 'Terme qui signifie usurpation, dépouillement ou appropriation.',
    'exemples': [
      'La spoliation est souvent associée à usurpation et dépouillement.',
      'Dans cette situation, la spoliation reflétait usurpation.'
    ],
    'synonymes': [
      'usurpation',
      'dépouillement',
      'appropriation'
    ],
    'prononciation': '[s-p-o-l-i-a-t-i-o-n]'
  },
  {
    'mot': 'Sporadique',
    'definition': 'Terme qui signifie occasionnel, irrégulier ou épisodique.',
    'exemples': [
      'Ce texte est si sporadique qu’il semble occasionnel et irrégulier.',
      'Son discours sporadique a laissé une impression de occasionnel.'
    ],
    'synonymes': [
      'occasionnel',
      'irrégulier',
      'épisodique'
    ],
    'prononciation': '[s-p-o-r-a-d-i-q-u-e]'
  },
  {
    'mot': 'Subversif',
    'definition': 'Terme qui signifie révolutionnaire, déstabilisateur ou iconoclaste.',
    'exemples': [
      'Ce texte est si subversif qu’il semble révolutionnaire et déstabilisateur.',
      'Son discours subversif a laissé une impression de révolutionnaire.'
    ],
    'synonymes': [
      'révolutionnaire',
      'déstabilisateur',
      'iconoclaste'
    ],
    'prononciation': '[s-u-b-v-e-r-s-i-f]'
  },
  {
    'mot': 'Suranné',
    'definition': 'Terme qui signifie démodé, obsolète ou vieillot.',
    'exemples': [
      'Ce texte est si suranné qu’il semble démodé et obsolète.',
      'Son discours suranné a laissé une impression de démodé.'
    ],
    'synonymes': [
      'démodé',
      'obsolète',
      'vieillot'
    ],
    'prononciation': '[s-u-r-a-n-n-é]'
  },
  {
    'mot': 'Sycophante',
    'definition': 'Terme qui signifie dénonciateur, calomniateur ou mouchard.',
    'exemples': [
      'Ce texte est si sycophante qu’il semble dénonciateur et calomniateur.',
      'Son discours sycophante a laissé une impression de dénonciateur.'
    ],
    'synonymes': [
      'dénonciateur',
      'calomniateur',
      'mouchard'
    ],
    'prononciation': '[s-y-c-o-p-h-a-n-t-e]'
  },
  {
    'mot': 'Synergie',
    'definition': 'Terme qui signifie coopération, interaction ou collaboration.',
    'exemples': [
      'La synergie est souvent associée à coopération et interaction.',
      'Dans cette situation, la synergie reflétait coopération.'
    ],
    'synonymes': [
      'coopération',
      'interaction',
      'collaboration'
    ],
    'prononciation': '[s-y-n-e-r-g-i-e]'
  },
  {
    'mot': 'Syzygie',
    'definition': 'Terme qui signifie alignement, conjonction ou configuration.',
    'exemples': [
      'La syzygie est souvent associée à alignement et conjonction.',
      'Dans cette situation, la syzygie reflétait alignement.'
    ],
    'synonymes': [
      'alignement',
      'conjonction',
      'configuration'
    ],
    'prononciation': '[s-y-z-y-g-i-e]'
  },
  {
    'mot': 'Tacite',
    'definition': 'Terme qui signifie implicite, sous‑entendu ou non‑dit.',
    'exemples': [
      'Ce texte est si tacite qu’il semble implicite et sous‑entendu.',
      'Son discours tacite a laissé une impression de implicite.'
    ],
    'synonymes': [
      'implicite',
      'sous‑entendu',
      'non‑dit'
    ],
    'prononciation': '[t-a-c-i-t-e]'
  },
  {
    'mot': 'Tangible',
    'definition': 'Terme qui signifie concret, palpable ou matériel.',
    'exemples': [
      'Ce texte est si tangible qu’il semble concret et palpable.',
      'Son discours tangible a laissé une impression de concret.'
    ],
    'synonymes': [
      'concret',
      'palpable',
      'matériel'
    ],
    'prononciation': '[t-a-n-g-i-b-l-e]'
  },
  {
    'mot': 'Tautologie',
    'definition': 'Terme qui signifie pléonasme, répétition ou redondance.',
    'exemples': [
      'La tautologie est souvent associée à pléonasme et répétition.',
      'Dans cette situation, la tautologie reflétait pléonasme.'
    ],
    'synonymes': [
      'pléonasme',
      'répétition',
      'redondance'
    ],
    'prononciation': '[t-a-u-t-o-l-o-g-i-e]'
  },
  {
    'mot': 'Thaumaturge',
    'definition': 'Terme qui signifie faiseur de miracles, guérisseur ou magicien.',
    'exemples': [
      'Ce texte est si thaumaturge qu’il semble faiseur de miracles et guérisseur.',
      'Son discours thaumaturge a laissé une impression de faiseur de miracles.'
    ],
    'synonymes': [
      'faiseur de miracles',
      'guérisseur',
      'magicien'
    ],
    'prononciation': '[t-h-a-u-m-a-t-u-r-g-e]'
  },
  {
    'mot': 'Thuriféraire',
    'definition': 'Terme qui signifie flatteur, adulateur ou flagorneur.',
    'exemples': [
      'Il a décidé de thuriféraire, montrant ainsi flatteur et adulateur.',
      'Ils ont dû thuriféraire pour atteindre flatteur.'
    ],
    'synonymes': [
      'flatteur',
      'adulateur',
      'flagorneur'
    ],
    'prononciation': '[t-h-u-r-i-f-é-r-a-i-r-e]'
  },
  {
    'mot': 'Torpeur',
    'definition': 'Terme qui signifie léthargie, engourdissement ou apathie.',
    'exemples': [
      'Ce texte est si torpeur qu’il semble léthargie et engourdissement.',
      'Son discours torpeur a laissé une impression de léthargie.'
    ],
    'synonymes': [
      'léthargie',
      'engourdissement',
      'apathie'
    ],
    'prononciation': '[t-o-r-p-e-u-r]'
  },
  {
    'mot': 'Transcendant',
    'definition': 'Terme qui signifie supérieur, éminent ou extraordinaire.',
    'exemples': [
      'Ce texte est si transcendant qu’il semble supérieur et éminent.',
      'Son discours transcendant a laissé une impression de supérieur.'
    ],
    'synonymes': [
      'supérieur',
      'éminent',
      'extraordinaire'
    ],
    'prononciation': '[t-r-a-n-s-c-e-n-d-a-n-t]'
  },
  {
    'mot': 'Trépidant',
    'definition': 'Terme qui signifie palpitant, agité ou dynamique.',
    'exemples': [
      'Ce texte est si trépidant qu’il semble palpitant et agité.',
      'Son discours trépidant a laissé une impression de palpitant.'
    ],
    'synonymes': [
      'palpitant',
      'agité',
      'dynamique'
    ],
    'prononciation': '[t-r-é-p-i-d-a-n-t]'
  },
  {
    'mot': 'Truculent',
    'definition': 'Terme qui signifie pittoresque, coloré ou croquignolesque.',
    'exemples': [
      'Ce texte est si truculent qu’il semble pittoresque et coloré.',
      'Son discours truculent a laissé une impression de pittoresque.'
    ],
    'synonymes': [
      'pittoresque',
      'coloré',
      'croquignolesque'
    ],
    'prononciation': '[t-r-u-c-u-l-e-n-t]'
  },
  {
    'mot': 'Turpitude',
    'definition': 'Terme qui signifie infamie, ignominie ou bassesse.',
    'exemples': [
      'La turpitude est souvent associée à infamie et ignominie.',
      'Dans cette situation, la turpitude reflétait infamie.'
    ],
    'synonymes': [
      'infamie',
      'ignominie',
      'bassesse'
    ],
    'prononciation': '[t-u-r-p-i-t-u-d-e]'
  },
  {
    'mot': 'Ubuesque',
    'definition': 'Terme qui signifie grotesque, absurde ou ridicule.',
    'exemples': [
      'Ce texte est si ubuesque qu’il semble grotesque et absurde.',
      'Son discours ubuesque a laissé une impression de grotesque.'
    ],
    'synonymes': [
      'grotesque',
      'absurde',
      'ridicule'
    ],
    'prononciation': '[u-b-u-e-s-q-u-e]'
  },
  {
    'mot': 'Uchronie',
    'definition': 'Terme qui signifie réalité alternative, fiction historique ou histoire revisitée.',
    'exemples': [
      'La uchronie est souvent associée à réalité alternative et fiction historique.',
      'Dans cette situation, la uchronie reflétait réalité alternative.'
    ],
    'synonymes': [
      'réalité alternative',
      'fiction historique',
      'histoire revisitée'
    ],
    'prononciation': '[u-c-h-r-o-n-i-e]'
  },
  {
    'mot': 'Univoque',
    'definition': 'Terme qui signifie sans ambiguïté, unique ou clair.',
    'exemples': [
      'Ce texte est si univoque qu’il semble sans ambiguïté et unique.',
      'Son discours univoque a laissé une impression de sans ambiguïté.'
    ],
    'synonymes': [
      'sans ambiguïté',
      'unique',
      'clair'
    ],
    'prononciation': '[u-n-i-v-o-q-u-e]'
  },
  {
    'mot': 'Usurpation',
    'definition': 'Terme qui signifie appropriation, illégitimité ou captation.',
    'exemples': [
      'La usurpation est souvent associée à appropriation et illégitimité.',
      'Dans cette situation, la usurpation reflétait appropriation.'
    ],
    'synonymes': [
      'appropriation',
      'illégitimité',
      'captation'
    ],
    'prononciation': '[u-s-u-r-p-a-t-i-o-n]'
  },
  {
    'mot': 'Vacuité',
    'definition': 'Terme qui signifie vide, futilité ou inanité.',
    'exemples': [
      'La vacuité est souvent associée à vide et futilité.',
      'Dans cette situation, la vacuité reflétait vide.'
    ],
    'synonymes': [
      'vide',
      'futilité',
      'inanité'
    ],
    'prononciation': '[v-a-c-u-i-t-é]'
  },
  {
    'mot': 'Velléité',
    'definition': 'Terme qui signifie intention, tentative ou timidité.',
    'exemples': [
      'La velléité est souvent associée à intention et tentative.',
      'Dans cette situation, la velléité reflétait intention.'
    ],
    'synonymes': [
      'intention',
      'tentative',
      'timidité'
    ],
    'prononciation': '[v-e-l-l-é-i-t-é]'
  },
  {
    'mot': 'Velléitaire',
    'definition': 'Terme qui signifie indécis, hésitant ou faible.',
    'exemples': [
      'Il a décidé de velléitaire, montrant ainsi indécis et hésitant.',
      'Ils ont dû velléitaire pour atteindre indécis.'
    ],
    'synonymes': [
      'indécis',
      'hésitant',
      'faible'
    ],
    'prononciation': '[v-e-l-l-é-i-t-a-i-r-e]'
  },
  {
    'mot': 'Venimeux',
    'definition': 'Terme qui signifie toxique, pernicieux ou mordant.',
    'exemples': [
      'Ce texte est si venimeux qu’il semble toxique et pernicieux.',
      'Son discours venimeux a laissé une impression de toxique.'
    ],
    'synonymes': [
      'toxique',
      'pernicieux',
      'mordant'
    ],
    'prononciation': '[v-e-n-i-m-e-u-x]'
  },
  {
    'mot': 'Vétille',
    'definition': 'Terme qui signifie broutille, bagatelle ou futilité.',
    'exemples': [
      'Ce texte est si vétille qu’il semble broutille et bagatelle.',
      'Son discours vétille a laissé une impression de broutille.'
    ],
    'synonymes': [
      'broutille',
      'bagatelle',
      'futilité'
    ],
    'prononciation': '[v-é-t-i-l-l-e]'
  },
  {
    'mot': 'Vicissitude',
    'definition': 'Terme qui signifie aléa, péripétie ou mutation.',
    'exemples': [
      'La vicissitude est souvent associée à aléa et péripétie.',
      'Dans cette situation, la vicissitude reflétait aléa.'
    ],
    'synonymes': [
      'aléa',
      'péripétie',
      'mutation'
    ],
    'prononciation': '[v-i-c-i-s-s-i-t-u-d-e]'
  },
  {
    'mot': 'Vindicatif',
    'definition': 'Terme qui signifie rancunier, revanchard ou vengeur.',
    'exemples': [
      'Ce texte est si vindicatif qu’il semble rancunier et revanchard.',
      'Son discours vindicatif a laissé une impression de rancunier.'
    ],
    'synonymes': [
      'rancunier',
      'revanchard',
      'vengeur'
    ],
    'prononciation': '[v-i-n-d-i-c-a-t-i-f]'
  },
  {
    'mot': 'Virulence',
    'definition': 'Terme qui signifie violence, âpreté ou acuité.',
    'exemples': [
      'La virulence est souvent associée à violence et âpreté.',
      'Dans cette situation, la virulence reflétait violence.'
    ],
    'synonymes': [
      'violence',
      'âpreté',
      'acuité'
    ],
    'prononciation': '[v-i-r-u-l-e-n-c-e]'
  },
  {
    'mot': 'Vitupérer',
    'definition': 'Terme qui signifie blâmer, fulminer ou invectiver.',
    'exemples': [
      'Il a décidé de vitupérer, montrant ainsi blâmer et fulminer.',
      'Ils ont dû vitupérer pour atteindre blâmer.'
    ],
    'synonymes': [
      'blâmer',
      'fulminer',
      'invectiver'
    ],
    'prononciation': '[v-i-t-u-p-é-r-e-r]'
  },
  {
    'mot': 'Xénophobie',
    'definition': 'Terme qui signifie intolérance, peur de l’autre ou repli identitaire.',
    'exemples': [
      'La xénophobie est souvent associée à intolérance et peur de l’autre.',
      'Dans cette situation, la xénophobie reflétait intolérance.'
    ],
    'synonymes': [
      'intolérance',
      'peur de l’autre',
      'repli identitaire'
    ],
    'prononciation': '[x-é-n-o-p-h-o-b-i-e]'
  },
  {
    'mot': 'Zélateur',
    'definition': 'Terme qui signifie partisan, défenseur ou adhérent.',
    'exemples': [
      'Ce texte est si zélateur qu’il semble partisan et défenseur.',
      'Son discours zélateur a laissé une impression de partisan.'
    ],
    'synonymes': [
      'partisan',
      'défenseur',
      'adhérent'
    ],
    'prononciation': '[z-é-l-a-t-e-u-r]'
  },
  {
    'mot': 'Zélatrice',
    'definition': 'Terme qui signifie partisane, défenseure ou militante.',
    'exemples': [
      'Ce texte est si zélatrice qu’il semble partisane et défenseure.',
      'Son discours zélatrice a laissé une impression de partisane.'
    ],
    'synonymes': [
      'partisane',
      'défenseure',
      'militante'
    ],
    'prononciation': '[z-é-l-a-t-r-i-c-e]'
  },
  {
    'mot': 'Ziggourat',
    'definition': 'Terme qui signifie temple à étages, pyramide à gradins ou monument mésopotamien.',
    'exemples': [
      'Ce texte est si ziggourat qu’il semble temple à étages et pyramide à gradins.',
      'Son discours ziggourat a laissé une impression de temple à étages.'
    ],
    'synonymes': [
      'temple à étages',
      'pyramide à gradins',
      'monument mésopotamien'
    ],
    'prononciation': '[z-i-g-g-o-u-r-a-t]'
  },
  {
    'mot': 'Zythum',
    'definition': 'Terme qui signifie bière de l’Égypte ancienne, breuvage ancien ou bière antique.',
    'exemples': [
      'Ce texte est si zythum qu’il semble bière de l’Égypte ancienne et breuvage ancien.',
      'Son discours zythum a laissé une impression de bière de l’Égypte ancienne.'
    ],
    'synonymes': [
      'bière de l’Égypte ancienne',
      'breuvage ancien',
      'bière antique'
    ],
    'prononciation': '[z-y-t-h-u-m]'
  },
  {
    'mot': 'Abstrus',
    'definition': 'Terme qui signifie complexe, difficile ou obscur.',
    'exemples': [
      'Ce texte est si abstrus qu’il semble complexe et difficile.',
      'Son discours abstrus a laissé une impression de complexe.'
    ],
    'synonymes': [
      'complexe',
      'difficile',
      'obscur'
    ],
    'prononciation': '[a-b-s-t-r-u-s]'
  },
  {
    'mot': 'Acéré',
    'definition': 'Terme qui signifie tranchant, affûté ou perçant.',
    'exemples': [
      'Ce texte est si acéré qu’il semble tranchant et affûté.',
      'Son discours acéré a laissé une impression de tranchant.'
    ],
    'synonymes': [
      'tranchant',
      'affûté',
      'perçant'
    ],
    'prononciation': '[a-c-é-r-é]'
  },
  {
    'mot': 'Acolyte',
    'definition': 'Terme qui signifie assistant, compagnon ou adjoint.',
    'exemples': [
      'Ce texte est si acolyte qu’il semble assistant et compagnon.',
      'Son discours acolyte a laissé une impression de assistant.'
    ],
    'synonymes': [
      'assistant',
      'compagnon',
      'adjoint'
    ],
    'prononciation': '[a-c-o-l-y-t-e]'
  },
  {
    'mot': 'Ad hoc',
    'definition': 'Terme qui signifie spécifique, approprié ou sur mesure.',
    'exemples': [
      'Ce texte est si ad hoc qu’il semble spécifique et approprié.',
      'Son discours ad hoc a laissé une impression de spécifique.'
    ],
    'synonymes': [
      'spécifique',
      'approprié',
      'sur mesure'
    ],
    'prononciation': '[a-d- -h-o-c]'
  },
  {
    'mot': 'Addenda',
    'definition': 'Terme qui signifie appendice, supplément ou annexe.',
    'exemples': [
      'Ce texte est si addenda qu’il semble appendice et supplément.',
      'Son discours addenda a laissé une impression de appendice.'
    ],
    'synonymes': [
      'appendice',
      'supplément',
      'annexe'
    ],
    'prononciation': '[a-d-d-e-n-d-a]'
  },
  {
    'mot': 'Affable',
    'definition': 'Terme qui signifie aimable, courtois ou accueillant.',
    'exemples': [
      'Ce texte est si affable qu’il semble aimable et courtois.',
      'Son discours affable a laissé une impression de aimable.'
    ],
    'synonymes': [
      'aimable',
      'courtois',
      'accueillant'
    ],
    'prononciation': '[a-f-f-a-b-l-e]'
  },
  {
    'mot': 'Affliction',
    'definition': 'Terme qui signifie peine, douleur ou chagrin.',
    'exemples': [
      'La affliction est souvent associée à peine et douleur.',
      'Dans cette situation, la affliction reflétait peine.'
    ],
    'synonymes': [
      'peine',
      'douleur',
      'chagrin'
    ],
    'prononciation': '[a-f-f-l-i-c-t-i-o-n]'
  },
  {
    'mot': 'Agnostique',
    'definition': 'Terme qui signifie incroyant, sceptique ou dubitatif.',
    'exemples': [
      'Ce texte est si agnostique qu’il semble incroyant et sceptique.',
      'Son discours agnostique a laissé une impression de incroyant.'
    ],
    'synonymes': [
      'incroyant',
      'sceptique',
      'dubitatif'
    ],
    'prononciation': '[a-g-n-o-s-t-i-q-u-e]'
  },
  {
    'mot': 'Alambiqué',
    'definition': 'Terme qui signifie tortueux, compliqué ou embrouillé.',
    'exemples': [
      'Ce texte est si alambiqué qu’il semble tortueux et compliqué.',
      'Son discours alambiqué a laissé une impression de tortueux.'
    ],
    'synonymes': [
      'tortueux',
      'compliqué',
      'embrouillé'
    ],
    'prononciation': '[a-l-a-m-b-i-q-u-é]'
  },
  {
    'mot': 'Altruisme',
    'definition': 'Terme qui signifie désintéressement, générosité ou humanisme.',
    'exemples': [
      'La altruisme est souvent associée à désintéressement et générosité.',
      'Dans cette situation, la altruisme reflétait désintéressement.'
    ],
    'synonymes': [
      'désintéressement',
      'générosité',
      'humanisme'
    ],
    'prononciation': '[a-l-t-r-u-i-s-m-e]'
  },
  {
    'mot': 'Amalgamer',
    'definition': 'Terme qui signifie mélanger, fusionner ou confondre.',
    'exemples': [
      'Il a décidé de amalgamer, montrant ainsi mélanger et fusionner.',
      'Ils ont dû amalgamer pour atteindre mélanger.'
    ],
    'synonymes': [
      'mélanger',
      'fusionner',
      'confondre'
    ],
    'prononciation': '[a-m-a-l-g-a-m-e-r]'
  },
  {
    'mot': 'Ambivalent',
    'definition': 'Terme qui signifie équivoque, mitigé ou partagé.',
    'exemples': [
      'Ce texte est si ambivalent qu’il semble équivoque et mitigé.',
      'Son discours ambivalent a laissé une impression de équivoque.'
    ],
    'synonymes': [
      'équivoque',
      'mitigé',
      'partagé'
    ],
    'prononciation': '[a-m-b-i-v-a-l-e-n-t]'
  },
  {
    'mot': 'Amphigouri',
    'definition': 'Terme qui signifie galimatias, charabia ou non‑sens.',
    'exemples': [
      'Ce texte est si amphigouri qu’il semble galimatias et charabia.',
      'Son discours amphigouri a laissé une impression de galimatias.'
    ],
    'synonymes': [
      'galimatias',
      'charabia',
      'non‑sens'
    ],
    'prononciation': '[a-m-p-h-i-g-o-u-r-i]'
  },
  {
    'mot': 'Anachronique',
    'definition': 'Terme qui signifie dépassé, démodé ou obsolète.',
    'exemples': [
      'Ce texte est si anachronique qu’il semble dépassé et démodé.',
      'Son discours anachronique a laissé une impression de dépassé.'
    ],
    'synonymes': [
      'dépassé',
      'démodé',
      'obsolète'
    ],
    'prononciation': '[a-n-a-c-h-r-o-n-i-q-u-e]'
  },
  {
    'mot': 'Analogie',
    'definition': 'Terme qui signifie similitude, comparaison ou correspondance.',
    'exemples': [
      'La analogie est souvent associée à similitude et comparaison.',
      'Dans cette situation, la analogie reflétait similitude.'
    ],
    'synonymes': [
      'similitude',
      'comparaison',
      'correspondance'
    ],
    'prononciation': '[a-n-a-l-o-g-i-e]'
  },
  {
    'mot': 'Animosité',
    'definition': 'Terme qui signifie hostilité, rancœur ou aversion.',
    'exemples': [
      'La animosité est souvent associée à hostilité et rancœur.',
      'Dans cette situation, la animosité reflétait hostilité.'
    ],
    'synonymes': [
      'hostilité',
      'rancœur',
      'aversion'
    ],
    'prononciation': '[a-n-i-m-o-s-i-t-é]'
  },
  {
    'mot': 'Anomalie',
    'definition': 'Terme qui signifie irrégularité, exception ou bizarrerie.',
    'exemples': [
      'La anomalie est souvent associée à irrégularité et exception.',
      'Dans cette situation, la anomalie reflétait irrégularité.'
    ],
    'synonymes': [
      'irrégularité',
      'exception',
      'bizarrerie'
    ],
    'prononciation': '[a-n-o-m-a-l-i-e]'
  },
  {
    'mot': 'Antagonisme',
    'definition': 'Terme qui signifie opposition, rivalité ou conflit.',
    'exemples': [
      'La antagonisme est souvent associée à opposition et rivalité.',
      'Dans cette situation, la antagonisme reflétait opposition.'
    ],
    'synonymes': [
      'opposition',
      'rivalité',
      'conflit'
    ],
    'prononciation': '[a-n-t-a-g-o-n-i-s-m-e]'
  },
  {
    'mot': 'Antinomie',
    'definition': 'Terme qui signifie contradiction, paradoxe ou incompatibilité.',
    'exemples': [
      'La antinomie est souvent associée à contradiction et paradoxe.',
      'Dans cette situation, la antinomie reflétait contradiction.'
    ],
    'synonymes': [
      'contradiction',
      'paradoxe',
      'incompatibilité'
    ],
    'prononciation': '[a-n-t-i-n-o-m-i-e]'
  },
  {
    'mot': 'Antipode',
    'definition': 'Terme qui signifie opposé, contraire ou diamétralement opposé.',
    'exemples': [
      'La antipode est souvent associée à opposé et contraire.',
      'Dans cette situation, la antipode reflétait opposé.'
    ],
    'synonymes': [
      'opposé',
      'contraire',
      'diamétralement opposé'
    ],
    'prononciation': '[a-n-t-i-p-o-d-e]'
  },
  {
    'mot': 'Apathique',
    'definition': 'Terme qui signifie indolent, mollasson ou léthargique.',
    'exemples': [
      'Ce texte est si apathique qu’il semble indolent et mollasson.',
      'Son discours apathique a laissé une impression de indolent.'
    ],
    'synonymes': [
      'indolent',
      'mollasson',
      'léthargique'
    ],
    'prononciation': '[a-p-a-t-h-i-q-u-e]'
  },
  {
    'mot': 'Aphorisme',
    'definition': 'Terme qui signifie maxime, sentence ou adage.',
    'exemples': [
      'La aphorisme est souvent associée à maxime et sentence.',
      'Dans cette situation, la aphorisme reflétait maxime.'
    ],
    'synonymes': [
      'maxime',
      'sentence',
      'adage'
    ],
    'prononciation': '[a-p-h-o-r-i-s-m-e]'
  },
  {
    'mot': 'Apocryphe',
    'definition': 'Terme qui signifie douteux, faux ou non authentique.',
    'exemples': [
      'Ce texte est si apocryphe qu’il semble douteux et faux.',
      'Son discours apocryphe a laissé une impression de douteux.'
    ],
    'synonymes': [
      'douteux',
      'faux',
      'non authentique'
    ],
    'prononciation': '[a-p-o-c-r-y-p-h-e]'
  },
  {
    'mot': 'Apologie',
    'definition': 'Terme qui signifie défense, éloge ou plaidoirie.',
    'exemples': [
      'La apologie est souvent associée à défense et éloge.',
      'Dans cette situation, la apologie reflétait défense.'
    ],
    'synonymes': [
      'défense',
      'éloge',
      'plaidoirie'
    ],
    'prononciation': '[a-p-o-l-o-g-i-e]'
  },
  {
    'mot': 'Apothéose',
    'definition': 'Terme qui signifie apogée, consécration ou sommet.',
    'exemples': [
      'Ce texte est si apothéose qu’il semble apogée et consécration.',
      'Son discours apothéose a laissé une impression de apogée.'
    ],
    'synonymes': [
      'apogée',
      'consécration',
      'sommet'
    ],
    'prononciation': '[a-p-o-t-h-é-o-s-e]'
  },
  {
    'mot': 'Apparatchik',
    'definition': 'Terme qui signifie bureaucrate, fonctionnaire ou responsable du parti.',
    'exemples': [
      'Ce texte est si apparatchik qu’il semble bureaucrate et fonctionnaire.',
      'Son discours apparatchik a laissé une impression de bureaucrate.'
    ],
    'synonymes': [
      'bureaucrate',
      'fonctionnaire',
      'responsable du parti'
    ],
    'prononciation': '[a-p-p-a-r-a-t-c-h-i-k]'
  },
  {
    'mot': 'Arcane',
    'definition': 'Terme qui signifie mystère, secret ou énigme.',
    'exemples': [
      'Ce texte est si arcane qu’il semble mystère et secret.',
      'Son discours arcane a laissé une impression de mystère.'
    ],
    'synonymes': [
      'mystère',
      'secret',
      'énigme'
    ],
    'prononciation': '[a-r-c-a-n-e]'
  },
  {
    'mot': 'Assujettissement',
    'definition': 'Terme qui signifie soumission, servitude ou asservissement.',
    'exemples': [
      'La assujettissement est souvent associée à soumission et servitude.',
      'Dans cette situation, la assujettissement reflétait soumission.'
    ],
    'synonymes': [
      'soumission',
      'servitude',
      'asservissement'
    ],
    'prononciation': '[a-s-s-u-j-e-t-t-i-s-s-e-m-e-n-t]'
  },
  {
    'mot': 'Asthénie',
    'definition': 'Terme qui signifie fatigue, épuisement ou affaiblissement.',
    'exemples': [
      'La asthénie est souvent associée à fatigue et épuisement.',
      'Dans cette situation, la asthénie reflétait fatigue.'
    ],
    'synonymes': [
      'fatigue',
      'épuisement',
      'affaiblissement'
    ],
    'prononciation': '[a-s-t-h-é-n-i-e]'
  },
  {
    'mot': 'Auguste',
    'definition': 'Terme qui signifie vénérable, majestueux ou solennel.',
    'exemples': [
      'Ce texte est si auguste qu’il semble vénérable et majestueux.',
      'Son discours auguste a laissé une impression de vénérable.'
    ],
    'synonymes': [
      'vénérable',
      'majestueux',
      'solennel'
    ],
    'prononciation': '[a-u-g-u-s-t-e]'
  },
  {
    'mot': 'Autarcie',
    'definition': 'Terme qui signifie autosuffisance, autonomie ou indépendance.',
    'exemples': [
      'La autarcie est souvent associée à autosuffisance et autonomie.',
      'Dans cette situation, la autarcie reflétait autosuffisance.'
    ],
    'synonymes': [
      'autosuffisance',
      'autonomie',
      'indépendance'
    ],
    'prononciation': '[a-u-t-a-r-c-i-e]'
  },
  {
    'mot': 'Autochtone',
    'definition': 'Terme qui signifie indigène, natif ou aborigène.',
    'exemples': [
      'Ce texte est si autochtone qu’il semble indigène et natif.',
      'Son discours autochtone a laissé une impression de indigène.'
    ],
    'synonymes': [
      'indigène',
      'natif',
      'aborigène'
    ],
    'prononciation': '[a-u-t-o-c-h-t-o-n-e]'
  },
  {
    'mot': 'Avanie',
    'definition': 'Terme qui signifie humiliation, affront ou vexation.',
    'exemples': [
      'La avanie est souvent associée à humiliation et affront.',
      'Dans cette situation, la avanie reflétait humiliation.'
    ],
    'synonymes': [
      'humiliation',
      'affront',
      'vexation'
    ],
    'prononciation': '[a-v-a-n-i-e]'
  },
  {
    'mot': 'Aversion',
    'definition': 'Terme qui signifie répulsion, dégoût ou antipathie.',
    'exemples': [
      'La aversion est souvent associée à répulsion et dégoût.',
      'Dans cette situation, la aversion reflétait répulsion.'
    ],
    'synonymes': [
      'répulsion',
      'dégoût',
      'antipathie'
    ],
    'prononciation': '[a-v-e-r-s-i-o-n]'
  },
  {
    'mot': 'Axiome',
    'definition': 'Terme qui signifie postulat, principe ou évidence.',
    'exemples': [
      'Ce texte est si axiome qu’il semble postulat et principe.',
      'Son discours axiome a laissé une impression de postulat.'
    ],
    'synonymes': [
      'postulat',
      'principe',
      'évidence'
    ],
    'prononciation': '[a-x-i-o-m-e]'
  },
  {
    'mot': 'Baliverne',
    'definition': 'Terme qui signifie sornette, bagatelle ou fadaise.',
    'exemples': [
      'Ce texte est si baliverne qu’il semble sornette et bagatelle.',
      'Son discours baliverne a laissé une impression de sornette.'
    ],
    'synonymes': [
      'sornette',
      'bagatelle',
      'fadaise'
    ],
    'prononciation': '[b-a-l-i-v-e-r-n-e]'
  },
  {
    'mot': 'Boulimie',
    'definition': 'Terme qui signifie gloutonnerie, voracité ou frénésie alimentaire.',
    'exemples': [
      'La boulimie est souvent associée à gloutonnerie et voracité.',
      'Dans cette situation, la boulimie reflétait gloutonnerie.'
    ],
    'synonymes': [
      'gloutonnerie',
      'voracité',
      'frénésie alimentaire'
    ],
    'prononciation': '[b-o-u-l-i-m-i-e]'
  },
  {
    'mot': 'Burlesque',
    'definition': 'Terme qui signifie cocasse, drôle ou fantaisiste.',
    'exemples': [
      'Ce texte est si burlesque qu’il semble cocasse et drôle.',
      'Son discours burlesque a laissé une impression de cocasse.'
    ],
    'synonymes': [
      'cocasse',
      'drôle',
      'fantaisiste'
    ],
    'prononciation': '[b-u-r-l-e-s-q-u-e]'
  },
  {
    'mot': 'Byzantin',
    'definition': 'Terme qui signifie tatillon, complexe ou sophistiqué.',
    'exemples': [
      'Ce texte est si byzantin qu’il semble tatillon et complexe.',
      'Son discours byzantin a laissé une impression de tatillon.'
    ],
    'synonymes': [
      'tatillon',
      'complexe',
      'sophistiqué'
    ],
    'prononciation': '[b-y-z-a-n-t-i-n]'
  },
  {
    'mot': 'Cacique',
    'definition': 'Terme qui signifie chef, leader ou dignitaire.',
    'exemples': [
      'Ce texte est si cacique qu’il semble chef et leader.',
      'Son discours cacique a laissé une impression de chef.'
    ],
    'synonymes': [
      'chef',
      'leader',
      'dignitaire'
    ],
    'prononciation': '[c-a-c-i-q-u-e]'
  },
  {
    'mot': 'Calamité',
    'definition': 'Terme qui signifie catastrophe, désastre ou fléau.',
    'exemples': [
      'La calamité est souvent associée à catastrophe et désastre.',
      'Dans cette situation, la calamité reflétait catastrophe.'
    ],
    'synonymes': [
      'catastrophe',
      'désastre',
      'fléau'
    ],
    'prononciation': '[c-a-l-a-m-i-t-é]'
  },
  {
    'mot': 'Catharsis',
    'definition': 'Terme qui signifie purification, libération ou décharge émotionnelle.',
    'exemples': [
      'Ce texte est si catharsis qu’il semble purification et libération.',
      'Son discours catharsis a laissé une impression de purification.'
    ],
    'synonymes': [
      'purification',
      'libération',
      'décharge émotionnelle'
    ],
    'prononciation': '[c-a-t-h-a-r-s-i-s]'
  },
  {
    'mot': 'Cécité',
    'definition': 'Terme qui signifie aveuglement, obscurité ou perte de vue.',
    'exemples': [
      'La cécité est souvent associée à aveuglement et obscurité.',
      'Dans cette situation, la cécité reflétait aveuglement.'
    ],
    'synonymes': [
      'aveuglement',
      'obscurité',
      'perte de vue'
    ],
    'prononciation': '[c-é-c-i-t-é]'
  },
  {
    'mot': 'Célérité',
    'definition': 'Terme qui signifie rapidité, promptitude ou vitesse.',
    'exemples': [
      'La célérité est souvent associée à rapidité et promptitude.',
      'Dans cette situation, la célérité reflétait rapidité.'
    ],
    'synonymes': [
      'rapidité',
      'promptitude',
      'vitesse'
    ],
    'prononciation': '[c-é-l-é-r-i-t-é]'
  },
  {
    'mot': 'Collusion',
    'definition': 'Terme qui signifie connivence, complicité ou entente secrète.',
    'exemples': [
      'La collusion est souvent associée à connivence et complicité.',
      'Dans cette situation, la collusion reflétait connivence.'
    ],
    'synonymes': [
      'connivence',
      'complicité',
      'entente secrète'
    ],
    'prononciation': '[c-o-l-l-u-s-i-o-n]'
  },
  {
    'mot': 'Condescendance',
    'definition': 'Terme qui signifie supériorité, arrogance ou hauteur.',
    'exemples': [
      'La condescendance est souvent associée à supériorité et arrogance.',
      'Dans cette situation, la condescendance reflétait supériorité.'
    ],
    'synonymes': [
      'supériorité',
      'arrogance',
      'hauteur'
    ],
    'prononciation': '[c-o-n-d-e-s-c-e-n-d-a-n-c-e]'
  },
  {
    'mot': 'Confabulation',
    'definition': 'Terme qui signifie fabulation, affabulation ou mensonge.',
    'exemples': [
      'La confabulation est souvent associée à fabulation et affabulation.',
      'Dans cette situation, la confabulation reflétait fabulation.'
    ],
    'synonymes': [
      'fabulation',
      'affabulation',
      'mensonge'
    ],
    'prononciation': '[c-o-n-f-a-b-u-l-a-t-i-o-n]'
  },
  {
    'mot': 'Conjecture',
    'definition': 'Terme qui signifie supposition, hypothèse ou supputation.',
    'exemples': [
      'Il a décidé de conjecture, montrant ainsi supposition et hypothèse.',
      'Ils ont dû conjecture pour atteindre supposition.'
    ],
    'synonymes': [
      'supposition',
      'hypothèse',
      'supputation'
    ],
    'prononciation': '[c-o-n-j-e-c-t-u-r-e]'
  },
  {
    'mot': 'Connivence',
    'definition': 'Terme qui signifie complicité, collusion ou entente.',
    'exemples': [
      'La connivence est souvent associée à complicité et collusion.',
      'Dans cette situation, la connivence reflétait complicité.'
    ],
    'synonymes': [
      'complicité',
      'collusion',
      'entente'
    ],
    'prononciation': '[c-o-n-n-i-v-e-n-c-e]'
  },
  {
    'mot': 'Consensus',
    'definition': 'Terme qui signifie accord, concorde ou unanime.',
    'exemples': [
      'Ce texte est si consensus qu’il semble accord et concorde.',
      'Son discours consensus a laissé une impression de accord.'
    ],
    'synonymes': [
      'accord',
      'concorde',
      'unanime'
    ],
    'prononciation': '[c-o-n-s-e-n-s-u-s]'
  },
  {
    'mot': 'Consubstantiel',
    'definition': 'Terme qui signifie indissociable, intrinsèque ou inséparable.',
    'exemples': [
      'Ce texte est si consubstantiel qu’il semble indissociable et intrinsèque.',
      'Son discours consubstantiel a laissé une impression de indissociable.'
    ],
    'synonymes': [
      'indissociable',
      'intrinsèque',
      'inséparable'
    ],
    'prononciation': '[c-o-n-s-u-b-s-t-a-n-t-i-e-l]'
  },
  {
    'mot': 'Contingent',
    'definition': 'Terme qui signifie occasionnel, aléatoire ou accessoire.',
    'exemples': [
      'Ce texte est si contingent qu’il semble occasionnel et aléatoire.',
      'Son discours contingent a laissé une impression de occasionnel.'
    ],
    'synonymes': [
      'occasionnel',
      'aléatoire',
      'accessoire'
    ],
    'prononciation': '[c-o-n-t-i-n-g-e-n-t]'
  },
  {
    'mot': 'Contradictoire',
    'definition': 'Terme qui signifie incompatible, opposé ou paradoxal.',
    'exemples': [
      'Il a décidé de contradictoire, montrant ainsi incompatible et opposé.',
      'Ils ont dû contradictoire pour atteindre incompatible.'
    ],
    'synonymes': [
      'incompatible',
      'opposé',
      'paradoxal'
    ],
    'prononciation': '[c-o-n-t-r-a-d-i-c-t-o-i-r-e]'
  },
  {
    'mot': 'Contumace',
    'definition': 'Terme qui signifie condamnation par défaut, absence ou défaut.',
    'exemples': [
      'Ce texte est si contumace qu’il semble condamnation par défaut et absence.',
      'Son discours contumace a laissé une impression de condamnation par défaut.'
    ],
    'synonymes': [
      'condamnation par défaut',
      'absence',
      'défaut'
    ],
    'prononciation': '[c-o-n-t-u-m-a-c-e]'
  },
  {
    'mot': 'Convergence',
    'definition': 'Terme qui signifie rencontre, rapprochement ou fusion.',
    'exemples': [
      'La convergence est souvent associée à rencontre et rapprochement.',
      'Dans cette situation, la convergence reflétait rencontre.'
    ],
    'synonymes': [
      'rencontre',
      'rapprochement',
      'fusion'
    ],
    'prononciation': '[c-o-n-v-e-r-g-e-n-c-e]'
  },
  {
    'mot': 'Convivial',
    'definition': 'Terme qui signifie agréable, chaleureux ou amical.',
    'exemples': [
      'Ce texte est si convivial qu’il semble agréable et chaleureux.',
      'Son discours convivial a laissé une impression de agréable.'
    ],
    'synonymes': [
      'agréable',
      'chaleureux',
      'amical'
    ],
    'prononciation': '[c-o-n-v-i-v-i-a-l]'
  },
  {
    'mot': 'Coruscant',
    'definition': 'Terme qui signifie brillant, étincelant ou scintillant.',
    'exemples': [
      'Ce texte est si coruscant qu’il semble brillant et étincelant.',
      'Son discours coruscant a laissé une impression de brillant.'
    ],
    'synonymes': [
      'brillant',
      'étincelant',
      'scintillant'
    ],
    'prononciation': '[c-o-r-u-s-c-a-n-t]'
  },
  {
    'mot': 'Crépusculaire',
    'definition': 'Terme qui signifie sombre, vésperal ou obscur.',
    'exemples': [
      'Il a décidé de crépusculaire, montrant ainsi sombre et vésperal.',
      'Ils ont dû crépusculaire pour atteindre sombre.'
    ],
    'synonymes': [
      'sombre',
      'vésperal',
      'obscur'
    ],
    'prononciation': '[c-r-é-p-u-s-c-u-l-a-i-r-e]'
  },
  {
    'mot': 'Cryptique',
    'definition': 'Terme qui signifie obscur, énigmatique ou secret.',
    'exemples': [
      'Ce texte est si cryptique qu’il semble obscur et énigmatique.',
      'Son discours cryptique a laissé une impression de obscur.'
    ],
    'synonymes': [
      'obscur',
      'énigmatique',
      'secret'
    ],
    'prononciation': '[c-r-y-p-t-i-q-u-e]'
  },
  {
    'mot': 'Cynisme',
    'definition': 'Terme qui signifie sarcasme, ironie ou amertume.',
    'exemples': [
      'La cynisme est souvent associée à sarcasme et ironie.',
      'Dans cette situation, la cynisme reflétait sarcasme.'
    ],
    'synonymes': [
      'sarcasme',
      'ironie',
      'amertume'
    ],
    'prononciation': '[c-y-n-i-s-m-e]'
  },
  {
    'mot': 'Déchéance',
    'definition': 'Terme qui signifie dégradation, chute ou dégénérescence.',
    'exemples': [
      'La déchéance est souvent associée à dégradation et chute.',
      'Dans cette situation, la déchéance reflétait dégradation.'
    ],
    'synonymes': [
      'dégradation',
      'chute',
      'dégénérescence'
    ],
    'prononciation': '[d-é-c-h-é-a-n-c-e]'
  },
  {
    'mot': 'Déférence',
    'definition': 'Terme qui signifie respect, considération ou égards.',
    'exemples': [
      'La déférence est souvent associée à respect et considération.',
      'Dans cette situation, la déférence reflétait respect.'
    ],
    'synonymes': [
      'respect',
      'considération',
      'égards'
    ],
    'prononciation': '[d-é-f-é-r-e-n-c-e]'
  },
  {
    'mot': 'Diatribe',
    'definition': 'Terme qui signifie pamphlet, attaque ou discours acerbe.',
    'exemples': [
      'Ce texte est si diatribe qu’il semble pamphlet et attaque.',
      'Son discours diatribe a laissé une impression de pamphlet.'
    ],
    'synonymes': [
      'pamphlet',
      'attaque',
      'discours acerbe'
    ],
    'prononciation': '[d-i-a-t-r-i-b-e]'
  },
  {
    'mot': 'Didactique',
    'definition': 'Terme qui signifie pédagogique, instructif ou éducatif.',
    'exemples': [
      'Ce texte est si didactique qu’il semble pédagogique et instructif.',
      'Son discours didactique a laissé une impression de pédagogique.'
    ],
    'synonymes': [
      'pédagogique',
      'instructif',
      'éducatif'
    ],
    'prononciation': '[d-i-d-a-c-t-i-q-u-e]'
  },
  {
    'mot': 'Dilemme',
    'definition': 'Terme qui signifie alternative, choix difficile ou impasse.',
    'exemples': [
      'Ce texte est si dilemme qu’il semble alternative et choix difficile.',
      'Son discours dilemme a laissé une impression de alternative.'
    ],
    'synonymes': [
      'alternative',
      'choix difficile',
      'impasse'
    ],
    'prononciation': '[d-i-l-e-m-m-e]'
  },
  {
    'mot': 'Dissonance',
    'definition': 'Terme qui signifie discordance, disparité ou cacophonie.',
    'exemples': [
      'La dissonance est souvent associée à discordance et disparité.',
      'Dans cette situation, la dissonance reflétait discordance.'
    ],
    'synonymes': [
      'discordance',
      'disparité',
      'cacophonie'
    ],
    'prononciation': '[d-i-s-s-o-n-a-n-c-e]'
  },
  {
    'mot': 'Distorsion',
    'definition': 'Terme qui signifie déformation, torsion ou altération.',
    'exemples': [
      'La distorsion est souvent associée à déformation et torsion.',
      'Dans cette situation, la distorsion reflétait déformation.'
    ],
    'synonymes': [
      'déformation',
      'torsion',
      'altération'
    ],
    'prononciation': '[d-i-s-t-o-r-s-i-o-n]'
  },
  {
    'mot': 'Dithyrambique',
    'definition': 'Terme qui signifie élogieux, enthousiaste ou panégyrique.',
    'exemples': [
      'Ce texte est si dithyrambique qu’il semble élogieux et enthousiaste.',
      'Son discours dithyrambique a laissé une impression de élogieux.'
    ],
    'synonymes': [
      'élogieux',
      'enthousiaste',
      'panégyrique'
    ],
    'prononciation': '[d-i-t-h-y-r-a-m-b-i-q-u-e]'
  },
  {
    'mot': 'Égérie',
    'definition': 'Terme qui signifie muse, inspiratrice ou icône.',
    'exemples': [
      'La égérie est souvent associée à muse et inspiratrice.',
      'Dans cette situation, la égérie reflétait muse.'
    ],
    'synonymes': [
      'muse',
      'inspiratrice',
      'icône'
    ],
    'prononciation': '[é-g-é-r-i-e]'
  },
  {
    'mot': 'Elliptique',
    'definition': 'Terme qui signifie succinct, concise ou abrégé.',
    'exemples': [
      'Ce texte est si elliptique qu’il semble succinct et concise.',
      'Son discours elliptique a laissé une impression de succinct.'
    ],
    'synonymes': [
      'succinct',
      'concise',
      'abrégé'
    ],
    'prononciation': '[e-l-l-i-p-t-i-q-u-e]'
  },
  {
    'mot': 'Élocution',
    'definition': 'Terme qui signifie diction, discours ou parole.',
    'exemples': [
      'La élocution est souvent associée à diction et discours.',
      'Dans cette situation, la élocution reflétait diction.'
    ],
    'synonymes': [
      'diction',
      'discours',
      'parole'
    ],
    'prononciation': '[é-l-o-c-u-t-i-o-n]'
  },
  {
    'mot': 'Élucubration',
    'definition': 'Terme qui signifie divagation, rêverie ou spéculation.',
    'exemples': [
      'La élucubration est souvent associée à divagation et rêverie.',
      'Dans cette situation, la élucubration reflétait divagation.'
    ],
    'synonymes': [
      'divagation',
      'rêverie',
      'spéculation'
    ],
    'prononciation': '[é-l-u-c-u-b-r-a-t-i-o-n]'
  },
  {
    'mot': 'Émancipation',
    'definition': 'Terme qui signifie libération, affranchissement ou indépendance.',
    'exemples': [
      'La émancipation est souvent associée à libération et affranchissement.',
      'Dans cette situation, la émancipation reflétait libération.'
    ],
    'synonymes': [
      'libération',
      'affranchissement',
      'indépendance'
    ],
    'prononciation': '[é-m-a-n-c-i-p-a-t-i-o-n]'
  },
  {
    'mot': 'Émollient',
    'definition': 'Terme qui signifie adoucissant, apaisant ou calmant.',
    'exemples': [
      'Ce texte est si émollient qu’il semble adoucissant et apaisant.',
      'Son discours émollient a laissé une impression de adoucissant.'
    ],
    'synonymes': [
      'adoucissant',
      'apaisant',
      'calmant'
    ],
    'prononciation': '[é-m-o-l-l-i-e-n-t]'
  },
  {
    'mot': 'Engeance',
    'definition': 'Terme qui signifie espèce, catégorie ou tribu.',
    'exemples': [
      'La engeance est souvent associée à espèce et catégorie.',
      'Dans cette situation, la engeance reflétait espèce.'
    ],
    'synonymes': [
      'espèce',
      'catégorie',
      'tribu'
    ],
    'prononciation': '[e-n-g-e-a-n-c-e]'
  },
  {
    'mot': 'Entropie',
    'definition': 'Terme qui signifie désordre, chaos ou incertitude.',
    'exemples': [
      'La entropie est souvent associée à désordre et chaos.',
      'Dans cette situation, la entropie reflétait désordre.'
    ],
    'synonymes': [
      'désordre',
      'chaos',
      'incertitude'
    ],
    'prononciation': '[e-n-t-r-o-p-i-e]'
  },
  {
    'mot': 'Épistolaire',
    'definition': 'Terme qui signifie littéraire, de correspondance ou épistolier.',
    'exemples': [
      'Il a décidé de épistolaire, montrant ainsi littéraire et de correspondance.',
      'Ils ont dû épistolaire pour atteindre littéraire.'
    ],
    'synonymes': [
      'littéraire',
      'de correspondance',
      'épistolier'
    ],
    'prononciation': '[é-p-i-s-t-o-l-a-i-r-e]'
  },
  {
    'mot': 'Eschatologie',
    'definition': 'Terme qui signifie doctrine des fins dernières, théologie de la fin ou apocalyptique.',
    'exemples': [
      'La eschatologie est souvent associée à doctrine des fins dernières et théologie de la fin.',
      'Dans cette situation, la eschatologie reflétait doctrine des fins dernières.'
    ],
    'synonymes': [
      'doctrine des fins dernières',
      'théologie de la fin',
      'apocalyptique'
    ],
    'prononciation': '[e-s-c-h-a-t-o-l-o-g-i-e]'
  },
  {
    'mot': 'Esthétique',
    'definition': 'Terme qui signifie beauté, harmonie ou élégance.',
    'exemples': [
      'Ce texte est si esthétique qu’il semble beauté et harmonie.',
      'Son discours esthétique a laissé une impression de beauté.'
    ],
    'synonymes': [
      'beauté',
      'harmonie',
      'élégance'
    ],
    'prononciation': '[e-s-t-h-é-t-i-q-u-e]'
  },
  {
    'mot': 'Euphémisme',
    'definition': 'Terme qui signifie atténuation, litote ou douceur.',
    'exemples': [
      'La euphémisme est souvent associée à atténuation et litote.',
      'Dans cette situation, la euphémisme reflétait atténuation.'
    ],
    'synonymes': [
      'atténuation',
      'litote',
      'douceur'
    ],
    'prononciation': '[e-u-p-h-é-m-i-s-m-e]'
  },
  {
    'mot': 'Euphonie',
    'definition': 'Terme qui signifie harmonie sonore, musicalité ou mélodie.',
    'exemples': [
      'La euphonie est souvent associée à harmonie sonore et musicalité.',
      'Dans cette situation, la euphonie reflétait harmonie sonore.'
    ],
    'synonymes': [
      'harmonie sonore',
      'musicalité',
      'mélodie'
    ],
    'prononciation': '[e-u-p-h-o-n-i-e]'
  },
  {
    'mot': 'Exégèse',
    'definition': 'Terme qui signifie interprétation, analyse ou commentaire.',
    'exemples': [
      'Ce texte est si exégèse qu’il semble interprétation et analyse.',
      'Son discours exégèse a laissé une impression de interprétation.'
    ],
    'synonymes': [
      'interprétation',
      'analyse',
      'commentaire'
    ],
    'prononciation': '[e-x-é-g-è-s-e]'
  },
  {
    'mot': 'Exhaustif',
    'definition': 'Terme qui signifie complet, total ou intégral.',
    'exemples': [
      'Ce texte est si exhaustif qu’il semble complet et total.',
      'Son discours exhaustif a laissé une impression de complet.'
    ],
    'synonymes': [
      'complet',
      'total',
      'intégral'
    ],
    'prononciation': '[e-x-h-a-u-s-t-i-f]'
  },
  {
    'mot': 'Exogène',
    'definition': 'Terme qui signifie extérieur, externe ou allochtone.',
    'exemples': [
      'Ce texte est si exogène qu’il semble extérieur et externe.',
      'Son discours exogène a laissé une impression de extérieur.'
    ],
    'synonymes': [
      'extérieur',
      'externe',
      'allochtone'
    ],
    'prononciation': '[e-x-o-g-è-n-e]'
  },
  {
    'mot': 'Exotique',
    'definition': 'Terme qui signifie étrange, pittoresque ou d’ailleurs.',
    'exemples': [
      'Ce texte est si exotique qu’il semble étrange et pittoresque.',
      'Son discours exotique a laissé une impression de étrange.'
    ],
    'synonymes': [
      'étrange',
      'pittoresque',
      'd’ailleurs'
    ],
    'prononciation': '[e-x-o-t-i-q-u-e]'
  },
  {
    'mot': 'Exubérance',
    'definition': 'Terme qui signifie abondance, profusion ou opulence.',
    'exemples': [
      'La exubérance est souvent associée à abondance et profusion.',
      'Dans cette situation, la exubérance reflétait abondance.'
    ],
    'synonymes': [
      'abondance',
      'profusion',
      'opulence'
    ],
    'prononciation': '[e-x-u-b-é-r-a-n-c-e]'
  },
  {
    'mot': 'Fastidieux',
    'definition': 'Terme qui signifie ennuyeux, laborieux ou long.',
    'exemples': [
      'Ce texte est si fastidieux qu’il semble ennuyeux et laborieux.',
      'Son discours fastidieux a laissé une impression de ennuyeux.'
    ],
    'synonymes': [
      'ennuyeux',
      'laborieux',
      'long'
    ],
    'prononciation': '[f-a-s-t-i-d-i-e-u-x]'
  },
  {
    'mot': 'Féru',
    'definition': 'Terme qui signifie passionné, érudit ou amateur.',
    'exemples': [
      'Ce texte est si féru qu’il semble passionné et érudit.',
      'Son discours féru a laissé une impression de passionné.'
    ],
    'synonymes': [
      'passionné',
      'érudit',
      'amateur'
    ],
    'prononciation': '[f-é-r-u]'
  },
  {
    'mot': 'Fluxion',
    'definition': 'Terme qui signifie inflammation, congestion ou gonflement.',
    'exemples': [
      'Ce texte est si fluxion qu’il semble inflammation et congestion.',
      'Son discours fluxion a laissé une impression de inflammation.'
    ],
    'synonymes': [
      'inflammation',
      'congestion',
      'gonflement'
    ],
    'prononciation': '[f-l-u-x-i-o-n]'
  },
  {
    'mot': 'Frugalité',
    'definition': 'Terme qui signifie sobriété, simplicité ou austérité.',
    'exemples': [
      'La frugalité est souvent associée à sobriété et simplicité.',
      'Dans cette situation, la frugalité reflétait sobriété.'
    ],
    'synonymes': [
      'sobriété',
      'simplicité',
      'austérité'
    ],
    'prononciation': '[f-r-u-g-a-l-i-t-é]'
  },
  {
    'mot': 'Fugace',
    'definition': 'Terme qui signifie éphémère, passager ou transitoire.',
    'exemples': [
      'Ce texte est si fugace qu’il semble éphémère et passager.',
      'Son discours fugace a laissé une impression de éphémère.'
    ],
    'synonymes': [
      'éphémère',
      'passager',
      'transitoire'
    ],
    'prononciation': '[f-u-g-a-c-e]'
  },
  {
    'mot': 'Fuligineux',
    'definition': 'Terme qui signifie noirâtre, fumeux ou opaque.',
    'exemples': [
      'Ce texte est si fuligineux qu’il semble noirâtre et fumeux.',
      'Son discours fuligineux a laissé une impression de noirâtre.'
    ],
    'synonymes': [
      'noirâtre',
      'fumeux',
      'opaque'
    ],
    'prononciation': '[f-u-l-i-g-i-n-e-u-x]'
  },
  {
    'mot': 'Galvaniser',
    'definition': 'Terme qui signifie stimuler, enflammer ou enthousiasmer.',
    'exemples': [
      'Il a décidé de galvaniser, montrant ainsi stimuler et enflammer.',
      'Ils ont dû galvaniser pour atteindre stimuler.'
    ],
    'synonymes': [
      'stimuler',
      'enflammer',
      'enthousiasmer'
    ],
    'prononciation': '[g-a-l-v-a-n-i-s-e-r]'
  },
  {
    'mot': 'Garrigue',
    'definition': 'Terme qui signifie maquis, brousse ou lande.',
    'exemples': [
      'Ce texte est si garrigue qu’il semble maquis et brousse.',
      'Son discours garrigue a laissé une impression de maquis.'
    ],
    'synonymes': [
      'maquis',
      'brousse',
      'lande'
    ],
    'prononciation': '[g-a-r-r-i-g-u-e]'
  },
  {
    'mot': 'Grandiloquent',
    'definition': 'Terme qui signifie pompeux, ampoulé ou emphatique.',
    'exemples': [
      'Ce texte est si grandiloquent qu’il semble pompeux et ampoulé.',
      'Son discours grandiloquent a laissé une impression de pompeux.'
    ],
    'synonymes': [
      'pompeux',
      'ampoulé',
      'emphatique'
    ],
    'prononciation': '[g-r-a-n-d-i-l-o-q-u-e-n-t]'
  },
  {
    'mot': 'Hagiographie',
    'definition': 'Terme qui signifie biographie pieuse, éloge ou vie de saint.',
    'exemples': [
      'La hagiographie est souvent associée à biographie pieuse et éloge.',
      'Dans cette situation, la hagiographie reflétait biographie pieuse.'
    ],
    'synonymes': [
      'biographie pieuse',
      'éloge',
      'vie de saint'
    ],
    'prononciation': '[h-a-g-i-o-g-r-a-p-h-i-e]'
  },
  {
    'mot': 'Halo',
    'definition': 'Terme qui signifie auréole, couronne ou rayonnement.',
    'exemples': [
      'Ce texte est si halo qu’il semble auréole et couronne.',
      'Son discours halo a laissé une impression de auréole.'
    ],
    'synonymes': [
      'auréole',
      'couronne',
      'rayonnement'
    ],
    'prononciation': '[h-a-l-o]'
  },
  {
    'mot': 'Hasardeux',
    'definition': 'Terme qui signifie aléatoire, risqué ou incertain.',
    'exemples': [
      'Ce texte est si hasardeux qu’il semble aléatoire et risqué.',
      'Son discours hasardeux a laissé une impression de aléatoire.'
    ],
    'synonymes': [
      'aléatoire',
      'risqué',
      'incertain'
    ],
    'prononciation': '[h-a-s-a-r-d-e-u-x]'
  },
  {
    'mot': 'Homérique',
    'definition': 'Terme qui signifie épique, légendaire ou grandiose.',
    'exemples': [
      'Ce texte est si homérique qu’il semble épique et légendaire.',
      'Son discours homérique a laissé une impression de épique.'
    ],
    'synonymes': [
      'épique',
      'légendaire',
      'grandiose'
    ],
    'prononciation': '[h-o-m-é-r-i-q-u-e]'
  },
  {
    'mot': 'Hubris',
    'definition': 'Terme qui signifie orgueil, démesure ou arrogance.',
    'exemples': [
      'Ce texte est si hubris qu’il semble orgueil et démesure.',
      'Son discours hubris a laissé une impression de orgueil.'
    ],
    'synonymes': [
      'orgueil',
      'démesure',
      'arrogance'
    ],
    'prononciation': '[h-u-b-r-i-s]'
  },
  {
    'mot': 'Hybridation',
    'definition': 'Terme qui signifie mélange, croisement ou fusion.',
    'exemples': [
      'La hybridation est souvent associée à mélange et croisement.',
      'Dans cette situation, la hybridation reflétait mélange.'
    ],
    'synonymes': [
      'mélange',
      'croisement',
      'fusion'
    ],
    'prononciation': '[h-y-b-r-i-d-a-t-i-o-n]'
  },
  {
    'mot': 'Idéologie',
    'definition': 'Terme qui signifie doctrine, vision ou système de pensée.',
    'exemples': [
      'La idéologie est souvent associée à doctrine et vision.',
      'Dans cette situation, la idéologie reflétait doctrine.'
    ],
    'synonymes': [
      'doctrine',
      'vision',
      'système de pensée'
    ],
    'prononciation': '[i-d-é-o-l-o-g-i-e]'
  },
  {
    'mot': 'Ignominie',
    'definition': 'Terme qui signifie honte, infamie ou opprobre.',
    'exemples': [
      'La ignominie est souvent associée à honte et infamie.',
      'Dans cette situation, la ignominie reflétait honte.'
    ],
    'synonymes': [
      'honte',
      'infamie',
      'opprobre'
    ],
    'prononciation': '[i-g-n-o-m-i-n-i-e]'
  },
  {
    'mot': 'Immuable',
    'definition': 'Terme qui signifie invariable, fixe ou constant.',
    'exemples': [
      'Ce texte est si immuable qu’il semble invariable et fixe.',
      'Son discours immuable a laissé une impression de invariable.'
    ],
    'synonymes': [
      'invariable',
      'fixe',
      'constant'
    ],
    'prononciation': '[i-m-m-u-a-b-l-e]'
  },
  {
    'mot': 'Immanent',
    'definition': 'Terme qui signifie intrinsèque, interne ou inhérent.',
    'exemples': [
      'Ce texte est si immanent qu’il semble intrinsèque et interne.',
      'Son discours immanent a laissé une impression de intrinsèque.'
    ],
    'synonymes': [
      'intrinsèque',
      'interne',
      'inhérent'
    ],
    'prononciation': '[i-m-m-a-n-e-n-t]'
  },
  {
    'mot': 'Implacable',
    'definition': 'Terme qui signifie inflexible, inévitable ou impitoyable.',
    'exemples': [
      'Ce texte est si implacable qu’il semble inflexible et inévitable.',
      'Son discours implacable a laissé une impression de inflexible.'
    ],
    'synonymes': [
      'inflexible',
      'inévitable',
      'impitoyable'
    ],
    'prononciation': '[i-m-p-l-a-c-a-b-l-e]'
  },
  {
    'mot': 'Impétueux',
    'definition': 'Terme qui signifie fougueux, impulsif ou véhément.',
    'exemples': [
      'Ce texte est si impétueux qu’il semble fougueux et impulsif.',
      'Son discours impétueux a laissé une impression de fougueux.'
    ],
    'synonymes': [
      'fougueux',
      'impulsif',
      'véhément'
    ],
    'prononciation': '[i-m-p-é-t-u-e-u-x]'
  },
  {
    'mot': 'Impudence',
    'definition': 'Terme qui signifie insolence, outrecuidance ou effronterie.',
    'exemples': [
      'La impudence est souvent associée à insolence et outrecuidance.',
      'Dans cette situation, la impudence reflétait insolence.'
    ],
    'synonymes': [
      'insolence',
      'outrecuidance',
      'effronterie'
    ],
    'prononciation': '[i-m-p-u-d-e-n-c-e]'
  },
  {
    'mot': 'Imputation',
    'definition': 'Terme qui signifie accusation, attribution ou reproche.',
    'exemples': [
      'La imputation est souvent associée à accusation et attribution.',
      'Dans cette situation, la imputation reflétait accusation.'
    ],
    'synonymes': [
      'accusation',
      'attribution',
      'reproche'
    ],
    'prononciation': '[i-m-p-u-t-a-t-i-o-n]'
  },
  {
    'mot': 'Incipit',
    'definition': 'Terme qui signifie début, commencement ou ouverture.',
    'exemples': [
      'Ce texte est si incipit qu’il semble début et commencement.',
      'Son discours incipit a laissé une impression de début.'
    ],
    'synonymes': [
      'début',
      'commencement',
      'ouverture'
    ],
    'prononciation': '[i-n-c-i-p-i-t]'
  },
  {
    'mot': 'Incoercible',
    'definition': 'Terme qui signifie irrésistible, incontrôlable ou impossible à contenir.',
    'exemples': [
      'Ce texte est si incoercible qu’il semble irrésistible et incontrôlable.',
      'Son discours incoercible a laissé une impression de irrésistible.'
    ],
    'synonymes': [
      'irrésistible',
      'incontrôlable',
      'impossible à contenir'
    ],
    'prononciation': '[i-n-c-o-e-r-c-i-b-l-e]'
  },
  {
    'mot': 'Incongru',
    'definition': 'Terme qui signifie déplacé, insolite ou inadéquat.',
    'exemples': [
      'Ce texte est si incongru qu’il semble déplacé et insolite.',
      'Son discours incongru a laissé une impression de déplacé.'
    ],
    'synonymes': [
      'déplacé',
      'insolite',
      'inadéquat'
    ],
    'prononciation': '[i-n-c-o-n-g-r-u]'
  },
  {
    'mot': 'Indéfectible',
    'definition': 'Terme qui signifie inlassable, permanent ou inaliénable.',
    'exemples': [
      'Ce texte est si indéfectible qu’il semble inlassable et permanent.',
      'Son discours indéfectible a laissé une impression de inlassable.'
    ],
    'synonymes': [
      'inlassable',
      'permanent',
      'inaliénable'
    ],
    'prononciation': '[i-n-d-é-f-e-c-t-i-b-l-e]'
  },
  {
    'mot': 'Indolent',
    'definition': 'Terme qui signifie nonchalant, paresseux ou languissant.',
    'exemples': [
      'Ce texte est si indolent qu’il semble nonchalant et paresseux.',
      'Son discours indolent a laissé une impression de nonchalant.'
    ],
    'synonymes': [
      'nonchalant',
      'paresseux',
      'languissant'
    ],
    'prononciation': '[i-n-d-o-l-e-n-t]'
  },
  {
    'mot': 'Inexorable',
    'definition': 'Terme qui signifie implacable, inévitable ou inflexible.',
    'exemples': [
      'Ce texte est si inexorable qu’il semble implacable et inévitable.',
      'Son discours inexorable a laissé une impression de implacable.'
    ],
    'synonymes': [
      'implacable',
      'inévitable',
      'inflexible'
    ],
    'prononciation': '[i-n-e-x-o-r-a-b-l-e]'
  },
  {
    'mot': 'Infatuation',
    'definition': 'Terme qui signifie vanité, orgueil ou présomption.',
    'exemples': [
      'La infatuation est souvent associée à vanité et orgueil.',
      'Dans cette situation, la infatuation reflétait vanité.'
    ],
    'synonymes': [
      'vanité',
      'orgueil',
      'présomption'
    ],
    'prononciation': '[i-n-f-a-t-u-a-t-i-o-n]'
  },
  {
    'mot': 'Infinitésimal',
    'definition': 'Terme qui signifie minuscule, microscopique ou imperceptible.',
    'exemples': [
      'Ce texte est si infinitésimal qu’il semble minuscule et microscopique.',
      'Son discours infinitésimal a laissé une impression de minuscule.'
    ],
    'synonymes': [
      'minuscule',
      'microscopique',
      'imperceptible'
    ],
    'prononciation': '[i-n-f-i-n-i-t-é-s-i-m-a-l]'
  },
  {
    'mot': 'Ingénierie',
    'definition': 'Terme qui signifie technicité, construction ou conception.',
    'exemples': [
      'La ingénierie est souvent associée à technicité et construction.',
      'Dans cette situation, la ingénierie reflétait technicité.'
    ],
    'synonymes': [
      'technicité',
      'construction',
      'conception'
    ],
    'prononciation': '[i-n-g-é-n-i-e-r-i-e]'
  },
  {
    'mot': 'Inimitié',
    'definition': 'Terme qui signifie hostilité, rancune ou animosité.',
    'exemples': [
      'Ce texte est si inimitié qu’il semble hostilité et rancune.',
      'Son discours inimitié a laissé une impression de hostilité.'
    ],
    'synonymes': [
      'hostilité',
      'rancune',
      'animosité'
    ],
    'prononciation': '[i-n-i-m-i-t-i-é]'
  },
  {
    'mot': 'Insondable',
    'definition': 'Terme qui signifie impénétrable, mystérieux ou abysmal.',
    'exemples': [
      'Ce texte est si insondable qu’il semble impénétrable et mystérieux.',
      'Son discours insondable a laissé une impression de impénétrable.'
    ],
    'synonymes': [
      'impénétrable',
      'mystérieux',
      'abysmal'
    ],
    'prononciation': '[i-n-s-o-n-d-a-b-l-e]'
  },
  {
    'mot': 'Insouciance',
    'definition': 'Terme qui signifie nonchalance, légèreté ou détachement.',
    'exemples': [
      'La insouciance est souvent associée à nonchalance et légèreté.',
      'Dans cette situation, la insouciance reflétait nonchalance.'
    ],
    'synonymes': [
      'nonchalance',
      'légèreté',
      'détachement'
    ],
    'prononciation': '[i-n-s-o-u-c-i-a-n-c-e]'
  },
  {
    'mot': 'Intangible',
    'definition': 'Terme qui signifie immatériel, impalpable ou invisible.',
    'exemples': [
      'Ce texte est si intangible qu’il semble immatériel et impalpable.',
      'Son discours intangible a laissé une impression de immatériel.'
    ],
    'synonymes': [
      'immatériel',
      'impalpable',
      'invisible'
    ],
    'prononciation': '[i-n-t-a-n-g-i-b-l-e]'
  },
  {
    'mot': 'Intempestif',
    'definition': 'Terme qui signifie inopportun, malvenu ou inattendu.',
    'exemples': [
      'Ce texte est si intempestif qu’il semble inopportun et malvenu.',
      'Son discours intempestif a laissé une impression de inopportun.'
    ],
    'synonymes': [
      'inopportun',
      'malvenu',
      'inattendu'
    ],
    'prononciation': '[i-n-t-e-m-p-e-s-t-i-f]'
  },
  {
    'mot': 'Interlope',
    'definition': 'Terme qui signifie douteux, louche ou suspect.',
    'exemples': [
      'Ce texte est si interlope qu’il semble douteux et louche.',
      'Son discours interlope a laissé une impression de douteux.'
    ],
    'synonymes': [
      'douteux',
      'louche',
      'suspect'
    ],
    'prononciation': '[i-n-t-e-r-l-o-p-e]'
  },
  {
    'mot': 'Interstice',
    'definition': 'Terme qui signifie intervalle, espace ou fissure.',
    'exemples': [
      'Ce texte est si interstice qu’il semble intervalle et espace.',
      'Son discours interstice a laissé une impression de intervalle.'
    ],
    'synonymes': [
      'intervalle',
      'espace',
      'fissure'
    ],
    'prononciation': '[i-n-t-e-r-s-t-i-c-e]'
  },
  {
    'mot': 'Introspection',
    'definition': 'Terme qui signifie réflexion, examen intérieur ou analyse de soi.',
    'exemples': [
      'La introspection est souvent associée à réflexion et examen intérieur.',
      'Dans cette situation, la introspection reflétait réflexion.'
    ],
    'synonymes': [
      'réflexion',
      'examen intérieur',
      'analyse de soi'
    ],
    'prononciation': '[i-n-t-r-o-s-p-e-c-t-i-o-n]'
  },
  {
    'mot': 'Intrinsèque',
    'definition': 'Terme qui signifie inhérent, essentiel ou naturel.',
    'exemples': [
      'Ce texte est si intrinsèque qu’il semble inhérent et essentiel.',
      'Son discours intrinsèque a laissé une impression de inhérent.'
    ],
    'synonymes': [
      'inhérent',
      'essentiel',
      'naturel'
    ],
    'prononciation': '[i-n-t-r-i-n-s-è-q-u-e]'
  },
  {
    'mot': 'Intuition',
    'definition': 'Terme qui signifie pressentiment, instinct ou flair.',
    'exemples': [
      'La intuition est souvent associée à pressentiment et instinct.',
      'Dans cette situation, la intuition reflétait pressentiment.'
    ],
    'synonymes': [
      'pressentiment',
      'instinct',
      'flair'
    ],
    'prononciation': '[i-n-t-u-i-t-i-o-n]'
  },
  {
    'mot': 'Irrémissible',
    'definition': 'Terme qui signifie impardonnable, inévitable ou irrévocable.',
    'exemples': [
      'Ce texte est si irrémissible qu’il semble impardonnable et inévitable.',
      'Son discours irrémissible a laissé une impression de impardonnable.'
    ],
    'synonymes': [
      'impardonnable',
      'inévitable',
      'irrévocable'
    ],
    'prononciation': '[i-r-r-é-m-i-s-s-i-b-l-e]'
  },
  {
    'mot': 'Irrévérence',
    'definition': 'Terme qui signifie impertinence, iconoclasme ou outrage.',
    'exemples': [
      'La irrévérence est souvent associée à impertinence et iconoclasme.',
      'Dans cette situation, la irrévérence reflétait impertinence.'
    ],
    'synonymes': [
      'impertinence',
      'iconoclasme',
      'outrage'
    ],
    'prononciation': '[i-r-r-é-v-é-r-e-n-c-e]'
  },
  {
    'mot': 'Isomorphisme',
    'definition': 'Terme qui signifie similarité, équivalence ou analogie structurelle.',
    'exemples': [
      'La isomorphisme est souvent associée à similarité et équivalence.',
      'Dans cette situation, la isomorphisme reflétait similarité.'
    ],
    'synonymes': [
      'similarité',
      'équivalence',
      'analogie structurelle'
    ],
    'prononciation': '[i-s-o-m-o-r-p-h-i-s-m-e]'
  },
  {
    'mot': 'Jargon',
    'definition': 'Terme qui signifie langage spécialisé, argot ou sabir.',
    'exemples': [
      'Ce texte est si jargon qu’il semble langage spécialisé et argot.',
      'Son discours jargon a laissé une impression de langage spécialisé.'
    ],
    'synonymes': [
      'langage spécialisé',
      'argot',
      'sabir'
    ],
    'prononciation': '[j-a-r-g-o-n]'
  },
  {
    'mot': 'Jaillissement',
    'definition': 'Terme qui signifie éruption, giclée ou épanchement.',
    'exemples': [
      'La jaillissement est souvent associée à éruption et giclée.',
      'Dans cette situation, la jaillissement reflétait éruption.'
    ],
    'synonymes': [
      'éruption',
      'giclée',
      'épanchement'
    ],
    'prononciation': '[j-a-i-l-l-i-s-s-e-m-e-n-t]'
  },
  {
    'mot': 'Jubilatoire',
    'definition': 'Terme qui signifie exaltant, festif ou joyeux.',
    'exemples': [
      'Il a décidé de jubilatoire, montrant ainsi exaltant et festif.',
      'Ils ont dû jubilatoire pour atteindre exaltant.'
    ],
    'synonymes': [
      'exaltant',
      'festif',
      'joyeux'
    ],
    'prononciation': '[j-u-b-i-l-a-t-o-i-r-e]'
  },
  {
    'mot': 'Kabbalistique',
    'definition': 'Terme qui signifie mystique, occultiste ou ésotérique.',
    'exemples': [
      'Ce texte est si kabbalistique qu’il semble mystique et occultiste.',
      'Son discours kabbalistique a laissé une impression de mystique.'
    ],
    'synonymes': [
      'mystique',
      'occultiste',
      'ésotérique'
    ],
    'prononciation': '[k-a-b-b-a-l-i-s-t-i-q-u-e]'
  },
  {
    'mot': 'Kakemphaton',
    'definition': 'Terme qui signifie cacophonie, discordance ou dissonance.',
    'exemples': [
      'Ce texte est si kakemphaton qu’il semble cacophonie et discordance.',
      'Son discours kakemphaton a laissé une impression de cacophonie.'
    ],
    'synonymes': [
      'cacophonie',
      'discordance',
      'dissonance'
    ],
    'prononciation': '[k-a-k-e-m-p-h-a-t-o-n]'
  },
  {
    'mot': 'Kyrielle',
    'definition': 'Terme qui signifie multitude, myriade ou florilège.',
    'exemples': [
      'Ce texte est si kyrielle qu’il semble multitude et myriade.',
      'Son discours kyrielle a laissé une impression de multitude.'
    ],
    'synonymes': [
      'multitude',
      'myriade',
      'florilège'
    ],
    'prononciation': '[k-y-r-i-e-l-l-e]'
  },
  {
    'mot': 'Lacustre',
    'definition': 'Terme qui signifie relatif aux lacs, aquatique ou marin.',
    'exemples': [
      'Il a décidé de lacustre, montrant ainsi relatif aux lacs et aquatique.',
      'Ils ont dû lacustre pour atteindre relatif aux lacs.'
    ],
    'synonymes': [
      'relatif aux lacs',
      'aquatique',
      'marin'
    ],
    'prononciation': '[l-a-c-u-s-t-r-e]'
  },
  {
    'mot': 'Laïus',
    'definition': 'Terme qui signifie discours, baratin ou prêche.',
    'exemples': [
      'Ce texte est si laïus qu’il semble discours et baratin.',
      'Son discours laïus a laissé une impression de discours.'
    ],
    'synonymes': [
      'discours',
      'baratin',
      'prêche'
    ],
    'prononciation': '[l-a-ï-u-s]'
  },
  {
    'mot': 'Latitudinaire',
    'definition': 'Terme qui signifie tolérant, permissif ou libéral.',
    'exemples': [
      'Il a décidé de latitudinaire, montrant ainsi tolérant et permissif.',
      'Ils ont dû latitudinaire pour atteindre tolérant.'
    ],
    'synonymes': [
      'tolérant',
      'permissif',
      'libéral'
    ],
    'prononciation': '[l-a-t-i-t-u-d-i-n-a-i-r-e]'
  },
  {
    'mot': 'Libertin',
    'definition': 'Terme qui signifie débauché, sensuel ou licencieux.',
    'exemples': [
      'Ce texte est si libertin qu’il semble débauché et sensuel.',
      'Son discours libertin a laissé une impression de débauché.'
    ],
    'synonymes': [
      'débauché',
      'sensuel',
      'licencieux'
    ],
    'prononciation': '[l-i-b-e-r-t-i-n]'
  },
  {
    'mot': 'Lubricité',
    'definition': 'Terme qui signifie luxure, dévoyement ou lascivité.',
    'exemples': [
      'La lubricité est souvent associée à luxure et dévoyement.',
      'Dans cette situation, la lubricité reflétait luxure.'
    ],
    'synonymes': [
      'luxure',
      'dévoyement',
      'lascivité'
    ],
    'prononciation': '[l-u-b-r-i-c-i-t-é]'
  },
  {
    'mot': 'Luminescence',
    'definition': 'Terme qui signifie lueur, phosphorescence ou fluorescence.',
    'exemples': [
      'La luminescence est souvent associée à lueur et phosphorescence.',
      'Dans cette situation, la luminescence reflétait lueur.'
    ],
    'synonymes': [
      'lueur',
      'phosphorescence',
      'fluorescence'
    ],
    'prononciation': '[l-u-m-i-n-e-s-c-e-n-c-e]'
  },
  {
    'mot': 'Luxuriant',
    'definition': 'Terme qui signifie abondant, foisonnant ou opulent.',
    'exemples': [
      'Ce texte est si luxuriant qu’il semble abondant et foisonnant.',
      'Son discours luxuriant a laissé une impression de abondant.'
    ],
    'synonymes': [
      'abondant',
      'foisonnant',
      'opulent'
    ],
    'prononciation': '[l-u-x-u-r-i-a-n-t]'
  },
  {
    'mot': 'Maelström',
    'definition': 'Terme qui signifie tourbillon, tourmente ou vortex.',
    'exemples': [
      'Ce texte est si maelström qu’il semble tourbillon et tourmente.',
      'Son discours maelström a laissé une impression de tourbillon.'
    ],
    'synonymes': [
      'tourbillon',
      'tourmente',
      'vortex'
    ],
    'prononciation': '[m-a-e-l-s-t-r-ö-m]'
  },
  {
    'mot': 'Magnanime',
    'definition': 'Terme qui signifie généreux, clément ou noble.',
    'exemples': [
      'Ce texte est si magnanime qu’il semble généreux et clément.',
      'Son discours magnanime a laissé une impression de généreux.'
    ],
    'synonymes': [
      'généreux',
      'clément',
      'noble'
    ],
    'prononciation': '[m-a-g-n-a-n-i-m-e]'
  },
  {
    'mot': 'Maïeutique',
    'definition': 'Terme qui signifie art d’accoucher les esprits, élucidation ou socratisme.',
    'exemples': [
      'Ce texte est si maïeutique qu’il semble art d’accoucher les esprits et élucidation.',
      'Son discours maïeutique a laissé une impression de art d’accoucher les esprits.'
    ],
    'synonymes': [
      'art d’accoucher les esprits',
      'élucidation',
      'socratisme'
    ],
    'prononciation': '[m-a-ï-e-u-t-i-q-u-e]'
  },
  {
    'mot': 'Malversation',
    'definition': 'Terme qui signifie détournement, fraude ou corruption.',
    'exemples': [
      'La malversation est souvent associée à détournement et fraude.',
      'Dans cette situation, la malversation reflétait détournement.'
    ],
    'synonymes': [
      'détournement',
      'fraude',
      'corruption'
    ],
    'prononciation': '[m-a-l-v-e-r-s-a-t-i-o-n]'
  },
  {
    'mot': 'Manichéisme',
    'definition': 'Terme qui signifie dualiste, simpliste ou binaire.',
    'exemples': [
      'La manichéisme est souvent associée à dualiste et simpliste.',
      'Dans cette situation, la manichéisme reflétait dualiste.'
    ],
    'synonymes': [
      'dualiste',
      'simpliste',
      'binaire'
    ],
    'prononciation': '[m-a-n-i-c-h-é-i-s-m-e]'
  },
  {
    'mot': 'Mansuétude',
    'definition': 'Terme qui signifie douceur, clémence ou bienveillance.',
    'exemples': [
      'La mansuétude est souvent associée à douceur et clémence.',
      'Dans cette situation, la mansuétude reflétait douceur.'
    ],
    'synonymes': [
      'douceur',
      'clémence',
      'bienveillance'
    ],
    'prononciation': '[m-a-n-s-u-é-t-u-d-e]'
  },
  {
    'mot': 'Méandres',
    'definition': 'Terme qui signifie détours, sinuosités ou circonvolutions.',
    'exemples': [
      'Ce texte est si méandres qu’il semble détours et sinuosités.',
      'Son discours méandres a laissé une impression de détours.'
    ],
    'synonymes': [
      'détours',
      'sinuosités',
      'circonvolutions'
    ],
    'prononciation': '[m-é-a-n-d-r-e-s]'
  },
  {
    'mot': 'Melliflu',
    'definition': 'Terme qui signifie doux, suave ou mielleux.',
    'exemples': [
      'Ce texte est si melliflu qu’il semble doux et suave.',
      'Son discours melliflu a laissé une impression de doux.'
    ],
    'synonymes': [
      'doux',
      'suave',
      'mielleux'
    ],
    'prononciation': '[m-e-l-l-i-f-l-u]'
  },
  {
    'mot': 'Mélomane',
    'definition': 'Terme qui signifie amateur de musique, musicophile ou musicien.',
    'exemples': [
      'Ce texte est si mélomane qu’il semble amateur de musique et musicophile.',
      'Son discours mélomane a laissé une impression de amateur de musique.'
    ],
    'synonymes': [
      'amateur de musique',
      'musicophile',
      'musicien'
    ],
    'prononciation': '[m-é-l-o-m-a-n-e]'
  },
  {
    'mot': 'Mercantile',
    'definition': 'Terme qui signifie cupide, vénal ou matérialiste.',
    'exemples': [
      'Ce texte est si mercantile qu’il semble cupide et vénal.',
      'Son discours mercantile a laissé une impression de cupide.'
    ],
    'synonymes': [
      'cupide',
      'vénal',
      'matérialiste'
    ],
    'prononciation': '[m-e-r-c-a-n-t-i-l-e]'
  },
  {
    'mot': 'Misandrie',
    'definition': 'Terme qui signifie hostilité envers les hommes, antihomme ou aversion masculine.',
    'exemples': [
      'La misandrie est souvent associée à hostilité envers les hommes et antihomme.',
      'Dans cette situation, la misandrie reflétait hostilité envers les hommes.'
    ],
    'synonymes': [
      'hostilité envers les hommes',
      'antihomme',
      'aversion masculine'
    ],
    'prononciation': '[m-i-s-a-n-d-r-i-e]'
  },
  {
    'mot': 'Misanthropie',
    'definition': 'Terme qui signifie haine de l’humanité, antisociabilité ou aversion pour les humains.',
    'exemples': [
      'La misanthropie est souvent associée à haine de l’humanité et antisociabilité.',
      'Dans cette situation, la misanthropie reflétait haine de l’humanité.'
    ],
    'synonymes': [
      'haine de l’humanité',
      'antisociabilité',
      'aversion pour les humains'
    ],
    'prononciation': '[m-i-s-a-n-t-h-r-o-p-i-e]'
  },
  {
    'mot': 'Mondanité',
    'definition': 'Terme qui signifie sociabilité, vie mondaine ou salon.',
    'exemples': [
      'La mondanité est souvent associée à sociabilité et vie mondaine.',
      'Dans cette situation, la mondanité reflétait sociabilité.'
    ],
    'synonymes': [
      'sociabilité',
      'vie mondaine',
      'salon'
    ],
    'prononciation': '[m-o-n-d-a-n-i-t-é]'
  },
  {
    'mot': 'Monologique',
    'definition': 'Terme qui signifie monologue, discours unilatéral ou univoque.',
    'exemples': [
      'Ce texte est si monologique qu’il semble monologue et discours unilatéral.',
      'Son discours monologique a laissé une impression de monologue.'
    ],
    'synonymes': [
      'monologue',
      'discours unilatéral',
      'univoque'
    ],
    'prononciation': '[m-o-n-o-l-o-g-i-q-u-e]'
  },
  {
    'mot': 'Moribond',
    'definition': 'Terme qui signifie agonisant, mourant ou déclinant.',
    'exemples': [
      'Ce texte est si moribond qu’il semble agonisant et mourant.',
      'Son discours moribond a laissé une impression de agonisant.'
    ],
    'synonymes': [
      'agonisant',
      'mourant',
      'déclinant'
    ],
    'prononciation': '[m-o-r-i-b-o-n-d]'
  },
  {
    'mot': 'Narcissisme',
    'definition': 'Terme qui signifie égocentrisme, vanité ou amour de soi.',
    'exemples': [
      'La narcissisme est souvent associée à égocentrisme et vanité.',
      'Dans cette situation, la narcissisme reflétait égocentrisme.'
    ],
    'synonymes': [
      'égocentrisme',
      'vanité',
      'amour de soi'
    ],
    'prononciation': '[n-a-r-c-i-s-s-i-s-m-e]'
  },
  {
    'mot': 'Népotisme',
    'definition': 'Terme qui signifie favoritisme, copinage ou piston.',
    'exemples': [
      'La népotisme est souvent associée à favoritisme et copinage.',
      'Dans cette situation, la népotisme reflétait favoritisme.'
    ],
    'synonymes': [
      'favoritisme',
      'copinage',
      'piston'
    ],
    'prononciation': '[n-é-p-o-t-i-s-m-e]'
  },
  {
    'mot': 'Nonobstant',
    'definition': 'Terme qui signifie malgré, en dépit de ou toutefois.',
    'exemples': [
      'Ce texte est si nonobstant qu’il semble malgré et en dépit de.',
      'Son discours nonobstant a laissé une impression de malgré.'
    ],
    'synonymes': [
      'malgré',
      'en dépit de',
      'toutefois'
    ],
    'prononciation': '[n-o-n-o-b-s-t-a-n-t]'
  },
  {
    'mot': 'Numismatique',
    'definition': 'Terme qui signifie étude des monnaies, collection de pièces ou science des monnaies.',
    'exemples': [
      'Ce texte est si numismatique qu’il semble étude des monnaies et collection de pièces.',
      'Son discours numismatique a laissé une impression de étude des monnaies.'
    ],
    'synonymes': [
      'étude des monnaies',
      'collection de pièces',
      'science des monnaies'
    ],
    'prononciation': '[n-u-m-i-s-m-a-t-i-q-u-e]'
  },
  {
    'mot': 'Obnubiler',
    'definition': 'Terme qui signifie obséder, saturer l’esprit ou aveugler.',
    'exemples': [
      'Il a décidé de obnubiler, montrant ainsi obséder et saturer l’esprit.',
      'Ils ont dû obnubiler pour atteindre obséder.'
    ],
    'synonymes': [
      'obséder',
      'saturer l’esprit',
      'aveugler'
    ],
    'prononciation': '[o-b-n-u-b-i-l-e-r]'
  },
  {
    'mot': 'Obsolète',
    'definition': 'Terme qui signifie dépassé, désuet ou périmé.',
    'exemples': [
      'Ce texte est si obsolète qu’il semble dépassé et désuet.',
      'Son discours obsolète a laissé une impression de dépassé.'
    ],
    'synonymes': [
      'dépassé',
      'désuet',
      'périmé'
    ],
    'prononciation': '[o-b-s-o-l-è-t-e]'
  },
  {
    'mot': 'Ochlocratie',
    'definition': 'Terme qui signifie pouvoir de la foule, mobocratie ou démagogie.',
    'exemples': [
      'La ochlocratie est souvent associée à pouvoir de la foule et mobocratie.',
      'Dans cette situation, la ochlocratie reflétait pouvoir de la foule.'
    ],
    'synonymes': [
      'pouvoir de la foule',
      'mobocratie',
      'démagogie'
    ],
    'prononciation': '[o-c-h-l-o-c-r-a-t-i-e]'
  },
  {
    'mot': 'Occlusion',
    'definition': 'Terme qui signifie blocage, obstruction ou fermeture.',
    'exemples': [
      'La occlusion est souvent associée à blocage et obstruction.',
      'Dans cette situation, la occlusion reflétait blocage.'
    ],
    'synonymes': [
      'blocage',
      'obstruction',
      'fermeture'
    ],
    'prononciation': '[o-c-c-l-u-s-i-o-n]'
  },
  {
    'mot': 'Oiseux',
    'definition': 'Terme qui signifie inutile, vain ou stérile.',
    'exemples': [
      'Ce texte est si oiseux qu’il semble inutile et vain.',
      'Son discours oiseux a laissé une impression de inutile.'
    ],
    'synonymes': [
      'inutile',
      'vain',
      'stérile'
    ],
    'prononciation': '[o-i-s-e-u-x]'
  },
  {
    'mot': 'Onirique',
    'definition': 'Terme qui signifie rêveur, fantastique ou imaginaire.',
    'exemples': [
      'Ce texte est si onirique qu’il semble rêveur et fantastique.',
      'Son discours onirique a laissé une impression de rêveur.'
    ],
    'synonymes': [
      'rêveur',
      'fantastique',
      'imaginaire'
    ],
    'prononciation': '[o-n-i-r-i-q-u-e]'
  },
  {
    'mot': 'Opprobre',
    'definition': 'Terme qui signifie honte, déshonneur ou infamie.',
    'exemples': [
      'Il a décidé de opprobre, montrant ainsi honte et déshonneur.',
      'Ils ont dû opprobre pour atteindre honte.'
    ],
    'synonymes': [
      'honte',
      'déshonneur',
      'infamie'
    ],
    'prononciation': '[o-p-p-r-o-b-r-e]'
  },
  {
    'mot': 'Oracle',
    'definition': 'Terme qui signifie prophète, augure ou prédiction.',
    'exemples': [
      'Ce texte est si oracle qu’il semble prophète et augure.',
      'Son discours oracle a laissé une impression de prophète.'
    ],
    'synonymes': [
      'prophète',
      'augure',
      'prédiction'
    ],
    'prononciation': '[o-r-a-c-l-e]'
  },
  {
    'mot': 'Ordalie',
    'definition': 'Terme qui signifie jugement divin, épreuve judiciaire ou combat judiciaire.',
    'exemples': [
      'La ordalie est souvent associée à jugement divin et épreuve judiciaire.',
      'Dans cette situation, la ordalie reflétait jugement divin.'
    ],
    'synonymes': [
      'jugement divin',
      'épreuve judiciaire',
      'combat judiciaire'
    ],
    'prononciation': '[o-r-d-a-l-i-e]'
  },
  {
    'mot': 'Orthodoxe',
    'definition': 'Terme qui signifie conformiste, traditionnel ou dogmatique.',
    'exemples': [
      'Ce texte est si orthodoxe qu’il semble conformiste et traditionnel.',
      'Son discours orthodoxe a laissé une impression de conformiste.'
    ],
    'synonymes': [
      'conformiste',
      'traditionnel',
      'dogmatique'
    ],
    'prononciation': '[o-r-t-h-o-d-o-x-e]'
  },
  {
    'mot': 'Ostentatoire',
    'definition': 'Terme qui signifie tapageur, clinquant ou voyant.',
    'exemples': [
      'Il a décidé de ostentatoire, montrant ainsi tapageur et clinquant.',
      'Ils ont dû ostentatoire pour atteindre tapageur.'
    ],
    'synonymes': [
      'tapageur',
      'clinquant',
      'voyant'
    ],
    'prononciation': '[o-s-t-e-n-t-a-t-o-i-r-e]'
  },
  {
    'mot': 'Ostracisme',
    'definition': 'Terme qui signifie exclusion, bannissement ou rejet.',
    'exemples': [
      'La ostracisme est souvent associée à exclusion et bannissement.',
      'Dans cette situation, la ostracisme reflétait exclusion.'
    ],
    'synonymes': [
      'exclusion',
      'bannissement',
      'rejet'
    ],
    'prononciation': '[o-s-t-r-a-c-i-s-m-e]'
  },
  {
    'mot': 'Outrancier',
    'definition': 'Terme qui signifie excessif, extrême ou exagéré.',
    'exemples': [
      'Il a décidé de outrancier, montrant ainsi excessif et extrême.',
      'Ils ont dû outrancier pour atteindre excessif.'
    ],
    'synonymes': [
      'excessif',
      'extrême',
      'exagéré'
    ],
    'prononciation': '[o-u-t-r-a-n-c-i-e-r]'
  },
  {
    'mot': 'Palindrome',
    'definition': 'Terme qui signifie mot palindromique, symétrique ou lecture inversée.',
    'exemples': [
      'Ce texte est si palindrome qu’il semble mot palindromique et symétrique.',
      'Son discours palindrome a laissé une impression de mot palindromique.'
    ],
    'synonymes': [
      'mot palindromique',
      'symétrique',
      'lecture inversée'
    ],
    'prononciation': '[p-a-l-i-n-d-r-o-m-e]'
  },
  {
    'mot': 'Panégyrique',
    'definition': 'Terme qui signifie éloge, discours laudatif ou apologie.',
    'exemples': [
      'Ce texte est si panégyrique qu’il semble éloge et discours laudatif.',
      'Son discours panégyrique a laissé une impression de éloge.'
    ],
    'synonymes': [
      'éloge',
      'discours laudatif',
      'apologie'
    ],
    'prononciation': '[p-a-n-é-g-y-r-i-q-u-e]'
  },
  {
    'mot': 'Panoptique',
    'definition': 'Terme qui signifie observatoire, tour de surveillance ou panorama.',
    'exemples': [
      'Ce texte est si panoptique qu’il semble observatoire et tour de surveillance.',
      'Son discours panoptique a laissé une impression de observatoire.'
    ],
    'synonymes': [
      'observatoire',
      'tour de surveillance',
      'panorama'
    ],
    'prononciation': '[p-a-n-o-p-t-i-q-u-e]'
  },
  {
    'mot': 'Paradigmatique',
    'definition': 'Terme qui signifie exemplaire, modèle ou archétypal.',
    'exemples': [
      'Ce texte est si paradigmatique qu’il semble exemplaire et modèle.',
      'Son discours paradigmatique a laissé une impression de exemplaire.'
    ],
    'synonymes': [
      'exemplaire',
      'modèle',
      'archétypal'
    ],
    'prononciation': '[p-a-r-a-d-i-g-m-a-t-i-q-u-e]'
  },
  {
    'mot': 'Paronyme',
    'definition': 'Terme qui signifie mot ressemblant, quasi‑homonyme ou faux ami.',
    'exemples': [
      'Ce texte est si paronyme qu’il semble mot ressemblant et quasi‑homonyme.',
      'Son discours paronyme a laissé une impression de mot ressemblant.'
    ],
    'synonymes': [
      'mot ressemblant',
      'quasi‑homonyme',
      'faux ami'
    ],
    'prononciation': '[p-a-r-o-n-y-m-e]'
  },
  {
    'mot': 'Parsimonie',
    'definition': 'Terme qui signifie économie, frugalité ou mesquinerie.',
    'exemples': [
      'La parsimonie est souvent associée à économie et frugalité.',
      'Dans cette situation, la parsimonie reflétait économie.'
    ],
    'synonymes': [
      'économie',
      'frugalité',
      'mesquinerie'
    ],
    'prononciation': '[p-a-r-s-i-m-o-n-i-e]'
  },
  {
    'mot': 'Patibulaire',
    'definition': 'Terme qui signifie sinistre, louche ou inquiétant.',
    'exemples': [
      'Il a décidé de patibulaire, montrant ainsi sinistre et louche.',
      'Ils ont dû patibulaire pour atteindre sinistre.'
    ],
    'synonymes': [
      'sinistre',
      'louche',
      'inquiétant'
    ],
    'prononciation': '[p-a-t-i-b-u-l-a-i-r-e]'
  },
  {
    'mot': 'Péremptoire',
    'definition': 'Terme qui signifie catégorique, autoritaire ou tranchant.',
    'exemples': [
      'Il a décidé de péremptoire, montrant ainsi catégorique et autoritaire.',
      'Ils ont dû péremptoire pour atteindre catégorique.'
    ],
    'synonymes': [
      'catégorique',
      'autoritaire',
      'tranchant'
    ],
    'prononciation': '[p-é-r-e-m-p-t-o-i-r-e]'
  },
  {
    'mot': 'Pernicieux',
    'definition': 'Terme qui signifie nuisible, dangereux ou pervers.',
    'exemples': [
      'Ce texte est si pernicieux qu’il semble nuisible et dangereux.',
      'Son discours pernicieux a laissé une impression de nuisible.'
    ],
    'synonymes': [
      'nuisible',
      'dangereux',
      'pervers'
    ],
    'prononciation': '[p-e-r-n-i-c-i-e-u-x]'
  },
  {
    'mot': 'Pertinence',
    'definition': 'Terme qui signifie à‑propos, justesse ou relevance.',
    'exemples': [
      'La pertinence est souvent associée à à‑propos et justesse.',
      'Dans cette situation, la pertinence reflétait à‑propos.'
    ],
    'synonymes': [
      'à‑propos',
      'justesse',
      'relevance'
    ],
    'prononciation': '[p-e-r-t-i-n-e-n-c-e]'
  },
  {
    'mot': 'Pétulant',
    'definition': 'Terme qui signifie turbulent, exubérant ou impétueux.',
    'exemples': [
      'Ce texte est si pétulant qu’il semble turbulent et exubérant.',
      'Son discours pétulant a laissé une impression de turbulent.'
    ],
    'synonymes': [
      'turbulent',
      'exubérant',
      'impétueux'
    ],
    'prononciation': '[p-é-t-u-l-a-n-t]'
  },
  {
    'mot': 'Philistin',
    'definition': 'Terme qui signifie inculte, bourgeois ou prosaïque.',
    'exemples': [
      'Ce texte est si philistin qu’il semble inculte et bourgeois.',
      'Son discours philistin a laissé une impression de inculte.'
    ],
    'synonymes': [
      'inculte',
      'bourgeois',
      'prosaïque'
    ],
    'prononciation': '[p-h-i-l-i-s-t-i-n]'
  },
  {
    'mot': 'Philanthrope',
    'definition': 'Terme qui signifie bienfaiteur, altruiste ou généreux.',
    'exemples': [
      'Ce texte est si philanthrope qu’il semble bienfaiteur et altruiste.',
      'Son discours philanthrope a laissé une impression de bienfaiteur.'
    ],
    'synonymes': [
      'bienfaiteur',
      'altruiste',
      'généreux'
    ],
    'prononciation': '[p-h-i-l-a-n-t-h-r-o-p-e]'
  },
  {
    'mot': 'Phonétique',
    'definition': 'Terme qui signifie prononciation, sons ou phonologie.',
    'exemples': [
      'Ce texte est si phonétique qu’il semble prononciation et sons.',
      'Son discours phonétique a laissé une impression de prononciation.'
    ],
    'synonymes': [
      'prononciation',
      'sons',
      'phonologie'
    ],
    'prononciation': '[p-h-o-n-é-t-i-q-u-e]'
  },
  {
    'mot': 'Phylactère',
    'definition': 'Terme qui signifie bulle, cartouche ou amulette.',
    'exemples': [
      'Il a décidé de phylactère, montrant ainsi bulle et cartouche.',
      'Ils ont dû phylactère pour atteindre bulle.'
    ],
    'synonymes': [
      'bulle',
      'cartouche',
      'amulette'
    ],
    'prononciation': '[p-h-y-l-a-c-t-è-r-e]'
  },
  {
    'mot': 'Piété',
    'definition': 'Terme qui signifie dévotion, ferveur ou religiosité.',
    'exemples': [
      'La piété est souvent associée à dévotion et ferveur.',
      'Dans cette situation, la piété reflétait dévotion.'
    ],
    'synonymes': [
      'dévotion',
      'ferveur',
      'religiosité'
    ],
    'prononciation': '[p-i-é-t-é]'
  },
  {
    'mot': 'Piétisme',
    'definition': 'Terme qui signifie déférence, dévotion excessive ou moralisme.',
    'exemples': [
      'La piétisme est souvent associée à déférence et dévotion excessive.',
      'Dans cette situation, la piétisme reflétait déférence.'
    ],
    'synonymes': [
      'déférence',
      'dévotion excessive',
      'moralisme'
    ],
    'prononciation': '[p-i-é-t-i-s-m-e]'
  },
  {
    'mot': 'Pléonasme',
    'definition': 'Terme qui signifie redondance, répétition ou tautologie.',
    'exemples': [
      'Ce texte est si pléonasme qu’il semble redondance et répétition.',
      'Son discours pléonasme a laissé une impression de redondance.'
    ],
    'synonymes': [
      'redondance',
      'répétition',
      'tautologie'
    ],
    'prononciation': '[p-l-é-o-n-a-s-m-e]'
  },
  {
    'mot': 'Plénitude',
    'definition': 'Terme qui signifie complétude, sérénité ou abondance.',
    'exemples': [
      'La plénitude est souvent associée à complétude et sérénité.',
      'Dans cette situation, la plénitude reflétait complétude.'
    ],
    'synonymes': [
      'complétude',
      'sérénité',
      'abondance'
    ],
    'prononciation': '[p-l-é-n-i-t-u-d-e]'
  },
  {
    'mot': 'Plénipotentiaire',
    'definition': 'Terme qui signifie représentant, délégué ou envoyé.',
    'exemples': [
      'Il a décidé de plénipotentiaire, montrant ainsi représentant et délégué.',
      'Ils ont dû plénipotentiaire pour atteindre représentant.'
    ],
    'synonymes': [
      'représentant',
      'délégué',
      'envoyé'
    ],
    'prononciation': '[p-l-é-n-i-p-o-t-e-n-t-i-a-i-r-e]'
  },
  {
    'mot': 'Pléthorique',
    'definition': 'Terme qui signifie surabondant, excessif ou profus.',
    'exemples': [
      'Ce texte est si pléthorique qu’il semble surabondant et excessif.',
      'Son discours pléthorique a laissé une impression de surabondant.'
    ],
    'synonymes': [
      'surabondant',
      'excessif',
      'profus'
    ],
    'prononciation': '[p-l-é-t-h-o-r-i-q-u-e]'
  },
  {
    'mot': 'Polyphonique',
    'definition': 'Terme qui signifie multivocal, à plusieurs voix ou harmonique.',
    'exemples': [
      'Ce texte est si polyphonique qu’il semble multivocal et à plusieurs voix.',
      'Son discours polyphonique a laissé une impression de multivocal.'
    ],
    'synonymes': [
      'multivocal',
      'à plusieurs voix',
      'harmonique'
    ],
    'prononciation': '[p-o-l-y-p-h-o-n-i-q-u-e]'
  },
  {
    'mot': 'Praxéologie',
    'definition': 'Terme qui signifie science de l’action, théorie des pratiques ou étude des actions.',
    'exemples': [
      'La praxéologie est souvent associée à science de l’action et théorie des pratiques.',
      'Dans cette situation, la praxéologie reflétait science de l’action.'
    ],
    'synonymes': [
      'science de l’action',
      'théorie des pratiques',
      'étude des actions'
    ],
    'prononciation': '[p-r-a-x-é-o-l-o-g-i-e]'
  },
  {
    'mot': 'Préambule',
    'definition': 'Terme qui signifie introduction, préface ou avant‑propos.',
    'exemples': [
      'Ce texte est si préambule qu’il semble introduction et préface.',
      'Son discours préambule a laissé une impression de introduction.'
    ],
    'synonymes': [
      'introduction',
      'préface',
      'avant‑propos'
    ],
    'prononciation': '[p-r-é-a-m-b-u-l-e]'
  },
  {
    'mot': 'Préréglage',
    'definition': 'Terme qui signifie paramétrage, configuration initiale ou réglage prédéfini.',
    'exemples': [
      'Ce texte est si préréglage qu’il semble paramétrage et configuration initiale.',
      'Son discours préréglage a laissé une impression de paramétrage.'
    ],
    'synonymes': [
      'paramétrage',
      'configuration initiale',
      'réglage prédéfini'
    ],
    'prononciation': '[p-r-é-r-é-g-l-a-g-e]'
  },
  {
    'mot': 'Probité',
    'definition': 'Terme qui signifie intégrité, honnêteté ou droiture.',
    'exemples': [
      'La probité est souvent associée à intégrité et honnêteté.',
      'Dans cette situation, la probité reflétait intégrité.'
    ],
    'synonymes': [
      'intégrité',
      'honnêteté',
      'droiture'
    ],
    'prononciation': '[p-r-o-b-i-t-é]'
  },
  {
    'mot': 'Procrastiner',
    'definition': 'Terme qui signifie remettre à plus tard, tergiverser ou ajourner.',
    'exemples': [
      'Il a décidé de procrastiner, montrant ainsi remettre à plus tard et tergiverser.',
      'Ils ont dû procrastiner pour atteindre remettre à plus tard.'
    ],
    'synonymes': [
      'remettre à plus tard',
      'tergiverser',
      'ajourner'
    ],
    'prononciation': '[p-r-o-c-r-a-s-t-i-n-e-r]'
  },
  {
    'mot': 'Prodigue',
    'definition': 'Terme qui signifie dépensier, généreux ou profus.',
    'exemples': [
      'Ce texte est si prodigue qu’il semble dépensier et généreux.',
      'Son discours prodigue a laissé une impression de dépensier.'
    ],
    'synonymes': [
      'dépensier',
      'généreux',
      'profus'
    ],
    'prononciation': '[p-r-o-d-i-g-u-e]'
  },
  {
    'mot': 'Prodigalité',
    'definition': 'Terme qui signifie libéralité, dépense excessive ou largesse.',
    'exemples': [
      'La prodigalité est souvent associée à libéralité et dépense excessive.',
      'Dans cette situation, la prodigalité reflétait libéralité.'
    ],
    'synonymes': [
      'libéralité',
      'dépense excessive',
      'largesse'
    ],
    'prononciation': '[p-r-o-d-i-g-a-l-i-t-é]'
  },
  {
    'mot': 'Profusion',
    'definition': 'Terme qui signifie abondance, plethore ou foisonnement.',
    'exemples': [
      'La profusion est souvent associée à abondance et plethore.',
      'Dans cette situation, la profusion reflétait abondance.'
    ],
    'synonymes': [
      'abondance',
      'plethore',
      'foisonnement'
    ],
    'prononciation': '[p-r-o-f-u-s-i-o-n]'
  },
  {
    'mot': 'Prolifique',
    'definition': 'Terme qui signifie fertile, productif ou abondant.',
    'exemples': [
      'Ce texte est si prolifique qu’il semble fertile et productif.',
      'Son discours prolifique a laissé une impression de fertile.'
    ],
    'synonymes': [
      'fertile',
      'productif',
      'abondant'
    ],
    'prononciation': '[p-r-o-l-i-f-i-q-u-e]'
  },
  {
    'mot': 'Propension',
    'definition': 'Terme qui signifie inclination, tendance ou penchant.',
    'exemples': [
      'La propension est souvent associée à inclination et tendance.',
      'Dans cette situation, la propension reflétait inclination.'
    ],
    'synonymes': [
      'inclination',
      'tendance',
      'penchant'
    ],
    'prononciation': '[p-r-o-p-e-n-s-i-o-n]'
  },
  {
    'mot': 'Proscription',
    'definition': 'Terme qui signifie interdiction, bannissement ou exclusion.',
    'exemples': [
      'La proscription est souvent associée à interdiction et bannissement.',
      'Dans cette situation, la proscription reflétait interdiction.'
    ],
    'synonymes': [
      'interdiction',
      'bannissement',
      'exclusion'
    ],
    'prononciation': '[p-r-o-s-c-r-i-p-t-i-o-n]'
  },
  {
    'mot': 'Prosélytisme',
    'definition': 'Terme qui signifie conversion, propagation ou militantisme.',
    'exemples': [
      'La prosélytisme est souvent associée à conversion et propagation.',
      'Dans cette situation, la prosélytisme reflétait conversion.'
    ],
    'synonymes': [
      'conversion',
      'propagation',
      'militantisme'
    ],
    'prononciation': '[p-r-o-s-é-l-y-t-i-s-m-e]'
  },
  {
    'mot': 'Protéiforme',
    'definition': 'Terme qui signifie multiforme, changeant ou varié.',
    'exemples': [
      'Ce texte est si protéiforme qu’il semble multiforme et changeant.',
      'Son discours protéiforme a laissé une impression de multiforme.'
    ],
    'synonymes': [
      'multiforme',
      'changeant',
      'varié'
    ],
    'prononciation': '[p-r-o-t-é-i-f-o-r-m-e]'
  },
  {
    'mot': 'Psyché',
    'definition': 'Terme qui signifie âme, esprit ou mental.',
    'exemples': [
      'Ce texte est si psyché qu’il semble âme et esprit.',
      'Son discours psyché a laissé une impression de âme.'
    ],
    'synonymes': [
      'âme',
      'esprit',
      'mental'
    ],
    'prononciation': '[p-s-y-c-h-é]'
  },
  {
    'mot': 'Psychotrope',
    'definition': 'Terme qui signifie psychoactif, hallucinogène ou stupéfiant.',
    'exemples': [
      'Ce texte est si psychotrope qu’il semble psychoactif et hallucinogène.',
      'Son discours psychotrope a laissé une impression de psychoactif.'
    ],
    'synonymes': [
      'psychoactif',
      'hallucinogène',
      'stupéfiant'
    ],
    'prononciation': '[p-s-y-c-h-o-t-r-o-p-e]'
  },
  {
    'mot': 'Puéril',
    'definition': 'Terme qui signifie infantile, immature ou enfantin.',
    'exemples': [
      'Ce texte est si puéril qu’il semble infantile et immature.',
      'Son discours puéril a laissé une impression de infantile.'
    ],
    'synonymes': [
      'infantile',
      'immature',
      'enfantin'
    ],
    'prononciation': '[p-u-é-r-i-l]'
  },
  {
    'mot': 'Quadrature',
    'definition': 'Terme qui signifie résolution d’un carré, quadrangulation ou squarisation.',
    'exemples': [
      'Il a décidé de quadrature, montrant ainsi résolution d’un carré et quadrangulation.',
      'Ils ont dû quadrature pour atteindre résolution d’un carré.'
    ],
    'synonymes': [
      'résolution d’un carré',
      'quadrangulation',
      'squarisation'
    ],
    'prononciation': '[q-u-a-d-r-a-t-u-r-e]'
  },
  {
    'mot': 'Quolibet',
    'definition': 'Terme qui signifie raillerie, moquerie ou brocard.',
    'exemples': [
      'Ce texte est si quolibet qu’il semble raillerie et moquerie.',
      'Son discours quolibet a laissé une impression de raillerie.'
    ],
    'synonymes': [
      'raillerie',
      'moquerie',
      'brocard'
    ],
    'prononciation': '[q-u-o-l-i-b-e-t]'
  },
  {
    'mot': 'Quintet',
    'definition': 'Terme qui signifie quintette, ensemble de cinq ou groupe de cinq.',
    'exemples': [
      'Ce texte est si quintet qu’il semble quintette et ensemble de cinq.',
      'Son discours quintet a laissé une impression de quintette.'
    ],
    'synonymes': [
      'quintette',
      'ensemble de cinq',
      'groupe de cinq'
    ],
    'prononciation': '[q-u-i-n-t-e-t]'
  },
  {
    'mot': 'Radiographie',
    'definition': 'Terme qui signifie imagerie, radio ou scopie.',
    'exemples': [
      'La radiographie est souvent associée à imagerie et radio.',
      'Dans cette situation, la radiographie reflétait imagerie.'
    ],
    'synonymes': [
      'imagerie',
      'radio',
      'scopie'
    ],
    'prononciation': '[r-a-d-i-o-g-r-a-p-h-i-e]'
  },
  {
    'mot': 'Ratiocination',
    'definition': 'Terme qui signifie argutie, raisonnement excessif ou chicanerie.',
    'exemples': [
      'La ratiocination est souvent associée à argutie et raisonnement excessif.',
      'Dans cette situation, la ratiocination reflétait argutie.'
    ],
    'synonymes': [
      'argutie',
      'raisonnement excessif',
      'chicanerie'
    ],
    'prononciation': '[r-a-t-i-o-c-i-n-a-t-i-o-n]'
  },
  {
    'mot': 'Récalcitrant',
    'definition': 'Terme qui signifie rétif, rebelle ou indocile.',
    'exemples': [
      'Ce texte est si récalcitrant qu’il semble rétif et rebelle.',
      'Son discours récalcitrant a laissé une impression de rétif.'
    ],
    'synonymes': [
      'rétif',
      'rebelle',
      'indocile'
    ],
    'prononciation': '[r-é-c-a-l-c-i-t-r-a-n-t]'
  },
  {
    'mot': 'Récrimination',
    'definition': 'Terme qui signifie protestation, réprobation ou grief.',
    'exemples': [
      'La récrimination est souvent associée à protestation et réprobation.',
      'Dans cette situation, la récrimination reflétait protestation.'
    ],
    'synonymes': [
      'protestation',
      'réprobation',
      'grief'
    ],
    'prononciation': '[r-é-c-r-i-m-i-n-a-t-i-o-n]'
  },
  {
    'mot': 'Rectitude',
    'definition': 'Terme qui signifie droiture, probité ou rigueur.',
    'exemples': [
      'La rectitude est souvent associée à droiture et probité.',
      'Dans cette situation, la rectitude reflétait droiture.'
    ],
    'synonymes': [
      'droiture',
      'probité',
      'rigueur'
    ],
    'prononciation': '[r-e-c-t-i-t-u-d-e]'
  },
  {
    'mot': 'Refoulement',
    'definition': 'Terme qui signifie suppression, répression ou inhibition.',
    'exemples': [
      'La refoulement est souvent associée à suppression et répression.',
      'Dans cette situation, la refoulement reflétait suppression.'
    ],
    'synonymes': [
      'suppression',
      'répression',
      'inhibition'
    ],
    'prononciation': '[r-e-f-o-u-l-e-m-e-n-t]'
  },
  {
    'mot': 'Rémanence',
    'definition': 'Terme qui signifie persistence, durabilité ou pérennité.',
    'exemples': [
      'La rémanence est souvent associée à persistence et durabilité.',
      'Dans cette situation, la rémanence reflétait persistence.'
    ],
    'synonymes': [
      'persistence',
      'durabilité',
      'pérennité'
    ],
    'prononciation': '[r-é-m-a-n-e-n-c-e]'
  },
  {
    'mot': 'Réminiscence',
    'definition': 'Terme qui signifie souvenir, évocation ou mémoire.',
    'exemples': [
      'La réminiscence est souvent associée à souvenir et évocation.',
      'Dans cette situation, la réminiscence reflétait souvenir.'
    ],
    'synonymes': [
      'souvenir',
      'évocation',
      'mémoire'
    ],
    'prononciation': '[r-é-m-i-n-i-s-c-e-n-c-e]'
  },
  {
    'mot': 'Rémission',
    'definition': 'Terme qui signifie pardon, apaisement ou trêve.',
    'exemples': [
      'La rémission est souvent associée à pardon et apaisement.',
      'Dans cette situation, la rémission reflétait pardon.'
    ],
    'synonymes': [
      'pardon',
      'apaisement',
      'trêve'
    ],
    'prononciation': '[r-é-m-i-s-s-i-o-n]'
  },
  {
    'mot': 'Renégat',
    'definition': 'Terme qui signifie apostat, déserteur ou transfuge.',
    'exemples': [
      'Ce texte est si renégat qu’il semble apostat et déserteur.',
      'Son discours renégat a laissé une impression de apostat.'
    ],
    'synonymes': [
      'apostat',
      'déserteur',
      'transfuge'
    ],
    'prononciation': '[r-e-n-é-g-a-t]'
  },
  {
    'mot': 'Réprobation',
    'definition': 'Terme qui signifie condamnation, désapprobation ou blâme.',
    'exemples': [
      'La réprobation est souvent associée à condamnation et désapprobation.',
      'Dans cette situation, la réprobation reflétait condamnation.'
    ],
    'synonymes': [
      'condamnation',
      'désapprobation',
      'blâme'
    ],
    'prononciation': '[r-é-p-r-o-b-a-t-i-o-n]'
  },
  {
    'mot': 'Rhétorique',
    'definition': 'Terme qui signifie éloquence, discours ou art oratoire.',
    'exemples': [
      'Ce texte est si rhétorique qu’il semble éloquence et discours.',
      'Son discours rhétorique a laissé une impression de éloquence.'
    ],
    'synonymes': [
      'éloquence',
      'discours',
      'art oratoire'
    ],
    'prononciation': '[r-h-é-t-o-r-i-q-u-e]'
  },
  {
    'mot': 'Rodomontade',
    'definition': 'Terme qui signifie fanfaronnade, vantardise ou bomberie.',
    'exemples': [
      'La rodomontade est souvent associée à fanfaronnade et vantardise.',
      'Dans cette situation, la rodomontade reflétait fanfaronnade.'
    ],
    'synonymes': [
      'fanfaronnade',
      'vantardise',
      'bomberie'
    ],
    'prononciation': '[r-o-d-o-m-o-n-t-a-d-e]'
  },
  {
    'mot': 'Saturnien',
    'definition': 'Terme qui signifie mélancolique, lent ou brumeux.',
    'exemples': [
      'Ce texte est si saturnien qu’il semble mélancolique et lent.',
      'Son discours saturnien a laissé une impression de mélancolique.'
    ],
    'synonymes': [
      'mélancolique',
      'lent',
      'brumeux'
    ],
    'prononciation': '[s-a-t-u-r-n-i-e-n]'
  },
  {
    'mot': 'Scission',
    'definition': 'Terme qui signifie division, séparation ou fracture.',
    'exemples': [
      'La scission est souvent associée à division et séparation.',
      'Dans cette situation, la scission reflétait division.'
    ],
    'synonymes': [
      'division',
      'séparation',
      'fracture'
    ],
    'prononciation': '[s-c-i-s-s-i-o-n]'
  },
  {
    'mot': 'Sémaphore',
    'definition': 'Terme qui signifie signal, balise ou panneau.',
    'exemples': [
      'Il a décidé de sémaphore, montrant ainsi signal et balise.',
      'Ils ont dû sémaphore pour atteindre signal.'
    ],
    'synonymes': [
      'signal',
      'balise',
      'panneau'
    ],
    'prononciation': '[s-é-m-a-p-h-o-r-e]'
  },
  {
    'mot': 'Sibyllin',
    'definition': 'Terme qui signifie énigmatique, obscur ou cryptique.',
    'exemples': [
      'Ce texte est si sibyllin qu’il semble énigmatique et obscur.',
      'Son discours sibyllin a laissé une impression de énigmatique.'
    ],
    'synonymes': [
      'énigmatique',
      'obscur',
      'cryptique'
    ],
    'prononciation': '[s-i-b-y-l-l-i-n]'
  },
  {
    'mot': 'Sidération',
    'definition': 'Terme qui signifie stupeur, ébahissement ou ahurissement.',
    'exemples': [
      'La sidération est souvent associée à stupeur et ébahissement.',
      'Dans cette situation, la sidération reflétait stupeur.'
    ],
    'synonymes': [
      'stupeur',
      'ébahissement',
      'ahurissement'
    ],
    'prononciation': '[s-i-d-é-r-a-t-i-o-n]'
  },
  {
    'mot': 'Soliloque',
    'definition': 'Terme qui signifie monologue, discours intérieur ou aparté.',
    'exemples': [
      'Ce texte est si soliloque qu’il semble monologue et discours intérieur.',
      'Son discours soliloque a laissé une impression de monologue.'
    ],
    'synonymes': [
      'monologue',
      'discours intérieur',
      'aparté'
    ],
    'prononciation': '[s-o-l-i-l-o-q-u-e]'
  },
  {
    'mot': 'Sophisme',
    'definition': 'Terme qui signifie raisonnement fallacieux, argument trompeur ou paralogisme.',
    'exemples': [
      'La sophisme est souvent associée à raisonnement fallacieux et argument trompeur.',
      'Dans cette situation, la sophisme reflétait raisonnement fallacieux.'
    ],
    'synonymes': [
      'raisonnement fallacieux',
      'argument trompeur',
      'paralogisme'
    ],
    'prononciation': '[s-o-p-h-i-s-m-e]'
  },
  {
    'mot': 'Stochastique',
    'definition': 'Terme qui signifie aléatoire, probabiliste ou incertain.',
    'exemples': [
      'Ce texte est si stochastique qu’il semble aléatoire et probabiliste.',
      'Son discours stochastique a laissé une impression de aléatoire.'
    ],
    'synonymes': [
      'aléatoire',
      'probabiliste',
      'incertain'
    ],
    'prononciation': '[s-t-o-c-h-a-s-t-i-q-u-e]'
  },
  {
    'mot': 'Stratagème',
    'definition': 'Terme qui signifie ruse, manœuvre ou astuce.',
    'exemples': [
      'Ce texte est si stratagème qu’il semble ruse et manœuvre.',
      'Son discours stratagème a laissé une impression de ruse.'
    ],
    'synonymes': [
      'ruse',
      'manœuvre',
      'astuce'
    ],
    'prononciation': '[s-t-r-a-t-a-g-è-m-e]'
  },
  {
    'mot': 'Succinct',
    'definition': 'Terme qui signifie bref, concise ou lapidaire.',
    'exemples': [
      'Ce texte est si succinct qu’il semble bref et concise.',
      'Son discours succinct a laissé une impression de bref.'
    ],
    'synonymes': [
      'bref',
      'concise',
      'lapidaire'
    ],
    'prononciation': '[s-u-c-c-i-n-c-t]'
  },
  {
    'mot': 'Superflu',
    'definition': 'Terme qui signifie inutile, superfétatoire ou excessif.',
    'exemples': [
      'Ce texte est si superflu qu’il semble inutile et superfétatoire.',
      'Son discours superflu a laissé une impression de inutile.'
    ],
    'synonymes': [
      'inutile',
      'superfétatoire',
      'excessif'
    ],
    'prononciation': '[s-u-p-e-r-f-l-u]'
  },
  {
    'mot': 'Sybarite',
    'definition': 'Terme qui signifie hédoniste, sensuel ou épicurien.',
    'exemples': [
      'Ce texte est si sybarite qu’il semble hédoniste et sensuel.',
      'Son discours sybarite a laissé une impression de hédoniste.'
    ],
    'synonymes': [
      'hédoniste',
      'sensuel',
      'épicurien'
    ],
    'prononciation': '[s-y-b-a-r-i-t-e]'
  },
  {
    'mot': 'Symbiose',
    'definition': 'Terme qui signifie interaction, fusion ou coopération.',
    'exemples': [
      'Ce texte est si symbiose qu’il semble interaction et fusion.',
      'Son discours symbiose a laissé une impression de interaction.'
    ],
    'synonymes': [
      'interaction',
      'fusion',
      'coopération'
    ],
    'prononciation': '[s-y-m-b-i-o-s-e]'
  },
  {
    'mot': 'Synchronique',
    'definition': 'Terme qui signifie simultané, coïncident ou contemporain.',
    'exemples': [
      'Ce texte est si synchronique qu’il semble simultané et coïncident.',
      'Son discours synchronique a laissé une impression de simultané.'
    ],
    'synonymes': [
      'simultané',
      'coïncident',
      'contemporain'
    ],
    'prononciation': '[s-y-n-c-h-r-o-n-i-q-u-e]'
  },
  {
    'mot': 'Synthétique',
    'definition': 'Terme qui signifie artificiel, composite ou combiné.',
    'exemples': [
      'Ce texte est si synthétique qu’il semble artificiel et composite.',
      'Son discours synthétique a laissé une impression de artificiel.'
    ],
    'synonymes': [
      'artificiel',
      'composite',
      'combiné'
    ],
    'prononciation': '[s-y-n-t-h-é-t-i-q-u-e]'
  },
  {
    'mot': 'Taciturne',
    'definition': 'Terme qui signifie silencieux, réservé ou discret.',
    'exemples': [
      'Ce texte est si taciturne qu’il semble silencieux et réservé.',
      'Son discours taciturne a laissé une impression de silencieux.'
    ],
    'synonymes': [
      'silencieux',
      'réservé',
      'discret'
    ],
    'prononciation': '[t-a-c-i-t-u-r-n-e]'
  },
  {
    'mot': 'Taxinomie',
    'definition': 'Terme qui signifie classification, systématique ou nomenclature.',
    'exemples': [
      'La taxinomie est souvent associée à classification et systématique.',
      'Dans cette situation, la taxinomie reflétait classification.'
    ],
    'synonymes': [
      'classification',
      'systématique',
      'nomenclature'
    ],
    'prononciation': '[t-a-x-i-n-o-m-i-e]'
  },
  {
    'mot': 'Téléologie',
    'definition': 'Terme qui signifie finalisme, étude des fins ou téléonomie.',
    'exemples': [
      'La téléologie est souvent associée à finalisme et étude des fins.',
      'Dans cette situation, la téléologie reflétait finalisme.'
    ],
    'synonymes': [
      'finalisme',
      'étude des fins',
      'téléonomie'
    ],
    'prononciation': '[t-é-l-é-o-l-o-g-i-e]'
  },
  {
    'mot': 'Tempérance',
    'definition': 'Terme qui signifie modération, sobriété ou retenue.',
    'exemples': [
      'La tempérance est souvent associée à modération et sobriété.',
      'Dans cette situation, la tempérance reflétait modération.'
    ],
    'synonymes': [
      'modération',
      'sobriété',
      'retenue'
    ],
    'prononciation': '[t-e-m-p-é-r-a-n-c-e]'
  },
  {
    'mot': 'Tergiverser',
    'definition': 'Terme qui signifie hésiter, différer ou ralentir.',
    'exemples': [
      'Il a décidé de tergiverser, montrant ainsi hésiter et différer.',
      'Ils ont dû tergiverser pour atteindre hésiter.'
    ],
    'synonymes': [
      'hésiter',
      'différer',
      'ralentir'
    ],
    'prononciation': '[t-e-r-g-i-v-e-r-s-e-r]'
  },
  {
    'mot': 'Timoré',
    'definition': 'Terme qui signifie peureux, craintif ou pusillanime.',
    'exemples': [
      'Ce texte est si timoré qu’il semble peureux et craintif.',
      'Son discours timoré a laissé une impression de peureux.'
    ],
    'synonymes': [
      'peureux',
      'craintif',
      'pusillanime'
    ],
    'prononciation': '[t-i-m-o-r-é]'
  },
  {
    'mot': 'Tirade',
    'definition': 'Terme qui signifie discours, monologue ou diatribe.',
    'exemples': [
      'La tirade est souvent associée à discours et monologue.',
      'Dans cette situation, la tirade reflétait discours.'
    ],
    'synonymes': [
      'discours',
      'monologue',
      'diatribe'
    ],
    'prononciation': '[t-i-r-a-d-e]'
  },
  {
    'mot': 'Toponymie',
    'definition': 'Terme qui signifie étude des noms de lieux, nomenclature géographique ou onomastique.',
    'exemples': [
      'La toponymie est souvent associée à étude des noms de lieux et nomenclature géographique.',
      'Dans cette situation, la toponymie reflétait étude des noms de lieux.'
    ],
    'synonymes': [
      'étude des noms de lieux',
      'nomenclature géographique',
      'onomastique'
    ],
    'prononciation': '[t-o-p-o-n-y-m-i-e]'
  },
  {
    'mot': 'Transgression',
    'definition': 'Terme qui signifie infraction, violation ou débordement.',
    'exemples': [
      'La transgression est souvent associée à infraction et violation.',
      'Dans cette situation, la transgression reflétait infraction.'
    ],
    'synonymes': [
      'infraction',
      'violation',
      'débordement'
    ],
    'prononciation': '[t-r-a-n-s-g-r-e-s-s-i-o-n]'
  },
  {
    'mot': 'Transversal',
    'definition': 'Terme qui signifie horizontal, interdisciplinaire ou croisé.',
    'exemples': [
      'Ce texte est si transversal qu’il semble horizontal et interdisciplinaire.',
      'Son discours transversal a laissé une impression de horizontal.'
    ],
    'synonymes': [
      'horizontal',
      'interdisciplinaire',
      'croisé'
    ],
    'prononciation': '[t-r-a-n-s-v-e-r-s-a-l]'
  },
  {
    'mot': 'Travestir',
    'definition': 'Terme qui signifie déguiser, dissimuler ou détourner.',
    'exemples': [
      'Il a décidé de travestir, montrant ainsi déguiser et dissimuler.',
      'Ils ont dû travestir pour atteindre déguiser.'
    ],
    'synonymes': [
      'déguiser',
      'dissimuler',
      'détourner'
    ],
    'prononciation': '[t-r-a-v-e-s-t-i-r]'
  },
  {
    'mot': 'Tribulation',
    'definition': 'Terme qui signifie épreuve, tourment ou affliction.',
    'exemples': [
      'La tribulation est souvent associée à épreuve et tourment.',
      'Dans cette situation, la tribulation reflétait épreuve.'
    ],
    'synonymes': [
      'épreuve',
      'tourment',
      'affliction'
    ],
    'prononciation': '[t-r-i-b-u-l-a-t-i-o-n]'
  },
  {
    'mot': 'Tumulte',
    'definition': 'Terme qui signifie agitation, brouhaha ou vacarme.',
    'exemples': [
      'Ce texte est si tumulte qu’il semble agitation et brouhaha.',
      'Son discours tumulte a laissé une impression de agitation.'
    ],
    'synonymes': [
      'agitation',
      'brouhaha',
      'vacarme'
    ],
    'prononciation': '[t-u-m-u-l-t-e]'
  },
  {
    'mot': 'Tyrannique',
    'definition': 'Terme qui signifie despotique, autoritaire ou oppressif.',
    'exemples': [
      'Ce texte est si tyrannique qu’il semble despotique et autoritaire.',
      'Son discours tyrannique a laissé une impression de despotique.'
    ],
    'synonymes': [
      'despotique',
      'autoritaire',
      'oppressif'
    ],
    'prononciation': '[t-y-r-a-n-n-i-q-u-e]'
  },
  {
    'mot': 'Ubiquité',
    'definition': 'Terme qui signifie présence simultanée, omniprésence ou multiprésence.',
    'exemples': [
      'La ubiquité est souvent associée à présence simultanée et omniprésence.',
      'Dans cette situation, la ubiquité reflétait présence simultanée.'
    ],
    'synonymes': [
      'présence simultanée',
      'omniprésence',
      'multiprésence'
    ],
    'prononciation': '[u-b-i-q-u-i-t-é]'
  },
  {
    'mot': 'Ultracrépidarianisme',
    'definition': 'Terme qui signifie impertinence, incompétence ou jugement hâtif.',
    'exemples': [
      'La ultracrépidarianisme est souvent associée à impertinence et incompétence.',
      'Dans cette situation, la ultracrépidarianisme reflétait impertinence.'
    ],
    'synonymes': [
      'impertinence',
      'incompétence',
      'jugement hâtif'
    ],
    'prononciation': '[u-l-t-r-a-c-r-é-p-i-d-a-r-i-a-n-i-s-m-e]'
  },
  {
    'mot': 'Unisson',
    'definition': 'Terme qui signifie ensemble, concordance ou à l’unisson.',
    'exemples': [
      'Ce texte est si unisson qu’il semble ensemble et concordance.',
      'Son discours unisson a laissé une impression de ensemble.'
    ],
    'synonymes': [
      'ensemble',
      'concordance',
      'à l’unisson'
    ],
    'prononciation': '[u-n-i-s-s-o-n]'
  },
  {
    'mot': 'Usurier',
    'definition': 'Terme qui signifie prêteur à taux élevé, avare ou exploiteur.',
    'exemples': [
      'Il a décidé de usurier, montrant ainsi prêteur à taux élevé et avare.',
      'Ils ont dû usurier pour atteindre prêteur à taux élevé.'
    ],
    'synonymes': [
      'prêteur à taux élevé',
      'avare',
      'exploiteur'
    ],
    'prononciation': '[u-s-u-r-i-e-r]'
  },
  {
    'mot': 'Vaticination',
    'definition': 'Terme qui signifie prophétie, présage ou prédiction.',
    'exemples': [
      'La vaticination est souvent associée à prophétie et présage.',
      'Dans cette situation, la vaticination reflétait prophétie.'
    ],
    'synonymes': [
      'prophétie',
      'présage',
      'prédiction'
    ],
    'prononciation': '[v-a-t-i-c-i-n-a-t-i-o-n]'
  },
  {
    'mot': 'Vénal',
    'definition': 'Terme qui signifie corrompu, cupide ou achetable.',
    'exemples': [
      'Ce texte est si vénal qu’il semble corrompu et cupide.',
      'Son discours vénal a laissé une impression de corrompu.'
    ],
    'synonymes': [
      'corrompu',
      'cupide',
      'achetable'
    ],
    'prononciation': '[v-é-n-a-l]'
  },
  {
    'mot': 'Véracité',
    'definition': 'Terme qui signifie authenticité, exactitude ou sincérité.',
    'exemples': [
      'La véracité est souvent associée à authenticité et exactitude.',
      'Dans cette situation, la véracité reflétait authenticité.'
    ],
    'synonymes': [
      'authenticité',
      'exactitude',
      'sincérité'
    ],
    'prononciation': '[v-é-r-a-c-i-t-é]'
  },
  {
    'mot': 'Verbiage',
    'definition': 'Terme qui signifie bavardage, loquacité ou prolixité.',
    'exemples': [
      'Ce texte est si verbiage qu’il semble bavardage et loquacité.',
      'Son discours verbiage a laissé une impression de bavardage.'
    ],
    'synonymes': [
      'bavardage',
      'loquacité',
      'prolixité'
    ],
    'prononciation': '[v-e-r-b-i-a-g-e]'
  },
  {
    'mot': 'Véhémence',
    'definition': 'Terme qui signifie ardeur, fougue ou impétuosité.',
    'exemples': [
      'La véhémence est souvent associée à ardeur et fougue.',
      'Dans cette situation, la véhémence reflétait ardeur.'
    ],
    'synonymes': [
      'ardeur',
      'fougue',
      'impétuosité'
    ],
    'prononciation': '[v-é-h-é-m-e-n-c-e]'
  },
  {
    'mot': 'Vélocité',
    'definition': 'Terme qui signifie rapidité, vitesse ou célérité.',
    'exemples': [
      'La vélocité est souvent associée à rapidité et vitesse.',
      'Dans cette situation, la vélocité reflétait rapidité.'
    ],
    'synonymes': [
      'rapidité',
      'vitesse',
      'célérité'
    ],
    'prononciation': '[v-é-l-o-c-i-t-é]'
  },
  {
    'mot': 'Verve',
    'definition': 'Terme qui signifie éloquence, brio ou faconde.',
    'exemples': [
      'Ce texte est si verve qu’il semble éloquence et brio.',
      'Son discours verve a laissé une impression de éloquence.'
    ],
    'synonymes': [
      'éloquence',
      'brio',
      'faconde'
    ],
    'prononciation': '[v-e-r-v-e]'
  },
  {
    'mot': 'Vernal',
    'definition': 'Terme qui signifie printanier, florissant ou printemps.',
    'exemples': [
      'Ce texte est si vernal qu’il semble printanier et florissant.',
      'Son discours vernal a laissé une impression de printanier.'
    ],
    'synonymes': [
      'printanier',
      'florissant',
      'printemps'
    ],
    'prononciation': '[v-e-r-n-a-l]'
  },
  {
    'mot': 'Vicieux',
    'definition': 'Terme qui signifie pervers, débauché ou malfaisant.',
    'exemples': [
      'Ce texte est si vicieux qu’il semble pervers et débauché.',
      'Son discours vicieux a laissé une impression de pervers.'
    ],
    'synonymes': [
      'pervers',
      'débauché',
      'malfaisant'
    ],
    'prononciation': '[v-i-c-i-e-u-x]'
  },
  {
    'mot': 'Viscéral',
    'definition': 'Terme qui signifie profond, instinctif ou entraînant.',
    'exemples': [
      'Ce texte est si viscéral qu’il semble profond et instinctif.',
      'Son discours viscéral a laissé une impression de profond.'
    ],
    'synonymes': [
      'profond',
      'instinctif',
      'entraînant'
    ],
    'prononciation': '[v-i-s-c-é-r-a-l]'
  },
  {
    'mot': 'Volubilité',
    'definition': 'Terme qui signifie bavardise, loquacité ou faconde.',
    'exemples': [
      'La volubilité est souvent associée à bavardise et loquacité.',
      'Dans cette situation, la volubilité reflétait bavardise.'
    ],
    'synonymes': [
      'bavardise',
      'loquacité',
      'faconde'
    ],
    'prononciation': '[v-o-l-u-b-i-l-i-t-é]'
  },
  {
    'mot': 'Volupté',
    'definition': 'Terme qui signifie plaisir, délice ou sensualité.',
    'exemples': [
      'La volupté est souvent associée à plaisir et délice.',
      'Dans cette situation, la volupté reflétait plaisir.'
    ],
    'synonymes': [
      'plaisir',
      'délice',
      'sensualité'
    ],
    'prononciation': '[v-o-l-u-p-t-é]'
  },
  {
    'mot': 'Voracité',
    'definition': 'Terme qui signifie gourmandise, avidité ou gloutonnerie.',
    'exemples': [
      'La voracité est souvent associée à gourmandise et avidité.',
      'Dans cette situation, la voracité reflétait gourmandise.'
    ],
    'synonymes': [
      'gourmandise',
      'avidité',
      'gloutonnerie'
    ],
    'prononciation': '[v-o-r-a-c-i-t-é]'
  },
  {
    'mot': 'Votif',
    'definition': 'Terme qui signifie offert, dévot ou sacré.',
    'exemples': [
      'Ce texte est si votif qu’il semble offert et dévot.',
      'Son discours votif a laissé une impression de offert.'
    ],
    'synonymes': [
      'offert',
      'dévot',
      'sacré'
    ],
    'prononciation': '[v-o-t-i-f]'
  },
  {
    'mot': 'Xénophile',
    'definition': 'Terme qui signifie accueillant, cosmopolite ou ouvert aux étrangers.',
    'exemples': [
      'Ce texte est si xénophile qu’il semble accueillant et cosmopolite.',
      'Son discours xénophile a laissé une impression de accueillant.'
    ],
    'synonymes': [
      'accueillant',
      'cosmopolite',
      'ouvert aux étrangers'
    ],
    'prononciation': '[x-é-n-o-p-h-i-l-e]'
  },
  {
    'mot': 'Xérophile',
    'definition': 'Terme qui signifie adapté aux milieux secs, tolérant la sécheresse ou xérophyte.',
    'exemples': [
      'Ce texte est si xérophile qu’il semble adapté aux milieux secs et tolérant la sécheresse.',
      'Son discours xérophile a laissé une impression de adapté aux milieux secs.'
    ],
    'synonymes': [
      'adapté aux milieux secs',
      'tolérant la sécheresse',
      'xérophyte'
    ],
    'prononciation': '[x-é-r-o-p-h-i-l-e]'
  },
  {
    'mot': 'Xylophage',
    'definition': 'Terme qui signifie mangeur de bois, insecte du bois ou lignivore.',
    'exemples': [
      'Ce texte est si xylophage qu’il semble mangeur de bois et insecte du bois.',
      'Son discours xylophage a laissé une impression de mangeur de bois.'
    ],
    'synonymes': [
      'mangeur de bois',
      'insecte du bois',
      'lignivore'
    ],
    'prononciation': '[x-y-l-o-p-h-a-g-e]'
  },
  {
    'mot': 'Zénith',
    'definition': 'Terme qui signifie apogée, sommet ou point culminant.',
    'exemples': [
      'Ce texte est si zénith qu’il semble apogée et sommet.',
      'Son discours zénith a laissé une impression de apogée.'
    ],
    'synonymes': [
      'apogée',
      'sommet',
      'point culminant'
    ],
    'prononciation': '[z-é-n-i-t-h]'
  },
  {
    'mot': 'Zététique',
    'definition': 'Terme qui signifie méthode sceptique, doute méthodique ou scepticisme.',
    'exemples': [
      'Ce texte est si zététique qu’il semble méthode sceptique et doute méthodique.',
      'Son discours zététique a laissé une impression de méthode sceptique.'
    ],
    'synonymes': [
      'méthode sceptique',
      'doute méthodique',
      'scepticisme'
    ],
    'prononciation': '[z-é-t-é-t-i-q-u-e]'
  },
  {
    'mot': 'Zeugma',
    'definition': 'Terme qui signifie construction elliptique, figure de style ou ellipse syntaxique.',
    'exemples': [
      'Ce texte est si zeugma qu’il semble construction elliptique et figure de style.',
      'Son discours zeugma a laissé une impression de construction elliptique.'
    ],
    'synonymes': [
      'construction elliptique',
      'figure de style',
      'ellipse syntaxique'
    ],
    'prononciation': '[z-e-u-g-m-a]'
  },
  {
    'mot': 'Zibeline',
    'definition': 'Terme qui signifie fourrure, animal ou martre.',
    'exemples': [
      'Ce texte est si zibeline qu’il semble fourrure et animal.',
      'Son discours zibeline a laissé une impression de fourrure.'
    ],
    'synonymes': [
      'fourrure',
      'animal',
      'martre'
    ],
    'prononciation': '[z-i-b-e-l-i-n-e]'
  },
  {
    'mot': 'Zoophyte',
    'definition': 'Terme qui signifie organisme animal végétal, animal fixe ou hydrozoaire.',
    'exemples': [
      'Ce texte est si zoophyte qu’il semble organisme animal végétal et animal fixe.',
      'Son discours zoophyte a laissé une impression de organisme animal végétal.'
    ],
    'synonymes': [
      'organisme animal végétal',
      'animal fixe',
      'hydrozoaire'
    ],
    'prononciation': '[z-o-o-p-h-y-t-e]'
  },
  {
    'mot': 'Zozoter',
    'definition': 'Terme qui signifie bégayer, bredouiller ou chuintement.',
    'exemples': [
      'Il a décidé de zozoter, montrant ainsi bégayer et bredouiller.',
      'Ils ont dû zozoter pour atteindre bégayer.'
    ],
    'synonymes': [
      'bégayer',
      'bredouiller',
      'chuintement'
    ],
    'prononciation': '[z-o-z-o-t-e-r]'
  },
  {
    'mot': 'Aberrant',
    'definition': 'Terme qui signifie anormal, insensé ou absurde.',
    'exemples': [
      'Ce texte est si aberrant qu’il semble anormal et insensé.',
      'Son discours aberrant a laissé une impression de anormal.'
    ],
    'synonymes': [
      'anormal',
      'insensé',
      'absurde'
    ],
    'prononciation': '[a-b-e-r-r-a-n-t]'
  },
  {
    'mot': 'Abhorrer',
    'definition': 'Terme qui signifie détester, exécrer ou haïr.',
    'exemples': [
      'Il a décidé de abhorrer, montrant ainsi détester et exécrer.',
      'Ils ont dû abhorrer pour atteindre détester.'
    ],
    'synonymes': [
      'détester',
      'exécrer',
      'haïr'
    ],
    'prononciation': '[a-b-h-o-r-r-e-r]'
  },
  {
    'mot': 'Abnégation',
    'definition': 'Terme qui signifie sacrifice, dévouement ou altruisme.',
    'exemples': [
      'La abnégation est souvent associée à sacrifice et dévouement.',
      'Dans cette situation, la abnégation reflétait sacrifice.'
    ],
    'synonymes': [
      'sacrifice',
      'dévouement',
      'altruisme'
    ],
    'prononciation': '[a-b-n-é-g-a-t-i-o-n]'
  },
  {
    'mot': 'Abrogation',
    'definition': 'Terme qui signifie annulation, abolition ou révocation.',
    'exemples': [
      'La abrogation est souvent associée à annulation et abolition.',
      'Dans cette situation, la abrogation reflétait annulation.'
    ],
    'synonymes': [
      'annulation',
      'abolition',
      'révocation'
    ],
    'prononciation': '[a-b-r-o-g-a-t-i-o-n]'
  },
  {
    'mot': 'Acuité',
    'definition': 'Terme qui signifie vivacité, intensité ou perspicacité.',
    'exemples': [
      'La acuité est souvent associée à vivacité et intensité.',
      'Dans cette situation, la acuité reflétait vivacité.'
    ],
    'synonymes': [
      'vivacité',
      'intensité',
      'perspicacité'
    ],
    'prononciation': '[a-c-u-i-t-é]'
  },
  {
    'mot': 'Allocution',
    'definition': 'Terme qui signifie discours, adresse ou harangue.',
    'exemples': [
      'La allocution est souvent associée à discours et adresse.',
      'Dans cette situation, la allocution reflétait discours.'
    ],
    'synonymes': [
      'discours',
      'adresse',
      'harangue'
    ],
    'prononciation': '[a-l-l-o-c-u-t-i-o-n]'
  },
  {
    'mot': 'Anaphore',
    'definition': 'Terme qui signifie répétition, réitération ou anadiplose.',
    'exemples': [
      'Il a décidé de anaphore, montrant ainsi répétition et réitération.',
      'Ils ont dû anaphore pour atteindre répétition.'
    ],
    'synonymes': [
      'répétition',
      'réitération',
      'anadiplose'
    ],
    'prononciation': '[a-n-a-p-h-o-r-e]'
  },
  {
    'mot': 'Ascendance',
    'definition': 'Terme qui signifie parenté, origine ou lignée.',
    'exemples': [
      'La ascendance est souvent associée à parenté et origine.',
      'Dans cette situation, la ascendance reflétait parenté.'
    ],
    'synonymes': [
      'parenté',
      'origine',
      'lignée'
    ],
    'prononciation': '[a-s-c-e-n-d-a-n-c-e]'
  },
  {
    'mot': 'Atonie',
    'definition': 'Terme qui signifie mollesse, apathie ou affaiblissement.',
    'exemples': [
      'La atonie est souvent associée à mollesse et apathie.',
      'Dans cette situation, la atonie reflétait mollesse.'
    ],
    'synonymes': [
      'mollesse',
      'apathie',
      'affaiblissement'
    ],
    'prononciation': '[a-t-o-n-i-e]'
  },
  {
    'mot': 'Augurer',
    'definition': 'Terme qui signifie présager, annoncer ou prédire.',
    'exemples': [
      'Il a décidé de augurer, montrant ainsi présager et annoncer.',
      'Ils ont dû augurer pour atteindre présager.'
    ],
    'synonymes': [
      'présager',
      'annoncer',
      'prédire'
    ],
    'prononciation': '[a-u-g-u-r-e-r]'
  },
  {
    'mot': 'Avatar',
    'definition': 'Terme qui signifie incarnation, transformation ou personnage virtuel.',
    'exemples': [
      'Ce texte est si avatar qu’il semble incarnation et transformation.',
      'Son discours avatar a laissé une impression de incarnation.'
    ],
    'synonymes': [
      'incarnation',
      'transformation',
      'personnage virtuel'
    ],
    'prononciation': '[a-v-a-t-a-r]'
  },
  {
    'mot': 'Axiologique',
    'definition': 'Terme qui signifie relatif aux valeurs, éthique ou valuationnel.',
    'exemples': [
      'Ce texte est si axiologique qu’il semble relatif aux valeurs et éthique.',
      'Son discours axiologique a laissé une impression de relatif aux valeurs.'
    ],
    'synonymes': [
      'relatif aux valeurs',
      'éthique',
      'valuationnel'
    ],
    'prononciation': '[a-x-i-o-l-o-g-i-q-u-e]'
  },
  {
    'mot': 'Béatitude',
    'definition': 'Terme qui signifie félicité, bonheur ou extase.',
    'exemples': [
      'La béatitude est souvent associée à félicité et bonheur.',
      'Dans cette situation, la béatitude reflétait félicité.'
    ],
    'synonymes': [
      'félicité',
      'bonheur',
      'extase'
    ],
    'prononciation': '[b-é-a-t-i-t-u-d-e]'
  },
  {
    'mot': 'Bellicisme',
    'definition': 'Terme qui signifie militarisme, belligérance ou agressivité.',
    'exemples': [
      'La bellicisme est souvent associée à militarisme et belligérance.',
      'Dans cette situation, la bellicisme reflétait militarisme.'
    ],
    'synonymes': [
      'militarisme',
      'belligérance',
      'agressivité'
    ],
    'prononciation': '[b-e-l-l-i-c-i-s-m-e]'
  },
  {
    'mot': 'Bilatéral',
    'definition': 'Terme qui signifie réciproque, mutuel ou à deux côtés.',
    'exemples': [
      'Ce texte est si bilatéral qu’il semble réciproque et mutuel.',
      'Son discours bilatéral a laissé une impression de réciproque.'
    ],
    'synonymes': [
      'réciproque',
      'mutuel',
      'à deux côtés'
    ],
    'prononciation': '[b-i-l-a-t-é-r-a-l]'
  },
  {
    'mot': 'Calomnie',
    'definition': 'Terme qui signifie diffamation, mensonge ou dénigrement.',
    'exemples': [
      'La calomnie est souvent associée à diffamation et mensonge.',
      'Dans cette situation, la calomnie reflétait diffamation.'
    ],
    'synonymes': [
      'diffamation',
      'mensonge',
      'dénigrement'
    ],
    'prononciation': '[c-a-l-o-m-n-i-e]'
  },
  {
    'mot': 'Candide',
    'definition': 'Terme qui signifie ingénu, naïf ou simple.',
    'exemples': [
      'Ce texte est si candide qu’il semble ingénu et naïf.',
      'Son discours candide a laissé une impression de ingénu.'
    ],
    'synonymes': [
      'ingénu',
      'naïf',
      'simple'
    ],
    'prononciation': '[c-a-n-d-i-d-e]'
  },
  {
    'mot': 'Cardinal',
    'definition': 'Terme qui signifie fondamental, principal ou essentiel.',
    'exemples': [
      'Ce texte est si cardinal qu’il semble fondamental et principal.',
      'Son discours cardinal a laissé une impression de fondamental.'
    ],
    'synonymes': [
      'fondamental',
      'principal',
      'essentiel'
    ],
    'prononciation': '[c-a-r-d-i-n-a-l]'
  },
  {
    'mot': 'Chimère',
    'definition': 'Terme qui signifie utopie, fantasme ou illusion.',
    'exemples': [
      'Il a décidé de chimère, montrant ainsi utopie et fantasme.',
      'Ils ont dû chimère pour atteindre utopie.'
    ],
    'synonymes': [
      'utopie',
      'fantasme',
      'illusion'
    ],
    'prononciation': '[c-h-i-m-è-r-e]'
  },
  {
    'mot': 'Chimérique',
    'definition': 'Terme qui signifie fantaisiste, irréaliste ou utopique.',
    'exemples': [
      'Ce texte est si chimérique qu’il semble fantaisiste et irréaliste.',
      'Son discours chimérique a laissé une impression de fantaisiste.'
    ],
    'synonymes': [
      'fantaisiste',
      'irréaliste',
      'utopique'
    ],
    'prononciation': '[c-h-i-m-é-r-i-q-u-e]'
  },
  {
    'mot': 'Cinglant',
    'definition': 'Terme qui signifie acerbe, piquant ou mordant.',
    'exemples': [
      'Ce texte est si cinglant qu’il semble acerbe et piquant.',
      'Son discours cinglant a laissé une impression de acerbe.'
    ],
    'synonymes': [
      'acerbe',
      'piquant',
      'mordant'
    ],
    'prononciation': '[c-i-n-g-l-a-n-t]'
  },
  {
    'mot': 'Circonlocution',
    'definition': 'Terme qui signifie périphrase, détour ou tournure indirecte.',
    'exemples': [
      'La circonlocution est souvent associée à périphrase et détour.',
      'Dans cette situation, la circonlocution reflétait périphrase.'
    ],
    'synonymes': [
      'périphrase',
      'détour',
      'tournure indirecte'
    ],
    'prononciation': '[c-i-r-c-o-n-l-o-c-u-t-i-o-n]'
  },
  {
    'mot': 'Clairvoyant',
    'definition': 'Terme qui signifie lucide, perspicace ou visionnaire.',
    'exemples': [
      'Ce texte est si clairvoyant qu’il semble lucide et perspicace.',
      'Son discours clairvoyant a laissé une impression de lucide.'
    ],
    'synonymes': [
      'lucide',
      'perspicace',
      'visionnaire'
    ],
    'prononciation': '[c-l-a-i-r-v-o-y-a-n-t]'
  },
  {
    'mot': 'Cognitif',
    'definition': 'Terme qui signifie mental, intellectuel ou psychique.',
    'exemples': [
      'Ce texte est si cognitif qu’il semble mental et intellectuel.',
      'Son discours cognitif a laissé une impression de mental.'
    ],
    'synonymes': [
      'mental',
      'intellectuel',
      'psychique'
    ],
    'prononciation': '[c-o-g-n-i-t-i-f]'
  },
  {
    'mot': 'Corroborer',
    'definition': 'Terme qui signifie confirmer, étayer ou appuyer.',
    'exemples': [
      'Il a décidé de corroborer, montrant ainsi confirmer et étayer.',
      'Ils ont dû corroborer pour atteindre confirmer.'
    ],
    'synonymes': [
      'confirmer',
      'étayer',
      'appuyer'
    ],
    'prononciation': '[c-o-r-r-o-b-o-r-e-r]'
  },
  {
    'mot': 'Corrosif',
    'definition': 'Terme qui signifie caustique, mordant ou déstabilisant.',
    'exemples': [
      'Ce texte est si corrosif qu’il semble caustique et mordant.',
      'Son discours corrosif a laissé une impression de caustique.'
    ],
    'synonymes': [
      'caustique',
      'mordant',
      'déstabilisant'
    ],
    'prononciation': '[c-o-r-r-o-s-i-f]'
  },
  {
    'mot': 'Cryptogramme',
    'definition': 'Terme qui signifie message chiffré, énigme ou code.',
    'exemples': [
      'Ce texte est si cryptogramme qu’il semble message chiffré et énigme.',
      'Son discours cryptogramme a laissé une impression de message chiffré.'
    ],
    'synonymes': [
      'message chiffré',
      'énigme',
      'code'
    ],
    'prononciation': '[c-r-y-p-t-o-g-r-a-m-m-e]'
  },
  {
    'mot': 'Curriculum',
    'definition': 'Terme qui signifie programme, parcours ou plan d’étude.',
    'exemples': [
      'Ce texte est si curriculum qu’il semble programme et parcours.',
      'Son discours curriculum a laissé une impression de programme.'
    ],
    'synonymes': [
      'programme',
      'parcours',
      'plan d’étude'
    ],
    'prononciation': '[c-u-r-r-i-c-u-l-u-m]'
  },
  {
    'mot': 'Débonnaire',
    'definition': 'Terme qui signifie bonhomme, bienveillant ou aimable.',
    'exemples': [
      'Il a décidé de débonnaire, montrant ainsi bonhomme et bienveillant.',
      'Ils ont dû débonnaire pour atteindre bonhomme.'
    ],
    'synonymes': [
      'bonhomme',
      'bienveillant',
      'aimable'
    ],
    'prononciation': '[d-é-b-o-n-n-a-i-r-e]'
  },
  {
    'mot': 'Décadent',
    'definition': 'Terme qui signifie dégénéré, démoralisé ou déclinant.',
    'exemples': [
      'Ce texte est si décadent qu’il semble dégénéré et démoralisé.',
      'Son discours décadent a laissé une impression de dégénéré.'
    ],
    'synonymes': [
      'dégénéré',
      'démoralisé',
      'déclinant'
    ],
    'prononciation': '[d-é-c-a-d-e-n-t]'
  },
  {
    'mot': 'Décadence',
    'definition': 'Terme qui signifie déclin, déchéance ou dégradation.',
    'exemples': [
      'La décadence est souvent associée à déclin et déchéance.',
      'Dans cette situation, la décadence reflétait déclin.'
    ],
    'synonymes': [
      'déclin',
      'déchéance',
      'dégradation'
    ],
    'prononciation': '[d-é-c-a-d-e-n-c-e]'
  },
  {
    'mot': 'Dédale',
    'definition': 'Terme qui signifie labyrinthe, enchevêtrement ou méandre.',
    'exemples': [
      'Ce texte est si dédale qu’il semble labyrinthe et enchevêtrement.',
      'Son discours dédale a laissé une impression de labyrinthe.'
    ],
    'synonymes': [
      'labyrinthe',
      'enchevêtrement',
      'méandre'
    ],
    'prononciation': '[d-é-d-a-l-e]'
  },
  {
    'mot': 'Défaitisme',
    'definition': 'Terme qui signifie pessimisme, résignation ou défaite.',
    'exemples': [
      'La défaitisme est souvent associée à pessimisme et résignation.',
      'Dans cette situation, la défaitisme reflétait pessimisme.'
    ],
    'synonymes': [
      'pessimisme',
      'résignation',
      'défaite'
    ],
    'prononciation': '[d-é-f-a-i-t-i-s-m-e]'
  },
  {
    'mot': 'Désinvolte',
    'definition': 'Terme qui signifie désinhibé, insouciant ou indifférent.',
    'exemples': [
      'Ce texte est si désinvolte qu’il semble désinhibé et insouciant.',
      'Son discours désinvolte a laissé une impression de désinhibé.'
    ],
    'synonymes': [
      'désinhibé',
      'insouciant',
      'indifférent'
    ],
    'prononciation': '[d-é-s-i-n-v-o-l-t-e]'
  },
  {
    'mot': 'Désopilant',
    'definition': 'Terme qui signifie hilarant, drôle ou comique.',
    'exemples': [
      'Ce texte est si désopilant qu’il semble hilarant et drôle.',
      'Son discours désopilant a laissé une impression de hilarant.'
    ],
    'synonymes': [
      'hilarant',
      'drôle',
      'comique'
    ],
    'prononciation': '[d-é-s-o-p-i-l-a-n-t]'
  },
  {
    'mot': 'Détracteur',
    'definition': 'Terme qui signifie calomniateur, critique ou opposant.',
    'exemples': [
      'Ce texte est si détracteur qu’il semble calomniateur et critique.',
      'Son discours détracteur a laissé une impression de calomniateur.'
    ],
    'synonymes': [
      'calomniateur',
      'critique',
      'opposant'
    ],
    'prononciation': '[d-é-t-r-a-c-t-e-u-r]'
  },
  {
    'mot': 'Dilettante',
    'definition': 'Terme qui signifie amateur, non spécialiste ou bricoleur.',
    'exemples': [
      'Ce texte est si dilettante qu’il semble amateur et non spécialiste.',
      'Son discours dilettante a laissé une impression de amateur.'
    ],
    'synonymes': [
      'amateur',
      'non spécialiste',
      'bricoleur'
    ],
    'prononciation': '[d-i-l-e-t-t-a-n-t-e]'
  },
  {
    'mot': 'Dispendieux',
    'definition': 'Terme qui signifie coûteux, onéreux ou cher.',
    'exemples': [
      'Ce texte est si dispendieux qu’il semble coûteux et onéreux.',
      'Son discours dispendieux a laissé une impression de coûteux.'
    ],
    'synonymes': [
      'coûteux',
      'onéreux',
      'cher'
    ],
    'prononciation': '[d-i-s-p-e-n-d-i-e-u-x]'
  },
  {
    'mot': 'Disparate',
    'definition': 'Terme qui signifie hétérogène, divers ou bigarré.',
    'exemples': [
      'Ce texte est si disparate qu’il semble hétérogène et divers.',
      'Son discours disparate a laissé une impression de hétérogène.'
    ],
    'synonymes': [
      'hétérogène',
      'divers',
      'bigarré'
    ],
    'prononciation': '[d-i-s-p-a-r-a-t-e]'
  },
  {
    'mot': 'Dissipé',
    'definition': 'Terme qui signifie turbulent, indiscipliné ou agité.',
    'exemples': [
      'Ce texte est si dissipé qu’il semble turbulent et indiscipliné.',
      'Son discours dissipé a laissé une impression de turbulent.'
    ],
    'synonymes': [
      'turbulent',
      'indiscipliné',
      'agité'
    ],
    'prononciation': '[d-i-s-s-i-p-é]'
  },
  {
    'mot': 'Distanciation',
    'definition': 'Terme qui signifie éloignement, recul ou détachement.',
    'exemples': [
      'La distanciation est souvent associée à éloignement et recul.',
      'Dans cette situation, la distanciation reflétait éloignement.'
    ],
    'synonymes': [
      'éloignement',
      'recul',
      'détachement'
    ],
    'prononciation': '[d-i-s-t-a-n-c-i-a-t-i-o-n]'
  },
  {
    'mot': 'Duplicité',
    'definition': 'Terme qui signifie hypocrisie, fausseté ou double jeu.',
    'exemples': [
      'La duplicité est souvent associée à hypocrisie et fausseté.',
      'Dans cette situation, la duplicité reflétait hypocrisie.'
    ],
    'synonymes': [
      'hypocrisie',
      'fausseté',
      'double jeu'
    ],
    'prononciation': '[d-u-p-l-i-c-i-t-é]'
  },
  {
    'mot': 'Éclectique',
    'definition': 'Terme qui signifie diversifié, varié ou large.',
    'exemples': [
      'Ce texte est si éclectique qu’il semble diversifié et varié.',
      'Son discours éclectique a laissé une impression de diversifié.'
    ],
    'synonymes': [
      'diversifié',
      'varié',
      'large'
    ],
    'prononciation': '[é-c-l-e-c-t-i-q-u-e]'
  },
  {
    'mot': 'Effigie',
    'definition': 'Terme qui signifie représentation, portrait ou statue.',
    'exemples': [
      'La effigie est souvent associée à représentation et portrait.',
      'Dans cette situation, la effigie reflétait représentation.'
    ],
    'synonymes': [
      'représentation',
      'portrait',
      'statue'
    ],
    'prononciation': '[e-f-f-i-g-i-e]'
  },
  {
    'mot': 'Effusion',
    'definition': 'Terme qui signifie débordement, déversement ou expression.',
    'exemples': [
      'La effusion est souvent associée à débordement et déversement.',
      'Dans cette situation, la effusion reflétait débordement.'
    ],
    'synonymes': [
      'débordement',
      'déversement',
      'expression'
    ],
    'prononciation': '[e-f-f-u-s-i-o-n]'
  },
  {
    'mot': 'Égrillard',
    'definition': 'Terme qui signifie gaulois, polisson ou libertin.',
    'exemples': [
      'Ce texte est si égrillard qu’il semble gaulois et polisson.',
      'Son discours égrillard a laissé une impression de gaulois.'
    ],
    'synonymes': [
      'gaulois',
      'polisson',
      'libertin'
    ],
    'prononciation': '[é-g-r-i-l-l-a-r-d]'
  },
  {
    'mot': 'Élitaire',
    'definition': 'Terme qui signifie sélectif, élitiste ou distingué.',
    'exemples': [
      'Il a décidé de élitaire, montrant ainsi sélectif et élitiste.',
      'Ils ont dû élitaire pour atteindre sélectif.'
    ],
    'synonymes': [
      'sélectif',
      'élitiste',
      'distingué'
    ],
    'prononciation': '[é-l-i-t-a-i-r-e]'
  },
  {
    'mot': 'Emblématique',
    'definition': 'Terme qui signifie symbolique, représentatif ou icônique.',
    'exemples': [
      'Ce texte est si emblématique qu’il semble symbolique et représentatif.',
      'Son discours emblématique a laissé une impression de symbolique.'
    ],
    'synonymes': [
      'symbolique',
      'représentatif',
      'icônique'
    ],
    'prononciation': '[e-m-b-l-é-m-a-t-i-q-u-e]'
  },
  {
    'mot': 'Éminence',
    'definition': 'Terme qui signifie hauteur, supériorité ou sommet.',
    'exemples': [
      'La éminence est souvent associée à hauteur et supériorité.',
      'Dans cette situation, la éminence reflétait hauteur.'
    ],
    'synonymes': [
      'hauteur',
      'supériorité',
      'sommet'
    ],
    'prononciation': '[é-m-i-n-e-n-c-e]'
  },
  {
    'mot': 'Émotivité',
    'definition': 'Terme qui signifie sensibilité, nervosité ou affectivité.',
    'exemples': [
      'La émotivité est souvent associée à sensibilité et nervosité.',
      'Dans cette situation, la émotivité reflétait sensibilité.'
    ],
    'synonymes': [
      'sensibilité',
      'nervosité',
      'affectivité'
    ],
    'prononciation': '[é-m-o-t-i-v-i-t-é]'
  },
  {
    'mot': 'Empirique',
    'definition': 'Terme qui signifie expérimental, pratique ou concret.',
    'exemples': [
      'Ce texte est si empirique qu’il semble expérimental et pratique.',
      'Son discours empirique a laissé une impression de expérimental.'
    ],
    'synonymes': [
      'expérimental',
      'pratique',
      'concret'
    ],
    'prononciation': '[e-m-p-i-r-i-q-u-e]'
  },
  {
    'mot': 'Enivrant',
    'definition': 'Terme qui signifie grisant, enivrant ou excitant.',
    'exemples': [
      'Ce texte est si enivrant qu’il semble grisant et enivrant.',
      'Son discours enivrant a laissé une impression de grisant.'
    ],
    'synonymes': [
      'grisant',
      'enivrant',
      'excitant'
    ],
    'prononciation': '[e-n-i-v-r-a-n-t]'
  },
  {
    'mot': 'Équanimité',
    'definition': 'Terme qui signifie sérénité, équilibre ou apaisement.',
    'exemples': [
      'La équanimité est souvent associée à sérénité et équilibre.',
      'Dans cette situation, la équanimité reflétait sérénité.'
    ],
    'synonymes': [
      'sérénité',
      'équilibre',
      'apaisement'
    ],
    'prononciation': '[é-q-u-a-n-i-m-i-t-é]'
  },
  {
    'mot': 'Équinoxe',
    'definition': 'Terme qui signifie jour égal, changement de saison ou solstice.',
    'exemples': [
      'Ce texte est si équinoxe qu’il semble jour égal et changement de saison.',
      'Son discours équinoxe a laissé une impression de jour égal.'
    ],
    'synonymes': [
      'jour égal',
      'changement de saison',
      'solstice'
    ],
    'prononciation': '[é-q-u-i-n-o-x-e]'
  },
  {
    'mot': 'Érsatz',
    'definition': 'Terme qui signifie substitut, remplaçant ou succédané.',
    'exemples': [
      'Ce texte est si érsatz qu’il semble substitut et remplaçant.',
      'Son discours érsatz a laissé une impression de substitut.'
    ],
    'synonymes': [
      'substitut',
      'remplaçant',
      'succédané'
    ],
    'prononciation': '[é-r-s-a-t-z]'
  },
  {
    'mot': 'Estafette',
    'definition': 'Terme qui signifie messager, courrier ou éclaireur.',
    'exemples': [
      'Ce texte est si estafette qu’il semble messager et courrier.',
      'Son discours estafette a laissé une impression de messager.'
    ],
    'synonymes': [
      'messager',
      'courrier',
      'éclaireur'
    ],
    'prononciation': '[e-s-t-a-f-e-t-t-e]'
  },
  {
    'mot': 'Éthéré',
    'definition': 'Terme qui signifie aérien, subtil ou léger.',
    'exemples': [
      'Ce texte est si éthéré qu’il semble aérien et subtil.',
      'Son discours éthéré a laissé une impression de aérien.'
    ],
    'synonymes': [
      'aérien',
      'subtil',
      'léger'
    ],
    'prononciation': '[é-t-h-é-r-é]'
  },
  {
    'mot': 'Éthique',
    'definition': 'Terme qui signifie morale, déontologie ou vertu.',
    'exemples': [
      'Ce texte est si éthique qu’il semble morale et déontologie.',
      'Son discours éthique a laissé une impression de morale.'
    ],
    'synonymes': [
      'morale',
      'déontologie',
      'vertu'
    ],
    'prononciation': '[é-t-h-i-q-u-e]'
  },
  {
    'mot': 'Étiole',
    'definition': 'Terme qui signifie s’affaiblir, dépérir ou pâlir.',
    'exemples': [
      'Ce texte est si étiole qu’il semble s’affaiblir et dépérir.',
      'Son discours étiole a laissé une impression de s’affaiblir.'
    ],
    'synonymes': [
      's’affaiblir',
      'dépérir',
      'pâlir'
    ],
    'prononciation': '[é-t-i-o-l-e]'
  },
  {
    'mot': 'Exacerbation',
    'definition': 'Terme qui signifie intensification, aggravation ou amplification.',
    'exemples': [
      'La exacerbation est souvent associée à intensification et aggravation.',
      'Dans cette situation, la exacerbation reflétait intensification.'
    ],
    'synonymes': [
      'intensification',
      'aggravation',
      'amplification'
    ],
    'prononciation': '[e-x-a-c-e-r-b-a-t-i-o-n]'
  },
  {
    'mot': 'Exécration',
    'definition': 'Terme qui signifie horreur, détestation ou abomination.',
    'exemples': [
      'La exécration est souvent associée à horreur et détestation.',
      'Dans cette situation, la exécration reflétait horreur.'
    ],
    'synonymes': [
      'horreur',
      'détestation',
      'abomination'
    ],
    'prononciation': '[e-x-é-c-r-a-t-i-o-n]'
  },
  {
    'mot': 'Fanfaronnade',
    'definition': 'Terme qui signifie vantardise, rodomontade ou forfanterie.',
    'exemples': [
      'La fanfaronnade est souvent associée à vantardise et rodomontade.',
      'Dans cette situation, la fanfaronnade reflétait vantardise.'
    ],
    'synonymes': [
      'vantardise',
      'rodomontade',
      'forfanterie'
    ],
    'prononciation': '[f-a-n-f-a-r-o-n-n-a-d-e]'
  },
  {
    'mot': 'Fantasmagorie',
    'definition': 'Terme qui signifie illusion, vision ou mirage.',
    'exemples': [
      'La fantasmagorie est souvent associée à illusion et vision.',
      'Dans cette situation, la fantasmagorie reflétait illusion.'
    ],
    'synonymes': [
      'illusion',
      'vision',
      'mirage'
    ],
    'prononciation': '[f-a-n-t-a-s-m-a-g-o-r-i-e]'
  },
  {
    'mot': 'Faste',
    'definition': 'Terme qui signifie pomp, splendeur ou magnificence.',
    'exemples': [
      'Ce texte est si faste qu’il semble pomp et splendeur.',
      'Son discours faste a laissé une impression de pomp.'
    ],
    'synonymes': [
      'pomp',
      'splendeur',
      'magnificence'
    ],
    'prononciation': '[f-a-s-t-e]'
  },
  {
    'mot': 'Fasteux',
    'definition': 'Terme qui signifie luxueux, somptueux ou opulent.',
    'exemples': [
      'Ce texte est si fasteux qu’il semble luxueux et somptueux.',
      'Son discours fasteux a laissé une impression de luxueux.'
    ],
    'synonymes': [
      'luxueux',
      'somptueux',
      'opulent'
    ],
    'prononciation': '[f-a-s-t-e-u-x]'
  },
  {
    'mot': 'Félonie',
    'definition': 'Terme qui signifie trahison, perfide ou déloyauté.',
    'exemples': [
      'La félonie est souvent associée à trahison et perfide.',
      'Dans cette situation, la félonie reflétait trahison.'
    ],
    'synonymes': [
      'trahison',
      'perfide',
      'déloyauté'
    ],
    'prononciation': '[f-é-l-o-n-i-e]'
  },
  {
    'mot': 'Ferveur',
    'definition': 'Terme qui signifie ardeur, enthousiasme ou dévotion.',
    'exemples': [
      'Ce texte est si ferveur qu’il semble ardeur et enthousiasme.',
      'Son discours ferveur a laissé une impression de ardeur.'
    ],
    'synonymes': [
      'ardeur',
      'enthousiasme',
      'dévotion'
    ],
    'prononciation': '[f-e-r-v-e-u-r]'
  },
  {
    'mot': 'Flagellation',
    'definition': 'Terme qui signifie fustigation, châtiment ou autodiscipline.',
    'exemples': [
      'La flagellation est souvent associée à fustigation et châtiment.',
      'Dans cette situation, la flagellation reflétait fustigation.'
    ],
    'synonymes': [
      'fustigation',
      'châtiment',
      'autodiscipline'
    ],
    'prononciation': '[f-l-a-g-e-l-l-a-t-i-o-n]'
  },
  {
    'mot': 'Flavescent',
    'definition': 'Terme qui signifie jaunissant, doré ou d’or.',
    'exemples': [
      'Ce texte est si flavescent qu’il semble jaunissant et doré.',
      'Son discours flavescent a laissé une impression de jaunissant.'
    ],
    'synonymes': [
      'jaunissant',
      'doré',
      'd’or'
    ],
    'prononciation': '[f-l-a-v-e-s-c-e-n-t]'
  },
  {
    'mot': 'Florilège',
    'definition': 'Terme qui signifie anthologie, sélection ou panorama.',
    'exemples': [
      'Ce texte est si florilège qu’il semble anthologie et sélection.',
      'Son discours florilège a laissé une impression de anthologie.'
    ],
    'synonymes': [
      'anthologie',
      'sélection',
      'panorama'
    ],
    'prononciation': '[f-l-o-r-i-l-è-g-e]'
  },
  {
    'mot': 'Forfanterie',
    'definition': 'Terme qui signifie fanfaronnade, rodomontade ou vantardise.',
    'exemples': [
      'La forfanterie est souvent associée à fanfaronnade et rodomontade.',
      'Dans cette situation, la forfanterie reflétait fanfaronnade.'
    ],
    'synonymes': [
      'fanfaronnade',
      'rodomontade',
      'vantardise'
    ],
    'prononciation': '[f-o-r-f-a-n-t-e-r-i-e]'
  },
  {
    'mot': 'Fougueux',
    'definition': 'Terme qui signifie ardent, impétueux ou enthousiaste.',
    'exemples': [
      'Ce texte est si fougueux qu’il semble ardent et impétueux.',
      'Son discours fougueux a laissé une impression de ardent.'
    ],
    'synonymes': [
      'ardent',
      'impétueux',
      'enthousiaste'
    ],
    'prononciation': '[f-o-u-g-u-e-u-x]'
  },
  {
    'mot': 'Fustiger',
    'definition': 'Terme qui signifie blâmer, condamner ou critiquer.',
    'exemples': [
      'Il a décidé de fustiger, montrant ainsi blâmer et condamner.',
      'Ils ont dû fustiger pour atteindre blâmer.'
    ],
    'synonymes': [
      'blâmer',
      'condamner',
      'critiquer'
    ],
    'prononciation': '[f-u-s-t-i-g-e-r]'
  },
  {
    'mot': 'Garrulité',
    'definition': 'Terme qui signifie bavardage, logorrhée ou volubilité.',
    'exemples': [
      'La garrulité est souvent associée à bavardage et logorrhée.',
      'Dans cette situation, la garrulité reflétait bavardage.'
    ],
    'synonymes': [
      'bavardage',
      'logorrhée',
      'volubilité'
    ],
    'prononciation': '[g-a-r-r-u-l-i-t-é]'
  },
  {
    'mot': 'Gnoséologie',
    'definition': 'Terme qui signifie épistémologie, théorie de la connaissance ou étude du savoir.',
    'exemples': [
      'La gnoséologie est souvent associée à épistémologie et théorie de la connaissance.',
      'Dans cette situation, la gnoséologie reflétait épistémologie.'
    ],
    'synonymes': [
      'épistémologie',
      'théorie de la connaissance',
      'étude du savoir'
    ],
    'prononciation': '[g-n-o-s-é-o-l-o-g-i-e]'
  },
  {
    'mot': 'Hiératique',
    'definition': 'Terme qui signifie solennel, sacré ou majestueux.',
    'exemples': [
      'Ce texte est si hiératique qu’il semble solennel et sacré.',
      'Son discours hiératique a laissé une impression de solennel.'
    ],
    'synonymes': [
      'solennel',
      'sacré',
      'majestueux'
    ],
    'prononciation': '[h-i-é-r-a-t-i-q-u-e]'
  },
  {
    'mot': 'Hirsute',
    'definition': 'Terme qui signifie ébouriffé, dépeigné ou emmêlé.',
    'exemples': [
      'Ce texte est si hirsute qu’il semble ébouriffé et dépeigné.',
      'Son discours hirsute a laissé une impression de ébouriffé.'
    ],
    'synonymes': [
      'ébouriffé',
      'dépeigné',
      'emmêlé'
    ],
    'prononciation': '[h-i-r-s-u-t-e]'
  },
  {
    'mot': 'Hydrique',
    'definition': 'Terme qui signifie aquatique, humide ou liquide.',
    'exemples': [
      'Ce texte est si hydrique qu’il semble aquatique et humide.',
      'Son discours hydrique a laissé une impression de aquatique.'
    ],
    'synonymes': [
      'aquatique',
      'humide',
      'liquide'
    ],
    'prononciation': '[h-y-d-r-i-q-u-e]'
  },
  {
    'mot': 'Hyperbolique',
    'definition': 'Terme qui signifie exagéré, excessif ou grandiloquent.',
    'exemples': [
      'Ce texte est si hyperbolique qu’il semble exagéré et excessif.',
      'Son discours hyperbolique a laissé une impression de exagéré.'
    ],
    'synonymes': [
      'exagéré',
      'excessif',
      'grandiloquent'
    ],
    'prononciation': '[h-y-p-e-r-b-o-l-i-q-u-e]'
  },
  {
    'mot': 'Hypnagogique',
    'definition': 'Terme qui signifie pré‑sommeil, soporifique ou somnolent.',
    'exemples': [
      'Ce texte est si hypnagogique qu’il semble pré‑sommeil et soporifique.',
      'Son discours hypnagogique a laissé une impression de pré‑sommeil.'
    ],
    'synonymes': [
      'pré‑sommeil',
      'soporifique',
      'somnolent'
    ],
    'prononciation': '[h-y-p-n-a-g-o-g-i-q-u-e]'
  },
  {
    'mot': 'Hypothétique',
    'definition': 'Terme qui signifie supposé, conjectural ou conditionnel.',
    'exemples': [
      'Ce texte est si hypothétique qu’il semble supposé et conjectural.',
      'Son discours hypothétique a laissé une impression de supposé.'
    ],
    'synonymes': [
      'supposé',
      'conjectural',
      'conditionnel'
    ],
    'prononciation': '[h-y-p-o-t-h-é-t-i-q-u-e]'
  },
  {
    'mot': 'Incantation',
    'definition': 'Terme qui signifie formule magique, prière ou invocation.',
    'exemples': [
      'La incantation est souvent associée à formule magique et prière.',
      'Dans cette situation, la incantation reflétait formule magique.'
    ],
    'synonymes': [
      'formule magique',
      'prière',
      'invocation'
    ],
    'prononciation': '[i-n-c-a-n-t-a-t-i-o-n]'
  },
  {
    'mot': 'Inclinable',
    'definition': 'Terme qui signifie flexible, penchable ou réglable.',
    'exemples': [
      'Ce texte est si inclinable qu’il semble flexible et penchable.',
      'Son discours inclinable a laissé une impression de flexible.'
    ],
    'synonymes': [
      'flexible',
      'penchable',
      'réglable'
    ],
    'prononciation': '[i-n-c-l-i-n-a-b-l-e]'
  },
  {
    'mot': 'Incohérent',
    'definition': 'Terme qui signifie illogique, incongru ou désordonné.',
    'exemples': [
      'Ce texte est si incohérent qu’il semble illogique et incongru.',
      'Son discours incohérent a laissé une impression de illogique.'
    ],
    'synonymes': [
      'illogique',
      'incongru',
      'désordonné'
    ],
    'prononciation': '[i-n-c-o-h-é-r-e-n-t]'
  },
  {
    'mot': 'Incrédulité',
    'definition': 'Terme qui signifie scepticisme, doute ou méfiance.',
    'exemples': [
      'La incrédulité est souvent associée à scepticisme et doute.',
      'Dans cette situation, la incrédulité reflétait scepticisme.'
    ],
    'synonymes': [
      'scepticisme',
      'doute',
      'méfiance'
    ],
    'prononciation': '[i-n-c-r-é-d-u-l-i-t-é]'
  },
  {
    'mot': 'Indigence',
    'definition': 'Terme qui signifie pauvreté, misère ou pénurie.',
    'exemples': [
      'La indigence est souvent associée à pauvreté et misère.',
      'Dans cette situation, la indigence reflétait pauvreté.'
    ],
    'synonymes': [
      'pauvreté',
      'misère',
      'pénurie'
    ],
    'prononciation': '[i-n-d-i-g-e-n-c-e]'
  },
  {
    'mot': 'Inefficience',
    'definition': 'Terme qui signifie inefficacité, incapacité ou manque de rendement.',
    'exemples': [
      'La inefficience est souvent associée à inefficacité et incapacité.',
      'Dans cette situation, la inefficience reflétait inefficacité.'
    ],
    'synonymes': [
      'inefficacité',
      'incapacité',
      'manque de rendement'
    ],
    'prononciation': '[i-n-e-f-f-i-c-i-e-n-c-e]'
  },
  {
    'mot': 'Infatué',
    'definition': 'Terme qui signifie vaniteux, imbu de soi ou orgueilleux.',
    'exemples': [
      'Ce texte est si infatué qu’il semble vaniteux et imbu de soi.',
      'Son discours infatué a laissé une impression de vaniteux.'
    ],
    'synonymes': [
      'vaniteux',
      'imbu de soi',
      'orgueilleux'
    ],
    'prononciation': '[i-n-f-a-t-u-é]'
  },
  {
    'mot': 'Infinitude',
    'definition': 'Terme qui signifie infini, illimité ou immensité.',
    'exemples': [
      'La infinitude est souvent associée à infini et illimité.',
      'Dans cette situation, la infinitude reflétait infini.'
    ],
    'synonymes': [
      'infini',
      'illimité',
      'immensité'
    ],
    'prononciation': '[i-n-f-i-n-i-t-u-d-e]'
  },
  {
    'mot': 'Ingérence',
    'definition': 'Terme qui signifie intervention, intrusion ou immixtion.',
    'exemples': [
      'La ingérence est souvent associée à intervention et intrusion.',
      'Dans cette situation, la ingérence reflétait intervention.'
    ],
    'synonymes': [
      'intervention',
      'intrusion',
      'immixtion'
    ],
    'prononciation': '[i-n-g-é-r-e-n-c-e]'
  },
  {
    'mot': 'Inhiber',
    'definition': 'Terme qui signifie bloquer, freiner ou empêcher.',
    'exemples': [
      'Il a décidé de inhiber, montrant ainsi bloquer et freiner.',
      'Ils ont dû inhiber pour atteindre bloquer.'
    ],
    'synonymes': [
      'bloquer',
      'freiner',
      'empêcher'
    ],
    'prononciation': '[i-n-h-i-b-e-r]'
  },
  {
    'mot': 'Iniquité',
    'definition': 'Terme qui signifie injustice, ineptie ou partialité.',
    'exemples': [
      'La iniquité est souvent associée à injustice et ineptie.',
      'Dans cette situation, la iniquité reflétait injustice.'
    ],
    'synonymes': [
      'injustice',
      'ineptie',
      'partialité'
    ],
    'prononciation': '[i-n-i-q-u-i-t-é]'
  },
  {
    'mot': 'Innocuité',
    'definition': 'Terme qui signifie non‑toxicité, inoffensivité ou absence de danger.',
    'exemples': [
      'La innocuité est souvent associée à non‑toxicité et inoffensivité.',
      'Dans cette situation, la innocuité reflétait non‑toxicité.'
    ],
    'synonymes': [
      'non‑toxicité',
      'inoffensivité',
      'absence de danger'
    ],
    'prononciation': '[i-n-n-o-c-u-i-t-é]'
  },
  {
    'mot': 'Insalubre',
    'definition': 'Terme qui signifie malsain, pollué ou impropre.',
    'exemples': [
      'Il a décidé de insalubre, montrant ainsi malsain et pollué.',
      'Ils ont dû insalubre pour atteindre malsain.'
    ],
    'synonymes': [
      'malsain',
      'pollué',
      'impropre'
    ],
    'prononciation': '[i-n-s-a-l-u-b-r-e]'
  },
  {
    'mot': 'Insatiable',
    'definition': 'Terme qui signifie inassouvi, vorace ou inextinguible.',
    'exemples': [
      'Ce texte est si insatiable qu’il semble inassouvi et vorace.',
      'Son discours insatiable a laissé une impression de inassouvi.'
    ],
    'synonymes': [
      'inassouvi',
      'vorace',
      'inextinguible'
    ],
    'prononciation': '[i-n-s-a-t-i-a-b-l-e]'
  },
  {
    'mot': 'Insigne',
    'definition': 'Terme qui signifie remarquable, éminent ou notable.',
    'exemples': [
      'Ce texte est si insigne qu’il semble remarquable et éminent.',
      'Son discours insigne a laissé une impression de remarquable.'
    ],
    'synonymes': [
      'remarquable',
      'éminent',
      'notable'
    ],
    'prononciation': '[i-n-s-i-g-n-e]'
  },
  {
    'mot': 'Insipidité',
    'definition': 'Terme qui signifie fadeur, platitude ou manque de saveur.',
    'exemples': [
      'La insipidité est souvent associée à fadeur et platitude.',
      'Dans cette situation, la insipidité reflétait fadeur.'
    ],
    'synonymes': [
      'fadeur',
      'platitude',
      'manque de saveur'
    ],
    'prononciation': '[i-n-s-i-p-i-d-i-t-é]'
  },
  {
    'mot': 'Insolite',
    'definition': 'Terme qui signifie inhabituel, étrange ou singulier.',
    'exemples': [
      'Ce texte est si insolite qu’il semble inhabituel et étrange.',
      'Son discours insolite a laissé une impression de inhabituel.'
    ],
    'synonymes': [
      'inhabituel',
      'étrange',
      'singulier'
    ],
    'prononciation': '[i-n-s-o-l-i-t-e]'
  },
  {
    'mot': 'Insomniaque',
    'definition': 'Terme qui signifie qui ne dort pas, éveillé ou immanquable.',
    'exemples': [
      'Ce texte est si insomniaque qu’il semble qui ne dort pas et éveillé.',
      'Son discours insomniaque a laissé une impression de qui ne dort pas.'
    ],
    'synonymes': [
      'qui ne dort pas',
      'éveillé',
      'immanquable'
    ],
    'prononciation': '[i-n-s-o-m-n-i-a-q-u-e]'
  },
  {
    'mot': 'Insoumis',
    'definition': 'Terme qui signifie rebelle, indiscipliné ou récalcitrant.',
    'exemples': [
      'Ce texte est si insoumis qu’il semble rebelle et indiscipliné.',
      'Son discours insoumis a laissé une impression de rebelle.'
    ],
    'synonymes': [
      'rebelle',
      'indiscipliné',
      'récalcitrant'
    ],
    'prononciation': '[i-n-s-o-u-m-i-s]'
  },
  {
    'mot': 'Insulaire',
    'definition': 'Terme qui signifie lié à une île, isolé ou îlien.',
    'exemples': [
      'Il a décidé de insulaire, montrant ainsi lié à une île et isolé.',
      'Ils ont dû insulaire pour atteindre lié à une île.'
    ],
    'synonymes': [
      'lié à une île',
      'isolé',
      'îlien'
    ],
    'prononciation': '[i-n-s-u-l-a-i-r-e]'
  },
  {
    'mot': 'Intersidéral',
    'definition': 'Terme qui signifie cosmique, spatial ou galactique.',
    'exemples': [
      'Ce texte est si intersidéral qu’il semble cosmique et spatial.',
      'Son discours intersidéral a laissé une impression de cosmique.'
    ],
    'synonymes': [
      'cosmique',
      'spatial',
      'galactique'
    ],
    'prononciation': '[i-n-t-e-r-s-i-d-é-r-a-l]'
  },
  {
    'mot': 'Interstitiel',
    'definition': 'Terme qui signifie intermédiaire, entre‑deux ou espace libre.',
    'exemples': [
      'Ce texte est si interstitiel qu’il semble intermédiaire et entre‑deux.',
      'Son discours interstitiel a laissé une impression de intermédiaire.'
    ],
    'synonymes': [
      'intermédiaire',
      'entre‑deux',
      'espace libre'
    ],
    'prononciation': '[i-n-t-e-r-s-t-i-t-i-e-l]'
  },
  {
    'mot': 'Intransigeant',
    'definition': 'Terme qui signifie rigide, inflexible ou strict.',
    'exemples': [
      'Ce texte est si intransigeant qu’il semble rigide et inflexible.',
      'Son discours intransigeant a laissé une impression de rigide.'
    ],
    'synonymes': [
      'rigide',
      'inflexible',
      'strict'
    ],
    'prononciation': '[i-n-t-r-a-n-s-i-g-e-a-n-t]'
  },
  {
    'mot': 'Introspectif',
    'definition': 'Terme qui signifie réfléchi, analytique ou réflexif.',
    'exemples': [
      'Ce texte est si introspectif qu’il semble réfléchi et analytique.',
      'Son discours introspectif a laissé une impression de réfléchi.'
    ],
    'synonymes': [
      'réfléchi',
      'analytique',
      'réflexif'
    ],
    'prononciation': '[i-n-t-r-o-s-p-e-c-t-i-f]'
  },
  {
    'mot': 'Iridescent',
    'definition': 'Terme qui signifie chatoyant, nacré ou bigarré.',
    'exemples': [
      'Ce texte est si iridescent qu’il semble chatoyant et nacré.',
      'Son discours iridescent a laissé une impression de chatoyant.'
    ],
    'synonymes': [
      'chatoyant',
      'nacré',
      'bigarré'
    ],
    'prononciation': '[i-r-i-d-e-s-c-e-n-t]'
  },
  {
    'mot': 'Ironique',
    'definition': 'Terme qui signifie sarcastique, moqueur ou caustique.',
    'exemples': [
      'Ce texte est si ironique qu’il semble sarcastique et moqueur.',
      'Son discours ironique a laissé une impression de sarcastique.'
    ],
    'synonymes': [
      'sarcastique',
      'moqueur',
      'caustique'
    ],
    'prononciation': '[i-r-o-n-i-q-u-e]'
  },
  {
    'mot': 'Jactance',
    'definition': 'Terme qui signifie vantardise, forfanterie ou fanfaronnade.',
    'exemples': [
      'La jactance est souvent associée à vantardise et forfanterie.',
      'Dans cette situation, la jactance reflétait vantardise.'
    ],
    'synonymes': [
      'vantardise',
      'forfanterie',
      'fanfaronnade'
    ],
    'prononciation': '[j-a-c-t-a-n-c-e]'
  },
  {
    'mot': 'Juger',
    'definition': 'Terme qui signifie évaluer, apprécier ou arbitrer.',
    'exemples': [
      'Il a décidé de juger, montrant ainsi évaluer et apprécier.',
      'Ils ont dû juger pour atteindre évaluer.'
    ],
    'synonymes': [
      'évaluer',
      'apprécier',
      'arbitrer'
    ],
    'prononciation': '[j-u-g-e-r]'
  },
  {
    'mot': 'Juvénile',
    'definition': 'Terme qui signifie adolescent, puéril ou enfantin.',
    'exemples': [
      'Ce texte est si juvénile qu’il semble adolescent et puéril.',
      'Son discours juvénile a laissé une impression de adolescent.'
    ],
    'synonymes': [
      'adolescent',
      'puéril',
      'enfantin'
    ],
    'prononciation': '[j-u-v-é-n-i-l-e]'
  },
  {
    'mot': 'Lacunaire',
    'definition': 'Terme qui signifie incomplet, défectueux ou imparfait.',
    'exemples': [
      'Il a décidé de lacunaire, montrant ainsi incomplet et défectueux.',
      'Ils ont dû lacunaire pour atteindre incomplet.'
    ],
    'synonymes': [
      'incomplet',
      'défectueux',
      'imparfait'
    ],
    'prononciation': '[l-a-c-u-n-a-i-r-e]'
  },
  {
    'mot': 'Labyrinthe',
    'definition': 'Terme qui signifie dédale, enchevêtrement ou maze.',
    'exemples': [
      'Ce texte est si labyrinthe qu’il semble dédale et enchevêtrement.',
      'Son discours labyrinthe a laissé une impression de dédale.'
    ],
    'synonymes': [
      'dédale',
      'enchevêtrement',
      'maze'
    ],
    'prononciation': '[l-a-b-y-r-i-n-t-h-e]'
  },
  {
    'mot': 'Laconisme',
    'definition': 'Terme qui signifie brièveté, succinct ou concision.',
    'exemples': [
      'La laconisme est souvent associée à brièveté et succinct.',
      'Dans cette situation, la laconisme reflétait brièveté.'
    ],
    'synonymes': [
      'brièveté',
      'succinct',
      'concision'
    ],
    'prononciation': '[l-a-c-o-n-i-s-m-e]'
  },
  {
    'mot': 'Laxisme',
    'definition': 'Terme qui signifie permissivité, tolérance ou indulgence.',
    'exemples': [
      'La laxisme est souvent associée à permissivité et tolérance.',
      'Dans cette situation, la laxisme reflétait permissivité.'
    ],
    'synonymes': [
      'permissivité',
      'tolérance',
      'indulgence'
    ],
    'prononciation': '[l-a-x-i-s-m-e]'
  },
  {
    'mot': 'Légiférer',
    'definition': 'Terme qui signifie réglementer, statuer ou loi.',
    'exemples': [
      'Il a décidé de légiférer, montrant ainsi réglementer et statuer.',
      'Ils ont dû légiférer pour atteindre réglementer.'
    ],
    'synonymes': [
      'réglementer',
      'statuer',
      'loi'
    ],
    'prononciation': '[l-é-g-i-f-é-r-e-r]'
  },
  {
    'mot': 'Léthargique',
    'definition': 'Terme qui signifie somnolent, apathique ou assoupi.',
    'exemples': [
      'Ce texte est si léthargique qu’il semble somnolent et apathique.',
      'Son discours léthargique a laissé une impression de somnolent.'
    ],
    'synonymes': [
      'somnolent',
      'apathique',
      'assoupi'
    ],
    'prononciation': '[l-é-t-h-a-r-g-i-q-u-e]'
  },
  {
    'mot': 'Limaçon',
    'definition': 'Terme qui signifie escargot, spirale ou hélice.',
    'exemples': [
      'Ce texte est si limaçon qu’il semble escargot et spirale.',
      'Son discours limaçon a laissé une impression de escargot.'
    ],
    'synonymes': [
      'escargot',
      'spirale',
      'hélice'
    ],
    'prononciation': '[l-i-m-a-ç-o-n]'
  },
  {
    'mot': 'Litanie',
    'definition': 'Terme qui signifie répétition, liste ou chapelet.',
    'exemples': [
      'La litanie est souvent associée à répétition et liste.',
      'Dans cette situation, la litanie reflétait répétition.'
    ],
    'synonymes': [
      'répétition',
      'liste',
      'chapelet'
    ],
    'prononciation': '[l-i-t-a-n-i-e]'
  },
  {
    'mot': 'Logorrhée',
    'definition': 'Terme qui signifie bavardage, verbiage ou prolixité.',
    'exemples': [
      'Ce texte est si logorrhée qu’il semble bavardage et verbiage.',
      'Son discours logorrhée a laissé une impression de bavardage.'
    ],
    'synonymes': [
      'bavardage',
      'verbiage',
      'prolixité'
    ],
    'prononciation': '[l-o-g-o-r-r-h-é-e]'
  },
  {
    'mot': 'Sagacité',
    'definition': 'Terme qui signifie perspicacité, clairvoyance ou judicieuse.',
    'exemples': [
      'La sagacité est souvent associée à perspicacité et clairvoyance.',
      'Dans cette situation, la sagacité reflétait perspicacité.'
    ],
    'synonymes': [
      'perspicacité',
      'clairvoyance',
      'judicieuse'
    ],
    'prononciation': '[s-a-g-a-c-i-t-é]',
    'categorie': 'nom féminin'
  }
];