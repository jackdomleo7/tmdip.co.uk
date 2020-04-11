<template>
  <page-content header="Ideas to Reality">
    <p class="home__intro">
      Based in Nottingham, East Midlands, we are ideally located to work nationally across the UK on a wide variety of projects. From building new bespoke houses to HMOs, from shops to offices and pubs to restaurants, we can cover them all. Our fully skilled team provide quality workmanship guaranteed on every project.<br/>
      <strong>For a free consultation, contact the team today.</strong>
    </p>
    <carousel class="home__carousel" :items="carouselItems"></carousel>
    <article class="about">
      <h3 class="about__title">About us</h3>
      <p>
        With over 30 years’ experience, {{ companyName }} has earned its reputation as a client focused company in the UK. We pride ourselves making sure the end result meets the clients’ expectations. Working with a strong team of industry professionals, we have a proven track record in unlocking value in sites and translating client visions into reality.
      </p>
      <p>
        Whether you’re looking to invest in new build and refurbishment schemes, collaborate on bespoke projects, or are an existing retailer with a joint venture idea, {{ companyName }} has the collective skills and experience to translate your ideas.
      </p>
      <p>
        Located centrally in the UK in Nottinghamshire, we are in an ideal location to reach any part of the UK with very little fuss. Only a few miles from Junction 26 of the M1, makes travel and deliveries relatively easy and efficient.
      </p>
      <our-map></our-map>
    </article>
  </page-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Routes } from "@/router";
import { PageContent } from "@/layout";
import { SiteLink, Carousel } from "@/components";
import CompanyInfo from "@/helpers/companyInfo";
import OurMap from "./OurMap.vue";

@Component({
  components: { Carousel, OurMap, PageContent, SiteLink }
})
export default class PageNotFound extends Vue {
  private Routes: Routes = Routes;
  private readonly carouselItems: object[] = [
    {
      image: '/img/item1.jpg',
      caption: 'Item 1'
    },
    {
      image: '/img/item2.jpg',
      caption: 'Item 2'
    },
    {
      image: '/img/item3.jpg',
      caption: 'Item 3'
    }
  ]

  private get path(): string {
    return this.$route.path;
  }

  private get companyName(): string {
    return CompanyInfo.companyName;
  }
}
</script>

<style lang="scss" scoped>
.home {
  &__intro {
    text-align: center;
    line-height: 2;
  }

  &__carousel {
    margin: 2rem 0;
  }
}

.about {
  margin-top: 5rem;

  &__title {
    font-size: 2rem;
  }
}
</style>
