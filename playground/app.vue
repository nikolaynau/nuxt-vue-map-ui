<script setup lang="ts"></script>

<template>
  <section class="mb-5">
    <ClientOnly>
      <VMap style="height: 200px">
        <VMapOsmTileLayer />
      </VMap>
    </ClientOnly>
  </section>
  <section class="mb-5">
    <ClientOnly>
      <VMap style="height: 200px">
        <VMapOsmTileLayer />
        <SubComponent />
      </VMap>
    </ClientOnly>
  </section>
  <section class="mb-5">
    <ClientOnly>
      <v-map style="height: 200px">
        <v-map-osm-tile-layer />
      </v-map>
    </ClientOnly>
  </section>
</template>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
