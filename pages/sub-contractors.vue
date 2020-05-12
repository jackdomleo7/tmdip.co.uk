<template>
  <page-template header="Sub-contractors">
    <h3>
      Subscribe below to subscribe to our business updates and sub-contractor
      job opportunities
    </h3>
    <p>
      Every now and then, we may send emails to our subscribed database that may
      include:
    </p>
    <ul>
      <li>
        Business updates
      </li>
      <li>
        Sub-contractor job opportunities
      </li>
      <li>
        Legal notifications such as policy changes
      </li>
    </ul>
    <p>
      You are not required to fill out every field, however the more information
      you provide us, will increase your chances to work with us. We only
      collect the data that we deem necessary to make communication and a job
      opportunity possible.
    </p>
    <p>
      We believe in building strong relations, therefore we never send spam and
      we will never share any data we hold with any third party.
    </p>
    <p>
      <small>
        {{ companyNameWithLtd }} recommends that sub contractor companies have
        the same value insurance as we do.<br>
        Public Liability £10 million &amp; Employers Liability £10 million.<br>
        Self employed fitters require Public Liability £5 million &amp; CIS
        Unique Tax Reference Number.
      </small>
    </p>
    <p>
      <small>For more information on the information we collect, please read our
        <site-link
          type="internal"
          link="/policies/privacy-policy"
        >privacy policy</site-link>.</small>
    </p>
    <sub-contractor-form />
  </page-template>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SiteLink, PageTemplate, SubContractorForm } from '@/components';
import CompanyInfo from '@/middleware/companyInfo';

@Component({
  components: { PageTemplate, SiteLink, SubContractorForm },
  head () {
    return {
      title: 'Sub-contractors'
    };
  }
})
export default class SubContractors extends Vue {
  private get companyEmail (): string {
    return CompanyInfo.companyEmail;
  }

  private get companyNameWithLtd (): string {
    return CompanyInfo.companyNameWithLtd;
  }
}
</script>
