(function(t){function e(e){for(var a,r,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);b&&b(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-27c5626b":"c6d47aa5","chunk-2d0cbb05":"d101dc23","chunk-2d21a3d2":"64f91435","chunk-4397042e":"ba436f8c","chunk-4d2059cb":"6f399297","chunk-52ae9163":"a2e53933","chunk-7b36f45c":"cfeb9d4b"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-27c5626b":1,"chunk-4397042e":1,"chunk-4d2059cb":1,"chunk-52ae9163":1,"chunk-7b36f45c":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-27c5626b":"9a2f9cb9","chunk-2d0cbb05":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-4397042e":"73990e9f","chunk-4d2059cb":"2a9bfdea","chunk-52ae9163":"ce5b8100","chunk-7b36f45c":"6c77126e"}[t]+".css",i=s.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],b.parentNode.removeChild(b),n(o)},b.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(b);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}i[t]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var b=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"19aa":function(t,e,n){},"1e3b":function(t,e,n){"use strict";var a=n("9666"),r=n.n(a);r.a},3617:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return j}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"/assets/svg-sprite.svg#icon-"+t.icon.toLowerCase()}})])},r=[],i=n("d4ec"),o=n("2caf"),c=n("262e"),s=n("9ab4"),l=n("60a3"),u=function(t){Object(c["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(l["d"]);Object(s["a"])([Object(l["c"])({type:String,required:!0})],u.prototype,"icon",void 0),u=Object(s["a"])([l["a"]],u);var f=u,b=f,p=(n("4d04"),n("2877")),m=Object(p["a"])(b,a,r,!1,null,"4c2d0862",null),d=m.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"internal"===t.type?n("router-link",{staticClass:"link",attrs:{to:t.link}},[t._t("default")],2):n("a",{staticClass:"link",attrs:{href:("email"===t.type?"mailto:":"tel"===t.type?"tel:":"")+t.link,target:"external"===t.type||"social"===t.type?"_blank":null,rel:"external"===t.type||"email"===t.type?"nofollow noreferrer":"tel"===t.type?"noopener noreferrer":null}},[t._t("default")],2)},v=[],h=(n("caad"),function(t){Object(c["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(l["d"]));Object(s["a"])([Object(l["c"])({validator:function(t){return["email","external","internal","social","tel"].includes(t)},required:!0})],h.prototype,"type",void 0),Object(s["a"])([Object(l["c"])({type:[Object,String],required:!0})],h.prototype,"link",void 0),h=Object(s["a"])([l["a"]],h);var _=h,k=_,g=(n("1e3b"),Object(p["a"])(k,y,v,!1,null,"218a4ac0",null)),j=g.exports},"3c05":function(t,e,n){"use strict";var a=n("99dc"),r=n.n(a);r.a},"48bc":function(t,e,n){"use strict";var a=n("19aa"),r=n.n(a);r.a},"4d04":function(t,e,n){"use strict";var a=n("a5f8"),r=n.n(a);r.a},"4f4c":function(t,e,n){"use strict";n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return L})),n.d(e,"d",(function(){return $})),n.d(e,"a",(function(){return K})),n.d(e,"e",(function(){return tt}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"jumbo"},[a("site-link",{staticClass:"jumbo__logo",attrs:{link:{name:t.Routes.Home},type:"internal"}},[a("img",{attrs:{src:n("f7da"),alt:"TMD logo"}})]),a("div",{staticClass:"jumbo__text"},[a("h1",{staticClass:"jumbo__text--header"},[t._v(t._s(t.companyName))]),a("h2",{staticClass:"jumbo__text--sub"},[t._v(" Shops. Pubs. Restaurants. Offices. New Builds. HMOs. ")])])],1)},r=[],i=n("d4ec"),o=n("bee2"),c=n("2caf"),s=n("262e"),l=n("9ab4"),u=n("60a3"),f=n("5f86"),b=n("3617"),p=n("ec75"),m=function(t){Object(s["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.Routes=f["a"],t}return Object(o["a"])(n,[{key:"companyName",get:function(){return p["a"].companyName}}]),n}(u["d"]);m=Object(l["a"])([Object(u["a"])({components:{SiteLink:b["b"]}})],m);var d=m,y=d,v=(n("82dc"),n("2877")),h=Object(v["a"])(y,a,r,!1,null,"032a1665",null),_=h.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"navbar__toggler",class:t.isMobileNavDisplayed?"navbar__toggler--fixed":null,attrs:{title:(t.isMobileNavDisplayed?"Hide":"Show")+" navigation"},on:{click:function(e){t.isMobileNavDisplayed=!t.isMobileNavDisplayed}}},[n("span",{attrs:{hidden:""}},[t._v(t._s((t.isMobileNavDisplayed?"Hide":"Show")+" navigation"))]),n("icon",{staticClass:"navbar__toggler-icon",attrs:{icon:t.isMobileNavDisplayed?"close":"hamburger"}})],1),n("navbar",{attrs:{"show-mobile-nav":t.isMobileNavDisplayed},on:{"nav-item-click":function(e){t.isMobileNavDisplayed=!1}}})],1)},g=[],j=(n("f5df1"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{directives:[{name:"show",rawName:"v-show",value:t.showMobileNav,expression:"showMobileNav"}],staticClass:"navbar"},[n("ul",{staticClass:"navbar__list"},t._l(t.navList,(function(e,a){return n("li",{key:a,staticClass:"navbar__navitem",on:{click:function(n){null==e.subList&&t.navItemClick()}}},[e.link?n("router-link",{staticClass:"navbar__link",attrs:{to:e.link,"aria-current":t.isCurrentRoute(e.link)?"page":null}},[t._v(" "+t._s(e.text)+" ")]):e.subList?n("div",{staticClass:"navbar__dropdown"},[n("span",{staticClass:"navbar__link",attrs:{tabindex:"0"}},[t._v(t._s(e.text))]),n("ul",{staticClass:"navbar__sublist"},t._l(e.subList,(function(e,a){return n("li",{key:a,staticClass:"navbar__subitem",on:{click:t.navItemClick}},[n("router-link",{staticClass:"navbar__link",attrs:{to:e.link}},[t._v(" "+t._s(e.text)+" ")])],1)})),0)]):t._e()],1)})),0)])}),O=[],N=function(t){Object(s["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.Routes=f["a"],t.navList=[{text:"Home",link:{name:f["a"].Home}},{text:"Services",subList:[{text:"Interior Fit-outs",link:"/interior-fit-outs"},{text:"Timber Homes",link:"/timber-homes"}]},{text:"Sub-contractors",link:{name:f["a"].SubContractors}},{text:"Policies",subList:[{text:"Modern Slavery Act",link:{name:f["a"].ModernSlaveryAct}},{text:"Health & Safety",link:{name:f["a"].HealthAndSafety}},{text:"Environmental Policy",link:{name:f["a"].EnvironmentalPolicy}},{text:"Quality Managemnet System",link:"#"},{text:"Privacy Policy",link:{name:f["a"].PrivacyPolicy}}]}],t}return Object(o["a"])(n,[{key:"isCurrentRoute",value:function(t){return this.$route.path===t}},{key:"navItemClick",value:function(){}}]),n}(u["d"]);Object(l["a"])([Object(u["c"])({type:Boolean,default:!1})],N.prototype,"showMobileNav",void 0),Object(l["a"])([Object(u["b"])()],N.prototype,"navItemClick",null),N=Object(l["a"])([u["a"]],N);var C=N,w=C,S=(n("78a6"),Object(v["a"])(w,j,O,!1,null,"4c24a965",null)),P=S.exports,x=function(t){Object(s["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.isMobileNavDisplayed=!1,t}return n}(u["d"]);x=Object(l["a"])([Object(u["a"])({components:{Icon:b["a"],Navbar:P}})],x);var E=x,M=E,A=(n("3c05"),Object(v["a"])(M,k,g,!1,null,"6b1744c8",null)),L=A.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"content"},[t.header?n("h3",{staticClass:"content__header"},[t._v(t._s(t.header))]):t._e(),t._t("default")],2)},D=[],H=function(t){Object(s["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(u["d"]);Object(l["a"])([Object(u["c"])({type:String})],H.prototype,"header",void 0),H=Object(l["a"])([u["a"]],H);var I=H,q=I,R=(n("48bc"),Object(v["a"])(q,T,D,!1,null,"36ffa132",null)),$=R.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer__content"},[a("div",{staticClass:"footer__row"},t._l(t.footerSocialLinks,(function(e,n){return a("site-link",{key:n,staticClass:"footer__social",attrs:{type:"social",title:e.platform,link:e.link}},[a("icon",{attrs:{icon:e.platform}}),a("span",{attrs:{hidden:""}},[t._v(t._s(e.platform))])],1)})),1),a("div",{staticClass:"footer__row"},[a("img",{staticClass:"footer__logo",attrs:{src:n("55a4"),alt:t.companyName+" logo"}}),a("p",[a("site-link",{attrs:{type:"tel",link:t.companyTelNumber.tel}},[t._v(" "+t._s(t.companyTelNumber.telPretty)+" ")]),a("site-link",{staticStyle:{display:"block"},attrs:{type:"email",link:t.companyEmail}},[t._v(t._s(t.companyEmail))])],1)]),a("div",{staticClass:"footer__row"},[a("p",[t._v(" ©"),a("time",{attrs:{datetime:t.year}},[t._v(t._s(t.year))]),t._v(" "+t._s(t.companyNameWithLtd)+"."),a("br"),t._v("All rights reserved. ")]),a("p",[t._v(" Company Registration: "+t._s(t.companyRegistration)+" "),a("br"),t._v(" VAT Number: "+t._s(t.companyVatNumber)+" ")])])])])},B=[],V=function(t){Object(s["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.footerSocialLinks=[{platform:"LinkedIn",link:"https://www.linkedin.com/company/tmdip"},{platform:"Facebook",link:"https://www.facebook.com/TMD-Interior-Projects-615787538843133"},{platform:"Instagram",link:"https://www.instagram.com/TMD_Interior_Projects"}],t}return Object(o["a"])(n,[{key:"companyName",get:function(){return p["a"].companyName}},{key:"companyNameWithLtd",get:function(){return p["a"].companyNameWithLtd}},{key:"companyRegistration",get:function(){return p["a"].companyRegistration}},{key:"companyVatNumber",get:function(){return p["a"].companyVatNumber}},{key:"companyTelNumber",get:function(){return p["a"].companyTelNumber}},{key:"companyEmail",get:function(){return p["a"].companyEmail}},{key:"year",get:function(){return(new Date).getFullYear()}}]),n}(u["d"]);V=Object(l["a"])([Object(u["a"])({components:{Icon:b["a"],SiteLink:b["b"]}})],V);var W=V,J=W,Q=(n("e39b"),Object(v["a"])(J,F,B,!1,null,"0fba44e4",null)),K=Q.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"qab"},[n("site-link",{staticClass:"qab__link",attrs:{type:"email",link:t.companyEmail,title:"Email us today at "+t.companyEmail}},[n("icon",{staticClass:"qab__icon qab__icon--email",attrs:{icon:"email"}}),n("span",{attrs:{hidden:""}},[t._v("Email us today at "+t._s(t.companyEmail))])],1),n("site-link",{staticClass:"qab__link",attrs:{type:"tel",link:t.companyTelNumber.tel,title:"Call us today "+t.companyTelNumber.telPretty}},[n("icon",{staticClass:"qab__icon qab__icon--tel",attrs:{icon:"phone"}}),n("span",{attrs:{hidden:""}},[t._v("Call us today on "+t._s(t.companyTelNumber.telPretty))])],1)],1)},Y=[],Z=function(t){Object(s["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(o["a"])(n,[{key:"companyTelNumber",get:function(){return p["a"].companyTelNumber}},{key:"companyEmail",get:function(){return p["a"].companyEmail}}]),n}(u["d"]);Z=Object(l["a"])([Object(u["a"])({components:{Icon:b["a"],SiteLink:b["b"]}})],Z);var z=Z,G=z,X=(n("65fa"),Object(v["a"])(G,U,Y,!1,null,"8ab8c16a",null)),tt=X.exports},5266:function(t,e,n){},"55a4":function(t,e,n){t.exports=n.p+"img/footer-logo.d5e484f2.png"},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"5f86":function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return u}));n("d3b7"),n("96cf");var a=n("1da1"),r=n("bee2"),i=n("d4ec"),o=n("2b0e"),c=n("8c4f"),s=n("ec75"),l=function t(){Object(i["a"])(this,t)};l.Home="home",l.SubContractors="sub-contractors",l.ModernSlaveryAct="modern-slavery-act",l.HealthAndSafety="health-and-safety",l.PrivacyPolicy="privacy-policy",l.EnvironmentalPolicy="environmental-policy",l.PageNotFound="page-not-found";var u=function(){function t(){Object(i["a"])(this,t),this.routes=[{path:"/",name:l.Home,component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},meta:{title:"Home"}},{path:"/sub-contractors",name:l.SubContractors,component:function(){return n.e("chunk-52ae9163").then(n.bind(null,"3f01"))},meta:{title:"Sub-contractors"}},{path:"/policies/modern-slavery-act",name:l.ModernSlaveryAct,component:function(){return n.e("chunk-2d0cbb05").then(n.bind(null,"4b78"))},meta:{title:"Modern Slavery Act"}},{path:"/policies/health-and-safety",name:l.HealthAndSafety,component:function(){return n.e("chunk-4397042e").then(n.bind(null,"3049"))},meta:{title:"Health and Safety"}},{path:"/policies/privacy-policy",name:l.PrivacyPolicy,component:function(){return n.e("chunk-27c5626b").then(n.bind(null,"06a3"))},meta:{title:"Privacy Policy"}},{path:"/policies/environmental-policy",name:l.EnvironmentalPolicy,component:function(){return n.e("chunk-4d2059cb").then(n.bind(null,"cda0"))},meta:{title:"Environmental Policy"}},{path:"/modern-slavery-act",redirect:{name:l.ModernSlaveryAct}},{path:"/health-safety",redirect:{name:l.HealthAndSafety}},{path:"/health-and-safety",redirect:{name:l.HealthAndSafety}},{path:"/privacy-policy",redirect:l.PrivacyPolicy},{path:"/ico",redirect:l.PrivacyPolicy},{path:"/environmental-policy",redirect:l.EnvironmentalPolicy},{path:"/subscribe",redirect:l.SubContractors},{path:"/jobs",redirect:l.SubContractors},{path:"/careers",redirect:l.SubContractors},{path:"*",name:l.PageNotFound,component:function(){return n.e("chunk-7b36f45c").then(n.bind(null,"a5b5"))},meta:{title:"Page Not Found"}}],this.mode="history",o["a"].use(c["a"]),this.router=new c["a"](this),this.router.beforeEach(t.beforeEach)}return Object(r["a"])(t,[{key:"instance",get:function(){return this.router}}],[{key:"beforeEach",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e,n,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.meta.title?document.title=e.meta.title+" | "+s["a"].companyName:document.title=s["a"].companyName,a();case 2:case"end":return t.stop()}}),t)})));function e(e,n,a){return t.apply(this,arguments)}return e}()}]),t}()},"65fa":function(t,e,n){"use strict";var a=n("9216"),r=n.n(a);r.a},"6bbd":function(t,e,n){},"78a6":function(t,e,n){"use strict";var a=n("f893"),r=n.n(a);r.a},"82dc":function(t,e,n){"use strict";var a=n("6bbd"),r=n.n(a);r.a},9216:function(t,e,n){},9666:function(t,e,n){},"99dc":function(t,e,n){},"9c0c":function(t,e,n){},a5f8:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("jumbo"),n("navigation"),n("router-view"),n("footer-bar"),n("quick-action-bar")],1)},i=[],o=n("d4ec"),c=n("bee2"),s=n("2caf"),l=n("262e"),u=n("9ab4"),f=(n("f5df1"),n("60a3")),b=n("4f4c"),p=function(t){Object(l["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(c["a"])(n,[{key:"mounted",value:function(){this.getDeepLinkPath()}},{key:"getDeepLinkPath",value:function(){var t=localStorage.getItem("path");t&&(localStorage.removeItem("path"),this.$router.push(t))}}]),n}(f["d"]);p=Object(u["a"])([Object(f["a"])({components:{Jumbo:b["b"],Navigation:b["c"],FooterBar:b["a"],QuickActionBar:b["e"]}})],p);var m=p,d=m,y=(n("5c0b"),n("2877")),v=Object(y["a"])(d,r,i,!1,null,null,null),h=v.exports,_=n("9483");Object(_["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var k=n("5f86");a["a"].config.productionTip=!1,new a["a"]({router:(new k["b"]).instance,render:function(t){return t(h)}}).$mount("#app")},e39b:function(t,e,n){"use strict";var a=n("5266"),r=n.n(a);r.a},ec75:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("ac1f"),n("5319");var a=n("d4ec"),r=n("bee2"),i=function(){function t(){Object(a["a"])(this,t)}return Object(r["a"])(t,null,[{key:"companyWebsiteDomain",get:function(){return this._websiteDomain}},{key:"companyName",get:function(){return"TMD Interior Projects & Building Services"}},{key:"companyNameWithLtd",get:function(){return this.companyName+" Ltd"}},{key:"companyRegistration",get:function(){return this._registration}},{key:"companyVatNumber",get:function(){return this._vatNumber}},{key:"companyTelNumber",get:function(){var t=this._telNumber.replace(/\s+/g,"").replace("(0)","");return{tel:t,telPretty:this._telNumber}}},{key:"companyEmail",get:function(){return this._email}},{key:"companySafeContractorAccreditation",get:function(){return this._safeContractorAccreditation}},{key:"companyIcoCertificateNumber",get:function(){return this._icoCertificateNumber}}]),t}();i._websiteDomain="www.tmdip.co.uk",i._registration="11272002",i._vatNumber="291620212",i._telNumber="+44 (0)115 772 2100",i._email="info@tmdip.co.uk",i._safeContractorAccreditation="DQ7779",i._icoCertificateNumber="ZA469003"},f7da:function(t,e,n){t.exports=n.p+"img/nav-logo.a7f359ab.png"},f893:function(t,e,n){}});
//# sourceMappingURL=app.b3210961.js.map