export default defineNuxtConfig({
  modules: ['../src/module'],
  vueMap: {
    autoImports: true
  },
  imports: {
    autoImport: true
  }
});
