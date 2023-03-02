# nuxt-vue-map-ui [![npm version](https://img.shields.io/npm/v/nuxt-vue-map-ui.svg)](https://npmjs.org/package/nuxt-vue-map-ui) [![npm downloads](https://img.shields.io/npm/dm/nuxt-vue-map-ui.svg)](https://npmjs.org/package/nuxt-vue-map-ui)

> [Vue Map UI](https://github.com/nikolaynau/vue-map-ui) module for [Nuxt](https://nuxt.com).

## Features

- Automatically import components on demand.
- Automatically import of useMap, useLayer and other methods.
- Automatically add tailwind base styles.
- Automatically add leaflet styles.
- Automatically add library styles.

## Installation

```bash
$ npm install -D nuxt-vue-map-ui
```

```ts
export default defineNuxtConfig({
  modules: ['nuxt-vue-map-ui'],
  vueMap: {
    /** Options */
  }
});
```

## Usage

```vue
<template>
  <v-map></v-map>
  <VMap></VMap>  
</template>
```

Reference [Nuxt documentation](https://nuxt.com/docs/guide/directory-structure/components) and [playground](./playground/app.vue) use.

## Options

### autoImports

- Type: `boolean`
- Default: `true`

Determine if vue-map-ui composables should be automatically imported and accessible within your nuxt app.

### leafletStyles

- Type: `boolean`
- Default: `true`

Specify if add leaflet styles.

### normalizeStyles

- Type: `boolean`
- Default: `true`

Specify if add tailwind base styles.

### libraryStyles

- Type: `boolean`
- Default: `true`

Specify if add vue-map-ui styles.

### components

- Type: `array`

If there are components that are not imported automatically from Vue Map UI, you need to add the component name here.

e.g. `['VMap']`

### imports

- Type: `array`

If you wish to add automatically import content from Vue Map UI, you can add it here.

## Type definitions

If you use typescript, please add the type definitions fot `leaflet` library.

```bash
$ npm install -D @types/leaflet
```

## License

Licensed under the [MIT License](./LICENSE).
