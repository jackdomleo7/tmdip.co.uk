<template>
  <main class="content">
    <h3 v-if="header" class="content__header">{{ header }}</h3>
    <slot />
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PageContent extends Vue {
  @Prop({ type: String })
  private readonly header!: string;
}
</script>

<style lang="scss" scoped>
.content {
  flex: 1;
  margin: 3rem auto;
  max-width: 68rem;
  padding: 0 1rem;

  &__header {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 3rem;

    @media (min-width: $scale-desktop) {
      font-size: 2.2rem;
    }
  }
}
</style>
