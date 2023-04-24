<script setup lang="ts"></script>

<template>
  <section class="section">
    <h2>Simple Map</h2>
    <VMap style="height: 200px">
      <VMapOsmTileLayer />
    </VMap>
  </section>
  <section class="section">
    <h2>Use Custom Component</h2>
    <VMap style="height: 200px">
      <VMapOsmTileLayer />
      <SubComponent />
    </VMap>
  </section>
  <section class="section">
    <h2>Use Kebab-Case Components</h2>
    <v-map style="height: 200px">
      <v-map-osm-tile-layer />
    </v-map>
  </section>
  <section class="section">
    <h2>Tile Layer</h2>
    <VMap style="height: 200px">
      <VMapTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </VMap>
  </section>
  <section class="section">
    <h2>Zoom Control</h2>
    <VMap style="height: 200px" :zoom-control="false">
      <VMapOsmTileLayer />
      <VMapZoomControl />
    </VMap>
  </section>
  <section class="section">
    <h2>Scale Control</h2>
    <VMap style="height: 200px">
      <VMapOsmTileLayer />
      <VMapScaleControl />
    </VMap>
  </section>
  <section class="section">
    <h2>Layers Control</h2>
    <VMap style="height: 200px">
      <VMapLayersControl>
        <VMapOsmTileLayer />
        <VMapGoogleTileLayer />
        <VMapArcGisAeroTileLayer />
        <VMapArcGisTileLayer />
      </VMapLayersControl>
    </VMap>
  </section>
  <section class="section">
    <h2>Attribution Control</h2>
    <VMap style="height: 200px" :attribution-control="false">
      <VMapOsmTileLayer attribution="Open Street Map" />
      <VMapAttributionControl prefix="Leaflet" :attributions="['A', 'B']" />
    </VMap>
  </section>
</template>

<style>
.section {
  padding: 20px 20%;
}
.section:last-child {
  padding-bottom: 40px;
}
.section > h2 {
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
}
</style>
