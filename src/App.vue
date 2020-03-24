<template>
  <div id="app">
    <div class="jumbo">
      <img class="jumbo__image" src="./assets/jumbo.jpg" alt="Jumbo image" />
      <h1 class="jumbo__text">Shops. Pubs. Restaurants. Offices. New Builds. HMOs.</h1>
    </div>
    <navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import "normalize.css";
import { Component, Prop, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";

@Component({
  components: { Navbar },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./scss/main";

.jumbo {
  width: 100%;
  height: 65vh;
  overflow: hidden;
  position: relative;

  &__image {
    position: relative;
    top: -50%;
    width: 100%;
  }

  &__text {
    color: #fff;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    text-shadow: 1px 1px #000;
  }
}

#app {
  height: 200vh;
}
</style>
