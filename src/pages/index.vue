<script setup lang="ts">
// Methods
definePageMeta({
  title: "common.siteNavi.home",
});

useHead({
  meta: [{ name: "description", content: "Nuxt Starter Template" }],
});
</script>

<template>
  <div class="page-wrapper">
    <TemplateHomeAbout />
    <TemplateHomeTooling />
    <TemplateHomeModules />
    <TemplateHomeSupport />
  </div>
</template>
