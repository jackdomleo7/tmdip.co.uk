<template>
  <nav class="nav">
    <div class="nav__mobile">
      <a :href="`mailto:${siteconfig.email}`" target="_blank" rel="noopener noreferrer">
        <svg-icon name="mail" />
        Email Us
      </a>
      <button class="nav__hamburger" :class="{'nav__hamburger--open': showMobileNav}" @click="showMobileNav = !showMobileNav">
        <span></span>
        <div class="nav__hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="sr-only">{{ showMobileNav ? 'Close' : 'Show' }} menu</div>
      </button>
      <a :href="`tel:${siteconfig.tel.country.replace(/\s/g, '')}`" target="_blank" rel="noopener noreferrer">
        <svg-icon name="phone" />
        Call Us
      </a>
    </div>
    <ul class="nav__primary" :class="{'nav__primary--mobile-open': isMobile && showMobileNav}">
      <li v-for="(navItem, index) in navItems" :key="navItem.text" :aria-setsize="navItems.length" :aria-posinset="index + 1" :class="{ 'nav__item--open': displayedMobileNavItemIndex === index }">
        <nuxt-link v-if="navItem.url" :to="navItem.url" :aria-current="isCurrentPage(navItem.url)" @click="navItemClick($event, index)">
          {{ navItem.text }}
          <svg-icon v-if="navItem.subMenu" name="chevron-down" />
        </nuxt-link>
        <a v-else href="javascript:void(0)" :aria-current="isCurrentPage(navItem.url)" @click="navItemClick($event, index)">
          {{ navItem.text }}
          <svg-icon v-if="navItem.subMenu" name="chevron-down" />
        </a>
        <ul v-if="navItem.subMenu" class="nav__submenu">
          <li v-for="(subItem, index) in navItem.subMenu" :key="subItem.url" :aria-setsize="navItem.subMenu.length" :aria-posinset="index + 1">
            <nuxt-link :to="subItem.url" :aria-current="isCurrentPage(subItem.url)">{{ subItem.text }}</nuxt-link>
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
      isMobile: false,
      isTouchscreen: false,
      showMobileNav: false,
      displayedMobileNavItemIndex: null as null | number,
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
          text: 'Projects',
          url: '/projects'
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
  watch: {
    // Close navigation menu on page change
    '$route' () {
      this.showMobileNav = false
      this.displayedMobileNavItemIndex = null
    }
  },
  mounted (): void {
    this.setResponsiveness()
    window.addEventListener('resize', this.setResponsiveness)
  },
  destroyed () {
    window.removeEventListener('resize', this.setResponsiveness)
  },
  methods: {
    setResponsiveness (): void {
      const navBreak = getComputedStyle(document.querySelector('nav.nav')!).getPropertyValue('--nav-break')
      this.isMobile = window.matchMedia(`max-width: ${navBreak}`).matches || window.innerWidth <= (+(navBreak.replace('em', '')) * 16 /* em to px */)
      this.isTouchscreen = !window.matchMedia('hover: hover').matches
      console.log(this.isMobile)
      console.log(navBreak)

    },
    isCurrentPage (path: string): 'page' | undefined {
      return this.$route.path === path ? 'page' : undefined
    },
    navItemClick (event: Event, index: number): void {
      if (this.navItems[index].subMenu && (this.isMobile || this.isTouchscreen)) {
        event.preventDefault()
        this.displayedMobileNavItemIndex = this.displayedMobileNavItemIndex === index ? null : index
      }
    }
  }
})
</script>

<style lang="scss" scoped>
$nav-break: 65.75em;
$nav-height: 3.8rem;

.nav {
  --nav-break: #{$nav-break};

  @media (max-width: $nav-break - (1em/16)) {
    &__mobile {
      position: fixed;
      z-index: 2;
      bottom: 0;
      left: 0;
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: var(--color-grey-lightest);
      height: $nav-height;
      box-shadow: 0 0 8px 2px rgba(0,0,0,0.2);

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.75rem;
        text-decoration: none;
        color: var(--color-black);

        svg {
          height: 1.8rem;
          width: 1.8rem;
          fill: var(--color-black);
        }
      }
    }

    &__hamburger {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      bottom: 25%;
      width: 3.375rem;
      height: 1.9375rem;
      background-color: var(--color-orange);
      border: none;
      margin: 1rem 0;
      box-shadow: 0 0 8px rgba(0,0,0,0.4);

      &::before,
      &::after {
        content: "";
        position: absolute;
        z-index: 1;
        width: 2.375rem;
        height: 2.375rem;
        transform: scaleY(0.5774) rotate(-45deg);
        background-color: inherit;
        left: 0.5rem;
        box-shadow: 0 0 8px rgba(0,0,0,0.4);
      }

      &::before {
        top: -1.1875rem;
      }

      &::after {
        bottom: -1.1875rem;
      }

      > span {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 3.375rem;
        height: 1.9375rem;
        z-index: 2;
        background: inherit;
      }

      &-icon {
        width: 1.875rem;
        height: 1.375rem;
        position: relative;
        z-index: 2;
        transform: rotate(0deg);
        cursor: pointer;

        span {
          display: block;
          position: absolute;
          height: 0.25rem;
          width: 100%;
          background-color: var(--color-white);
          border-radius: 0.5rem;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;

          &:nth-child(1) {
            top: 0;
          }

          &:nth-child(2),
          &:nth-child(3) {
            top: 45%;
          }

          &:nth-child(4) {
            top: 90%;
          }

          .nav__hamburger--open & {
            &:nth-child(1),
            &:nth-child(4) {
              top: 45%;
              width: 0;
              left: 50%;
            }

            &:nth-child(2) {
              transform: rotate(45deg);
            }

            &:nth-child(3) {
              transform: rotate(-45deg);
            }
          }
        }
      }
    }

    &__primary {
      position: fixed;
      z-index: 1;
      top: 100%;
      transition: top 0.4s ease;
      will-change: top;
      background-color: var(--color-white);
      box-shadow: 0 0 8px 2px rgba(0,0,0,0.2);
      height: calc(100vh - #{$nav-height});
      overflow-y: auto;
      padding-left: 0;
      margin: 0;
      padding: 2rem 0;
      list-style-type: none;
      width: 100vw;

      &--mobile-open {
        top: 0;
      }

      li {
        max-width: 100%;
        width: 100%;
        border-bottom: 1px solid transparent;
        overflow: hidden;
        max-height: 3rem;
        transition: max-height 160ms ease;
        will-change: max-height;

        &:not(:last-of-type) {
          border-bottom-color: var(--color-grey-light);
        }

        &.nav__item--open {
          max-height: 9999rem;

          ul {
            transform: translateY(0);
          }
        }
      }

      a {
        text-decoration: none;
        font-weight: 700;
        color: var(--color-black);
        background-color: var(--color-white);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.8rem 1rem;
        position: relative;
        z-index: 12;

        svg {
          height: 1.6rem;
          width: 1.6rem;
        }
      }

      ul {
        transform: translateY(-115%);
        transition: transform 160ms ease;
        will-change: transform;
        position: relative;
        z-index: 11;
      }
    }
  }

  @media (min-width: $nav-break) {
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--color-black);
    position: relative;

    &__mobile {
      display: none;
    }

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
      position: unset;
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

        &.nav__item--open {
          .nav__submenu {
            opacity: 1;
            visibility: visible;
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
      transition: 160ms ease;
      transition-property: opacity, visibility;
      will-change: opacity, visibility;
      border: 1px solid var(--color-black);
      border-top-color: transparent;
      background-color: var(--color-white);
      padding-left: 0;
      list-style-type: none;
      width: 12.5rem;
    }
  }
}
</style>
