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
      <section id="about" class="container about">
        <svg-icon name="architecture" />
        <h2>About {{ siteconfig.brand_name.short }}</h2>
        <prismic-rich-text :field="homepage.data.about" />
        <nuxt-link to="/projects" class="btn btn--secondary">Our work</nuxt-link>
      </section>
      <section id="promise" class="container--fluid promise" :style="{'--promise-bg-image': `url(${homepage.data.promise_image.url})`}">
        <div class="promise__img">
          <img :src="homepage.data.promise_image.url" :alt="homepage.data.promise_image.alt" />
        </div>
        <div class="promise__info">
          <h2>{{ $prismic.asText(homepage.data.promise_title) }}</h2>
          <prismic-rich-text :field="homepage.data.promise_text" />
          <a href="/contact" class="btn btn--primary">Contact</a>
        </div>
      </section>
      <section id="services" class="container services">
        <h2>Our Services</h2>
        <ul class="services__main">
          <li v-for="service in homepage.data.services" :key="service.service_name">
            <div class="services__icon">
              <svg-icon :name="service.service_icon" />
            </div>
            <div>
              <p class="services__heading">{{ service.service_name }}</p>
              <prismic-rich-text :field="service.service_description" />
            </div>
          </li>
        </ul>
        <div class="what-we-do">
          <div>
            <h3>What we do for you</h3>
            <ul class="what-we-do__list">
              <li v-for="subservice in homepage.data.what_we_do" :key="subservice.subservice_name">
                {{ subservice.subservice_name }}
              </li>
            </ul>
          </div>
          <div>
            <img :src="homepage.data.what_we_do_img.url" :alt="homepage.data.what_we_do_img.alt" />
          </div>
        </div>
      </section>
    </main>
    <t-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TNav, TFooter } from '@/components'
import siteconfig from '@/siteconfig.json'

export default Vue.extend({
  name: 'Home-Index',
  components: { TNav, TFooter },
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

.about {
  text-align: center;

  svg {
    height: 4rem;
  }

  h2 {
    font-size: var(--font-size-subtitle);
  }

  a {
    margin-top: 2rem;
  }
}

.promise {
  display: grid;
  grid-template-columns: 1fr;
  background-color: var(--color-grey-light);
  background-image: var(--promise-bg-image);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--color-black);
  padding: 1rem;

  @media (min-width: 83em) {
    grid-template-columns: repeat(2, 1fr);
    background-image: none;
    padding: 0;
  }

  &__img {
    display: none;

    @media (min-width: 83em) {
      display: grid;
      place-items: center;
    }
  }

  &__info {
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    max-width: 45rem;
    margin-inline: auto;
    background-color: rgba(255, 255, 255, 0.7);

    @media (min-width: 83em) {
      padding-block: 4rem;
      background-color: transparent;
    }

    h2 {
      font-size: var(--font-size-subtitle);
      margin: 0;
    }
  }
}

.services {
  text-align: center;

  h2 {
    font-size: var(--font-size-subtitle);
    margin-bottom: 3rem;
  }

  &__main {
    padding-left: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;

    @media (min-width: 45em) {
      grid-template-columns: repeat(2, 1fr);
    }

    li {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      text-align: left;

      .services__heading {
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-large);
        margin-top: 0;
      }
    }
  }

  &__icon {
    border-radius: 1rem;
    background-color: var(--color-orange);
    color: var(--color-white);
    min-height: 4.5rem;
    height: 4.5rem;
    min-width: 4.5rem;
    width: 4.5rem;
    padding: 0.5rem;
  }

  .what-we-do {
    margin-top: 2rem;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 1rem;

    @media (min-width: 45em) {
      position: relative;
      top: -50px;
      grid-template-columns: repeat(2, 1fr);

      img {
        position: relative;
        top: -130px;
      }
    }

    h3 {
      font-size: var(--font-size-heading);
    }

    &__list {
      text-align: left;
      list-style-image: url(~assets/sprite/svg/tick.svg);
      font-size: var(--font-size-large);
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      li {
        &::marker {
          font-size: 2.2rem;
          color: var(--color-orange);
        }
      }
    }

    img {
      border-radius: 2rem;
      border: 6px solid var(--color-white);
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
  }
}

.btn {
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-body);
  letter-spacing: 0.8px;
  color: inherit;
  user-select: none;

  &--primary {
    border-radius: 3rem;
    background-color: var(--color-orange);
    color: var(--color-white);
    padding: 0.8rem 1.2rem;
  }

  &--secondary {
    border: 1px solid var(--color-grey);
    padding: 0.8rem 1.2rem;
    color: var(--color-black);
  }
}
</style>
