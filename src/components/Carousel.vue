<template>
  <section class="carousel">
    <div class="carousel__slides">

      <!-- Full-width images with number and caption text -->
      <figure v-for="(item, index) in items" :key="index" class="carousel__slide fade" :class="index === currentSlide ? 'carousel__slide--show' : null">
        <img :src="item.image">
        <figcaption class="carousel__caption">{{ item.caption }}</figcaption>
      </figure>

      <!-- Next and previous buttons -->
      <button class="carousel__toggle carousel__toggle--previous" @click="previousSlide()">&#10094;</button>
      <button class="carousel__toggle carousel__toggle--next" @click="nextSlide()">&#10095;</button>
    </div>
    <br/>

    <!-- The dots/circles -->
    <div class="carousel__indicators">
      <span v-for="(item, index) in items" :key="index" class="carousel__indicator" :class="index === currentSlide ? 'carousel__indicator--current' : null" @click="setSlide(index)"></span>
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
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}


.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__slides {
    max-width: 62.5rem;
    position: relative;
    margin: auto;
  }

  &__slide {
    display: none;
    width: 100%;
    max-height: 30rem;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    margin: 0;

    &--show {
      display: flex;
    }
  }

  &__caption {
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
  }

  &__toggle {
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

    &:hover {
      background-color: rgba(0,0,0,0.8);
    }

    &--next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }
  }

  &__indicators {
    text-align: center;
  }

  &__indicator {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;

    &--current {
      background-color: #717171;
    }
  }
}
</style>
