<template>
  <TemplateSlot>
    <template #icon>
      <AtomIconModule />
    </template>
    <template #heading>
      Installed Modules
    </template>
    <template #content>
      <ul>
        <li>
          Routing:
          <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>
        </li>
        <li>
          Vue Store:
          <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>
        </li>
        <li>
          Vue Composition Utilities:
          <a href="https://vueuse.org/" target="_blank" rel="noopener">VueUse</a>
        </li>
        <li>
          Promise based HTTP client:
          <a href="https://axios-http.com/" target="_blank" rel="noopener">Axios</a>
        </li>
        <li>
          CSS Preprocessor:
          <a href="https://sass-lang.com/" target="_blank" rel="noopener">Sass</a>
        </li>
        <li>
          Code quality:
          <a href="https://eslint.org/" target="_blank" rel="noopener">ESLint</a>
          +
          <a href="https://prettier.io/" target="_blank" rel="noopener">Prettier</a>
        </li>
      </ul>
    </template>
  </TemplateSlot>
</template>
