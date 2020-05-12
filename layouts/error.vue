<template>
  <page-template>
    <div class="not-found">
      <h3 class="not-found__header">{{ error.statusCode === 404 ? '404 | Page Not Found' : 'An Error Occured' }}</h3>
      <p>
        Please use our navigation or go to our
        <site-link type="internal" link="/"
          >Home page</site-link
        >
        and try again.
      </p>
    </div>
  </page-template>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { SiteLink, PageTemplate } from "@/components";
import CompanyInfo from "@/middleware/companyInfo";

@Component({
  components: { PageTemplate, SiteLink },
  head () {
    return {
      title: 'Error'
    };
  }
})
export default class Error extends Vue {
  @Prop() private readonly error!: string;

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
