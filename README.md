# kering-back
# Readme - API en TypeScript

Ce fichier README vous expliquera comment lancer et utiliser l'API en TypeScript fournie avec ce projet.

## Prérequis

Assurez-vous d'avoir Node.js et npm (ou yarn) installés sur votre système.

## Installation

1. Clonez ce dépôt sur votre machine locale.
2. Naviguez vers le dossier du projet
3. Installez les dépendances en exécutant la commande suivante :

```bash
npm install
```

## Scripts disponibles

Dans le fichier package.json, vous trouverez les scripts suivants :

### Démarrer le serveur en mode développement

```bash
npm run dev
```

Ce script utilise `nodemon` pour surveiller les fichiers avec l'extension .js, .ts et .json dans le dossier `src`. Si des changements sont détectés, le serveur est redémarré automatiquement. Cela facilite le développement car vous n'avez pas besoin de redémarrer manuellement le serveur à chaque modification du code.

### Construire le projet

```bash
npm run build
```

Ce script utilise `tsup` pour construire le projet en utilisant le fichier `src/server.ts` comme point d'entrée. Le code compilé est généré dans le dossier `dist`.

### Démarrer le serveur en production

```bash
npm start
```

Ce script démarre le serveur en utilisant le fichier `dist/server.js`.

## Endpoints de l'API

### GET /product

Récupère un produit en fonction de son code SMC (Smart Manifold Code) et du pays.

- **Paramètres de requête :**

  - `SMC` (obligatoire) : Le code SMC du produit recherché.
  - `country` (obligatoire) : Le pays dans lequel le produit est recherché.

- **Réponses :**

  - 200 OK: La demande a réussi. Le corps de la réponse contient les détails du produit ainsi que son prix.
  - 401 Non autorisé: Le produit n'est pas disponible dans le pays spécifié.
  - 404 Non trouvé: Le produit avec le code SMC spécifié n'a pas été trouvé.

## Exécution de l'API

Une fois les dépendances installées, vous pouvez lancer le serveur en mode développement à l'aide de la commande :

```bash
npm run dev
```

Cela démarrera le serveur, et vous pourrez accéder à l'API via l'URL : `http://localhost:3000/product`

**Note:** Assurez-vous d'avoir les fichiers JSON de données (`products.json` et `prices.json`) aux emplacements spécifiés dans le fichier `server.ts` afin que l'API puisse les utiliser correctement.

Si vous rencontrez des problèmes ou avez des questions, n'hésitez pas à nous contacter.
