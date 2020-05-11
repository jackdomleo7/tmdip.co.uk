<template>
  <header class="hero">
    <site-link
      class="hero__logo"
      link="/"
      type="internal"
    >
      <img src="@/static/img/nav-logo.png" alt="TMD logo" />
    </site-link>
    <div class="hero__text">
      <h1 class="hero__text--header">{{ companyName }}</h1>
      <h2 class="hero__text--sub">
        Shops. Pubs. Restaurants. Offices. New Builds. HMOs.
      </h2>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SiteLink from "./SiteLink.vue";
import CompanyInfo from "@/middleware/companyInfo";

@Component({
  components: { SiteLink },
})
export default class Hero extends Vue {
  private get companyName(): string {
    return CompanyInfo.companyName;
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("/img/hero.jpg");
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
