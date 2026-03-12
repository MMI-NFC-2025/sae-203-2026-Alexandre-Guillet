# Modèle Conceptuel de Données (MCD) - Festival Chorus Symphonia

## Structure PocketBase

### Collections

#### 1. **artistes**

Enregistrement de tous les artistes programmés au festival

| Champ                  | Type     | Description                               |
| ---------------------- | -------- | ----------------------------------------- |
| id                     | Text     | Identifiant unique                        |
| nom                    | Text     | Nom complet de l'artiste                  |
| specialite             | Text     | Genre musical / Spécialité                |
| description            | Text     | Description biographique                  |
| date_de_representation | DateTime | Date et heure de la représentation        |
| scene                  | Relation | Référence à la scène (collection: scenes) |
| photo_principale       | File     | Photo principale pour la liste            |
| galerie_photo          | Files    | Galerie d'images pour la page détail      |
| created                | DateTime | Date de création (auto)                   |
| updated                | DateTime | Date de modification (auto)               |

#### 2. **scenes**

Enregistrement de toutes les scènes du festival

| Champ        | Type     | Description                 |
| ------------ | -------- | --------------------------- |
| id           | Text     | Identifiant unique          |
| nom          | Text     | Nom de la scène             |
| description  | Text     | Description de la scène     |
| localisation | Text     | Adresse / localisation      |
| capacite     | Number   | Nombre de places            |
| photo        | File     | Photo de la scène           |
| acces        | Text     | Informations d'accès        |
| created      | DateTime | Date de création (auto)     |
| updated      | DateTime | Date de modification (auto) |

#### 3. **users** (Collection par défaut PocketBase)

Gestion des comptes administrateurs

| Champ    | Type     | Description                 |
| -------- | -------- | --------------------------- |
| id       | Text     | Identifiant unique          |
| email    | Text     | Email de l'utilisateur      |
| password | Password | Mot de passe hashé          |
| created  | DateTime | Date de création (auto)     |
| updated  | DateTime | Date de modification (auto) |

---

## Relations

```
┌─────────────┐         ┌───────────┐
│   SCENES    │         │ ARTISTES  │
├─────────────┤         ├───────────┤
│ id          │◄────────◼ scene (FK)│
│ nom         │ 1     N │ nom       │
│ description │         │ specialite│
│ localisation│         │ photo_... │
│ capacite    │         │ galerie...│
│ photo       │         │ date_de...│
└─────────────┘         └───────────┘
```

**Relation:**

- Une scène accueille **plusieurs artistes** (1:N)
- Un artiste se produit sur **une seule scène** (pour chaque représentation)

---

## Règles Métier

1. **Un artiste = Une representation par scène**
   - Un même artiste ne peut pas se produire 2x au même endroit
   - Mais peut se produire sur plusieurs scènes à différentes dates

2. **Données obligatoires:**
   - Artiste: nom, specialite, date_de_representation, scene
   - Scène: nom, localisation, capacite

3. **Données optionnelles:**
   - Artiste: description, galerie_photo
   - Scène: acces, description

---

## Endpoints Backend Créés

### Artistes

- `getAllArtistes()` - Tous les artistes triés par date
- `getArtistesByName()` - Artistes triés par nom alphabétique
- `getArtisteById(id)` - Détail d'un artiste
- `getArtistesBySceneId(sceneId)` - Artistes d'une scène
- `getArtistesBySceneName(sceneName)` - Artistes par nom de scène
- `getArtistesByGenre(genre)` - Artistes par genre musical
- `getArtistesByDate(date)` - Artistes d'une date donnée
- `getAllGenres()` - Liste des genres (unique)
- `getAllDates()` - Liste des dates de représentation
- `addArtiste(data)` - Ajouter un artiste
- `updateArtiste(id, data)` - Modifier un artiste
- `deleteArtiste(id)` - Supprimer un artiste

### Scènes

- `getAllScenes()` - Toutes les scènes triées par nom
- `getSceneById(id)` - Détail d'une scène
- `addScene(data)` - Ajouter une scène
- `updateScene(id, data)` - Modifier une scène
- `deleteScene(id)` - Supprimer une scène

### Authentification

- `loginUser(email, password)` - Connexion avec email/password
- `logoutUser()` - Déconnexion
- `isUserAuthenticated()` - Vérifier si connecté
- `getCurrentUser()` - Récupérer l'utilisateur courant

---

## Pages Dynamiques Créées

- `/artistes` - Liste tous les artistes
- `/artistes/[id]` - Détail d'un artiste
- `/artistes/par-genre/[genre]` - Artistes filtrés par genre
- `/artistes/par-date/[date]` - Artistes filtrés par date
- `/scenes` - Liste toutes les scènes
- `/scenes/[id]` - Détail d'une scène avec artistes
- `/programme` - Vue générale avec filtres
- `/login` - Page de connexion
- `/admin` - Panneau d'administration
