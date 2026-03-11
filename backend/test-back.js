import {
  getAllArtistes,
  getArtistesByName,
  getArtisteById,
  getArtistesBySceneId,
  getArtistesBySceneName,
  getArtistesByGenre,
  getArtistesByDay,
  getAllGenres,
  getAllDays,
  getAllScenes,
  getSceneById,
  getImageUrl,
  addArtiste,
  addScene,
  updateArtiste,
  updateScene,
  deleteArtiste,
  deleteScene,
  login,
  logout,
  isLoggedIn,
  getCurrentUser,
  register,
} from "./backend.mjs";

// ========================================
// TESTS - Decommente le test que tu veux
// ========================================

// --- TEST: Recuperer tous les artistes (par date) ---
/*
try {
  const artistes = await getAllArtistes();
  console.log("Tous les artistes (par date) :");
  console.log(JSON.stringify(artistes, null, 2));
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Recuperer artistes par nom (alphabetique) ---
/*
try {
  const artistes = await getArtistesByName();
  console.log("Artistes par nom :");
  artistes.forEach((a) => console.log("-", a.nom));
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Recuperer un artiste par ID ---
/*
try {
  const artiste = await getArtisteById("REMPLACE_PAR_UN_ID");
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
  scenes.forEach((s) => console.log("-", s.nom));
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Recuperer une scene par ID ---
/*
try {
  const scene = await getSceneById("REMPLACE_PAR_UN_ID");
  console.log("Scene trouvee :");
  console.log(JSON.stringify(scene, null, 2));
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Recuperer artistes par scene ID ---
/*
try {
  const artistes = await getArtistesBySceneId("REMPLACE_PAR_UN_ID");
  console.log("Artistes de la scene (par ID) :");
  artistes.forEach((a) => console.log("-", a.nom, a.date_de_representation));
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Recuperer artistes par scene NOM ---
/*
try {
  const artistes = await getArtistesBySceneName("Grande Scene");
  console.log("Artistes de la scene (par nom) :");
  artistes.forEach((a) => console.log("-", a.nom, a.date_de_representation));
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Recuperer artistes par genre ---
/*
try {
  const artistes = await getArtistesByGenre("Classique");
  console.log("Artistes du genre Classique :");
  artistes.forEach((a) => console.log("-", a.nom));
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Recuperer artistes par jour ---
/*
try {
  const artistes = await getArtistesByDay("2025-06-21");
  console.log("Artistes du 21 juin :");
  artistes.forEach((a) => console.log("-", a.nom, a.date_de_representation));
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Recuperer tous les genres ---
/*
try {
  const genres = await getAllGenres();
  console.log("Tous les genres :");
  genres.forEach((g) => console.log("-", g));
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Recuperer toutes les dates ---
/*
try {
  const days = await getAllDays();
  console.log("Toutes les dates :");
  days.forEach((d) => console.log("-", d));
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Ajouter un artiste ---
/*
try {
  const newArtiste = await addArtiste({
    nom: "Test Artiste",
    date_de_representation: "2025-06-21 20:00:00",
    scene: "REMPLACE_PAR_UN_ID",
    description: "Description de test",
    genre: "Jazz",
  });
  console.log("Artiste cree :", newArtiste);
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Modifier un artiste ---
/*
try {
  const updated = await updateArtiste("REMPLACE_PAR_UN_ID", {
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
  await deleteArtiste("REMPLACE_PAR_UN_ID");
  console.log("Artiste supprime");
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Ajouter une scene ---
/*
try {
  const newScene = await addScene({
    nom: "Nouvelle Scene",
    description: "Description de la scene",
    localisation: "Paris",
    capacite: 500,
  });
  console.log("Scene creee :", newScene);
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Modifier une scene ---
/*
try {
  const updated = await updateScene("REMPLACE_PAR_UN_ID", {
    nom: "Scene Modifiee",
  });
  console.log("Scene modifiee :", updated);
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Supprimer une scene ---
/*
try {
  await deleteScene("REMPLACE_PAR_UN_ID");
  console.log("Scene supprimee");
} catch (e) {
  console.error(e);
}
*/

// ========================================
// TESTS AUTHENTIFICATION
// ========================================

// --- TEST: Inscription ---
/*
try {
  const user = await register("test@example.com", "password123", "password123");
  console.log("Utilisateur inscrit :", user);
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Connexion ---
/*
try {
  const authData = await login("test@example.com", "password123");
  console.log("Connecte :", authData.record.email);
  console.log("Est connecte ?", isLoggedIn());
  console.log("Utilisateur :", getCurrentUser());
} catch (e) {
  console.error(e);
}
*/

// --- TEST: Deconnexion ---
/*
logout();
console.log("Est connecte apres deconnexion ?", isLoggedIn());
*/
