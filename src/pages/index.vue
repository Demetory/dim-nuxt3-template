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
  <article>
    <TemplateHomeAbout />
    <TemplateHomeTooling />
    <TemplateHomeModules />
    <TemplateHomeSupport />
  </article>
</template>
