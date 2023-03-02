<script setup lang="ts"></script>

<template>
  <section class="mb-5">
    <VMap style="height: 200px">
      <VMapOsmTileLayer />
    </VMap>
  </section>
  <section class="mb-5">
    <VMap style="height: 200px">
      <VMapOsmTileLayer />
      <SubComponent />
    </VMap>
  </section>
  <section class="mb-5">
    <v-map style="height: 200px">
      <v-map-osm-tile-layer />
    </v-map>
  </section>
</template>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
