export default defineNuxtConfig({
  modules: ['../src/module'],
  vueMap: {
    importsEnabled: true
  },
  imports: {
    autoImport: true
  }
});
