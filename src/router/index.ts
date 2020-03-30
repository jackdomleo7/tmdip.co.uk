import Vue from "vue";
import VueRouter from "vue-router";
import {
  RawLocation,
  Route,
  RouteConfig,
  RouterMode,
  RouterOptions
} from "vue-router/types/router";

export default class Router implements RouterOptions {
  public routes: RouteConfig[] = [
    {
      path: "/",
      name: "Home",
      component: () => import('@/views/Home.vue'),
      meta: {
        title: "Home"
      }
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
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
    // Set <title>
    if (to.meta.title) {
      document.title = to.meta.title + " | " + process.env.VUE_APP_NAME;
    } else {
      document.title = process.env.VUE_APP_NAME;
    }
    next();
  }
}
