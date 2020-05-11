<template>
  <section
    class="carousel"
    @mouseenter="stopAutoplay()"
    @mouseleave="autoplay()"
  >
    <div class="carousel__slides">
      <figure
        v-for="(item, index) in items"
        :key="index"
        class="carousel__slide fade"
        :class="index === currentSlide ? 'carousel__slide--show' : null"
      >
        <img :src="'/img/carousel/' + item.image" :alt="item.caption" />
        <figcaption class="carousel__caption">{{ item.caption }}</figcaption>
      </figure>
      <button
        class="carousel__toggle carousel__toggle--previous"
        @click="previousSlide()"
        title="Previous"
      >
        <svg-icon name="chevron-left" />
        <span hidden>Previous</span>
      </button>
      <button
        class="carousel__toggle carousel__toggle--next"
        @click="nextSlide()"
        title="Next"
      >
        <span hidden>Next</span>
        <svg-icon name="chevron-right" />
      </button>
    </div>
    <div class="carousel__indicators">
      <button
        v-for="(item, index) in items"
        :key="index"
        class="carousel__indicator"
        :class="index === currentSlide ? 'carousel__indicator--current' : null"
        @click="setSlide(index)"
        :title="'View ' + item.caption"
      >
        <span hidden>View</span>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface CarouselItem {
  // Ensure image sizes have 16:9 aspect ratio
  image: string;
  caption: string;
}

@Component
export default class Carousel extends Vue {
  private currentSlide: number = 0;
  private timeout: any = 0;

  @Prop({ type: Array, required: true })
  private readonly items!: CarouselItem[];

  private mounted() {
    this.autoplay();
  }

  private nextSlide(): void {
    if (this.currentSlide + 1 === this.items.length) {
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }
  }

  private previousSlide(): void {
    if (this.currentSlide === 0) {
      this.currentSlide = this.items.length - 1;
    } else {
      this.currentSlide--;
    }
  }

  private setSlide(index: number): void {
    this.currentSlide = index;
  }

  private autoplay(): void {
    this.timeout = setTimeout(() => {
      this.nextSlide();
      this.autoplay();
    }, 5000);
  }

  private stopAutoplay(): void {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
  }
}
</script>

<style lang="scss" scoped>
.fade {
  animation-duration: 1.5s;
  animation-name: fade;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }

  to {
    opacity: 1;
  }
}

.carousel {
  align-items: center;
  display: flex;
  flex-direction: column;

  &__slides {
    margin: auto;
    max-width: 62.5rem;
    position: relative;
  }

  &__slide {
    align-items: center;
    display: none;
    margin: 0;
    max-height: 35rem;
    overflow: hidden;
    width: 100%;

    &--show {
      display: flex;
    }
  }

  &__caption {
    background-color: var(--color-grey-800);
    bottom: 8%;
    color: var(--color-grey-75);
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.5rem 0.75rem;
    position: absolute;

    @media (min-width: 45.625em) {
      font-size: 1rem;
    }
  }

  &__toggle {
    background-color: transparent;
    border: none;
    color: var(--color-grey-50);
    cursor: pointer;
    height: 4rem;
    padding: 1rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: 600ms all ease;
    user-select: none;
    width: 3rem;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }

    &:hover,
    &:focus {
      background-color: var(--color-grey-800);
    }

    &--next {
      right: 0;
    }
  }

  &__indicators {
    margin-top: 0.4rem;
  }

  &__indicator {
    background-color: var(--color-grey-400);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    height: 1rem;
    margin: 0 0.125rem;
    transition: 600ms background-color ease;
    width: 1rem;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }

    &:hover {
      background-color: var(--color-grey-600);
    }

    &--current {
      background-color: var(--color-grey-800);
    }
  }
}
</style>
