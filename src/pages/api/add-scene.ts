import { addScene } from "../../../backend/backend.mjs";

export async function POST({ request }) {
  try {
    const data = await request.formData();

    const sceneData = {
      nom: data.get("nom"),
      description: data.get("description"),
      localisation: data.get("localisation"),
      capacite: parseInt(data.get("capacite")) || 0,
    };

    if (!sceneData.nom) {
      return new Response(JSON.stringify({ error: "Le nom est requis" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = await addScene(sceneData);

    return new Response(JSON.stringify({ success: true, scene: result }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
