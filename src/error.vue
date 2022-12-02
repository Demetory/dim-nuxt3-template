<script setup lang="ts">
// Types
import IError from '@/types/IError'

// Props
defineProps({
  error: {
    type: Object as () => IError,
    required: true,
  },
})

// Data
const siteTitle = 'Dim Nuxt 3 Template'

// Methods
InitApp()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <Html :lang="$i18n.locale">
    <Head>
      <Title>{{ siteTitle }}</Title>
    </Head>

    <Body>
      <NoScript>
        <section class="noscript">
          <img src="/images/fatality.svg">
          <div>
            <h1>Easy, Tiger</h1>
            <p>Turn JavaScript on, don`t be so paraniod.</p>
          </div>
        </section>
      </NoScript>

      <NuxtLayout>
        <section class="page-error">
          <h1>{{ $t("error.title") }}</h1>
          <p>{{ $t("error.code") }}: {{ error.statusCode }}</p>
          <p>{{ $t("error.message") }}: {{ error.statusMessage }}</p>
          <p><a @click.stop="handleError">{{ $t("error.back") }}</a></p>
        </section>
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style scoped lang="scss">
.page-error {
  p {
    margin: 1rem 0;
  }
  a { cursor: pointer; }
}
</style>