<template>
  <nav v-show="showMobileNav" class="navbar">
    <ul class="navbar__list">
      <li
        v-for="(navItem, index) in navList"
        :key="index"
        :aria-setsize="navList.length"
        :aria-posinset="index + 1"
        class="navbar__navitem"
        @click="navItem.subList == null ? navItemClick() : null"
      >
        <nuxt-link
          v-if="navItem.link"
          :to="navItem.link"
          class="navbar__link"
          :aria-current="isCurrentRoute(navItem.link) ? 'page' : null"
        >
          {{ navItem.text }}
        </nuxt-link>
        <div v-else-if="navItem.subList" class="navbar__dropdown">
          <span class="navbar__link" tabindex="0">{{ navItem.text }}</span>
          <ul class="navbar__sublist">
            <li
              v-for="(subItem, subindex) in navItem.subList"
              :key="subindex"
              :aria-setsize="navItem.subList.length"
              :aria-posinset="subindex + 1"
              class="navbar__subitem"
              @click="navItemClick"
            >
              <nuxt-link class="navbar__link" :to="subItem.link">
                {{ subItem.text }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';

interface NavList {
  text: string;
  link?: string | object;
  subList?: NavSubList[];
}

interface NavSubList {
  text: string;
  link: string | object;
}

@Component
export default class Navbar extends Vue {
  @Prop({ type: Boolean, default: false })
  private readonly showMobileNav!: boolean;

  private readonly navList: NavList[] = [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Sub-contractors',
      link: '/sub-contractors'
    },
    {
      text: 'Policies',
      subList: [
        {
          text: 'Modern Slavery Act',
          link: '/policies/modern-slavery-act'
        },
        {
          text: 'Health & Safety',
          link: '/policies/health-and-safety'
        },
        {
          text: 'Environmental Policy',
          link: '/policies/environmental-policy'
        },
        {
          text: 'Privacy Policy',
          link: '/policies/privacy-policy'
        }
      ]
    }
  ];

  private isCurrentRoute (to: string): boolean {
    return this.$route.path === to;
  }

  @Emit()
  public navItemClick () {}
}
</script>

<style lang="scss" scoped>
@media (min-width: 45.625em) {
  .navbar {
    background-color: var(--color-grey-300);
    display: inline-block !important;
    font-size: 1rem;
    width: 100%;

    &__list {
      height: 100%;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    &__navitem {
      float: left;
      position: relative;

      &:hover {
        .navbar__sublist {
          display: block;
        }
      }
    }

    &__link {
      color: initial;
      cursor: pointer;
      display: block;
      font-weight: 700;
      padding: 1.2rem;
      text-decoration: none;
      user-select: none;

      &:hover,
      &.nuxt-link-exact-active {
        background-color: var(--color-grey-200);
      }
    }

    &__sublist {
      background-color: var(--color-grey-300);
      display: none;
      list-style-type: none;
      padding-left: 0;
      position: absolute;
      text-align: center;
      top: 100%;
      width: 18rem;

      .navbar__link {
        padding: 0.5rem 1rem;
      }
    }

    &__dropdown {
      &:focus-within {
        .navbar__sublist {
          display: block;
        }
      }

      .navbar__link {
        &:focus {
          ~ .navbar__sublist {
            display: block;
          }
        }
      }
    }
  }
}
@media (max-width: 45.5625em) {
  .navbar {
    background-color: var(--color-grey-700);
    color: var(--color-grey-50);
    display: flex;
    font-size: 1rem;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    text-align: center;
    top: 0;
    width: 100vw;
    z-index: 998;

    &__list,
    &__sublist {
      list-style-type: none;
      padding-left: 0;
    }

    &__list {
      margin-top: 4rem;
    }

    &__navitem {
      padding: 0.8rem 0;
    }

    &__sublist {
      display: none;
    }

    &__link {
      color: inherit;
      position: relative;
      text-decoration: none;

      &:focus,
      &:focus-within {
        ~ .navbar__sublist {
          display: block;
        }
      }

      &.router-link-exact-active {
        color: var(--color-orange);
      }
    }

    span.navbar__link {
      &::before {
        content: "+";
        left: -1.25rem;
        position: absolute;
      }
    }

    &__dropdown {
      &:focus-within {
        .navbar__sublist {
          display: block;
        }
      }

      .navbar__link {
        &:focus {
          ~ .navbar__sublist {
            display: block;
          }
        }
      }
    }

    &__subitem {
      padding: 0.5rem 0;
    }
  }
}
</style>
