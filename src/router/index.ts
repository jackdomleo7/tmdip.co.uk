import Vue from "vue";
import VueRouter from "vue-router";
import {
  RawLocation,
  Route,
  RouteConfig,
  RouterMode,
  RouterOptions
} from "vue-router/types/router";
import Home from "../views/Home.vue";

export default class Router implements RouterOptions {
  public routes: RouteConfig[] = [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: Router.setBrowserTabTitle("Home")
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

  private static setBrowserTabTitle(title: string): string {
    return title + " | " + process.env.VUE_APP_NAME;
  }

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
    next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
  ) {
    // Set <title>
    if (to.meta.title) {
      document.title = to.meta.title;
    } else {
      document.title = process.env.VUE_APP_NAME;
    }
    next();
  }
}
