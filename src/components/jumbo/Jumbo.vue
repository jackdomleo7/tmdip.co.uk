<template>
  <header class="jumbo">
    <router-link class="jumbo__logo" to="/">
      <img src="@/assets/nav-logo.png" alt="TMD logo" />
    </router-link>
    <div class="jumbo__text">
      <h1 class="jumbo__text--header">{{ companyName }}</h1>
      <h2 class="jumbo__text--sub">
        Shops. Pubs. Restaurants. Offices. New Builds. HMOs.
      </h2>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Jumbo extends Vue {
  private get companyName() {
    return process.env.VUE_APP_NAME;
  }
}
</script>

<style lang="scss" scoped>
.jumbo {
  background-image: url("./jumbo.jpg");
  background-position: center;
  background-size: cover;
  height: 65vh;
  max-height: 25rem;
  min-height: 16rem;
  overflow: hidden;
  position: relative;
  width: 100%;

  &__text {
    position: absolute;
    right: 50%;
    text-align: center;
    top: 50%;
    transform: translate(50%, -50%);
    width: 80%;

    &--header,
    &--sub {
      color: var(--color-grey-50);
      text-shadow: 1px 1px var(--color-grey-900);
    }

    &--header {
      font-size: 1.325rem;

      @media (min-width: 30.5em) {
        font-size: 2rem;
      }

      @media (min-width: 87.5em) {
        font-size: 2.5rem;
      }
    }

    &--sub {
      font-size: 1rem;
      margin-top: 0.75rem;

      @media (min-width: 30.5em) {
        font-size: 1.4rem;
      }

      @media (min-width: 87.5em) {
        font-size: 1.8rem;
      }
    }
  }

  &__logo {
    left: 1rem;
    position: absolute;
    top: 1rem;
    width: 6rem;
  }
}
</style>
