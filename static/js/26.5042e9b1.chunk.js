webpackJsonp([26,54],{100:function(e,t,n){e.exports=n(101)()},101:function(e,t,n){"use strict";var r=n(102),o=n(103),a=n(104);e.exports=function(){function e(e,t,n,r,s,l){l!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},102:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},103:function(e,t,n){"use strict";function r(e,t,n,r,a,s,l,i){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,s,l,i],p=0;c=new Error(t.replace(/%s/g,function(){return u[p++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(e){};e.exports=r},104:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},106:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(107),l=n.n(s),i=n(55),c=n.n(i),u=n(100),p=n.n(u),f=n(108),d=n(111),h=(n.n(d),n(109)),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=window.React,y={children:p.a.node.isRequired,title:p.a.node.isRequired,resolvedIn:h.a,introducedIn:h.a,resolvedBy:p.a.string},b=function(e){function t(e,n){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleChange=function(e){a.setState({complete:e.target.checked})},a.state={complete:!1},a}return a(t,e),m(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.description,r=e.introducedIn,o=e.resolvedIn,a=e.resolvedBy,s=e.affectedBrowsers,i=e.relatedIssues,u=e.children,p=this.state.complete,h=Object(d.parse)(window.location.search),m=h.version,y=!m||!o||c.a.gte(m,o);return p=!y||p,v.createElement("section",{className:l()("test-case",p&&"test-case--complete")},v.createElement("h2",{className:"test-case__title type-subheading"},v.createElement("label",null,v.createElement("input",{className:"test-case__title__check",type:"checkbox",checked:p,onChange:this.handleChange})," ",t)),v.createElement("dl",{className:"test-case__details"},r&&v.createElement("dt",null,"First broken in: "),r&&v.createElement("dd",null,v.createElement("a",{href:"https://github.com/facebook/react/tag/v"+r},v.createElement("code",null,r))),o&&v.createElement("dt",null,"First supported in: "),o&&v.createElement("dd",null,v.createElement("a",{href:"https://github.com/facebook/react/tag/v"+o},v.createElement("code",null,o))),a&&v.createElement("dt",null,"Fixed by: "),a&&v.createElement("dd",null,v.createElement("a",{href:"https://github.com/facebook/react/pull/"+a.slice(1)},v.createElement("code",null,a))),s&&v.createElement("dt",null,"Affected browsers: "),s&&v.createElement("dd",null,s),i&&v.createElement("dt",null,"Related Issues: "),i&&v.createElement("dd",null,v.createElement(f.a,{issues:i}))),v.createElement("p",{className:"test-case__desc"},n),v.createElement("div",{className:"test-case__body"},!y&&v.createElement("p",{className:"test-case__invalid-version"},v.createElement("strong",null,"Note:")," This test case was fixed in a later version of React. This test is not expected to pass for the selected version, and that's ok!"),u))}}]),t}(v.Component);b.propTypes=y,b.Steps=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"render",value:function(){var e=this.props.children;return v.createElement("div",null,v.createElement("h3",null,"Steps to reproduce:"),v.createElement("ol",null,e))}}]),t}(v.Component),b.ExpectedResult=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"render",value:function(){var e=this.props.children;return v.createElement("div",null,v.createElement("h3",null,"Expected Result:"),v.createElement("p",null,e))}}]),t}(v.Component),t.a=b},107:function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?e.exports=n:(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},108:function(e,t,n){"use strict";function r(e){return e.split(/\s*,\s*/)}function o(e){var t=e.issues;if(!t)return null;"string"===typeof t&&(t=r(t));var n=t.reduce(function(e,n,r){return e.concat(r>0&&r<t.length?", ":null,a.createElement("a",{href:"https://github.com/facebook/react/issues/"+n,key:n},n))},[]);return a.createElement("span",null,n)}t.a=o;var a=window.React},109:function(e,t,n){"use strict";function r(e,t,n){var r=e[t],o=a.a.string.apply(a.a,arguments);return o||null==r||l.a.valid(r)||(o=new Error("`"+t+'` should be a valid "semantic version" matching an existing React version')),o||null}t.a=r;var o=n(100),a=n.n(o),s=n(55),l=n.n(s)},115:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=window.React,i=function(e){function t(){var e,n,a,s;r(this,t);for(var l=arguments.length,i=Array(l),c=0;c<l;c++)i[c]=arguments[c];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.state={x:0,y:0},a.onMove=function(e){a.setState({x:e.clientX,y:e.clientY}),a.props.onMouseMove(e)},s=n,o(a,s)}return a(t,e),s(t,[{key:"render",value:function(){var e=this.state,t=e.x,n=e.y,r={padding:"10px 20px",border:"1px solid #d9d9d9",margin:"10px 0 20px"};return l.createElement("div",{onMouseMove:this.onMove,style:r},l.createElement("p",null,"Trace your mouse over this box."),l.createElement("p",null,"Last movement: ",t,",",n))}}]),t}(l.Component);i.defaultProps={onMouseMove:function(e){return e}},t.default=i},148:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(106),l=n(115),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=window.React,u=function(e){function t(){var e,n,a,s;r(this,t);for(var l=arguments.length,i=Array(l),c=0;c<l;c++)i[c]=arguments[c];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.state={persisted:0,pooled:[]},a.addPersisted=function(e){var t=a.state,n=t.persisted,r=t.pooled;e.persist(),"mousemove"===e.type&&a.setState({persisted:n+1,pooled:r.filter(function(t){return t!==e})})},a.addPooled=function(e){var t=a.state.pooled;"mousemove"===e.type&&-1===t.indexOf(e)&&a.setState({pooled:t.concat(e)})},s=n,o(a,s)}return a(t,e),i(t,[{key:"render",value:function(){var e=this.state,t=e.pooled,n=e.persisted;return c.createElement(s.a,{title:"Persistence",description:""},c.createElement(s.a.Steps,null,c.createElement("li",null,"Mouse over the pooled event box"),c.createElement("li",null,"Mouse over the persisted event box")),c.createElement(s.a.ExpectedResult,null,"The pool size should not increase above 1, but reduce to 0 when hovering over the persisted region."),c.createElement("h2",null,"Add Pooled Event:"),c.createElement(l.default,{onMouseMove:this.addPooled}),c.createElement("h2",null,"Add Persisted Event:"),c.createElement(l.default,{onMouseMove:this.addPersisted}),c.createElement("p",null,"Pool size: ",t.length),c.createElement("p",null,"Persisted size: ",n))}}]),t}(c.Component);t.default=u}});
//# sourceMappingURL=26.5042e9b1.chunk.js.map