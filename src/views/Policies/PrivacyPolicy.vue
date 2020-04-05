<template>
  <page-content header="Privacy Policy">
    <article>
      <p>
        {{ companyNameWithLtd }} understands that your privacy is important to you and that you care about how your personal data is used. We respect and value the privacy of everyone who visits this website, <site-link type="internal" :link="{ name: Routes.Home }">{{ companyWebsiteDomain }}</site-link> and as described in Parts 5 and 6, below, we do not collect personal data about you unless you contact us. Any personal data we do collect will only be used as permitted by law.
      </p>
      <p>
        Please read this privacy policy carefully and ensure that you understand it. Your acceptance of this privacy policy is deemed to occur upon your first use of our site. If you do not accept and agree with this privacy policy, you must stop using our site immediately.
      </p>
      <ol>
        <li>
          Information about us:<br/>
          <ul>
            <li>
              Our site is owned and operated by {{ companyNameWithLtd }}, a Shopfitting contractor / shopfitting supplier - registered in England, UK under company number {{ companyRegistration }}
            </li>
            <li>
              Registered / main trading / postal address: 28 Melksham Road, Nottingham, England, NG5 5RX
            </li>
            <li>
              VAT Number: {{ companyVatNumber }}
            </li>
            <li>
              Data Protection Officer: Tony Domleo
            </li>
            <li>
              Email address: <site-link type="email" :link="companyEmail">{{ companyEmail }}</site-link>
            </li>
            <li>
              Telephone number: <site-link type="tel" :link="companyTelNumber.tel">{{ companyTelNumber.telPretty }}</site-link>
            </li>
            <li>
              We are regulated by and are a member of <site-link type="external" link="https://ico.org.uk/">ICO (Information Commissioners Office)</site-link>
            </li>
          </ul>
        </li>
        <li>
          What does this policy cover?
          <p>
            This privacy policy applies to your use of our site only. Our site may contain links to other websites. Please note that we have no control over how your data is collected, stored, or used by other websites and we advise you to check the privacy policies of any such websites before providing any data to them.
          </p>
        </li>
        <li>
          What is personal data?
          <p>
            Personal data is defined by the <site-link type="external" link="https://gdpr-info.eu/">General Data Protection Regulation (EU Regulation <time datetime="2016">2016</time>/679)</site-link> and the <site-link type="external" link="http://www.legislation.gov.uk/ukpga/2018/12/contents/enacted">Data Protection Act <time datetime="2018">2018</time></site-link> as ‘any information relating to an identifiable person who can be directly or indirectly identified in particular by reference to an identifier’.
          </p>
        </li>
        <li>
          What are my rights?
          <p>
            Under the Data Protection Legislation, you have the following rights, which we will always work to uphold:
            <ul style="list-style-type: lower-alpha;">
              <li>
                The right to be informed about our collection and use of your personal data. This privacy policy should tell you everything you need to know, but you can always contact us to find out more or to ask any questions using the details in Part 10.
              </li>
              <li>
                The right to access the personal data we hold about you. Part 9 will tell you how to do this.
              </li>
              <li>
                 The right to have your personal data rectified if any of your personal data held by us is inaccurate or incomplete. Please contact us using the details in Part 10 to find out more.
              </li>
              <li>
                The right to be forgotten, I.e. the right to ask us to delete or otherwise dispose of any of your personal data that we hold. Please contact us using the details in Part 10 to find out more.
              </li>
              <li>
                The right to restrict or prevent the processing of your personal data.
              </li>
              <li>
                The right to object to us using your personal data for a particular purpose or purposes.
              </li>
              <li>
                The right to withdraw consent. This means that, if we are relying on your consent as the legal basis for using your personal data, you are free to withdraw that consent at any time.
              </li>
              <li>
                The right to data portability. This means that, if you have provided personal data to us directly, we are using it with your consent or for the performance of a contract and that data is processed using automated means, you can ask us for a copy of that personal data to re-use with another service or business in many cases.
              </li>
              <li>
                 Rights relating to automated decision-making and profiling. We do not use your personal data in this way.
              </li>
            </ul>
            For more information about our use of your personal data or exercising your rights as outlined above, please contact us using the details provided in Part 10.<br/>
            It is important that your personal data is kept accurate and up-to-date. If any of the personal data we hold about you changes, please keep us informed as long as we have that data.<br/>
            Further information about your rights can also be obtained from the Information Commissioner’s Office or your local Citizens Advice Bureau.<br/>
            If you have any cause for complaint about our use of your personal data, you have the right to lodge a complaint with the Information Commissioner’s Office. We would welcome the opportunity to resolve your concerns ourselves, however, so please contact us first, using the details in Part 10.
          </p>
        </li>
      </ol>
    </article>
  </page-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Routes } from "@/router";
import { PageContent } from "@/layout";
import { SiteLink } from "@/components";
import CompanyInfo, { TelNumber } from "@/helpers/companyInfo";

@Component({
  components: { PageContent, SiteLink }
})
export default class PrivacyPolicy extends Vue {
  private Routes: Routes = Routes;

  private get companyNameWithLtd(): string {
    return CompanyInfo.companyNameWithLtd;
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

  private get companyWebsiteDomain(): string {
    return CompanyInfo.companyWebsiteDomain;
  }
}
</script>

<style lang="scss" scoped>
  ol {
    > li {
      margin: 2.5rem 0;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  ul {
    margin: 1rem 0;
  }
</style>
