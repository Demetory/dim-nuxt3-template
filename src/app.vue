<script setup lang="ts">
// Methods
InitApp()
</script>

<template>
  <Html :lang="$i18n.locale">
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
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
