webpackJsonp([0],{"1uuo":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("div",{staticClass:"logo-holder"},[e("a",{attrs:{href:"./"}},[e("img",{staticClass:"respimg",attrs:{src:"http://basilkhan.ca/images/logo.png",alt:""}})])])])}]};var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"viselem visfooter",staticStyle:{opacity:"1"}},[this._m(0),this._v(" "),e("div",{staticClass:"to-top-holder"},[e("div",{staticClass:"container"},[e("p",[e("span",[this._v(" © Basil Khan "+this._s(this.year)+" ")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"footer-info"},[a("h4",[t._v("Connect with me")]),t._v(" "),a("div",{staticClass:"footer-social"},[a("ul",[a("li",[a("a",{attrs:{href:"https://twitter.com/BasilAKhan",target:"_blank"}},[a("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/basilkhan05",target:"_blank"}},[a("i",{staticClass:"fa fa-github"})])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://ca.linkedin.com/in/basilkh",target:"_blank"}},[a("i",{staticClass:"fa fa-linkedin"})])]),t._v(" "),a("li",[a("a",{attrs:{href:"skype:basi1.k?call",target:"_blank"}},[a("i",{staticClass:"fa fa-skype"})])])])])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"footer-info"},[a("h4",[t._v("Contact info")]),t._v(" "),a("ul",{staticClass:"footer-contacts"},[a("li",[a("a",{attrs:{href:"https://www.google.ca/maps/place/Kitchener,+ON/@43.4305376,-80.5463551,12z/data=!3m1!4b1!4m5!3m4!1s0x882bf48c03ee5105:0x9525f8e6df5f544b!8m2!3d43.450301!4d-80.4831917"}},[a("i",{staticClass:"fa fa-map"}),t._v(" Kitchener, ON Canada")])]),t._v(" "),a("li",[a("a",{attrs:{href:"mailto:basil.khan@uwaterloo.ca"}},[a("i",{staticClass:"fa fa-envelope-o"}),t._v(" basil.khan@uwaterloo.ca")])])])])]),t._v(" "),a("div",{staticClass:"col-md-4"})])])}]};var i={name:"App",components:{Header:a("VU/8")({name:"Header"},n,!1,function(t){a("l34Q")},"data-v-6b6c81cc",null).exports,Footer:a("VU/8")({name:"Footer"},r,!1,function(t){a("lYAs")},"data-v-42201156",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("div",{staticClass:"page-container container"},[e("router-view")],1),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var l=a("VU/8")(i,o,!1,function(t){a("vsAn")},null,null).exports,c=a("/ocq"),u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var d=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},u,!1,function(t){a("1uuo")},"data-v-d8ec41bc",null).exports,v={name:"VidyardPlayer",data:function(){return{VidyardPlayer:{}}},watch:{},methods:{loadVidyardEmbedCode:function(t){var e=document.createElement("script");e.type="text/javascript",e.id="vidyard_embed_code_"+t,e.setAttribute("src","//play.vidyard.com/"+t+".js?v=3.1.1&type=inline"),this.$refs.vidyardPlayer.innerHTML="",this.$refs.vidyardPlayer.appendChild(e),this.PlayerReady=!1,this.initPlayerApi(t)},initPlayerApi:function(t){var e=new window.Vidyard.player(t);e.on("ready",function(){console.log("ready")}),e.on("play",function(){console.log("play")}),e.on("pause",function(){console.log("pause")}),e.on("seek",function(){console.log("seek")}),e.on("beforeSeek",function(){console.log("beforeSeek")}),e.on("playerComplete",function(){console.log("playerComplete")}),e.on("chapterComplete",function(){console.log("chapterComplete")}),e.on("timeupdate",function(){console.log("timeupdate")}),e.on("volumeChange",function(){console.log("volumeChange")})}},beforeRouteUpdate:function(t,e,a){console.log("beforeRouteUpdate"),this.loadVidyardEmbedCode(t.params.uuid),a()},mounted:function(){console.log("mounted");var t=this.$route.params.uuid;this.loadVidyardEmbedCode(t)}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"vidyardPlayer",attrs:{id:"vidyard-player"}},[e("i",{staticClass:"fa fa-cog"})])},staticRenderFns:[]};var f=a("VU/8")(v,h,!1,function(t){a("lAZk")},"data-v-a8a6ee14",null).exports;s.a.use(c.a);var p=new c.a({mode:"hash",routes:[{path:"/",name:"HelloWorld",component:d},{path:"/watch/:uuid",name:"VidyardPlayer",component:f}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:p,components:{App:l},template:"<App/>"})},l34Q:function(t,e){},lAZk:function(t,e){},lYAs:function(t,e){},vsAn:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9bd1afe3c33bca960e43.js.map