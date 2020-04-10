<template>
  <page-content>
    <carousel :items="carouselItems"></carousel>
  </page-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Routes } from "@/router";
import { PageContent } from "@/layout";
import { SiteLink, Carousel } from "@/components";
import CompanyInfo from "@/helpers/companyInfo";

@Component({
  components: { Carousel, PageContent, SiteLink }
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

</style>
