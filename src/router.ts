import Vue from "vue";
import VueRouter from "vue-router";
import {
  RawLocation,
  Route,
  RouteConfig,
  RouterMode,
  RouterOptions
} from "vue-router/types/router";
import CompanyInfo from "@/helpers/companyInfo";

// Named routes to be used when programmatically navigating
export class Routes {
  public static readonly Home: string = "home";
  public static readonly SubContractors: string = "sub-contractors";
  public static readonly ModernSlaveryAct: string = "modern-slavery-act";
  public static readonly HealthAndSafety: string = "health-and-safety";
  public static readonly PrivacyPolicy: string = "privacy-policy";
  public static readonly EnvironmentalPolicy: string = "environmental-policy";
  public static readonly QualityManagementSystem: string =
    "quality-management-system";
  public static readonly PageNotFound: string = "page-not-found";
}

/**
 * Describes vue-router configuration.
 *
 * More info: http://router.vuejs.org/en/
 */
export default class Router implements RouterOptions {
  public routes: RouteConfig[] = [
    {
      path: "/",
      name: Routes.Home,
      component: () => import("@/views/Home/Home.vue"),
      meta: {
        title: "",
        description: "Experts in retail, interior fit-outs and timber homes. From building new bespoke houses to HMOs, from shops to offices and pubs to restaurants."
      }
    },
    {
      path: "/sub-contractors",
      name: Routes.SubContractors,
      component: () => import("@/views/SubContractors/SubContractors.vue"),
      meta: {
        title: "Sub-contractors",
        description: `Subscribe to be a sub-contractor of ${CompanyInfo.companyName} and work with us on future projects.`
      }
    },
    {
      path: "/policies/modern-slavery-act",
      name: Routes.ModernSlaveryAct,
      component: () => import("@/views/Policies/ModernSlaveryAct.vue"),
      meta: {
        title: "Modern Slavery Act",
        description: `${CompanyInfo.companyName} continually works to prevent slavery and human trafficking in our supply chains or in any part of our business.`
      }
    },
    {
      path: "/policies/health-and-safety",
      name: Routes.HealthAndSafety,
      component: () => import("@/views/Policies/HealthAndSafety.vue"),
      meta: {
        title: "Health and Safety",
        description: `${CompanyInfo.companyName} strives for a safe and healthy working environment for all employees, contractors and members of the public.`
      }
    },
    {
      path: "/policies/privacy-policy",
      name: Routes.PrivacyPolicy,
      component: () => import("@/views/Policies/PrivacyPolicy.vue"),
      meta: {
        title: "Privacy Policy",
        description: "This Privacy Notice describes how we collect and process your personal information through our website and the lifetime of a project."
      }
    },
    {
      path: "/policies/environmental-policy",
      name: Routes.EnvironmentalPolicy,
      component: () => import("@/views/Policies/EnvironmentalPolicy.vue"),
      meta: {
        title: "Environmental Policy",
        description: `${CompanyInfo.companyName} recognises that its services may have an impact on the environment and is committed to reducing such impact.`
      }
    },
    {
      path: "/policies/quality-management-system",
      name: Routes.QualityManagementSystem,
      component: () => import("@/views/Policies/QualityManagementSystem.vue"),
      meta: {
        title: "Quality Management System",
        description: `${CompanyInfo.companyName} is proud to be certified for the ISO 9001 and ISO 14001.`
      }
    },
    // Redirects
    {
      path: "/policies",
      redirect: { name: Routes.Home }
    },
    {
      path: "/services",
      redirect: { name: Routes.Home }
    },
    {
      path: "/home",
      redirect: { name: Routes.Home }
    },
    {
      path: "/modern-slavery-act",
      redirect: { name: Routes.ModernSlaveryAct }
    },
    {
      path: "/health-safety",
      redirect: { name: Routes.HealthAndSafety }
    },
    {
      path: "/health-and-safety",
      redirect: { name: Routes.HealthAndSafety }
    },
    {
      path: "/privacy-policy",
      redirect: Routes.PrivacyPolicy
    },
    {
      path: "/ico",
      redirect: Routes.PrivacyPolicy
    },
    {
      path: "/environmental-policy",
      redirect: Routes.EnvironmentalPolicy
    },
    {
      path: "/qms",
      redirect: Routes.QualityManagementSystem
    },
    {
      path: "/iso",
      redirect: Routes.QualityManagementSystem
    },
    {
      path: "/subscribe",
      redirect: Routes.SubContractors
    },
    {
      path: "/jobs",
      redirect: Routes.SubContractors
    },
    {
      path: "/careers",
      redirect: Routes.SubContractors
    },
    // Catch all
    {
      path: "*",
      name: Routes.PageNotFound,
      component: () => import("@/views/PageNotFound.vue"),
      meta: {
        title: "Page Not Found",
        description: "We're sorry, but we were unable to find this page. If it keeps happening, please contact us."
      }
    }
  ];

  public mode: RouterMode = "history";

  private readonly router: VueRouter;

  public constructor() {
    Vue.use(VueRouter);

    this.router = new VueRouter(this);

    this.router.beforeEach(Router.beforeEach);
  }

  public get instance(): VueRouter {
    return this.router;
  }

  private static async beforeEach(
    to: Route,
    from: Route,
    /* eslint-disable-next-line */
    next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
  ) {
    // Document title
    const baseDocumentTitle = "Shop fitting, Interior fit-outs, Timber homes | " + CompanyInfo.companyName;
    if (to.meta.title) {
      document.title = to.meta.title + " | " + baseDocumentTitle;
    } else {
      document.title = baseDocumentTitle;
    }

    // Document description
    document.querySelector('meta[name="description"]')?.remove();
    document.querySelector('meta[property="og:description"]')?.remove();
    document.querySelector('meta[property="twitter:description"]')?.remove();
    if (to.meta.description) {
      let descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      descTag.setAttribute('content', to.meta.description);
      document.head.appendChild(descTag);
      let ogTag = document.createElement('meta');
      ogTag.setAttribute('property', 'og:description');
      ogTag.setAttribute('content', to.meta.description);
      document.head.appendChild(ogTag);
      let twitterTag = document.createElement('meta');
      twitterTag.setAttribute('property', 'twitter:description');
      twitterTag.setAttribute('content', to.meta.description);
      document.head.appendChild(twitterTag);
    }

    next();
  }
}
