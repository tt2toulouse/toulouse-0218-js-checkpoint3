# Toulouse JS/React Checkpoint 3

Bientôt l'été ! Tu te prépares à prendre des vacances bien méritées... Mais en
personne prévoyante que tu es, tu ne vas pas partir sans un minimum d'accessoires
vitaux !

Ce checkpoint va te permettre de créer une application pour gérer la liste de
ce que tu emmènes avec toi en vacances.

## Récupérer le repo Git

Pour commencer, tu dois faire un **fork**, j'insiste, un **FORK** de ce repo,
et non pas simplement le cloner. Comme ça, tu auras une copie du repo sur ton compte
GitHub, avec tous les droits dessus, pour pusher, etc.

Voici donc l'URL du repo: https://github.com/WildCodeSchool/toulouse-0218-js-checkpoint3

## Point de départ

Tu ne pars pas de zéro :

* Un backend simple a été initialisé sous `back/app.js`. Ce fichier initialise
une application Express, le body parser, etc. On y fait aussi le lien entre
les URL commençant par `/api/items` et un "routeur" qui se trouve sous `back/routes/items.js`.
* Une application front minimale a été créée avec Create React App. Elle se trouve,
en toute logique, sous `front`. Le paramètre `proxy` a déjà été indiqué dans `package.json`
pour pouvoir faire des appels avec fetch vers le backend.

## Installation

* Sous `back`: `npm install` puis `npm start` pour le lancer
* Même chose dans un autre onglet de terminal, sous `front`: `npm install` puis `npm start`

Remarque: tu peux utiliser `yarn` à la place de `npm` si tu préfères, pour toutes ces commandes...
