(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(t,e,o){"use strict";var l={},n=o(10),component=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nuxt")],1)}),[],!1,null,"09ec66f2",null);e.a=component.exports},147:function(t,e,o){"use strict";var l=o(72),n=o(73),r=o(74),c={components:{Header:l.default,Footer:n.default,Wave:r.default}},f=o(10),component=Object(f.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative"},[e("Header"),this._v(" "),e("main",[e("Nuxt")],1),this._v(" "),e("Footer",{staticClass:"mt-32"}),this._v(" "),e("Wave",{staticClass:"gl-wave"})],1)}),[],!1,null,"4e2a9d48",null);e.a=component.exports;installComponents(component,{Header:o(72).default,Footer:o(73).default,Wave:o(74).default})},148:function(t,e,o){o(149),t.exports=o(150)},191:function(t,e,o){var content=o(192);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(102).default)("43dee4e4",content,!0,{sourceMap:!1})},192:function(t,e,o){var l=o(101),n=o(193),r=o(194),c=o(195),f=o(196),d=o(197);e=l(!1);var m=n(r),h=n(c),v=n(f),x=n(d);e.push([t.i,"@font-face{font-family:Space Grotesk Bold;src:url("+m+")}@font-face{font-family:Space Grotesk Medium;src:url("+h+")}@font-face{font-family:Space Grotesk;src:url("+v+")}.illustrations-under-construction{background:url("+x+");background-repeat:no-repeat;background-size:contain;width:300px;height:200px}html{font-family:Space Grotesk,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}body::-webkit-scrollbar{width:8px}body::-webkit-scrollbar-track{border-left:1px solid #848ccf}body::-webkit-scrollbar-thumb{background-color:#848ccf}.light-mode body{background-color:#f3f5f4;color:#243746;transition:all .4s}.light-mode .bg-surface-color{background-color:#f5f5f5}.dark-mode body{background-color:#121212;color:#ebf4f1;transition:all .4s}.dark-mode .bg-surface-color{background-color:#1e1e1e}.gl-readable-line-length{max-width:820px}.gl-link-color{color:#848ccf}.gl-wave{position:absolute;bottom:0;left:0;z-index:-1}",""]),t.exports=e},194:function(t,e,o){t.exports=o.p+"fonts/SpaceGrotesk-Bold.5b6a833.otf"},195:function(t,e,o){t.exports=o.p+"fonts/SpaceGrotesk-Medium.0722953.otf"},196:function(t,e,o){t.exports=o.p+"fonts/SpaceGrotesk-Regular.5313447.otf"},197:function(t,e,o){t.exports=o.p+"img/under_construction.8025052.svg"},25:function(t,e,o){"use strict";var l={props:["error"],layout:"blank"},n=o(10),component=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"mt-16"},[e("div",{staticClass:"container mx-auto px-4"},[e("div",{staticClass:"text-center"},[404===this.error.statusCode?e("h1",{staticClass:"text-3xl"},[this._v("Page not found")]):e("h1",{staticClass:"text-3xl"},[this._v("An error occurred")]),this._v(" "),e("br"),this._v(" "),e("nuxt-link",{attrs:{to:"/"}},[this._v("Home page")])],1)])])}),[],!1,null,null,null);e.a=component.exports},72:function(t,e,o){"use strict";o.r(e);var l={data:function(){return{colorMode_:"light"}},methods:{changeColorMode:function(t){t&&(this.colorMode_=t,this.$colorMode.preference=t)}}},n=o(10),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container mx-auto px-4"},[o("header",{staticClass:"max-w-container-max-width m-auto h-14 md:h-20"},[o("div",{staticClass:"h-full flex items-center justify-between"},[o("h1",{staticClass:"text-xl leading-base font-bold body-weight lowercase md:text-six md:leading-six"},[o("nuxt-link",{attrs:{to:"/"}},[o("span",{staticClass:"align-middle"},[t._v("Romadhan.")])])],1),t._v(" "),o("div",["dark"===t.colorMode_?o("button",{staticClass:"focus:outline-none text-3xl uppercase",on:{click:function(e){return t.changeColorMode("light")}}},[t._v("\n            🌙\n          ")]):"light"===t.colorMode_?o("button",{staticClass:"focus:outline-none text-3xl uppercase",on:{click:function(e){return t.changeColorMode("dark")}}},[t._v("\n            ☀️\n          ")]):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(72).default})},73:function(t,e,o){"use strict";o.r(e);var l=o(10),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Wave",{staticClass:"gl-wave"}),this._v(" "),this._m(0)],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container mx-auto px-4"},[o("footer",{staticClass:"max-w-container-max-width m-auto h-14 md:h-20"},[o("div",{staticClass:"h-full flex items-center justify-between"},[o("div",[o("p",[o("span",{staticClass:"text-gray-700"},[t._v("© 2020")]),t._v(" Romadhan Prasetyo")])]),t._v(" "),o("div",[o("ul",{staticClass:"flex"},[o("li",{staticClass:"mr-2 flex"},[o("a",{staticClass:"mr-2",attrs:{href:"mailto:romadhanedy@gmail.com",target:"blank"}},[t._v(" Email ")]),t._v(" "),o("span",{staticClass:"text-grey-base"},[t._v(" / ")])]),t._v(" "),o("li",{staticClass:"mr-2 flex"},[o("a",{staticClass:"mr-2",attrs:{href:"https://www.linkedin.com/in/romadhan-prasetyo/",target:"blank"}},[t._v(" Linkedin ")]),t._v(" "),o("span",{staticClass:"text-grey-base"},[t._v(" / ")])]),t._v(" "),o("li",{staticClass:"mr-2 flex"},[o("a",{staticClass:"mr-2",attrs:{href:"https://github.com/dyprast",target:"blank"}},[t._v(" GitHub ")])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Wave:o(74).default,Footer:o(73).default})},74:function(t,e,o){"use strict";o.r(e);var l=o(10),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[e("path",{attrs:{fill:"#848ccf","fill-opacity":"1",d:"M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"}})])}),[],!1,null,null,null);e.default=component.exports}},[[148,3,1,4]]]);