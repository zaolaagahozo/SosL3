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
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
            <router-link to="/About" class="inline-flex w-full items-center justify-center rounded-full bg-green-800 px-4 py-3 text-white shadow-lg transition hover:bg-green-700 sm:w-auto">
              EXPLORE US
            </router-link>
            </div>
  </div>
</section>


</template>