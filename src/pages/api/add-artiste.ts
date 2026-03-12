
import { addArtiste } from "../../../backend/backend.mjs";

export async function POST({ request }) {
  try {
    const data = await request.formData();

    const artisteData = {
      nom: data.get("nom"),
      specialite: data.get("specialite"),
      description: data.get("description"),
      scene: data.get("scene"),
      date_de_representation: data.get("date_de_representation"),
    };

    if (!artisteData.nom) {
      return new Response(JSON.stringify({ error: "Le nom est requis" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = await addArtiste(artisteData);

    return new Response(JSON.stringify({ success: true, artiste: result }), {
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
