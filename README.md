# Toulouse JS/React Checkpoint 3

Bientôt l'été ! Tu te prépares à prendre des vacances bien méritées... Mais en
personne prévoyante que tu es, tu ne vas pas partir sans un minimum d'accessoires
vitaux !

Ce checkpoint va te permettre de créer une application pour gérer la liste de
ce que tu emmènes avec toi en vacances.

## Récupérer le repo Git

Pour commencer, tu dois faire un **fork**, j'insiste, un **FORK** de ce repo,
et non pas simplement le cloner. Cela se fait via le bouton "fork" en haut à droite de cette page.

Comme ça, tu auras une copie du repo sur ton compte GitHub, avec tous les droits dessus, pour pusher, etc.

## Point de départ

Tu ne pars pas de zéro :

* Un backend simple a été initialisé sous `back/app.js`. Ce fichier initialise
une application Express, le body parser, etc. On y fait aussi le lien entre
les URL commençant par `/api/items` et un "routeur" qui se trouve sous `back/routes/items.js`.
* Une application front minimale a été créée avec Create React App. Elle se trouve,
en toute logique, sous `front`. Le paramètre `proxy` a déjà été indiqué dans `package.json`
pour pouvoir faire des appels avec fetch vers le backend.

## Installation

* Sous `front`: `npm install` puis `npm start`
* Même chose dans un autre onglet de terminal, sous `back`: `npm install` puis `npm start` pour le lancer
* Initialiser la base de données: `mysql -uroot -p < back/database.sql`. Le fichier `database.sql` fait tout d'un coup : initialisation de la base, création d'une table `items`, insertion de quelques éléments...

Remarque: tu peux utiliser `yarn` à la place de `npm` si tu préfères, pour toutes ces commandes...

## Ta Mission

### 1. Afficher la liste d'items plus "proprement"

Côté front, tu as un composant Item, appelé depuis App, auquel on passe **un** élément
de notre liste. Mais on a écrit 4 fois Item, une fois pour chaque objet du tableau `items`.
Tu dois faire en sorte de répéter ce composant pour chaque item de la liste, en enlevant ceux écrits "en dur"
pour les remplacer par une façon plus "propre" de répéter des éléments.

### 2. Récupérer les items depuis le backend

Côté back, dans `back/routes/items.js`, il y a une route en GET qui, pour l'instant, renvoie
un tableau vide.

Tu dois:
1. Côté back, faire une requête à la base de données pour obtenir les items, et les renvoyer au client. La db existe déjà si tu l'as bien initialisée lors de la phase d'installation !
2. Côté front, faire une requête avec fetch vers l'URL correspondante, pour récupérer les items

**Pour valider cette étape, un console.log du résultat retourné par fetch suffira**.

### 3. Utiliser les items récupérés du backend pour afficher la liste

Tu dois cette fois utiliser les résultats du fetch de l'étape précédente, pour afficher la liste d'items,
sans avoir besoin de recourir au `const items = [...]` écrit en dur dans `App.js`.

### 4. Créer un item

Tu vas pouvoir décommenter, et rendre actif, le formulaire d'ajout d'un item dans la liste.
Pour ne pas perdre de temps bêtement à chercher des images sur Google (tu peux garder ça pour la fin !!),
tu peux coller dans le champ picture [http://via.placeholder.com/100x100](http://via.placeholder.com/100x100).

Ici il va falloir:
1. câbler une route en POST sur le serveur
2. utiliser fetch pour poster vers cette route depuis le front
3. ajouter l'item à la liste

### 5. Bonus: effacer un item

Si tu te sens de le faire, et que tu en as le temps tu peux décommenter la petite croix (ligne avec un `<span>`) dans Item.js, et câbler l'effacement d'un item:
1. route en DELETE
2. fetch
3. enlever l'item de la liste