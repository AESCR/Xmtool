(function(e){function n(n){for(var t,u,c=n[0],i=n[1],d=n[2],o=0,l=[];o<c.length;o++)u=c[o],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&l.push(a[u][0]),a[u]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);f&&f(n);while(l.length)l.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var e,n=0;n<r.length;n++){for(var s=r[n],t=!0,c=1;c<s.length;c++){var i=s[c];0!==a[i]&&(t=!1)}t&&(r.splice(n--,1),e=u(u.s=s[0]))}return e}var t={},a={app:0},r=[];function u(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,u),s.l=!0,s.exports}u.m=e,u.c=t,u.d=function(e,n,s){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(u.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)u.d(s,t,function(n){return e[n]}.bind(null,t));return s},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var f=i;r.push([0,"chunk-vendors"]),s()})({0:function(e,n,s){e.exports=s("56d7")},"034f":function(e,n,s){"use strict";s("64a9")},4678:function(e,n,s){var t={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var n=r(e);return s(n)}function r(e){if(!s.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,n,s){"use strict";s.r(n);s("cadf"),s("551c"),s("f751"),s("097d");var t=s("a026"),a=s("f23d"),r=(s("202f"),function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{attrs:{id:"app"}},[s("a-layout",{attrs:{id:"components-layout-demo-top-side-2"}},[s("a-layout",[s("a-layout-sider",{attrs:{collapsed:!1,width:e.sidebarWidth}},[s("a-menu",{style:{height:"100vh",borderRight:0,overflowY:"scroll",overflowX:"hidden",paddingLeft:"15px"},attrs:{mode:"inline","default-selected-keys":e.selectedMenuIds,"default-open-keys":e.expandMenuIds}},[e._l(e.menus,(function(n){return[!n.submenus||n.submenus.length<1?s("a-menu-item",{key:n.id,on:{click:function(s){return e.menuItemClick(n)}}},[e._v("\n              "+e._s(n.name)+"\n            ")]):s("sub-menu",{key:n.id,attrs:{"menu-info":n},on:{menuClick:e.menuItemClick}})]}))],2)],1),s("a-layout",{staticStyle:{overflow:"hidden"}},[s("a-layout-content",{staticStyle:{overflow:"hidden",background:"#fff"}},[s("div",{staticClass:"markdown-body"},[s("VueMarkdown",{attrs:{source:e.markdownData}})],1)])],1)],1)],1)],1)}),u=[],c=(s("8e6e"),s("456d"),s("ac6a"),s("aef6"),s("ade3")),i=s("bc3a"),d=s.n(i),f=s("9ce6"),o=s.n(f),l=(s("e4cbc"),s("55f1"));function b(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function j(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?b(Object(s),!0).forEach((function(n){Object(c["a"])(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}var m={template:'\n      <a-sub-menu :key="menuInfo.id" v-bind="$props" v-on="$listeners">\n        <span slot="title">\n          <span>{{ menuInfo.name }}</span>\n        </span>\n        <template v-for="item in menuInfo.submenus">\n          <a-menu-item v-if="!item.submenus || item.submenus.length < 1" :key="item.id" @click="subMenuClick(item)">\n            <span>{{ item.name }}</span>\n          </a-menu-item>\n          <sub-menu v-else :key="item.id" :menu-info="item" @menuClick=\'subMenuClick\' />\n        </template>\n      </a-sub-menu>\n    ',name:"SubMenu",isSubMenu:!0,props:j(j({},l["a"].SubMenu.props),{},{menuInfo:{type:Object,default:function(){return{}}}}),methods:{subMenuClick:function(e){this.$emit("menuClick",e||this.menuInfo)}}},p={name:"app",components:{VueMarkdown:o.a,"sub-menu":m},data:function(){return{collapsed:!1,sidebarWidth:230,markdownData:"",firstMenuItem:null,selectedMenuIds:[],expandMenuLevel:1,expandMenuIds:[],menus:[]}},mounted:function(){var e=this;this.loadConfig((function(){e.genExpandMenuIds(e.menus,1),e.selectedMenuIds.length=0,e.parseUrl()||null!=e.firstMenuItem&&(e.selectedMenuIds.push(e.firstMenuItem.id),e.menuItemClick(e.firstMenuItem))}))},methods:{loadConfig:function(e){var n=this;d.a.get("/static/config.json").then((function(s){document.title=s.data.title,n.sidebarWidth=s.data.topicWidth,n.expandMenuLevel=s.data.openLevel,n.menus=s.data.topics,"function"==typeof e&&e()}))},parseUrl:function(){var e=window.location.href;e.indexOf("?")>0&&(e=e.substring(0,e.indexOf("?"))),e.endsWith("/")&&(e=e.substring(0,e.length-1));var n=e.substring(e.lastIndexOf("/")+1),s=this.findMenuById(this.menus,n);return!!s&&(this.menuItemClick(s),!0)},findMenuById:function(e,n){for(var s=0;s<e.length;s++){if(e[s].id==n)return e[s];if(e[s].submenus&&e[s].submenus.length>0){var t=this.findMenuById(e[s].submenus,n);if(t)return t}}return null},genExpandMenuIds:function(e,n){var s=this;if(n<=this.expandMenuLevel){var t=0;e.forEach((function(e){e.submenus&&e.submenus.length>0?(s.expandMenuIds.push(e.id),s.genExpandMenuIds(e.submenus,n+1)):0==t&&null==s.firstMenuItem&&(s.firstMenuItem=e),t++}))}else{var a=0;e.forEach((function(e){e.submenus&&e.submenus.length>0||0==a&&null==s.firstMenuItem&&(s.firstMenuItem=e),a++}))}},openMarkdown:function(e){var n=this;d.a.get(e).then((function(e){n.markdownData=e.data}))},menuItemClick:function(e){e.src&&(this.selectedMenuIds.length=0,this.selectedMenuIds.push(e.id),this.openMarkdown(e.src))}}},h=p,y=(s("034f"),s("2877")),v=Object(y["a"])(h,r,u,!1,null,null,null),g=v.exports;t["a"].use(a["a"]),t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(g)}}).$mount("#app")},"64a9":function(e,n,s){}});
//# sourceMappingURL=app.15838d48.js.map