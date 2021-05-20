<template>
  <div>
    <t-header :header="header" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { THeader } from '@/components'

export default Vue.extend({
  name: 'Home-Index',
  components: { THeader },
  async asyncData ({ $prismic, error }) {
    const header = await $prismic.api.getSingle('header')
    if (header) {
      return { header }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
