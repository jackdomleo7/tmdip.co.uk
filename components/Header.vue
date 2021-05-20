<template>
  <header>
    <div class="header">
      <nuxt-link to="/">
        <img src="@/assets/img/TMD-Logo.png" :alt="`${siteconfig.brand_name.full} logo`" />
      </nuxt-link>
      <div>
        <h1>{{ siteconfig.brand_name.full }}</h1>
        <p>{{ $prismic.asText(header.data.subheader) }}</p>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import siteconfig from '@/siteconfig.json'

export default Vue.extend({
  name: 'Header',
  data () {
    return {
      siteconfig
    }
  },
  props: {
    header: { // To be replaced with asyncData in Nuxt 3
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
$header-break: 50em;

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;

  @media (min-width: $header-break) {
    flex-direction: row;
    padding: 1rem 2rem;
  }

  img {
    width: 8rem;

    @media (min-width: $header-break) {
      width: 10rem;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;

    @media (min-width: $header-break) {
      text-align: left;
    }

    > h1 {
      font-size: 1.4rem;
      font-weight: 700;

      @media (min-width: $header-break) {
        font-size: 1.8rem;
      }
    }

    > p {
      font-size: 1rem;
      font-weight: 600;

      @media (min-width: $header-break) {
        font-size: 1.4rem;
      }
    }
  }
}
</style>
