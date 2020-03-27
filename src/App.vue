<template>
  <div id="app">
    <section class="jumbo">
      <router-link class="jumbo__logo" to="/">
        <img src="./assets/nav-logo.png" alt="TMD logo" />
      </router-link>
      <div class="jumbo__text">
        <h1 class="jumbo__text--header">{{ companyName }}</h1>
        <h2 class="jumbo__text--sub">Shops. Pubs. Restaurants. Offices. New Builds. HMOs.</h2>
      </div>
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
export default class App extends Vue {
  private get companyName() {
    return process.env.VUE_APP_NAME;
  }
}
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
  background-position: center;

  &__text {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 80%;
    text-align: center;

    &--header,
    &--sub {
      color: var(--color-grey-50);
      text-shadow: 1px 1px var(--color-grey-900);
    }

    &--header {
      font-size: 1.325rem;

      @media (min-width: 488px) {
        font-size: 2rem;
      }

      @media (min-width: 1400px) {
        font-size: 2.5rem;
      }
    }

    &--sub {
      font-size: 1rem;
      margin-top: 0.75rem;

      @media (min-width: 488px) {
        font-size: 1.4rem;
      }

      @media (min-width: 1400px) {
        font-size: 1.8rem;
      }
    }
  }

  &__logo {
    position: absolute;
    left: 1rem;
    top: 1rem;
    width: 6rem;
  }
}

#app {
  height: 200vh;
}
</style>
