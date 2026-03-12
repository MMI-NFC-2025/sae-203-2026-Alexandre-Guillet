import PocketBase from "pocketbase";

const pb = new PocketBase("https://chorussymphonia.alexandreguillet.fr");

export function getImageUrl(record, filename) {
  if (!record || !filename) return null;
  return `${pbUrl}/api/files/${record.collectionId}/${record.id}/${filename}`;
}

export async function getAllArtistes() {
  const records = await pb.collection("artistes").getFullList({
    sort: "date_de_representation",
  });
  return records;
}

export async function getArtistesByName() {
  const records = await pb.collection("artistes").getFullList({
    sort: "nom",
  });
  return records;
}

export async function getArtisteById(id) {
  const record = await pb.collection("artistes").getOne(id);
  return record;
}

export async function getArtistesBySceneId(sceneId) {
  const records = await pb.collection("artistes").getFullList({
    filter: `scene = "${sceneId}"`,
    sort: "date_de_representation",
  });
  return records;
}

export async function getAllScenes() {
  const records = await pb.collection("scenes").getFullList({
    sort: "nom",
  });
  return records;
}

export async function getSceneById(id) {
  const record = await pb.collection("scenes").getOne(id);
  return record;
}

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

export async function getArtistesBySceneName(sceneName) {
  const records = await pb.collection("artistes").getFullList({
    filter: `scene.nom = "${sceneName}"`,
    sort: "date_de_representation",
  });
  return records;
}

export async function getArtistesByGenre(genre) {
  const records = await pb.collection("artistes").getFullList({
    filter: `specialite = "${genre}"`,
    sort: "date_de_representation",
  });
  return records;
}

export async function addMessage(data) {
  try {
    const record = await pb.collection("message").create(data);
    console.log("Message ajouté :", record);
    return { message: "Votre message a été envoyé avec succès." };
  } catch (error) {
    console.error("Erreur ajout message :", error);
    throw error;
  }
}
