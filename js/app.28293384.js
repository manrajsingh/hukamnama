(function(t){function e(e){for(var a,c,i=e[0],o=e[1],u=e[2],b=0,h=[];b<i.length;b++)c=i[b],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&h.push(s[c][0]),s[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(h.length)h.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},r=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},5480:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function s(t,e){var n=Object(a["t"])("router-view");return Object(a["o"])(),Object(a["d"])(n)}n("b6b4");const r={};r.render=s;var c=r,i=n("6c02"),o={class:"home"};function u(t,e,n,s,r,c){var i=Object(a["t"])("Hukam");return Object(a["o"])(),Object(a["d"])("div",o,[Object(a["f"])(i)])}var l={class:"columns p-4 mt-3"},b={class:"column has-text-centered"},h={class:"field"},p=Object(a["f"])("label",{class:"label"},[Object(a["f"])("span",{class:"t-gurmukhi"},"AMg"),Object(a["f"])("span",{class:"mx-3"},"|"),Object(a["f"])("span",null,"Page")],-1),d={class:"field-body is-justify-content-center"},f={class:"t-gurmukhi"},g=Object(a["f"])("span",{class:"mx-3"},"|",-1),j={class:"p-4"},O={class:"title is-2 has-text-centered t-gurmukhi"},v={class:"t-gurmukhi t-gurmukhi-verses"},m={key:0},k={key:1,class:"t-gurmukhi"},w={key:2};function y(t,e,n,s,r,c){return Object(a["o"])(),Object(a["d"])("div",null,[Object(a["f"])("div",l,[Object(a["f"])("div",b,[Object(a["f"])("div",h,[p,Object(a["f"])("div",d,[Object(a["f"])("span",f,Object(a["v"])(r.source_page),1),g,Object(a["f"])("span",null,Object(a["v"])(r.source_page),1)])])])]),Object(a["f"])("div",j,[Object(a["f"])("h1",O,Object(a["v"])(r.title),1),(Object(a["o"])(!0),Object(a["d"])(a["a"],null,Object(a["s"])(r.verses,(function(t){return Object(a["o"])(),Object(a["d"])("div",{key:t.id,class:"mt-4 has-text-centered"},[Object(a["f"])("div",v,Object(a["v"])(t.verse.gurmukhi),1),r.translations.english.is_showing?(Object(a["o"])(),Object(a["d"])("div",m,Object(a["v"])(t.translation.en.bdb),1)):Object(a["e"])("",!0),r.translations.punjabi.is_showing?(Object(a["o"])(),Object(a["d"])("div",k,Object(a["v"])(t.translation.pu.bdb.gurmukhi),1)):Object(a["e"])("",!0),r.translations.spanish.is_showing?(Object(a["o"])(),Object(a["d"])("div",w,Object(a["v"])(t.translation.es.sn),1)):Object(a["e"])("",!0)])})),128))])])}var _=n("1da1"),x=(n("96cf"),n("99af"),n("4d90"),n("d3b7"),n("25f0"),{name:"Hukam",data:function(){return{current_date:new Date,title:"",source:"",source_page:"",verses:[],translations:{english:{is_showing:"english"==this.$route.params.lang,text:"English"},punjabi:{is_showing:"punjabi"==this.$route.params.lang,text:"Punjabi"},spanish:{is_showing:"spanish"==this.$route.params.lang,text:"Spanish"}}}},beforeMount:function(){this.getHukam(this.getDate())},watch:{current_date:function(){this.getHukam(this.getDate())},$route:function(t,e){console.log(this.translations),this.translations={english:{is_showing:"english"==this.$route.params.lang,text:"English"},punjabi:{is_showing:"punjabi"==this.$route.params.lang,text:"Punjabi"},spanish:{is_showing:"spanish"==this.$route.params.lang,text:"Spanish"}}}},computed:{selectedDate:function(){return this.current_date?this.current_date.toLocaleDateString():""}},methods:{getDate:function(){var t=this.current_date;return"".concat(t.getFullYear(),"/").concat((t.getMonth()+1).toString().padStart(2,"0"),"/").concat(t.getDate().toString().padStart(2,"0"))},setHukamData:function(t){this.title=t.shabads[0].shabadInfo.raag.gurmukhi,this.source=t.shabads[0].shabadInfo.source.gurmukhi,this.source_page=t.shabads[0].shabadInfo.source.pageNo,this.verses=t.shabads[0].verses},getHukam:function(t){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function n(){var a,s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a="https://api.banidb.com/v2/hukamnamas/".concat(t),n.next=3,fetch(a);case 3:return s=n.sent,n.next=6,s.json();case 6:r=n.sent,e.setHukamData(r);case 8:case"end":return n.stop()}}),n)})))()}}});n("d3b2");x.render=y;var S=x,H={name:"Home",components:{Hukam:S}};H.render=u;var P=H,D=[{path:"/",name:"Home",component:P},{path:"/translate/:lang",component:P}],M=Object(i["a"])({history:Object(i["b"])(),routes:D}),$=M;Object(a["c"])(c).use($).mount("#app")},"62e7":function(t,e,n){},b6b4:function(t,e,n){"use strict";n("62e7")},d3b2:function(t,e,n){"use strict";n("5480")}});
//# sourceMappingURL=app.28293384.js.map