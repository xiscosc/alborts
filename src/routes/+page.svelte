<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import Section from "$lib/components/Section.svelte";
</script>

<Header />

<Section id="event" title="Esdeveniment">
	<div class="max-w-2xl text-center">
		<p class="mt-6 text-gray-600">
			Ens fa molta il·lusió poder compartir aquest dia amb tots vosaltres. La cerimònia marcarà
			l'inici d'un moment molt especial per a nosaltres, envoltats de la gent que estimam.
		</p>
		<p class="mt-4 text-gray-600">
			Quan arribeu, trobareu un petit refrigeri perquè pugueu refrescar-vos, saludar-vos i començar
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
			Hem cuidat molt l'estètica d'aquest dia tan especial i us demanem, per favor,
			<span class="font-semibold">que no porteu vermell</span>.
		</p>
		<p class="mt-4 text-gray-600">
			També preferim reservar els tons blancs, beix o similars per als protagonistes del dia (els
			homes poden portar camisa blanca sense problema).
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

<Section id="venue" title="Finca Vinagrella">
	<div class="max-w-2xl text-center">
		<p class="mt-6 text-gray-600">
			Situada a Llubí, al cor de la Mallorca més autèntica i rústica, Vinagrella ofereix un espai
			únic i ple d'encant per a la celebració de qualsevol esdeveniment. Amb més de quatre segles
			d'història, només travessar la seva entrada ja permet respirar una atmosfera de calma, màgia i
			tradició que la fa especial.
		</p>
		<p class="mt-4 text-gray-600">
			<span class="font-semibold">Què hi trobaràs a Vinagrella?</span>
			<br />
			Des de la preciosa façana principal amb la seva torre defensiva fins a la imponent alzina
			mil·lenària, passant pel pati interior, Vinagrella no deixa indiferent a ningú. Com una de les
			possessions més antigues de l'illa, conserva intacta la seva essència mallorquina.
		</p>
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
			Posarem un autobús a disposició de tots els convidats per anar i tornar de la finca, perquè no
			us hàgiu de preocupar de res.
		</p>
		<p class="mt-4 text-gray-600">
			<span class="font-semibold">Necessitaràs el bus?</span>
			<br />
			Si us plau, indica'ns si faràs ús del servei d'autobús al formulari de confirmació perquè
			puguem organitzar-ho tot correctament.
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
			Per a nosaltres és molt important saber si podreu acompanyar-nos en aquest dia tan especial. A
			continuació trobareu un petit formulari on podreu confirmar la vostra assistència i
			facilitar-nos alguns detalls necessaris per a l'organització.
		</p>
		<p class="mt-4 text-gray-600">Gràcies per ajudar-nos a fer que tot surti perfecte!</p>
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

<Footer />
