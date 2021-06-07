<template>
  <nav class="nav">
    <ul class="nav__primary">
      <li v-for="(navItem, index) in navItems" :key="navItem.text" :aria-setsize="navItems.length" :aria-posinset="index + 1">
        <nuxt-link v-if="navItem.url" :to="navItem.url">
          {{ navItem.text }}
          <svg-icon v-if="navItem.subMenu" name="chevron-down" />
        </nuxt-link>
        <a v-else href="javascript:void(0)">
          {{ navItem.text }}
          <svg-icon v-if="navItem.subMenu" name="chevron-down" />
        </a>
        <ul v-if="navItem.subMenu" class="nav__submenu">
          <li v-for="(subItem, index) in navItem.subMenu" :key="subItem.url" :aria-setsize="navItem.subMenu.length" :aria-posinset="index + 1">
            <nuxt-link :to="subItem.url">{{ subItem.text }}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import siteconfig from '@/siteconfig.json'

interface ISubNav {
  text: String;
  url?: String;
}

interface INav extends ISubNav {
  subMenu?: ISubNav;
}

export default Vue.extend({
  name: 'Navigation',
  data () {
    return {
      siteconfig,
      navItems: [
        {
          text: 'Home',
          url: '/'
        },
        {
          text: 'Services',
          subMenu: [
            {
              text: 'Shop fitting',
              url: '/services/shop-fitting'
            },
            {
              text: 'Commercial Projects',
              url: '/services/commercial-projects'
            },
            {
              text: 'Timber Homes',
              url: '/services/timber-homes'
            },
            {
              text: 'Domestics',
              url: '/services/domestics'
            },
            {
              text: 'Building Conversion',
              url: '/services/building-conversion'
            },
            {
              text: 'White Boxes',
              url: '/services/white-boxes'
            }
          ] as ISubNav[]
        },
        {
          text: 'Contact',
          url: '/contact'
        },
        {
          text: 'Policies',
          subMenu: [
            {
              text: 'Modern Slavery Act',
              url: '/policies/modern-slavery-act'
            },
            {
              text: 'Health & Safety',
              url: '/policies/health-and-safety'
            },
            {
              text: 'Environmental Policy',
              url: '/policies/environmental-policy'
            },
            {
              text: 'Privacy Policy',
              url: '/policies/privacy-policy'
            }
          ] as ISubNav[]
        }
      ] as INav[]
    }
  },
  props: {
    header: { // To be replaced with asyncData in Nuxt 3
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.nav {
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--color-black);
  position: relative;

  &::before {
    content: '';
    display: block;
    border-top: 1px solid var(--color-black);
    width: 80%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &__primary {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style-type: none;
    padding-left: 0;
    margin: 0;

    li {
      position: relative;

      @media (hover: hover) {
        &:hover a,
        a:focus,
        &:focus-within a {
          + .nav__submenu {
            opacity: 1;
            visibility: visible;
          }
        }
      }
    }
    
    a {
      font-weight: 700;
      color: var(--color-black);
      text-decoration: none;
      padding: 1rem;
      display: flex;
      align-items: center;

      &[href="javascript:void(0)"] {
        cursor: default;
      }

      @media (hover: hover) {
        &:hover {
          background-color: var(--color-orange-o50);

          svg {
            color: var(--color-black);
          }
        }
      }
    }

    svg {
      width: 1.2rem;
      height: 1.2rem;
      color: var(--color-orange);
    }
  }

  &__submenu {
    position: absolute;
    top: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all 160ms ease;
    will-change: opacity, visibility;
    border: 1px solid var(--color-black);
    border-top-color: transparent;
    background-color: var(--color-white);
    padding-left: 0;
    list-style-type: none;
    width: 12.5rem;
  }
}
</style>
