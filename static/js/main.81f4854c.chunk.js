(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),i=n.n(s),a=(n(9),n(2)),d=n(0);var j=function(e){var t=e.handleEquals;return Object(d.jsx)("div",{className:"equal",onClick:t,children:"="})};var l=function(e){var t=e.handleNumbers;return Object(d.jsxs)("div",{className:"leftPanel",onClick:function(e){e.target.classList.contains("numbers")||t(e.target.textContent)},children:[Object(d.jsxs)("div",{className:"numbers",children:[Object(d.jsx)("div",{children:"7"}),Object(d.jsx)("div",{children:"8"}),Object(d.jsx)("div",{children:"9"})]}),Object(d.jsxs)("div",{className:"numbers",children:[Object(d.jsx)("div",{children:"4"}),Object(d.jsx)("div",{children:"5"}),Object(d.jsx)("div",{children:"6"})]}),Object(d.jsxs)("div",{className:"numbers",children:[Object(d.jsx)("div",{children:"1"}),Object(d.jsx)("div",{children:"2"}),Object(d.jsx)("div",{children:"3"})]}),Object(d.jsxs)("div",{className:"numbers",children:[Object(d.jsx)("div",{children:"0"}),Object(d.jsx)("div",{children:"."}),Object(d.jsx)("div",{children:"AC"})]})]})};var u=function(e){var t=e.handleOperator;return Object(d.jsxs)("div",{className:"operators",onClick:function(e){e.target.classList.contains("operators")||t(e.target.textContent)},children:[Object(d.jsx)("div",{children:"+"}),Object(d.jsx)("div",{children:"-"}),Object(d.jsx)("div",{children:"*"}),Object(d.jsx)("div",{children:"/"})]})};var b=function(e){var t=e.handleEquals,n=e.handleOperator,c=e.handleNumbers;return Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)(u,{handleOperator:n}),Object(d.jsx)(l,{handleNumbers:c}),Object(d.jsx)(j,{handleEquals:t})]})};var o=function(e){var t=e.input;return Object(d.jsx)("div",{className:"input",children:t})};var h=function(e){var t=e.text;return Object(d.jsx)("div",{className:"error",children:t})};var v=function(){var e=["-","*","+","/","."],t=Object(c.useState)("0"),n=Object(a.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(!1),j=Object(a.a)(i,2),l=j[0],u=j[1],v=Object(c.useState)(""),O=Object(a.a)(v,2),x=O[0],f=O[1],m=function(e){r.length>14?f("\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u044b\u0439 \u0432\u0432\u043e\u0434"):"0"!==r&&!l||"."===e?s((function(t){return t+e})):(s(e),u(!1))},g=function(){return e.includes(r[r.length-1])};return Object(d.jsxs)(d.Fragment,{children:[x&&Object(d.jsx)(h,{text:x}),Object(d.jsxs)("div",{className:"calculator",children:[Object(d.jsx)(o,{input:r}),Object(d.jsx)(b,{handleEquals:function(){f("");var e=String(Function("'use strict'; return (".concat(r,")"))());e.length>14&&(e=e.slice(0,15)),s(e),u(!0)},handleOperator:function(e){if(f(""),"0"!==r||"-"===e)return l?(s((function(t){return t+e})),void u(!1)):void(g()?f("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0432\u0432\u043e\u0434"):m(e));f("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0432\u0432\u043e\u0434")},handleNumbers:function(t){if(f(""),"AC"===t)return s("0"),void u(!1);"."!==t||!l&&"."!==function(){for(var t=r.length-1;t>=0;t--)if(e.includes(r[t]))return r[t]}()&&!g()?m(t):f("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0432\u0432\u043e\u0434")}})]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),O()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.81f4854c.chunk.js.map