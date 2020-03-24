<template>
  <header class="navbar">
    
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  background-color: grey;
  height: 3rem;
  position: sticky;
  top: 0;
}
</style>
