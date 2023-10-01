import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  // @ts-ignore
  return import('@leaflet-extensions/locatecontrol');
});
