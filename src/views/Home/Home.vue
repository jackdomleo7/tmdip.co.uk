<template>
  <page-content header="We Turn Your Designs into Reality">
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
    <section class="extra">
      <div class="extra__row">
        <site-link type="external" link="https://www.safecontractor.com/">
          <img src="/img/safecontractor.png" alt="Safe Contractor Approved logo" />
          <span hidden>Safe Contractor Approved</span>
        </site-link>
      </div>
      <div class="extra__row">
        <site-link type="internal" :link="{ name: Routes.QualityManagementSystem }">
          <img src="/img/qms9001.png" alt="QMS ISO 9001" />
          <span hidden>QMS ISO 9001</span>
        </site-link>
        <site-link type="internal" :link="{ name: Routes.QualityManagementSystem }">
          <img src="/img/qms14001.png" alt="QMS ISO 14001" />
          <span hidden>QMS ISO 14001</span>
        </site-link>
      </div>
    </section>
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
      image: '/img/carousel/smiler.jpg',
      caption: 'The Smiler - Alton Towers'
    },
    {
      image: '/img//carousel/smokehouse.jpg',
      caption: 'Smokehouse, London'
    },
    {
      image: '/img/carousel/selfridges.jpg',
      caption: 'Selfridges, Birmingham'
    },
    {
      image: '/img/carousel/bauer.jpg',
      caption: 'BAUER - Ice Locker'
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

.extra {
  margin-top: 7rem;

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    margin: 0.5rem 0;

    @media (min-width: 45.625em) {
      flex-direction: row;
    }

    * {
      margin: 0.5rem 0;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
