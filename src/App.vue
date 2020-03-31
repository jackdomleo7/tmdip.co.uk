<template>
  <div id="app" class="app">
    <jumbo />
    <navigation />
    <router-view style="flex: 1;" />
    <footer-bar />
    <quick-action-bar />
  </div>
</template>

<script lang="ts">
import "normalize.css";
import { Component, Vue } from "vue-property-decorator";
import { Jumbo, Navigation, FooterBar, QuickActionBar } from "@/layout";

@Component({
  components: { Jumbo, Navigation, FooterBar, QuickActionBar }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./scss/main";

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
