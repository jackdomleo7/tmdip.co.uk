<template>
  <div id="app">
    <div class="jumbo"></div>
    <navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import "normalize.css";

@Component({
  components: { Navbar },
})
export default class App extends Vue {}
</script>

<style lang="scss">
.jumbo {
  width: 100%;
  height: 10rem;
  background-color: black;
}

#app {
  height: 200vh;
}
</style>
