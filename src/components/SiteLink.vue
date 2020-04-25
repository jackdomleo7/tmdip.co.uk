<template>
  <router-link v-if="type === 'internal'" class="link" :to="link">
    <slot />
  </router-link>
  <a
    v-else
    class="link"
    :href="
      (type === 'email' ? 'mailto:' : type === 'tel' ? 'tel:' : '') +
      link +
      (type === 'external'
        ? (link.includes('?') ? '&' : '?') + 'ref=tmdip.co.uk'
        : '')
    "
    :target="type === 'external' ? '_blank' : null"
    :rel="
      type === 'external' || type === 'email'
        ? 'nofollow noreferrer'
        : type === 'tel' || type === 'file'
        ? 'noopener noreferrer'
        : null
    "
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SiteLink extends Vue {
  @Prop({
    validator: (value: string) =>
      ["email", "external", "file", "internal", "tel"].includes(value),
    required: true,
  })
  private readonly type!: string;

  @Prop({ type: [Object, String], required: true })
  private readonly link!: object | string;
}
</script>

<style lang="scss" scoped>
.link {
  color: inherit;
  font-weight: 700;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
}
</style>
