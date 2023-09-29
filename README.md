# nuxt-vue-map-ui [![npm version](https://img.shields.io/npm/v/nuxt-vue-map-ui.svg)](https://npmjs.org/package/nuxt-vue-map-ui) [![npm downloads](https://img.shields.io/npm/dm/nuxt-vue-map-ui.svg)](https://npmjs.org/package/nuxt-vue-map-ui)

> [Vue Map UI](https://github.com/nikolaynau/vue-map-ui) module for [Nuxt](https://nuxt.com).

## Features

- Automatically import components on demand.
- Automatically import of useMap and other methods.
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

Read [playground](./playground/app.vue) for more examples.

## Options

### autoImports

- Type: `boolean`
- Default: `true`

> Determine if vue-map-ui composables should be automatically imported and accessible within your nuxt app.

### styles

- Type: `boolean | object`
- Default: `true`

> Enables / disables various css styles.

#### `leafletStyle`

- Type: `boolean`
- Default: `true`

> Specify if add leaflet styles.

#### `normalizeStyle`

- Type: `boolean`
- Default: `true`

> Specify if add tailwind base styles.

#### `libraryStyle`

- Type: `boolean`
- Default: `true`

> Specify if add vue-map-ui styles.

#### `themeStyle`

- Type: `boolean`
- Default: `true`

> Specify if add vue-map-ui theme styles.

### components

- Type: `array`

> If there are components that are not imported automatically from Vue Map UI, you need to add the component name here.

e.g. `['VMap']`

### imports

- Type: `array`

> If you wish to add automatically import content from Vue Map UI, you can add it here.

## License

Licensed under the [MIT License](./LICENSE).
