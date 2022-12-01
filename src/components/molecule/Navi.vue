<script setup lang="ts">
// Data
const data = [
  { text: 'Home', path: '/' },
  { text: 'Examples', path: '/examples' },
]
</script>

<template>
  <nav>
    <p>
      <NuxtLink v-for="(link, index) in data" :key="`navi-${index}`" :to="link.path">
        {{ link.text }}
      </NuxtLink>
    </p>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: row;

  a:not(:last-child) {
    margin-right: grid.$gap;
  }
}
</style>
