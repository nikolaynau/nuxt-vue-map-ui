export default defineNuxtConfig({
  modules: ['../src/module'],
  vueMap: {
    importUseFunctions: true
  },
  imports: {
    autoImport: true
  }
});
