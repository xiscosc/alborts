<script lang="ts">
  import { onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import android192 from "$lib/assets/android-chrome-192x192.png";
  import android512 from "$lib/assets/android-chrome-512x512.png";
  import appleTouchIcon from "$lib/assets/apple-touch-icon.png";
  import favicon from "$lib/assets/favicon.ico";
  import favicon16 from "$lib/assets/favicon-16x16.png";
  import favicon32 from "$lib/assets/favicon-32x32.png";
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

<svelte:head>
  <link rel="icon" href={favicon} sizes="any" />
  <link rel="icon" href={favicon16} type="image/png" sizes="16x16" />
  <link rel="icon" href={favicon32} type="image/png" sizes="32x32" />
  <link rel="apple-touch-icon" href={appleTouchIcon} />
  <link rel="icon" href={android192} type="image/png" sizes="192x192" />
  <link rel="icon" href={android512} type="image/png" sizes="512x512" />
  <title>Marina & Albert - 04 de Juliol de 2026</title>

  <!-- Open Graph / WhatsApp -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Marina & Albert - 04 de Juliol de 2026" />
  <meta property="og:description" content="Ens casam! Acompanya'ns en aquest dia tan especial." />
  <meta property="og:image" content="/corazon_ogg.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
</svelte:head>

<Nav />
{@render children()}
