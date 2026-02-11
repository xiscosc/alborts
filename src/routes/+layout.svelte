<script lang="ts">
  import { onMount } from "svelte";
  import favicon from "$lib/assets/favicon.svg";
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css";

  let { children } = $props();

  onMount(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Nav />
{@render children()}
