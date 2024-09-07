<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>Robot Revolution</title>
	<meta property="og:title" content="List of Projects for my robot revolution class at JCC" />
</svelte:head>

<section>
	<h1>Robot Revolution</h1>
	<ul class="posts">
		{#each data.posts as post}
            {#if JSON.stringify(post.categories) == JSON.stringify(['robot revolution'])}
                <li class="post">
                    <a href={post.slug} class="title">{post.title}</a>
                    <p class="date">{formatDate(post.date)}</p>
                    <p class="description">{post.description}</p>
                </li>
            {/if}
		{/each}
	</ul>
</section>

<style>
    .posts {
		display: grid;
		gap: 2rem;
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}
	ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>