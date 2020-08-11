webpackJsonp([29],{100:function(e,t,n){e.exports=n(101)()},101:function(e,t,n){"use strict";var r=n(102),o=n(103),a=n(104);e.exports=function(){function e(e,t,n,r,c,i){i!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},102:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},103:function(e,t,n){"use strict";function r(e,t,n,r,a,c,i,l){if(o(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,a,c,i,l],f=0;u=new Error(t.replace(/%s/g,function(){return s[f++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}var o=function(e){};e.exports=r},104:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},106:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(107),i=n.n(c),l=n(55),u=n.n(l),s=n(100),f=n.n(s),p=n(108),h=n(111),d=(n.n(h),n(109)),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=window.React,v={children:f.a.node.isRequired,title:f.a.node.isRequired,resolvedIn:d.a,introducedIn:d.a,resolvedBy:f.a.string},b=function(e){function t(e,n){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleChange=function(e){a.setState({complete:e.target.checked})},a.state={complete:!1},a}return a(t,e),m(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.description,r=e.introducedIn,o=e.resolvedIn,a=e.resolvedBy,c=e.affectedBrowsers,l=e.relatedIssues,s=e.children,f=this.state.complete,d=Object(h.parse)(window.location.search),m=d.version,v=!m||!o||u.a.gte(m,o);return f=!v||f,y.createElement("section",{className:i()("test-case",f&&"test-case--complete")},y.createElement("h2",{className:"test-case__title type-subheading"},y.createElement("label",null,y.createElement("input",{className:"test-case__title__check",type:"checkbox",checked:f,onChange:this.handleChange})," ",t)),y.createElement("dl",{className:"test-case__details"},r&&y.createElement("dt",null,"First broken in: "),r&&y.createElement("dd",null,y.createElement("a",{href:"https://github.com/facebook/react/tag/v"+r},y.createElement("code",null,r))),o&&y.createElement("dt",null,"First supported in: "),o&&y.createElement("dd",null,y.createElement("a",{href:"https://github.com/facebook/react/tag/v"+o},y.createElement("code",null,o))),a&&y.createElement("dt",null,"Fixed by: "),a&&y.createElement("dd",null,y.createElement("a",{href:"https://github.com/facebook/react/pull/"+a.slice(1)},y.createElement("code",null,a))),c&&y.createElement("dt",null,"Affected browsers: "),c&&y.createElement("dd",null,c),l&&y.createElement("dt",null,"Related Issues: "),l&&y.createElement("dd",null,y.createElement(p.a,{issues:l}))),y.createElement("p",{className:"test-case__desc"},n),y.createElement("div",{className:"test-case__body"},!v&&y.createElement("p",{className:"test-case__invalid-version"},y.createElement("strong",null,"Note:")," This test case was fixed in a later version of React. This test is not expected to pass for the selected version, and that's ok!"),s))}}]),t}(y.Component);b.propTypes=v,b.Steps=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"render",value:function(){var e=this.props.children;return y.createElement("div",null,y.createElement("h3",null,"Steps to reproduce:"),y.createElement("ol",null,e))}}]),t}(y.Component),b.ExpectedResult=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"render",value:function(){var e=this.props.children;return y.createElement("div",null,y.createElement("h3",null,"Expected Result:"),y.createElement("p",null,e))}}]),t}(y.Component),t.a=b},107:function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var c in r)a.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?e.exports=n:(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},108:function(e,t,n){"use strict";function r(e){return e.split(/\s*,\s*/)}function o(e){var t=e.issues;if(!t)return null;"string"===typeof t&&(t=r(t));var n=t.reduce(function(e,n,r){return e.concat(r>0&&r<t.length?", ":null,a.createElement("a",{href:"https://github.com/facebook/react/issues/"+n,key:n},n))},[]);return a.createElement("span",null,n)}t.a=o;var a=window.React},109:function(e,t,n){"use strict";function r(e,t,n){var r=e[t],o=a.a.string.apply(a.a,arguments);return o||null==r||i.a.valid(r)||(o=new Error("`"+t+'` should be a valid "semantic version" matching an existing React version')),o||null}t.a=r;var o=n(100),a=n.n(o),c=n(55),i=n.n(c)},124:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=window.React,l=window.ReactDOM,u=function(e){function t(){var e,n,a,c;r(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.iframeRef=null,a.handleRef=function(e){e!==a.iframeRef&&(a.iframeRef=e,e&&(e.contentDocument&&a.props.head&&(e.contentDocument.head.innerHTML=a.props.head),setTimeout(function(){a.forceUpdate()})))},c=n,o(a,c)}return a(t,e),c(t,[{key:"render",value:function(){var e=this.iframeRef,t=null;return e&&e.contentDocument&&(t=l.createPortal(this.props.children,e.contentDocument.body)),i.createElement("div",null,i.createElement("iframe",{title:"Iframe portal",style:{border:"none",height:this.props.height},ref:this.handleRef}),t)}}]),t}(i.Component),s=function(e){function t(){var e,n,a,c;r(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.warned=!1,c=n,o(a,c)}return a(t,e),c(t,[{key:"render",value:function(){return this.warned||(console.error("IFrame has not yet been implemented for React v"+i.version),this.warned=!0),i.createElement("div",null,this.props.children)}}]),t}(i.Component);t.a=l.createPortal?u:s},176:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(106),i=n(124),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=window.React,s=function(e){function t(){var e,n,a,c;r(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.state={count:0,value:"Select Me!"},a._onSelect=function(e){a.setState(function(e){return{count:e.count+1}})},a._onChange=function(e){a.setState({value:e.target.value})},c=n,o(a,c)}return a(t,e),l(t,[{key:"render",value:function(){var e=this.state,t=e.count,n=e.value;return u.createElement(i.a,{height:60},"Selection Event Count: ",t,u.createElement("input",{type:"text",onSelect:this._onSelect,value:n,onChange:this._onChange}))}}]),t}(u.Component),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return u.createElement(c.a,{title:"onSelect events within iframes",description:"onSelect events should fire for elements rendered inside iframes"},u.createElement(c.a.Steps,null,u.createElement("li",null,"Highlight some of the text in the input below"),u.createElement("li",null,"Move the cursor around using the arrow keys")),u.createElement(c.a.ExpectedResult,null,"The displayed count should increase as you highlight or move the cursor"),u.createElement(s,null))}}]),t}(u.Component);t.default=f}});
//# sourceMappingURL=29.b2a6e0a7.chunk.js.map