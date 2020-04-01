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
}
</style>
