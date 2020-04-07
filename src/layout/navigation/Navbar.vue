<template>
  <nav v-show="showMobileNav" class="navbar">
    <ul class="navbar__list">
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
import { Routes } from "@/router";

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
  private Routes: Routes = Routes;
  @Prop({ type: Boolean, default: false })
  private readonly showMobileNav!: boolean;

  private readonly navList: NavList[] = [
    {
      text: "Home",
      link: { name: Routes.Home }
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
          link: { name: Routes.ModernSlaveryAct }
        },
        {
          text: "Health & Safety",
          link: { name: Routes.HealthAndSafety }
        },
        {
          text: "Environmental Policy",
          link: { name: Routes.EnvironmentalPolicy }
        },
        {
          text: "Quality Managemnet System",
          link: "#"
        },
        {
          text: "Privacy Policy",
          link: { name: Routes.PrivacyPolicy }
        }
      ]
    }
  ];

  private isCurrentRoute(to: string): boolean {
    return this.$route.path === to;
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 45.625em) {
  .navbar {
    background-color: var(--color-grey-300);
    display: inline-block !important;
    font-size: 1rem;
    position: sticky;
    top: 0;
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
      &.router-link-exact-active {
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
