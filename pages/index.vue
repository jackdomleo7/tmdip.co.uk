<template>
  <div>
    <t-header :heading="$prismic.asText(homepage.data.page_title)" :bg-image="homepage.data.hero_bg_image.url" />
    <main>
      <section id="about" class="container about">
        <svg-icon name="architecture" />
        <h2><span role="text">About <span translate="no">{{ siteconfig.brand_name.short }}</span></span></h2>
        <prismic-rich-text :field="homepage.data.about" />
        <t-btn tag="nuxt-link" url="/projects" state="secondary">Our work</t-btn>
      </section>
      <section id="promise" class="container--fluid promise" :style="{'--promise-bg-image': `url(${homepage.data.promise_image.url})`}">
        <div class="promise__img">
          <img :src="homepage.data.promise_image.url" :alt="homepage.data.promise_image.alt" />
        </div>
        <div class="promise__info">
          <h2>{{ $prismic.asText(homepage.data.promise_title) }}</h2>
          <prismic-rich-text :field="homepage.data.promise_text" />
          <t-btn tag="nuxt-link" url="#contact" state="primary">Contact</t-btn>
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
      <section id="contact" class="contact">
        <div class="container">
          <h2 class="contact__heading">{{ $prismic.asText(homepage.data.contact_header) }}</h2>
          <p v-if="homepage.data.contact_opener" class="contact__opener">{{ homepage.data.contact_opener }}</p>
          <ul class="contact__cards">
            <li v-for="card in homepage.data.contact_cards" :key="card.heading" class="card">
              <div class="card__icon">
                <svg-icon :name="`${card.icon}-duo`" />
              </div>
              <h3>{{ $prismic.asText(card.heading) }}</h3>
              <a class="card__link" :href="card.icon === 'phone' ? `tel:${siteconfig.tel.country}`: `mailto:${siteconfig.email}`" rel="noreferrer noopener" target="_blank">
                {{ card.icon === 'phone' ? siteconfig.tel.long : siteconfig.email }}
              </a>
              <p>{{ $prismic.asText(card.description) }}</p>
              <a class="card__cta" :href="card.icon === 'phone' ? `tel:${siteconfig.tel.country}` : `mailto:${siteconfig.email}`" rel="noreferrer noopener" target="_blank">
                <span>{{ card.cta }}</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import siteconfig from '@/siteconfig.json'
import { THeader, TBtn } from '@/components'

export default Vue.extend({
  name: 'Home-Index',
  components: { THeader, TBtn },
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
  async asyncData ({ $prismic, error }: any) {
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
@keyframes jumpy-arrow {
  80% {
    transform: translate(0.3rem, -50%);
  }
  0%, 100% {
    transform: translateY(-50%);
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
      grid-template-columns: repeat(2, 1fr);
    }

    h3 {
      font-size: var(--font-size-heading);
    }

    &__list {
      text-align: left;
      list-style-image: url(~assets/sprite/svg/tick.svg);
      list-style-position: inside;
      padding-left: 0;
      font-size: var(--font-size-large);
      display: grid;
      gap: 0.4rem 0.8rem;
      grid-template-columns: repeat(2, 1fr);

      @media (max-width: 20em) {
        grid-template-columns: 1fr;
      }

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
      box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;
    }
  }
}

.contact {
  background-color: var(--color-grey-light);

  &__heading {
    font-size: var(--font-size-subtitle);
    text-align: center;
  }

  &__opener {
    max-width: 40rem;
    margin-inline: auto;
    text-align: center;
  }

  &__cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    padding-left: 0;
    list-style-type: none;
    margin-top: 3rem;

    @media (min-width: 680px) {
      flex-direction: row;
    }

    .card {
      background-color: var(--color-white);
      border-radius: 4px;
      box-shadow: rgba(17, 17, 26, 0.1) 0 4px 16px, rgba(17, 17, 26, 0.05) 0 8px 32px;
      width: 100%;
      height: 16rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: relative;
      padding: 4rem 2rem 1rem 2rem;

      @media (min-width: 680px) {
        width: 19rem;
        height: 16rem;
      }

      @media (min-width: 720px) {
        width: 20rem;
        height: 16rem;
      }

      @media (min-width: 885px) {
        width: 25rem;
        height: 18rem;
      }

      &__icon {
        border-radius: 50%;
        display: grid;
        place-items: center;
        height: 5rem;
        width: 5rem;
        background-color: var(--color-white);
        box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
        padding: 1rem;
        position: absolute;
        top: -1.25rem;
        color: var(--color-orange);
      }

      &__link{
        font-size: var(--font-size-small);
        color: var(--color-black);
        text-decoration: none;

        &:hover,
        &:focus {
          color: var(--color-orange);
        }
      }

      &__cta {
        width: 100%;
        padding: 0.8rem 1rem;
        background-color: var(--color-orange-lighter);
        border-radius: 0 0 4px 4px;
        color: var(--color-black);
        text-decoration: none;
        position: absolute;
        bottom: 0;
        left: 0;
        font-weight: var(--font-weight-medium);

        > span {
          position: relative;

          &::after {
            content: '';
            background-image: url(~assets/sprite/svg/arrow-right.svg);
            background-repeat: no-repeat;
            background-size: cover;
            pointer-events: none;
            display: block;
            height: 1rem;
            width: 1rem;
            position: absolute;
            left: 115%;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        &:hover,
        &:focus {
          span::after {
            animation: jumpy-arrow 0.8s forwards infinite;
          }
        }
      }
    }
  }
}
</style>
