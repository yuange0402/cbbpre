(function(t){function e(e){for(var n,s,o=e[0],r=e[1],l=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);h&&h(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==i[o]&&(n=!1)}n&&(c.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i={app:0},c=[];function o(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-06c0b370":"c1c02555","chunk-09a399c6":"233e305a","chunk-11d92115":"8bfb56c8","chunk-228c9a26":"4007f25c","chunk-2c4d3354":"4bae0a12","chunk-31a73045":"48e3a336","chunk-3cf9c272":"c1f21d28","chunk-7bc826aa":"75ce5313","chunk-46870c90":"c2dd8657","chunk-5fdd54aa":"70dc8350","chunk-683a77dd":"d1ef8d11","chunk-6d46068d":"c83b2996","chunk-7d3c275a":"dea78bf4","chunk-8c967b78":"329e653b","chunk-cbea27c0":"701240cb"}[t]+".js"}function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a={"chunk-06c0b370":1,"chunk-09a399c6":1,"chunk-11d92115":1,"chunk-228c9a26":1,"chunk-2c4d3354":1,"chunk-31a73045":1,"chunk-3cf9c272":1,"chunk-7bc826aa":1,"chunk-46870c90":1,"chunk-5fdd54aa":1,"chunk-683a77dd":1,"chunk-6d46068d":1,"chunk-7d3c275a":1,"chunk-8c967b78":1,"chunk-cbea27c0":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-06c0b370":"f0d8163c","chunk-09a399c6":"5dbcb434","chunk-11d92115":"9e6fb062","chunk-228c9a26":"5181ee7c","chunk-2c4d3354":"88151b73","chunk-31a73045":"d8bb0f97","chunk-3cf9c272":"6b38c8d8","chunk-7bc826aa":"0e0b11fa","chunk-46870c90":"af649033","chunk-5fdd54aa":"7e0914d2","chunk-683a77dd":"b52ace2f","chunk-6d46068d":"4135cb1c","chunk-7d3c275a":"ba2dbc3d","chunk-8c967b78":"c8a9c074","chunk-cbea27c0":"e70d61d9"}[t]+".css",i=r.p+n,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var l=c[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===n||u===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete s[t],h.parentNode.removeChild(h),a(c)},h.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(h)})).then((function(){s[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}i[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=u;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0ba6":function(t,e,a){"use strict";var n=a("9d9d"),s=a.n(n);s.a},"16bd":function(t,e,a){},5362:function(t,e,a){"use strict";var n=a("c2b8"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view",{ref:"appRef"})],1)},i=[],c={data:function(){return{}},mounted:function(){},methods:{}},o=c,r=a("2877"),l=Object(r["a"])(o,s,i,!1,null,"8c7300c0",null),u=l.exports,d=(a("d3b7"),a("8c4f")),h=(a("be8a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"generateImg-page",attrs:{id:"scrollHeader"}},[a("div",{staticClass:"queryHeader"}),a("div",{staticClass:"ybox firstBox"},[a("div",{staticClass:"item1"},[a("span",[t._v(" 粤A 22N456 "),a("svg",{staticClass:"iconEdit",attrs:{t:"1596452762023",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3878",width:"32",height:"32"}},[a("path",{attrs:{d:"M813.511111 921.6c22.755556 0 39.822222 17.066667 39.822222 39.822222 0 22.755556-17.066667 39.822222-39.822222 39.822222H136.533333c-22.755556 0-39.822222-17.066667-39.822222-39.822222 0-22.755556 17.066667-39.822222 39.822222-39.822222h676.977778z m-676.977778-51.2L227.555556 614.4l147.911111 159.288889-238.933334 96.711111zM403.911111 739.555556l-153.6-159.288889 409.6-426.666667 153.6 159.288889L403.911111 739.555556z m438.044445-460.8l-153.6-159.288889L762.311111 39.822222c22.755556-28.444444 68.266667-28.444444 91.022222 0l56.888889 62.577778c22.755556 28.444444 22.755556 68.266667 0 96.711111l-68.266666 79.644445z",fill:"#999999","p-id":"3879"}})])]),a("span",{staticStyle:{"margin-left":"3vw"}},[t._v("小型新能源汽车 | 预约出租车")])]),t._m(0),t._m(1)]),a("div",{staticClass:"ygBox ybox"},[a("div",{staticClass:"rightMsg"},[t._m(2),a("div",{staticClass:"item2 ymoreTitle2"},[t._v(" 【广东广州】潮安大道2公里500米海收到件弗兰克斯建档立卡交老客 ")]),a("div",{staticClass:"item3 ymoreTitle2"},[t._v(" 驾驶机动车违反交通信号灯通行圣诞节按键反馈了圣诞节福利卡克里斯多夫卢卡斯 看到散单佛偶平时的的放个屁【倒是苹果【偶读【发生过 ")]),t._m(3),t._m(4),a("div",{staticClass:"item5"},[t._v(" 办理说明：需要本人本证，到相关机构全的口办暗示 ")]),a("div",{staticClass:"item6"},[t._m(5),a("svg",{staticClass:"changeIcon",attrs:{t:"1596597473864",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3144",width:"32",height:"32"}},[a("path",{attrs:{d:"M125.7 438.2h772.6c20.2 0 30.1-24.6 15.5-38.6L693.5 188.9c-14.2-13.6-37.9-3.5-37.9 16.2v121.1c0 12.4-10 22.4-22.4 22.4H125.7c-12.4 0-22.4 10-22.4 22.4v44.8c0 12.3 10 22.4 22.4 22.4zM898.3 585.8H125.7c-20.2 0-30.1 24.6-15.5 38.6l220.3 210.7c14.2 13.6 37.9 3.5 37.9-16.2V697.8c0-12.4 10-22.4 22.4-22.4h507.6c12.4 0 22.4-10 22.4-22.4v-44.8c-0.1-12.3-10.1-22.4-22.5-22.4z","p-id":"3145",fill:"#8F8F8F"}})]),t._m(6)])])]),t._m(7),a("div",{staticClass:"submitBar",staticStyle:{position:"fixed",bottom:"0"}},[a("div",{staticClass:"leftMsg"},[a("van-radio"),t._m(8),t._m(9)],1),a("div",{staticClass:"rightBtn"},[t._v("立即办理")])]),t._l(50,(function(e){return a("div",{key:e},[t._v(t._s(e))])}))],2)}),v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item2"},[a("div",[a("span",[t._v("55")]),a("br"),a("span",[t._v("违章")])]),a("div",[a("span",[t._v("26654")]),a("br"),a("span",[t._v("扣分")])]),a("div",[a("span",[t._v("24")]),a("br"),a("span",[t._v("罚款(元)")])]),a("div",[a("span",[t._v("8845")]),a("br"),a("span",[t._v("滞纳金(元）")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item3"},[a("div",[a("img",{attrs:{src:"/img/dataIcon.png",alt:""}}),a("img",{attrs:{src:"/img/dataFrom.png",alt:""}})]),a("div",[t._v(" 全国1线 "),a("span",{staticClass:"iconfont icon-right"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item1"},[a("div",{staticClass:"time"},[a("div",{staticClass:"label1"},[t._v("可办理")]),a("span",{staticStyle:{"margin-left":"2vw"}},[t._v("2020.6.12 13:25")])]),a("div",{staticClass:"picture"},[a("span",{staticClass:"iconfont icon-Shape"}),t._v(" 查看照片 "),a("span",{staticClass:"iconfont icon-right"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item7"},[a("div",[t._v("文书编号:654545435456")]),a("div",[t._v("电子监控")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item4"},[a("div",[a("span",[t._v("扣分")]),a("span",{staticClass:"ytheamColor"},[t._v("20")])]),a("div",[a("span",[t._v("罚款")]),a("span",{staticClass:"ytheamColor"},[t._v("20")])]),a("div",[a("span",[t._v("滞纳金")]),a("span",{staticClass:"ytheamColor"},[t._v("20")])]),a("span",{staticClass:"rightAllPrice"},[a("span",{staticStyle:{"font-size":"2vw"}},[t._v("￥")]),t._v("120000 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("span",{staticClass:"iconfont icon-kabao"}),t._v(" 普通办理 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("span",{staticClass:"iconfont icon-seeuser"}),t._v(" 本人本证 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ygBox ybox"},[a("div",{staticClass:"leftRadio"}),a("div",{staticClass:"rightMsg"},[a("div",{staticClass:"item1"},[a("div",{staticClass:"time"},[a("div",{staticClass:"label2"},[t._v("不可办理")]),a("span",{staticStyle:{"margin-left":"2vw"}},[t._v("2020.6.12 13:25")])]),a("div",{staticClass:"picture"},[a("span",{staticClass:"iconfont icon-Shape"}),t._v(" 查看照片 "),a("span",{staticClass:"iconfont icon-right"})])]),a("div",{staticClass:"item2 ymoreTitle2 falseBox"},[t._v(" 【广东广州】潮安大道2公里500米海收到件弗兰克斯建档立卡交老客 ")]),a("div",{staticClass:"item3 ymoreTitle2 falseBox"},[t._v(" 驾驶机动车违反交通信号灯通行圣诞节按键反馈了圣诞节福利卡克里斯多夫卢卡斯 看到散单佛偶平时的的放个屁【倒是苹果【偶读【发生过 ")]),a("div",{staticClass:"item7 falseBox"},[a("div",[t._v("文书编号:654545435456")]),a("div",[t._v("电子监控")])]),a("div",{staticClass:"item4 falseBox"},[a("div",[a("span",[t._v("扣分")]),a("span",[t._v("20")])]),a("div",[a("span",[t._v("罚款")]),a("span",[t._v("20")])]),a("div",[a("span",[t._v("滞纳金")]),a("span",[t._v("20")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticStyle:{"margin-left":"2vw"}},[t._v("已选"),a("span",{staticClass:"priceColor"},[t._v("22")]),t._v("比")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticStyle:{"margin-left":"2vw"}},[t._v("合计:"),a("span",{staticClass:"priceColor"},[t._v("￥1522")])])}],p={},f=p,m=(a("0ba6"),Object(r["a"])(f,h,v,!1,null,"54710d7c",null));m.exports;n["a"].use(d["a"]);var g=[{path:"/1",component:function(){return Promise.resolve().then(a.bind(null,"be8a"))}},{path:"/2",component:function(){return Promise.all([a.e("chunk-31a73045"),a.e("chunk-7bc826aa")]).then(a.bind(null,"26bb"))}},{path:"/3",component:function(){return a.e("chunk-06c0b370").then(a.bind(null,"3375"))}},{path:"/4",component:function(){return a.e("chunk-cbea27c0").then(a.bind(null,"61af"))}},{path:"/5",component:function(){return Promise.all([a.e("chunk-31a73045"),a.e("chunk-3cf9c272")]).then(a.bind(null,"f800"))}},{path:"/6",component:function(){return a.e("chunk-683a77dd").then(a.bind(null,"fe94"))}},{path:"/7",component:function(){return a.e("chunk-09a399c6").then(a.bind(null,"74ec"))}},{path:"/8",component:function(){return a.e("chunk-46870c90").then(a.bind(null,"83f7"))}},{path:"/order",component:function(){return a.e("chunk-6d46068d").then(a.bind(null,"dbf5"))}},{path:"/person",component:function(){return a.e("chunk-7d3c275a").then(a.bind(null,"c40d"))}},{path:"/home",component:function(){return a.e("chunk-228c9a26").then(a.bind(null,"6511"))}},{path:"/getIntegral",component:function(){return a.e("chunk-2c4d3354").then(a.bind(null,"d4f6"))}},{path:"/pay",component:function(){return a.e("chunk-8c967b78").then(a.bind(null,"76e0"))}},{path:"/orderDetail",component:function(){return a.e("chunk-11d92115").then(a.bind(null,"5b43"))}},{path:"/",component:function(){return Promise.resolve().then(a.bind(null,"be8a"))}},{path:"/bindPhone",component:function(){return a.e("chunk-5fdd54aa").then(a.bind(null,"d8dd"))}}],b=new d["a"]({base:"",routes:g}),_=b,w=(a("66b8"),a("77ed"),a("b970")),C=(a("157a"),a("c0e9")),k=a.n(C),y=a("1fba"),x=a("30f4"),E=(a("d6f6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commonHeader"},[a("span",{staticClass:"back"},[a("van-icon",{attrs:{name:"arrow-left",size:"1.2rem"}})],1),a("span",{staticClass:"title"},[t._v("title")]),a("span",{staticClass:"menu"},[t._v("菜单")])])}),M=[],I={},P=I,S=Object(r["a"])(P,E,M,!1,null,"2569823c",null),$=S.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popUp"},[a("van-popup",{attrs:{position:"bottom",overlay:t.overlay},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t.title?a("div",{staticClass:"header"},[t._v(" "+t._s(t.title)+" "),a("span",{staticStyle:{"font-size":"6vw",color:"#999"},on:{click:function(e){t.show=!1}}},[t._v("×")])]):t._e(),t._t("default")],2)],1)},T=[],L={data:function(){return{show:!1}},props:{title:{type:String,default:""},overlay:{default:!0}}},O=L,j=(a("5d57"),Object(r["a"])(O,B,T,!1,null,null,null)),z=j.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"susBall"},[a("div",{class:{removable:!0},style:"left:"+t.source.clientX+"px; top:"+t.source.clientY+"px;",on:{touchstart:t.handleTouchstart,touchmove:function(e){return e.preventDefault(),t.handleTouchmove(e)},touchend:t.handleTouchend}},[t.show?a("div",{staticClass:"reItem animate__animated animate__fadeInUp animate__faster",on:{click:t.toTop}},[a("img",{attrs:{src:"/images/susball10.png",alt:""}})]):t._e(),t.show?a("div",{staticClass:"reItem animate__animated animate__fadeInUp animate__faster",on:{click:function(e){t.showPrice=!t.showPrice}}},[t.showPrice?a("img",{attrs:{src:"/images/susball4.png",alt:""}}):t._e(),t.showPrice?t._e():a("img",{attrs:{src:"/images/susball9.png",alt:""}})]):t._e(),t.show?a("div",{staticClass:"reItem animate__animated animate__fadeInUp animate__faster",on:{click:t.alertPrice}},[a("img",{attrs:{src:"/images/susball11.png",alt:""}})]):t._e(),t.show?a("div",{staticClass:"reItem animate__animated animate__fadeInUp animate__faster",on:{click:t.generateImg}},[a("img",{attrs:{src:"/images/susball2.png",alt:""}})]):t._e(),a("div",{staticClass:"reItem animate__animated animate__fadeInUp animate__faster",on:{click:function(e){t.show=!t.show}}},[t.show?a("img",{attrs:{src:"/images/susball8.png",alt:""}}):a("img",{attrs:{src:"/images/susball16.png",alt:""}})])])])},D=[],A={data:function(){return{source:{clientX:0,clientY:200},relativex:0,relativey:0,show:!0,showPrice:!0}},mounted:function(){var t=localStorage.getItem("susBallLocation");if(t=JSON.parse(t),t)this.source=t;else{var e=document.body.clientWidth;this.source.clientX=e-e/10-35}},methods:{toTop:function(){window.location.href="#scrollHeader"},handleTouchstart:function(t){var e=t.targetTouches[0],a=e.clientX,n=e.clientY,s=this.source.clientX,i=this.source.clientY;this.relativex=a-s,this.relativey=n-i},handleTouchmove:function(t){var e=t.targetTouches[0];this.source.clientX=e.clientX-this.relativex,this.source.clientY=e.clientY-this.relativey},handleTouchend:function(t){var e=t.changedTouches[0].clientX;console.log(e);var a=document.body.clientWidth;e>a/2?(console.log("右边",t),this.source.clientX=a-a/10-35):(console.log("左边"),this.source.clientX=10),localStorage.setItem("susBallLocation",JSON.stringify(this.source))},generateImg:function(){console.log("生成图片-------");var t=this.$parent.$refs.appRef;t.generateImg=!t.generateImg},alertPrice:function(){var t=this.$parent.$refs.appRef;t.priceStatus="alert"}},watch:{showPrice:function(t){if(console.log(t),1==t){var e=this.$parent.$refs.appRef;e.priceStatus="price"}else{var a=this.$parent.$refs.appRef;a.priceStatus="hidden"}}}},F=A,R=(a("6da2"),Object(r["a"])(F,U,D,!1,null,"00acac7e",null)),H=R.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialogAlert"},[a("van-popup",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"alert"},[t._t("default")],2),a("div",{staticStyle:{"border-bottom":"1px solid #EDEDED"}}),a("div",{staticClass:"textBtn",on:{click:function(e){t.show=!1}}},[t._v("我知道了")])])],1)},Z=[],N={data:function(){return{show:!1}}},V=N,W=(a("5ca8"),Object(r["a"])(V,X,Z,!1,null,"089ed8e5",null)),Y=W.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ycheckbox"},[a("van-checkbox",{scopedSlots:t._u([{key:"icon",fn:function(e){return[t.disabled?a("img",{staticClass:"img-icon",attrs:{src:t.disabledIcon,alt:""}}):a("img",{staticClass:"img-icon",attrs:{src:e.checked?t.activeIcon:t.inactiveIcon}})]}}]),model:{value:t.checked1,callback:function(e){t.checked1=e},expression:"checked1"}})],1)},J=[],q={data:function(){return{activeIcon:"/images/checkbox1.png",inactiveIcon:"/images/checkbox2.png",disabledIcon:"/images/checkbox3.png"}},props:{disabled:{default:!1},value:{default:!0}},computed:{checked1:{get:function(){return this.value},set:function(t){this.$emit("input",t),this.$emit("change",t)}}}},K=q,Q=(a("5362"),Object(r["a"])(K,G,J,!1,null,"65b98e54",null)),tt=Q.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("div",{staticClass:"myToast"},[a("span",{staticClass:"toastW"},[a("svg",{staticStyle:{width:"6vw",height:"6vw"},attrs:{slot:"img",t:"1597040233635",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2138",width:"32",height:"32"},slot:"img"},[a("path",{attrs:{d:"M153.6 501.76c0 129.024 67.584 245.76 178.176 311.296 110.592 63.488 247.808 63.488 358.4 0s178.176-182.272 178.176-311.296c0-129.024-67.584-245.76-178.176-311.296-110.592-63.488-247.808-63.488-358.4 0-110.592 65.536-178.176 182.272-178.176 311.296z m0 0",fill:"#FFD96B","p-id":"2139"}}),a("path",{attrs:{d:"M219.136 501.76c0 161.792 131.072 292.864 292.864 292.864s292.864-131.072 292.864-292.864S673.792 208.896 512 208.896s-292.864 131.072-292.864 292.864z m0 0",fill:"#F9B721","p-id":"2140","data-spm-anchor-id":"a313x.7781069.0.i0"}}),a("path",{staticClass:"selected",attrs:{d:"M450.56 413.696l61.44-118.784c0-2.048 4.096-2.048 4.096 0l57.344 120.832s0 2.048 2.048 2.048l133.12 22.528c2.048 0 2.048 2.048 2.048 4.096l-98.304 92.16v2.048l20.48 133.12c0 2.048-2.048 4.096-4.096 2.048L512 608.256h-2.048L389.12 667.648c-2.048 0-4.096 0-4.096-2.048L409.6 532.48v-2.048l-94.208-96.256c-2.048-2.048 0-4.096 2.048-4.096l133.12-16.384z m0 0",fill:"#FFE094","p-id":"2141","data-spm-anchor-id":"a313x.7781069.0.i1"}})]),a("span",{attrs:{slot:"msg"},slot:"msg"},[t._v("本次操作扣除1积分")])])]):t._e()},at=[],nt={data:function(){return{show:!1}},mounted:function(){},methods:{myToast:function(){var t=this;this.show=!0,setTimeout((function(){t.show=!1}),3e3)}}},st=nt,it=(a("b9ad"),Object(r["a"])(st,et,at,!1,null,"5605e44e",null)),ct=it.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yButton"},[a("van-button",{attrs:{type:"default"}},[t._v("保存并查询")]),a("van-button",{staticClass:"btnDisabled",attrs:{type:"default"}},[t._v("保存并查询")])],1)},rt=[],lt={},ut=lt,dt=(a("f3db"),Object(r["a"])(ut,ot,rt,!1,null,"5c686cb0",null)),ht=dt.exports;n["a"].prototype.html2canvas=k.a,n["a"].prototype.BScroll=y["a"],n["a"].use(x["a"]),n["a"].use(w["a"]),n["a"].config.productionTip=!1,n["a"].component("commonHeader",$),n["a"].component("ybutton",ht),n["a"].component("susBall",H),n["a"].component("myToast",ct),n["a"].component("ycheckbox",tt),n["a"].component("yPopUp",z),n["a"].component("dialogAlert",Y),new n["a"]({router:_,render:function(t){return t(u)}}).$mount("#app"),window.onload=function(){document.addEventListener("touchstart",(function(t){t.touches.length>1&&t.preventDefault()}));var t=0;document.addEventListener("touchend",(function(e){var a=(new Date).getTime();a-t<=300&&e.preventDefault(),t=a}),!1),document.addEventListener("gesturestart",(function(t){t.preventDefault()}))}},"5b64":function(t,e,a){},"5ca8":function(t,e,a){"use strict";var n=a("8ca7"),s=a.n(n);s.a},"5d57":function(t,e,a){"use strict";var n=a("5b64"),s=a.n(n);s.a},"66b8":function(t,e,a){},"6da2":function(t,e,a){"use strict";var n=a("b62b"),s=a.n(n);s.a},"8ca7":function(t,e,a){},"9d9d":function(t,e,a){},b62b:function(t,e,a){},b9ad:function(t,e,a){"use strict";var n=a("c29c"),s=a.n(n);s.a},be8a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"getDriveCard"},[a("div",{staticClass:"borderPanelW"},[t._m(0),t.show?a("video",{attrs:{id:"video"}}):t._e(),t.show?t._e():a("img",{staticClass:"myImg",attrs:{src:t.imgPath,alt:""}}),t._m(1)]),t._m(2),a("input",{staticClass:"inputBox",attrs:{type:"file",id:"fileInput",accept:"image/*"}}),a("div",{staticClass:"buttonW"},[a("div",{on:{click:t.selectPic}},[a("svg",{staticClass:"iconPic",attrs:{t:"1596438946275",viewBox:"0 0 1027 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"17186",width:"32",height:"32"}},[a("path",{attrs:{d:"M65.6 945.6h896c35.2 0 65.6-28.8 65.6-62.4V145.6c0-35.2-28.8-65.6-65.6-65.6h-896C28.8 80 0 108.8 0 145.6v736c0 35.2 28.8 64 65.6 64z m0-65.6V692.8l256-249.6 264 264c9.6 14.4 30.4 11.2 44.8 1.6l116.8-105.6 211.2 214.4s1.6 1.6 3.2 1.6V880h-896zM958.4 145.6v585.6L771.2 537.6c-11.2-11.2-28.8-11.2-43.2-3.2L608 640 344 379.2c-4.8-6.4-14.4-9.6-22.4-11.2-8 0-17.6 3.2-24 8L65.6 603.2V145.6h892.8z",fill:"#808080","p-id":"17187"}}),a("path",{staticClass:"selected",attrs:{d:"M736 401.6c35.2 0 62.4-28.8 62.4-62.4 0-35.2-28.8-62.4-62.4-62.4-35.2 0-62.4 28.8-62.4 62.4s27.2 62.4 62.4 62.4z",fill:"#0A89FE","p-id":"17188","data-spm-anchor-id":"a313x.7781069.0.i17"}})]),a("br"),a("span",[t._v("相册选取")])]),a("div",{on:{click:t.photograph}},[a("svg",{staticClass:"iconPhoto",attrs:{t:"1596438324793",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"12812",width:"32",height:"32"}},[a("path",{attrs:{d:"M512 960C264.576 960 64 759.424 64 512S264.576 64 512 64s448 200.576 448 448-200.576 448-448 448z m0-92c196.613 0 356-159.387 356-356S708.613 156 512 156 156 315.387 156 512s159.387 356 356 356z","p-id":"12813",fill:"#dceef8","data-spm-anchor-id":"a313x.7781069.0.i1"}}),a("path",{staticClass:"selected",attrs:{d:"M512.5 512.5m-308.5 0a308.5 308.5 0 1 0 617 0 308.5 308.5 0 1 0-617 0Z","p-id":"12814",fill:"#0A89FE","data-spm-anchor-id":"a313x.7781069.0.i3"}})])]),a("div",[a("svg",{staticClass:"iconInput",attrs:{t:"1596439346327",viewBox:"0 0 1036 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"18022",width:"32",height:"32"}},[a("path",{attrs:{d:"M956.321598 131.136689 67.635423 131.136689c-35.057447 0-63.47773 28.386514-63.47773 63.476707l0 634.772184c0 35.0861 28.420283 63.476707 63.47773 63.476707l888.686175 0c35.0554 0 63.476707-28.390607 63.476707-63.476707L1019.798305 194.613396C1019.799328 159.523203 991.376998 131.136689 956.321598 131.136689zM956.321598 829.385581 67.635423 829.385581 67.635423 194.613396l888.686175 0L956.321598 829.385581z","p-id":"18023"}}),a("path",{staticClass:"selected",attrs:{d:"M258.06759 638.95546l507.821841 0 0 63.476707-507.821841 0 0-63.476707Z","p-id":"18024","data-spm-anchor-id":"a313x.7781069.0.i21",fill:"#1296db"}}),a("path",{attrs:{d:"M194.590883 321.567833l63.476707 0 0 63.476707-63.476707 0 0-63.476707Z","p-id":"18025"}}),a("path",{attrs:{d:"M385.021004 321.567833l63.47773 0 0 63.476707-63.47773 0 0-63.476707Z","p-id":"18026"}}),a("path",{attrs:{d:"M575.457264 321.567833l63.476707 0 0 63.476707-63.476707 0 0-63.476707Z","p-id":"18027"}}),a("path",{attrs:{d:"M765.889431 321.567833l63.476707 0 0 63.476707-63.476707 0 0-63.476707Z","p-id":"18028"}}),a("path",{attrs:{d:"M194.590883 448.52227l63.476707 0 0 63.476707-63.476707 0 0-63.476707Z","p-id":"18029"}}),a("path",{attrs:{d:"M385.021004 448.52227l63.47773 0 0 63.476707-63.47773 0 0-63.476707Z","p-id":"18030"}}),a("path",{attrs:{d:"M575.457264 448.52227l63.476707 0 0 63.476707-63.476707 0 0-63.476707Z","p-id":"18031"}}),a("path",{attrs:{d:"M765.889431 448.52227l63.476707 0 0 63.476707-63.476707 0 0-63.476707Z","p-id":"18032"}})]),a("br"),a("span",[t._v("手动输入")])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"borderPanel"},[a("img",{attrs:{src:"/images/pgTemplate.png",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panelText"},[a("div",{staticClass:"header"},[a("span",{staticStyle:{color:"#999"}},[t._v("中华人民共和国机动车")]),t._v("行驶证")]),a("div",{staticClass:"carCode"},[t._v("号牌号码")]),a("div",{staticClass:"bottom"},[a("div",{staticClass:"left"}),a("div",{staticClass:"right"},[a("div",[t._v("车辆识别代码")]),a("div",[t._v("发动机号码")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"driverCardP"},[a("div",{staticClass:"title"},[t._v("将行驶证正页放入框内拍照")]),a("img",{attrs:{src:"/images/pzxsz.png",alt:""}})])}],i=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),{data:function(){return{imgPath:"",show:!0}},components:{},mounted:function(){var t=this;setTimeout((function(){t.init()}),500)},methods:{init:function(){console.log("init 初始化==========");var t=document.getElementById("video"),e={video:{width:{min:360},height:{min:720},facingMode:{exact:"environment"}}},a=function(t){console.log("Video capture error: ",t.code)};navigator.getUserMedia?navigator.getUserMedia(e,(function(e){console.log(e,1),t.srcObject=e,t.play()}),a):navigator.webkitGetUserMedia?navigator.webkitGetUserMedia(e,(function(e){console.log(e,2),t.src=window.webkitURL.createObjectURL(e),t.play()}),a):navigator.mozGetUserMedia&&navigator.mozGetUserMedia(e,(function(e){console.log(e,3),t.src=window.URL.createObjectURL(e),t.play()}),a)},photograph:function(){var t=document.getElementById("video"),e=document.createElement("canvas"),a=e.getContext("2d");a.drawImage(t,0,0,t.videoWidth,t.videoHeight),console.log(e.toDataURL()),this.imgPath=e.toDataURL(),this.show=!this.show},selectPic:function(){document.getElementById("fileInput").click()}}}),c=i,o=(a("f1be"),a("2877")),r=Object(o["a"])(c,n,s,!1,null,"179c2079",null);e["default"]=r.exports},c29c:function(t,e,a){},c2b8:function(t,e,a){},e15d:function(t,e,a){},f1be:function(t,e,a){"use strict";var n=a("e15d"),s=a.n(n);s.a},f3db:function(t,e,a){"use strict";var n=a("16bd"),s=a.n(n);s.a}});
//# sourceMappingURL=app.50b8a506.js.map