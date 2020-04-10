<template>
  <page-content>
    
  </page-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Routes } from "@/router";
import { PageContent } from "@/layout";
import { SiteLink } from "@/components";
import CompanyInfo from "@/helpers/companyInfo";

@Component({
  components: { PageContent, SiteLink }
})
export default class PageNotFound extends Vue {
  private Routes: Routes = Routes;

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
