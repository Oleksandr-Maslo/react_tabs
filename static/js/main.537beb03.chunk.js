(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=c(5),s=c(1),b=c(4),d=c.n(b),o=c(0),l=function(t){var e=t.tabs,c=t.selectedTabId,n=t.onTabSelected,a=e.find((function(t){return t.id===c}))||e[0];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(a.title)}),Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:e.map((function(t){return Object(o.jsx)("li",{className:d()({"is-active":t.id===a.id}),"data-cy":"Tab",children:Object(o.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){a!==t&&n(t)},children:t.title})},t.id)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:a.content})]})]})},r=(c(11),c(12),c(13),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),j=function(){var t=Object(s.useState)("tab-1"),e=Object(i.a)(t,2),c=e[0],n=e[1];return Object(o.jsx)("div",{className:"section",children:Object(o.jsx)(l,{tabs:r,selectedTabId:c,onTabSelected:function(t){n(t.id)}})})};a.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.537beb03.chunk.js.map