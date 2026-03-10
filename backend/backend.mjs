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
