webpackJsonp([25,50],{100:function(e,t,n){e.exports=n(101)()},101:function(e,t,n){"use strict";var r=n(102),o=n(103),a=n(104);e.exports=function(){function e(e,t,n,r,i,c){c!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},102:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},103:function(e,t,n){"use strict";function r(e,t,n,r,a,i,c,l){if(o(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,i,c,l],p=0;s=new Error(t.replace(/%s/g,function(){return u[p++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var o=function(e){};e.exports=r},104:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},106:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(107),c=n.n(i),l=n(55),s=n.n(l),u=n(100),p=n.n(u),f=n(108),h=n(111),d=(n.n(h),n(109)),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=window.React,v={children:p.a.node.isRequired,title:p.a.node.isRequired,resolvedIn:d.a,introducedIn:d.a,resolvedBy:p.a.string},b=function(e){function t(e,n){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleChange=function(e){a.setState({complete:e.target.checked})},a.state={complete:!1},a}return a(t,e),m(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.description,r=e.introducedIn,o=e.resolvedIn,a=e.resolvedBy,i=e.affectedBrowsers,l=e.relatedIssues,u=e.children,p=this.state.complete,d=Object(h.parse)(window.location.search),m=d.version,v=!m||!o||s.a.gte(m,o);return p=!v||p,y.createElement("section",{className:c()("test-case",p&&"test-case--complete")},y.createElement("h2",{className:"test-case__title type-subheading"},y.createElement("label",null,y.createElement("input",{className:"test-case__title__check",type:"checkbox",checked:p,onChange:this.handleChange})," ",t)),y.createElement("dl",{className:"test-case__details"},r&&y.createElement("dt",null,"First broken in: "),r&&y.createElement("dd",null,y.createElement("a",{href:"https://github.com/facebook/react/tag/v"+r},y.createElement("code",null,r))),o&&y.createElement("dt",null,"First supported in: "),o&&y.createElement("dd",null,y.createElement("a",{href:"https://github.com/facebook/react/tag/v"+o},y.createElement("code",null,o))),a&&y.createElement("dt",null,"Fixed by: "),a&&y.createElement("dd",null,y.createElement("a",{href:"https://github.com/facebook/react/pull/"+a.slice(1)},y.createElement("code",null,a))),i&&y.createElement("dt",null,"Affected browsers: "),i&&y.createElement("dd",null,i),l&&y.createElement("dt",null,"Related Issues: "),l&&y.createElement("dd",null,y.createElement(f.a,{issues:l}))),y.createElement("p",{className:"test-case__desc"},n),y.createElement("div",{className:"test-case__body"},!v&&y.createElement("p",{className:"test-case__invalid-version"},y.createElement("strong",null,"Note:")," This test case was fixed in a later version of React. This test is not expected to pass for the selected version, and that's ok!"),u))}}]),t}(y.Component);b.propTypes=v,b.Steps=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"render",value:function(){var e=this.props.children;return y.createElement("div",null,y.createElement("h3",null,"Steps to reproduce:"),y.createElement("ol",null,e))}}]),t}(y.Component),b.ExpectedResult=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"render",value:function(){var e=this.props.children;return y.createElement("div",null,y.createElement("h3",null,"Expected Result:"),y.createElement("p",null,e))}}]),t}(y.Component),t.a=b},107:function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?e.exports=n:(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},108:function(e,t,n){"use strict";function r(e){return e.split(/\s*,\s*/)}function o(e){var t=e.issues;if(!t)return null;"string"===typeof t&&(t=r(t));var n=t.reduce(function(e,n,r){return e.concat(r>0&&r<t.length?", ":null,a.createElement("a",{href:"https://github.com/facebook/react/issues/"+n,key:n},n))},[]);return a.createElement("span",null,n)}t.a=o;var a=window.React},109:function(e,t,n){"use strict";function r(e,t,n){var r=e[t],o=a.a.string.apply(a.a,arguments);return o||null==r||c.a.valid(r)||(o=new Error("`"+t+'` should be a valid "semantic version" matching an existing React version')),o||null}t.a=r;var o=n(100),a=n.n(o),i=n(55),c=n.n(i)},122:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=window.React,l=function(e){function t(){var e,n,a,i;r(this,t);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.state={hasCapture:!1,circleLeft:80,circleTop:80},a.isDragging=!1,a.previousLeft=0,a.previousTop=0,a.onDown=function(e){a.isDragging=!0,e.target.setPointerCapture(e.pointerId),a.extractPositionDelta(e)},a.onMove=function(e){if(a.isDragging){var t=a.extractPositionDelta(e),n=t.left,r=t.top;a.setState(function(e){var t=e.circleLeft,o=e.circleTop;return{circleLeft:t+n,circleTop:o+r}})}},a.onUp=function(e){return a.isDragging=!1},a.onGotCapture=function(e){return a.setState({hasCapture:!0})},a.onLostCapture=function(e){return a.setState({hasCapture:!1})},a.extractPositionDelta=function(e){var t=e.pageX,n=e.pageY,r={left:t-a.previousLeft,top:n-a.previousTop};return a.previousLeft=t,a.previousTop=n,r},i=n,o(a,i)}return a(t,e),i(t,[{key:"render",value:function(){var e=this.state,t=e.hasCapture,n=e.circleLeft,r=e.circleTop,o={border:"1px solid #d9d9d9",margin:"10px 0 20px",minHeight:400,width:"100%",position:"relative"},a={width:80,height:80,borderRadius:40,position:"absolute",left:n,top:r,backgroundColor:t?"blue":"green",touchAction:"none"};return c.createElement("div",{style:o},c.createElement("div",{style:a,onPointerDown:this.onDown,onPointerMove:this.onMove,onPointerUp:this.onUp,onPointerCancel:this.onUp,onGotPointerCapture:this.onGotCapture,onLostPointerCapture:this.onLostCapture}))}}]),t}(c.Component);t.default=l},171:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(106),c=n(122),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=window.React,u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return s.createElement(i.a,{title:"Drag",description:""},s.createElement(i.a.Steps,null,s.createElement("li",null,"Drag the circle below with any pointer tool")),s.createElement(i.a.ExpectedResult,null,"While dragging, the circle must have turn blue to indicate that a pointer capture was received."),s.createElement(c.default,null))}}]),t}(s.Component);t.default=u}});
//# sourceMappingURL=25.ede20b79.chunk.js.map