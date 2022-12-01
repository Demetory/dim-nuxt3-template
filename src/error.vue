<script setup lang="ts">
// I18n
import { useI18n } from 'vue-i18n'

// Inteface
import IError from '@/types/IError'

// Props
defineProps({
  error: {
    type: Object as () => IError,
    required: true,
  },
})

// Data
const { locale } = useI18n()
</script>

<script lang="ts">
export default {
  name: 'TheError',
  layout: 'error',
}
</script>

<template>
  Locale: {{ locale }}
  <h1>Something goes wrong</h1>
  <p>Error code: {{ error.statusCode }}</p>
  <p>Message: {{ error.statusMessage }}</p>
</template>
