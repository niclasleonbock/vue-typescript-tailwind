<template>
  <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'my-button',

    methods: {
      onClick () : void {
        this.$emit('click')
      }
    }
  })
</script>
