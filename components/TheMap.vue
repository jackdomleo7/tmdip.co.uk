<template>
  <section id="map-wrap" class="map">
    <no-ssr placeholder="Loading map...">
      <l-map :zoom="6" :center="coordinates" class="map__map" world-copy-jump>
        <l-tile-layer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" :attribution="attribution" />
        <l-marker :lat-lng="coordinates">
          <l-popup content="Nottingham, East Midlands, UK" />
        </l-marker>
      </l-map>
    </no-ssr>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import L from 'leaflet';

@Component
export default class TheMap extends Vue {
  private readonly coordinates: L.LatLngExpression = [53.007079, -1.150114];
  private readonly attribution: string = '&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer nofollow">OpenStreetMap</a> contributors &copy;<a href="https://carto.com/attributions" target="_blank" rel="noreferrer nofollow">CARTO</a>';
}
</script>

<style lang="scss">
.map {
  $divicon-height: 50px;
  $divicon-width: 50px;
  $divicon-pointer-height: 14px;
  height: 20rem;
  width: 100%;

  @media (min-width: 45.625em) {
    height: 30rem;
  }

  .map {
    // Adds specificity since scoped doesn't work with Leaflet.js
    &__map {
      height: 100%;
      width: 100%;
    }

    &__divicon {
      align-items: center;
      background-color: var(--color-grey-700);
      border-radius: 0.5rem;
      display: flex;
      height: $divicon-height !important; // Overrides Leaflet's iconSize
      justify-content: center;
      margin-left: -($divicon-width / 2) !important; // Overrides Leaflet's iconAnchor
      margin-top: -($divicon-height + $divicon-pointer-height - 2px) !important; // Overrides Leaflet's iconAnchor
      padding: 0.25rem;
      width: $divicon-width !important; // Overrides Leaflet's iconSize

      &::before {
        // Pin point
        border: 6px solid transparent;
        border-bottom: 0;
        border-top: $divicon-pointer-height solid var(--color-grey-700);
        bottom: 0;
        content: "";
        height: 0;
        left: ($divicon-width / 2);
        margin-bottom: -10px;
        margin-left: -6px;
        position: absolute;
        width: 0;
      }

      &::after {
        // Pin shadow
        $shadow-height: 4px;
        $shadow-width: 12px;
        background-color: var(--color-grey-600);
        border-radius: 50%;
        bottom: -($divicon-pointer-height - ($shadow-height / 2)); // Positions pinpoint in middle of shadow vertically
        content: "";
        height: $shadow-height;
        left: (
          ($divicon-width - $shadow-width) / 2
        ); // Positions pinpoint in middle of shadow horizontally
        position: absolute;
        width: $shadow-width;
      }
    }
  }
}
</style>
