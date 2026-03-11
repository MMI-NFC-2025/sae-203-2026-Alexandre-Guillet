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

// --- DONNEES DE DEMONSTRATION (quand PocketBase n'est pas disponible) ---

const mockScenes = [
  { id: "scene1", nom: "Opera Garnier", adresse: "Place de l'Opera, 75009 Paris", capacite: 1900, description: "Salle mythique de Paris" },
  { id: "scene2", nom: "Philharmonie de Paris", adresse: "221 Avenue Jean Jaures, 75019 Paris", capacite: 2400, description: "Architecture moderne exceptionnelle" },
  { id: "scene3", nom: "Theatre des Champs-Elysees", adresse: "15 Avenue Montaigne, 75008 Paris", capacite: 1905, description: "Temple de la musique classique" },
];

const mockArtistes = [
  { id: "art1", nom: "Orchestre de Paris", genre: "Symphonique", description: "L'orchestre symphonique de renommee internationale", date_de_representation: "2025-06-21 20:00", scene: "scene1" },
  { id: "art2", nom: "Anne-Sophie Mutter", genre: "Violon", description: "Virtuose du violon de renommee mondiale", date_de_representation: "2025-06-22 19:30", scene: "scene2" },
  { id: "art3", nom: "Lang Lang", genre: "Piano", description: "Pianiste chinois de renommee internationale", date_de_representation: "2025-06-23 20:00", scene: "scene1" },
  { id: "art4", nom: "Quatuor Ebene", genre: "Musique de chambre", description: "Quatuor a cordes francais d'excellence", date_de_representation: "2025-06-24 19:00", scene: "scene3" },
  { id: "art5", nom: "Cecilia Bartoli", genre: "Opera", description: "Mezzo-soprano italienne exceptionnelle", date_de_representation: "2025-06-25 20:30", scene: "scene1" },
  { id: "art6", nom: "Ensemble Intercontemporain", genre: "Contemporain", description: "Ensemble dedie a la musique du XXe siecle", date_de_representation: "2025-06-22 18:00", scene: "scene2" },
];

// Variable pour savoir si on utilise les donnees de demo
let useMockData = false;

// Tester la connexion a PocketBase
async function checkConnection() {
  try {
    await pb.health.check();
    useMockData = false;
    return true;
  } catch {
    useMockData = true;
    console.log("PocketBase non disponible, utilisation des donnees de demo");
    return false;
  }
}

// --- ARTISTES ---

// Recuperer tous les artistes tries par date
export async function getAllArtistes() {
  try {
    const records = await pb.collection("artistes").getFullList({
      sort: "date_de_representation",
    });
    return records;
  } catch {
    return mockArtistes;
  }
}

// Recuperer tous les artistes tries par nom
export async function getArtistesByName() {
  try {
    const records = await pb.collection("artistes").getFullList({
      sort: "nom",
    });
    return records;
  } catch {
    return [...mockArtistes].sort((a, b) => a.nom.localeCompare(b.nom));
  }
}

// Recuperer un artiste par son ID
export async function getArtisteById(id) {
  try {
    const record = await pb.collection("artistes").getOne(id);
    return record;
  } catch {
    return mockArtistes.find((a) => a.id === id) || null;
  }
}

// Recuperer les artistes d'une scene par l'ID de la scene
export async function getArtistesBySceneId(sceneId) {
  try {
    const records = await pb.collection("artistes").getFullList({
      filter: `scene = "${sceneId}"`,
      sort: "date_de_representation",
    });
    return records;
  } catch {
    return mockArtistes.filter((a) => a.scene === sceneId);
  }
}

// --- SCENES ---

// Recuperer toutes les scenes triees par nom
export async function getAllScenes() {
  try {
    const records = await pb.collection("scenes").getFullList({
      sort: "nom",
    });
    return records;
  } catch {
    return mockScenes;
  }
}

// Recuperer une scene par son ID
export async function getSceneById(id) {
  try {
    const record = await pb.collection("scenes").getOne(id);
    return record;
  } catch {
    return mockScenes.find((s) => s.id === id) || null;
  }
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
  try {
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
  } catch {
    const scene = mockScenes.find((s) => s.nom === sceneName);
    if (!scene) return [];
    return mockArtistes.filter((a) => a.scene === scene.id);
  }
}

// Recuperer les artistes par genre musical
export async function getArtistesByGenre(genre) {
  try {
    const records = await pb.collection("artistes").getFullList({
      filter: `genre ~ "${genre}"`,
      sort: "date_de_representation",
    });
    return records;
  } catch {
    return mockArtistes.filter((a) => a.genre?.toLowerCase().includes(genre.toLowerCase()));
  }
}

// Recuperer les artistes par jour (format: "2025-06-21")
export async function getArtistesByDay(day) {
  try {
    const records = await pb.collection("artistes").getFullList({
      filter: `date_de_representation ~ "${day}"`,
      sort: "date_de_representation",
    });
    return records;
  } catch {
    return mockArtistes.filter((a) => a.date_de_representation?.includes(day));
  }
}

// Recuperer tous les genres uniques
export async function getAllGenres() {
  try {
    const artistes = await pb.collection("artistes").getFullList();
    const genres = [...new Set(artistes.map((a) => a.genre).filter(Boolean))];
    return genres.sort();
  } catch {
    const genres = [...new Set(mockArtistes.map((a) => a.genre).filter(Boolean))];
    return genres.sort();
  }
}

// Recuperer toutes les dates uniques
export async function getAllDays() {
  try {
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
  } catch {
    const days = [
      ...new Set(
        mockArtistes
          .map((a) => a.date_de_representation?.split(" ")[0])
          .filter(Boolean)
      ),
    ];
    return days.sort();
  }
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
