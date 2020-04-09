<template>
  <page-content header="Quality Management System">
    <article>
      {{ companyNameWithLtd }} is proud to be certified for the ISO 9001 and ISO 14001.
      <div class="certificates">
        <figure>
          <img src="@/assets/iso9001.jpg" alt="ISO 9001 certificate" />
          <figcaption>
            ISO 9001
          </figcaption>
        </figure>
        <figure>
          <img src="@/assets/iso14001.jpg" alt="ISO 14001 certificate" />
          <figcaption>
            ISO 14001
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
  }
}
</style>
