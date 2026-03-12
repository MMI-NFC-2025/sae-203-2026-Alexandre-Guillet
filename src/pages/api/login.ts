import { loginUser, logoutUser } from "../../../backend/backend.mjs";

export async function POST({ request }) {
  try {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email et mot de passe requis" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    await loginUser(email, password);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "authenticated=true; Path=/; Max-Age=86400",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Email ou mot de passe incorrect" }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
