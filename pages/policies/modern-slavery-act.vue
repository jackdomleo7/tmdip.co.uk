<template>
  <page-template header="Modern Slavery Act">
    <article>
      <p>
        {{ companyNameWithLtd }} recognises that slavery and human trafficking
        remains a hidden blight on our global society. The aim of our company is
        to identify our responsibility by alerting staff to the risks, however
        small, in our business and in the wider supply chain. Staff are expected
        and encouraged to report concerns to management, where they are expected
        to act upon them.
      </p>
      <p>
        We are committed to ensuring that there is no modern-day slavery or
        human trafficking in our supply chains or in any part of our business.
        Our commitment being to act both ethically and with integrity in all our
        business relationships and to implementing and enforcing effective
        systems and controls to ensure slavery and human trafficking is not
        taking place anywhere in our supply chains.
      </p>
      <p>
        Our internal monitoring procedures ensure that this policy is understood
        and communicated to all levels of the company, and that it is regularly
        reviewed by the Directors to ensure its continuing suitability and
        relevance to the company activities. The Company will achieve our core
        aims by our initiative to identify and mitigate risk in the following
        ways (but not limited to):
      </p>
      <ul>
        <li>
          Ongoing evolvement of stringent vetting and investigation of our
          supply chain (contractors, sub-contractors, policies, contracts etc.)
        </li>
        <li>
          Continually reviewing our practices for checking all employees are
          paid at least the minimum wage and have the right to work
        </li>
        <li>
          Encouraging the reporting of concerns and the protection of
          whistleblowers
        </li>
      </ul>
      <p>
        The company will not knowingly support or deal with any business
        involved in slavery or human trafficking. We have zero-tolerance to
        slavery and human trafficking. We expect all those in our supply chain
        and contractors comply with our values. To ensure a high level of
        understanding of the risks of modern slavery and human trafficking in
        our supply chains and our business, we provide training to relevant
        members of staff. All Directors have been briefed on the subject.
      </p>
      <p>
        This policy is in accordance with
        <site-link
          type="external"
          link="https://www.legislation.gov.uk/ukpga/2015/30/contents/enacted"
        >
          Section 54 of the Modern Slavery Act
          <time datetime="2015">2015</time>
        </site-link>
        and constitutes our company slavery and human trafficking statement.
      </p>
    </article>
  </page-template>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SiteLink, PageTemplate } from '@/components';
import CompanyInfo from '@/middleware/companyInfo';

@Component({
  components: { PageTemplate, SiteLink },
  head () {
    return {
      title: 'Modern Slavery Act'
    };
  }
})
export default class ModernSlaveryAct extends Vue {
  private get companyNameWithLtd (): string {
    return CompanyInfo.companyNameWithLtd;
  }
}
</script>
