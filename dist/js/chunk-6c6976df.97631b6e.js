(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c6976df"],{"057f":function(t,e,r){var a=r("fc6a"),n=r("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return n(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?s(t):n(a(t))}},"159b":function(t,e,r){var a=r("da84"),n=r("fdbc"),i=r("17c2"),o=r("9112");for(var s in n){var c=a[s],u=c&&c.prototype;if(u&&u.forEach!==i)try{o(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,e,r){"use strict";var a=r("b727").forEach,n=r("a640"),i=n("forEach");t.exports=i?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1d03":function(t,e,r){"use strict";r("9832")},"428f":function(t,e,r){var a=r("da84");t.exports=a},"4de4":function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").filter,i=r("1dde"),o=i("filter");a({target:"Array",proto:!0,forced:!o},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");var a=r("ade3");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"6e76":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"background-menu"},[r("div",{staticClass:"container container-ajust"},[r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark "},[r("div",{staticClass:"container-fluid"},[t._m(0),r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("ACADEMICOS DE CHUPINGUAIA")]),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo03"}},[r("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"},[r("li",{staticClass:"nav-item button-menu"},[r("a",{staticClass:"nav-link",on:{click:function(e){return t.homepage()}}},[t._v("Home")])]),r("li",{staticClass:"nav-item button-menu"},[r("a",{staticClass:"nav-link",on:{click:function(e){return t.routeAdmin()}}},[t._v("Area do Administrador")])]),r("li",{staticClass:"nav-item button-menu"},[r("a",{staticClass:"nav-link",on:{click:function(e){return t.routeLogout()}}},[t._v("Sair")])])])])])])])]),r("main",[r("section",{staticClass:"container-section"},[r("div",[r("img",{staticClass:"imagen-user",attrs:{src:t.user.foto_url}})]),t._m(1),r("div",{staticClass:"text-center mt-3"},[r("p",[t._v("Nome")]),r("h6",[t._v(t._s(t.user.nome))])]),r("div",{staticClass:"text-center mt-3"},[r("p",[t._v("Email")]),r("h6",[t._v(t._s(t.user.email))])]),r("div",{staticClass:"text-center mt-3"},[r("p",[t._v("Contrato Vigente")]),r("h6",[t._v(t._s(t.contrato.vigente))])])]),r("section",{staticClass:"container mt-5 container-boletos"},[r("div",{staticClass:"card mt-5 boletos-margin"},[r("div",{staticClass:"card-header"},[t._v(" Seu boleto ")]),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("Vencimento: 10/12/2022")]),r("br"),r("p",{staticClass:"card-text"},[t._v("Mensalidade: "+t._s(t.contrato.mensalidade))]),r("p",{staticClass:"card-text"},[t._v(" Linha digitável: 00190500954014481606906809350314337370000000100 ")]),r("p",{staticClass:"card-text"},[t._v(" Nosso numero: 123551-2 ")]),r("p",{staticClass:"card-text"},[t._v(" Situção do bolto: Liquidado ")]),r("button",{staticClass:"btn btn-primary"},[t._v("Imprimir")])])]),r("div",{staticClass:"card mt-5 boletos-margin"},[r("div",{staticClass:"card-header"},[t._v(" Seu boleto ")]),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("Vencimento: 10/12/2022")]),r("br"),r("p",{staticClass:"card-text"},[t._v("Mensalidade: "+t._s(t.contrato.mensalidade))]),r("p",{staticClass:"card-text"},[t._v(" Linha digitável: 00190500954014481606906809350314337370000000100 ")]),r("p",{staticClass:"card-text"},[t._v(" Nosso numero: 123551-2 ")]),r("p",{staticClass:"card-text"},[t._v(" Situção do bolto: Liquidado ")]),r("button",{staticClass:"btn btn-primary"},[t._v("Imprimir")])])]),r("div",{staticClass:"card mt-5 boletos-margin"},[r("div",{staticClass:"card-header"},[t._v(" Seu boleto ")]),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("Vencimento: 10/12/2022")]),r("br"),r("p",{staticClass:"card-text"},[t._v("Mensalidade: "+t._s(t.contrato.mensalidade))]),r("p",{staticClass:"card-text"},[t._v(" Linha digitável: 00190500954014481606906809350314337370000000100 ")]),r("p",{staticClass:"card-text"},[t._v(" Nosso numero: 123551-2 ")]),r("p",{staticClass:"card-text"},[t._v(" Situção do bolto: Liquidado ")]),r("button",{staticClass:"btn btn-primary"},[t._v("Imprimir")])])])])]),t._m(2)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"input-group mb-2"},[r("input",{staticClass:"form-control",attrs:{type:"file",id:"inputGroupFile04","aria-describedby":"inputGroupFileAddon04","aria-label":"Upload"}}),r("button",{staticClass:"btn btn-outline-warning",attrs:{type:"button",id:"inputGroupFileAddon04"}},[t._v(" Upload ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("div",[r("h1",{staticClass:"title-footer"},[t._v("Associação dos Academicos de Chupinguaia")]),r("div",{staticClass:"sub-title-footer"},[r("p",[t._v("associaçãodoacademicoschp@gmail.com")]),r("p",[t._v("(69)3322-6574")]),r("p",[t._v("Chupinguia-RO")])])])])}],i=r("1da1"),o=r("5530"),s=(r("96cf"),r("2f62")),c=(r("f9e3"),r("4989"),r("7f10"),{name:"User",data:function(){return{}},computed:Object(o["a"])(Object(o["a"])({},Object(s["c"])("auth",["user"])),Object(s["c"])("auth",["contrato"])),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(s["b"])("auth",["ActionLogout"])),Object(s["b"])("auth",["ActionContratoUser"])),{},{routeLogout:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.ActionLogout();case 3:location.reload(!0),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},routeAdmin:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:1==t.user.admin?t.$router.push({name:"AdminHome"}):alert("Você não é um administrador");case 1:case"end":return e.stop()}}),e)})))()},homepage:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$router.push({name:"Home"});case 1:case"end":return e.stop()}}),e)})))()},getContrato:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.ActionContratoUser();case 2:if(void 0!=t.contrato||0!=t.user.admin){e.next=12;break}if(r=confirm("Seu contrato não existe por favor realizar contrato para prosseguir"),1!=r){e.next=9;break}return t.$router.push({name:"Contrato"}),e.abrupt("return");case 9:return t.$router.push({name:"Home"}),t.routeLogout(),e.abrupt("return");case 12:case"end":return e.stop()}}),e)})))()}}),created:function(){this.getContrato()}}),u=c,l=(r("1d03"),r("2877")),f=Object(l["a"])(u,a,n,!1,null,null,null);e["default"]=f.exports},"746f":function(t,e,r){var a=r("428f"),n=r("5135"),i=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});n(e,t)||o(e,t,{value:i.f(t)})}},"7f10":function(t,e,r){},8418:function(t,e,r){"use strict";var a=r("a04b"),n=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var o=a(e);o in t?n.f(t,o,i(0,r)):t[o]=r}},9832:function(t,e,r){},a4d3:function(t,e,r){"use strict";var a=r("23e7"),n=r("da84"),i=r("d066"),o=r("c430"),s=r("83ab"),c=r("4930"),u=r("d039"),l=r("5135"),f=r("e8b5"),d=r("861d"),b=r("d9b5"),v=r("825a"),p=r("7b0b"),m=r("fc6a"),h=r("a04b"),g=r("577e"),C=r("5c6c"),y=r("7c73"),O=r("df75"),_=r("241c"),w=r("057f"),j=r("7418"),x=r("06cf"),S=r("9bf2"),k=r("d1e7"),P=r("9112"),E=r("6eeb"),A=r("5692"),D=r("f772"),L=r("d012"),N=r("90e3"),R=r("b622"),$=r("e538"),I=r("746f"),U=r("d44e"),T=r("69f3"),F=r("b727").forEach,H=D("hidden"),V="Symbol",G="prototype",J=R("toPrimitive"),M=T.set,q=T.getterFor(V),z=Object[G],Q=n.Symbol,W=i("JSON","stringify"),B=x.f,K=S.f,X=w.f,Y=k.f,Z=A("symbols"),tt=A("op-symbols"),et=A("string-to-symbol-registry"),rt=A("symbol-to-string-registry"),at=A("wks"),nt=n.QObject,it=!nt||!nt[G]||!nt[G].findChild,ot=s&&u((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var a=B(z,e);a&&delete z[e],K(t,e,r),a&&t!==z&&K(z,e,a)}:K,st=function(t,e){var r=Z[t]=y(Q[G]);return M(r,{type:V,tag:t,description:e}),s||(r.description=e),r},ct=function(t,e,r){t===z&&ct(tt,e,r),v(t);var a=h(e);return v(r),l(Z,a)?(r.enumerable?(l(t,H)&&t[H][a]&&(t[H][a]=!1),r=y(r,{enumerable:C(0,!1)})):(l(t,H)||K(t,H,C(1,{})),t[H][a]=!0),ot(t,a,r)):K(t,a,r)},ut=function(t,e){v(t);var r=m(e),a=O(r).concat(vt(r));return F(a,(function(e){s&&!ft.call(r,e)||ct(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=h(t),r=Y.call(this,e);return!(this===z&&l(Z,e)&&!l(tt,e))&&(!(r||!l(this,e)||!l(Z,e)||l(this,H)&&this[H][e])||r)},dt=function(t,e){var r=m(t),a=h(e);if(r!==z||!l(Z,a)||l(tt,a)){var n=B(r,a);return!n||!l(Z,a)||l(r,H)&&r[H][a]||(n.enumerable=!0),n}},bt=function(t){var e=X(m(t)),r=[];return F(e,(function(t){l(Z,t)||l(L,t)||r.push(t)})),r},vt=function(t){var e=t===z,r=X(e?tt:m(t)),a=[];return F(r,(function(t){!l(Z,t)||e&&!l(z,t)||a.push(Z[t])})),a};if(c||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?g(arguments[0]):void 0,e=N(t),r=function(t){this===z&&r.call(tt,t),l(this,H)&&l(this[H],e)&&(this[H][e]=!1),ot(this,e,C(1,t))};return s&&it&&ot(z,e,{configurable:!0,set:r}),st(e,t)},E(Q[G],"toString",(function(){return q(this).tag})),E(Q,"withoutSetter",(function(t){return st(N(t),t)})),k.f=ft,S.f=ct,x.f=dt,_.f=w.f=bt,j.f=vt,$.f=function(t){return st(R(t),t)},s&&(K(Q[G],"description",{configurable:!0,get:function(){return q(this).description}}),o||E(z,"propertyIsEnumerable",ft,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Q}),F(O(at),(function(t){I(t)})),a({target:V,stat:!0,forced:!c},{for:function(t){var e=g(t);if(l(et,e))return et[e];var r=Q(e);return et[e]=r,rt[r]=e,r},keyFor:function(t){if(!b(t))throw TypeError(t+" is not a symbol");if(l(rt,t))return rt[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),a({target:"Object",stat:!0,forced:!c,sham:!s},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),a({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:bt,getOwnPropertySymbols:vt}),a({target:"Object",stat:!0,forced:u((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(p(t))}}),W){var pt=!c||u((function(){var t=Q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));a({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,r){var a,n=[t],i=1;while(arguments.length>i)n.push(arguments[i++]);if(a=e,(d(e)||void 0!==t)&&!b(t))return f(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!b(e))return e}),n[1]=e,W.apply(null,n)}})}Q[G][J]||P(Q[G],J,Q[G].valueOf),U(Q,V),L[H]=!0},a640:function(t,e,r){"use strict";var a=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&a((function(){r.call(null,e||function(){throw 1},1)}))}},dbb4:function(t,e,r){var a=r("23e7"),n=r("83ab"),i=r("56ef"),o=r("fc6a"),s=r("06cf"),c=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,a=o(t),n=s.f,u=i(a),l={},f=0;while(u.length>f)r=n(a,e=u[f++]),void 0!==r&&c(l,e,r);return l}})},e439:function(t,e,r){var a=r("23e7"),n=r("d039"),i=r("fc6a"),o=r("06cf").f,s=r("83ab"),c=n((function(){o(1)})),u=!s||c;a({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},e538:function(t,e,r){var a=r("b622");e.f=a}}]);
//# sourceMappingURL=chunk-6c6976df.97631b6e.js.map