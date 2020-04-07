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
      <div id="mc_embed_signup_scroll">
        <div class="form__legend">
          <small><span class="form__required">*</span> Indicates required</small>
        </div>
        <div class="mc-field-group">
          <label for="mce-EMAIL"
            >Email Address <span class="form__required">*</span>
          </label>
          <input
            type="email"
            value=""
            name="EMAIL"
            class="required email"
            id="mce-EMAIL"
          />
        </div>
        <div class="mc-field-group">
          <label for="mce-NAME">Name </label>
          <input type="text" value="" name="NAME" class="" id="mce-NAME" />
        </div>
        <div class="mc-field-group size1of2">
          <label for="mce-PHONE">Phone Number </label>
          <input type="text" name="PHONE" class="" value="" id="mce-PHONE" />
        </div>
        <div class="mc-field-group">
          <label for="mce-COMPANY">Company Name </label>
          <input
            type="text"
            value=""
            name="COMPANY"
            class=""
            id="mce-COMPANY"
          />
        </div>
        <div class="mc-field-group">
          <label for="mce-CWEBSITE">Website </label>
          <input
            type="url"
            value=""
            name="CWEBSITE"
            class=" url"
            id="mce-CWEBSITE"
          />
        </div>
        <div class="mc-field-group size1of2">
          <label for="mce-PLV">Public Liability Value </label>
          <input type="number" name="PLV" class="" value="" id="mce-PLV" />
        </div>
        <div class="mc-field-group size1of2">
          <label for="mce-ELV">Employers Liability Value </label>
          <input type="number" name="ELV" class="" value="" id="mce-ELV" />
        </div>
        <div class="mc-field-group size1of2">
          <label for="mce-PIV">Professional Indemnity Value </label>
          <input type="number" name="PIV" class="" value="" id="mce-PIV" />
        </div>
        <div class="mc-field-group">
          <label for="mce-TRADE">Trade </label>
          <input type="text" value="" name="TRADE" class="" id="mce-TRADE" />
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
          class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
        >
          <div class="content__gdpr">
            <label>Marketing Permissions</label>
            <p>
              {{ companyNameWithLtd }} will use the information you provide on this
              form to be in touch with you and to provide updates and marketing.
            </p>
            <fieldset
              class="mc_fieldset gdprRequired mc-field-group"
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

	&__legend {
		text-align: right;
	}

	&__required {
		color: var(--color-brand-orange);
		font-size: 150%;
		position: relative;
		top: 0.3125rem;
	}
}
</style>

<style scoped>
#mergeRow-gdpr {
  margin-top: 20px;
}

#mc-embedded-subscribe-form .mc_fieldset {
  border: none;
  min-height: 0;
  padding-bottom: 0;
}


/* MailChimp Form Embed Code - Classic - 12/17/2015 v10.7 */
#mc_embed_signup input {
  border: 1px solid #abb0b2;
  border-radius: 3px;
}

#mc_embed_signup input:focus {
  border-color: #333;
}


#mc_embed_signup .button {
  background-color: #aaa;
  border: 0 none;
  border-radius: 4px;
  clear: both;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: normal;
  height: 32px;
  line-height: 32px;
  margin: 0 5px 10px 0;
  padding: 0 22px;
  text-align: center;
  text-decoration: none;
  transition: all 0.23s ease-in-out 0s;
  vertical-align: top;
  white-space: nowrap;
  width: auto;
}

#mc_embed_signup .button:hover {
  background-color: #777;
}


#mc_embed_signup .mc-field-group {
  clear: left;
  min-height: 50px;
  padding-bottom: 3%;
  position: relative;
  width: 96%;
}

#mc_embed_signup .size1of2 {
  clear: none;
  display: inline-block;
  float: left;
  margin-right: 4%;
  width: 46%;
}

#mc_embed_signup .mc-field-group label {
  display: block;
  margin-bottom: 3px;
}

#mc_embed_signup .mc-field-group input {
  display: block;
  padding: 8px 0;
  text-indent: 2%;
  width: 100%;
}

#mc_embed_signup .mc-field-group select {
  display: inline-block;
  margin-bottom: 2px;
  padding: 5px 0;
  width: 99%;
}

#mc_embed_signup .datefield,
#mc_embed_signup .phonefield-us {
  padding: 5px 0;
}

#mc_embed_signup .datefield input,
#mc_embed_signup .phonefield-us input {
  display: inline;
  letter-spacing: 1px;
  margin: 0 2px;
  padding: 5px 0 2px;
  text-align: center;
  width: 60px;
}

#mc_embed_signup .phonefield-us .phonearea input,
#mc_embed_signup .phonefield-us .phonedetail1 input {
  width: 40px;
}

#mc_embed_signup .datefield .monthfield input,
#mc_embed_signup .datefield .dayfield input {
  width: 30px;
}

#mc_embed_signup .datefield label,
#mc_embed_signup .phonefield-us label {
  display: none;
}

#mc_embed_signup .clear {
  clear: both;
}

#mc_embed_signup .mc-field-group.input-group ul {
  list-style: none;
  margin: 0;
  padding: 5px 0;
}

#mc_embed_signup .mc-field-group.input-group ul li {
  display: block;
  margin: 0;
  padding: 3px 0;
}

#mc_embed_signup .mc-field-group.input-group label {
  display: inline;
}

#mc_embed_signup .mc-field-group.input-group input {
  border: none;
  display: inline;
  width: auto;
}


#mc_embed_signup div#mce-responses {
  clear: both;
  float: left;
  margin: 0 5%;
  overflow: hidden;
  padding: 0 0.5em;
  top: -1.4em;
  width: 90%;
}

#mc_embed_signup div.response {
  float: left;
  font-weight: bold;
  margin: 1em 0;
  padding: 1em 0.5em 0.5em 0;
  top: -1.5em;
  width: 80%;
  z-index: 1;
}

#mc_embed_signup #mce-error-response {
  display: none;
}

#mc_embed_signup #mce-success-response {
  color: var(--color-green);
  display: none;
}

#mc_embed_signup label.error {
  display: block;
  float: none;
  margin-left: 1.05em;
  padding: 0.5em 0;
  text-align: left;
  width: auto;
}

#mc-embedded-subscribe {
  clear: both;
  display: block;
  margin: 1em 0 1em 5%;
  width: auto;
}

#mc_embed_signup #num-subscribers {
  font-size: 1.1em;
}

#mc_embed_signup #num-subscribers span {
  border: 1px solid #ccc;
  font-weight: bold;
  margin-right: 0.5em;
  padding: 0.5em;
}

#mc_embed_signup #mc-embedded-subscribe-form div.mce_inline_error {
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 3px;
  color: #e85c41;
  display: inline-block;
  font-size: 14px;
  font-weight: normal;
  margin: 2px 0 1em;
  padding: 5px 10px;
  z-index: 1;
}

#mc_embed_signup #mc-embedded-subscribe-form input.mce_inline_error {
  border: 2px solid #e85c41;
}
</style>
