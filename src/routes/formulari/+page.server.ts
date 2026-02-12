import { fail } from "@sveltejs/kit";
import { TURNSTILE_SECRET_KEY, WEBHOOK_API_KEY, WEBHOOK_URL } from "$env/static/private";
import { PUBLIC_TURNSTILE_SITE_KEY } from "$env/static/public";
import type { Actions, PageServerLoad } from "./$types";

async function verifyTurnstile(token: string): Promise<boolean> {
	try {
		const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams({
				secret: TURNSTILE_SECRET_KEY,
				response: token,
			}),
		});

		const result = await response.json();
		return result.success;
	} catch (error) {
		console.error("Turnstile verification error:", error);
		return false;
	}
}

export const load: PageServerLoad = async () => {
	return {
		turnstileSiteKey: PUBLIC_TURNSTILE_SITE_KEY,
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const nom = (data.get("nom") as string)?.trim();
		const telefon = (data.get("telefon") as string)?.trim();
		const alergies = (data.get("alergies") as string)?.trim();
		const apat = (data.get("apat") as string)?.trim();
		const bus = (data.get("bus") as string)?.trim();
		const values = { nom, telefon, alergies, apat, bus };

		// Verify Turnstile token
		const turnstileToken = data.get("cf-turnstile-response") as string;
		if (!turnstileToken) {
			return fail(400, { error: "Verificació de seguretat requerida.", values });
		}

		const isValidTurnstile = await verifyTurnstile(turnstileToken);
		if (!isValidTurnstile) {
			return fail(400, {
				error: "Verificació de seguretat fallida. Torna-ho a provar.",
				values,
			});
		}

		const errors: Record<string, string> = {};

		if (!nom) errors.nom = "El nom és obligatori";
		if (!telefon) {
			errors.telefon = "El telèfon és obligatori";
		} else if (!/^[+\d\s]{9,}$/.test(telefon)) {
			errors.telefon = "Format de telèfon no vàlid";
		}
		if (!apat) errors.apat = "Selecciona un tipus d'àpat";
		if (!bus) errors.bus = "Indica si necessites el bus";

		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, values });
		}

		try {
			await fetch(WEBHOOK_URL, {
				method: "POST",
				headers: { "Content-Type": "application/json", "x-make-apikey": WEBHOOK_API_KEY },
				body: JSON.stringify({ nom, telefon, alergies, apat, bus }),
			});
		} catch {
			return fail(500, {
				error: "Hi ha hagut un error. Torna-ho a provar.",
				values,
			});
		}

		return { success: true };
	},
} satisfies Actions;
