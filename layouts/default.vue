<template>
  <div class="app">
    <hero />
    <navigation />
    <nuxt />
    <footer-bar />
    <quick-action-bar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Hero, Navigation, FooterBar, QuickActionBar } from "@/components";

@Component({
  components: { Hero, Navigation, FooterBar, QuickActionBar },
})
export default class Default extends Vue {}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
