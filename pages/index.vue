<template>
  <page-template header="We Turn Your Designs into Reality">
    <p class="home__intro">
      Based in Nottingham, East Midlands, we are ideally located to work
      nationally across the UK on a wide variety of projects. From building new
      bespoke houses to HMOs, from shops to offices and pubs to restaurants, we
      can cover them all. Our fully skilled team provide quality workmanship
      guaranteed on every project.<br />
      <strong>For a free consultation, contact the team today.</strong>
    </p>
    <carousel class="home__carousel" :items="carouselItems"></carousel>
    <article class="about">
      <h3 class="about__title">Services</h3>
      <p>
        {{ companyName }} can currently provide the following services to our
        clients (all of which include a free consultation and thorough quoting):
      </p>
      <ul>
        <li>Shop fitting</li>
        <li>Interior fit-outs</li>
        <li>Timber homes</li>
      </ul>
      <p>
        Our clients are our number one priority, and we’ll go the extra mile to
        make sure they get the best from their investment. We can discuss your
        vision and create the designs for you, or we can take your existing
        designs and transform them to reality, or we can provide the whole
        journey right from idea to vision, vision to design and design to
        reality. <strong>Contact us today discuss your idea.</strong>
      </p>
      <p>
        Making sure site surveys are conducted correctly means the
        <abbr title="Computer Aided Design">CAD</abbr> drawings will produce
        perfect manufacture drawings in either 2D or 3D detail. All of these
        items are then laid onto the survey to make every piece of the jigsaw
        fit together.
      </p>
      <p>
        Project costs are a priority in the interest of {{ companyName }} and
        our clients, which means efficient methods need to be incorporated into
        projects. Detailed programmes with realistic timescales are important in
        every project and we aim to start and complete on the required dates
        with the minimum of fuss for the client. Our project managers will
        organise everything to make sure the project runs smoothly on time, in a
        safe and efficient manner. We will also organise and co-ordinate all
        sub-trades.
      </p>
      <p>
        The key to any project running safely is the ability to have a safe
        running site. Our health &amp; safety advisers continually make sure
        that {{ companyNameWithLtd }} are fully up to date with the current
        health &amp; safety regulations and check that the site is fully
        compliant with all requirements. Our site managers are trained to
        continually check sites to make sure it’s a clean and safe working
        environment.
      </p>
      <p>
        The addition of our building division gives us the ability to expand our
        working portfolio. We are currently undertaking various other projects
        which include a 200 square meter new build house and a 8 bedroom HMO.
        Having a building division will also give us the ability to take on the
        build section of the project, which brings more of the project under one
        roof, making it more cost effective and helping the project stay on
        schedule.
      </p>
    </article>
    <article class="about">
      <h3 class="about__title">About us</h3>
      <p>
        With over 30 years’ experience, {{ companyName }} has earned its
        reputation as a client focused company in the UK. We pride ourselves
        making sure the end result meets the clients’ expectations. Working with
        a strong team of industry professionals, we have a proven track record
        in unlocking value in sites and translating client visions into reality.
      </p>
      <p>
        Whether you’re looking to invest in new build and refurbishment schemes,
        collaborate on bespoke projects, or are an existing retailer with a
        joint venture idea, {{ companyName }} has the collective skills and
        experience to translate your ideas.
      </p>
      <p>
        Located centrally in the UK in Nottinghamshire, we are in an ideal
        location to reach any part of the UK with very little fuss. Only a few
        miles from Junction 26 of the M1, makes travel and deliveries relatively
        easy and efficient.
      </p>
      <!-- <the-map /> -->
    </article>
    <section class="extra">
      <div class="extra__row">
        <site-link type="external" link="https://www.safecontractor.com">
          <img
            src="/img/safecontractor.png"
            alt="Safe Contractor Approved logo"
          />
          <span hidden>Safe Contractor Approved</span>
        </site-link>
      </div>
      <div class="extra__row">
        <site-link
          type="internal"
          link="/policies/quality-management-system"
        >
          <img src="/img/qms9001.png" alt="QMS ISO 9001" />
          <span hidden>QMS ISO 9001</span>
        </site-link>
        <site-link
          type="internal"
          link="/policies/quality-management-system"
        >
          <img src="/img/qms14001.png" alt="QMS ISO 14001" />
          <span hidden>QMS ISO 14001</span>
        </site-link>
      </div>
    </section>
  </page-template>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { PageTemplate, SiteLink, Carousel } from "@/components";
import CompanyInfo from "@/middleware/companyInfo";

@Component({
  components: { Carousel, PageTemplate, SiteLink },
})
export default class Index extends Vue {
  private readonly carouselItems: object[] = [
    {
      image: "smiler.jpg",
      caption: "The Smiler - Alton Towers",
    },
    {
      image: "smokehouse.jpg",
      caption: "Smokehouse, London",
    },
    {
      image: "selfridges.jpg",
      caption: "Selfridges, Birmingham",
    },
    {
      image: "bauer.jpg",
      caption: "BAUER - Ice Locker",
    },
  ];

  private get companyName(): string {
    return CompanyInfo.companyName;
  }

  private get companyNameWithLtd(): string {
    return CompanyInfo.companyNameWithLtd;
  }
}
</script>

<style lang="scss" scoped>
.home {
  &__intro {
    line-height: 2;
    text-align: center;
  }

  &__carousel {
    margin: 2rem 0;
  }
}

.about {
  margin-top: 5rem;

  &__title {
    font-size: 2rem;
  }
}

.extra {
  margin-top: 7rem;

  &__row {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0.5rem 0;

    @media (min-width: 45.625em) {
      flex-direction: row;
    }

    * {
      margin: 0.5rem 0;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
