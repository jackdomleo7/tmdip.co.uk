<template>
  <component :is="type === 'internal' ? 'router-link' : 'a'" class="link" :to="type === 'internal' ? link : null" :href="type !== 'internal' ? (type === 'email' ? 'mailto:' : (type === 'tel' ? 'tel:' : '')) + link : null" :target="type === 'external' ? '_blank' : null" :rel="type === 'external' || type === 'email' ? 'nofollow' : (type === 'tel' ? 'noopener noreferrer' : null)">
      <slot />
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SiteLink extends Vue {
  @Prop({
    validator: (value: string) => ['email', 'external', 'internal', 'social', 'tel'].includes(value),
  })
  private readonly type!: string;

  @Prop({ type: String })
  private readonly link!: string;
}
</script>

<style lang="scss" scoped>
    .link {
        color: inherit;
        text-decoration: none;
        font-weight: 700;

        &:hover {
            text-decoration: underline;
        }
    }
</style>
