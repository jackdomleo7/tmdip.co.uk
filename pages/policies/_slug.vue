<template>
  <div>
    <t-header class="hero" :heading="$prismic.asText(policyPage.data.policy_header)" :bg-image="policyPage.data.policy_header_bg_image.url" />
    <main class="container">
      <prismic-rich-text :field="policyPage.data.policy_text" />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { THeader } from '@/components'

export default Vue.extend({
  name: 'PolicySlug',
  components: { THeader },
  head () {
    return {
      // @ts-ignore
      title: this.policyPage.data.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          // @ts-ignore
          content: this.policyPage.data.meta_description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          // @ts-ignore
          content: this.policyPage.data.meta_description
        }
      ]
    }
  },
  async asyncData({ $prismic, params, error }: any) {
    const policyPage = await $prismic.api.getByUID('policy', params.slug)

    if (policyPage) {
      return { policyPage }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
})
</script>

<style lang="scss" scoped>
::v-deep ol,
::v-deep ul {
  li {
    margin-block: 0.8rem;
  }
}
</style>
