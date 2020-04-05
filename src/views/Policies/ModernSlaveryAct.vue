<template>
  <page-content header="Modern Slavery Act">
    <article>
      <p>
        TMD Interior Projects Ltd recognises that slavery and human trafficking remains a hidden blight on our global society. The aim of our Company is to identify our responsibility by alerting staff to the risks, however small, in our business and in the wider supply chain. Staff are expected and encouraged to report concerns to management, where they are expected to act upon them.
      </p>
    </article>
  </page-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Routes } from "@/router";
import { PageContent } from "@/layout";
import { SiteLink } from "@/components";
import CompanyInfo from "@/helpers/companyInfo";

@Component({
  components: { PageContent, SiteLink }
})
export default class ModernSlaveryAct extends Vue {}
</script>

<style lang="scss" scoped></style>
