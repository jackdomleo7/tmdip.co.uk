<template>
  <section>
    <div class="slideshow-container">

      <!-- Full-width images with number and caption text -->
      <div v-for="(item, index) in items" :key="index" class="mySlides fade" :class="index === currentSlide ? 'mySlides--show' : null">
        <div class="numbertext">{{ index + 1 }} / {{ items.length }}</div>
        <img :src="item.image" style="width:100%">
        <div class="text">{{ item.caption }}</div>
      </div>

      <!-- Next and previous buttons -->
      <button class="prev" @click="previousSlide()">&#10094;</button>
      <button class="next" @click="nextSlide()">&#10095;</button>
    </div>
    <br/>

    <!-- The dots/circles -->
    <div style="text-align:center">
      <span v-for="(item, index) in items" :key="index" class="dot" :class="index === currentSlide ? 'active' : null" @click="setSlide(index)"></span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface CarouselItem {
  image: string;
  caption: string;
}

@Component
export default class Carousel extends Vue {
  private currentSlide: number = 0;

  @Prop({ type: Array, required: true })
  private readonly items!: CarouselItem[];

  private nextSlide(): void {
    if (this.currentSlide + 1 === this.items.length) {
      this.currentSlide = 0;
    }
    else {
      this.currentSlide++;
    }
  }

  private previousSlide(): void {
    if (this.currentSlide === 0) {
      this.currentSlide = this.items.length - 1;
    }
    else {
      this.currentSlide--;
    }
  }

  private setSlide(index: number): void {
    this.currentSlide = index;
  }
}
</script>

<style lang="scss" scoped>
/* Slideshow container */
.slideshow-container {
  max-width: 62.5rem;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
  width: 100%;
  max-height: 30rem;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  &--show {
    display: flex;
  }
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
</style>
