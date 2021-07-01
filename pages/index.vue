<template>
  <div>
    <t-nav />
    <header class="hero" :style="{'--hero-bg-image': `url(${homepage.data.hero_bg_image.url})`}">
      <div class="hero__inner">
        <h1>{{ $prismic.asText(homepage.data.page_title) || siteconfig.brand_name.full }}</h1>
      </div>
      <div class="hero__curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
        </svg>
      </div>
    </header>
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
import siteconfig from '@/siteconfig.json'

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
    const homepage = await $prismic.api.getSingle('homepage')
    if (homepage) {
      return { homepage }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
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
  }

  h1 {
    margin: 0;
    color: var(--color-white);
    text-shadow: 1px 1px var(--color-black);
    text-align: center;
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
