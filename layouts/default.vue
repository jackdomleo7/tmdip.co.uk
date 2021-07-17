<template>
  <div :class="{'w-bottom-nav': isMobile}">
    <t-nav />
    <Nuxt />
    <t-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TFooter, TNav } from '@/components'

export default Vue.extend({
  name: 'DefaultLayout',
  components: { TFooter, TNav },
  data () {
    return {
      isMobile: false
    }
  },
  mounted (): void {
    this.setFooterClass()
    window.addEventListener('resize', this.setFooterClass)
  },
  destroyed (): void {
    window.removeEventListener('resize', this.setFooterClass)
  },
  methods: {
    setFooterClass (): void {
      const navBreak = getComputedStyle(document.querySelector('nav.nav')!).getPropertyValue('--nav-break')
      this.isMobile = window.matchMedia(`(max-width: ${navBreak})`).matches
    }
  }
})
</script>

<style lang="scss" scoped>
.w-bottom-nav {
  padding-bottom: 5rem;
}
</style>
