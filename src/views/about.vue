<template>
  <section class="bg-white text-green-900">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div class="space-y-6">
          <span class="inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-800">
            Discover Rwanda
          </span>
          <h1 class="text-4xl font-extrabold sm:text-5xl">Welcome to Rwanda — the land of a thousand hills</h1>
          <p class="text-lg leading-8 text-green-700">
            Explore Rwanda’s rich culture, breathtaking landscapes, and unforgettable wildlife experiences. From the vibrant streets of Kigali to the misty forests of Volcanoes National Park, every journey here is a story.
          </p>
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
            <router-link to="/services" class="inline-flex w-full items-center justify-center rounded-full bg-green-800 px-6 py-3 text-white shadow-lg transition hover:bg-green-700 sm:w-auto">
              use our services
            </router-link>
            <router-link to="/contact" class="inline-flex w-full items-center justify-center rounded-full border border-green-800 px-6 py-3 text-green-800 transition hover:bg-green-50 sm:w-auto">
              Contact us
            </router-link>
          </div>
        </div>

        <div class="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
          <img src="../assets/Rwanda.jfif" alt="Rwanda landscape" class="h-96 w-full object-cover sm:h-[32rem]" />
        </div>
      </div>

      <div class="mt-16 grid gap-8 lg:grid-cols-3">
        <article class="rounded-3xl border border-green-100 bg-green-50 p-8 shadow-sm">
          <h2 class="text-xl font-bold text-green-900">Culture & Heritage</h2>
          <p class="mt-4 text-green-700 leading-7">
            Experience warm hospitality, traditional music, dance, and local crafts in villages and city markets across Rwanda.
          </p>
        </article>

        <article class="rounded-3xl border border-green-100 bg-green-50 p-8 shadow-sm">
          <h2 class="text-xl font-bold text-green-900">Wildlife & Nature</h2>
          <p class="mt-4 text-green-700 leading-7">
            Track mountain gorillas, spot golden monkeys, and explore pristine forests, lakes, and rolling hills.
          </p>
        </article>

        <article class="rounded-3xl border border-green-100 bg-green-50 p-8 shadow-sm">
          <h2 class="text-xl font-bold text-green-900">Adventure & Relaxation</h2>
          <p class="mt-4 text-green-700 leading-7">
            From hiking to lake retreats, Rwanda offers active adventures and peaceful escapes in equal measure.
          </p>
        </article>
      </div>

      <div class="mt-16 rounded-3xl bg-green-900 p-10 text-white shadow-2xl">
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="space-y-3">
            <p class="text-sm uppercase tracking-[0.24em] text-green-300">Quick Facts</p>
            <p class="text-4xl font-bold">26,338 km²</p>
            <p class="text-green-200">Land area of Rwanda</p>
          </div>

          <div class="space-y-3">
            <p class="text-sm uppercase tracking-[0.24em] text-green-300">Highlights</p>
            <p class="text-4xl font-bold">12</p>
            <p class="text-green-200">National parks and reserves</p>
          </div>

          <div class="space-y-3">
            <p class="text-sm uppercase tracking-[0.24em] text-green-300">Visitors</p>
            <p class="text-4xl font-bold">7+ million</p>
            <p class="text-green-200">Tourism growth and welcoming people</p>
          </div>
        </div>
      </div>

      <div class="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 class="text-3xl font-bold text-green-900">Why visit Rwanda?</h2>
          <p class="mt-5 text-green-700 leading-8">
            Rwanda is modern, safe, and easy to explore. Its clean cities, scenic hikes, and unique wildlife make it a top destination for cultural travelers and nature lovers.
          </p>
        </div>

        <div class="space-y-5 rounded-3xl border border-green-100 bg-green-50 p-8">
          <div>
            <h3 class="font-semibold text-green-900">Easy travel planning</h3>
            <p class="mt-2 text-green-700 leading-7">Well-connected roads, service providers, and a friendly tourism industry make planning your stay simple.</p>
          </div>
          <div>
            <h3 class="font-semibold text-green-900">Unique wildlife encounters</h3>
            <p class="mt-2 text-green-700 leading-7">Gorilla trekking, birdwatching, and national park safaris are unforgettable experiences.</p>
          </div>
          <div>
            <h3 class="font-semibold text-green-900">Cultural discovery</h3>
            <p class="mt-2 text-green-700 leading-7">From local cuisine to historic memorials, Rwanda connects visitors with its inspiring story.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>