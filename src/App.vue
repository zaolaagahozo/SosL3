<script setup>
import navbar from './componets/navbar.vue'
import Footer from './views/footer.vue';
</script>
<template>
  <div>
  <navbar />
  <main>
  <router-view />
  </main>
  <Footer/>
  </div>
</template>