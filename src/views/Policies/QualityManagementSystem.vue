<template>
  <page-content header="Quality Management System">
    <article>
      {{ companyNameWithLtd }} is proud to be certified for the ISO 9001 and ISO
      14001.
      <div class="certificates">
        <figure class="certificates__figure">
          <site-link type="file" link="/img/iso9001.jpg" title="View image" class="certificates__link">
            <img src="/img/iso9001.jpg" alt="ISO 9001 certificate" />
          </site-link>
          <figcaption>
            <site-link type="file" link="/assets/iso9001.pdf" title="View certificate">ISO 9001 certificate</site-link>
          </figcaption>
        </figure>
        <figure class="certificates__figure">
          <site-link type="file" link="/img/iso14001.jpg" title="View image" class="certificates__link">
            <img src="/img/iso14001.jpg" alt="ISO 14001 certificate" />
          </site-link>
          <figcaption>
            <site-link type="file" link="/assets/iso14001.pdf" title="View certificate">ISO 14001 certificate</site-link>
          </figcaption>
        </figure>
      </div>
    </article>
  </page-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { PageContent } from "@/layout";
import { SiteLink } from "@/components";
import CompanyInfo from "@/helpers/companyInfo";

@Component({
  components: { PageContent, SiteLink }
})
export default class QualityManagementSystem extends Vue {
  private get companyNameWithLtd(): string {
    return CompanyInfo.companyNameWithLtd;
  }
}
</script>

<style lang="scss" scoped>
.certificates {
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 45.625em) {
    flex-direction: row;

    .certificates__figure {
      margin: 2rem 3rem;
    }
  }

  &__figure {
    margin: 1rem 1.5rem;
  }

  &__link {
    display: block;
  }
}
</style>
