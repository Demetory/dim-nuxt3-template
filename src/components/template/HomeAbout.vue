<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
</script>

<template>
  <AtomSlot>
    <template #icon>
      <IconDocumentation class="icon" />
    </template>
    <template #heading> What`s this about </template>
    <template #content>
      <ul>
        <li>
          Based on <AtomLink :params="examplePiniaStore.links.nuxt" /> framework and uses
          <AtomLink :params="examplePiniaStore.links.vite" /> as project build tool.
        </li>
        <li>
          Full
          <AtomLink :params="examplePiniaStore.links.typescript" /> support, structured with
          <AtomLink :params="examplePiniaStore.links.atomic" /> and
          <AtomLink :params="examplePiniaStore.links.sfc" />
        </li>
      </ul>
    </template>
  </AtomSlot>
</template>
