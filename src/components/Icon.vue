<template>
  <svg aria-hidden="true">
    <use :xlink:href="'assets/svg-sprite.svg#icon-' + icon"></use>
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Icon extends Vue {
  @Prop({ type: String })
  private readonly icon!: string;
}
</script>

<style lang="scss" scoped>
  svg {
    height: 100%;
    width: 100%;
  }
</style>
