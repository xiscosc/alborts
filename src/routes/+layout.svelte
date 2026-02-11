<script lang="ts">
  import { onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import favicon from "$lib/assets/favicon.svg";
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css";

  let { children } = $props();

  onMount(() => {
    history.scrollRestoration = "manual";
  });

  afterNavigate(({ to }) => {
    const hash = to?.url.hash.slice(1);
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "instant" });
      history.replaceState(null, "", to!.url.pathname);
    } else {
      window.scrollTo(0, 0);
    }
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Nav />
{@render children()}
