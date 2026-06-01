<script setup></script>
<template>
<!--this is home page-->
<section class="relative h-screen bg-cover bg-center text-white"
  style="background-image:url('/src/assets/tembera .png');"
>
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
    <h1 class="text-4xl font-bold">welcome to kigali Rwanda</h1>
    <div class="mt-8 max-w-xl rounded-3xl border border-green/20 bg-light green/10 px-6 py-5 drop-blur-sm">
      <p class="text-sm leading-6 text-white/90">
        Discover Kigali’s vibrant culture, scenic views, and welcoming hospitality. Start your Rwanda journey with a stroll through city markets, national parks, and historic landmarks.
      </p>
    </div>
    <div class="mt-16 grid gap-8 lg:grid-cols-3">
        <article class="rounded-3xl border border-green-100 bg-green-50 overflow-hidden shadow-sm hover:shadow-md transition">
          <img src="../assets/Rwanda.jfif" alt="Culture & Heritage" class="w-full h-48 object-cover" />
          <div class="p-8">
            <h2 class="text-xl font-bold text-green-900">Culture & Heritage</h2>
            <p class="mt-4 text-green-700 leading-7">
              Experience warm hospitality, traditional music, dance, and local crafts in villages and city markets across Rwanda.
            </p>
          </div>
        </article>

        <article class="rounded-3xl border border-green-100 bg-green-50 overflow-hidden shadow-sm hover:shadow-md transition">
          <img src="../assets/lake.png" alt="Wildlife & Nature" class="w-full h-48 object-cover" />
          <div class="p-8">
            <h2 class="text-xl font-bold text-green-900">Wildlife & Nature</h2>
            <p class="mt-4 text-green-700 leading-7">
              Track mountain gorillas, spot golden monkeys, and explore pristine forests, lakes, and rolling hills.
            </p>
          </div>
        </article>

        <article class="rounded-3xl border border-green-100 bg-green-50 overflow-hidden shadow-sm hover:shadow-md transition">
          <img src="../assets/6.png" alt="Adventure & Relaxation" class="w-full h-48 object-cover" />
          <div class="p-8">
            <h2 class="text-xl font-bold text-green-900">Adventure & Relaxation</h2>
            <p class="mt-4 text-green-700 leading-7">
              From hiking to lake retreats, Rwanda offers active adventures and peaceful escapes in equal measure.
            </p>
          </div>
        </article>
      </div>
  </div>
</section>


</template>