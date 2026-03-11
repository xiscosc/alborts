<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Section from "$lib/components/Section.svelte";

  const IBAN = "ES76 0073 0100 5606 4903 0455";
  let showCopied = $state(false);

  async function copyIban() {
    try {
      await navigator.clipboard.writeText(IBAN);
    } catch {
      // Fallback for iOS Safari
      const textarea = document.createElement("textarea");
      textarea.value = IBAN;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    showCopied = true;
    setTimeout(() => {
      showCopied = false;
    }, 2000);
  }
</script>

<Header />

<Section id="event" title="Esdeveniment">
  <div class="max-w-2xl text-center">
    <p class="mt-6 text-gray-600">
      Ens fa molta il·lusió poder compartir aquest dia amb tots vosaltres. La
      cerimònia marcarà l'inici d'un moment molt especial per a nosaltres,
      envoltats de la gent que estimam.
    </p>
    <p class="mt-4 text-gray-600">
      Vos esperam a partir de les <span class="font-semibold">18:00</span>,
      moment en què podreu arribar amb tranquil·litat, saludar-vos i començar
      a gaudir de l'ambient abans que comenci la cerimònia.
    </p>
    <p class="mt-4 text-gray-600">
      Després, només quedarà celebrar, riure, ballar i crear records junts.
    </p>
    <enhanced:img
      src="$lib/assets/coco1.png"
      alt="Esdeveniment"
      class="mt-8 w-2/3 max-h-[30vh] object-contain mx-auto rounded"
    />
  </div>
</Section>

<Section id="dresscode" title="Codi de vestimenta">
  <div class="max-w-2xl text-center">
    <p class="mt-6 text-gray-600">
      Amb molt d'amor us demanam que el <span class="font-semibold"
        >color vermell estigui totalment prohibit</span
      > per a aquest dia tan especial.
    </p>
    <p class="mt-4 text-gray-600">
      També preferim reservar els tons blancs, beix o similars per als
      protagonistes del dia (els homes poden portar camisa blanca sense
      problema).
    </p>
    <p class="mt-4 text-gray-600">
      Moltes gràcies per ajudar-nos a mantenir l'harmonia que hem imaginat.
    </p>
    <enhanced:img
      src="$lib/assets/codig_vestimenta.png"
      alt="Codi de vestimenta"
      class="mt-8 w-full max-h-[30vh] object-contain rounded"
    />
  </div>
</Section>

<Section id="ticket" title="Ticket">
  <div class="max-w-2xl text-center">
    <button type="button" onclick={copyIban} class="cursor-pointer" class:shake={showCopied} aria-label="Copiar IBAN">
      <enhanced:img
        src="$lib/assets/tickets.jpg"
        alt="Ticket"
        class="mt-8 w-full max-h-[50vh] object-contain rounded"
      />
    </button>
    <p class="mt-2 text-sm text-gray-400">Toca la imatge per copiar l'IBAN</p>
  </div>
</Section>

{#if showCopied}
  <div class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg z-50 text-sm">
    IBAN copiat al porta-retalls
  </div>
{/if}

<Section id="venue" title="Finca Vinagrella">
  <div class="max-w-2xl text-center">
    <div class="mt-6 text-gray-600">
      Situada a Llubí, al cor de la Mallorca més autèntica i rústica, Vinagrella
      és un indret amb ànima pròpia, ple d'encant i història.
    </div>
    <div class="mt-4 text-gray-600">
      <p class="font-semibold">Què hi trobaràs a Vinagrella?</p>
      Des de la preciosa façana principal amb la seva torre defensiva fins a la imponent
      alzina mil·lenària, passant pel pati interior, Vinagrella no deixa indiferent
      a ningú. Com una de les possessions més antigues de l'illa amb quatre segles
      de trajectòria.
    </div>
    <a
      href="https://maps.app.goo.gl/jDA63mLF5NvzYaBNA?g_st=iw"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-6 inline-block text-gray-600 underline hover:text-gray-800"
    >
      Com arribar-hi
    </a>
    <enhanced:img
      src="$lib/assets/venue.jpg"
      alt="Finca Vinagrella"
      class="mt-8 w-full max-h-[30vh] object-contain rounded"
    />
  </div>
</Section>

<Section id="transport" title="Transport">
  <div class="max-w-2xl text-center">
    <p class="mt-6 text-gray-600">
      Posarem un autobús a disposició de tots els convidats per anar i tornar de
      la finca, perquè no us hagueu de preocupar de res.
    </p>
    <p class="mt-4 text-gray-600">
      <span class="font-semibold">Necessitaràs el bus?</span>
      <br />
      Per favor, indica'ns si faràs ús del servei d'autobús al formulari de confirmació
      perquè puguem organitzar-ho tot correctament.
    </p>
    <div class="mt-8 flex flex-col items-center gap-1 text-gray-600">
      <div class="text-center">
        <p class="font-semibold">Sóller</p>
        <p class="text-sm">Carrer de Cetre (aturada d'autobús)</p>
      </div>
      <span class="text-gray-300">&#8595;</span>
      <div class="text-center">
        <p class="font-semibold">Son Ferriol, Palma</p>
        <p class="text-sm">Av. del Cid (davant plaça de l'església)</p>
      </div>
      <span class="text-gray-300">&#8595;</span>
      <p class="font-semibold">Finca Vinagrella</p>
    </div>
    <p class="mt-6 text-sm text-gray-400 italic">* Horaris per confirmar</p>
    <enhanced:img
      src="$lib/assets/coco_bus.png"
      alt="Transport"
      class="mt-8 w-2/3 max-h-[30vh] object-contain mx-auto rounded"
    />
  </div>
</Section>

<Section id="rsvp" title="Vens?">
  <div class="max-w-2xl text-center">
    <p class="mt-6 text-gray-600">
      Per a nosaltres és molt important saber si podreu acompanyar-nos en aquest
      dia tan especial. A continuació trobareu un petit formulari on podreu
      confirmar la vostra assistència i facilitar-nos alguns detalls necessaris
      per a l'organització.
    </p>
    <p class="mt-4 text-gray-600">
      Gràcies per ajudar-nos a fer que tot surti perfecte!
    </p>
    <a
      href="/formulari"
      data-sveltekit-reload
      class="mt-8 inline-block px-8 py-3 text-sm tracking-wide text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
    >
      FORMULARI
    </a>
    <enhanced:img
      src="$lib/assets/corazon-02.png"
      alt="Corazón"
      class="mt-8 w-2/3 max-h-[30vh] object-contain mx-auto rounded"
    />
  </div>
</Section>

<style>
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-4px); }
    40% { transform: translateX(4px); }
    60% { transform: translateX(-3px); }
    80% { transform: translateX(3px); }
  }

  .shake {
    animation: shake 0.4s ease-in-out;
  }
</style>
