<template>
  <nuxt-link v-if="type === 'internal'" class="link" :to="link">
    <slot />
  </nuxt-link>
  <a
    v-else
    class="link"
    :href="
      (type === 'email' ? 'mailto:' : type === 'tel' ? 'tel:' : '') +
        link +
        (type === 'external'
          ? (link.includes('?') ? '&' : '?') +
            'ref=' +
            companyWebsiteDomain.url
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import ComponyInfo, { WebDomain } from '@/middleware/companyInfo';

@Component
export default class SiteLink extends Vue {
  @Prop({
    validator: (value: string) =>
      ['email', 'external', 'file', 'internal', 'tel'].includes(value),
    required: true
  })
  private readonly type!: string;

  @Prop({ type: [Object, String], required: true })
  private readonly link!: object | string;

  private get companyWebsiteDomain (): WebDomain {
    return ComponyInfo.companyWebsiteDomain;
  }
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
