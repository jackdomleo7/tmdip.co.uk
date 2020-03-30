<template>
  <div id="app">
    <jumbo />
    <button
      class="navbar__toggler"
      :class="isMobileNavDisplayed ? 'navbar__toggler--fixed' : null"
      @click="isMobileNavDisplayed = !isMobileNavDisplayed"
      :title="(isMobileNavDisplayed ? 'Hide' : 'Show') + ' navigation'"
    >
      <span hidden>{{
        (isMobileNavDisplayed ? "Hide" : "Show") + " navigation"
      }}</span>
      <svg class="navbar__toggler-icon">
        <use
          :xlink:href="
            'assets/svg-sprite.svg#icon-' +
              (isMobileNavDisplayed ? 'close' : 'hamburger')
          "
        ></use>
      </svg>
    </button>
    <navbar :show-mobile-nav="isMobileNavDisplayed" />
    <router-view style="flex: 1;" />
    <footer-bar />
  </div>
</template>

<script lang="ts">
import "normalize.css";
import { Component, Vue } from "vue-property-decorator";
import Jumbo from "@/components/jumbo/Jumbo.vue";
import Navbar from "@/components/Navbar.vue";
import FooterBar from "@/components/FooterBar.vue";

@Component({
  components: { Jumbo, Navbar, FooterBar }
})
export default class App extends Vue {
  private isMobileNavDisplayed = false;

  private get companyName() {
    return process.env.VUE_APP_NAME;
  }
}
</script>

<style lang="scss">
@import "./scss/main";

.navbar__toggler {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 1rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 999;

  @media (min-width: 45.625em) {
    display: none !important;
  }

  &--fixed {
    position: fixed;
  }

  &-icon {
    color: var(--color-grey-50);
    height: 2rem;
    width: 2rem;
  }
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
