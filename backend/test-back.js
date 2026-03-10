import {
  getAllArtistes,
  getArtistesByName,
  getArtisteById,
  getArtistesBySceneId,
  getAllScenes,
  getSceneById,
  getImageUrl,
  addArtiste,
  addScene,
  updateArtiste,
  updateScene,
  deleteArtiste,
  deleteScene,
} from "./backend.mjs";

// ========================================
// TESTS - Decommente le test que tu veux
// ========================================

// --- TEST: Recuperer tous les artistes ---
/*
try {
  const artistes = await getAllArtistes();
  console.log("Tous les artistes :");
  console.log(JSON.stringify(artistes, null, 2));
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Recuperer artistes par nom ---
/*
try {
  const artistes = await getArtistesByName();
  console.log("Artistes par nom :");
  console.log(JSON.stringify(artistes, null, 2));
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Recuperer un artiste par ID ---
/*
try {
  const artiste = await getArtisteById("l8psz2k3cw7usbi");
  console.log("Artiste trouve :");
  console.log(JSON.stringify(artiste, null, 2));
  
  // Test URL image
  if (artiste.image) {
    const imageUrl = getImageUrl(artiste, artiste.image);
    console.log("URL image :", imageUrl);
  }
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Recuperer toutes les scenes ---
/*
try {
  const scenes = await getAllScenes();
  console.log("Toutes les scenes :");
  console.log(JSON.stringify(scenes, null, 2));
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Recuperer une scene par ID ---
/*
try {
  const scene = await getSceneById("unvzkfij08550oa");
  console.log("Scene trouvee :");
  console.log(JSON.stringify(scene, null, 2));
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Recuperer artistes par scene ---
/*
try {
  const artistes = await getArtistesBySceneId("unvzkfij08550oa");
  console.log("Artistes de la scene :");
  console.log(JSON.stringify(artistes, null, 2));
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Ajouter un artiste ---
/*
try {
  const newArtiste = await addArtiste({
    nom: "Test Artiste",
    date_de_representation: "2026-06-21 20:00:00",
    scene: "unvzkfij08550oa",
    description: "Description de test",
  });
  console.log("Artiste cree :", newArtiste);
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Modifier un artiste ---
/*
try {
  const updated = await updateArtiste("ID_ARTISTE", {
    nom: "Nouveau nom",
  });
  console.log("Artiste modifie :", updated);
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Supprimer un artiste ---
/*
try {
  await deleteArtiste("ID_ARTISTE");
  console.log("Artiste supprime");
} catch (e) {
  console.error(e);
}
*/
