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
			<div class="form__legend">
				<small><span class="form__required">*</span> Indicates required</small>
			</div>
      <div id="mc_embed_signup_scroll" class="form__fields">
        <div class="form__field form__field--half form__field--new-line">
          <label class="textbox">
						<span>Email Address <span class="form__required">*</span></span>
						<input
							type="email"
							value=""
							name="EMAIL"
							class="textbox__entry"
							id="mce-EMAIL"
						/>
          </label>
        </div>
        <div class="form__field form__field--half">
          <label class="textbox">
						Name
						<input type="text" value="" name="NAME" class="textbox__entry" id="mce-NAME" />
					</label>
        </div>
        <div class="form__field form__field--half">
          <label class="textbox">
						Phone Number
						<input type="text" name="PHONE" class="textbox__entry" value="" id="mce-PHONE" />
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
						<input type="number" name="PLV" class="textbox__entry" value="" id="mce-PLV" />
					</label>
        </div>
        <div class="form__field form__field--third">
          <label class="textbox">
						Employers Liability Value
						<input type="number" name="ELV" class="textbox__entry" value="" id="mce-ELV" />
					</label>
        </div>
        <div class="form__field form__field--third">
          <label class="textbox">
						Professional Indemnity Value
						<input type="number" name="PIV" class="textbox__entry" value="" id="mce-PIV" />
					</label>
        </div>
        <div class="form__field">
          <label class="textbox">
						Trade
						<input type="text" value="" name="TRADE" class="textbox__entry" id="mce-TRADE" />
					</label>
        </div>
        <p>
          Powered by
          <site-link
						type="external"
            link="http://eepurl.com/gkX3jv"
            title="MailChimp - email marketing made easy and fun"
            >MailChimp</site-link
          >
        </p>
        <div
          id="mergeRow-gdpr"
          class="form__gdpr"
        >
          <div class="content__gdpr">
            <label>Marketing Permissions</label>
            <p>
              {{ companyNameWithLtd }} will use the information you provide on this
              form to be in touch with you and to provide updates and marketing.
            </p>
            <fieldset
              class="form__fieldset"
              name="interestgroup_field"
            >
              <label class="checkbox subfield" for="gdpr_12847"
                ><input
                  type="checkbox"
                  id="gdpr_12847"
                  name="gdpr[12847]"
                  value="Y"
                  class="av-checkbox gdpr"
                /><span
                  >I agree to let {{ companyNameWithLtd }} send me newsletters and
                  promotional emails</span
                >
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
              <site-link type="external" link="https://mailchimp.com/legal/"
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
        <div style=" left: -5000px; position: absolute;" aria-hidden="true">
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
import CompanyInfo from "@/helpers/companyInfo";

@Component({
  components: { SiteLink }
})
export default class MailchimpForm extends Vue {
  private get companyNameWithLtd(): string {
    return CompanyInfo.companyNameWithLtd;
  }
}
</script>

<style lang="scss" scoped>
.form {
	padding: 0.625rem 1.5rem;

	@media (max-width: 45.5625em) {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}

	&__legend {
		text-align: right;
		display: block;
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
		width: 100%;
		padding: 0 1rem;
		margin: 1rem 0;

		@media (max-width: 45.5625em) {
			width: 100% !important;
			margin: 0.5rem 0 !important;
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
		border: none;
	}
}

.button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background-color: var(--color-blue);
  border: 0 none;
	border-radius: 0.25rem;
	color: var(--color-grey-75);
	cursor: pointer;
	height: 2rem;
  padding: 0 1.375rem;
	transition: all 0.23s ease-in-out 0s;
	
	&:hover,
	&:focus {
		box-shadow: 0 0 1rem var(--color-grey-500);
	}
}

.textbox {
	display: flex;
	text-align: left;
	flex-direction: column;
	position: relative;
	font-size: 0.75rem;

	&__entry {
		border: 1px solid var(--color-grey-500);
		border-radius: 0.1875rem;
		color: var(--color-grey-900);
		display: block;
		height: 2.5rem;
		margin-top: 0.1875rem;
		padding: 0 0.75rem;
		width: 100%;
		font-size: 0.875rem;

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
</style>
