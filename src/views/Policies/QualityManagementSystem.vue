<template>
  <page-content header="Quality Management System">
    <article>
      {{ companyNameWithLtd }} is proud to be certified for the ISO 9001 and ISO
      14001.
      <div class="certificates">
        <figure v-for="certificate in QmsCertificates" :key="certificate.type" class="certificates__figure">
          <site-link type="file" :link="'/img/iso' + certificate.type + '.jpg'" title="View image" class="certificates__link">
            <img :src="'/img/iso' + certificate.type + '.jpg'" :alt="'ISO ' + certificate.type + ' certificate'" />
          </site-link>
          <figcaption>
            <site-link type="file" :link="'/assets/iso' + certificate.type + '.pdf'" title="View certificate">ISO {{ certificate.type }} certificate</site-link>
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

interface QmsCertificate {
  type: number;
}

@Component({
  components: { PageContent, SiteLink }
})
export default class QualityManagementSystem extends Vue {
  private QmsCertificates: QmsCertificate[] = [
    {
      type: 9001,
    },
    {
      type: 14001,
    }
  ]

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
