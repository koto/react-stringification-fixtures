webpackJsonp([51],{158:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=window.React,u=function(e){return e},l=function(e){function t(){var e,n,a,c;r(this,t);for(var i=arguments.length,u=Array(i),l=0;l<i;l++)u[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.state={updated:!1},a.onClick=function(){a.setState(function(e){return{updated:!e.updated}})},c=n,o(a,c)}return a(t,e),c(t,[{key:"render",value:function(){var e=this.state.updated,t=e?"firstName":"secondName";return i.createElement("div",null,i.createElement("label",null,i.createElement("input",{type:"radio",name:t,onChange:u,checked:!0===e}),"First Radio"),i.createElement("label",null,i.createElement("input",{type:"radio",name:t,onChange:u,checked:!1===e}),"Second Radio"),i.createElement("div",null,i.createElement("button",{type:"button",onClick:this.onClick},"Toggle")))}}]),t}(i.Component);t.default=l}});
//# sourceMappingURL=51.84d4001d.chunk.js.map