<template>
  <div id="app">
    <section class="jumbo">
      <h1 class="jumbo__text">Shops. Pubs. Restaurants. Offices. New Builds. HMOs.</h1>
    </section>
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
  max-height: 25rem;
  overflow: hidden;
  position: relative;
  background-image: url("./assets/jumbo.jpg");
  background-size: cover;

  &__text {
    color: var(--color-grey-50);
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    text-shadow: 1px 1px var(--color-grey-900);
    width: 80%;
    text-align: center
  }
}

#app {
  height: 200vh;
}
</style>
