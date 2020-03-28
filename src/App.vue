<template>
  <div id="app">
    <header class="jumbo">
      <router-link class="jumbo__logo" to="/">
        <img src="./assets/nav-logo.png" alt="TMD logo" />
      </router-link>
      <button class="navbar__toggler" :class="isMobileNavDisplayed ? 'navbar__toggler--fixed' : null" @click="isMobileNavDisplayed = !isMobileNavDisplayed" :title="(isMobileNavDisplayed ? 'Hide' : 'Show') + ' navigation'">
        <span hidden>{{ (isMobileNavDisplayed ? 'Hide' : 'Show') + ' navigation' }}</span>
        <svg class="navbar__toggler-icon">
          <use :xlink:href="'assets/svg-sprite.svg#icon-' + (isMobileNavDisplayed ? 'close' : 'hamburger')"></use>
        </svg>
      </button>
      <div class="jumbo__text">
        <h1 class="jumbo__text--header">{{ companyName }}</h1>
        <h2 class="jumbo__text--sub">Shops. Pubs. Restaurants. Offices. New Builds. HMOs.</h2>
      </div>
    </header>
    <navbar :show-mobile-nav="isMobileNavDisplayed" />
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
  private isMobileNavDisplayed: boolean = false;

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

.navbar__toggler {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 999;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 1rem;

  @media (min-width: 730px) {
    display: none !important;
  }

  &--fixed {
    position: fixed;
  }

  &-icon {
    height: 2rem;
    width: 2rem;
    color: var(--color-grey-50);
  }
}

#app {
  height: 200vh;
}
</style>
