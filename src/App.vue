<template>
  <div id="app">
    <header class="m-0 h-14 bg-grey-darkest text-white pl-6 pr-6">
      <span class="block relative text-lg pt-4">Vue.js PWA</span>
    </header>
    <main class="text-center mt-8">
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'App'
  }
</script>

<style src="@/main.scss" lang="scss"></style>