<template>
  <div id="app">
    <jumbo />
    <navbar :show-mobile-nav="isMobileNavDisplayed" />
    <router-view style="flex: 1;" />
    <footer-bar />
  </div>
</template>

<script lang="ts">
import "normalize.css";
import { Component, Vue } from "vue-property-decorator";
import Jumbo from "@/components/jumbo/Jumbo.vue";
import Navbar from "@/components/Navbar.vue";
import FooterBar from "@/components/FooterBar.vue";

@Component({
  components: { Jumbo, Navbar, FooterBar }
})
export default class App extends Vue {
  private isMobileNavDisplayed = false;

  private get companyName() {
    return process.env.VUE_APP_NAME;
  }
}
</script>

<style lang="scss">
@import "./scss/main";

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
