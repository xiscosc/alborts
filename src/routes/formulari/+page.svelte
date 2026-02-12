<script lang="ts">
  import { onMount } from "svelte";
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";

  interface Turnstile {
    render(container: HTMLElement, options: Record<string, unknown>): void;
  }

  let { form, data }: { form: ActionData; data: PageData } = $props();

  let submitting = $state(false);
  let turnstileToken = $state("");
  let turnstileContainer = $state<HTMLDivElement>();

  const fieldClass =
    "block w-full py-4 px-5 text-base text-gray-800 bg-white border border-gray-200 rounded-xl outline-none transition-colors placeholder:text-gray-400 focus:border-gray-500";

  const selectArrowStyle =
    "background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239ca3af' d='M6 8L1 3h10z'/%3E%3C/svg%3E\"); background-repeat: no-repeat; background-position: right 16px center;";

  onMount(() => {
    if (data.turnstileSiteKey) {
      const initTurnstile = () => {
        const w = window as typeof window & { turnstile?: Turnstile };
        if (w.turnstile && turnstileContainer) {
          w.turnstile.render(turnstileContainer, {
            sitekey: data.turnstileSiteKey,
            callback: (token: string) => {
              turnstileToken = token;
            },
            "expired-callback": () => {
              turnstileToken = "";
            },
            "error-callback": () => {
              turnstileToken = "";
            },
            theme: "light",
          });
        } else {
          setTimeout(initTurnstile, 100);
        }
      };
      initTurnstile();
    }
  });
</script>

<svelte:head>
  {#if data.turnstileSiteKey}
    <script
      src="https://challenges.cloudflare.com/turnstile/v0/api.js"
      async
      defer
    ></script>
  {/if}
</svelte:head>

<div class="min-h-screen flex items-center justify-center px-8 py-20">
  {#if form?.success}
    <div class="text-center">
      <h1 class="text-3xl font-light font-nova">Gràcies!</h1>
      <p class="mt-6 text-gray-600">
        Hem rebut la teva confirmació.<br />Ens veiem el 4 de juliol!
      </p>
      <a
        href="/"
        class="mt-8 inline-block text-gray-600 underline hover:text-gray-800"
      >
        Tornar a l'inici
      </a>
    </div>
  {:else}
    <form method="POST" use:enhance={() => {
      submitting = true;
      return async ({ update }) => {
        await update();
        submitting = false;
      };
    }} class="w-full max-w-95">
      <h1 class="text-3xl font-light font-nova text-center">Confirmació</h1>

      {#if form?.error}
        <p class="mt-4 text-sm text-red-500 text-center">{form.error}</p>
      {/if}

      <div class="mt-10 flex flex-col gap-4">
        <input
          type="text"
          name="nom"
          required
          placeholder="Nom complet"
          value={form?.values?.nom ?? ""}
          class={fieldClass}
        />
        {#if form?.errors?.nom}
          <p class="-mt-3 text-xs text-red-500">
            {form.errors.nom}
          </p>
        {/if}

        <input
          type="tel"
          name="telefon"
          required
          placeholder="Telèfon"
          value={form?.values?.telefon ?? ""}
          class={fieldClass}
        />
        {#if form?.errors?.telefon}
          <p class="-mt-3 text-xs text-red-500">
            {form.errors.telefon}
          </p>
        {/if}

        <textarea
          name="alergies"
          rows="2"
          placeholder="Al·lèrgies i/o restriccions (opcional)"
          class="{fieldClass} resize-none">{form?.values?.alergies ?? ""}</textarea
        >

        <select name="apat" required class="{fieldClass} appearance-none" style={selectArrowStyle}>
          <option value="" disabled selected={!form?.values?.apat}
            >Plat principal</option
          >
          <option value="peix" selected={form?.values?.apat === "peix"}
            >Peix</option
          >
          <option value="carn" selected={form?.values?.apat === "carn"}
            >Carn</option
          >
          <option value="vega" selected={form?.values?.apat === "vega"}
            >Vegà</option
          >
        </select>
        {#if form?.errors?.apat}
          <p class="-mt-3 text-xs text-red-500">
            {form.errors.apat}
          </p>
        {/if}

        <select name="bus" required class="{fieldClass} appearance-none" style={selectArrowStyle}>
          <option value="" disabled selected={!form?.values?.bus}
            >Necessites el bus?</option
          >
          <option value="si" selected={form?.values?.bus === "si"}>Sí</option>
          <option value="no" selected={form?.values?.bus === "no"}>No</option>
        </select>
        {#if form?.errors?.bus}
          <p class="-mt-3 text-xs text-red-500">
            {form.errors.bus}
          </p>
        {/if}
      </div>

      {#if data.turnstileSiteKey}
        <div bind:this={turnstileContainer} class="mt-6 flex justify-center"></div>
        <input type="hidden" name="cf-turnstile-response" value={turnstileToken} />
      {/if}

      <div class="mt-8">
        <button
          type="submit"
          disabled={submitting}
          class="w-full py-3 text-sm tracking-wide text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:pointer-events-none"
        >
          {submitting ? "Enviant..." : "Enviar"}
        </button>
      </div>
    </form>
  {/if}
</div>
