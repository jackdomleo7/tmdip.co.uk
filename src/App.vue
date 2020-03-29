<template>
  <div id="app">
    <jumbo />
    <navbar :show-mobile-nav="isMobileNavDisplayed" />
    <router-view />
  </div>
</template>

<script lang="ts">
import "normalize.css";
import { Component, Vue } from "vue-property-decorator";
import Jumbo from "@/components/Jumbo.vue";
import Navbar from "@/components/Navbar.vue";

@Component({
  components: { Jumbo, Navbar }
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
  height: 200vh;
}
</style>
