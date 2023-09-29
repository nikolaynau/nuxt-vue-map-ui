export default defineNuxtConfig({
  modules: ['../src/module'],
  vueMap: {
    extensions: true
  },
  imports: {
    autoImport: true
  },
  css: ['~/assets/css/main.css']
});
