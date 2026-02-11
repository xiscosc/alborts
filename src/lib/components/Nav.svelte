<script lang="ts">
  let open = $state(false);
</script>

<svelte:window onclick={() => (open = false)} />

<nav
  class="fixed top-0 left-0 right-0 z-50 md:fixed md:top-6 md:left-1/2 md:-translate-x-1/2 md:right-auto
		   bg-white/80 backdrop-blur-md shadow-sm
		   md:rounded-full md:px-2 md:py-1 md:shadow-lg"
>
  <ul
    class="flex items-center justify-center gap-1 px-2 py-2 md:gap-2 md:px-4 md:py-2"
  >
    <li>
      <a
        href="/#home"
        class="block px-3 py-1.5 text-xs md:text-sm font-medium text-gray-700
               rounded-full transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        Inici
      </a>
    </li>
    <li class="relative">
      <button
        type="button"
        onclick={(e: MouseEvent) => {
          e.stopPropagation();
          open = !open;
        }}
        class="block px-3 py-1.5 text-xs md:text-sm font-medium text-gray-700
               rounded-full transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        Informació
      </button>
      {#if open}
        <div
          class="absolute left-1/2 -translate-x-1/2 mt-2 bg-white/90 backdrop-blur-md rounded-xl shadow-lg py-1 min-w-max"
          role="menu"
          onclick={(e: MouseEvent) => e.stopPropagation()}
        >
          <a
            href="/#event"
            onclick={() => (open = false)}
            class="block px-5 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Esdeveniment
          </a>
          <a
            href="/#dresscode"
            onclick={() => (open = false)}
            class="block px-5 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Codi de vestimenta
          </a>
        </div>
      {/if}
    </li>
    <li>
      <a
        href="/#venue"
        class="block px-3 py-1.5 text-xs md:text-sm font-medium text-gray-700
               rounded-full transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        Lloc
      </a>
    </li>
    <li>
      <a
        href="/#transport"
        class="block px-3 py-1.5 text-xs md:text-sm font-medium text-gray-700
               rounded-full transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        Transport
      </a>
    </li>
    <li>
      <a
        href="/#rsvp"
        class="block px-3 py-1.5 text-xs md:text-sm font-medium text-gray-700
               rounded-full transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        Vens?
      </a>
    </li>
  </ul>
</nav>
