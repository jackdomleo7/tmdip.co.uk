<template>
  <div>
    <t-header :heading="$prismic.asText(projects.data.page_title)" :bg-image="projects.data.hero_bg_image.url" />
    <main>
      <ul class="projects container">
        <li v-for="project in projects.data.projects" :key="project.short_description" class="projects__project">
          <div>
            <img v-if="project.client_logo" :src="project.client_logo.url" :alt="project.client_logo.alt" class="projects__logo" />
            <p v-if="project.client_name">Client: {{ project.client_name }}</p>
            <p v-if="project.short_description">Project: {{ project.short_description }}</p>
          </div>
          <div>
            <prismic-rich-text :field="project.description" />
            <swiper v-if="hasImagesMoreThan(project, 0)" :options="hasImagesMoreThan(project, 1) && swiperOptions" class="swiper">
              <swiper-slide v-if="project.carousel_1.url">
                <img :src="project.carousel_1.url" :alt="project.carousel_1.alt" />
              </swiper-slide>
              <swiper-slide v-if="project.carousel_2.url">
                <img :src="project.carousel_2.url" :alt="project.carousel_2.alt" />
              </swiper-slide>
              <swiper-slide v-if="project.carousel_3.url">
                <img :src="project.carousel_3.url" :alt="project.carousel_3.alt" />
              </swiper-slide>
              <swiper-slide v-if="project.carousel_4.url">
                <img :src="project.carousel_4.url" :alt="project.carousel_4.alt" />
              </swiper-slide>
              <div v-if="hasImagesMoreThan(project, 1)" class="swiper-pagination" slot="pagination"></div>
              <div v-if="hasImagesMoreThan(project, 1)" class="swiper-button-prev" slot="button-prev"></div>
              <div v-if="hasImagesMoreThan(project, 1)" class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import siteconfig from '@/siteconfig.json'
import { THeader } from '@/components'

import { Swiper, SwiperSlide, directive as swiperDirective } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default Vue.extend({
  name: 'Home-Index',
  components: { THeader, Swiper, SwiperSlide },
   directives: {
    swiper: swiperDirective
  },
  head () {
    return {
      title: this.projects.data.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.projects.data.meta_description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.projects.data.meta_description
        }
      ]
    }
  },
  async asyncData ({ $prismic, error }) {
    const projects = await $prismic.api.getSingle('projects')
    if (projects) {
      return { projects }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data () {
    return {
      siteconfig,
      swiperOptions: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        loop: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    hasImagesMoreThan(project: Record<string, any>, toBeMoreThan: 0 | 1): boolean {
      const maxCarouselImages = 4
      let noOfImages = 0

      for (let i = 1; i <= maxCarouselImages; i++) {
        if (project[`carousel_${i}`].url) {
          noOfImages++
        }
      }

      return noOfImages > toBeMoreThan
    }
  }
})
</script>

<style lang="scss" scoped>
.projects {
  list-style-type: none;

  &__project {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 50em;
    margin-inline: auto;

    @media (min-width: 83em) {
      grid-template-columns: repeat(2, 1fr);
      max-width: unset;
    }

    > div {
      padding: 0.5rem;

      &:first-of-type {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        @media (min-width: 83em) {
          align-items: flex-start;
          text-align: left;
        }
      }
    }

    &:not(:last-of-type) {
      border-bottom: 1px solid var(--color-black);
    }
  }

  &__logo {
    max-width: 100%;
    width: 25rem;

    @media (min-width: 83em) {
      max-width: 80%;
      width: 80%;
    }
  }
}

.swiper {
  max-width: 100%;

  &-button-next,
  &-button-prev {
    color: var(--color-black);
  }

  ::v-deep .swiper-pagination-bullet-active {
    background: var(--color-black);
  }

  &-slide img {
    width: 100%;
  }
}
</style>
