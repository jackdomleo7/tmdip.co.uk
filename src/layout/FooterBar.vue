<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__row">
        <site-link
          v-for="(socialLink, index) in footerSocialLinks"
          :key="index"
          class="footer__social"
          type="social"
          :title="socialLink.platform"
          :link="socialLink.link"
        >
          <icon :icon="socialLink.platform" />
          <span hidden>{{ socialLink.platform }}</span>
        </site-link>
      </div>
      <div class="footer__row">
        <img
          class="footer__logo"
          src="@/assets/footer-logo.png"
          :alt="companyName + ' logo'"
        />
        <p>
          <site-link type="tel" :link="companyTelNumber.tel">
            {{ companyTelNumber.telPretty }}
          </site-link>
          <site-link
            style="display: block;"
            type="email"
            :link="companyEmail"
            >{{ companyEmail }}</site-link
          >
        </p>
      </div>
      <div class="footer__row">
        <p>
          &copy;<time :datetime="year">{{ year }}</time>
          {{ companyName }}.<br />All rights reserved.
        </p>
        <p>Company Registration: {{ companyRegistration }}<br />VAT Number: {{ companyVatNumber }}</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Icon, SiteLink } from "@/components";
import CompanyInfo, { TelNumber } from "@/helpers/companyInfo";

interface FooterSocialLink {
  platform: string;
  link: string;
}

@Component({
  components: { Icon, SiteLink }
})
export default class FooterBar extends Vue {
  private readonly footerSocialLinks: FooterSocialLink[] = [
    {
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/company/tmdip'
    },
    {
      platform: 'Facebook',
      link: 'https://www.facebook.com/TMD-Interior-Projects-615787538843133'
    },
    {
      platform: 'Instagram',
      link: 'https://www.instagram.com/TMD_Interior_Projects'
    }
  ];

  private get companyName(): string {
    return CompanyInfo.companyName;
  }

  private get companyRegistration(): string {
    return CompanyInfo.companyRegistration;
  }

  private get companyVatNumber(): string {
    return CompanyInfo.companyVatNumber;
  }

  private get companyTelNumber(): TelNumber {
    return CompanyInfo.companyTelNumber;
  }

  private get companyEmail(): string {
    return CompanyInfo.companyEmail;
  }

  private get year(): number {
    return new Date().getFullYear();
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--color-grey-400);

  &__content {
    margin: 0 auto;
    max-width: 68rem;
    padding: 0 1rem;
  }

  &__row {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem 0;
    text-align: center;

    @media (min-width: 45.625em) {
      margin: 2rem 0;
    }

    &:not( :first-of-type ) {
      @media (min-width: 45.625em) {
        flex-direction: row;
      }
    }

    &:first-of-type {
      flex-direction: row;
      justify-content: center;
    }

    > *:last-child {
      @media (min-width: 45.625em) {
        text-align: right;
      }
    }
  }

  &__logo {
    width: 22rem;
  }

  &__social {
    background-color: var(--color-brand-orange);
    border-radius: 50%;
    color: var(--color-grey-50);
    height: 3rem;
    margin: 0 0.5rem;
    padding: 0.5rem;
    transition: 160ms color ease-in-out, 160ms background-color ease-in-out;
    width: 3rem;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }

    &:hover,
    &:focus {
      background-color: var(--color-grey-50);
      color: var(--color-brand-orange);
    }
  }
}
</style>
