<script setup lang="ts">
// Methods
definePageMeta({
  title: "common.siteNavi.example",
});

useHead({
  meta: [{ name: "description", content: "Nuxt Starter Template" }],
});
</script>

<template>
  <div class="page-wrapper">
    <TemplateExamplesVueUse />
    <TemplateExamplesPinia />
  </div>
</template>
