<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";

  let { form }: { form: ActionData } = $props();
</script>

<style>
  .form-field {
    display: block;
    width: 100%;
    padding: 16px 20px;
    font-size: 16px;
    color: #1f2937;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    outline: none;
    transition: border-color 0.2s;
  }
  .form-field::placeholder {
    color: #9ca3af;
  }
  .form-field:focus {
    border-color: #6b7280;
  }
  select.form-field {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239ca3af' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
  }
</style>

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
    <form method="POST" use:enhance class="w-full" style="max-width: 380px;">
      <h1 class="text-3xl font-light font-nova text-center">Confirmació</h1>

      {#if form?.error}
        <p class="mt-4 text-sm text-red-500 text-center">{form.error}</p>
      {/if}

      <div style="margin-top: 40px; display: flex; flex-direction: column; gap: 16px;">
        <input
          type="text"
          name="nom"
          required
          placeholder="Nom complet"
          value={form?.values?.nom ?? ""}
          class="form-field"
        />
        {#if form?.errors?.nom}
          <p class="text-xs text-red-500" style="margin-top: -12px;">{form.errors.nom}</p>
        {/if}

        <input
          type="tel"
          name="telefon"
          required
          placeholder="Telèfon"
          value={form?.values?.telefon ?? ""}
          class="form-field"
        />
        {#if form?.errors?.telefon}
          <p class="text-xs text-red-500" style="margin-top: -12px;">{form.errors.telefon}</p>
        {/if}

        <textarea
          name="alergies"
          rows="2"
          placeholder="Al·lèrgies i/o restriccions (opcional)"
          class="form-field"
          style="resize: none;"
        >{form?.values?.alergies ?? ""}</textarea>

        <select name="apat" required class="form-field">
          <option value="" disabled selected={!form?.values?.apat}>Plat principal</option>
          <option value="peix" selected={form?.values?.apat === "peix"}>Peix</option>
          <option value="carn" selected={form?.values?.apat === "carn"}>Carn</option>
          <option value="vega" selected={form?.values?.apat === "vega"}>Vegà</option>
        </select>
        {#if form?.errors?.apat}
          <p class="text-xs text-red-500" style="margin-top: -12px;">{form.errors.apat}</p>
        {/if}

        <select name="bus" required class="form-field">
          <option value="" disabled selected={!form?.values?.bus}>Necessites el bus?</option>
          <option value="si" selected={form?.values?.bus === "si"}>Sí</option>
          <option value="no" selected={form?.values?.bus === "no"}>No</option>
        </select>
        {#if form?.errors?.bus}
          <p class="text-xs text-red-500" style="margin-top: -12px;">{form.errors.bus}</p>
        {/if}
      </div>

      <div style="margin-top: 32px;">
        <button
          type="submit"
          class="w-full py-3 text-sm tracking-wide text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
        >
          Enviar
        </button>
      </div>
    </form>
  {/if}
</div>
