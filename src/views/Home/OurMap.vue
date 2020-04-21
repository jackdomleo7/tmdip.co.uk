<template>
  <section class="map">
    <div id="map" class="map__map"></div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import L from "leaflet";
import CompanyInfo from "@/helpers/companyInfo";

@Component
export default class OurMap extends Vue {
  private map!: L.Map;
  private readonly coordinates: L.LatLngExpression = [53.007079, -1.150114];

  private mounted() {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map("map", {
      maxZoom: 18,
      minZoom: 2,
      worldCopyJump: true,
    }).fitWorld();

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer nofollow">OpenStreetMap</a> contributors &copy;<a href="https://carto.com/attributions" target="_blank" rel="noreferrer nofollow">CARTO</a>`,
      }
    ).addTo(this.map);

    this.placeMarker();

    this.map.setView(this.coordinates, 10);

    document
      .querySelector(".map .leaflet-control-attribution.leaflet-control a")!
      .setAttribute("target", "_blank");
  }

  private placeMarker() {
    L.marker(this.coordinates, {
      icon: this.getIcon(),
      title: "Nottingham, East Midlands, UK",
    }).addTo(this.map);
  }

  private getIcon() {
    return L.divIcon({
      html: `<img src="/img/map-icon.png" alt="${CompanyInfo.companyName}" /><span hidden>${CompanyInfo.companyName}</span>`,
      className: "map__divicon",
    });
  }
}
</script>

<style lang="scss">
@import "~leaflet/dist/leaflet.css";

.map {
  $divicon-height: 50px;
  $divicon-width: 50px;
  $divicon-pointer-height: 14px;
  height: 20rem;
  width: 100%;

  @media (min-width: $scale-desktop) {
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
