<template>
  <page-content header="Privacy Policy">
    <article>
      <p>
        {{ companyNameWithLtd }} understands that your privacy is important to
        you and that you care about how your personal data is used. We respect
        and value the privacy of everyone who visits this website,
        <site-link type="internal" :link="{ name: Routes.Home }">{{
          companyWebsiteDomain
        }}</site-link>
        and as described in Parts 5 and 6, below, we do not collect personal
        data about you unless you contact us. Any personal data we do collect
        will only be used as permitted by law.
      </p>
      <p>
        Please read this privacy policy carefully and ensure that you understand
        it. Your acceptance of this privacy policy is deemed to occur upon your
        first use of our site. If you do not accept and agree with this privacy
        policy, you must stop using our site immediately.
      </p>
      <ol>
        <li>
          Information about us:<br />
          <ul>
            <li>
              Our site is owned and operated by {{ companyNameWithLtd }}, a
              Shopfitting contractor / shopfitting supplier - registered in
              England, UK under company number {{ companyRegistration }}
            </li>
            <li>
              Registered / main trading / postal address: 28 Melksham Road,
              Nottingham, England, NG5 5RX
            </li>
            <li>VAT Number: {{ companyVatNumber }}</li>
            <li>
              Data Protection Officer: Tony Domleo
            </li>
            <li>
              Email address:
              <site-link type="email" :link="companyEmail">{{
                companyEmail
              }}</site-link>
            </li>
            <li>
              Telephone number:
              <site-link type="tel" :link="companyTelNumber.tel">{{
                companyTelNumber.telPretty
              }}</site-link>
            </li>
            <li>
              We are regulated by and are a member of
              <site-link type="external" link="https://ico.org.uk/"
                >ICO (Information Commissioners Office)</site-link
              >
            </li>
          </ul>
        </li>
        <li>
          What does this policy cover?
          <p>
            This privacy policy applies to your use of our site only. Our site
            may contain links to other websites. Please note that we have no
            control over how your data is collected, stored, or used by other
            websites and we advise you to check the privacy policies of any such
            websites before providing any data to them.
          </p>
        </li>
        <li>
          What is personal data?
          <p>
            Personal data is defined by the
            <site-link type="external" link="https://gdpr-info.eu/"
              >General Data Protection Regulation (EU Regulation
              <time datetime="2016">2016</time>/679)</site-link
            >
            and the
            <site-link
              type="external"
              link="http://www.legislation.gov.uk/ukpga/2018/12/contents/enacted"
              >Data Protection Act <time datetime="2018">2018</time></site-link
            >
            as ‘any information relating to an identifiable person who can be
            directly or indirectly identified in particular by reference to an
            identifier’.
          </p>
        </li>
        <li>
          What are my rights?
          <p>
            Under the Data Protection Legislation, you have the following
            rights, which we will always work to uphold:
          </p>
          <ul style="list-style-type: lower-alpha;">
            <li>
              The right to be informed about our collection and use of your
              personal data. This privacy policy should tell you everything you
              need to know, but you can always contact us to find out more or to
              ask any questions using the details in Part 10.
            </li>
            <li>
              The right to access the personal data we hold about you. Part 9
              will tell you how to do this.
            </li>
            <li>
              The right to have your personal data rectified if any of your
              personal data held by us is inaccurate or incomplete. Please
              contact us using the details in Part 10 to find out more.
            </li>
            <li>
              The right to be forgotten, I.e. the right to ask us to delete or
              otherwise dispose of any of your personal data that we hold.
              Please contact us using the details in Part 10 to find out more.
            </li>
            <li>
              The right to restrict or prevent the processing of your personal
              data.
            </li>
            <li>
              The right to object to us using your personal data for a
              particular purpose or purposes.
            </li>
            <li>
              The right to withdraw consent. This means that, if we are relying
              on your consent as the legal basis for using your personal data,
              you are free to withdraw that consent at any time.
            </li>
            <li>
              The right to data portability. This means that, if you have
              provided personal data to us directly, we are using it with your
              consent or for the performance of a contract and that data is
              processed using automated means, you can ask us for a copy of that
              personal data to re-use with another service or business in many
              cases.
            </li>
            <li>
              Rights relating to automated decision-making and profiling. We do
              not use your personal data in this way.
            </li>
          </ul>
          <p>
            For more information about our use of your personal data or
            exercising your rights as outlined above, please contact us using
            the details provided in Part 10.<br />
            It is important that your personal data is kept accurate and
            up-to-date. If any of the personal data we hold about you changes,
            please keep us informed as long as we have that data.<br />
            Further information about your rights can also be obtained from the
            Information Commissioner’s Office or your local Citizens Advice
            Bureau.<br />
            If you have any cause for complaint about our use of your personal
            data, you have the right to lodge a complaint with the Information
            Commissioner’s Office. We would welcome the opportunity to resolve
            your concerns ourselves, however, so please contact us first, using
            the details in Part 10.
          </p>
        </li>
        <li>
          What personal data do you collect from me?
          <p>
            Subject to the following, we do not collect any personal data from
            you. We do not place cookies on your computer or device, nor do we
            use any other means of data collection.
          </p>
          <p>
            If you send us an email or fill out a form on our website, we may
            collect your name, your email address, and any other information
            which you choose to give us for the purposes of marketing emails
            which may regard: business/website updates, potential contractor
            jobs. For the purposes of the Data Protection Legislation, we are
            the data controller responsible for such personal data.
          </p>
        </li>
        <li>
          How do you use my personal data?
          <p>
            If we do collect any personal data (i.e. if you contact us), it will
            be processed and stored securely, for no longer than is necessary in
            light of the reason(s) for which it was first collected. We will
            comply with our obligations and safeguard your rights under the Data
            Protection Legislation at all times. For more details on security
            see Part 7, below.
          </p>
          <p>
            As stated above, we do not generally collect any personal data, but
            if you contact us and we obtain your personal details from your
            email, we may use them to respond to your email.
          </p>
          <p>
            Any and all emails containing your personal data will be deleted no
            later than 60 Months after project completion and no other personal
            data will be retained.
          </p>
          <p>
            We will not share any of your personal data with any third parties
            for any purposes (other than storage on an email server).
          </p>
        </li>
        <li>
          How and where do you store my data?
          <p>
            We will only store your personal data in the UK. This means that it
            will be fully protected under the Data Protection Legislation.
          </p>
          <p>
            We may store some or all of your personal data in countries that are
            not part of the [uropean Economic Area (the “EEA” consists of all EU
            member states, plus Norway, Iceland, and Liechtenstein). These are
            known as “third countries” and may not have data protection laws
            that are as strong as those in the UK and/or the EEA. This means
            that we will take additional steps in order to ensure that your
            personal data is treated just as safely and securely as it would be
            within the UK and under the Data Protection Legislation:
          </p>
          <p>
            We store your data with external third parties, as detailed below in
            Part 8, that are based outside of the EEA. The following
            safeguard(s) is/are applied:
          </p>
          <ul>
            <li>
              We will only transfer your personal data to third countries whose
              levels of data protection are deemed ‘adequate’ by the European
              Commission. More information is available from the European
              Commission.
            </li>
            <li>
              We use specific contracts with external third parties that are
              approved by the European Commission for the transfer of personal
              data to third countries. Contracts like this require the same
              levels of personal data protection that would apply under the Data
              Protection Legislation. More information is available from the
              European Commission.
            </li>
            <li>
              Where we transfer your data to a third party based in the US, the
              data may be protected if they are part of the EU-US Privacy
              Shield. This requires that third party to provide data protection
              to standards similar to those in Europe. More information is
              available from the European Commission.<br />
              Please contact us using the details below in Part 10 for further
              information about the particular data protection mechanism[s] used
              by us when transferring your personal data to a third country.
            </li>
            <li>
              Personal data security is essential to us, and to protect personal
              data, we take the following measures:
              <ul>
                <li>
                  Limiting access to your personal data to those employees,
                  agents, contractors, and other third parties with a legitimate
                  need to know and ensuring that they are subject to duties of
                  confidentiality.
                </li>
                <li>
                  Procedures for dealing with data breaches (the accidental or
                  unlawful destruction, loss, alteration, unauthorised
                  disclosure of, or access to, your personal data) including
                  notifying you and/or the Information Commissioner’s Office
                  where we are legally required to do so.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Do you share my personal data?
          <p>
            We will not share any of your personal data with any third parties
            for any purposes, subject to the following exception(s).
          </p>
          <p>
            If we sell, transfer, or merge parts of our business or assets, your
            personal data may be transferred to a third party. Any new owner of
            our business may continue to use your personal data in the same way
            that we have used it, as specified in this privacy policy (i.e. to
            communicate with you).
          </p>
          <p>
            In some limited circumstances, we may be legally required to share
            certain personal data, which might include yours, if we are involved
            in legal proceedings or complying with legal obligations, a court
            order, or the instructions of a government authority.
          </p>
          <br />
          <p>
            If any of your personal data is transferred to a third party, as
            described above, we will take steps to ensure that your personal
            data is handled safely, securely, and in accordance with your
            rights, our obligations, and the third party’s obligations under the
            law, as described above in Part 7.
          </p>
          <p>
            If any personal data is transferred outside of the EEA, we will take
            suitable steps in order to ensure that your personal data is treated
            just as safely and securely as it would be within the UK and under
            the Data Protection Legislation, as explained above in Part 7.
          </p>
          <p>
            If we sell, transfer, or merge parts of our business or assets, your
            personal data may be transferred to a third party. Any new owner of
            our business may continue to use your personal data in the same
            way(s) that we have used it, as specified in this Privacy Policy
            (i.e. to communicate with you).
          </p>
          <p>
            In some limited circumstances, we may be legally required to share
            certain personal data, which might include yours, if we are involved
            in legal proceedings or complying with legal obligations, a court
            order, or the instructions of a government authority.
          </p>
        </li>
        <li>
          How can I access my personal data?
          <p>
            If you want to know what personal data we have about you, you can
            ask us for details of that personal data and for a copy of it (where
            any such personal data is held). This is known as a “subject access
            request”.
          </p>
          <p>
            All subject access requests should be made in writing and sent to
            the email or postal addresses shown in Part 10. To make this as easy
            as possible for you, a Subject Access Request Form is available for
            you to use. You do not have to use this form, but it is the easiest
            way to tell us everything we need to know to respond to your request
            as quickly as possible.
          </p>
          <p>
            There is not normally any charge for a subject access request. If
            your request is ‘manifestly unfounded or excessive’ (for example, if
            you make repetitive requests) a fee may be charged to cover our
            administrative costs in responding.
          </p>
          <p>
            We will respond to your subject access request within 14 days and,
            in any case, not more than one month of receiving it. Normally, we
            aim to provide a complete response, including a copy of your
            personal data within that time. In some cases, however, particularly
            if your request is more complex, more time may be required up to a
            maximum of three months from the date we receive your request. You
            will be kept fully informed of our progress.
          </p>
        </li>
        <li>
          How do I contact you?
          <p>
            To contact us about anything to do with your personal data and data
            protection, including to make a subject access request, please use
            the following details (for the attention of the
            <abbr title="Chief Executive Officer">CEO</abbr> of
            {{ companyNameWithLtd }}):
          </p>
          <ul>
            <li>
              Email address:
              <site-link type="email" :link="companyEmail">{{
                companyEmail
              }}</site-link>
            </li>
            <li>
              Telephone number:
              <site-link type="tel" :link="companyTelNumber.tel">{{
                companyTelNumber.telPretty
              }}</site-link>
            </li>
            <li>
              Registered / main trading / postal address: 28 Melksham Road,
              Nottingham, England, NG5 5RX
            </li>
          </ul>
        </li>
        <li>
          Are you registered with the Information Commisioner's Office (ICO)?
          <p>Certificate number: {{ companyIcoCertificateNumber }}</p>
          <p>
            {{ companyNameWithLtd }} takes data protection &amp; usage seriously
            and we registered with the ICO. To view this please visit
            <site-link type="external" link="https://ico.org.uk/register"
              >ico.org.uk/register</site-link
            >.
          </p>
        </li>
        <li>
          Changes to this privacy policy
          <p>
            We may change this privacy policy from time to time. This may be
            necessary, for example, if the law changes, or if we change our
            business in a way that affects personal data protection.
          </p>
          <p>
            Any changes will be immediately posted on our site and you will be
            deemed to have accepted the terms of the privacy policy on your
            first use of Our site following the alterations. Changes will also
            be posted on our social media pages and an email to those who have
            given consent for us to send emails to will recieve an email on
            these changes. We recommend that you check this page regularly to
            keep up-to-date.
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

  private get companyIcoCertificateNumber(): string {
    return CompanyInfo.companyIcoCertificateNumber;
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

ol,
ul {
  padding-left: 1.5rem;

  @media (min-width: 45.625em) {
    padding-left: 2.5rem;
  }
}
</style>
