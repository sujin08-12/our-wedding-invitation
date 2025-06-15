import type { Actions } from './$types';
import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';

export const actions = {
	rsvp: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('fullname')?.toString().trim();
		const rsvp = formData.get('rsvp')?.toString();

		if (!name) {
			return fail(400, { missingName: true });
		}

		if (!rsvp) {
			return fail(400, { missingRsvp: true });
		}

		return { success: true };
	}
} satisfies Actions;
