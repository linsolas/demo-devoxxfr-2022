# Dev Tools

## Préparation


```js
const intro = () => {
  console.log("%cTOUR D'HORIZON DES DEVTOOLS", "color: white; background: black; font-size: 50px");
  console.log("%cDevoxx France 2022 - 🐤 @romaintaz", "color: #2469ff; font-size: 30px");
}

const outro = () => {
  // TODO...
}
```


- Supprimer les Perfs Insights + Recorders déjà faits.
- Ouvrir le répertoire de d/l.
- Ouvrir les sites
  - https://fr.wikipedia.org/wiki/Daltonisme#Types_de_dyschromatopsie
  - https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener#exemples
- Zoomer.
- Thème light.
- Fermer les outils expérimentaux.


## 1. Introduction [00:00]

Petit sondage sur l'assemblée ("Devs ?" ; "Devs web ?").

> Les DevTools sont comme beaucoup d'outils mal connus, sous-utilisés.
> Constatation faite au sein de la SG.
> Nous allons faire un tour de capacités propres à Chrome Dev Tools.
> 2 warnings:
>   1. Nous allons utiliser Chrome, beaucoup de fonctionnalités existent aussi dans les autres navigateurs (Firefox en particulier), mais certaines sont propres à Chrome.
>   2. Nous prennons Chrome Dev Tools tel quel, sans extension, même si on les a créées soi-même :wink:


## 2. Audit rapide [  :  ]

> Nous utilisons souvent les DevTools pour comprendre ce qu'il se passe, pour détecter et résoudre un problème. Par exemple : un souci de performances sur le site. Mais il faut du concret. Nous allons utiliser notre premier outil : l'audit via <kbd>Lighthouse</kbd>.

<kbd>Lighthouse</kbd>
- Exécution d'un audit.
- Parler de Lighthouse CI.
- Montrer les résultats de Performances, passer sur les métriques et les opportunités : passer en http2, utiliser la compression, supprimer le code non utilisé.

> Une fois ces principaux points adressés, s'il reste des problèmes de performances, on devra sans doute utiliser d'autres outils, comme l'outil <kbd>Performance</kbd>.


## 3. Performances [  :  ]

### 3.1. Performance [  :  ]

<kbd>Performance</kbd>
- Lancer une analyse.
- Montrer rapidement l'outil.

> L'outil <kbd>Lighthouse</kbd> regorge d'informations. Trop, peut-être, on ne trouve pas forcément l'information que l'on souhaite facilement. Aussi, je propose de passer sur un autre outil : <kbd>Performance Insights</kbd>.


### 3.2. Performance Insight [  :  ]

> Il s'agit d'un outil expérimental, livré avec Chrome 102 (version officielle : 100).

<kbd>Performance Insight</kbd>
- Lancer une analyse.
- Montrer les Insights, par exemple un *Render Blocking Request*, avec les informations liées.

> <kbd>Performance Insight</kbd> n'est pas aussi précis ni détaillé que <kbd>Performance</kbd>, mais offre une vision plus claire sur certains problèmes courants de performances.


### 3.3. Recorder [  :  ]

> Dans un domaine proche de la performance, nous allons nous intéresser à un autre outil très prometteur, le <kbd>Recorder</kbd>. Il s'agit là aussi d'un outil expérimental, qui devrait donc s'améliorer avec les prochaines versions de Chrome.

<kbd>Recorder</kbd>
- Création d'un exemple d'enregistrement.
- Rejouer le script ; possibilité de modifier le débit réseau.
- Possibilité de modifier chaque étape, d'en ajouter ou d'en supprimer.
- Exporter en script.
- Mesurer la performance de l'exemple.

> Nous commençons à améliorer notre site pour le rend plus rapide, moins gourmand. Mais il y a d'autre moyens de l'améliorer encore. Si on se souvient bien, <kbd>Lighthouse</kbd> nous recommandait de supprimer le code non utilisé. Pour cela, on peut faire appel à l'outil <kbd>Coverage</kbd>.


### 3.4. Coverage [  :  ]

<kbd>Coverage</kbd>
- Lancer l'outil de Coverage.
- Se balader un peu sur le site pour montrer que l'analyse évolue.
- Utiliser conjointement <kbd>Coverage</kbd> et <kbd>Recorder</kbd>.

> En parlant de CSS, les DevTools offrent pas mal de choses à ce sujet.


## 4. Styles & Accessibilité [  :  ]

### 4.1. CSS Overview [  :  ]

> Outil expérimental qui donne quelques informations générales sur le CSS utilisé sur la page.

<kbd>CSS Overview</kbd>

> Parmi les indicateurs, nous avons des problèmes de contrastes, nous allons y revenir très vite, car l'accessibilité est un sujet important aujourd'hui.


### 4.2. Accessibilité [  :  ]

> Petit retour sur <kbd>Lighthouse</kbd> avec la catégorie "Accessibilité". <kbd>Lighthouse</kbd> va surtout nous aider à débusquer les problèmes liés au non respect de la sémantique du HTML : mauvaise utilisation des `aria-*`, `ul > li`, `h*`, `img alt`...
> Mais pour aller plus loin sur l'accessibilité :

<kbd>Issues</kbd>
- Outil permettant de détecter certaines erreurs, dont le souci de contraste, relevés plus tôt par <kbd>CSS Overview</kbd> (nécessite d'activer une option dans la Configuration).
- Rappeler que 300 millions de personnes dans le monde souffrent d'une anomalie de la perception des couleurs.
- Sélectionner un élément.
- Utiliser le sélecteur de couleur.
  - Faire référence au ratio de contraste "AA" ou "AAA" du **WCAG** (*Web Content Accessibility Guidelines*). Il peut être remplacé par l'**APCA** (*Advanced Perceptual Contrast Algorithm*) qui considère également le contexte (propriété de taille / grosseur du texte, couleurs, but du texte, etc.).
- Utiliser l'outil <kbd>Rendering</kbd> pour simuler certaines anomalies.

?
- "*Enable full-page accessibility page*".

> Noter que Firefox possède un outil d'Accessibilité plus complet, qui relève en particulier les principales erreurs ou affiche l'ordre de tabulation.


## 5. Autres & Elements [  :  ]

> Nous avons pu voir que les DevTools permettent de simuler certaines anomalies de la vision, mais on peut également simuler d'autres contextes utilisateur :

- <kbd>Network Conditions</kbd> permet d'altérer le débit réseau, de changer le user-agent.
- <kbd>Sensors</kbd> offre la possibilité de changer de géo-localisation ou l'orientation dans l'espace de son appareil.


<kbd>Elements</kbd>
- Montrer l'outil de Flex / CSS Grid (piqué à Firefox).
- Outil d'édition des polices.
- "*Show source order*": ordre d'affichage vs. ordre de définition dans le DOM => ex. avec un reverse order en Flex.
- Auto-complete dans le *Edit as HTML*.


<kbd>Sources</kbd>
- Dans les Sources, possibilité de faire des *Local Overrides* pour persister des changements.
- Il est aussi possible de lier un répertoire courant, par exemple en cas de développement local pour modifier directement les sources avec Chrome (par exemple depuis **Elements**).


> Nous avons fait le tour des principaux sujets que je souhaitais aborder durant cette présentation, mais j'aimerais vous montrer quelques astuces supplémentaires, quelques fonctionnalités bien pratiques !


## 6. Console JS [  :  ]

> Difficile de parler des DevTools sans parler un tout petit peu de la <kbd>Console</kbd>, outil bien connu, mais qui recèle aussi quelques petits secrets.

> Tout d'abord, quelques petits raccourcis utiles :

- <kbd>Ctrl + L</kbd>: vider la console.
- `$` et `$$` pour `document.querySelector()` / `document.querySelectorAll()` - attention avec le `$` de jQuery par exemple !
- `$0` retourne le dernier élément inspecté (`$1`, etc.)
- `$_` qui conserve le résultat de l'exécution précédente.
- `copy()` pour coller dans le presse-papier (`copy($_)` peut être utile).
- Création de *Live expression*, évalué à chaque changement.

> Il est possible de monitorer les events sur un objet :

- Se connecter sur https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener#exemples et montrer l'exemple (clic).
- Inspecter la table (`table#outside`)
- Récupérer les `EventListeners` via `getEventListeners($0)`.
- Stocker la fonction via "*Store function as global variable*" => `temp1`.
- Monitorer la fonction : `monitor(temp1)`.
- Simuler un clic : `temp1(new Event('click'))`.
- Monitorer tous les events : `monitorEvents($0)`.


> Voilà, notre tour d'horizon des DevTools touche à sa fin. Pourtant, de nombreuses autres fonctionnalités y sont présentes, parmi lesquelles :

- Remote debugging avec Android
- **Memory**
- **Application**
- Synchronisation de la configuration
- **Animations**: ralentissement des animations.


## Conclusion [  :  ]

> Nous avons vu sans doute beaucoup trop de choses mais s'il y en a bien une à en retenir, c'est qu'il faut vraiment apprendre à bien connaître les outils que nous utilisons au quotidien.
> Concernant Chrome DevTools, je vous encourage à aller consulter leur documentation, qui est très claire, très complète et régulièrement mise à jour avec les dernières nouveautés.

Ouvrir <kbd>What's new?</kbd>.
