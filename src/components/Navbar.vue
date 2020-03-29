<template>
  <nav v-show="showMobileNav" class="navbar">
    <ul
      class="navbar__list"
      :class="isNavDisplayed ? 'navbar__list--show' : ''"
    >
      <li
        v-for="(navItem, index) in navList"
        :key="index"
        class="navbar__navitem"
      >
        <router-link
          v-if="navItem.link"
          :to="navItem.link"
          class="navbar__link"
          :aria-current="isCurrentRoute(navItem.link) ? 'page' : null"
        >
          {{ navItem.text }}
        </router-link>
        <div v-else-if="navItem.subList" class="navbar__dropdown">
          <span class="navbar__link" tabindex="0">{{ navItem.text }}</span>
          <ul class="navbar__sublist">
            <li
              v-for="(subItem, index) in navItem.subList"
              :key="index"
              class="navbar__subitem"
            >
              <router-link class="navbar__link" :to="subItem.link">
                {{ subItem.text }}
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

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
      text: "Home",
      link: "/"
    },
    {
      text: "Interior fit outs",
      link: "/interior-fit-outs"
    },
    {
      text: "Timber homes",
      link: "/timber-homes"
    },
    {
      text: "Policies",
      subList: [
        {
          text: "Modern Slavery Act",
          link: "#"
        },
        {
          text: "Health & Safety",
          link: "#"
        },
        {
          text: "Environmental Policy",
          link: "#"
        },
        {
          text: "Quality Managemnet System",
          link: "#"
        },
        {
          text: "Privacy Policy",
          link: "#"
        },
        {
          text: "ICO",
          link: "#"
        }
      ]
    }
  ];

  private isCurrentRoute(to: string) {
    return this.$route.path === to;
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 730px) {
  .navbar {
    width: 100%;
    background-color: var(--color-grey-300);
    position: sticky;
    top: 0;
    display: inline-block !important;
    font-size: 1rem;

    &__list {
      list-style-type: none;
      margin: 0;
      padding: 0;
      height: 100%;
    }

    &__navitem {
      position: relative;
      float: left;

      &:hover {
        .navbar__sublist {
          display: block;
        }
      }
    }

    &__link {
      display: block;
      padding: 1.2rem;
      cursor: pointer;
      font-weight: 700;
      color: initial;
      text-decoration: none;
      user-select: none;

      &:hover,
      &.router-link-exact-active {
        background-color: var(--color-grey-200);
      }
    }

    &__sublist {
      position: absolute;
      display: none;
      list-style-type: none;
      padding-left: 0;
      width: 18rem;
      top: 100%;
      text-align: center;
      background-color: var(--color-grey-300);

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

@media (max-width: 729px) {
  .navbar {
    background-color: var(--color-grey-700);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    color: var(--color-grey-50);

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
      text-decoration: none;
      position: relative;

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
        position: absolute;
        left: -1.25rem;
      }
    }

    &__subitem {
      padding: 0.5rem 0;
    }
  }
}
</style>
