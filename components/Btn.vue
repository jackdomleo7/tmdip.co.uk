<template>
  <nuxt-link v-if="tag === 'nuxt-link'" @click="emit('click')" :to="url" :class="getClasses()">
    <slot />
  </nuxt-link>
  <a v-else-if="tag === 'a'" @click="emit('click')" :href="url" rel="nofollow noopener" :class="getClasses()">
    <slot />
  </a>
  <button v-else-if="tag === 'button'" @click="emit('click')" :class="getClasses()">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Btn',
  props: {
    tag: {
      type: String,
      required: true,
      validator: (value: string): boolean => {
        return ['a', 'nuxt-link', 'button'].includes(value)
      }
    },
    url: {
      type: String,
      default: undefined
    },
    state: {
      type: String,
      default: undefined,
      validator: (value: string): boolean => {
        return ['primary', 'secondary'].includes(value)
      }
    }
  },
  methods: {
    getClasses(): string {
      let classes = ['btn']

      if (this.state) {
        classes.push(`btn--${this.state}`)
      }

      return classes.join(' ')
    }
  }
})
</script>

<style lang="scss" scoped>
.btn {
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-body);
  letter-spacing: 0.8px;
  color: inherit;
  user-select: none;

  &--primary {
    border-radius: 3rem;
    background-color: var(--color-orange);
    color: var(--color-white);
    padding: 0.8rem 1.2rem;
  }

  &--secondary {
    border: 1px solid var(--color-grey);
    padding: 0.8rem 1.2rem;
    color: var(--color-black);
  }
}
</style>
