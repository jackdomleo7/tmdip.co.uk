<template>
  <section class="qab">
    
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Icon, SiteLink } from "@/components";
import CompanyInfo, { TelNumber } from "@/helpers/companyInfo";

@Component({
  components: { Icon, SiteLink }
})
export default class QuickActionBar extends Vue {
  
}
</script>

<style lang="scss" scoped>
  .qab {
    width: 100vw;
    height: 4rem;
    background-color: var(--color-grey-75);
    position: sticky;
    bottom: 0;
  }
</style>
