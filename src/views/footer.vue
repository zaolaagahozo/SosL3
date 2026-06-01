<template>
    <footer class="bg-green-800 text-white px-8 py-10">
        <div class="flex flex-wrap justify-between gap-8">

          <div>

        <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA U RWANDA</h3>
        <p class="text-sm text-green-200">Discover the beauty of land of thousand hills</p>
        </div>
        <!-- Quick Link -->
         <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">quick link</h3>
            <ul class="space y-2 text-sm">
                <li>
                    <RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink>
    
                </li>
                <li>
                    <RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink>
    
                </li>
                <li>
                   <RouterLink to="/about"class="hover:text-yellow-300">About us</RouterLink>
    
    
                
                </li>
                <li>
                    <RouterLink to="/contact"class="hover:text-yellow-300">Contact</RouterLink>
                </li>
            </ul>

         </div>
         <!--Destinations-->
         <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Destinations</h3>
            <ul class="space-y-2 text-sm">
                <li>
                    <RouterLink to="/Kigali"class="hover:text-yellow-300">kigali</RouterLink>
                </li>
                <li>
                    <RouterLink to="/North"class="hover:text-yellow-300">Northern Province</RouterLink>
                </li>
                <li>
                    <RouterLink to="/South" class="hover:text-yellow-300">Southern Province</RouterLink>
                </li>
                <li>
                    <RouterLink to="/Western"class="hover:text-yellow-300">Western Province</RouterLink>
                </li>
                <li>
                    <RouterLink to="/East"class="hover:text-yellow-300">Eastern Province</RouterLink>
                </li>
            </ul>
         </div>
        <!--Contact info-->
            <div>
                <h3 class="text-yellow-300 font-bold text-lg mb-3">Contact Info</h3>
                <ul class="space-y-2 text-sm">
                    <li>Agahozo Babine Zaola</li><br>
                    <li>+250791456810</li><br>
                    <li>Kagugu Kigali Rwanda</li><br>
                </ul>
            
                
            </div>
            <div>
                <!--place for copyright-->
                
            </div>
         </div>
<div class="border-t boreder-green-600mt-8 pt-4">
                  <p class="text-center">© 2025 Visit Rwanda.All rights reserved.</p>
    
</div>

    </footer>
</template>