import PocketBase from "pocketbase";

// Connexion a PocketBase
const pb = new PocketBase("http://127.0.0.1:8090");

// URL de base pour les fichiers/images
export const pbUrl = "http://127.0.0.1:8090";

// Fonction pour obtenir l'URL d'une image PocketBase
export function getImageUrl(record, filename) {
  if (!record || !filename) return null;
  return `${pbUrl}/api/files/${record.collectionId}/${record.id}/${filename}`;
}

// --- ARTISTES ---

// Recuperer tous les artistes tries par date
export async function getAllArtistes() {
  const records = await pb.collection("artistes").getFullList({
    sort: "date_de_representation",
  });
  return records;
}

// Recuperer tous les artistes tries par nom
export async function getArtistesByName() {
  const records = await pb.collection("artistes").getFullList({
    sort: "nom",
  });
  return records;
}

// Recuperer un artiste par son ID
export async function getArtisteById(id) {
  const record = await pb.collection("artistes").getOne(id);
  return record;
}

// Recuperer les artistes d'une scene par l'ID de la scene
export async function getArtistesBySceneId(sceneId) {
  const records = await pb.collection("artistes").getFullList({
    filter: `scene = "${sceneId}"`,
    sort: "date_de_representation",
  });
  return records;
}

// --- SCENES ---

// Recuperer toutes les scenes triees par nom
export async function getAllScenes() {
  const records = await pb.collection("scenes").getFullList({
    sort: "nom",
  });
  return records;
}

// Recuperer une scene par son ID
export async function getSceneById(id) {
  const record = await pb.collection("scenes").getOne(id);
  return record;
}

// --- AJOUTER ---

// Ajouter un artiste
export async function addArtiste(data) {
  try {
    const record = await pb.collection("artistes").create(data);
    console.log("Artiste ajoute :", record);
    return record;
  } catch (error) {
    console.error("Erreur ajout artiste :", error);
    throw error;
  }
}

// Ajouter une scene
export async function addScene(data) {
  try {
    const record = await pb.collection("scenes").create(data);
    console.log("Scene ajoutee :", record);
    return record;
  } catch (error) {
    console.error("Erreur ajout scene :", error);
    throw error;
  }
}

// --- MODIFIER ---

// Modifier un artiste
export async function updateArtiste(id, data) {
  try {
    const record = await pb.collection("artistes").update(id, data);
    console.log("Artiste modifie :", record);
    return record;
  } catch (error) {
    console.error("Erreur modification artiste :", error);
    throw error;
  }
}

// Modifier une scene
export async function updateScene(id, data) {
  try {
    const record = await pb.collection("scenes").update(id, data);
    console.log("Scene modifiee :", record);
    return record;
  } catch (error) {
    console.error("Erreur modification scene :", error);
    throw error;
  }
}

// --- SUPPRIMER ---

// Supprimer un artiste
export async function deleteArtiste(id) {
  try {
    await pb.collection("artistes").delete(id);
    console.log("Artiste supprime :", id);
    return true;
  } catch (error) {
    console.error("Erreur suppression artiste :", error);
    throw error;
  }
}

// Supprimer une scene
export async function deleteScene(id) {
  try {
    await pb.collection("scenes").delete(id);
    console.log("Scene supprimee :", id);
    return true;
  } catch (error) {
    console.error("Erreur suppression scene :", error);
    throw error;
  }
}

// --- FILTRES SUPPLEMENTAIRES ---

// Recuperer les artistes d'une scene par le NOM de la scene
export async function getArtistesBySceneName(sceneName) {
  // D'abord on trouve la scene par son nom
  const scenes = await pb.collection("scenes").getFullList({
    filter: `nom = "${sceneName}"`,
  });
  
  if (scenes.length === 0) {
    return [];
  }
  
  // Ensuite on recupere les artistes de cette scene
  const records = await pb.collection("artistes").getFullList({
    filter: `scene = "${scenes[0].id}"`,
    sort: "date_de_representation",
  });
  return records;
}

// Recuperer les artistes par genre musical
export async function getArtistesByGenre(genre) {
  const records = await pb.collection("artistes").getFullList({
    filter: `genre ~ "${genre}"`,
    sort: "date_de_representation",
  });
  return records;
}

// Recuperer les artistes par jour (format: "2025-06-21")
export async function getArtistesByDay(day) {
  const records = await pb.collection("artistes").getFullList({
    filter: `date_de_representation ~ "${day}"`,
    sort: "date_de_representation",
  });
  return records;
}

// Recuperer tous les genres uniques
export async function getAllGenres() {
  const artistes = await pb.collection("artistes").getFullList();
  const genres = [...new Set(artistes.map((a) => a.genre).filter(Boolean))];
  return genres.sort();
}

// Recuperer toutes les dates uniques
export async function getAllDays() {
  const artistes = await pb.collection("artistes").getFullList({
    sort: "date_de_representation",
  });
  const days = [
    ...new Set(
      artistes
        .map((a) => a.date_de_representation?.split(" ")[0])
        .filter(Boolean)
    ),
  ];
  return days;
}

// --- AUTHENTIFICATION ---

// Connexion utilisateur
export async function login(email, password) {
  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
    console.log("Connexion reussie :", authData.record.email);
    return authData;
  } catch (error) {
    console.error("Erreur de connexion :", error);
    throw error;
  }
}

// Deconnexion
export function logout() {
  pb.authStore.clear();
  console.log("Deconnexion reussie");
}

// Verifier si connecte
export function isLoggedIn() {
  return pb.authStore.isValid;
}

// Recuperer l'utilisateur connecte
export function getCurrentUser() {
  return pb.authStore.model;
}

// Inscription utilisateur
export async function register(email, password, passwordConfirm) {
  try {
    const data = {
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    };
    const record = await pb.collection("users").create(data);
    console.log("Inscription reussie :", record.email);
    return record;
  } catch (error) {
    console.error("Erreur inscription :", error);
    throw error;
  }
}
