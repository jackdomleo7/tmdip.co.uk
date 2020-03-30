<template>
  <div id="app">
    <jumbo />
    <navigation />
    <router-view style="flex: 1;" />
    <footer-bar />
  </div>
</template>

<script lang="ts">
import "normalize.css";
import { Component, Vue } from "vue-property-decorator";
import Jumbo from "@/components/jumbo/Jumbo.vue";
import Navigation from "@/components/navigation/Navigation.vue";
import FooterBar from "@/components/FooterBar.vue";

@Component({
  components: { Jumbo, Navigation, FooterBar }
})
export default class App extends Vue {
  private get companyName() {
    return process.env.VUE_APP_NAME;
  }
}
</script>

<style lang="scss">
@import "./scss/main";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
