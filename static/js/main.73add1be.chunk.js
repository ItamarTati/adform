(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(8),c=a.n(n),s=a(13),i=a(0);function r(e,t){var a=new RegExp(e.toLowerCase());return t.filter((function(e){return a.test(e.name.toLowerCase())}))}function o(e,t,a){return a.filter((function(a){return a.population<=t&&a.population>=e&&null!==a.population}))}var l=a(4),u=["url(https://fwbmatch.fra1.digitaloceanspaces.com/starwars/locations-bg-01.jpg)","url(https://fwbmatch.fra1.digitaloceanspaces.com/starwars/locations-bg-02.jpg)","url(https://fwbmatch.fra1.digitaloceanspaces.com/starwars/locations-bg-03.jpg)","url(https://fwbmatch.fra1.digitaloceanspaces.com/starwars/locations-bg-04.jpg)"];function m(e){var t=Object(i.useState)(0),a=Object(s.a)(t,2),n=a[0],c=a[1];return Object(i.useEffect)((function(){var e=setTimeout((function(){c(n+1),n===u.length-1&&c(0),document.body.style.background=u[n],document.body.style.backgroundAttachment="fixed"}),5e3);return function(){clearTimeout(e)}}),[n]),Object(l.jsxs)("div",{className:"card mustafar active",children:[Object(l.jsx)("header",{className:"bg-image",children:Object(l.jsx)("img",{src:"mustafar"===e.name.toLowerCase()||"tatooine"===e.name.toLowerCase()||"coruscant"===e.name.toLowerCase()||"utapau"===e.name.toLowerCase()?"https://fwbmatch.fra1.digitaloceanspaces.com/starwars/".concat(e.name.toLowerCase(),".png"):"https://static.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20061211013805",alt:e.name})}),Object(l.jsxs)("main",{children:[Object(l.jsxs)("div",{className:"level",children:["Population: ",null===e.population?"unknown":e.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(l.jsx)("div",{className:"name",children:e.name}),Object(l.jsx)("p",{className:"p-mustafar",children:"Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),Object(l.jsxs)("footer",{children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsx)("div",{className:"title",children:"Climates:"}),Object(l.jsxs)("div",{className:"content",children:[e.climates.map((function(e){return Object(l.jsx)("p",{children:e})}))," "]})]}),Object(l.jsxs)("div",{className:"middle",children:[Object(l.jsx)("div",{className:"title",children:"Diameter:"}),Object(l.jsx)("div",{className:"content",children:null===e.diameter?"unknown":e.diameter})]}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsx)("div",{className:"title",children:"Gravity:"}),Object(l.jsx)("div",{className:"content",children:e.gravity})]})]})]})}var d=a(82),p=a(83);function j(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(!1),u=Object(s.a)(c,2),j=u[0],b=u[1],h=Object(i.useState)(!1),f=Object(s.a)(h,2),g=f[0],O=f[1],v=Object(i.useState)(0),x=Object(s.a)(v,2),w=x[0],y=x[1],N=Object(i.useState)(1e14),C=Object(s.a)(N,2),k=C[0],P=C[1],L=Object(i.useState)(""),S=Object(s.a)(L,2),q=S[0],T=S[1];return Object(i.useEffect)((function(){fetch("https://swapi-gql-adform.herokuapp.com/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n      query {\n        allPlanets  {\n          planets {\n            name \n            population\n            gravity\n            diameter\n            climates\n          }\n        }\n      }"})}).then((function(e){return e.json()})).then((function(e){return n(e.data.allPlanets.planets)})).catch((function(e){return console.log(e.message)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("form",{className:"search",children:[Object(l.jsx)(d.a,{label:"Search for a Planet",type:"search",onChange:function(e){return T(e.target.value)}}),Object(l.jsx)(d.a,{label:"Minimum",type:"number",value:w,onChange:function(e){return y(parseInt(e.target.value))},InputLabelProps:{shrink:!0}}),Object(l.jsx)(d.a,{label:"Maximum",type:"number",value:k,onChange:function(e){return P(parseInt(e.target.value))},InputLabelProps:{shrink:!0}})]}),Object(l.jsxs)("div",{className:"flying-objects",children:[Object(l.jsx)("img",{id:"flying-object-02",src:"https://fwbmatch.fra1.digitaloceanspaces.com/starwars/cloud-02.png",alt:"cloud 1"}),Object(l.jsx)("img",{id:"flying-object-01",src:"https://fwbmatch.fra1.digitaloceanspaces.com/starwars/cloud-01.png",alt:"cloud 2"})]}),Object(l.jsxs)("h1",{children:["There are ",r(q,o(w,k,a)).length," Planets with known populations with your Parameters"]}),Object(l.jsx)("div",{className:"cards",children:r(q,o(w,k,a)).map((function(e){return Object(l.jsx)(m,{name:e.name,population:e.population,gravity:e.gravity,diameter:e.diameter,climates:e.climates})})).splice(0,!0===j?a.length:2)}),Object(l.jsx)("div",{className:"button",children:r(q,o(w,k,a)).length>2?Object(l.jsxs)(p.a,{className:"button",variant:"contained",color:"secondary",onClick:function(e){return b(!j)},children:["Show ",!0===j?"Less":"".concat(r(q,o(w,k,a)).length-2," More Planets")]}):""}),Object(l.jsxs)("h1",{children:["There are ",r(q,a.filter((function(e){return null===e.population}))).length," Planets with unknown populations with your Parameters"]}),Object(l.jsx)("div",{className:"cards",children:r(q,a.filter((function(e){return null===e.population}))).map((function(e){return Object(l.jsx)(m,{name:e.name,population:e.population,gravity:e.gravity,diameter:e.diameter,climates:e.climates})})).splice(0,!0===g?a.length:2)}),Object(l.jsx)("div",{className:"button",children:r(q,a.filter((function(e){return null===e.population}))).length>2?Object(l.jsxs)(p.a,{className:"button",variant:"contained",color:"secondary",onClick:function(e){return O(!g)},children:["Show ",!0===g?"Less":"".concat(r(q,a.filter((function(e){return null===e.population}))).length-2," More Planets")]}):""})]})}var b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,85)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};a(49);c.a.render(Object(l.jsx)(j,{}),document.getElementById("root")),b()}},[[50,1,2]]]);
//# sourceMappingURL=main.73add1be.chunk.js.map