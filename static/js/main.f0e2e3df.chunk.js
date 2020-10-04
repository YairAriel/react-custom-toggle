(this["webpackJsonpreact-custom-toggle-example"]=this["webpackJsonpreact-custom-toggle-example"]||[]).push([[0],{11:function(n,e,t){n.exports=t(19)},12:function(n,e,t){},19:function(n,e,t){"use strict";t.r(e);t(12);var r=t(0),a=t.n(r),o=t(6),l=t.n(o),i=t(7),c=t(1);function x(n,e){return e||(e=n.slice(0)),n.raw=e,n}function f(){var n=x(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  cursor: ",";\n  background: ",";\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2),\n    inset 0 3px 8px 0 rgba(0, 0, 0, 0.3);\n  border-radius: 36px;\n  transition: 300ms;\n  transition-delay: 200ms;\n  ","\n  &::before {\n    content: '';\n    position: absolute;\n    background: conic-gradient(#f7fafc, #edf2f7, #e2e8f0, #cbd5e0, #a0aec0);\n    transition: 300ms;\n    border-radius: 50%;\n    ","\n  }\n"]);return f=function(){return n},n}function u(){var n=x(["\n  display: none;\n  &:checked + span {\n    background: ",";\n    &::before {\n      ","\n    }\n  }\n"]);return u=function(){return n},n}function s(){var n=x(["\n  position: relative;\n  display: block;\n  margin: 0 0.5rem;\n  ","\n"]);return s=function(){return n},n}function p(){var n=x(["\n  color: ",";\n"]);return p=function(){return n},n}function d(){var n=x(["\n  color: ",";\n"]);return d=function(){return n},n}function m(){var n=x(["\n  font-family: inherit;\n  ","\n"]);return m=function(){return n},n}function g(){var n=x(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return g=function(){return n},n}var h=c.a.div(g()),O=c.a.span(m(),(function(n){return n.extraLarge?"\n        font-size: 1.4em;\n      ":n.large?"\n        font-size: 1.2em;\n      ":n.small?"\n        font-size: 0.8em;\n      ":n.extraSmall?"\n        font-size: 0.6em;\n      ":"\n        font-size: 1em;\n      "})),b=Object(c.a)(O)(d(),(function(n){return n.textColorOff?n.textColorOff:"inherit"})),E=Object(c.a)(O)(p(),(function(n){return n.textColorOn?n.textColorOn:"inherit"})),w=c.a.label(s(),(function(n){return n.extraLarge?"\n        width: 100px;\n        height: 50px;\n      ":n.large?"\n        width: 80px;\n        height: 40px;\n      ":n.small?"\n        width: 40px;\n        height: 20px;\n      ":n.extraSmall?"\n        width: 20px;\n        height: 10px;\n      ":"\n        width: 60px;\n        height: 30px;\n      "})),v=c.a.input(u(),(function(n){return n.colorOn?n.colorOn:"#68d391"}),(function(n){return n.extraLarge?"\n            transform: translateX(48px) rotateZ(360deg);\n        ":n.large?"\n            transform: translateX(38px) rotateZ(360deg);\n        ":n.small?"\n            transform: translateX(18px) rotateZ(360deg);\n        ":n.extraSmall?"\n            transform: translateX(8px) rotateZ(360deg);\n        ":"\n            transform: translateX(28px) rotateZ(360deg);\n        "})),C=c.a.span(f(),(function(n){return n.disabled?"not-allowed":"pointer"}),(function(n){return n.colorOff?n.colorOff:n.disabled?"#d2d2d2":"#fc8181"}),(function(n){return n.extraLarge?"\n        padding-inline-start: 6px;\n      ":n.large?"\n        padding-inline-start: 5px;\n      ":n.small?"\n        padding-inline-start: 3px;\n      ":n.extraSmall?"\n        padding-inline-start: 2px;\n      ":"\n        padding-inline-start: 4px;\n      "}),(function(n){return n.extraLarge?"\n          width: 40px;\n          height: 40px;\n          top: 5px;\n      ":n.large?"\n          width: 32px;\n          height: 32px;\n          top: 4px;\n      ":n.small?"\n          width: 16px;\n          height: 16px;\n          top: 2px;\n      ":n.extraSmall?"\n          width: 8px;\n          height: 8px;\n          top: 1px;\n      ":"\n          width: 24px;\n          height: 24px;\n          top: 3px;\n      "})),L=function(n){var e=n.offText,t=n.onText,r=n.extraLarge,o=n.large,l=n.small,i=n.extraSmall,c=n.colorOn,x=n.colorOff,f=n.textColorOff,u=n.textColorOn,s=n.disabled;return a.a.createElement(h,null,e&&a.a.createElement(b,{extraLarge:r,large:o,small:l,extraSmall:i,textColorOff:f},e),a.a.createElement(w,{extraLarge:r,large:o,small:l,extraSmall:i},a.a.createElement(v,{type:"checkbox",disabled:s,extraLarge:r,large:o,small:l,extraSmall:i,colorOn:c}),a.a.createElement(C,{extraLarge:r,large:o,small:l,extraSmall:i,colorOff:x,disabled:s})),t&&a.a.createElement(E,{extraLarge:r,large:o,small:l,extraSmall:i,textColorOn:u},t))};function S(){const n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 200px;\n"]);return S=function(){return n},n}const T=c.a.div(S());var y=()=>a.a.createElement(T,null,a.a.createElement(L,{offText:"OFF",onText:"ON",extraLarge:!0,colorOff:"#ED8936",colorOn:"#63B3ED",textColorOff:"#f12c6b",textColorOn:"#07e207"}),a.a.createElement(L,{offText:"OFF",onText:"ON",large:!0,colorOff:"orange",colorOn:"blue",textColorOff:"red",textColorOn:"lightgreen"}),a.a.createElement(L,{offText:"OFF",onText:"ON"}),a.a.createElement(L,{disabled:!0}),a.a.createElement(L,{offText:"OFF",onText:"ON",small:!0}),a.a.createElement(L,{offText:"OFF",onText:"ON",extraSmall:!0}));l.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.f0e2e3df.chunk.js.map