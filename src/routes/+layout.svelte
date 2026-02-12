<script lang="ts">
  import { onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css";

  let { children } = $props();

  onMount(() => {
    history.scrollRestoration = "manual";
  });

  afterNavigate(() => {
    window.scrollTo(0, 0);
  });
</script>

<svelte:head></svelte:head>

<Nav />
{@render children()}
