<template>
  <form
    action="https://formspree.io/xknqkylj"
    method="POST"
    class="form"
  >
    <p id="required-legend" class="form__legend" aria-hidden="true">
      <small>
        <span class="form__required" aria-hidden="true">*</span> Indicates
        required
      </small>
    </p>
    <div class="form__field form__field--half form__field--new-line">
      <label class="textbox">
        <span>Name:
        </span>
        <input class="textbox__entry" type="text" name="Name" placeholder="Your name">
      </label>
    </div>
    <div class="form__fields">
      <div class="form__field form__field--half">
        <label class="textbox">
          <span>Email address:
            <span class="form__required" aria-hidden="true">*</span>
          </span>
          <input
            v-model="email"
            class="textbox__entry"
            type="email"
            name="Email"
            placeholder="your.email@example.com"
            required
          >
        </label>
      </div>
      <div class="form__field form__field--half">
        <label class="textbox">
          <span>Telephone:
            <span class="form__required" aria-hidden="true">*</span>
          </span>
          <input
            v-model="telephone"
            class="textbox__entry"
            type="tel"
            name="Telephone"
            placeholder="+44 115..."
            required
          >
        </label>
      </div>
      <div class="form__field form__field--half">
        <label class="textbox">
          <span>Company name:
            <span class="form__required" aria-hidden="true">*</span>
          </span>
          <input
            v-model="companyName"
            class="textbox__entry"
            type="text"
            name="Company name"
            placeholder="Your company's name"
            required
          >
        </label>
      </div>
      <div class="form__field form__field--half">
        <label class="textbox">
          <span>Website:
          </span>
          <input class="textbox__entry" type="url" name="Website" placeholder="yourwebsite.com">
        </label>
      </div>
      <div class="form__field form__field--third">
        <label class="textbox">
          <span>Public liability value (£m):
            <span class="form__required" aria-hidden="true">*</span>
          </span>
          <input
            v-model="plv"
            class="textbox__entry"
            type="number"
            name="Public liability value (£m)"
            step="0.01"
            placeholder="10"
            required
          >
        </label>
      </div>
      <div class="form__field form__field--third">
        <label class="textbox">
          <span>Employer's liability value (£m):
          </span>
          <input class="textbox__entry" type="number" name="Employer's liability value (£m)" step="0.01" placeholder="12">
        </label>
      </div>
      <div class="form__field form__field--third">
        <label class="textbox">
          <span>Professional Indemnity value (£m):
          </span>
          <input class="textbox__entry" type="number" name="Professional Indemnity value (£m)" step="0.01" placeholder="6.5">
        </label>
      </div>
      <div class="form__field">
        <label class="textbox">
          <span>Trade:
          </span>
          <input class="textbox__entry" type="text" name="Trade" placeholder="Construction / Plumber / Electrician / Plasterer">
        </label>
      </div>
      <div class="form__field">
        <label class="textbox">
          <span>Message:
          </span>
          <textarea class="textbox__entry" type="number" name="Message" placeholder="We would love to be considered for future contractor work..." />
        </label>
      </div>
      <div class="form__field">
        <label class="checkbox">
          <input
            v-model="agreed"
            type="checkbox"
            class="checkbox__input"
          >
          <span class="checkbox__checkmark" />
          <span>
            I agree to let {{ companyNameWithLtd }} use my information provided to contact me about potential job/contact opportunities.
          </span>
        </label>
      </div>
      <button :disabled="!agreed || !email || !telephone || !plv || !companyName" class="button" type="submit">
        Send
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { SiteLink } from '@/components';
import CompanyInfo from '@/middleware/companyInfo';

@Component({
  components: { SiteLink }
})
export default class SubContractorForm extends Vue {
  private agreed: boolean = false;
  private email: string = '';
  private telephone: string = '';
  private plv: string = '';
  private companyName: string = '';

  private get companyNameWithLtd (): string {
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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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

  textarea {
    resize: vertical;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    min-height: 5rem;
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
