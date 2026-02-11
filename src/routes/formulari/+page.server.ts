import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

const WEBHOOK_URL = "https://example.com/webhook"; // TODO: replace with actual webhook URL

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const nom = (data.get("nom") as string)?.trim();
		const telefon = (data.get("telefon") as string)?.trim();
		const alergies = (data.get("alergies") as string)?.trim();
		const apat = (data.get("apat") as string)?.trim();
		const bus = (data.get("bus") as string)?.trim();

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
			return fail(400, { errors, values: { nom, telefon, alergies, apat, bus } });
		}

		try {
			await fetch(WEBHOOK_URL, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ nom, telefon, alergies, apat, bus }),
			});
		} catch {
			return fail(500, {
				error: "Hi ha hagut un error. Torna-ho a provar.",
				values: { nom, telefon, alergies, apat, bus },
			});
		}

		return { success: true };
	},
} satisfies Actions;
