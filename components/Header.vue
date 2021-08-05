<template>
  <header class="hero" :style="{'--hero-bg-image': `url(${bgImage})`}">
    <div class="hero__inner">
      <h1 :translate="!heading ? 'no' : undefined">{{ heading || siteconfig.brand_name.full }}</h1>
    </div>
    <div class="hero__curve">
      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120"><defs/><path d="M600 112.77C268.63 112.77 0 65.52 0 7.23V120h1200V7.23c0 58.29-268.63 105.54-600 105.54z" class="shape-fill"/></svg>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import siteconfig from '@/siteconfig.json'

export default Vue.extend({
  name: 'Header',
  props: {
    heading: {
      type: String,
      required: true
    },
    bgImage: {
      type: String,
      default: undefined
    }
  },
  data () {
    return {
      siteconfig
    }
  }
})
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 50vh;
  min-height: 20rem;
  max-height: 33rem;
  display: grid;
  place-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: brightness(0.5);
    background-color: var(--color-white);
    background-image: var(--hero-bg-image);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  &__inner {
    position: relative;
    padding-inline: 0.5rem;
  }

  h1 {
    margin: 0;
    color: var(--color-white);
    text-shadow: 1px 1px var(--color-black);
    text-align: center;
    font-size: var(--font-size-title);
  }

  &__curve {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 10vmin;
    }

    .shape-fill {
      fill: var(--color-white);
    }
  }
}
</style>
