<template>
  <page-content header="Healthy and Safety">
    <article>
      <p>
        Safe Contractor Approved:
        <strong>{{ companySafeContractorAccreditation }}</strong>
      </p>
      <ul>
        <li>
          {{ companyNameWithLtd }} is committed to achieving significant and
          major improvement in performance towards better standards in every
          aspect of the business. Proper attention to health, safety and welfare
          is an indispensable part of this commitment. We believe that injuries,
          occupational illness and damage to property can be prevented.
        </li>
        <li>
          {{ companyNameWithLtd }} recognizes the importance of providing a
          working environment, which is safe and healthy for all employees,
          contractors and members of the public and undertakes to comply with
          relevant legal requirements.
        </li>
        <li>
          We have determination and drive to bring about safe working practices
          in all company activities and to see that such persons are not harmed
          by our activities or working practices.
        </li>
        <li>
          It is acknowledged that it is the responsibility of
          {{ companyNameWithLtd }} to provide the correct circumstances under
          which work can be carried out safely. In particular,
          {{ companyNameWithLtd }} undertakes to provide and maintain safe plant
          and equipment, safe premises and safe systems of work.
          {{ companyNameWithLtd }} will provide information, instruction,
          training and supervision in safety matters to all employees in order
          to achieve these objectives.
        </li>
        <li>
          However, all employees and contractors have a legal duty not only to
          work safely, but also to co-operate with the employer in their efforts
          to create safe working conditions. Employees will therefore be
          encouraged to participate in all safety matters to identify hazards
          which may exist and to report any condition which may appear dangerous
          or unhealthy and to ensure that each employee accepts their own
          responsibility not to endanger theirself or others and/or actively
          assist in fulfilling the requirements and spirit of the
          <site-link
            type="external"
            link="https://www.legislation.gov.uk/ukpga/1974/37/contents"
            >Health and Safety at Work Act
            <time datetime="1974">1974</time></site-link
          >.
        </li>
        <li>
          Whilst the final responsibility for matters of Health and Safety rests
          with the Managing Director of {{ companyNameWithLtd }}, all employees
          and visitors to the premises must clearly understand that they also
          have a duty to ensure the sealth and safety of themselves and others.
          This includes reporting back to their managers any dangerous or
          unsatisfactory condition and making suggestions for the improvement of
          existing facilities and arrangements.
        </li>
        <li>
          This Policy will be brought to the attention of all employees upon
          induction and at regular intervals via job appraisals, visually within
          the workplace and upon annual review.
        </li>
      </ul>
      <p>
        All members of {{ companyNameWithLtd }} who authorize work to be carried
        out by others must ensure the health and safety of all persons involved
        directly or indirectly by assessing adequacy of resources and competency
        prior to commencement. {{ companyNameWithLtd }} will give full support
        to all those who endeavor to carry out the company policy.
      </p>
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
export default class HealthAndSafety extends Vue {
  private get companyNameWithLtd(): string {
    return CompanyInfo.companyNameWithLtd;
  }

  private get companySafeContractorAccreditation(): string {
    return CompanyInfo.companySafeContractorAccreditation;
  }
}
</script>

<style lang="scss" scoped>
li {
  margin: 1rem 0;
}
</style>
