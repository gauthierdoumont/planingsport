/* Planning Sport — consignes détaillées des exercices de la bibliothèque.
   Créé par Gauthier Doumont.
   Une entrée par exercice (même identifiant que dans LIB, index.html) :
     d : position de départ
     m : le mouvement, étape par étape
     r : respiration
     s : où tu dois le sentir
     f : version plus facile
     h : version plus difficile
   Les erreurs fréquentes restent dans LIB (champ « e »).
   Fichier .js (et non .json) pour fonctionner aussi en ouvrant index.html en local. */
window.CONSIGNES = {
pompes_mur: {
  d: "Debout face à un mur, à un grand pas de distance. Pose les mains à plat sur le mur à hauteur d’épaules, un peu plus écartées que les épaules, doigts vers le haut. Corps droit de la tête aux talons, talons qui peuvent se décoller légèrement.",
  m: ["Serre les abdos et les fessiers pour garder le corps comme une planche.", "Plie les coudes pour approcher la poitrine (pas le visage) du mur. Les coudes partent en diagonale vers l’arrière, à environ 45° du corps.", "Descends jusqu’à ce que le nez soit à quelques centimètres du mur.", "Pousse dans les paumes pour revenir bras tendus, sans bloquer brutalement les coudes."],
  r: "Inspire en approchant du mur, expire en poussant.", s: "Poitrine, arrière des bras (triceps) et avant des épaules.",
  f: "Rapproche les pieds du mur.", h: "Recule les pieds, ou passe aux pompes mains sur une table ou une chaise." },
pompes_chaise: {
  d: "Chaise (ou table solide) calée contre un mur pour qu’elle ne bouge pas. Mains posées sur le bord de l’assise, écartées un peu plus que les épaules. Recule les pieds jusqu’à ce que le corps forme une ligne droite inclinée, de la tête aux talons.",
  m: ["Gaine le ventre et serre les fessiers : le bassin ne doit ni tomber ni monter.", "Plie les coudes (à environ 45° du corps) pour descendre la poitrine vers le bord de l’assise.", "Arrête-toi quand la poitrine frôle le bord, sans t’y poser.", "Pousse fort dans les mains pour remonter jusqu’aux bras tendus, le corps toujours bien droit."],
  r: "Inspire en descendant, expire en poussant.", s: "Pectoraux, triceps et avant des épaules ; les abdos travaillent pour garder le corps droit.",
  f: "Utilise un support plus haut (plan de travail, table).", h: "Utilise un support plus bas (marche, banc) ou passe aux pompes au sol." },
pompes_genoux: {
  d: "À genoux sur un coussin ou un tapis. Mains au sol sous les épaules, un peu plus écartées que les épaules. Avance les mains ou recule les genoux pour que le corps forme une ligne droite des genoux à la tête. Pieds croisés ou posés au sol.",
  m: ["Serre les abdos et rentre légèrement le menton : regard vers le sol, un peu devant les mains.", "Plie les coudes à environ 45° du corps et descends la poitrine vers le sol, d’un seul bloc.", "Descends jusqu’à ce que la poitrine soit à quelques centimètres du sol.", "Pousse dans les mains pour remonter jusqu’aux bras tendus, sans casser au niveau des hanches."],
  r: "Inspire en descendant, expire en remontant.", s: "Pectoraux, triceps, avant des épaules.",
  f: "Fais les pompes inclinées (mains sur une chaise).", h: "Fais les premières reps en pompes classiques, puis termine sur les genoux." },
pompes: {
  d: "Mains au sol, un peu plus écartées que les épaules, doigts vers l’avant. Jambes tendues, appui sur la pointe des pieds écartés de la largeur des hanches. Le corps forme une planche bien droite de la tête aux talons.",
  m: ["Serre fort les abdos et les fessiers, regarde le sol un peu devant tes mains.", "Plie les coudes : ils partent en diagonale vers l’arrière (environ 45° du corps), pas sur les côtés.", "Descends tout le corps d’un bloc jusqu’à ce que la poitrine soit à 2-3 cm du sol.", "Pousse le sol loin de toi pour remonter jusqu’aux bras tendus, en gardant le bassin aligné."],
  r: "Inspire en descendant, expire en poussant.", s: "Pectoraux, triceps et avant des épaules ; abdos et fessiers pour le gainage.",
  f: "Pose les genoux au sol ou les mains sur une chaise.", h: "Ralentis la descente (3 s) ou surélève les pieds." },
pompes_inclinees: {
  d: "Mains posées sur le bord d’un banc, un peu plus écartées que les épaules. Recule les pieds pour former une ligne droite inclinée des talons à la tête, appui sur la pointe des pieds.",
  m: ["Gaine le ventre et serre les fessiers.", "Plie les coudes vers l’arrière, à environ 45° du corps, et descends la poitrine vers le bord du banc.", "Touche le banc du bas de la poitrine sans te poser.", "Pousse pour revenir bras tendus, sans laisser le bassin s’affaisser."],
  r: "Inspire en descendant, expire en poussant.", s: "Bas des pectoraux, triceps et épaules.",
  f: "Prends un support plus haut.", h: "Prends un support plus bas ou passe aux pompes au sol." },
pompes_declinees: {
  d: "Pieds posés sur une chaise ou un banc calé, mains au sol un peu plus écartées que les épaules, sous la poitrine. Le corps forme une ligne droite inclinée vers le bas, de la tête aux talons.",
  m: ["Serre fort les abdos et les fessiers pour éviter que le bassin tombe.", "Plie les coudes à environ 45° et descends le haut de la poitrine vers le sol.", "Descends jusqu’à quelques centimètres du sol en gardant la nuque dans l’alignement du dos.", "Pousse pour remonter bras tendus, d’un seul bloc."],
  r: "Inspire en descendant, expire en poussant.", s: "Haut des pectoraux, avant des épaules, triceps.",
  f: "Utilise un support plus bas (une marche).", h: "Ralentis la descente sur 3 secondes." },
pompes_serrees: {
  d: "Position de pompe, mais mains directement sous les épaules, presque collées (les pouces peuvent se toucher en forme de losange pour la version la plus serrée). Corps droit de la tête aux talons.",
  m: ["Gaine le ventre et serre les fessiers.", "Descends en gardant les coudes collés le long des côtes, ils pointent vers l’arrière.", "Va jusqu’à ce que la poitrine frôle le dos des mains.", "Pousse jusqu’à tendre complètement les bras."],
  r: "Inspire en descendant, expire en poussant.", s: "Arrière des bras (triceps) surtout, puis pectoraux.",
  f: "Fais-les sur les genoux ou mains sur une chaise.", h: "Ralentis la descente ou surélève les pieds." },
pompes_archer: {
  d: "Position de pompe avec les mains très écartées (presque deux fois la largeur des épaules), doigts tournés légèrement vers l’extérieur. Corps gainé, pieds un peu écartés pour l’équilibre.",
  m: ["Transfère ton poids vers une main en pliant ce coude.", "L’autre bras reste presque tendu et glisse sur le côté : il sert juste d’appui.", "Descends la poitrine vers la main qui travaille, jusqu’à quelques centimètres du sol.", "Pousse sur cette main pour remonter au centre, puis fais l’autre côté (ou toutes les reps d’un côté)."],
  r: "Inspire en descendant, expire en poussant.", s: "Pectoral et triceps du côté qui plie, beaucoup plus que sur une pompe classique.",
  f: "Fais-les sur les genoux ou garde le bras d’appui plus plié.", h: "Garde le bras d’appui complètement tendu et descends plus bas." },
pompes_tempo: {
  d: "Position de pompe classique (ou genoux au sol si tu débutes) : mains un peu plus larges que les épaules, corps droit de la tête aux talons.",
  m: ["Gaine bien le ventre avant de commencer.", "Descends en comptant lentement « 1… 2… 3 » jusqu’à ce que la poitrine soit à 2-3 cm du sol.", "Reste 1 seconde en bas, sans te poser et sans relâcher le ventre.", "Remonte à vitesse normale jusqu’aux bras tendus."],
  r: "Inspire pendant la descente lente, expire en remontant.", s: "Pectoraux, triceps et épaules ; la brûlure arrive vite grâce au temps sous tension.",
  f: "Fais-les sur les genoux.", h: "Allonge la descente à 5 secondes." },
pompes_elastique: {
  d: "Passe l’élastique dans ton dos à hauteur des omoplates, tiens une extrémité dans chaque main et pose les mains au sol en bloquant la bande dessous. Prends la position de pompe classique.",
  m: ["Vérifie que la bande est bien coincée sous chaque paume avant de commencer.", "Gaine le corps et descends la poitrine vers le sol, coudes à 45°.", "Pousse pour remonter : l’élastique résiste de plus en plus vers le haut.", "Tends complètement les bras en haut, puis redescends en contrôlant."],
  r: "Inspire en descendant, expire en poussant contre la bande.", s: "Pectoraux et triceps, surtout en fin de poussée.",
  f: "Fais-les sur les genoux avec la bande.", h: "Raccourcis la bande (enroule-la autour des mains)." },
presse_elastique: {
  d: "Debout, un pied en avant pour la stabilité. Élastique passé dans le dos sous les aisselles (ou ancré derrière toi à hauteur de poitrine), une extrémité dans chaque main, mains à côté de la poitrine, coudes pliés.",
  m: ["Gaine le ventre et garde le buste droit, légèrement penché en avant.", "Pousse les mains droit devant toi à hauteur de poitrine, en les rapprochant un peu.", "Tends les bras sans verrouiller les coudes, serre la poitrine 1 s.", "Reviens lentement, mains près de la poitrine, en gardant la bande tendue."],
  r: "Expire en poussant, inspire en revenant.", s: "Pectoraux, triceps, avant des épaules.",
  f: "Rapproche-toi de l’ancrage ou utilise une bande plus souple.", h: "Bande plus dure ou recule pour plus de tension." },
dc_barre: {
  d: "Allongé sur le banc, yeux sous la barre. Pieds bien à plat au sol, fesses et haut du dos collés au banc. Mains un peu plus écartées que les épaules. Serre les omoplates et tire-les vers le bas comme pour les mettre dans tes poches arrière.",
  m: ["Sors la barre des supports et place-la bras tendus au-dessus des épaules.", "Descends-la lentement vers le bas des pectoraux (ligne des tétons), coudes à environ 45° du corps.", "Touche légèrement la poitrine, sans rebond.", "Pousse la barre vers le haut et légèrement vers l’arrière, jusqu’aux bras tendus, fesses toujours sur le banc.", "À la fin de la série, repose toujours la barre dans les supports."],
  r: "Inspire et bloque légèrement avant de descendre, expire en poussant.", s: "Pectoraux, triceps, avant des épaules.",
  f: "Allège la charge ou passe aux haltères.", h: "Ajoute 1 s de pause sur la poitrine." },
dc_serre_barre: {
  d: "Allongé sur le banc, pieds à plat, omoplates serrées. Mains sur la barre écartées de la largeur des épaules (pas plus serré, pour protéger les poignets).",
  m: ["Sors la barre et place-la au-dessus des épaules, bras tendus.", "Descends vers le bas du sternum en gardant les coudes collés le long du corps.", "Touche légèrement la poitrine.", "Pousse en tendant complètement les bras."],
  r: "Inspire en descendant, expire en poussant.", s: "Triceps surtout, puis pectoraux.",
  f: "Charge plus légère.", h: "Descente lente sur 3 secondes." },
floor_press_barre: {
  d: "Allongé au sol sous la barre (posée sur des supports bas ou passée au-dessus de toi), genoux pliés, pieds à plat. Mains un peu plus écartées que les épaules.",
  m: ["Barre bras tendus au-dessus de la poitrine, omoplates serrées contre le sol.", "Descends la barre jusqu’à ce que l’arrière des bras touche doucement le sol.", "Marque 1 seconde d’arrêt, bras relâchés au sol mais sans lâcher la tension du dos.", "Pousse fort pour remonter bras tendus."],
  r: "Inspire en descendant, expire en poussant.", s: "Pectoraux et surtout triceps.",
  f: "Charge plus légère ou haltères.", h: "Pause plus longue au sol (2 s)." },
dc_halteres: {
  d: "Assis au bord du banc, haltères posés sur les cuisses. Allonge-toi en les ramenant contre la poitrine avec l’aide des genoux. Pieds à plat, omoplates serrées. Haltères bras tendus au-dessus de la poitrine.",
  m: ["Descends les haltères sur les côtés de la poitrine en 2-3 secondes, coudes à environ 45° du corps.", "Arrête quand les coudes sont un peu sous le niveau du banc et que tu sens l’étirement des pectoraux.", "Pousse vers le haut en rapprochant légèrement les haltères, sans les cogner.", "À la fin, ramène-les sur la poitrine puis sur les cuisses en te redressant."],
  r: "Inspire en descendant, expire en poussant.", s: "Pectoraux, triceps, avant des épaules.",
  f: "Haltères plus légers ou floor press au sol.", h: "Descente sur 3-4 s ou pause en bas." },
floor_press_halteres: {
  d: "Allongé au sol, genoux pliés, pieds à plat. Un haltère dans chaque main, bras tendus au-dessus de la poitrine, paumes vers les pieds ou face à face.",
  m: ["Serre les omoplates contre le sol.", "Descends les haltères en pliant les coudes (à 45° du corps) jusqu’à ce que l’arrière des bras touche le sol.", "Pause 1 seconde au sol, sans relâcher.", "Pousse pour remonter bras tendus au-dessus de la poitrine."],
  r: "Inspire en descendant, expire en poussant.", s: "Pectoraux et triceps ; le sol protège les épaules.",
  f: "Haltères plus légers.", h: "Pause de 2 s au sol, ou descente plus lente." },
squeeze_press: {
  d: "Allongé sur le banc, pieds à plat. Haltères bras tendus au-dessus de la poitrine, paumes face à face et haltères collés l’un contre l’autre.",
  m: ["Serre fort les haltères l’un contre l’autre : garde cette pression tout le temps.", "Descends-les ensemble jusqu’à toucher le milieu de la poitrine, coudes près du corps.", "Pousse vers le haut sans jamais les décoller.", "Serre encore plus fort en haut pendant 1 seconde."],
  r: "Inspire en descendant, expire en poussant.", s: "Intérieur des pectoraux et triceps.",
  f: "Haltères plus légers.", h: "Descente lente sur 3 s." },
dc_incline_halteres: {
  d: "Banc incliné à environ 30°. Assis, haltères sur les cuisses, allonge-toi en les montant à la poitrine. Pieds à plat, omoplates serrées, haltères bras tendus au-dessus des yeux.",
  m: ["Descends les haltères vers le haut des pectoraux, coudes à environ 45° du corps.", "Arrête au niveau de la poitrine en sentant l’étirement.", "Pousse vers le haut, au-dessus des yeux, en rapprochant légèrement les haltères.", "Contrôle chaque descente en 2-3 secondes."],
  r: "Inspire en descendant, expire en poussant.", s: "Haut des pectoraux et avant des épaules.",
  f: "Haltères plus légers ou banc moins incliné.", h: "Pause d’1 s en bas." },
dc_incline_barre: {
  d: "Banc incliné à 30° sous un rack. Pieds à plat, fesses et haut du dos collés, omoplates serrées. Mains un peu plus larges que les épaules.",
  m: ["Sors la barre et place-la au-dessus du haut de la poitrine.", "Descends-la sous les clavicules, coudes à 45°.", "Touche légèrement sans rebond.", "Pousse à la verticale jusqu’aux bras tendus, puis repose dans les supports en fin de série."],
  r: "Inspire en descendant, expire en poussant.", s: "Haut des pectoraux, épaules, triceps.",
  f: "Charge plus légère ou haltères.", h: "Pause d’1 s sur la poitrine." },
dc_kettlebell_sol: {
  d: "Allongé au sol, genoux pliés. Kettlebell dans une main, poignée en diagonale, la boule repose sur le dos de l’avant-bras. Coude au sol à 45° du corps, l’autre bras posé au sol.",
  m: ["Garde le poignet bien droit (ne le laisse pas plier vers l’arrière).", "Pousse la kettlebell à la verticale jusqu’au bras tendu.", "Redescends lentement jusqu’à ce que l’arrière du bras touche le sol.", "Fais toutes les reps d’un côté, puis change."],
  r: "Expire en poussant, inspire en descendant.", s: "Pectoral, triceps et stabilisateurs de l’épaule.",
  f: "Kettlebell plus légère.", h: "Pause d’1 s bras tendu, en haut." },
chest_press_machine: {
  d: "Règle le siège pour que les poignées soient à hauteur du milieu de la poitrine. Dos bien collé au dossier, pieds à plat, omoplates serrées. Saisis les poignées.",
  m: ["Pousse les poignées devant toi en expirant.", "Tends les bras sans verrouiller brutalement les coudes.", "Reviens lentement jusqu’à sentir un léger étirement de la poitrine.", "Ne laisse pas les plaques se reposer entre deux reps."],
  r: "Expire en poussant, inspire en revenant.", s: "Pectoraux, triceps, épaules.",
  f: "Charge plus légère.", h: "Retour sur 3 secondes." },
chest_press_poulie: {
  d: "Poulies réglées à hauteur de poitrine. Dos aux poulies, une poignée dans chaque main à côté de la poitrine, un pied en avant, buste légèrement penché.",
  m: ["Gaine le ventre pour ne pas être tiré vers l’arrière.", "Pousse les poignées devant toi en rapprochant les mains.", "Tends les bras et serre la poitrine 1 seconde.", "Reviens en contrôle, coudes à environ 45° du corps."],
  r: "Expire en poussant, inspire en revenant.", s: "Pectoraux et triceps.",
  f: "Charge plus légère.", h: "Pause d’1 s mains jointes." },
pompes_trx: {
  d: "Sangles réglées à mi-longueur. Dos à l’ancrage, une poignée dans chaque main, bras tendus devant toi. Recule les pieds pour pencher le corps vers l’avant, corps droit de la tête aux talons.",
  m: ["Gaine le ventre et serre les fessiers.", "Plie les coudes (à 45°) pour descendre la poitrine entre les mains.", "Descends jusqu’à ce que les mains soient au niveau de la poitrine, sans que les sangles frottent les bras.", "Pousse pour revenir bras tendus en gardant les sangles stables."],
  r: "Inspire en descendant, expire en poussant.", s: "Pectoraux, triceps et beaucoup de gainage.",
  f: "Rapproche les pieds de l’ancrage (corps plus droit).", h: "Recule les pieds (corps plus penché)." },
dips_barres: {
  d: "Saisis les barres parallèles et monte bras tendus, épaules basses (loin des oreilles). Jambes pliées et croisées derrière toi.",
  m: ["Penche légèrement le buste vers l’avant.", "Plie les coudes pour descendre jusqu’à ce que les épaules arrivent au niveau des coudes (pas plus bas si tu ressens une gêne).", "Garde les épaules basses pendant toute la descente.", "Pousse fort dans les barres pour remonter bras tendus."],
  r: "Inspire en descendant, expire en poussant.", s: "Bas des pectoraux, triceps, avant des épaules.",
  f: "Utilise un élastique sous les genoux ou fais seulement la descente lente.", h: "Descente lente ou lest à la ceinture." },
dips_chaise: {
  d: "Chaise calée contre un mur. Assieds-toi au bord, mains sur le bord de l’assise de chaque côté des fesses, doigts vers l’avant. Avance les fesses hors de la chaise, genoux pliés à 90°, pieds à plat.",
  m: ["Garde le dos tout près de la chaise et les épaules basses.", "Plie les coudes vers l’arrière (pas sur les côtés) pour descendre les fesses vers le sol.", "Arrête quand les coudes sont pliés à 90°, pas plus.", "Pousse dans les mains pour remonter bras tendus."],
  r: "Inspire en descendant, expire en poussant.", s: "Arrière des bras (triceps).",
  f: "Rapproche les pieds de la chaise.", h: "Tends les jambes devant toi." },
dm_halteres_assis: {
  d: "Assis sur une chaise ou un banc, dos droit (contre le dossier si possible), pieds à plat. Haltères à hauteur d’oreilles, paumes vers l’avant, coudes légèrement devant le corps.",
  m: ["Gaine le ventre pour ne pas cambrer le bas du dos.", "Pousse les haltères au-dessus de la tête, sans les cogner en haut.", "Tends les bras sans verrouiller brutalement.", "Redescends lentement jusqu’à hauteur du menton."],
  r: "Expire en poussant, inspire en descendant.", s: "Épaules (surtout l’avant et le côté), triceps.",
  f: "Haltères plus légers ou prise neutre.", h: "Descente sur 3 secondes." },
dm_halteres_debout: {
  d: "Debout, pieds largeur de hanches, genoux déverrouillés. Haltères à hauteur d’épaules, paumes vers l’avant. Fessiers et abdos serrés.",
  m: ["Garde les côtes rentrées : pas de cambrure.", "Pousse les haltères au-dessus de la tête, en ligne avec les oreilles.", "Tends les bras en haut sans cogner les haltères.", "Redescends en contrôle à hauteur d’épaules."],
  r: "Expire en poussant, inspire en descendant.", s: "Épaules, triceps, et le gainage de tout le tronc.",
  f: "Fais-le assis.", h: "Fais-le un bras à la fois." },
dm_neutre: {
  d: "Assis ou debout, haltères à hauteur d’épaules, paumes face à face, coudes devant toi (pas sur les côtés).",
  m: ["Gaine le ventre.", "Pousse les haltères vers le haut en gardant les paumes face à face.", "Garde les coudes légèrement en avant tout le long.", "Redescends lentement à hauteur d’épaules."],
  r: "Expire en poussant, inspire en descendant.", s: "Avant des épaules et triceps, sans gêne pour l’articulation.",
  f: "Haltères plus légers.", h: "Descente lente sur 3 s." },
dm_barre: {
  d: "Debout, barre posée sur l’avant des épaules (sortie d’un rack à hauteur de poitrine). Mains un peu plus larges que les épaules, coudes légèrement devant la barre. Fessiers et abdos serrés.",
  m: ["Recule légèrement la tête pour laisser passer la barre.", "Pousse la barre à la verticale.", "Dès qu’elle passe le front, avance la tête sous la barre : en haut, la barre est au-dessus du milieu du pied.", "Redescends la barre sur l’avant des épaules en reculant la tête."],
  r: "Inspire en bas, expire en poussant.", s: "Épaules, triceps, haut du dos et gainage.",
  f: "Haltères ou charge plus légère.", h: "Pause d’1 s en haut." },
arnold: {
  d: "Assis ou debout, haltères devant le visage à hauteur de menton, paumes tournées vers toi, coudes devant.",
  m: ["Commence à pousser vers le haut.", "Pendant la montée, ouvre les coudes sur les côtés et tourne les poignets pour finir paumes vers l’avant.", "Tends les bras au-dessus de la tête.", "Redescends en refaisant la rotation inverse jusqu’au départ."],
  r: "Expire en montant, inspire en descendant.", s: "Les trois faisceaux de l’épaule, triceps.",
  f: "Haltères plus légers, fais-le assis.", h: "Descente lente sur 3 s." },
dm_unilateral: {
  d: "Debout, un haltère à hauteur d’épaule, l’autre main sur la hanche. Pieds largeur de hanches, fessiers serrés.",
  m: ["Gaine le ventre pour ne pas te pencher sur le côté.", "Pousse l’haltère au-dessus de la tête.", "Tends le bras, l’oreille reste visible à côté du bras.", "Redescends lentement. Toutes les reps d’un côté, puis l’autre."],
  r: "Expire en poussant, inspire en descendant.", s: "Épaule, triceps et obliques du côté opposé.",
  f: "Assis, haltère plus léger.", h: "Debout sur une jambe." },
landmine_halteres: {
  d: "En fente courte (pied du côté qui travaille en arrière), haltère à l’épaule, coude devant le corps. Autre main sur la hanche.",
  m: ["Gaine le ventre et penche légèrement le buste vers l’avant.", "Pousse l’haltère en diagonale vers le haut et l’avant (comme si tu poussais au plafond devant toi).", "Tends le bras sans hausser l’épaule.", "Redescends lentement à l’épaule. Change de côté après la série."],
  r: "Expire en poussant, inspire en revenant.", s: "Avant de l’épaule, haut du pectoral, triceps.",
  f: "Haltère plus léger.", h: "Pause d’1 s bras tendu." },
dm_elastique: {
  d: "Debout, pieds écartés de la largeur des hanches, posés sur le milieu de la bande. Une extrémité dans chaque main à hauteur d’épaules, paumes vers l’avant.",
  m: ["Gaine le ventre, côtes rentrées.", "Pousse les mains au-dessus de la tête.", "Tends les bras en gardant les épaules basses.", "Redescends lentement à hauteur d’épaules en gardant la tension."],
  r: "Expire en poussant, inspire en descendant.", s: "Épaules et triceps.",
  f: "Écarte moins les pieds ou bande plus souple.", h: "Écarte plus les pieds ou bande plus dure." },
pompes_pike: {
  d: "Position de pompe, puis monte les fesses vers le plafond pour former un V inversé. Mains largeur d’épaules, pieds rapprochés des mains, jambes tendues ou légèrement pliées.",
  m: ["Regarde vers tes pieds, la tête entre les bras.", "Plie les coudes vers l’arrière pour descendre le sommet du crâne vers le sol, devant les mains (forme un triangle tête-mains).", "Arrête juste avant que la tête touche le sol.", "Pousse pour revenir bras tendus en gardant les fesses hautes."],
  r: "Inspire en descendant, expire en poussant.", s: "Épaules et triceps.",
  f: "Écarte plus les pieds des mains, ou descends moins bas.", h: "Pieds surélevés sur une chaise." },
pompes_pike_banc: {
  d: "Pieds sur une chaise calée, mains au sol, avance les mains vers la chaise pour monter les hanches au-dessus des épaules (forme un L inversé).",
  m: ["Tête entre les bras, regard vers les mains.", "Plie les coudes vers l’arrière pour descendre la tête vers le sol devant les mains.", "Contrôle jusqu’à frôler le sol.", "Pousse jusqu’aux bras tendus."],
  r: "Inspire en descendant, expire en poussant.", s: "Épaules et triceps, intensément.",
  f: "Pompes piquées pieds au sol.", h: "Rapproche les mains de la chaise." },
dm_kettlebell: {
  d: "Debout, kettlebell en position « rack » : la poignée dans la main, la boule repose contre l’avant-bras, coude près du corps, poignet droit.",
  m: ["Gaine le ventre et serre les fessiers.", "Pousse la kettlebell à la verticale, poignet bien droit.", "Tends le bras en haut, biceps près de l’oreille.", "Redescends lentement en position rack. Change de côté après la série."],
  r: "Expire en poussant, inspire en descendant.", s: "Épaule, triceps et gainage.",
  f: "Kettlebell plus légère.", h: "Pause d’1 s en haut." },
dm_machine: {
  d: "Règle le siège pour que les poignées soient à hauteur d’épaules. Dos collé au dossier, pieds à plat.",
  m: ["Saisis les poignées et gaine le ventre.", "Pousse vers le haut en expirant.", "Tends les bras sans verrouiller brutalement.", "Redescends lentement à hauteur d’épaules."],
  r: "Expire en poussant, inspire en descendant.", s: "Épaules et triceps.",
  f: "Charge plus légère.", h: "Descente sur 3 s." },
dm_medecine: {
  d: "Debout ou assis, ballon lesté tenu à deux mains devant la poitrine, coudes sous le ballon.",
  m: ["Gaine le ventre.", "Pousse le ballon au-dessus de la tête jusqu’aux bras tendus.", "Garde le ballon au-dessus de la tête, pas devant.", "Redescends lentement à la poitrine."],
  r: "Expire en poussant, inspire en descendant.", s: "Épaules, triceps.",
  f: "Ballon plus léger.", h: "Ballon plus lourd ou descente lente." },
rowing_serviette_porte: {
  d: "Porte solide, bien fermée (à clé ou bloquée). Passe une grande serviette autour des deux poignées et tiens une extrémité dans chaque main. Pieds près de la porte, de chaque côté, genoux légèrement pliés. Penche-toi en arrière jusqu’aux bras tendus.",
  m: ["Gaine le corps : il reste droit comme une planche inclinée.", "Tire la poitrine vers la porte en pliant les coudes, qui passent le long du corps.", "Serre les omoplates l’une contre l’autre en fin de mouvement, 1 seconde.", "Redescends lentement jusqu’aux bras tendus."],
  r: "Expire en tirant, inspire en redescendant.", s: "Milieu du dos, entre les omoplates, et arrière des épaules.",
  f: "Reste plus droit (pieds plus loin de la porte).", h: "Avance les pieds pour être plus penché." },
rowing_table: {
  d: "Table très stable (teste-la d’abord). Allonge-toi dessous sur le dos, mains au bord du plateau un peu plus écartées que les épaules, bras tendus. Talons au sol, corps droit (ou genoux pliés pour faciliter).",
  m: ["Gaine le ventre et serre les fessiers pour garder le corps droit.", "Tire la poitrine vers le bord de la table en serrant les omoplates.", "Monte jusqu’à ce que la poitrine frôle le plateau.", "Redescends lentement jusqu’aux bras tendus."],
  r: "Expire en tirant, inspire en descendant.", s: "Dos (entre les omoplates), biceps, arrière des épaules.",
  f: "Plie les genoux, pieds à plat.", h: "Jambes tendues, ou pause d’1 s en haut." },
ytw_ventre: {
  d: "Allongé sur le ventre, front posé sur une serviette pliée, jambes tendues. Bras posés au sol au-dessus de la tête.",
  m: ["Y : bras tendus en diagonale au-dessus de la tête, pouces vers le plafond. Décolle-les du sol en serrant les omoplates, tiens 2 s, repose.", "T : bras tendus sur les côtés, pouces vers le plafond. Décolle-les, tiens 2 s, repose.", "W : coudes pliés le long du corps, mains près des épaules. Recule les coudes et décolle-les, tiens 2 s, repose.", "Y + T + W = 1 répétition. Le front reste posé, le cou détendu."],
  r: "Expire en levant les bras, inspire en reposant.", s: "Haut du dos, entre les omoplates, arrière des épaules.",
  f: "Ne fais que le T et le W.", h: "Tiens 3-4 s chaque position ou prends des petits poids." },
superman_rowing: {
  d: "Allongé sur le ventre, bras tendus devant toi, jambes tendues, regard vers le sol.",
  m: ["Décolle la poitrine et les bras du sol (légèrement, sans forcer sur le bas du dos).", "Tire les coudes vers les côtes comme si tu ramais, en serrant les omoplates.", "Tiens 1 seconde.", "Retends les bras devant toi sans reposer la poitrine, puis recommence."],
  r: "Expire en tirant, inspire en tendant les bras.", s: "Haut du dos et bas du dos.",
  f: "Repose la poitrine entre chaque répétition.", h: "Tiens 3 s coudes en arrière." },
rowing_barre: {
  d: "Debout, barre en mains (paumes vers toi), mains un peu plus larges que les épaules. Genoux fléchis, recule les fesses pour pencher le buste à environ 45°, dos plat, barre qui pend sous les épaules.",
  m: ["Gaine fort le ventre pour garder le dos plat toute la série.", "Tire la barre vers le nombril en amenant les coudes vers l’arrière.", "Serre les omoplates 1 seconde en haut.", "Redescends lentement jusqu’aux bras tendus, sans arrondir le dos."],
  r: "Expire en tirant, inspire en descendant.", s: "Grand dorsal, milieu du dos, biceps.",
  f: "Charge plus légère ou rowing poitrine sur banc.", h: "Pause de 2 s en haut." },
rowing_barre_supi: {
  d: "Barre tenue paumes vers le haut, mains largeur d’épaules. Genoux fléchis, buste penché à 45°, dos plat.",
  m: ["Gaine le ventre.", "Tire la barre vers le bas du ventre, coudes près du corps.", "Serre les omoplates en haut.", "Redescends lentement."],
  r: "Expire en tirant, inspire en descendant.", s: "Bas du grand dorsal et biceps.",
  f: "Charge plus légère.", h: "Pause d’1 s en haut." },
rowing_haltere_banc: {
  d: "Une main et le genou du même côté posés sur un banc (ou main sur le dossier d’une chaise, pieds au sol décalés). Dos plat, parallèle au sol. Haltère dans l’autre main, bras tendu vers le sol.",
  m: ["Regarde le sol un peu devant toi, nuque dans l’alignement.", "Tire le coude vers la hanche (pas vers l’épaule), en gardant le coude près du corps.", "Marque 1 seconde en haut en serrant l’omoplate.", "Redescends lentement jusqu’au bras tendu. Toutes les reps d’un côté, puis l’autre."],
  r: "Expire en tirant, inspire en descendant.", s: "Grand dorsal (sur le côté du dos), biceps.",
  f: "Haltère plus léger.", h: "Descente sur 3 s." },
rowing_halteres_penche: {
  d: "Debout, un haltère dans chaque main. Genoux fléchis, fesses en arrière, buste penché à 45°, dos plat. Bras tendus, paumes face à face.",
  m: ["Gaine le ventre.", "Tire les coudes vers l’arrière, le long du corps.", "Serre les omoplates 1 seconde.", "Redescends lentement sans arrondir le dos."],
  r: "Expire en tirant, inspire en descendant.", s: "Milieu du dos, grand dorsal, biceps.",
  f: "Haltères plus légers ou appui poitrine sur banc incliné.", h: "Pause de 2 s en haut." },
seal_row: {
  d: "Allongé sur le ventre sur un banc surélevé (ou deux chaises), tête qui dépasse. Un haltère dans chaque main, bras tendus vers le sol.",
  m: ["Garde la poitrine collée au banc.", "Tire les coudes vers le plafond, en les gardant proches du corps.", "Serre les omoplates 1 seconde en haut.", "Redescends lentement jusqu’aux bras tendus."],
  r: "Expire en tirant, inspire en descendant.", s: "Tout le dos, sans aucune tension sur le bas du dos.",
  f: "Haltères plus légers.", h: "Pause de 2 s en haut." },
rowing_incline: {
  d: "Banc incliné à 30-45°. Allonge-toi poitrine contre le dossier, pieds au sol, haltères bras tendus vers le sol.",
  m: ["Garde la poitrine collée au dossier.", "Tire les haltères vers les hanches, coudes près du corps.", "Serre les omoplates 1 seconde.", "Redescends lentement."],
  r: "Expire en tirant, inspire en descendant.", s: "Milieu du dos, grand dorsal.",
  f: "Haltères plus légers.", h: "Pause de 2 s ou descente lente." },
rowing_elastique: {
  d: "Debout sur le milieu de la bande, pieds largeur de hanches. Une extrémité dans chaque main. Genoux fléchis, buste penché à 45°, dos plat.",
  m: ["Gaine le ventre.", "Tire les coudes vers les hanches, le long du corps.", "Serre les omoplates 1 seconde.", "Redescends lentement en gardant la bande tendue."],
  r: "Expire en tirant, inspire en relâchant.", s: "Milieu du dos, grand dorsal, biceps.",
  f: "Bande plus souple.", h: "Bande plus dure ou raccourcie." },
rowing_elastique_assis: {
  d: "Assis au sol, jambes tendues (genoux légèrement pliés si besoin). Bande passée sous la plante des pieds, une extrémité dans chaque main, bras tendus. Dos droit.",
  m: ["Assieds-toi bien droit, poitrine sortie.", "Tire les mains vers le bas du ventre, coudes le long du corps.", "Serre les omoplates 1 seconde.", "Retends les bras lentement sans arrondir le dos."],
  r: "Expire en tirant, inspire en relâchant.", s: "Milieu du dos et biceps.",
  f: "Bande plus souple ou genoux pliés.", h: "Bande plus dure." },
rowing_elastique_ancre: {
  d: "Élastique ancré à hauteur de poitrine (dans une porte fermée). Debout face à la porte, une extrémité dans chaque main, recule jusqu’à mettre la bande en tension, bras tendus.",
  m: ["Pieds largeur de hanches, genoux souples, ventre gainé.", "Tire les mains vers le ventre, coudes près du corps.", "Serre les omoplates 1 seconde.", "Retends les bras lentement."],
  r: "Expire en tirant, inspire en relâchant.", s: "Milieu du dos, sans flexion du dos.",
  f: "Avance vers la porte.", h: "Recule ou bande plus dure." },
rowing_elastique_uni: {
  d: "En fente, pied avant posé sur la bande. Main du même côté que le pied avant sur la cuisse. L’autre main tient la bande, bras tendu. Buste penché, dos plat.",
  m: ["Gaine le ventre.", "Tire le coude vers la hanche.", "Serre l’omoplate 1 seconde.", "Redescends lentement. Change de côté après la série."],
  r: "Expire en tirant, inspire en relâchant.", s: "Grand dorsal d’un côté.",
  f: "Bande plus souple.", h: "Bande raccourcie." },
rowing_poulie: {
  d: "Assis à la machine, pieds sur les appuis, genoux légèrement fléchis. Saisis la poignée, dos droit, bras tendus.",
  m: ["Garde le buste vertical (pas de balancement).", "Tire la poignée vers le bas du ventre.", "Serre les omoplates, poitrine sortie, 1 seconde.", "Reviens en contrôle jusqu’aux bras tendus."],
  r: "Expire en tirant, inspire en relâchant.", s: "Milieu du dos, grand dorsal, biceps.",
  f: "Charge plus légère.", h: "Pause de 2 s." },
rowing_machine: {
  d: "Règle le siège, poitrine contre l’appui, poignées à bout de bras.",
  m: ["Saisis les poignées bras tendus, épaules relâchées vers l’avant.", "Commence par serrer les omoplates, puis tire les coudes vers l’arrière, près du corps.", "Garde la poitrine collée à l’appui : le buste ne recule pas.", "Tiens 1 seconde, puis laisse revenir les poignées lentement jusqu’aux bras tendus."],
  r: "Expire en tirant, inspire en relâchant.", s: "Milieu du dos.",
  f: "Charge plus légère.", h: "Pause de 2 s." },
rowing_kettlebell: {
  d: "Une main en appui sur un banc ou une chaise, pieds décalés, dos plat parallèle au sol. Kettlebell dans l’autre main, bras tendu.",
  m: ["Regarde le sol devant toi.", "Tire la kettlebell vers la hanche, coude près du corps.", "Serre 1 seconde en haut.", "Redescends lentement. Change de côté."],
  r: "Expire en tirant, inspire en descendant.", s: "Grand dorsal, biceps.",
  f: "Kettlebell plus légère.", h: "Descente lente sur 3 s." },
rowing_inverse: {
  d: "Barre fixée dans le rack à hauteur de hanches. Allonge-toi dessous, mains sur la barre un peu plus larges que les épaules, bras tendus. Talons au sol, corps droit.",
  m: ["Gaine le ventre et serre les fessiers.", "Tire la poitrine vers la barre.", "Touche la barre avec le bas de la poitrine, serre les omoplates.", "Redescends lentement."],
  r: "Expire en tirant, inspire en descendant.", s: "Tout le dos, biceps.",
  f: "Barre plus haute ou genoux pliés.", h: "Barre plus basse ou pieds surélevés." },
rowing_trx: {
  d: "Face à l’ancrage, une poignée dans chaque main. Penche-toi en arrière, bras tendus, corps droit, pieds devant toi.",
  m: ["Gaine le ventre.", "Tire la poitrine vers les mains, coudes le long du corps.", "Serre les omoplates 1 seconde.", "Redescends lentement jusqu’aux bras tendus."],
  r: "Expire en tirant, inspire en descendant.", s: "Dos et biceps.",
  f: "Recule les pieds (corps plus droit).", h: "Avance les pieds (corps plus penché)." },
face_pull_elastique: {
  d: "Élastique ancré à hauteur de visage. Face à l’ancrage, une extrémité dans chaque main, paumes vers le bas, bras tendus devant.",
  m: ["Recule pour mettre la bande en tension.", "Tire les mains vers le front en écartant les mains et en montant les coudes (à hauteur d’épaules).", "Finis mains de chaque côté de la tête, serre les omoplates 1 seconde.", "Reviens lentement."],
  r: "Expire en tirant, inspire en relâchant.", s: "Arrière des épaules et haut du dos ; excellent pour la posture.",
  f: "Bande plus souple.", h: "Pause de 2 s." },
face_pull_poulie: {
  d: "Poulie avec corde réglée à hauteur de visage. Saisis la corde, pouces vers toi, recule d’un pas.",
  m: ["Gaine le ventre.", "Tire la corde vers le front en écartant les mains.", "Coudes hauts, serre les omoplates 1 seconde.", "Reviens en contrôle."],
  r: "Expire en tirant, inspire en relâchant.", s: "Arrière des épaules, haut du dos.",
  f: "Charge plus légère.", h: "Pause de 2 s." },
tractions: {
  d: "Suspendu à la barre, paumes vers l’avant, mains un peu plus larges que les épaules, bras tendus. Jambes tendues ou croisées.",
  m: ["Commence par abaisser les épaules (éloigne-les des oreilles) sans plier les bras.", "Tire la poitrine vers la barre en pensant à amener les coudes vers les poches.", "Monte jusqu’à ce que le menton passe la barre.", "Redescends lentement jusqu’aux bras tendus."],
  r: "Expire en montant, inspire en descendant.", s: "Grand dorsal (côtés du dos), biceps.",
  f: "Tractions avec élastique ou négatives.", h: "Pause d’1 s en haut, ou lest." },
tractions_supi: {
  d: "Suspendu à la barre, paumes vers toi, mains largeur d’épaules, bras tendus.",
  m: ["Abaisse les épaules.", "Tire en amenant les coudes vers les côtes.", "Monte le menton au-dessus de la barre.", "Redescends lentement."],
  r: "Expire en montant, inspire en descendant.", s: "Dos et biceps (plus que la prise pronation).",
  f: "Élastique ou négatives.", h: "Pause d’1 s en haut." },
tractions_neg: {
  d: "Chaise placée sous la barre. Monte dessus et attrape la barre, puis place-toi en haut du mouvement : menton au-dessus de la barre, coudes pliés.",
  m: ["Retire les pieds de la chaise.", "Descends le plus lentement possible (4 à 6 secondes) jusqu’aux bras tendus.", "Garde les épaules engagées tout le long.", "Remets les pieds sur la chaise pour remonter en haut, puis recommence."],
  r: "Respire calmement pendant la descente.", s: "Dos et biceps ; c’est la meilleure étape pour apprendre les tractions.",
  f: "Descente plus courte (2-3 s).", h: "Descente de 8 s." },
suspension: {
  d: "Attrape la barre, mains largeur d’épaules. Une chaise à portée de pieds si besoin.",
  m: ["Laisse-toi pendre bras tendus.", "Garde les épaules actives : tire-les légèrement vers le bas, loin des oreilles.", "Reste immobile, sans te balancer.", "Repose les pieds avant que les mains lâchent."],
  r: "Respire calmement et régulièrement.", s: "Avant-bras et mains (prise) ; ça décompresse aussi le dos.",
  f: "Garde les pieds sur la chaise pour alléger.", h: "Une main à la fois (avec appui)." },
tractions_elastique: {
  d: "Élastique noué à la barre. Place un pied (ou un genou) dans la boucle. Attrape la barre, mains un peu plus larges que les épaules, bras tendus.",
  m: ["Abaisse les épaules.", "Tire la poitrine vers la barre, coudes vers les côtes.", "Monte le menton au-dessus de la barre.", "Redescends lentement : l’élastique aide surtout en bas."],
  r: "Expire en montant, inspire en descendant.", s: "Dos et biceps.",
  f: "Élastique plus épais.", h: "Élastique plus fin." },
tirage_elastique_haut: {
  d: "Debout ou à genoux, bande tenue à deux mains au-dessus de la tête, mains plus écartées que les épaules, bras tendus et bande déjà un peu tendue.",
  m: ["Gaine le ventre.", "Écarte la bande en descendant les coudes vers les côtes.", "Finis bande derrière ou devant la tête, omoplates serrées.", "Remonte lentement."],
  r: "Expire en tirant, inspire en remontant.", s: "Côtés du dos et haut du dos.",
  f: "Mains plus écartées sur la bande.", h: "Mains plus rapprochées." },
tirage_uni_elastique: {
  d: "Debout, une main fixe tient la bande au-dessus de la tête, bras tendu. L’autre main tient l’autre extrémité, bras tendu aussi.",
  m: ["La main du haut ne bouge pas.", "Tire l’autre main vers l’épaule en amenant le coude vers la hanche.", "Serre 1 seconde.", "Reviens lentement. Change de côté."],
  r: "Expire en tirant, inspire en relâchant.", s: "Grand dorsal d’un côté.",
  f: "Bande plus souple.", h: "Bande raccourcie." },
tirage_elastique_ancre: {
  d: "Élastique ancré en haut d’une porte fermée. Assis ou à genoux face à la porte, une extrémité dans chaque main, bras tendus vers le haut.",
  m: ["Gaine le ventre, poitrine sortie.", "Tire les mains vers le haut de la poitrine.", "Coudes vers les côtes, serre les omoplates.", "Remonte lentement."],
  r: "Expire en tirant, inspire en relâchant.", s: "Grand dorsal.",
  f: "Rapproche-toi de la porte.", h: "Éloigne-toi ou bande plus dure." },
pullover_haltere: {
  d: "Allongé sur le banc (dans la longueur), pieds à plat. Un haltère tenu à deux mains par un disque, bras au-dessus de la poitrine, coudes légèrement fléchis.",
  m: ["Gaine le ventre, bas du dos contre le banc.", "Descends l’haltère en arc de cercle derrière la tête, coudes fixes.", "Arrête quand tu sens l’étirement sous les bras.", "Ramène l’haltère au-dessus de la poitrine."],
  r: "Inspire en descendant, expire en remontant.", s: "Grand dorsal et pectoraux.",
  f: "Haltère plus léger.", h: "Descente lente sur 3 s." },
tirage_poulie_haute: {
  d: "Assis, cuisses bloquées sous les boudins. Barre prise large, paumes vers l’avant, bras tendus.",
  m: ["Penche-toi très légèrement en arrière, poitrine sortie.", "Tire la barre vers le haut de la poitrine.", "Coudes vers le bas et l’arrière, serre 1 seconde.", "Remonte en contrôle jusqu’aux bras tendus."],
  r: "Expire en tirant, inspire en remontant.", s: "Grand dorsal.",
  f: "Charge plus légère.", h: "Pause de 2 s." },
tirage_prise_serree: {
  d: "Assis à la poulie haute, cuisses bloquées sous les boudins. Poignée triangle en mains, paumes face à face, bras tendus au-dessus de la tête.",
  m: ["Sors la poitrine et penche-toi très légèrement en arrière.", "Tire la poignée vers le sternum en gardant les coudes le long du corps.", "Serre le dos 1 seconde quand la poignée touche presque la poitrine.", "Remonte lentement jusqu’aux bras tendus, sans laisser les épaules monter aux oreilles."],
  r: "Expire en tirant, inspire en remontant.", s: "Grand dorsal, biceps.",
  f: "Charge plus légère.", h: "Pause de 2 s." },
tirage_bras_tendus: {
  d: "Élastique ancré en haut d’une porte. Face à la porte, recule d’un pas, buste légèrement penché, bras tendus devant à hauteur d’yeux.",
  m: ["Garde les bras tendus (coudes très légèrement fléchis).", "Ramène les mains vers les cuisses en arc de cercle.", "Serre le dos 1 seconde.", "Remonte lentement."],
  r: "Expire en tirant, inspire en remontant.", s: "Grand dorsal, sans les biceps.",
  f: "Bande plus souple.", h: "Recule davantage." },
tirage_serviette_assis: {
  d: "Assis droit, serviette tenue à deux mains au-dessus de la tête, mains écartées.",
  m: ["Tire fort la serviette vers l’extérieur, comme pour la déchirer.", "Garde cette tension et descends-la derrière la nuque (ou devant la poitrine).", "Serre les omoplates et tiens la position.", "Remonte en gardant la tension, puis recommence."],
  r: "Respire calmement sans bloquer.", s: "Dos et arrière des épaules.",
  f: "Tire moins fort.", h: "Tire plus fort, plus longtemps." },
tractions_trx: {
  d: "Sangles courtes. Assis au sol sous les poignées, genoux pliés, pieds à plat, bras tendus vers le haut.",
  m: ["Gaine le ventre.", "Tire-toi vers le haut, en aidant un peu avec les jambes.", "Coudes vers les côtes.", "Redescends lentement."],
  r: "Expire en tirant, inspire en descendant.", s: "Dos et biceps.",
  f: "Aide-toi davantage avec les jambes.", h: "Moins d’aide des jambes." },
assis_debout: {
  d: "Chaise calée contre un mur. Assis au bord de l’assise, pieds à plat largeur de hanches, un peu en arrière des genoux. Bras croisés sur la poitrine ou tendus devant.",
  m: ["Penche le buste vers l’avant (le nez au-dessus des orteils).", "Pousse dans tout le pied pour te lever sans t’aider des mains.", "Tends complètement les jambes et serre les fessiers en haut.", "Rassieds-toi lentement en reculant les fesses, sans te laisser tomber."],
  r: "Expire en te levant, inspire en t’asseyant.", s: "Cuisses (avant) et fessiers.",
  f: "Aide-toi des mains sur les cuisses.", h: "Chaise plus basse ou descente sur 3 s." },
squat_chaise: {
  d: "Debout dos à une chaise, pieds un peu plus écartés que les hanches, pointes légèrement ouvertes. Bras tendus devant pour l’équilibre.",
  m: ["Recule les fesses comme pour t’asseoir, en pliant les genoux.", "Garde les genoux dans l’axe des pieds et le dos droit.", "Effleure l’assise avec les fesses sans t’asseoir ni relâcher.", "Pousse dans les talons pour remonter et serre les fessiers en haut."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisses et fessiers.",
  f: "Assieds-toi vraiment 1 seconde.", h: "Chaise plus basse ou tiens un poids." },
squat_pdc: {
  d: "Debout, pieds largeur d’épaules, pointes légèrement ouvertes. Bras tendus devant toi ou mains jointes devant la poitrine.",
  m: ["Recule les fesses et plie les genoux en même temps, comme pour t’asseoir sur une chaise.", "Garde la poitrine haute, le dos droit et les talons au sol.", "Descends jusqu’à ce que les cuisses soient parallèles au sol (moins bas si inconfort), genoux dans l’axe des orteils.", "Pousse dans tout le pied pour remonter et serre les fessiers en haut."],
  r: "Inspire en descendant, expire en remontant.", s: "Avant des cuisses et fessiers.",
  f: "Squat touché-chaise.", h: "Descente lente ou pause en bas." },
squat_partiel: {
  d: "Debout face au dossier d’une chaise, mains posées dessus. Pieds largeur de hanches.",
  m: ["Recule légèrement les fesses en pliant les genoux.", "Descends seulement à mi-hauteur, là où c’est confortable.", "Garde les genoux au-dessus des pieds, pas vers l’intérieur.", "Pousse dans les talons pour remonter."],
  r: "Inspire en descendant, expire en remontant.", s: "Avant des cuisses, sans forcer sur les genoux.",
  f: "Descends encore moins.", h: "Lâche l’appui." },
chaise: {
  d: "Dos collé contre un mur. Avance les pieds d’environ 50 cm, largeur de hanches.",
  m: ["Glisse le dos le long du mur en pliant les genoux.", "Arrête quand les cuisses sont proches de l’horizontale (ou plus haut si c’est trop dur).", "Vérifie : genoux au-dessus des chevilles, pas devant les orteils.", "Tiens la position, mains sur les cuisses ou bras croisés."],
  r: "Respire calmement, ne bloque pas ta respiration.", s: "Avant des cuisses (ça brûle, c’est normal).",
  f: "Remonte un peu plus haut.", h: "Descends plus bas ou tiens un poids sur les cuisses." },
squat_pause: {
  d: "Debout, pieds largeur d’épaules, pointes légèrement ouvertes, bras devant.",
  m: ["Descends en squat en comptant 3 secondes.", "Tiens 2 secondes en bas, sans te relâcher.", "Remonte d’un coup en poussant dans le sol.", "Serre les fessiers en haut."],
  r: "Inspire en descendant, souffle en remontant.", s: "Cuisses et fessiers.",
  f: "Pause d’1 seconde seulement.", h: "Pause de 3-4 s." },
squat_saute: {
  d: "Debout, pieds largeur d’épaules, bras le long du corps.",
  m: ["Descends en squat (cuisses vers la parallèle) en ramenant les bras derrière toi.", "Saute en poussant fort dans le sol, bras qui montent.", "Réceptionne-toi en douceur sur l’avant des pieds puis le pied entier, genoux pliés.", "Enchaîne directement le squat suivant."],
  r: "Expire en sautant.", s: "Cuisses, fessiers, mollets et cardio.",
  f: "Squat rapide sans saut.", h: "Saute plus haut." },
squat_sumo_pdc: {
  d: "Pieds très écartés (deux fois la largeur des épaules), pointes ouvertes à 45°. Mains jointes devant la poitrine.",
  m: ["Descends en gardant le buste bien droit.", "Pousse les genoux vers l’extérieur, dans l’axe des pieds.", "Descends jusqu’à ce que les cuisses soient proches de l’horizontale.", "Remonte en serrant les fessiers."],
  r: "Inspire en descendant, expire en remontant.", s: "Intérieur des cuisses et fessiers.",
  f: "Descends moins bas.", h: "Pause de 2 s en bas." },
squat_goblet: {
  d: "Debout, pieds largeur d’épaules, pointes légèrement ouvertes. Haltère tenu vertical contre la poitrine, mains sous le disque du haut, coudes vers le bas.",
  m: ["Recule les fesses et plie les genoux, buste droit.", "Descends entre les jambes : les coudes passent à l’intérieur des genoux.", "Garde les talons au sol et l’haltère contre la poitrine.", "Pousse dans tout le pied pour remonter."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisses et fessiers.",
  f: "Haltère plus léger.", h: "Pause de 2 s en bas." },
squat_halteres: {
  d: "Debout, pieds largeur d’épaules, un haltère dans chaque main, bras le long du corps.",
  m: ["Recule les fesses et plie les genoux.", "Garde le buste droit, les haltères descendent le long des jambes.", "Descends vers la parallèle.", "Remonte en poussant dans les talons."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisses et fessiers.",
  f: "Haltères plus légers.", h: "Descente sur 3 s." },
squat_sumo_haltere: {
  d: "Pieds très écartés, pointes ouvertes à 45°. Haltère tenu à deux mains par un disque, bras tendus entre les jambes.",
  m: ["Descends buste droit, genoux vers l’extérieur.", "L’haltère descend à la verticale entre les jambes.", "Va jusqu’à ce qu’il frôle le sol (ou moins bas).", "Remonte en serrant les fessiers."],
  r: "Inspire en descendant, expire en remontant.", s: "Intérieur des cuisses et fessiers.",
  f: "Haltère plus léger.", h: "Pieds sur deux marches pour descendre plus bas." },
squat_kettlebell: {
  d: "Pieds largeur d’épaules. Kettlebell tenue par les cornes contre la poitrine, coudes vers le bas.",
  m: ["Descends entre les jambes, buste droit.", "Coudes à l’intérieur des genoux en bas.", "Talons au sol.", "Remonte en poussant dans le sol."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisses et fessiers.",
  f: "Kettlebell plus légère.", h: "Pause de 2 s en bas." },
squat_front_barre: {
  d: "Barre posée sur l’avant des épaules, contre le cou, doigts sous la barre, coudes hauts vers l’avant. Pieds largeur d’épaules.",
  m: ["Gaine fort le ventre.", "Descends en gardant le buste très droit et les coudes hauts.", "Va jusqu’à la parallèle ou un peu plus bas.", "Remonte en poussant dans le sol, coudes toujours hauts."],
  r: "Inspire et bloque avant de descendre, expire en haut.", s: "Avant des cuisses surtout.",
  f: "Charge plus légère.", h: "Pause d’1 s en bas." },
squat_barre: {
  d: "Barre posée sur le haut du dos (trapèzes, pas sur la nuque), mains un peu plus larges que les épaules. Sors du rack, recule de deux pas, pieds largeur d’épaules.",
  m: ["Inspire profondément et gaine le ventre.", "Recule les hanches et plie les genoux en même temps.", "Descends vers la parallèle, genoux dans l’axe des pieds, dos droit.", "Remonte en poussant dans le sol, buste stable. Repose dans le rack à la fin."],
  r: "Inspire avant de descendre, expire en haut.", s: "Cuisses, fessiers, bas du dos.",
  f: "Charge plus légère ou goblet.", h: "Pause d’1 s en bas." },
squat_elastique: {
  d: "Pieds sur le milieu de la bande, largeur d’épaules. Extrémités tenues à hauteur d’épaules (bande derrière les bras).",
  m: ["Descends en squat, buste droit.", "Garde les mains aux épaules.", "Remonte en poussant dans le sol.", "La résistance augmente en haut : tends bien les jambes."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisses et fessiers.",
  f: "Bande plus souple.", h: "Bande plus dure." },
squat_mini_bande: {
  d: "Mini-bande juste au-dessus des genoux. Pieds largeur d’épaules.",
  m: ["Écarte légèrement les genoux pour tendre la bande.", "Descends en squat en gardant cette tension.", "Les genoux ne doivent jamais rentrer.", "Remonte et serre les fessiers."],
  r: "Inspire en descendant, expire en remontant.", s: "Fessiers (côté des hanches) et cuisses.",
  f: "Bande plus souple.", h: "Pause en bas." },
squat_swiss_ball: {
  d: "Ballon entre le bas du dos et le mur. Pieds un peu devant toi, largeur de hanches.",
  m: ["Plie les genoux en laissant le ballon rouler le long du dos.", "Descends jusqu’à cuisses proches de l’horizontale.", "Genoux au-dessus des chevilles.", "Remonte en poussant dans les talons."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisses et fessiers.",
  f: "Descends moins bas.", h: "Tiens des haltères." },
squat_trx: {
  d: "Face à l’ancrage, poignées en main, bras tendus, pieds largeur d’épaules.",
  m: ["Recule les fesses et descends en squat.", "Les sangles t’aident à garder l’équilibre et le buste droit.", "Descends le plus bas possible confortablement.", "Remonte en poussant dans les talons, en tirant le moins possible sur les bras."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisses et fessiers.",
  f: "Aide-toi plus des bras.", h: "Sur une jambe." },
presse_cuisses: {
  d: "Dos et fesses bien collés au siège. Pieds au milieu du plateau, largeur de hanches. Débloque la sécurité.",
  m: ["Plie les genoux pour descendre le plateau jusqu’à ~90°.", "Ne laisse pas les fesses se décoller du siège.", "Pousse dans les talons.", "Tends sans verrouiller les genoux. Remets la sécurité à la fin."],
  r: "Inspire en descendant, expire en poussant.", s: "Cuisses et fessiers.",
  f: "Charge plus légère.", h: "Descente sur 3 s." },
presse_uni: {
  d: "Assis à la presse, dos et fesses collés. Un seul pied au milieu du plateau, l’autre posé au sol ou sur le côté du siège.",
  m: ["Débloque la sécurité et descends le plateau lentement en pliant le genou.", "Garde le genou dans l’axe du pied (il ne rentre pas vers l’intérieur).", "Arrête vers 90° au genou, sans que les fesses décollent.", "Pousse dans le talon jusqu’à presque tendre, sans verrouiller. Change de jambe."],
  r: "Inspire en descendant, expire en poussant.", s: "Cuisse et fessier d’un côté.",
  f: "Charge plus légère.", h: "Descente lente." },
squat_medecine: {
  d: "Debout, pieds largeur d’épaules, pointes légèrement ouvertes. Ballon lesté tenu à deux mains contre la poitrine, coudes vers le bas.",
  m: ["Recule les fesses et plie les genoux comme pour t’asseoir.", "Garde le ballon collé à la poitrine et le buste droit.", "Descends jusqu’à ce que les cuisses soient proches de l’horizontale, talons au sol.", "Pousse dans tout le pied pour remonter en expirant."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisses et fessiers.",
  f: "Ballon plus léger.", h: "Pause en bas." },
pont_fessier: {
  d: "Allongé sur le dos, genoux pliés, pieds à plat largeur de hanches, talons à environ 20 cm des fesses. Bras le long du corps, paumes au sol.",
  m: ["Rentre légèrement le ventre pour coller le bas du dos au sol.", "Pousse dans les talons pour monter les hanches.", "En haut, genoux-hanches-épaules forment une ligne droite. Serre fort les fessiers 2 secondes.", "Redescends lentement, vertèbre par vertèbre."],
  r: "Expire en montant, inspire en descendant.", s: "Fessiers et arrière des cuisses. Pas dans le bas du dos !",
  f: "Monte moins haut.", h: "Une jambe, ou un poids sur les hanches." },
pont_fessier_uni: {
  d: "Allongé sur le dos, un pied à plat au sol près des fesses, l’autre jambe tendue en l’air (ou genou ramené vers la poitrine).",
  m: ["Pousse dans le talon au sol pour monter les hanches.", "Garde le bassin bien horizontal (ne le laisse pas pencher).", "Serre le fessier 1-2 s en haut.", "Redescends lentement. Toutes les reps d’un côté, puis l’autre."],
  r: "Expire en montant, inspire en descendant.", s: "Fessier du côté au sol.",
  f: "Pont fessier à deux jambes.", h: "Pause de 3 s en haut." },
pont_fessier_elastique: {
  d: "Allongé sur le dos, genoux pliés, mini-bande au-dessus des genoux.",
  m: ["Écarte légèrement les genoux pour tendre la bande.", "Monte les hanches en gardant cet écart.", "Pause 2 s en haut, fessiers serrés.", "Redescends lentement."],
  r: "Expire en montant, inspire en descendant.", s: "Fessiers (y compris le côté des hanches).",
  f: "Bande plus souple.", h: "Une jambe." },
pont_fessier_chaise: {
  d: "Allongé sur le dos devant une chaise, talons posés sur le bord de l’assise, genoux légèrement pliés.",
  m: ["Pousse dans les talons pour monter les hanches.", "Monte jusqu’à aligner épaules, hanches et genoux.", "Tiens 1 seconde.", "Redescends lentement."],
  r: "Expire en montant, inspire en descendant.", s: "Arrière des cuisses (ischios) et fessiers.",
  f: "Pieds au sol.", h: "Une jambe." },
good_morning_pdc: {
  d: "Debout, pieds largeur de hanches, mains croisées sur la poitrine (ou derrière la tête). Genoux légèrement fléchis.",
  m: ["Pousse les hanches vers l’arrière, comme pour fermer une porte avec les fesses.", "Le buste se penche en avant, dos parfaitement plat.", "Descends jusqu’à sentir l’étirement derrière les cuisses.", "Remonte en poussant les hanches vers l’avant et en serrant les fessiers."],
  r: "Inspire en descendant, expire en remontant.", s: "Arrière des cuisses et fessiers.",
  f: "Descends moins bas.", h: "Tiens un poids contre la poitrine." },
charniere_baton: {
  d: "Debout, un bâton (manche à balai) tenu dans le dos : il touche l’arrière de la tête, le haut du dos et le bas du dos/fesses. Une main derrière la nuque, l’autre au bas du dos.",
  m: ["Plie légèrement les genoux.", "Recule les fesses pour pencher le buste, sans perdre les 3 points de contact.", "Descends jusqu’à sentir l’étirement derrière les cuisses.", "Remonte en serrant les fessiers."],
  r: "Inspire en descendant, expire en remontant.", s: "Arrière des cuisses. C’est un exercice pour apprendre à garder le dos plat.",
  f: "Descends moins bas.", h: "Ralentis." },
hyperext_sol: {
  d: "Allongé sur le ventre, jambes tendues, mains près des tempes, coudes ouverts.",
  m: ["Serre légèrement les fessiers.", "Décolle doucement la poitrine du sol de quelques centimètres.", "Regarde le sol (pas devant toi).", "Redescends lentement."],
  r: "Expire en montant, inspire en descendant.", s: "Bas du dos, sans douleur.",
  f: "Bras le long du corps.", h: "Bras tendus devant." },
sdt_roumain_halteres: {
  d: "Debout, pieds largeur de hanches, haltères devant les cuisses, paumes vers toi. Genoux légèrement fléchis.",
  m: ["Pousse les hanches vers l’arrière en gardant le dos plat.", "Les haltères glissent le long des cuisses puis des tibias.", "Descends jusqu’à sentir l’étirement derrière les cuisses (souvent sous les genoux).", "Remonte en poussant les hanches vers l’avant, fessiers serrés."],
  r: "Inspire en descendant, expire en remontant.", s: "Arrière des cuisses et fessiers.",
  f: "Haltères plus légers.", h: "Descente sur 3 s." },
sdt_uni: {
  d: "Debout sur une jambe (genou légèrement fléchi), haltère dans la main opposée.",
  m: ["Penche le buste en avant en tendant la jambe libre vers l’arrière.", "Le buste et la jambe arrière forment une ligne droite.", "Garde le bassin face au sol (ne l’ouvre pas sur le côté).", "Remonte en contrôle. Change de côté."],
  r: "Inspire en descendant, expire en remontant.", s: "Arrière de la cuisse et fessier de la jambe d’appui.",
  f: "Avec appui sur une chaise.", h: "Haltère plus lourd." },
sdt_uni_pdc: {
  d: "Debout à côté d’une chaise, une main sur le dossier.",
  m: ["Debout sur la jambe la plus proche de la chaise.", "Penche le buste, jambe libre vers l’arrière.", "Dos plat.", "Remonte en serrant le fessier."],
  r: "Inspire en descendant, expire en remontant.", s: "Arrière de la cuisse, fessier, équilibre.",
  f: "Descends moins bas.", h: "Lâche l’appui." },
sdt_roumain_barre: {
  d: "Debout, barre contre les cuisses, mains largeur d’épaules. Genoux légèrement fléchis.",
  m: ["Recule les hanches, dos plat.", "La barre glisse le long des jambes.", "Descends jusqu’à l’étirement derrière les cuisses.", "Remonte en serrant les fessiers."],
  r: "Inspire en descendant, expire en remontant.", s: "Arrière des cuisses et fessiers.",
  f: "Charge plus légère.", h: "Descente lente." },
sdt_barre: {
  d: "Pieds largeur de hanches, barre au-dessus du milieu du pied. Plie les jambes pour saisir la barre, mains juste à l’extérieur des genoux. Dos plat, poitrine sortie, épaules au-dessus de la barre.",
  m: ["Inspire, gaine le ventre et serre les dorsaux.", "Pousse dans le sol avec les jambes : hanches et épaules montent ensemble.", "La barre reste collée aux jambes.", "Finis debout, fessiers serrés, sans te pencher en arrière. Redescends en reculant les hanches."],
  r: "Inspire et bloque avant de lever, expire en haut.", s: "Fessiers, arrière des cuisses, dos.",
  f: "Charge plus légère.", h: "Pause d’1 s sous les genoux." },
sdt_kettlebell: {
  d: "Pieds largeur de hanches, kettlebell au sol entre les pieds.",
  m: ["Recule les hanches, dos plat, saisis la poignée.", "Poitrine sortie, épaules au-dessus de la kettlebell.", "Redresse-toi en poussant dans le sol.", "Repose en reculant les hanches."],
  r: "Inspire en descendant, expire en montant.", s: "Fessiers et arrière des cuisses.",
  f: "Kettlebell plus légère.", h: "Une jambe." },
kb_swing: {
  d: "Pieds un peu plus larges que les hanches, kettlebell au sol un peu devant toi. Recule les hanches, dos plat, saisis la poignée à deux mains.",
  m: ["Fais passer la kettlebell entre les jambes en la « lançant » vers l’arrière.", "Pousse les hanches vers l’avant de façon explosive en serrant les fessiers.", "La kettlebell monte jusqu’à hauteur de poitrine : les bras ne tirent pas, ils accompagnent.", "Laisse-la redescendre entre les jambes en reculant les hanches, et enchaîne."],
  r: "Expire fort quand les hanches poussent.", s: "Fessiers, arrière des cuisses, cardio.",
  f: "Kettlebell plus légère.", h: "Plus lourde, ou un bras." },
hip_thrust_barre: {
  d: "Haut du dos (sous les omoplates) appuyé sur le bord d’un banc. Barre sur le pli des hanches, protégée par une serviette. Pieds à plat largeur de hanches.",
  m: ["Menton rentré, regard devant.", "Pousse dans les talons pour monter les hanches.", "En haut, buste horizontal, tibias verticaux, fessiers serrés 1 s.", "Redescends en contrôle."],
  r: "Expire en montant, inspire en descendant.", s: "Fessiers très fort.",
  f: "Charge plus légère.", h: "Pause de 3 s en haut." },
hip_thrust_haltere: {
  d: "Haut du dos sur le bord d’un banc, haltère posé sur les hanches (tenu à deux mains). Pieds à plat.",
  m: ["Menton rentré.", "Monte les hanches en poussant dans les talons.", "Serre fort les fessiers 1 s en haut.", "Redescends lentement."],
  r: "Expire en montant, inspire en descendant.", s: "Fessiers.",
  f: "Haltère plus léger.", h: "Une jambe." },
hip_thrust_pdc: {
  d: "Haut du dos contre un canapé ou une chaise calée au mur. Pieds à plat, genoux pliés.",
  m: ["Pousse dans les talons pour monter les hanches.", "Buste à l’horizontale en haut.", "Pause 2 s en serrant les fessiers.", "Redescends lentement."],
  r: "Expire en montant, inspire en descendant.", s: "Fessiers.",
  f: "Pont au sol.", h: "Une jambe." },
good_morning_elastique: {
  d: "Pieds sur la bande, l’autre extrémité passée derrière la nuque (sur les trapèzes). Genoux légèrement fléchis.",
  m: ["Recule les hanches, dos plat.", "Penche le buste jusqu’à l’étirement des ischios.", "Remonte en poussant les hanches vers l’avant.", "Serre les fessiers en haut."],
  r: "Inspire en descendant, expire en remontant.", s: "Arrière des cuisses et fessiers.",
  f: "Bande plus souple.", h: "Bande plus dure." },
pull_through_elastique: {
  d: "Élastique ancré bas derrière toi. Dos à l’ancrage, bande passée entre les jambes, tenue à deux mains. Fais un pas en avant.",
  m: ["Recule les hanches : les mains passent entre les jambes.", "Dos plat, genoux légèrement fléchis.", "Pousse les hanches vers l’avant pour te redresser.", "Serre les fessiers en haut."],
  r: "Inspire en reculant, expire en poussant.", s: "Fessiers et arrière des cuisses.",
  f: "Rapproche-toi de l’ancrage.", h: "Éloigne-toi." },
leg_curl_swiss: {
  d: "Allongé sur le dos, talons sur le ballon, bras au sol. Monte les hanches pour aligner le corps.",
  m: ["Garde les hanches hautes.", "Ramène le ballon vers les fesses en pliant les genoux.", "Serre 1 seconde.", "Repousse lentement le ballon."],
  r: "Expire en ramenant, inspire en repoussant.", s: "Arrière des cuisses.",
  f: "Hanches au sol.", h: "Une jambe." },
hyperext_swiss: {
  d: "Ventre sur le ballon, pieds écartés calés contre un mur, mains près des tempes.",
  m: ["Laisse le buste s’enrouler sur le ballon.", "Décolle la poitrine jusqu’à aligner le corps.", "Pas plus haut.", "Redescends lentement."],
  r: "Expire en montant.", s: "Bas du dos et fessiers.",
  f: "Bras le long du corps.", h: "Bras tendus devant." },
pull_through_poulie: {
  d: "Dos à la poulie basse, corde passée entre les jambes, tenue à deux mains. Avance d’un ou deux pas.",
  m: ["Recule les hanches, dos plat.", "Laisse la corde passer entre les jambes.", "Pousse les hanches vers l’avant.", "Serre les fessiers en haut."],
  r: "Inspire en reculant, expire en poussant.", s: "Fessiers.",
  f: "Charge plus légère.", h: "Pause d’1 s." },
step_up: {
  d: "Debout face à une marche (ou un banc bas stable), rampe à portée de main. Pose un pied entier sur la marche.",
  m: ["Penche légèrement le buste en avant.", "Pousse dans le talon du pied posé sur la marche pour monter.", "Tends la jambe en haut, l’autre pied vient juste se poser.", "Redescends lentement en contrôlant. Toutes les reps d’une jambe, puis l’autre."],
  r: "Expire en montant, inspire en descendant.", s: "Cuisse et fessier de la jambe sur la marche.",
  f: "Marche plus basse.", h: "Marche plus haute ou haltères." },
step_up_halteres: {
  d: "Un haltère dans chaque main, face à la marche. Pied entier sur la marche.",
  m: ["Pousse dans le talon pour monter.", "Ne pousse pas avec la jambe du bas.", "Tends la jambe en haut.", "Redescends lentement."],
  r: "Expire en montant.", s: "Cuisse et fessier.",
  f: "Haltères plus légers.", h: "Marche plus haute." },
fente_arriere_appui: {
  d: "Debout à côté d’une chaise, une main sur le dossier. Pieds largeur de hanches.",
  m: ["Recule une jambe d’un grand pas.", "Descends doucement le genou arrière vers le sol.", "Garde le poids sur le pied avant, buste droit.", "Remonte en poussant dans le talon avant."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisse et fessier de la jambe avant.",
  f: "Descends moins bas.", h: "Lâche l’appui." },
fentes_arriere: {
  d: "Debout, pieds largeur de hanches, mains sur les hanches.",
  m: ["Recule une jambe d’un grand pas, en posant la pointe du pied.", "Descends le genou arrière vers le sol (à quelques centimètres).", "Le genou avant reste au-dessus de la cheville, buste droit.", "Pousse dans le talon avant pour revenir pieds joints."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisse et fessier de la jambe avant.",
  f: "Avec appui sur une chaise.", h: "Haltères." },
fentes_avant: {
  d: "Debout, pieds largeur de hanches, mains sur les hanches.",
  m: ["Fais un grand pas en avant.", "Descends le genou arrière vers le sol, buste droit.", "Genou avant au-dessus de la cheville.", "Repousse fort sur le pied avant pour revenir."],
  r: "Inspire en descendant, expire en revenant.", s: "Cuisses et fessiers.",
  f: "Fentes arrière (plus faciles pour les genoux).", h: "Haltères." },
fentes_marchees: {
  d: "Debout au bout d’un couloir dégagé, mains sur les hanches.",
  m: ["Grand pas en avant, descends le genou arrière.", "Pousse sur le pied avant et ramène l’autre jambe devant pour la fente suivante.", "Buste droit.", "Contrôle chaque pas."],
  r: "Respire régulièrement.", s: "Cuisses, fessiers, équilibre.",
  f: "Pas plus courts.", h: "Haltères." },
fentes_statiques: {
  d: "Pieds décalés : un grand pas d’écart d’avant en arrière, largeur de hanches. Talon arrière décollé.",
  m: ["Sans bouger les pieds, descends à la verticale.", "Genou arrière vers le sol.", "Remonte à la verticale.", "Toutes les reps d’un côté, puis l’autre."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisse avant et fessier.",
  f: "Descends moins.", h: "Haltères." },
fentes_halteres: {
  d: "Debout, pieds largeur de hanches, un haltère dans chaque main, bras le long du corps.",
  m: ["Recule une jambe d’un grand pas en posant la pointe du pied.", "Descends le genou arrière vers le sol, buste droit, haltères qui pendent le long du corps.", "Le genou avant reste au-dessus de la cheville.", "Pousse dans le talon avant pour revenir pieds joints. Alterne ou enchaîne d’un côté."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisses et fessiers.",
  f: "Haltères plus légers.", h: "Descente lente." },
bulgare: {
  d: "Dos à une chaise ou un banc. Pose le dessus du pied arrière sur l’assise. Avance le pied avant d’un grand pas.",
  m: ["Descends à la verticale en pliant le genou avant.", "Le genou arrière va vers le sol.", "Buste droit ou légèrement penché.", "Remonte en poussant dans le talon avant."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisse et fessier de la jambe avant.",
  f: "Support plus bas.", h: "Haltères." },
bulgare_halteres: {
  d: "Dos à une chaise, dessus du pied arrière posé sur l’assise, pied avant un grand pas devant. Un haltère dans chaque main.",
  m: ["Descends à la verticale en pliant le genou avant, haltères le long du corps.", "Le genou arrière descend vers le sol, le genou avant reste au-dessus du pied.", "Arrête quand la cuisse avant est proche de l’horizontale.", "Pousse fort dans le talon avant pour remonter. Toutes les reps d’un côté, puis l’autre."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisse et fessier.",
  f: "Haltères plus légers.", h: "Descente lente." },
fentes_laterales: {
  d: "Debout, pieds joints, mains devant la poitrine.",
  m: ["Fais un grand pas sur le côté.", "Plie le genou de ce côté, fesses en arrière, l’autre jambe reste tendue.", "Buste droit, pieds vers l’avant.", "Repousse pour revenir au centre."],
  r: "Inspire en descendant, expire en revenant.", s: "Intérieur des cuisses, fessiers.",
  f: "Pas plus court.", h: "Haltère." },
fentes_laterales_haltere: {
  d: "Debout, haltère tenu à deux mains contre la poitrine.",
  m: ["Fais un grand pas sur le côté, pied tourné vers l’avant.", "Plie le genou de ce côté en reculant les fesses ; l’autre jambe reste tendue.", "Garde l’haltère contre la poitrine et le dos droit.", "Repousse dans le pied pour revenir au centre, puis fais l’autre côté."],
  r: "Inspire en descendant, expire en revenant.", s: "Intérieur des cuisses, fessiers.",
  f: "Haltère plus léger.", h: "Plus lourd." },
fentes_sautees: {
  d: "En position de fente, mains sur les hanches ou bras prêts à balancer.",
  m: ["Descends en fente.", "Saute en poussant fort.", "Change de jambe en l’air.", "Réceptionne-toi en douceur en fente, genoux pliés."],
  r: "Expire en sautant.", s: "Cuisses, fessiers, cardio.",
  f: "Fentes alternées sans saut.", h: "Rythme plus rapide." },
fentes_kettlebell: {
  d: "Debout, pieds largeur de hanches, kettlebell tenue par les cornes contre la poitrine, coudes vers le bas.",
  m: ["Recule une jambe d’un grand pas.", "Descends le genou arrière vers le sol en gardant la kettlebell collée à la poitrine.", "Buste droit, genou avant au-dessus de la cheville.", "Pousse dans le talon avant pour revenir. Change de jambe."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisses et fessiers.",
  f: "Plus légère.", h: "Plus lourde." },
fentes_trx: {
  d: "Face à l’ancrage, poignées en main, bras tendus.",
  m: ["Recule une jambe.", "Descends le genou arrière.", "Les sangles t’aident à l’équilibre.", "Remonte en poussant dans le talon avant."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisses et fessiers.",
  f: "Aide-toi plus des bras.", h: "Moins d’aide." },
fentes_elastique: {
  d: "En position de fente, pied avant posé sur le milieu de la bande. Extrémités tenues à hauteur d’épaules.",
  m: ["Descends le genou arrière vers le sol à la verticale.", "Garde le buste droit et les mains aux épaules.", "Pousse dans le talon avant pour remonter : la bande résiste en haut.", "Toutes les reps d’un côté, puis change de pied."],
  r: "Inspire en descendant, expire en remontant.", s: "Cuisses et fessiers.",
  f: "Bande plus souple.", h: "Bande plus dure." },
step_lateral: {
  d: "Debout à côté d’une marche, le pied le plus proche posé dessus.",
  m: ["Penche légèrement le buste et pousse dans le talon du pied posé sur la marche.", "Monte jusqu’à tendre cette jambe ; l’autre pied reste en l’air ou se pose à peine.", "Redescends lentement, le pied du bas vient juste effleurer le sol.", "Toutes les reps d’un côté, puis change de côté."],
  r: "Expire en montant.", s: "Fessier (côté de la hanche) et cuisse.",
  f: "Marche plus basse.", h: "Haltères." },
curtsy: {
  d: "Debout, pieds largeur de hanches, mains sur les hanches.",
  m: ["Recule une jambe en diagonale derrière l’autre (comme une révérence).", "Descends en gardant le buste droit.", "Le genou avant reste dans l’axe du pied.", "Remonte et change de côté."],
  r: "Inspire en descendant, expire en remontant.", s: "Fessiers et cuisses.",
  f: "Avec appui.", h: "Haltères." },
curl_halteres: {
  d: "Debout, pieds largeur de hanches, un haltère dans chaque main, bras tendus le long du corps, paumes face à face. Coudes collés aux côtes.",
  m: ["Monte les haltères en pliant les coudes, en tournant les paumes vers le haut pendant la montée.", "Les coudes ne bougent pas : seuls les avant-bras se déplacent.", "Monte jusqu’aux épaules et serre le biceps 1 seconde.", "Redescends lentement (2-3 s) jusqu’aux bras tendus."],
  r: "Expire en montant, inspire en descendant.", s: "Biceps (avant du bras).",
  f: "Haltères plus légers ou un bras à la fois.", h: "Descente sur 4 s." },
curl_marteau: {
  d: "Debout, haltères le long du corps, paumes face à face (comme si tu tenais un marteau).",
  m: ["Garde les coudes collés au corps.", "Monte les haltères sans tourner les poignets.", "Serre en haut 1 seconde.", "Redescends en 2-3 s."],
  r: "Expire en montant, inspire en descendant.", s: "Biceps et dessus de l’avant-bras.",
  f: "Plus léger.", h: "Descente lente." },
curl_assis: {
  d: "Assis droit sur une chaise sans accoudoirs, bras pendants de chaque côté, haltères en main.",
  m: ["Dos droit, sans te pencher en arrière.", "Monte un haltère en tournant la paume vers le haut.", "Redescends lentement.", "Alterne les bras."],
  r: "Expire en montant.", s: "Biceps.",
  f: "Plus léger.", h: "Les deux bras ensemble." },
curl_concentre: {
  d: "Assis au bord d’une chaise, jambes écartées. Haltère dans une main, l’arrière du bras (près du coude) appuyé contre l’intérieur de la cuisse. Bras tendu.",
  m: ["Monte l’haltère vers l’épaule en pliant le coude.", "Le coude reste collé à la cuisse.", "Serre le biceps 1 seconde en haut.", "Redescends lentement. Change de bras après la série."],
  r: "Expire en montant.", s: "Biceps, très isolé.",
  f: "Plus léger.", h: "Descente sur 4 s." },
curl_incline: {
  d: "Allongé sur un banc incliné à 45°, bras qui pendent vers le sol, haltères en main, paumes vers l’avant.",
  m: ["Garde les coudes vers le sol (ne les avance pas).", "Monte les haltères.", "Serre 1 seconde.", "Redescends jusqu’à l’étirement complet."],
  r: "Expire en montant.", s: "Biceps, en étirement.",
  f: "Plus léger.", h: "Descente lente." },
curl_barre: {
  d: "Debout, barre tenue paumes vers le haut, mains largeur d’épaules, bras tendus.",
  m: ["Coudes collés aux côtes, poignets droits.", "Monte la barre vers les épaules sans balancer le buste ni avancer les coudes.", "Serre les biceps 1 seconde en haut.", "Redescends lentement (2-3 s) jusqu’aux bras tendus."],
  r: "Expire en montant.", s: "Biceps.",
  f: "Plus léger.", h: "Descente sur 3 s." },
curl_elastique: {
  d: "Debout sur le milieu de la bande, une extrémité dans chaque main, paumes vers l’avant.",
  m: ["Coudes collés aux côtes, bras tendus, bande déjà légèrement tendue.", "Monte les mains vers les épaules en pliant seulement les coudes.", "Serre les biceps 1 seconde en haut.", "Redescends lentement en gardant la tension de la bande."],
  r: "Expire en montant.", s: "Biceps.",
  f: "Bande plus souple.", h: "Pieds plus écartés." },
curl_poulie: {
  d: "Face à la poulie basse, barre droite en mains paumes vers le haut.",
  m: ["Recule d’un pas, coudes collés aux côtes, bras tendus.", "Monte la barre vers les épaules sans bouger les coudes.", "Serre les biceps 1 seconde.", "Redescends en contrôle : le câble garde la tension tout le long."],
  r: "Expire en montant.", s: "Biceps.",
  f: "Plus léger.", h: "Pause en haut." },
curl_kettlebell: {
  d: "Debout, kettlebell tenue par les cornes ou la poignée, bras tendus.",
  m: ["Coudes collés au corps, bras tendus.", "Monte la kettlebell vers la poitrine en pliant les coudes.", "Garde les poignets droits et le buste immobile.", "Redescends lentement jusqu’aux bras tendus."],
  r: "Expire en montant.", s: "Biceps et avant-bras.",
  f: "Plus légère.", h: "Descente lente." },
curl_serviette: {
  d: "Debout, un pied posé sur le milieu d’une serviette pliée. Tiens les deux extrémités dans une main, coude collé au corps et plié à 90°.",
  m: ["Tire la serviette vers le haut avec le biceps.", "Le pied bloque : rien ne bouge.", "Pousse fort pendant toute la durée.", "Change de bras."],
  r: "Respire calmement, ne bloque pas.", s: "Biceps.",
  f: "Tire moins fort.", h: "Tire plus fort." },
curl_trx: {
  d: "Face à l’ancrage, poignées en main, paumes vers le haut, bras tendus. Penche-toi en arrière.",
  m: ["Coudes à hauteur d’épaules, ils restent fixes.", "Plie les coudes pour ramener les mains vers le front.", "Le corps monte vers les poignées.", "Redescends lentement."],
  r: "Expire en montant.", s: "Biceps.",
  f: "Corps plus droit.", h: "Corps plus penché." },
curl_machine: {
  d: "Assis, coudes sur l’appui, alignés avec l’axe de la machine.",
  m: ["Saisis les poignées, bras presque tendus, coudes bien posés sur l’appui.", "Monte en pliant les coudes, sans soulever les coudes de l’appui.", "Serre les biceps 1 seconde en haut.", "Redescends lentement sans laisser les plaques se reposer."],
  r: "Expire en montant.", s: "Biceps.",
  f: "Plus léger.", h: "Descente lente." },
extension_nuque: {
  d: "Assis ou debout, haltère tenu à deux mains (sous le disque du haut), bras tendus au-dessus de la tête.",
  m: ["Garde les coudes pointés vers le plafond, près de la tête.", "Plie les coudes pour descendre l’haltère derrière la nuque.", "Arrête quand tu sens l’étirement des triceps.", "Remonte jusqu’aux bras tendus."],
  r: "Inspire en descendant, expire en remontant.", s: "Arrière des bras (triceps).",
  f: "Plus léger.", h: "Descente lente." },
kickback: {
  d: "Penché en avant avec appui (main et genou sur un banc ou main sur une chaise), dos plat. Haltère en main, coude plié à 90° et collé au corps, bras parallèle au sol.",
  m: ["Le haut du bras ne bouge pas.", "Tends le bras vers l’arrière.", "Serre le triceps 1 seconde bras tendu.", "Reviens lentement à 90°. Change de bras."],
  r: "Expire en tendant.", s: "Triceps.",
  f: "Plus léger.", h: "Pause de 2 s." },
extension_halteres_couche: {
  d: "Allongé sur un banc, haltères bras tendus au-dessus des épaules, paumes face à face.",
  m: ["Garde les bras verticaux.", "Plie les coudes pour descendre les haltères vers les tempes.", "Les coudes ne s’écartent pas.", "Remonte bras tendus."],
  r: "Inspire en descendant, expire en remontant.", s: "Triceps.",
  f: "Plus léger.", h: "Descente lente." },
barre_front: {
  d: "Allongé sur un banc, barre tenue bras tendus au-dessus du visage, mains largeur d’épaules.",
  m: ["Plie les coudes pour descendre la barre vers le front.", "Les coudes restent serrés.", "Arrête juste avant le front.", "Remonte bras tendus."],
  r: "Inspire en descendant, expire en remontant.", s: "Triceps.",
  f: "Plus léger.", h: "Descente lente." },
extension_elastique: {
  d: "Debout, bande sous un pied placé derrière toi. Mains derrière la tête, coudes vers le plafond.",
  m: ["Coudes pointés vers le plafond, près de la tête, mains derrière la nuque.", "Tends les bras vers le haut : seuls les avant-bras bougent.", "Serre les triceps 1 seconde bras tendus.", "Redescends lentement derrière la tête."],
  r: "Expire en tendant.", s: "Triceps.",
  f: "Bande souple.", h: "Bande dure." },
pushdown_elastique: {
  d: "Élastique ancré en haut d’une porte. Face à la porte, mains sur la bande à hauteur de poitrine, coudes collés aux côtes.",
  m: ["Pousse les mains vers le bas.", "Tends complètement les bras.", "Coudes immobiles.", "Remonte lentement à hauteur de poitrine."],
  r: "Expire en poussant.", s: "Triceps.",
  f: "Bande souple.", h: "Pause bras tendus." },
pushdown_poulie: {
  d: "Face à la poulie haute, barre ou corde en mains, coudes collés, buste légèrement penché.",
  m: ["Coudes collés aux côtes, avant-bras à l’horizontale.", "Pousse la barre (ou la corde) vers le bas jusqu’aux bras tendus.", "Serre les triceps 1 seconde ; avec la corde, écarte les mains en bas.", "Remonte en contrôle jusqu’à l’horizontale, coudes immobiles."],
  r: "Expire en poussant.", s: "Triceps.",
  f: "Plus léger.", h: "Pause en bas." },
dips_banc: {
  d: "Assis au bord d’un banc, mains de chaque côté des fesses, doigts vers l’avant. Avance les fesses, genoux pliés, pieds à plat.",
  m: ["Garde le dos tout près du banc et les épaules basses.", "Plie les coudes vers l’arrière (pas sur les côtés) pour descendre les fesses.", "Arrête quand les coudes sont pliés à 90°.", "Pousse dans les mains pour remonter bras tendus."],
  r: "Inspire en descendant, expire en poussant.", s: "Triceps.",
  f: "Pieds plus près.", h: "Jambes tendues." },
kickback_elastique: {
  d: "Bande sous le pied avant (en fente), buste penché, coude plié et collé au corps.",
  m: ["Coude plié à 90° et collé au corps, buste penché, dos plat.", "Tends le bras vers l’arrière : seul l’avant-bras bouge.", "Serre le triceps 1 seconde bras tendu.", "Reviens lentement à 90°. Change de bras."],
  r: "Expire en tendant.", s: "Triceps.",
  f: "Bande souple.", h: "Bande dure." },
triceps_sol: {
  d: "En planche sur les avant-bras (ou sur les genoux pour débuter), coudes sous les épaules.",
  m: ["Pousse sur les mains pour tendre les bras, les coudes décollent.", "Corps gainé.", "Arrive en position de pompe bras tendus.", "Redescends doucement sur les avant-bras."],
  r: "Expire en poussant.", s: "Triceps.",
  f: "Sur les genoux.", h: "Lentement." },
extension_trx: {
  d: "Dos à l’ancrage, poignées au-dessus de la tête, bras tendus, corps penché en avant.",
  m: ["Plie les coudes vers l’avant, tête qui passe entre les bras.", "Coudes fixes.", "Tends les bras pour revenir.", "Corps gainé."],
  r: "Inspire en descendant, expire en tendant.", s: "Triceps.",
  f: "Corps plus droit.", h: "Plus penché." },
extension_kettlebell: {
  d: "Kettlebell tenue par les cornes derrière la tête, coudes vers le plafond.",
  m: ["Coudes pointés vers le plafond, près de la tête.", "Tends les bras pour monter la kettlebell au-dessus de la tête.", "Serre les triceps 1 seconde en haut.", "Redescends lentement derrière la tête, coudes immobiles."],
  r: "Expire en tendant.", s: "Triceps.",
  f: "Plus légère.", h: "Descente lente." },
triceps_machine: {
  d: "Assis, coudes sur l’appui.",
  m: ["Saisis les poignées, coudes bien posés sur l’appui.", "Tends les bras en poussant vers le bas.", "Serre les triceps 1 seconde bras tendus.", "Remonte lentement sans laisser les plaques se reposer."],
  r: "Expire en tendant.", s: "Triceps.",
  f: "Plus léger.", h: "Pause." },
elevations_laterales: {
  d: "Debout, pieds largeur de hanches, un haltère dans chaque main le long du corps, paumes vers toi. Coudes très légèrement fléchis, buste légèrement penché vers l’avant.",
  m: ["Monte les bras sur les côtés, en menant avec les coudes.", "Arrête à hauteur d’épaules : les bras sont parallèles au sol.", "Garde les épaules basses (pas de haussement).", "Redescends en 2-3 secondes."],
  r: "Expire en montant, inspire en descendant.", s: "Côté des épaules.",
  f: "Plus léger.", h: "Pause d’1 s en haut." },
elevations_laterales_assis: {
  d: "Assis au bord d’une chaise, dos droit, haltères le long du corps.",
  m: ["Coudes très légèrement fléchis, buste droit.", "Monte les bras sur les côtés en menant avec les coudes.", "Arrête à hauteur d’épaules, épaules basses.", "Redescends en 2-3 secondes."],
  r: "Expire en montant.", s: "Côté des épaules.",
  f: "Plus léger.", h: "Pause en haut." },
elevations_laterales_elastique: {
  d: "Debout sur le milieu de la bande, une extrémité dans chaque main.",
  m: ["Coudes légèrement fléchis, bande déjà un peu tendue.", "Monte les bras sur les côtés jusqu’à hauteur d’épaules.", "Garde les épaules basses, sans hausser.", "Redescends lentement en gardant la tension."],
  r: "Expire en montant.", s: "Côté des épaules.",
  f: "Un pied sur la bande seulement.", h: "Pieds écartés." },
elevations_laterales_poulie: {
  d: "De profil à la poulie basse, poignée dans la main la plus éloignée, câble qui passe devant toi.",
  m: ["Main éloignée de la poulie, coude légèrement fléchi.", "Monte le bras sur le côté jusqu’à hauteur d’épaule.", "Buste immobile, sans te pencher.", "Redescends lentement. Change de côté."],
  r: "Expire en montant.", s: "Côté de l’épaule.",
  f: "Plus léger.", h: "Pause." },
elevations_frontales: {
  d: "Debout, haltères devant les cuisses, paumes vers toi.",
  m: ["Monte un ou deux bras devant toi, coudes légèrement fléchis.", "Jusqu’à hauteur d’yeux.", "Sans balancer.", "Redescends lentement."],
  r: "Expire en montant.", s: "Avant des épaules.",
  f: "Plus léger.", h: "Pause." },
elevations_frontales_disque: {
  d: "Debout, ballon tenu à deux mains devant les cuisses.",
  m: ["Bras presque tendus, ballon devant les cuisses.", "Monte le ballon devant toi jusqu’à hauteur d’yeux.", "Gaine le ventre pour ne pas te pencher en arrière.", "Redescends lentement."],
  r: "Expire en montant.", s: "Avant des épaules.",
  f: "Plus léger.", h: "Plus lourd." },
oiseau: {
  d: "Debout, genoux fléchis, buste penché vers l’avant presque à l’horizontale, dos plat. Haltères qui pendent sous la poitrine, paumes face à face.",
  m: ["Ouvre les bras sur les côtés, coudes légèrement fléchis.", "Monte jusqu’à hauteur d’épaules.", "Serre les omoplates 1 seconde.", "Redescends lentement."],
  r: "Expire en ouvrant.", s: "Arrière des épaules, haut du dos.",
  f: "Plus léger ou assis.", h: "Pause de 2 s." },
oiseau_assis: {
  d: "Assis au bord d’une chaise, buste penché sur les cuisses, haltères sous les mollets.",
  m: ["Poitrine proche des cuisses, haltères sous les mollets, paumes face à face.", "Ouvre les bras sur les côtés, coudes légèrement fléchis.", "Monte jusqu’à hauteur d’épaules et serre les omoplates 1 s.", "Redescends lentement."],
  r: "Expire en ouvrant.", s: "Arrière des épaules.",
  f: "Plus léger.", h: "Pause." },
pull_apart: {
  d: "Debout, bande tenue à deux mains devant toi à hauteur d’épaules, bras tendus, mains écartées de la largeur des épaules.",
  m: ["Écarte les bras sur les côtés en gardant les bras tendus.", "La bande vient toucher la poitrine.", "Serre les omoplates 1 seconde.", "Reviens lentement."],
  r: "Expire en écartant.", s: "Arrière des épaules et haut du dos ; idéal pour la posture.",
  f: "Mains plus écartées.", h: "Mains plus rapprochées." },
oiseau_poulie: {
  d: "Entre deux poulies hautes, câbles croisés devant toi.",
  m: ["Saisis les câbles croisés (main droite tient le câble gauche et inversement), bras tendus devant.", "Ouvre les bras vers l’arrière, à hauteur d’épaules.", "Serre les omoplates 1 seconde.", "Reviens en contrôle jusqu’aux mains croisées."],
  r: "Expire en ouvrant.", s: "Arrière des épaules.",
  f: "Plus léger.", h: "Pause." },
rotation_externe: {
  d: "Élastique ancré à hauteur de coude, de profil. Coude collé au corps (serviette roulée entre le coude et les côtes), plié à 90°, main devant le ventre.",
  m: ["Garde le coude collé.", "Tourne l’avant-bras vers l’extérieur, comme une porte qui s’ouvre.", "Va jusqu’où c’est confortable.", "Reviens lentement. Change de côté."],
  r: "Expire en ouvrant.", s: "Arrière de l’épaule (coiffe des rotateurs).",
  f: "Bande souple.", h: "Pause." },
rotation_externe_haltere: {
  d: "Allongé sur le côté, tête posée. Coude du bras du dessus collé à la hanche, plié à 90°, haltère très léger devant le ventre.",
  m: ["Coude toujours collé à la hanche, plié à 90°.", "Monte l’avant-bras vers le plafond en tournant l’épaule.", "Arrête où c’est confortable, sans forcer.", "Redescends lentement. Change de côté."],
  r: "Expire en montant.", s: "Arrière de l’épaule.",
  f: "Sans poids.", h: "Un peu plus lourd (max 3 kg)." },
pec_deck_arriere: {
  d: "Assis face à la machine, poitrine contre l’appui, poignées bras tendus.",
  m: ["Saisis les poignées bras presque tendus, poitrine contre l’appui.", "Ouvre les bras vers l’arrière, à hauteur d’épaules.", "Serre les omoplates 1 seconde.", "Reviens lentement sans laisser les plaques se toucher."],
  r: "Expire en ouvrant.", s: "Arrière des épaules.",
  f: "Plus léger.", h: "Pause." },
cercles_bras: {
  d: "Debout, bras tendus sur les côtés à hauteur d’épaules.",
  m: ["Fais des petits cercles vers l’avant.", "Garde les épaules basses.", "À mi-temps, change de sens.", "Bras toujours tendus."],
  r: "Respire normalement.", s: "Côté des épaules (ça chauffe vite).",
  f: "Baisse un peu les bras.", h: "Petites bouteilles d’eau en main." },
shrugs_halteres: {
  d: "Debout, haltères le long du corps, bras tendus.",
  m: ["Bras tendus, épaules relâchées.", "Monte les épaules droit vers les oreilles (sans rouler).", "Tiens 1 seconde en haut.", "Redescends lentement."],
  r: "Expire en montant.", s: "Trapèzes (haut des épaules, cou).",
  f: "Plus léger.", h: "Pause de 3 s." },
tirage_menton_elastique: {
  d: "Debout sur la bande, mains rapprochées devant les cuisses.",
  m: ["Monte les coudes sur les côtés.", "Jusqu’à hauteur d’épaules (pas plus).", "Mains près du corps.", "Redescends lentement."],
  r: "Expire en montant.", s: "Côté des épaules, trapèzes.",
  f: "Bande souple.", h: "Bande dure." },
ecarte_halteres: {
  d: "Allongé sur un banc, haltères bras tendus au-dessus de la poitrine, paumes face à face, coudes légèrement fléchis.",
  m: ["Ouvre les bras sur les côtés en arc de cercle, coudes fixes.", "Descends jusqu’à sentir l’étirement de la poitrine (coudes au niveau du banc).", "Referme en arc de cercle comme pour serrer un arbre.", "Serre la poitrine en haut."],
  r: "Inspire en ouvrant, expire en refermant.", s: "Pectoraux.",
  f: "Plus léger.", h: "Descente lente." },
ecarte_sol: {
  d: "Allongé au sol, genoux pliés, haltères au-dessus de la poitrine, coudes légèrement fléchis.",
  m: ["Ouvre les bras sur les côtés.", "Jusqu’à ce que les coudes touchent le sol.", "Referme au-dessus de la poitrine.", "Serre."],
  r: "Inspire en ouvrant, expire en refermant.", s: "Pectoraux.",
  f: "Plus léger.", h: "Pause au sol." },
ecarte_elastique: {
  d: "Bande passée dans le dos (ou ancrée derrière toi), une extrémité dans chaque main, bras ouverts.",
  m: ["Bras ouverts sur les côtés, coudes légèrement fléchis.", "Ramène les mains devant la poitrine en arc de cercle.", "Serre la poitrine 1 seconde, mains qui se touchent presque.", "Reviens lentement bras ouverts."],
  r: "Expire en refermant.", s: "Pectoraux.",
  f: "Bande souple.", h: "Pause." },
pec_deck: {
  d: "Assis, dos collé, coudes à hauteur d’épaules contre les appuis.",
  m: ["Avant-bras ou mains contre les appuis, dos collé.", "Ramène les bras devant toi jusqu’à ce que les appuis se rapprochent.", "Serre la poitrine 1 seconde.", "Ouvre lentement sans aller trop loin derrière les épaules."],
  r: "Expire en fermant.", s: "Pectoraux.",
  f: "Plus léger.", h: "Pause." },
vis_a_vis: {
  d: "Entre deux poulies hautes, une poignée dans chaque main, un pied en avant, buste légèrement penché.",
  m: ["Bras ouverts, coudes légèrement fléchis.", "Ramène les mains devant le bas de la poitrine en arc de cercle.", "Serre la poitrine 1 seconde.", "Reviens en contrôle jusqu’à l’étirement."],
  r: "Expire en fermant.", s: "Pectoraux.",
  f: "Plus léger.", h: "Pause." },
presse_mains: {
  d: "Debout ou assis, paumes jointes devant la poitrine, doigts vers le haut, coudes écartés à hauteur de poitrine.",
  m: ["Pousse fort une main contre l’autre.", "Garde les épaules basses.", "Maintiens la pression toute la durée.", "Relâche doucement."],
  r: "Respire calmement, ne bloque pas.", s: "Pectoraux.",
  f: "Pousse moins fort.", h: "Pousse plus fort." },
mollets_pdc: {
  d: "Debout face à un mur, mains posées dessus, pieds largeur de hanches.",
  m: ["Monte sur la pointe des pieds le plus haut possible.", "Pause 1 seconde en haut.", "Redescends lentement.", "Talons au sol sans relâcher."],
  r: "Expire en montant.", s: "Mollets.",
  f: "Moins haut.", h: "Une jambe." },
mollets_marche: {
  d: "Avant des pieds posé sur le bord d’une marche, talons dans le vide. Main sur la rampe.",
  m: ["Laisse descendre les talons sous la marche.", "Monte sur la pointe le plus haut possible.", "Pause 1 s.", "Redescends lentement."],
  r: "Expire en montant.", s: "Mollets, en amplitude complète.",
  f: "Au sol.", h: "Une jambe." },
mollets_haltere: {
  d: "Avant d’un pied sur la marche, haltère dans la main du même côté, l’autre main sur la rampe.",
  m: ["Laisse descendre le talon sous la marche.", "Monte sur la pointe du pied le plus haut possible.", "Tiens 1 seconde en haut.", "Redescends lentement. Change de pied après la série."],
  r: "Expire en montant.", s: "Mollet.",
  f: "Sans haltère.", h: "Plus lourd." },
mollets_assis: {
  d: "Assis, pieds à plat, un poids (ou les mains qui appuient) sur les genoux.",
  m: ["Pieds à plat, poids posé sur les genoux.", "Monte les talons le plus haut possible.", "Tiens 1 seconde en haut.", "Redescends lentement jusqu’au sol."],
  r: "Expire en montant.", s: "Bas des mollets.",
  f: "Sans poids.", h: "Poids plus lourd." },
mollets_presse: {
  d: "Assis à la presse, avant des pieds en bas du plateau, jambes presque tendues.",
  m: ["Avant des pieds en bas du plateau, talons dans le vide.", "Pousse le plateau avec les chevilles, jambes presque tendues.", "Tiens 1 seconde en haut.", "Reviens lentement en laissant les talons descendre."],
  r: "Expire en poussant.", s: "Mollets.",
  f: "Plus léger.", h: "Pause." },
leg_extension: {
  d: "Assis, dos collé, genoux alignés avec l’axe de la machine, boudin sur le bas des tibias.",
  m: ["Tiens les poignées, dos collé au dossier.", "Tends les jambes jusqu’à l’horizontale.", "Serre les cuisses 1 seconde en haut.", "Redescends lentement sans laisser les plaques se toucher."],
  r: "Expire en tendant.", s: "Avant des cuisses.",
  f: "Plus léger.", h: "Pause de 2 s." },
leg_curl_machine: {
  d: "Allongé ou assis selon la machine, genoux alignés avec l’axe, boudin au-dessus des talons.",
  m: ["Hanches bien collées au siège ou au banc.", "Ramène les talons vers les fesses en pliant les genoux.", "Serre 1 seconde.", "Remonte lentement jusqu’aux jambes presque tendues."],
  r: "Expire en pliant.", s: "Arrière des cuisses.",
  f: "Plus léger.", h: "Descente lente." },
extension_jambe_assis: {
  d: "Assis droit sur une chaise, mains sur les côtés de l’assise.",
  m: ["Tends une jambe à l’horizontale.", "Pointe du pied vers toi.", "Tiens 2 s.", "Redescends lentement, puis l’autre jambe."],
  r: "Expire en tendant.", s: "Avant de la cuisse.",
  f: "Tiens 1 s.", h: "Poids à la cheville." },
extension_jambe_elastique: {
  d: "Assis, mini-bande autour des chevilles.",
  m: ["Assis droit, mini-bande autour des chevilles.", "Tends une jambe devant toi contre la résistance.", "Tiens 1 seconde jambe tendue.", "Redescends lentement. Change de jambe."],
  r: "Expire en tendant.", s: "Avant de la cuisse.",
  f: "Bande souple.", h: "Bande dure." },
leg_curl_elastique: {
  d: "Debout, mains sur le dossier d’une chaise, mini-bande aux chevilles.",
  m: ["Debout droit, genoux côte à côte.", "Ramène un talon vers la fesse, genou pointé vers le sol.", "Tiens 1 seconde.", "Redescends lentement. Change de jambe."],
  r: "Expire en pliant.", s: "Arrière de la cuisse.",
  f: "Bande souple.", h: "Bande dure." },
leg_curl_serviette: {
  d: "Allongé sur le dos sur un sol lisse, talons sur une serviette, genoux pliés. Monte les hanches.",
  m: ["Fais glisser les talons loin de toi en gardant les hanches hautes.", "Va jusqu’aux jambes presque tendues.", "Ramène les talons vers les fesses.", "Garde les hanches hautes tout le long."],
  r: "Expire en ramenant.", s: "Arrière des cuisses.",
  f: "Hanches au sol.", h: "Une jambe." },
abduction_couche: {
  d: "Allongé sur le côté, jambes tendues l’une sur l’autre, tête posée sur le bras.",
  m: ["Monte la jambe du dessus, pointe du pied légèrement vers le bas.", "Monte jusqu’à 40-50 cm.", "Hanche vers l’avant, pas de rotation.", "Redescends lentement."],
  r: "Expire en montant.", s: "Côté de la hanche (moyen fessier).",
  f: "Moins haut.", h: "Mini-bande." },
abduction_debout: {
  d: "Debout, une main sur le dossier d’une chaise.",
  m: ["Debout droit, pointe du pied vers l’avant.", "Écarte la jambe sur le côté sans pencher le buste.", "Tiens 1 seconde.", "Redescends lentement."],
  r: "Expire en écartant.", s: "Côté de la hanche.",
  f: "Moins haut.", h: "Mini-bande." },
abduction_mini_bande: {
  d: "Debout, mini-bande aux chevilles, main sur une chaise.",
  m: ["Debout droit, pointe du pied vers l’avant.", "Écarte la jambe sur le côté contre la résistance.", "Tiens 1 seconde sans pencher le buste.", "Ramène lentement."],
  r: "Expire en écartant.", s: "Côté de la hanche.",
  f: "Bande souple.", h: "Bande dure." },
marche_laterale: {
  d: "Mini-bande autour des genoux ou des chevilles. Pieds largeur de hanches, en demi-squat.",
  m: ["Fais un pas sur le côté.", "Rapproche l’autre pied sans laisser la bande se détendre.", "Reste bas tout le long.", "Autant de pas de chaque côté."],
  r: "Respire régulièrement.", s: "Côté des fessiers.",
  f: "Bande aux genoux.", h: "Bande aux chevilles." },
clamshell: {
  d: "Allongé sur le côté, genoux pliés à 90°, mini-bande au-dessus des genoux, pieds l’un sur l’autre.",
  m: ["Pieds collés, ouvre le genou du dessus.", "Le bassin ne bascule pas vers l’arrière.", "Tiens 1 s.", "Referme lentement."],
  r: "Expire en ouvrant.", s: "Fessiers (côté).",
  f: "Sans bande.", h: "Bande plus dure." },
kickback_fessier: {
  d: "À quatre pattes, mains sous les épaules, genoux sous les hanches, dos plat.",
  m: ["Pousse un talon vers le plafond, genou plié à 90°.", "Sans cambrer le dos.", "Serre le fessier 1 s.", "Redescends lentement."],
  r: "Expire en montant.", s: "Fessier.",
  f: "Moins haut.", h: "Mini-bande." },
kickback_debout: {
  d: "Debout, mains sur le dossier d’une chaise, buste légèrement penché.",
  m: ["Buste légèrement penché, ventre gainé.", "Recule une jambe tendue en serrant le fessier.", "Ne cambre pas le bas du dos.", "Ramène lentement. Change de jambe."],
  r: "Expire en reculant la jambe.", s: "Fessier.",
  f: "Moins loin.", h: "Mini-bande." },
adduction_coussin: {
  d: "Assis droit, un coussin ou un ballon entre les genoux.",
  m: ["Assis droit, pieds à plat, coussin entre les genoux.", "Serre fort le coussin.", "Garde la pression toute la durée.", "Relâche doucement."],
  r: "Respire calmement.", s: "Intérieur des cuisses.",
  f: "Serre moins.", h: "Serre plus." },
adduction_couche: {
  d: "Allongé sur le côté, jambe du dessus pliée, pied posé devant le genou du dessous.",
  m: ["Allongé sur le côté, jambe du dessus pliée, pied posé devant.", "Monte la jambe du dessous tendue de quelques centimètres.", "Tiens 1 seconde.", "Redescends lentement."],
  r: "Expire en montant.", s: "Intérieur de la cuisse.",
  f: "Moins haut.", h: "Pause." },
adduction_poulie: {
  d: "Sangle à la cheville, de profil à la poulie basse, main sur la machine.",
  m: ["Debout de profil, jambe attachée côté poulie.", "Ramène la jambe devant l’autre en croisant légèrement.", "Garde le buste droit.", "Reviens lentement."],
  r: "Expire en ramenant.", s: "Intérieur de la cuisse.",
  f: "Plus léger.", h: "Pause." },
curl_poignet: {
  d: "Assis, avant-bras posés sur les cuisses, poignets qui dépassent, haltères en main, paumes vers le haut.",
  m: ["Laisse descendre les poignets vers le sol.", "Monte-les le plus haut possible.", "Seuls les poignets bougent, les avant-bras restent posés.", "Mouvement lent."],
  r: "Respire normalement.", s: "Intérieur des avant-bras.",
  f: "Plus léger.", h: "Plus lourd." },
serrer_serviette: {
  d: "Debout, serviette roulée tenue à deux mains devant toi.",
  m: ["Serviette roulée, mains écartées.", "Tords-la fort comme pour l’essorer.", "Garde la tension.", "À mi-temps, change de sens."],
  r: "Respire calmement.", s: "Avant-bras et mains.",
  f: "Moins fort.", h: "Serviette mouillée." },
farmer_walk: {
  d: "Debout, un haltère lourd dans chaque main, bras le long du corps.",
  m: ["Épaules basses et en arrière, buste droit.", "Marche à petits pas réguliers.", "Ne laisse pas les haltères balancer.", "Repose-les en pliant les jambes."],
  r: "Respire calmement.", s: "Avant-bras, trapèzes, gainage.",
  f: "Plus léger.", h: "Plus lourd." },
farmer_kettlebell: {
  d: "Une kettlebell lourde d’un seul côté.",
  m: ["Debout droit, kettlebell d’un seul côté.", "Marche droit à petits pas.", "Garde les épaules à la même hauteur.", "Change de main à mi-temps."],
  r: "Respire calmement.", s: "Avant-bras et obliques.",
  f: "Plus légère.", h: "Plus lourde." },
planche_mur: {
  d: "Debout face à un mur, avant-bras posés contre le mur à hauteur d’épaules, coudes sous les épaules. Recule les pieds jusqu’à ce que le corps soit incliné et droit.",
  m: ["Serre les abdos comme si tu allais prendre un coup dans le ventre.", "Serre les fessiers : le bassin ne part ni en arrière ni en avant.", "Tête dans l’alignement du dos, regard vers le mur.", "Tiens la position sans bouger."],
  r: "Respire normalement, par petites respirations, sans bloquer.", s: "Abdos (ventre) et fessiers.",
  f: "Rapproche les pieds du mur.", h: "Planche sur une chaise." },
planche_chaise: {
  d: "Chaise calée contre un mur. Mains (ou avant-bras) posées sur l’assise. Recule les pieds jusqu’à ce que le corps soit droit de la tête aux talons.",
  m: ["Gaine le ventre et serre les fessiers.", "Le bassin reste aligné : ni fesses en l’air, ni ventre qui tombe.", "Pousse légèrement l’assise loin de toi pour écarter les omoplates.", "Tiens en respirant."],
  r: "Respire calmement, sans bloquer.", s: "Abdos, fessiers, épaules.",
  f: "Support plus haut (table).", h: "Planche au sol." },
planche_genoux: {
  d: "Allongé sur le ventre, puis monte sur les avant-bras (coudes sous les épaules) et sur les genoux. Le corps forme une ligne droite des genoux à la tête.",
  m: ["Rentre légèrement le ventre et serre les fessiers.", "Ne monte pas les fesses : épaules, hanches et genoux alignés.", "Pousse le sol avec les avant-bras.", "Regard vers le sol, nuque détendue. Tiens."],
  r: "Respire calmement.", s: "Abdos.",
  f: "Planche contre le mur.", h: "Planche complète." },
planche: {
  d: "Allongé sur le ventre. Pose les avant-bras au sol, coudes juste sous les épaules, mains à plat ou poings fermés. Décolle le corps en appui sur les avant-bras et la pointe des pieds (pieds largeur de hanches).",
  m: ["Forme une ligne droite de la tête aux talons : imagine un manche à balai posé sur ton dos qui touche tête, haut du dos et fesses.", "Rentre légèrement le nombril et serre fort les fessiers (ça évite de creuser le bas du dos).", "Pousse le sol avec les avant-bras pour écarter les omoplates, regard vers le sol entre les mains.", "Tiens la position sans bouger. Si le bassin tombe ou si le bas du dos tire, pose les genoux."],
  r: "Respire normalement par petites respirations ; ne bloque jamais ta respiration.", s: "Abdos (tout le ventre), fessiers, épaules. Pas dans le bas du dos !",
  f: "Genoux au sol.", h: "Lève un pied ou un bras en alternance." },
planche_laterale: {
  d: "Allongé sur le côté, jambes tendues l’une sur l’autre (ou pieds décalés). Appui sur l’avant-bras, coude juste sous l’épaule, l’autre main sur la hanche.",
  m: ["Soulève les hanches du sol : le corps forme une ligne droite de la tête aux pieds.", "Pousse le sol avec l’avant-bras, épaule loin de l’oreille.", "Ne laisse pas la hanche s’affaisser ni partir en arrière.", "Tiens, puis change de côté."],
  r: "Respire calmement.", s: "Côté du ventre (obliques) et côté de la hanche.",
  f: "Genoux pliés au sol.", h: "Lève la jambe du dessus." },
planche_laterale_mur: {
  d: "De profil à un mur, avant-bras contre le mur à hauteur d’épaule. Éloigne les pieds du mur, pieds joints.",
  m: ["Corps droit, incliné vers le mur.", "Pousse la hanche loin du mur.", "Gaine le ventre, épaule loin de l’oreille.", "Tiens, puis change de côté."],
  r: "Respire calmement.", s: "Côté du ventre (obliques).",
  f: "Rapproche les pieds du mur.", h: "Planche latérale au sol." },
crunch: {
  d: "Allongé sur le dos, genoux pliés, pieds à plat. Mains près des tempes (sans tirer sur la tête) ou croisées sur la poitrine.",
  m: ["Plaque le bas du dos au sol.", "Enroule le haut du dos : les omoplates décollent, comme si tu voulais rapprocher les côtes du bassin.", "Regard vers le plafond, un poing d’espace entre menton et poitrine.", "Redescends lentement sans reposer complètement la tête."],
  r: "Expire en montant, inspire en descendant.", s: "Haut du ventre.",
  f: "Bras le long du corps.", h: "Pause de 2 s en haut." },
crunch_assis: {
  d: "Assis au bord d’une chaise, pieds à plat, mains croisées sur la poitrine.",
  m: ["Penche-toi légèrement en arrière, dos droit.", "Tiens 1 seconde : les abdos travaillent.", "Reviens en contractant les abdos.", "Sans te tenir à la chaise."],
  r: "Expire en revenant.", s: "Abdos.",
  f: "Penche-toi moins.", h: "Penche-toi plus." },
genoux_poitrine_assis: {
  d: "Assis au bord d’une chaise, mains sur les côtés de l’assise, buste légèrement penché en arrière.",
  m: ["Décolle les pieds du sol.", "Ramène les genoux vers la poitrine.", "Tends les jambes devant toi sans toucher le sol.", "Recommence."],
  r: "Expire en ramenant.", s: "Bas du ventre.",
  f: "Un pied à la fois.", h: "Ne repose jamais les pieds." },
releve_genoux_debout: {
  d: "Debout, une main sur un appui si besoin.",
  m: ["Debout droit, ventre gainé.", "Monte un genou vers la poitrine en enroulant le bassin.", "Redescends lentement sans laisser tomber la jambe.", "Alterne."],
  r: "Expire en montant.", s: "Bas du ventre.",
  f: "Avec appui.", h: "Plus lent." },
crunch_oblique_debout: {
  d: "Debout, pieds largeur de hanches, mains derrière la tête.",
  m: ["Debout, mains derrière la tête.", "Monte un genou sur le côté.", "Rapproche le coude du même côté en contractant le côté du ventre.", "Alterne en contrôle."],
  r: "Expire en contractant.", s: "Côté du ventre.",
  f: "Plus lent.", h: "Plus rapide." },
releve_jambes: {
  d: "Allongé sur le dos, jambes tendues, mains à plat sous les fesses.",
  m: ["Plaque le bas du dos au sol.", "Monte les jambes tendues à la verticale.", "Redescends lentement sans toucher le sol.", "Si le dos se creuse, plie les genoux."],
  r: "Expire en montant.", s: "Bas du ventre.",
  f: "Genoux pliés.", h: "Descente lente." },
dead_bug: {
  d: "Allongé sur le dos, bras tendus vers le plafond. Genoux pliés à 90° au-dessus des hanches (tibias parallèles au sol).",
  m: ["Plaque le bas du dos au sol : il ne doit jamais se décoller.", "Tends lentement un bras derrière la tête et la jambe opposée vers le sol.", "Arrête juste avant de toucher le sol.", "Reviens au centre et fais l’autre côté."],
  r: "Expire en tendant, inspire en revenant.", s: "Abdos profonds.",
  f: "Bouge seulement les jambes.", h: "Plus lent." },
hollow: {
  d: "Allongé sur le dos, bras tendus au-dessus de la tête, jambes tendues.",
  m: ["Plaque le bas du dos au sol.", "Décolle les épaules, les bras et les jambes de quelques centimètres.", "Le corps forme une banane.", "Tiens sans que le dos se creuse."],
  r: "Respire calmement.", s: "Tout le ventre.",
  f: "Genoux pliés, bras le long du corps.", h: "Jambes plus basses." },
russian_twist: {
  d: "Assis au sol, genoux pliés, talons au sol. Penche le buste en arrière à environ 45°, dos droit, mains jointes devant la poitrine.",
  m: ["Tourne le buste d’un côté, les mains vont vers le sol à côté de la hanche.", "Reviens au centre.", "Tourne de l’autre côté.", "Garde le dos droit (pas arrondi)."],
  r: "Expire à chaque rotation.", s: "Côtés du ventre (obliques).",
  f: "Buste plus droit.", h: "Pieds décollés." },
russian_twist_haltere: {
  d: "Assis, buste penché en arrière, haltère tenu à deux mains.",
  m: ["Buste incliné en arrière, dos droit, haltère à deux mains.", "Tourne le buste d’un côté, haltère vers le sol à côté de la hanche.", "Reviens au centre.", "Tourne de l’autre côté."],
  r: "Expire à chaque rotation.", s: "Obliques.",
  f: "Plus léger.", h: "Pieds décollés." },
bird_dog: {
  d: "À quatre pattes : mains sous les épaules, genoux sous les hanches, dos plat, regard vers le sol.",
  m: ["Tends lentement un bras devant toi et la jambe opposée derrière toi.", "Bras, dos et jambe forment une ligne droite, sans cambrer.", "Tiens 2 secondes sans bouger le bassin.", "Reviens et alterne."],
  r: "Expire en tendant.", s: "Bas du dos, fessiers, abdos.",
  f: "Seulement la jambe.", h: "Tiens 5 s." },
superman: {
  d: "Allongé sur le ventre, bras tendus devant, jambes tendues.",
  m: ["Allongé sur le ventre, bras tendus devant, regard vers le sol.", "Décolle bras et jambes du sol de quelques centimètres.", "Tiens 2 secondes en serrant les fessiers.", "Redescends lentement."],
  r: "Expire en montant.", s: "Bas du dos et fessiers.",
  f: "Bras seuls puis jambes seules.", h: "Tiens plus longtemps." },
planche_touches: {
  d: "Position de pompe bras tendus, pieds plus écartés que d’habitude.",
  m: ["Gaine le ventre et serre les fessiers.", "Décolle une main et touche l’épaule opposée.", "Repose et alterne.", "Les hanches ne doivent pas se balancer."],
  r: "Respire régulièrement.", s: "Abdos, épaules.",
  f: "Sur les genoux.", h: "Pieds rapprochés." },
crunch_bicyclette: {
  d: "Allongé sur le dos, mains près des tempes, jambes décollées, genoux pliés.",
  m: ["Ramène un genou vers la poitrine en tendant l’autre jambe.", "Tourne le buste pour approcher le coude opposé du genou.", "Change de côté lentement.", "Bas du dos plaqué."],
  r: "Expire à chaque rotation.", s: "Obliques et abdos.",
  f: "Plus lent.", h: "Jambes plus basses." },
roue_abdos: {
  d: "À genoux sur un coussin, mains sur la roue sous les épaules.",
  m: ["Gaine fort le ventre.", "Roule vers l’avant en gardant le dos plat.", "Va aussi loin que possible sans creuser.", "Reviens en contractant les abdos."],
  r: "Inspire en avançant, expire en revenant.", s: "Tout le ventre.",
  f: "Petite amplitude.", h: "Va plus loin." },
releve_genoux_suspendu: {
  d: "Suspendu à la barre, bras tendus.",
  m: ["Suspendu bras tendus, épaules actives.", "Monte les genoux vers la poitrine en enroulant le bassin.", "Redescends lentement.", "Ne te balance pas."],
  r: "Expire en montant.", s: "Bas du ventre.",
  f: "Plus petite amplitude.", h: "Jambes tendues." },
pallof_elastique: {
  d: "Élastique ancré à hauteur de poitrine. De profil à l’ancrage, mains jointes contre la poitrine tenant la bande. Recule pour créer de la tension.",
  m: ["Pieds largeur d’épaules, genoux souples.", "Pousse les bras devant toi.", "Résiste : le buste ne tourne pas vers l’ancrage.", "Ramène lentement. Change de côté."],
  r: "Expire en poussant.", s: "Obliques et gainage.",
  f: "Rapproche-toi.", h: "Tiens 3 s bras tendus." },
pallof_poulie: {
  d: "Poulie à hauteur de poitrine, de profil, poignée contre la poitrine.",
  m: ["Debout de profil, poignée contre la poitrine.", "Pousse les bras devant toi.", "Ne laisse pas le buste tourner vers la poulie.", "Tiens 2 secondes, puis ramène."],
  r: "Expire en poussant.", s: "Obliques.",
  f: "Plus léger.", h: "Tiens plus." },
bucheron_elastique: {
  d: "Élastique ancré en haut sur le côté. Mains jointes sur la bande, bras tendus vers l’ancrage.",
  m: ["Tire en diagonale vers la hanche opposée.", "Pivote le buste et le pied arrière.", "Bras presque tendus.", "Reviens en contrôle."],
  r: "Expire en tirant.", s: "Obliques.",
  f: "Bande souple.", h: "Bande dure." },
bucheron_poulie: {
  d: "Poulie haute sur le côté, poignée à deux mains.",
  m: ["Poignée à deux mains, bras tendus vers la poulie haute.", "Tire en diagonale vers la hanche opposée.", "Pivote sur les pieds et le buste.", "Reviens en contrôle."],
  r: "Expire en tirant.", s: "Obliques.",
  f: "Plus léger.", h: "Pause." },
crunch_swiss: {
  d: "Bas du dos posé sur le ballon, pieds à plat écartés, mains près des tempes.",
  m: ["Bas du dos sur le ballon, pieds à plat.", "Laisse le buste s’étirer en arrière.", "Enroule le buste vers l’avant en contractant les abdos.", "Redescends lentement."],
  r: "Expire en montant.", s: "Abdos.",
  f: "Moins d’amplitude.", h: "Pause." },
rollout_swiss: {
  d: "À genoux, avant-bras posés sur le ballon.",
  m: ["À genoux, avant-bras sur le ballon.", "Roule vers l’avant en gardant le dos plat.", "Va aussi loin que possible sans creuser.", "Reviens en contractant les abdos."],
  r: "Expire en revenant.", s: "Abdos.",
  f: "Moins loin.", h: "Plus loin." },
mountain_trx: {
  d: "Pieds dans les sangles, position de pompe bras tendus.",
  m: ["Pieds dans les sangles, position de pompe.", "Ramène les deux genoux vers la poitrine.", "Repousse les jambes tendues.", "Garde le bassin stable."],
  r: "Expire en ramenant.", s: "Abdos.",
  f: "Un genou à la fois.", h: "Plus rapide." },
marche_valise: {
  d: "Un haltère d’un seul côté, bras tendu.",
  m: ["Prends l’haltère dans une main, bras tendu le long du corps.", "Gaine le ventre et garde les épaules à la même hauteur.", "Marche droit à petits pas, sans te pencher vers l’haltère.", "Change de main à mi-temps."],
  r: "Respire calmement.", s: "Côté du ventre opposé à l’haltère.",
  f: "Plus léger.", h: "Plus lourd." },
gainage_debout_elastique: {
  d: "Bande ancrée sur le côté à hauteur de poitrine, tenue bras tendus devant toi.",
  m: ["Bande tenue bras tendus devant la poitrine.", "Recule pour créer de la tension.", "Résiste : ne laisse pas tourner le buste.", "Change de côté."],
  r: "Respire calmement.", s: "Gainage, obliques.",
  f: "Rapproche-toi.", h: "Éloigne-toi." },
marche_place: {
  d: "Debout, pieds largeur de hanches, bras pliés le long du corps.",
  m: ["Marche sur place en montant les genoux à une hauteur confortable.", "Balance les bras comme en marchant vite.", "Pose l’avant du pied puis le talon.", "Garde un rythme régulier."],
  r: "Respire régulièrement, tu dois pouvoir parler.", s: "Cardio, cuisses.",
  f: "Genoux plus bas.", h: "Genoux plus hauts, plus vite." },
step_touch: {
  d: "Debout, genoux légèrement fléchis.",
  m: ["Fais un pas sur le côté.", "Rapproche l’autre pied.", "Repars de l’autre côté.", "Ajoute les bras pour monter le cardio."],
  r: "Respire régulièrement.", s: "Cardio.",
  f: "Sans les bras.", h: "Plus grands pas, plus vite." },
talons_fesses_marche: {
  d: "Debout, mains sur les hanches ou bras actifs.",
  m: ["Debout, buste droit, bras pliés le long du corps.", "Ramène un talon vers la fesse en pliant le genou, l’autre pied reste au sol.", "Repose le pied et fais l’autre jambe, sans sauter.", "Balance les bras en rythme et accélère progressivement."],
  r: "Respire régulièrement.", s: "Cardio, arrière des cuisses.",
  f: "Plus lent.", h: "Plus rapide." },
boxe_air: {
  d: "Pieds décalés, genoux fléchis, poings en garde devant le visage.",
  m: ["Enchaîne des directs (bras qui partent droit devant).", "Ajoute des crochets (bras en arc).", "Pivote légèrement le buste à chaque coup.", "Ramène toujours les poings en garde."],
  r: "Expire à chaque coup.", s: "Cardio, épaules, bras.",
  f: "Plus lent.", h: "Plus rapide." },
jumping_jacks_low: {
  d: "Debout, pieds joints, bras le long du corps.",
  m: ["Écarte un pied sur le côté en levant les bras au-dessus de la tête.", "Reviens pieds joints.", "Fais l’autre côté.", "Rythme soutenu, sans sauter."],
  r: "Respire régulièrement.", s: "Cardio.",
  f: "Bras à hauteur d’épaules.", h: "Plus rapide." },
genoux_coudes: {
  d: "Debout, mains derrière la tête.",
  m: ["Debout, mains derrière la tête, coudes ouverts.", "Monte un genou en diagonale vers le coude opposé.", "Tourne légèrement le buste pour que coude et genou se rapprochent.", "Repose le pied et alterne rapidement de côté."],
  r: "Expire à chaque contact.", s: "Cardio, obliques.",
  f: "Plus lent.", h: "Plus rapide." },
squat_bras: {
  d: "Debout, pieds largeur d’épaules.",
  m: ["Descends en squat partiel.", "En remontant, lève les bras au-dessus de la tête.", "Enchaîne en rythme.", "Talons au sol."],
  r: "Expire en montant.", s: "Cardio, cuisses.",
  f: "Squat moins bas.", h: "Plus rapide." },
step_cardio: {
  d: "Face à une marche, rampe à portée de main.",
  m: ["Monte avec un pied puis l’autre.", "Redescends avec le premier pied.", "Change de pied de départ régulièrement.", "Rythme soutenu mais contrôlé."],
  r: "Respire régulièrement.", s: "Cardio, cuisses, fessiers.",
  f: "Plus lent.", h: "Plus rapide." },
patineur_low: {
  d: "Debout, genoux fléchis.",
  m: ["Grand pas latéral en fléchissant la jambe.", "L’autre pied croise derrière, sans saut.", "Repars de l’autre côté.", "Bras qui accompagnent."],
  r: "Respire régulièrement.", s: "Cardio, fessiers.",
  f: "Pas plus courts.", h: "Avec un petit saut." },
vagues_bras_assis: {
  d: "Assis au bord d’une chaise, dos droit.",
  m: ["Marche rapidement avec les pieds sur place.", "Lève les bras alternativement au-dessus de la tête.", "Garde le rythme.", "Idéal si se tenir debout est difficile."],
  r: "Respire régulièrement.", s: "Cardio doux.",
  f: "Bras à hauteur d’épaules.", h: "Plus rapide." },
jumping_jacks: {
  d: "Debout, pieds joints, bras le long du corps.",
  m: ["Saute en écartant les jambes et en levant les bras au-dessus de la tête.", "Saute pour revenir pieds joints, bras le long du corps.", "Atterris sur l’avant des pieds, genoux souples.", "Garde un rythme régulier."],
  r: "Respire régulièrement.", s: "Cardio, mollets, épaules.",
  f: "Version sans saut.", h: "Plus rapide." },
montees_genoux: {
  d: "Debout, bras pliés.",
  m: ["Cours sur place en montant les genoux à hauteur de hanches.", "Bras actifs.", "Reste sur l’avant des pieds.", "Buste droit."],
  r: "Respire régulièrement.", s: "Cardio, cuisses.",
  f: "Marche genoux hauts.", h: "Plus rapide." },
talons_fesses: {
  d: "Debout, buste droit.",
  m: ["Cours sur place, sur l’avant des pieds.", "À chaque foulée, ramène le talon vers la fesse.", "Buste droit, bras pliés qui accompagnent le rythme.", "Va le plus vite possible en gardant le contrôle."],
  r: "Respire régulièrement.", s: "Cardio.",
  f: "En marchant.", h: "Plus rapide." },
mountain_climbers: {
  d: "Position de pompe bras tendus, mains sous les épaules.",
  m: ["Position de pompe bras tendus, mains sous les épaules, corps droit.", "Ramène un genou vers la poitrine, pied qui frôle le sol.", "Repousse-le en arrière en même temps que tu ramènes l’autre genou.", "Alterne vite en gardant le bassin bas et immobile."],
  r: "Respire régulièrement.", s: "Cardio, abdos, épaules.",
  f: "Mains sur une chaise.", h: "Plus rapide." },
mountain_climbers_chaise: {
  d: "Mains sur l’assise d’une chaise calée au mur, corps incliné.",
  m: ["Mains sur l’assise, bras tendus, corps droit de la tête aux talons.", "Ramène un genou vers la poitrine.", "Repousse ce pied en arrière en même temps que tu ramènes l’autre genou.", "Garde le bassin stable et un rythme soutenu."],
  r: "Respire régulièrement.", s: "Cardio, abdos.",
  f: "Plus lent.", h: "Au sol." },
burpees: {
  d: "Debout, pieds largeur d’épaules.",
  m: ["Accroupis-toi et pose les mains au sol.", "Lance les pieds en arrière en position de pompe.", "Ramène les pieds près des mains.", "Saute en levant les bras au-dessus de la tête."],
  r: "Expire en sautant.", s: "Tout le corps, cardio intense.",
  f: "Sans saut.", h: "Ajoute une pompe." },
burpees_sans_saut: {
  d: "Debout, pieds largeur d’épaules.",
  m: ["Accroupis-toi, mains au sol.", "Recule un pied puis l’autre (position de pompe).", "Reviens pied par pied.", "Redresse-toi en levant les bras."],
  r: "Respire régulièrement.", s: "Tout le corps.",
  f: "Mains sur une chaise.", h: "Plus rapide." },
patineur: {
  d: "Debout, genoux fléchis.",
  m: ["Saute latéralement d’un pied sur l’autre.", "Réception souple, genou fléchi.", "L’autre pied croise derrière.", "Bras qui accompagnent."],
  r: "Respire régulièrement.", s: "Cardio, fessiers.",
  f: "Sans saut.", h: "Sauts plus grands." },
corde: {
  d: "Debout, poignées en main, corde derrière les talons. Coudes près du corps.",
  m: ["Fais tourner la corde avec les poignets (pas les bras).", "Petits sauts sur l’avant des pieds.", "Juste assez haut pour laisser passer la corde.", "Garde un rythme régulier."],
  r: "Respire régulièrement.", s: "Cardio, mollets.",
  f: "Sans corde (mime).", h: "Plus rapide." },
corde_rapide: {
  d: "Comme la corde à sauter classique.",
  m: ["Coudes près du corps, la corde tourne avec les poignets.", "Cours sur place par-dessus la corde, un pied après l’autre.", "Va au rythme le plus rapide que tu peux tenir proprement.", "Récupère complètement pendant le temps de repos."],
  r: "Respire vite mais régulièrement.", s: "Cardio intense.",
  f: "Rythme modéré.", h: "Doubles sauts." },
skipping_jack: {
  d: "Debout, pieds joints, mains devant la poitrine.",
  m: ["Saute pieds écartés en descendant en squat.", "Saute pieds joints en te redressant.", "Enchaîne.", "Réceptions souples."],
  r: "Expire en sautant.", s: "Cardio, cuisses.",
  f: "Sans saut.", h: "Plus bas." },
thrusters_halteres: {
  d: "Debout, haltères à hauteur d’épaules.",
  m: ["Descends en squat.", "Remonte en poussant fort.", "Profite de l’élan pour pousser les haltères au-dessus de la tête.", "Redescends les haltères aux épaules et enchaîne."],
  r: "Expire en poussant.", s: "Tout le corps, cardio.",
  f: "Plus léger.", h: "Plus lourd." },
slam_ball: {
  d: "Debout, pieds largeur d’épaules, ballon tenu au-dessus de la tête.",
  m: ["Lance le ballon au sol devant toi de toutes tes forces.", "Fléchis les hanches en lançant.", "Ramasse-le dos plat.", "Recommence."],
  r: "Expire en lançant.", s: "Abdos, épaules, cardio.",
  f: "Plus léger.", h: "Plus rapide." },
kb_swing_cardio: {
  d: "Kettlebell entre les jambes, charnière de hanche.",
  m: ["Recule les hanches, kettlebell qui passe entre les jambes.", "Pousse les hanches vers l’avant de façon explosive, fessiers serrés.", "La kettlebell monte à hauteur de poitrine, bras détendus.", "Laisse-la redescendre et enchaîne en rythme pendant toute la durée."],
  r: "Expire à chaque poussée.", s: "Fessiers, cardio.",
  f: "Plus légère.", h: "Plus rapide." },
velo_app: {
  d: "Règle la selle : jambe presque tendue quand la pédale est en bas. Mains sur le guidon, dos droit.",
  m: ["Pédale à cadence régulière (70-90 tours/min).", "Ajuste la résistance selon la consigne.", "Garde le dos droit.", "Respire régulièrement."],
  r: "Respire régulièrement.", s: "Cardio, cuisses.",
  f: "Résistance plus faible.", h: "Résistance plus forte." },
tapis_marche: {
  d: "Sur le tapis, inclinaison 3 à 10 %.",
  m: ["Démarre à vitesse lente puis règle l’inclinaison entre 3 et 10 %.", "Monte la vitesse jusqu’à une marche rapide (tu peux encore parler).", "Marche à grands pas sans te tenir aux barres, buste droit.", "Balance les bras ; baisse l’inclinaison si tu dois te tenir."],
  r: "Respire régulièrement.", s: "Cardio, fessiers, mollets.",
  f: "Moins incliné.", h: "Plus incliné." },
tapis_course: {
  d: "Sur le tapis, inclinaison 1 %.",
  m: ["Commence par 2-3 minutes de marche.", "Augmente la vitesse jusqu’au trottinement, inclinaison à 1 %.", "Fais des petits pas, pied posé sous le bassin (pas loin devant toi).", "Bras pliés à 90° et détendus ; accélère progressivement selon la consigne."],
  r: "Respire régulièrement.", s: "Cardio.",
  f: "Plus lent.", h: "Plus rapide." },
rameur: {
  d: "Assis, pieds attachés, poignée en mains, jambes pliées.",
  m: ["Pousse avec les jambes.", "Puis bascule le buste en arrière.", "Puis tire la poignée vers le bas des côtes.", "Retour : bras, buste, jambes."],
  r: "Expire en poussant.", s: "Tout le corps, cardio.",
  f: "Résistance plus faible.", h: "Cadence plus rapide." },
elliptique: {
  d: "Pieds bien à plat sur les pédales, mains sur les poignées.",
  m: ["Monte sur les pédales, pieds bien à plat, mains sur les poignées mobiles.", "Pédale vers l’avant en poussant et tirant alternativement avec les bras.", "Garde le dos droit, sans t’appuyer sur les poignées.", "Règle la résistance pour un effort régulier et sans impact."],
  r: "Respire régulièrement.", s: "Cardio, tout le corps.",
  f: "Résistance plus faible.", h: "Plus fort." },
chat_vache: {
  d: "À quatre pattes : mains sous les épaules, genoux sous les hanches, dos plat.",
  m: ["Expire en arrondissant le dos vers le plafond, menton vers la poitrine, nombril rentré (le chat).", "Inspire en creusant doucement le dos, poitrine vers l’avant, regard devant (la vache).", "Passe de l’un à l’autre lentement.", "Reste dans une amplitude confortable."],
  r: "Synchronise : expire en arrondissant, inspire en creusant.", s: "Tout le long du dos, en douceur.",
  f: "Petite amplitude.", h: "Plus lent et plus ample." },
chat_vache_assis: {
  d: "Assis droit au bord d’une chaise, mains sur les genoux.",
  m: ["Expire en arrondissant le dos, menton vers la poitrine.", "Inspire en ouvrant la poitrine, épaules en arrière.", "Lentement.", "Alterne."],
  r: "Expire en arrondissant, inspire en ouvrant.", s: "Le dos.",
  f: "Petite amplitude.", h: "Plus ample." },
rotation_thoracique: {
  d: "Allongé sur le côté, genoux pliés à 90° l’un sur l’autre, bras tendus devant toi, mains jointes. Tête sur un coussin.",
  m: ["Garde les genoux collés et au sol.", "Ouvre le bras du dessus vers l’arrière en arc de cercle, comme un livre qui s’ouvre.", "Suis ta main des yeux.", "Reviens lentement. Change de côté."],
  r: "Expire en ouvrant.", s: "Haut du dos et poitrine.",
  f: "Ouvre moins.", h: "Tiens 3 s ouvert." },
rotation_thoracique_assis: {
  d: "Assis droit, bras croisés sur la poitrine, pieds à plat.",
  m: ["Assis droit, pieds à plat, bras croisés sur la poitrine.", "Tourne le buste d’un côté en gardant le bassin et les genoux face à l’avant.", "Va jusqu’où c’est confortable, tiens 1-2 secondes.", "Reviens au centre et tourne de l’autre côté."],
  r: "Expire en tournant.", s: "Haut du dos.",
  f: "Moins loin.", h: "Tiens 2 s." },
etirement_ischios_assis: {
  d: "Assis au bord d’une chaise, une jambe tendue devant, talon au sol, pointe vers le haut.",
  m: ["Dos droit.", "Penche-toi en avant depuis les hanches.", "Jusqu’à sentir l’étirement derrière la cuisse.", "Tiens et respire."],
  r: "Respire profondément.", s: "Arrière de la cuisse.",
  f: "Penche-toi moins.", h: "Plus loin." },
etirement_ischios_sol: {
  d: "Allongé sur le dos, une jambe pliée pied au sol, l’autre en l’air tenue derrière la cuisse (ou avec une serviette autour du pied).",
  m: ["Tends doucement le genou de la jambe en l’air.", "Jusqu’à sentir l’étirement.", "Garde le bassin au sol.", "Tiens, puis change."],
  r: "Respire profondément.", s: "Arrière de la cuisse.",
  f: "Genou un peu plié.", h: "Tire un peu plus." },
etirement_quadriceps: {
  d: "Debout, une main sur un appui.",
  m: ["Plie une jambe et attrape la cheville derrière toi.", "Genoux côte à côte.", "Pousse le bassin légèrement vers l’avant.", "Tiens, puis change."],
  r: "Respire calmement.", s: "Avant de la cuisse.",
  f: "Pied posé sur une chaise derrière toi.", h: "Tire plus." },
etirement_flechisseurs: {
  d: "En fente, genou arrière au sol sur un coussin (ou debout en fente).",
  m: ["En fente, genou arrière posé sur un coussin, pied avant à plat devant.", "Redresse le buste et serre le fessier de la jambe arrière.", "Avance doucement le bassin jusqu’à sentir l’étirement à l’avant de la hanche arrière.", "Tiens en respirant, sans creuser le bas du dos, puis change de côté."],
  r: "Respire calmement.", s: "Avant de la hanche de la jambe arrière.",
  f: "Debout.", h: "Lève le bras du côté arrière." },
etirement_mollets: {
  d: "Face à un mur, mains posées dessus, une jambe tendue derrière, pied à plat.",
  m: ["Mains au mur, une jambe pliée devant, l’autre tendue loin derrière.", "Garde le talon arrière bien au sol, pied tourné vers le mur.", "Penche-toi doucement vers le mur jusqu’à sentir le mollet arrière s’étirer.", "Tiens en respirant, puis change de jambe."],
  r: "Respire calmement.", s: "Mollet de la jambe arrière.",
  f: "Pas plus court.", h: "Pas plus long." },
etirement_pecs: {
  d: "Debout dans un encadrement de porte, avant-bras posé contre le montant, coude à hauteur d’épaule.",
  m: ["Place l’avant-bras contre le montant de la porte, coude à hauteur d’épaule.", "Fais un petit pas en avant avec le pied du même côté.", "Avance doucement le buste jusqu’à sentir la poitrine s’ouvrir.", "Garde l’épaule basse, tiens en respirant, puis change de côté."],
  r: "Respire calmement.", s: "Poitrine et avant de l’épaule.",
  f: "Avance moins.", h: "Plus loin." },
etirement_epaule: {
  d: "Debout ou assis, épaules basses.",
  m: ["Ramène un bras tendu devant la poitrine.", "Appuie doucement avec l’autre main au-dessus du coude.", "Épaules basses.", "Tiens, puis change."],
  r: "Respire calmement.", s: "Arrière de l’épaule.",
  f: "Moins fort.", h: "Plus fort." },
etirement_triceps: {
  d: "Debout ou assis, dos droit.",
  m: ["Lève un bras et plie-le, main derrière la tête.", "Coude vers le plafond.", "Tire doucement le coude avec l’autre main.", "Tiens, puis change."],
  r: "Respire calmement.", s: "Arrière du bras.",
  f: "Moins fort.", h: "Plus fort." },
etirement_fessiers: {
  d: "Assis sur une chaise, dos droit.",
  m: ["Pose une cheville sur le genou opposé (forme un 4).", "Penche-toi en avant, dos droit.", "Jusqu’à l’étirement dans la fesse.", "Tiens, puis change."],
  r: "Respire calmement.", s: "Fessier.",
  f: "Penche-toi moins.", h: "Plus loin." },
etirement_adducteurs: {
  d: "Assis au sol, plantes des pieds jointes, genoux ouverts.",
  m: ["Assis, plantes des pieds jointes, talons à une distance confortable.", "Tiens tes pieds avec les mains et redresse bien le dos.", "Laisse les genoux descendre doucement vers le sol, sans appuyer dessus.", "Respire profondément et relâche un peu plus à chaque expiration."],
  r: "Respire profondément.", s: "Intérieur des cuisses.",
  f: "Pieds plus loin.", h: "Penche-toi en avant." },
posture_enfant: {
  d: "À genoux, gros orteils qui se touchent, genoux écartés.",
  m: ["À genoux, gros orteils qui se touchent, genoux écartés.", "Assieds les fesses vers les talons.", "Allonge les bras devant toi et pose le front au sol (ou sur un coussin).", "Relâche les épaules et respire en gonflant le bas du dos."],
  r: "Respire profondément.", s: "Dos, épaules, hanches.",
  f: "Coussin sous les fesses.", h: "Plus longtemps." },
genoux_poitrine_sol: {
  d: "Allongé sur le dos.",
  m: ["Allongé sur le dos, jambes pliées.", "Ramène les deux genoux vers la poitrine.", "Entoure-les avec les mains et tire doucement.", "Berce-toi lentement de gauche à droite pour masser le bas du dos."],
  r: "Respire calmement.", s: "Bas du dos.",
  f: "Un genou à la fois.", h: "Plus longtemps." },
rotation_hanches: {
  d: "Debout, mains sur les hanches, pieds largeur d’épaules.",
  m: ["Debout, pieds largeur d’épaules, mains sur les hanches, genoux souples.", "Dessine de grands cercles avec le bassin (avant, côté, arrière, côté).", "Garde les épaules à peu près immobiles.", "Après la moitié du temps, change de sens."],
  r: "Respire calmement.", s: "Hanches, bas du dos.",
  f: "Plus petits cercles.", h: "Plus grands." },
cercles_epaules: {
  d: "Debout, bras le long du corps.",
  m: ["Debout, bras détendus le long du corps.", "Monte les épaules vers les oreilles, recule-les, puis descends-les : un grand cercle vers l’arrière.", "Enchaîne plusieurs cercles lents et amples.", "Change ensuite de sens (vers l’avant)."],
  r: "Respire calmement.", s: "Épaules, haut du dos.",
  f: "Plus petits.", h: "Plus grands." },
mobilite_cou: {
  d: "Assis ou debout, dos droit, épaules basses.",
  m: ["Incline doucement la tête à droite, puis à gauche.", "Fais « oui » lentement.", "Fais « non » lentement.", "Aucun cercle complet vers l’arrière."],
  r: "Respire calmement.", s: "Cou.",
  f: "Plus petits mouvements.", h: "Tiens 2 s." },
chevilles: {
  d: "Assis, une jambe tendue devant toi.",
  m: ["Assis, une jambe tendue devant toi, pied décollé du sol.", "Dessine de grands cercles avec le bout du pied, la jambe ne bouge pas.", "Après quelques cercles, change de sens.", "Change ensuite de pied."],
  r: "Respire calmement.", s: "Chevilles.",
  f: "Plus petits.", h: "Plus grands." },
world_greatest: {
  d: "Debout.",
  m: ["Fais une grande fente avant.", "Pose la main opposée à la jambe avant au sol.", "Ouvre l’autre bras vers le plafond en tournant le buste.", "Reviens, puis change de côté."],
  r: "Expire en ouvrant.", s: "Hanches, haut du dos, ischios.",
  f: "Genou arrière au sol.", h: "Tiens 3 s." },
hanches_90_90: {
  d: "Assis au sol, les deux jambes pliées à 90° (une devant, une sur le côté), mains au sol derrière toi.",
  m: ["Assis, une jambe pliée à 90° devant toi, l’autre pliée à 90° sur le côté, mains en appui derrière.", "Lève les deux genoux et fais-les basculer de l’autre côté (les pieds restent à peu près en place).", "Tu te retrouves dans la position inverse ; redresse le buste.", "Alterne lentement d’un côté à l’autre."],
  r: "Respire calmement.", s: "Hanches.",
  f: "Mains en appui.", h: "Sans les mains." },
dislocations_elastique: {
  d: "Debout, bande tenue large devant toi, bras tendus.",
  m: ["Bande tenue très large devant toi, bras tendus vers le bas.", "Monte les bras tendus au-dessus de la tête.", "Continue le mouvement vers l’arrière jusqu’à ce que la bande touche le bas du dos.", "Reviens par le même chemin. Écarte plus les mains si ça bloque."],
  r: "Respire calmement.", s: "Épaules.",
  f: "Prise plus large.", h: "Prise plus serrée." },
chien_tete_bas: {
  d: "À quatre pattes, orteils repliés.",
  m: ["À quatre pattes, orteils repliés, mains un peu devant les épaules.", "Pousse dans les mains et monte les fesses vers le plafond.", "Le corps forme un V inversé ; pousse le sol pour allonger le dos.", "Descends les talons vers le sol sans forcer ; plie les genoux si le dos s’arrondit."],
  r: "Respire profondément.", s: "Arrière des jambes, épaules, dos.",
  f: "Genoux pliés.", h: "Jambes tendues." },
etirement_lateral: {
  d: "Debout, pieds largeur de hanches.",
  m: ["Debout, pieds largeur de hanches.", "Lève un bras tendu au-dessus de la tête.", "Penche-toi doucement du côté opposé, sans tourner le buste.", "Tiens en respirant dans le côté étiré, puis change."],
  r: "Respire profondément.", s: "Côté du buste.",
  f: "Moins loin.", h: "Plus loin." },
respiration: {
  d: "Assis confortablement ou allongé, une main sur le ventre, l’autre sur la poitrine.",
  m: ["Inspire 4 secondes par le nez en gonflant le ventre (la main du ventre monte, pas celle de la poitrine).", "Expire 6 secondes par la bouche, lentement.", "Laisse les épaules détendues.", "Continue à ce rythme."],
  r: "C’est l’exercice : 4 s d’inspiration, 6 s d’expiration.", s: "Détente, rythme cardiaque qui ralentit.",
  f: "3 s / 4 s.", h: "4 s / 8 s." },
unipodal_appui: {
  d: "Debout à côté d’une chaise, une main légère sur le dossier.",
  m: ["Lève un pied du sol.", "Tiens l’équilibre.", "Allège progressivement la main (un doigt, puis aucun).", "Change de pied."],
  r: "Respire calmement.", s: "Chevilles, équilibre.",
  f: "Main bien posée.", h: "Lâche l’appui." },
unipodal: {
  d: "Debout près d’un mur par sécurité.",
  m: ["Debout près d’un mur (sans le toucher), regard fixé sur un point devant toi.", "Lève un pied de quelques centimètres, genou d’appui légèrement souple.", "Tiens l’équilibre sans t’appuyer ; touche le mur seulement si tu perds l’équilibre.", "Change de pied."],
  r: "Respire calmement.", s: "Équilibre.",
  f: "Près du mur.", h: "Yeux fermés." },
marche_tandem: {
  d: "Le long d’un mur ou d’un couloir.",
  m: ["Place-toi le long d’un mur, une main tout près.", "Pose le talon d’un pied juste devant la pointe de l’autre.", "Avance lentement ainsi, comme sur une ligne, regard devant toi.", "Touche le mur seulement si tu perds l’équilibre."],
  r: "Respire calmement.", s: "Équilibre.",
  f: "Main au mur.", h: "Sans le mur." },
tandem_statique: {
  d: "Près d’un appui.",
  m: ["Debout près d’un appui.", "Place un pied juste devant l’autre, talon contre la pointe, comme sur une ligne.", "Lâche l’appui si possible et tiens sans bouger, regard devant.", "Change de pied devant à mi-temps."],
  r: "Respire calmement.", s: "Équilibre.",
  f: "Avec appui.", h: "Yeux fermés." },
horloge: {
  d: "Debout sur une jambe, près d’un appui.",
  m: ["Touche avec l’autre pied un point devant.", "Puis sur le côté.", "Puis derrière.", "Reviens au centre entre chaque point."],
  r: "Respire calmement.", s: "Équilibre, fessiers.",
  f: "Avec appui.", h: "Plus loin." },
pointes_talons: {
  d: "Debout, mains sur le dossier d’une chaise.",
  m: ["Debout, mains sur le dossier d’une chaise, pieds largeur de hanches.", "Monte lentement sur la pointe des pieds.", "Redescends, puis bascule sur les talons en levant les orteils.", "Alterne lentement pointes et talons."],
  r: "Respire calmement.", s: "Chevilles, mollets.",
  f: "Plus lent.", h: "Sans appui." },
transfert_poids: {
  d: "Debout, pieds écartés.",
  m: ["Debout, pieds écartés un peu plus que les hanches.", "Transfère lentement ton poids sur un pied jusqu’à alléger l’autre.", "Tiens 2 secondes, puis reviens au centre.", "Fais la même chose de l’autre côté."],
  r: "Respire calmement.", s: "Équilibre.",
  f: "Petit transfert.", h: "Lève le pied." },
genou_leve_tenu: {
  d: "Debout, près d’un appui.",
  m: ["Debout près d’un appui, buste droit.", "Monte un genou à hauteur de hanche.", "Tiens 3 secondes en équilibre sur l’autre jambe.", "Repose le pied et alterne."],
  r: "Respire calmement.", s: "Équilibre, hanches.",
  f: "Avec appui.", h: "Yeux fermés." },
equilibre_coussin: {
  d: "Un coussin plié au sol, près d’un mur.",
  m: ["Pose un pied au milieu d’un coussin plié, près d’un mur.", "Lève l’autre pied.", "Tiens l’équilibre : la cheville travaille pour te stabiliser.", "Change de pied à mi-temps."],
  r: "Respire calmement.", s: "Chevilles, équilibre.",
  f: "Deux pieds.", h: "Bouge les bras." },
marche_arriere: {
  d: "Dans un couloir dégagé, main près du mur.",
  m: ["Dans un couloir dégagé, une main près du mur.", "Recule d’un pas en posant d’abord la pointe puis le talon.", "Regard devant toi, buste droit.", "Avance comme ça lentement, pas après pas."],
  r: "Respire calmement.", s: "Équilibre.",
  f: "Main au mur.", h: "Plus vite." },
lever_sans_mains: {
  d: "Assis au sol, une chaise solide à côté de toi.",
  m: ["Passe à quatre pattes.", "Pose un pied au sol (un genou levé).", "Appuie-toi sur la chaise.", "Relève-toi en poussant sur la jambe avant."],
  r: "Expire en te relevant.", s: "Jambes, équilibre ; utile au quotidien.",
  f: "Avec la chaise.", h: "Sans les mains." },
};
