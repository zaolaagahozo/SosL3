
<template>
    <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-bet">
    <img src="../assets/image/tour.png" alt="logo" class="h-8 w-8 mr-2">
    <span class="text-xl font-bold"></span>


    <ul class="flex gap-8 text-sm font-medium w-full justify-end">
    <li><router-link to="/" class="hover:text-yellow-400">Home</router-link></li>
    <li><router-link to="/about" class="hover:text-yellow-400">About us</router-link></li>


    <li class="relative group">
    <a href="#" class="hover:text-yellow-300">Gallery<span></span></a>
    <ul class="invisible group-hover:visible opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
     <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">photos</a></li>
     <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">video</a></li>
    </ul>
</li>
  <li class="relative group">
    <a href="#" class="hover:text-yellow-300">Destination<span></span></a>
    <ul class="invisible group-hover:visible opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
        
        <li><a href="/North"class="block px-4 py-2 hover:bg-green-200 text-green-900">Nothern province</a></li>
     <li><a href="/South" class="block px-4 py-2 hover:bg-green-200 text-green-900">Souther province</a></li>
     <li><a href="/Western" class="block px-4 py-2 hover:bg-green-200 text-green-900">Western province</a></li>   
     <li><a href="/East" class="block px-4 py-2 hover:bg-green-200 text-green-900">Eastern province</a></li>
     <li><a href="/Kigali" class="block px-4 py-2 hover:bg-green-200 text-green-900">Kigali city</a></li>
    </ul>
</li>

    <li><a href="#" class="hover:text-yellow-400">Contact</a></li>

    
    

    </ul>

</nav>
    </template>
    
    
