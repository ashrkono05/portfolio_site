<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import type { PageData } from "../$types";
    import { Turnstile } from "svelte-turnstile";


    export let data: PageData;

    const { form, enhance } = superForm(data.form);
</script>

<form method="POST">
    <input placeholder="Name" bind:value={form.name} name="name" type="text"/>
    <input placeholder="Email" bind:value={form.email} name="email" type="text"/>
    <textarea placeholder="Message" bind:value={form.message} name="message" type="text"/>
    <!--<Turnstile siteKey="0x4AAAAAAAi0yZ3P0F7maDx6" theme="dark" />-->
    <button>Submit</button>
</form>

<style>
    input[type=text], textarea {
        width: 25%;
        padding: 12px 20px;
        margin: 8px 0;
        display: block;
        border: 1px solid #ccc;
        border-radius: 15px;
        box-sizing: border-box;
    }
</style>