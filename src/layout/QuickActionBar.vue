<template>
  <section class="qab">
    <site-link class="qab__link" type="email" :link="companyEmail" :title="'Email us today at ' + companyEmail">
      <icon class="qab__icon qab__icon--email" icon="email" />
      <span hidden>Email us today at {{ companyEmail }}</span>
    </site-link>
    <site-link class="qab__link" type="tel" :link="companyTelNumber.tel" :title="'Call us today ' + companyTelNumber.telPretty">
      <icon class="qab__icon qab__icon--tel" icon="phone" />
      <span hidden>Call us today on {{ companyTelNumber.telPretty }}</span>
    </site-link>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Icon, SiteLink } from "@/components";
import CompanyInfo, { TelNumber } from "@/helpers/companyInfo";

@Component({
  components: { Icon, SiteLink }
})
export default class QuickActionBar extends Vue {
  private get companyTelNumber(): TelNumber {
    return CompanyInfo.companyTelNumber;
  }

  private get companyEmail(): string {
    return CompanyInfo.companyEmail;
  }
}
</script>

<style lang="scss" scoped>
  .qab {
    width: 100vw;
    height: 3rem;
    background-color: var(--color-grey-75);
    position: sticky;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    box-shadow: var(--color-grey-500) 0 -0.25rem 0.5rem 0;

    &__link {
      height: 100%;
      width: 50%;
      text-align: center;
    }

    &__icon {
      width: 2rem;

      &--email {
        color: var(--color-red);
      }

      &--tel {
        color: var(--color-green);
      }
    }

    @media (min-width: 45.625em) {
      display: none;
    }
  }
</style>
