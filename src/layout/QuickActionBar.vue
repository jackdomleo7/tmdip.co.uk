<template>
  <section class="qab">
    <site-link
      class="qab__link"
      type="email"
      :link="companyEmail"
      :title="'Email us today at ' + companyEmail"
    >
      <icon class="qab__icon qab__icon--email" icon="email" />
      <span hidden>Email us today at {{ companyEmail }}</span>
    </site-link>
    <site-link
      class="qab__link"
      type="tel"
      :link="companyTelNumber.tel"
      :title="'Call us today ' + companyTelNumber.telPretty"
    >
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
  components: { Icon, SiteLink },
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
  align-items: center;
  background-color: var(--color-grey-75);
  bottom: 0;
  box-shadow: var(--color-grey-500) 0 -0.25rem 0.5rem 0;
  display: flex;
  height: 3rem;
  justify-content: space-around;
  overflow: hidden;
  position: sticky;
  width: 100vw;
  z-index: 1001;

  &__link {
    height: 100%;
    text-align: center;
    width: 50%;
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

  @media (min-width: $scale-desktop) {
    display: none;
  }
}
</style>
