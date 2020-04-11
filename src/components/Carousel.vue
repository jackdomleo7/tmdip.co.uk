<template>
  <section class="carousel" @mouseenter="stopAutoplay()" @mouseleave="autoplay()">
    <div class="carousel__slides">
      <figure v-for="(item, index) in items" :key="index" class="carousel__slide fade" :class="index === currentSlide ? 'carousel__slide--show' : null">
        <img :src="item.image" :alt="item.caption">
        <figcaption class="carousel__caption">{{ item.caption }}</figcaption>
      </figure>
      <button class="carousel__toggle carousel__toggle--previous" @click="previousSlide()" title="Previous">
        <icon icon="chevron-left" />
        <span hidden>Previous</span>
      </button>
      <button class="carousel__toggle carousel__toggle--next" @click="nextSlide()" title="Next">
        <span hidden>Next</span>
        <icon icon="chevron-right" />
      </button>
    </div>
    <div class="carousel__indicators">
      <button v-for="(item, index) in items" :key="index" class="carousel__indicator" :class="index === currentSlide ? 'carousel__indicator--current' : null" @click="setSlide(index)" :title="'View ' + item.caption">
        <span hidden>View</span>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Icon from "./Icon.vue";

interface CarouselItem {
  // Ensure image sizes have 16:9 aspect ratio
  image: string;
  caption: string;
}

@Component({
  components: { Icon }
})
export default class Carousel extends Vue {
  private currentSlide: number = 0;
  private timeout: number = 0;

  @Prop({ type: Array, required: true })
  private readonly items!: CarouselItem[];

  private mounted() {
    this.autoplay();
  }

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

  private autoplay() {
    this.timeout = setTimeout(() => {
      this.nextSlide();
      this.autoplay();
    }, 5000);
  }

  private stopAutoplay() {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
  }
}
</script>

<style lang="scss" scoped>
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: 0.4}
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
    max-height: 35rem;
    overflow: hidden;
    align-items: center;
    margin: 0;

    &--show {
      display: flex;
    }
  }

  &__caption {
    color: var(--color-grey-75);
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
    position: absolute;
    bottom: 8%;
    font-weight: 700;
    background-color: var(--color-grey-800);

    @media (min-width: 45.625em) {
      font-size: 1rem;;
    }
  }

  &__toggle {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: 3rem;
    height: 4rem;
    padding: 1rem;
    color: var(--color-grey-50);
    transition: 600ms all ease;
    user-select: none;
    color: var(--color-grey-50);
    background-color: transparent;
    border: none;
    transform: translateY(-50%);

    &:hover,
    &:focus  {
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
    cursor: pointer;
    height: 1rem;
    width: 1rem;
    margin: 0 0.125rem;
    background-color: var(--color-grey-400);
    border-radius: 50%;
    display: inline-block;
    transition: 600ms background-color ease;
    border: none;

    &:hover {
      background-color: var(--color-grey-600);
    }

    &--current {
      background-color: var(--color-grey-800);
    }
  }
}
</style>
