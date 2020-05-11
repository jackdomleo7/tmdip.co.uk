<template>
  <div class="navigation">
    <button
      class="navbar__toggler"
      :class="isMobileNavDisplayed ? 'navbar__toggler--fixed' : null"
      @click="isMobileNavDisplayed = !isMobileNavDisplayed"
      :title="(isMobileNavDisplayed ? 'Hide' : 'Show') + ' navigation'"
    >
      <span hidden>{{
        (isMobileNavDisplayed ? "Hide" : "Show") + " navigation"
      }}</span>
      <svg-icon class="navbar__toggler-icon" :name="isMobileNavDisplayed ? 'close' : 'hamburger'" />
    </button>
    <navbar
      :show-mobile-nav="isMobileNavDisplayed"
      @nav-item-click="isMobileNavDisplayed = false"
    />
  </div>
</template>

<script lang="ts">
import "normalize.css";
import { Component, Vue } from "vue-property-decorator";
import Navbar from "./Navbar.vue";

@Component({
  components: { Navbar },
})
export default class Navigation extends Vue {
  private isMobileNavDisplayed = false;
}
</script>

<style lang="scss" scoped>
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

.navigation {
  @media (min-width: 45.625em) {
    position: sticky;
    top: 0;
    z-index: 1001;
  }
}
</style>
