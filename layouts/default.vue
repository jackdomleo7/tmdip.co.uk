<template>
  <div :class="{'w-bottom-nav': isMobile}">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
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
