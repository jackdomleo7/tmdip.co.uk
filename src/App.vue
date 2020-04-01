<template>
  <div id="app" class="app">
    <jumbo />
    <navigation />
    <page-content>
      <router-view />
    </page-content>
    <footer-bar />
    <quick-action-bar />
  </div>
</template>

<script lang="ts">
import "normalize.css";
import { Component, Vue } from "vue-property-decorator";
import {
  Jumbo,
  Navigation,
  PageContent,
  FooterBar,
  QuickActionBar
} from "@/layout";

@Component({
  components: { Jumbo, Navigation, PageContent, FooterBar, QuickActionBar }
})
export default class App extends Vue {
  private mounted() {
    this.getDeepLinkPath();
  }
  private getDeepLinkPath() {
    // Solution for GitHub pages SPA deep linking
    // Also see /public/404.html
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.$router.push(path);
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main";

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
