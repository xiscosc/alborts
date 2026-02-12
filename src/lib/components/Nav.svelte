<script lang="ts">
  import { goto } from "$app/navigation";

  async function scrollTo(e: MouseEvent) {
    const anchor = e.currentTarget as HTMLAnchorElement;
    const id = anchor.hash.slice(1);
    const target = document.getElementById(id);

    e.preventDefault();
    document.querySelector("nav details")?.removeAttribute("open");

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      await goto("/", { noScroll: true });
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
    }
  }
</script>

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
        onclick={scrollTo}
        class="block px-3 py-1.5 text-xs md:text-sm font-medium text-gray-700
               rounded-full transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        Inici
      </a>
    </li>
    <li class="relative">
      <details>
        <summary
          class="block px-3 py-1.5 text-xs md:text-sm font-medium text-gray-700
                 rounded-full transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        >
          Informació
        </summary>
        <div
          class="absolute left-1/2 -translate-x-1/2 mt-2 bg-white/90 backdrop-blur-md rounded-xl shadow-lg py-1 min-w-max"
          role="menu"
        >
          <a
            href="/#event"
            onclick={scrollTo}
            class="block px-5 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Esdeveniment
          </a>
          <a
            href="/#dresscode"
            onclick={scrollTo}
            class="block px-5 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Codi de vestimenta
          </a>
        </div>
      </details>
    </li>
    <li>
      <a
        href="/#venue"
        onclick={scrollTo}
        class="block px-3 py-1.5 text-xs md:text-sm font-medium text-gray-700
               rounded-full transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        Lloc
      </a>
    </li>
    <li>
      <a
        href="/#transport"
        onclick={scrollTo}
        class="block px-3 py-1.5 text-xs md:text-sm font-medium text-gray-700
               rounded-full transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        Transport
      </a>
    </li>
    <li>
      <a
        href="/#rsvp"
        onclick={scrollTo}
        class="block px-3 py-1.5 text-xs md:text-sm font-medium text-gray-700
               rounded-full transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        Vens?
      </a>
    </li>
  </ul>
</nav>
