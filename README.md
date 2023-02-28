# nuxt-vue-map-ui [![npm version](https://img.shields.io/npm/v/nuxt-vue-map-ui.svg)](https://npmjs.org/package/nuxt-vue-map-ui) [![npm downloads](https://img.shields.io/npm/dm/nuxt-vue-map-ui.svg)](https://npmjs.org/package/nuxt-vue-map-ui)

> [Vue Map UI](https://github.com/nikolaynau/vue-map-ui) module for [Nuxt](https://nuxt.com).

## Features

- Automatically import components on demand.
- Automatically import of useMap, useLayer and other methods.
- Automatically add library styles.
- Automatically add leaflet styles.

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
  <LazyVMap></LazyVMap>
</template>
```

Reference [documentation](https://nikolaynau.github.io/vue-map-ui-docs/) and [playground](./playground/app.vue) use.

## Options

### leafletStyles

- Type: `boolean`
- Default: `true`

### normalizeStyles

- Type: `boolean`
- Default: `true`

### libraryStyles

- Type: `boolean`
- Default: `true`

### components

- Type: `array`

If there are components that are not imported automatically from Vue Map UI, you need to add the component name here.

e.g. `['VMap']`

### imports

- Type: `array`

If you wish to add automatically import content from Vue Map UI, you can add it here.

### importsEnabled

- Type: `boolean`
- Default: `false`

## Type definitions

If you use typescript, please add the type definitions fot `leaflet` library.

```bash
$ npm install -D @types/leaflet
```

## License

Licensed under the [MIT License](./LICENSE).
