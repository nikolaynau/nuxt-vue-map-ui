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
  <section class="section">
    <h2>Custom Map Pane</h2>
    <VMap style="height: 200px">
      <VMapOsmTileLayer />
      <VMapPane name="custom-pane" :z-index="601" />
      <VMapMarker pane="custom-pane" :latlng="[0, 0]" />
    </VMap>
  </section>
  <section class="section">
    <h2>Marker With Default Icon</h2>
    <VMap style="height: 200px">
      <VMapOsmTileLayer />
      <VMapMarker :latlng="[0, 0]" />
      <VMapMarker :latlng="[-15, -15]">
        <VMapDefaultIcon />
      </VMapMarker>
    </VMap>
  </section>
  <section class="section">
    <h2>Icon</h2>
    <VMap style="height: 200px">
      <VMapOsmTileLayer />
      <VMapMarker :latlng="[0, 0]">
        <VMapIcon
          icon-url="/custom/marker-icon.png"
          :icon-size="[32, 42]"
          :icon-anchor="[16, 42]"
        />
      </VMapMarker>
    </VMap>
  </section>
  <section class="section">
    <h2>Div Icon</h2>
    <VMap style="height: 200px">
      <VMapOsmTileLayer />
      <VMapMarker :latlng="[0, 0]">
        <VMapDivIcon
          class="custom-marker-icon"
          :icon-size="[32, 32]"
          :icon-anchor="[16, 16]"
        >
          <div>10</div>
        </VMapDivIcon>
      </VMapMarker>
    </VMap>
  </section>
  <section class="section">
    <h2>Pin Icon</h2>
    <VMap style="height: 200px">
      <VMapOsmTileLayer />
      <VMapMarker :latlng="[0, 0]">
        <VMapPinIcon />
      </VMapMarker>
      <VMapMarker :latlng="[-50, -20]">
        <VMapPinIcon color="#e74645">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            />
          </svg>
        </VMapPinIcon>
      </VMapMarker>
      <VMapMarker :latlng="[30, -40]">
        <VMapPinIcon
          color="#e74645"
          background-color="#1ac0c6"
          placeholder-color="#facd60"
        >
          <i class="fa-solid fa-bolt-lightning" />
        </VMapPinIcon>
      </VMapMarker>
    </VMap>
  </section>
  <section class="section">
    <h2>Icon Marker</h2>
    <VMap style="height: 200px">
      <VMapOsmTileLayer />
      <VMapIconMarker
        :latlng="[0, 0]"
        icon-icon-url="/custom/marker-icon.png"
        :icon-icon-size="[32, 42]"
        :icon-icon-anchor="[16, 42]"
      />
    </VMap>
  </section>
  <section class="section">
    <h2>Div Marker</h2>
    <VMap style="height: 200px">
      <VMapOsmTileLayer />
      <VMapDivMarker
        :latlng="[0, 0]"
        icon-class="custom-marker-icon"
        :icon-icon-size="[32, 32]"
        :icon-icon-anchor="[16, 16]"
      >
        <div>10</div>
      </VMapDivMarker>
    </VMap>
  </section>
  <section class="section">
    <h2>Pin Marker</h2>
    <VMap style="height: 200px">
      <VMapOsmTileLayer />
      <VMapPinMarker
        :latlng="[0, 0]"
        icon-color="#e74645"
        icon-background-color="#1ac0c6"
        icon-placeholder-color="#facd60"
      >
        <i class="fa-solid fa-bolt-lightning" />
      </VMapPinMarker>
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
.custom-marker-icon {
  background-color: black;
  border-radius: 50%;
  line-height: 32px;
  text-align: center;
  color: white;
}
</style>
