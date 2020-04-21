<template>
  <page-content>
    <div class="not-found">
      <h3 class="not-found__header">404 | Page Not Found</h3>
      <p>
        We're sorry but "<em>{{ path }}</em
        >" could not be found.
      </p>
      <p>
        Please use our navigation or go to our
        <site-link type="internal" :link="{ name: Routes.Home }"
          >Home page</site-link
        >
        and try again.
      </p>
      <p>
        If this keeps happening, please contact
        <site-link
          type="email"
          :link="companyEmail + '?subject=Cannot find website URL - ' + path"
          >{{ companyEmail }}</site-link
        >.
      </p>
    </div>
  </page-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Routes } from "@/router";
import { PageContent } from "@/layout";
import { SiteLink } from "@/components";
import CompanyInfo from "@/helpers/companyInfo";

@Component({
  components: { PageContent, SiteLink },
})
export default class PageNotFound extends Vue {
  private Routes: Routes = Routes;

  private get path(): string {
    return this.$route.path;
  }

  private get companyEmail(): string {
    return CompanyInfo.companyEmail;
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  text-align: center;

  &__header {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
}
</style>
