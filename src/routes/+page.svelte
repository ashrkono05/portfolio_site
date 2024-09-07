<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>Ash Konovalchuk Portfolio</title>
	<meta property="og:title" content="Portfolio for my robot revolution class at JCC" />
</svelte:head>

<h1>Ash Konovalchuk's<br/>Portfolio</h1>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
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