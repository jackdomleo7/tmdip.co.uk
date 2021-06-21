<template>
  <div>
    <t-header :header="header" />
    <main>
      <div class="container">
        <prismic-rich-text class="intro" :field="homepage.data.intro" />
      </div>
    </main>
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
    const homepage = await $prismic.api.getSingle('homepage')
    if (header && homepage) {
      return { header, homepage }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
})
</script>

<style lang="scss" scoped>
.intro {
  text-align: center;
  position: relative;
  max-width: 50rem;
  margin-inline: auto;

  &::before {
    content: '';
    background-image: url('@/assets/sprite/svg/triangle.svg');
    display: block;
    height: 3rem;
    width: 3rem;
    position: absolute;
    top: -20px;
    left: -53px;
  }

  &::after {
    content: '';
    background-image: url('@/assets/sprite/svg/hexagon.svg');
    display: block;
    height: 3rem;
    width: 3rem;
    position: absolute;
    bottom: -20px;
    right: -30px;
  }

  ::v-deep > p {
    position: relative;
    z-index: 0;
    background-color: rgba(255,255,255,0.8);
  }
}
</style>
