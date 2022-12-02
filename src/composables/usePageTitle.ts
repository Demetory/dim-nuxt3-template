const usePageTitle = (title: string) => {
  // Hooks
  useHead({
    title: `${title}`,
    meta: [
      { name: 'description', content: 'Dim Nuxt 3 Template' },
    ],
  })
}

// Export
export { usePageTitle }
