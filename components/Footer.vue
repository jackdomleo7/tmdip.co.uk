<template>
  <footer class="footer">
    <div class="footer__legal">
      <div>
        <p>&copy;{{ year }} {{ siteconfig.brand_name.full }}.<br/>All rights reserved.</p>
        <p>Company Registration: {{ siteconfig.company_registration }}<br/>VAT Number: {{ siteconfig.vat_number }}</p>
      </div>
      <hr />
      <div>
        <nuxt-link to="/privacy-policy" class="link--mute">Privacy Policy</nuxt-link>
        <div class="footer__social">
          <ul>
            <li v-for="social in socials" :key="social.text">
              <a :href="social.url" rel="noopener nofollow" data-cooltipz-dir="top" :aria-label="social.text">
                <svg-icon :name="social.icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import siteconfig from '@/siteconfig.json'

interface ISocial {
  text: string;
  icon: string;
  url: string;
}

export default Vue.extend({
  name: 'Footer',
  data () {
    return {
      siteconfig,
      socials: [
        {
          text: 'LinkedIn',
          icon: 'linkedin',
          url: 'https://www.linkedin.com/company/tmdip'
        },
        {
          text: 'Facebook',
          icon: 'facebook',
          url: 'https://www.facebook.com/TMD-Interior-Projects-615787538843133'
        },
        {
          text: 'Instagram',
          icon: 'instagram',
          url: 'https://www.instagram.com/TMD_Interior_Projects'
        }
      ] as ISocial[]
    }
  },
  computed: {
    year (): number {
      return new Date().getFullYear()
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  max-width: 82em;
  margin-inline: auto;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__social {
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      list-style-type: none;
      padding-left: 0;
      margin: 0;
    }

    a {
      border-radius: 50%;
      border: 2px solid var(--color-black);
      background-color: transparent;
      color: var(--color-black);
      display: flex;
      height: 2.2rem;
      width: 2.2rem;
      padding: 0.4rem;
    }
  }

  &__legal {
    width: 100%;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      p {
        width: 100%;
        text-align: center;
        margin: 0;
      }

      @media (min-width: 45em) {
        flex-direction: row;

        p {
          &:first-of-type {
            text-align: left;
          }

          &:last-of-type {
            text-align: right;
          }
        }
      }
    }

    .link--mute {
      color: var(--color-grey-darkest);
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }

    hr {
      margin-block: 1rem;
    }
  }
}
</style>
