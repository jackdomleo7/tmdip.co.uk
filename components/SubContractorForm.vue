<template>
  <!-- Begin Mailchimp Signup Form -->
  <div id="mc_embed_signup">
    <form
      action="https://tmdip.us20.list-manage.com/subscribe/post?u=8ce2b42d4c9d2c368b0f812d1&amp;id=77f72d1c71"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate form"
      target="_blank"
      novalidate
    >
      <p class="form__legend" aria-hidden="true" id="required-legend">
        <small>
          <span class="form__required" aria-hidden="true">*</span> Indicates
          required
        </small>
      </p>
      <div id="mc_embed_signup_scroll" class="form__fields">
        <div class="form__field form__field--half form__field--new-line">
          <label class="textbox">
            <span
              >Email Address
              <span class="form__required" aria-hidden="true">*</span></span
            >
            <input
              type="email"
              value=""
              name="EMAIL"
              class="textbox__entry"
              id="mce-EMAIL"
              aria-describedby="required-legend"
            />
          </label>
        </div>
        <div class="form__field form__field--half">
          <label class="textbox">
            Name
            <input
              type="text"
              value=""
              name="NAME"
              class="textbox__entry"
              id="mce-NAME"
            />
          </label>
        </div>
        <div class="form__field form__field--half">
          <label class="textbox">
            Phone Number
            <input
              type="text"
              name="PHONE"
              class="textbox__entry"
              value=""
              id="mce-PHONE"
            />
          </label>
        </div>
        <div class="form__field form__field--half">
          <label class="textbox">
            Company Name
            <input
              type="text"
              value=""
              name="COMPANY"
              class="textbox__entry"
              id="mce-COMPANY"
            />
          </label>
        </div>
        <div class="form__field form__field--half">
          <label class="textbox">
            Website
            <input
              type="url"
              value=""
              name="CWEBSITE"
              class="textbox__entry"
              id="mce-CWEBSITE"
            />
          </label>
        </div>
        <div class="form__field form__field--third">
          <label class="textbox">
            Public Liability Value
            <input
              type="number"
              name="PLV"
              class="textbox__entry"
              value=""
              id="mce-PLV"
            />
          </label>
        </div>
        <div class="form__field form__field--third">
          <label class="textbox">
            Employers Liability Value
            <input
              type="number"
              name="ELV"
              class="textbox__entry"
              value=""
              id="mce-ELV"
            />
          </label>
        </div>
        <div class="form__field form__field--third">
          <label class="textbox">
            Professional Indemnity Value
            <input
              type="number"
              name="PIV"
              class="textbox__entry"
              value=""
              id="mce-PIV"
            />
          </label>
        </div>
        <div class="form__field">
          <label class="textbox">
            Trade
            <input
              type="text"
              value=""
              name="TRADE"
              class="textbox__entry"
              id="mce-TRADE"
            />
          </label>
        </div>
        <p>
          Powered by
          <site-link
            type="external"
            link="http://eepurl.com/gkX3jv"
            title="Mailchimp - email marketing made easy and fun"
            >Mailchimp</site-link
          >
        </p>
        <div id="mergeRow-gdpr" class="form__gdpr">
          <div class="content__gdpr">
            <label>Marketing Permissions</label>
            <p>
              {{ companyNameWithLtd }} will use the information you provide on
              this form to be in touch with you and to provide updates and
              marketing.
            </p>
            <fieldset class="form__fieldset" name="interestgroup_field">
              <label class="checkbox">
                <input
                  type="checkbox"
                  id="gdpr_12847"
                  name="gdpr[12847]"
                  value="Y"
                  class="checkbox__input"
                />
                <span class="checkbox__checkmark"></span>
                <span>
                  I agree to let {{ companyNameWithLtd }} send me newsletters
                  and promotional emails
                </span>
              </label>
            </fieldset>
            <p>
              You can unsubscribe at any time by clicking the link in the footer
              of our emails. For information about our privacy practices, please
              visit our website.
            </p>
          </div>
          <div class="content__gdprLegal">
            <p>
              We use Mailchimp as our marketing platform. By clicking below to
              subscribe, you acknowledge that your information will be
              transferred to Mailchimp for processing.
              <site-link type="external" link="https://mailchimp.com/legal"
                >Learn more about Mailchimp's privacy practices here.</site-link
              >
            </p>
          </div>
        </div>
        <div id="mce-responses" class="clear">
          <div
            class="response"
            id="mce-error-response"
            style="display: none;"
          ></div>
          <div
            class="response"
            id="mce-success-response"
            style="display: none;"
          ></div>
        </div>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="left: -5000px;position: absolute;" aria-hidden="true">
          <input
            type="text"
            name="b_8ce2b42d4c9d2c368b0f812d1_77f72d1c71"
            tabindex="-1"
            value=""
          />
        </div>
        <input
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          class="button"
        />
      </div>
    </form>
  </div>

  <!--End mc_embed_signup-->
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SiteLink } from "@/components";
import CompanyInfo from "@/middleware/companyInfo";

@Component({
  components: { SiteLink },
})
export default class SubContractorForm extends Vue {
  private get companyNameWithLtd(): string {
    return CompanyInfo.companyNameWithLtd;
  }
}
</script>

<style lang="scss" scoped>
.form {
  padding: 0.625rem 1.5rem;

  @media (max-width: 45.625em) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  &__legend {
    display: block;
    text-align: right;
  }

  &__required {
    color: var(--color-brand-orange);
    font-size: 150%;
    position: relative;
    top: 0.3125rem;
  }

  &__gdpr {
    padding-top: 1.25rem;
  }

  &__fields {
    display: flex;
    flex-wrap: wrap;
  }

  &__field {
    margin: 1rem 0;
    padding: 0 1rem;
    width: 100%;

    @media (max-width: 45.5625em) {
      margin: 0.5rem 0 !important;
      width: 100% !important;
    }

    &--half {
      width: 50%;

      &.form__field--new-line {
        margin-right: 50%;
      }
    }

    &--third {
      width: 33.3333%;
    }
  }

  &__fieldset {
    align-items: center;
    border: none;
    display: flex;
    justify-content: center;
  }
}

.button {
  align-items: center;
  background-color: var(--color-blue);
  border: 0 none;
  border-radius: 0.25rem;
  color: var(--color-grey-75);
  cursor: pointer;
  display: inline-flex;
  height: 2rem;
  justify-content: center;
  padding: 0 1.375rem;
  transition: all 0.23s ease-in-out 0s;

  &:hover,
  &:focus {
    box-shadow: 0 0 1rem var(--color-grey-500);
  }
}

.textbox {
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  position: relative;
  text-align: left;

  &__entry {
    border: 1px solid var(--color-grey-500);
    border-radius: 0.1875rem;
    color: var(--color-grey-900);
    display: block;
    font-size: 0.875rem;
    height: 2.5rem;
    margin-top: 0.1875rem;
    padding: 0 0.75rem;
    width: 100%;

    &:hover {
      border-color: var(--color-grey-600);
    }

    &:focus {
      border-color: var(--color-grey-900);
    }
  }

  .form__required {
    position: absolute;
    top: -0.3125rem;
  }
}

.checkbox {
  align-items: center;
  cursor: pointer;
  display: flex;
  position: relative;

  &:hover {
    .checkbox__input {
      ~ .checkbox__checkmark {
        background-color: var(--color-grey-400);
      }
    }
  }

  &__input {
    cursor: pointer;
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;

    &:checked,
    &:checked:hover {
      ~ .checkbox__checkmark {
        background-color: var(--color-base);

        &::after {
          display: block;
        }
      }
    }

    &:focus {
      ~ .checkbox__checkmark {
        border-color: var(--color-base);
      }
    }
  }

  &__checkmark {
    align-items: center;
    background-color: var(--color-grey-200);
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    margin-right: 0.5rem;
    min-height: 1.5625rem;
    min-width: 1.5625rem;

    &::after {
      border: solid var(--color-grey-50);
      border-width: 0 3px 3px 0;
      content: "";
      display: none;
      height: 10px;
      transform: rotate(45deg);
      width: 5px;
    }
  }
}
</style>
