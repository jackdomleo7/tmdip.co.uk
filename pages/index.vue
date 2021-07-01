<template>
  <div>
    <t-nav />
    <main>
      <div class="container">
        <ul class="intro">
          <li v-for="intro in homepage.data.intro" :key="intro.text">
            <prismic-rich-text class="intro__text" :field="intro.text" />
            <img :src="intro.image.url" :alt="intro.image.alt" />
          </li>
        </ul>
      </div>
      <div class="container what-we-do">
        <h2>What we do</h2>
        <ul>
          <li v-for="(item, index) in homepage.data.what_we_do" :key="item.name" :aria-setsize="homepage.data.what_we_do.length" :aria-posinset="index + 1">
            <svg-icon :name="item.icon" />
            {{ item.name }}
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TNav } from '@/components'

export default Vue.extend({
  name: 'Home-Index',
  components: { TNav },
  head () {
    const description = 'Experts in interior fit-outs with over 30 years\' experience available all across the East Midlands, UK. We provide a range of services to meet all your needs.'

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
  padding-left: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  li {
    display: flex;
    align-items: center;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }

  &__text {
    ::v-deep p {
      background-color: var(---color-white);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      padding: 1.5rem;
      font-size: 1.4rem;
    }
  }

  img {
    min-width: 60%;
    max-width: 60%;
  }
}

.what-we-do {
  margin-top: 4rem;
  max-width: 70rem;

  ul {
    list-style-type: none;
    padding-left: 0;
    display: grid;
    justify-content: center;
    grid-template: auto / repeat(2, 1fr);
    gap: 2rem;

    @media (min-width: 630px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-size: 1.2rem;
  }

  svg {
    height: 6rem;
    width: 6rem;
  }
}
</style>
