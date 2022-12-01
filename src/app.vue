<script setup lang="ts">
// App Initialization
import { InitApp } from '~/utils/initApp'

// Methods
InitApp()

// Hooks
</script>

<template>
  <Html :lang="$i18n.locale">
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
