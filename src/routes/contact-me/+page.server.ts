import type { PageServerLoad } from "../$types";
import { z } from "zod";
import { superValidate } from "sveltekit-superforms"
import { zod } from "sveltekit-superforms/adapters"
import type { Actions } from "@sveltejs/kit";
import { Resend } from 'resend';

const resend = new Resend('re_A5dVUEjG_96VyVEtPVwwPpXYBG5Q8YXZy');

const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(5)
});

export const load: PageServerLoad = async() => {
    const form = await superValidate(zod(schema))

    return {form}
}

export const actions: Actions = {
    default: async({ request }) => {
        const form = await superValidate(request, zod(schema));

        if (form.valid) {
            const { data, error } = await resend.emails.send({
                from: 'Cattware<form@support.cattware.com>',
                to: ['ashk@cattware.com'],
                subject: 'Cattware Form',
                html: `Name: ${form.data.name}<br/>Email: ${form.data.email}<br/>Message: ${form.data.message}`,
            });
            
            if (error) {
                return console.error({ error });
            }
        }
        else {
            console.log("DIDNT SEND")
        }
    }
}

