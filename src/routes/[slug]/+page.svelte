<script lang="ts">
    import { formatDate } from "$lib/utils";

    export let data
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{data.meta.title}" />
</svelte:head>

<center>
    <article>
        <!-- Title -->
        <hgroup>
            <h1>{data.meta.title}</h1>
            <p>Published at {formatDate(data.meta.date)}</p>
        </hgroup>

        <!-- Tags -->
        <div class="tags">
            {#each data.meta.categories as category}
                <span class="surface-4">&num;{category}</span>
            {/each}
        </div>

        <!-- Post -->
        <div class="post">
            <svelte:component class="content" this={data.content} />
        </div>
    </article>
</center>

<style>
    .post {
        padding: 15px;
    }
    .content li {
        display: inline;
    }
</style>