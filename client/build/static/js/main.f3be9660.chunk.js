(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),s=a(15),i=a.n(s),l=(a(23),a(6)),o=a.n(l),u=a(16),d=a(3),b=a(4);a(25);var j=function(e){var t=e.query,a=e.onInputChange,r=e.onSortChange,c=e.currentKey,s=e.currentOrder;return Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary justify-content-between mb-2",children:[Object(n.jsx)("a",{className:"navbar-brand bg-primary navTitle",href:"/",children:"React Employee Directory"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("span",{className:"navbar-text",children:"Sort by: "}),[{key:"firstName",label:"First Name"},{key:"lastName",label:"Last Name"},{key:"phone",label:"Phone Number"}].map((function(e){var t=e.key,a=e.label;return Object(n.jsx)("li",{className:"nav-item m-1",children:Object(n.jsxs)("button",{style:c===t?{color:"orangered"}:{},onClick:function(){return r(t,"asc"===s?"desc":"asc")},className:"btn",children:[a," ",c!==t?"":"asc"===s?Object(n.jsx)("i",{className:"fas fa-chevron-circle-down"}):Object(n.jsx)("i",{className:"fas fa-chevron-circle-up"})]})},t)}))]}),Object(n.jsx)("form",{className:"form-inline my-2 my-lg-0",children:Object(n.jsx)("input",{onChange:a,className:"form-control mr-sm-2",type:"search",value:t,placeholder:"Search","aria-label":"Search"})})]})]})};a(26);function m(e){var t=e.id,a=e.children;return Object(n.jsx)("div",{className:"card employeeCard my-2","data-id":t,children:a})}function p(e){var t=e.fluid,a=e.children;return Object(n.jsx)("div",{className:"container".concat(t?"-fluid":""),children:a})}a(27);var f=function(e){return Object(n.jsx)(p,{fluid:!0,children:e.employees.length?Object(n.jsx)("div",{className:"card-deck d-flex justify-content-center",children:e.employees.map((function(e){return Object(n.jsxs)(m,{id:e.login.uuid,children:[Object(n.jsx)("img",{className:"card-img-top",src:e.picture.large,alt:e.name.first}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsxs)("h5",{className:"card-title",children:[e.name.first," ",e.name.last]}),Object(n.jsxs)("p",{className:"card-text",children:["Email: ",e.email]}),Object(n.jsxs)("p",{className:"card-text",children:["Phone: ",e.phone]})]})]},e.login.uuid.toString())}))}):Object(n.jsx)("div",{className:"absoluteCenter",children:Object(n.jsx)("div",{children:Object(n.jsx)("i",{className:"fas fa-spinner fa-pulse"})})})})},h=a(17),O=a.n(h),v={getUsers:function(){return O.a.get("https://randomuser.me/api/?results=100&nat=us&inc=name,email,phone,login,picture")}},y={compareValues:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(a,n){if(!a.hasOwnProperty(e)||!n.hasOwnProperty(e))return 0;var r="string"===typeof a[e]?a[e].toUpperCase():a[e],c="string"===typeof n[e]?n[e].toUpperCase():n[e],s=0;return r>c?s=1:r<c&&(s=-1),"desc"===t?-1*s:s}}};var g=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)([]),i=Object(b.a)(s,2),l=i[0],m=i[1],p=Object(r.useState)({key:"firstName",order:"asc",query:""}),h=Object(b.a)(p,2),O=h[0],g=h[1];function x(){return(x=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.getUsers();case 3:t=e.sent,c(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){x.apply(this,arguments)}()}),[]),Object(r.useEffect)((function(){var e=a.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{firstName:e.name.first,lastName:e.name.last,fullName:"".concat(e.name.first," ").concat(e.name.last)})})).filter((function(e){return e.fullName.toLowerCase().includes(O.query.toLowerCase())}));e.sort(y.compareValues(O.key,O.order)),m(e)}),[a,O]),Object(n.jsxs)("div",{children:[Object(n.jsx)(j,{query:O.query,onInputChange:function(e){var t=e.target.value;g((function(e){return Object(d.a)(Object(d.a)({},e),{},{query:t})}))},onSortChange:function(e,t){g((function(a){return Object(d.a)(Object(d.a)({},a),{},{key:e,order:t})}))},currentKey:O.key,currentOrder:O.order}),Object(n.jsx)(f,{employees:l})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),x()}},[[46,1,2]]]);
//# sourceMappingURL=main.f3be9660.chunk.js.map