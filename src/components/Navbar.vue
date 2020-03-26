<template>
  <header class="navbar">
    <ul class="navbar__list">
      <li v-for="(navItem, index) in navList" :key="index" class="navbar__navitem">
        <router-link v-if="navItem.link" :to="navItem.link" class="navbar__link">
          {{ navItem.text }}
        </router-link>
        <div v-else-if="navItem.subList" class="navbar__dropdown">
          <span class="navbar__link" tabindex="0">{{ navItem.text }}</span>
          <ul class="navbar__sublist">
            <li v-for="(subItem, index) in navItem.subList" :key="index" class="navbar__subitem">
              <router-link class="navbar__link" :to="subItem.link">
                {{ subItem.text }}
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface INavList {
  text: string,
  link?: string | object,
  subList?: INavSubList[]
}

interface INavSubList {
  text: string,
  link: string | object
}

@Component
export default class Navbar extends Vue {
  private readonly navList: INavList[] = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Interior fit outs',
      link: '/interior-fit-outs'
    },
    {
      text: 'Timber homes',
      link: '/timber-homes'
    },
    {
      text: 'Policies',
      subList: [
        {
          text: 'Modern Slavery Act',
          link: '#'
        },
        {
          text: 'Health & Safety',
          link: '#'
        },
        {
          text: 'Environmental Policy',
          link: '#'
        },
        {
          text: 'Quality Managemnet System',
          link: '#'
        },
        {
          text: 'Privacy Policy',
          link: '#'
        },
        {
          text: 'ICO',
          link: '#'
        },
      ]
    }
  ];
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  background-color: var(--color-grey-300);
  position: sticky;
  top: 0;
  display: inline-block;
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

    &:hover {
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
</style>
