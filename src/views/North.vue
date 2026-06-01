<template>
    <section class="bg-white text-green-800 h-screen w-full mb-12 px-8 py-12">
        <div class="max-w-6xl mx-auto px-6 py-12">
            <div class="text-center mb-10">
                <h1 class="text-4xl font-extrabold">Welcome to Northern Province</h1>
                <p class="mt-4 text-green-700 max-w-2xl mx-auto">
                    Northern Province is one of Rwanda's most beautiful regions, known for itsbreathtaking mountains, rich culture, and famous tourist attractions.It is home to the Volcanoes National Park and offers unforgettableexperiences for nature and adventure lovers.</p>
            </div>
                    
            

    

            <!-- Photo gallery -->
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
                <div class="overflow-hidden rounded-2xl shadow-lg">
                    <img src="../assets/tembera .png" alt="Kigali view" class="w-full h-56 object-cover" />
                </div>
                <div class="overflow-hidden rounded-2xl shadow-lg">
                    <img src="../assets/REBERO.png" alt="City park" class="w-full h-56 object-cover" />
                </div>
                <div class="overflow-hidden rounded-2xl shadow-lg">
                    <img src="../assets/lake.png" alt="Local street" class="w-full h-56 object-cover" />
                </div>
            </div>

            <!-- Highlights -->
            <div class="grid gap-8 lg:grid-cols-3">
                <article class="rounded-3xl border border-green-100 bg-green-50 p-6 shadow-sm">
                    <h3 class="text-xl font-bold text-green-900">Cultural Sites</h3>
                    <p class="mt-3 text-green-700">Relax along the shores of Lake Kivu, enjoy boat rides,
            swimming, and spectacular sunset views</p>
                </article>

                <article class="rounded-3xl border border-green-100 bg-green-50 p-6 shadow-sm">
                    <h3 class="text-xl font-bold text-green-900">Food & Nightlife</h3>
                    <p class="mt-3 text-green-700">Enjoy local Rwandan cuisine, coffee shops, and vibrant nightlife spots across the city center.</p>
                </article>

                <article class="rounded-3xl border border-green-100 bg-green-50 p-6 shadow-sm">
                    <h3 class="text-xl font-bold text-green-900">Scenic Views</h3>
                    <p class="mt-3 text-green-700">Hike up viewpoints and visit parks for panoramic views of Kigali’s rolling hills and skyline.</p>
                </article>
            </div>

            <!-- CTA -->
            <div class="mt-12 text-center">
                <router-link to="/services" class="inline-flex items-center justify-center rounded-full bg-green-800 px-8 py-3 text-white font-semibold shadow-lg hover:bg-green-700">
                    Explore Services & Tours
                </router-link>
            </div>
        </div>

        
    </section>
</template>