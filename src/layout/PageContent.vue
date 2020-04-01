<template>
  <main class="content">
    <router-view />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageContent extends Vue {}
</script>

<style lang="scss" scoped>
.content {
  flex: 1;
  margin: 3rem auto;
  max-width: 68rem;
  padding: 0 1rem;
}
</style>
