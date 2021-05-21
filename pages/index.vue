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
  head () {
    const description = 'Experts in interior fit-outs with over 30 years\' experience available all across the UK. We provide a range of services to meet all your needs.'

    return {
      title: 'Shop-fitting, Interior Fit-outs, Timber Homes',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: description
        }
      ]
    }
  },
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
