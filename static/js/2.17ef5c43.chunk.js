webpackJsonp([2,38,39,40,41,51],{100:function(e,t,n){e.exports=n(101)()},101:function(e,t,n){"use strict";var r=n(102),o=n(103),a=n(104);e.exports=function(){function e(e,t,n,r,l,c){c!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},102:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},103:function(e,t,n){"use strict";function r(e,t,n,r,a,l,c,u){if(o(t),!e){var i;if(void 0===t)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,a,l,c,u],f=0;i=new Error(t.replace(/%s/g,function(){return s[f++]})),i.name="Invariant Violation"}throw i.framesToPop=1,i}}var o=function(e){};e.exports=r},104:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},105:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(100),c=n.n(l),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=window.React,s={children:c.a.node.isRequired},f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props.children;return i.createElement("div",{className:"test-fixture"},e)}}]),t}(i.Component);f.propTypes=s,t.a=f},106:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(107),c=n.n(l),u=n(55),i=n.n(u),s=n(100),f=n.n(s),p=n(108),h=n(111),d=(n.n(h),n(109)),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=window.React,b={children:f.a.node.isRequired,title:f.a.node.isRequired,resolvedIn:d.a,introducedIn:d.a,resolvedBy:f.a.string},E=function(e){function t(e,n){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleChange=function(e){a.setState({complete:e.target.checked})},a.state={complete:!1},a}return a(t,e),y(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.description,r=e.introducedIn,o=e.resolvedIn,a=e.resolvedBy,l=e.affectedBrowsers,u=e.relatedIssues,s=e.children,f=this.state.complete,d=Object(h.parse)(window.location.search),y=d.version,b=!y||!o||i.a.gte(y,o);return f=!b||f,m.createElement("section",{className:c()("test-case",f&&"test-case--complete")},m.createElement("h2",{className:"test-case__title type-subheading"},m.createElement("label",null,m.createElement("input",{className:"test-case__title__check",type:"checkbox",checked:f,onChange:this.handleChange})," ",t)),m.createElement("dl",{className:"test-case__details"},r&&m.createElement("dt",null,"First broken in: "),r&&m.createElement("dd",null,m.createElement("a",{href:"https://github.com/facebook/react/tag/v"+r},m.createElement("code",null,r))),o&&m.createElement("dt",null,"First supported in: "),o&&m.createElement("dd",null,m.createElement("a",{href:"https://github.com/facebook/react/tag/v"+o},m.createElement("code",null,o))),a&&m.createElement("dt",null,"Fixed by: "),a&&m.createElement("dd",null,m.createElement("a",{href:"https://github.com/facebook/react/pull/"+a.slice(1)},m.createElement("code",null,a))),l&&m.createElement("dt",null,"Affected browsers: "),l&&m.createElement("dd",null,l),u&&m.createElement("dt",null,"Related Issues: "),u&&m.createElement("dd",null,m.createElement(p.a,{issues:u}))),m.createElement("p",{className:"test-case__desc"},n),m.createElement("div",{className:"test-case__body"},!b&&m.createElement("p",{className:"test-case__invalid-version"},m.createElement("strong",null,"Note:")," This test case was fixed in a later version of React. This test is not expected to pass for the selected version, and that's ok!"),s))}}]),t}(m.Component);E.propTypes=b,E.Steps=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),y(t,[{key:"render",value:function(){var e=this.props.children;return m.createElement("div",null,m.createElement("h3",null,"Steps to reproduce:"),m.createElement("ol",null,e))}}]),t}(m.Component),E.ExpectedResult=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),y(t,[{key:"render",value:function(){var e=this.props.children;return m.createElement("div",null,m.createElement("h3",null,"Expected Result:"),m.createElement("p",null,e))}}]),t}(m.Component),t.a=E},107:function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var l in r)a.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?e.exports=n:(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},108:function(e,t,n){"use strict";function r(e){return e.split(/\s*,\s*/)}function o(e){var t=e.issues;if(!t)return null;"string"===typeof t&&(t=r(t));var n=t.reduce(function(e,n,r){return e.concat(r>0&&r<t.length?", ":null,a.createElement("a",{href:"https://github.com/facebook/react/issues/"+n,key:n},n))},[]);return a.createElement("span",null,n)}t.a=o;var a=window.React},109:function(e,t,n){"use strict";function r(e,t,n){var r=e[t],o=a.a.string.apply(a.a,arguments);return o||null==r||c.a.valid(r)||(o=new Error("`"+t+'` should be a valid "semantic version" matching an existing React version')),o||null}t.a=r;var o=n(100),a=n.n(o),l=n(55),c=n.n(l)},110:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(100),c=n.n(l),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=window.React,s={title:c.a.node.isRequired,description:c.a.node},f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.description,r=e.children;return i.createElement("div",{className:"container"},i.createElement("h1",null,t),n&&i.createElement("p",null,n),r)}}]),t}(i.Component);f.propTypes=s,t.a=f},155:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(105),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=window.React,i=function(e){function t(e,n){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleChange=function(){a.setState(function(e){return{changeCount:e.changeCount+1}})},a.handleGeneratePlaceholder=function(){a.setState({placeholder:"A placeholder: "+100*Math.random()})},a.handleReset=function(){a.setState({changeCount:0})},a.state={placeholder:"A placeholder",changeCount:0},a}return a(t,e),c(t,[{key:"render",value:function(){var e=this.state,t=e.placeholder,n=e.changeCount,r=0===n?"green":"red";return u.createElement(l.a,null,u.createElement("input",{type:"text",placeholder:t,onChange:this.handleChange})," ",u.createElement("button",{onClick:this.handleGeneratePlaceholder},"Change placeholder"),u.createElement("p",{style:{color:r}},u.createElement("code",null,"onChange")," calls: ",u.createElement("strong",null,n)),u.createElement("button",{onClick:this.handleReset},"Reset count"))}}]),t}(u.Component);t.default=i},156:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(105),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=window.React,i=function(e){function t(e,n){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleChange=function(){a.setState(function(e){return{changeCount:e.changeCount+1}})},a.handleReset=function(){a.setState({changeCount:0})},a.state={changeCount:0},a}return a(t,e),c(t,[{key:"render",value:function(){var e=this.state.changeCount,t=0===e?"green":"red";return u.createElement(l.a,null,u.createElement("label",null,u.createElement("input",{defaultChecked:!0,type:"radio",onChange:this.handleChange}),"Test case radio input")," ",u.createElement("p",{style:{color:t}},u.createElement("code",null,"onChange")," calls: ",u.createElement("strong",null,e)),u.createElement("button",{onClick:this.handleReset},"Reset count"))}}]),t}(u.Component);t.default=i},157:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(105),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=window.React,i=function(e){function t(e,n){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleChange=function(){a.setState(function(e){return{changeCount:e.changeCount+1}})},a.handleReset=function(){a.setState({changeCount:0})},a.state={changeCount:0},a}return a(t,e),c(t,[{key:"render",value:function(){var e=this.state.changeCount,t=e>=3?"green":"red";return u.createElement(l.a,null,u.createElement("label",null,u.createElement("input",{defaultChecked:!0,name:"foo",type:"radio",onChange:this.handleChange}),"Radio 1"),u.createElement("label",null,u.createElement("input",{name:"foo",type:"radio",onChange:this.handleChange}),"Radio 2")," ",u.createElement("p",{style:{color:t}},u.createElement("code",null,"onChange")," calls: ",u.createElement("strong",null,e)),u.createElement("button",{onClick:this.handleReset},"Reset count"))}}]),t}(u.Component);t.default=i},158:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=window.React,u=function(e){return e},i=function(e){function t(){var e,n,a,l;r(this,t);for(var c=arguments.length,u=Array(c),i=0;i<c;i++)u[i]=arguments[i];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.state={updated:!1},a.onClick=function(){a.setState(function(e){return{updated:!e.updated}})},l=n,o(a,l)}return a(t,e),l(t,[{key:"render",value:function(){var e=this.state.updated,t=e?"firstName":"secondName";return c.createElement("div",null,c.createElement("label",null,c.createElement("input",{type:"radio",name:t,onChange:u,checked:!0===e}),"First Radio"),c.createElement("label",null,c.createElement("input",{type:"radio",name:t,onChange:u,checked:!1===e}),"Second Radio"),c.createElement("div",null,c.createElement("button",{type:"button",onClick:this.onClick},"Toggle")))}}]),t}(c.Component);t.default=i},159:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(105),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=window.React,i=function(e){function t(e,n){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleChange=function(){a.setState(function(e){return{changeCount:e.changeCount+1}})},a.handleKeydown=function(e){[37,38,39,40].indexOf(e.keyCode)<0||a.setState(function(e){return{keydownCount:e.keydownCount+1}})},a.handleReset=function(){a.setState({keydownCount:0,changeCount:0})},a.state={keydownCount:0,changeCount:0},a}return a(t,e),c(t,[{key:"componentDidMount",value:function(){this.input.addEventListener("keydown",this.handleKeydown,!1)}},{key:"componentWillUnmount",value:function(){this.input.removeEventListener("keydown",this.handleKeydown,!1)}},{key:"render",value:function(){var e=this,t=this.state,n=t.keydownCount,r=t.changeCount,o=n===r?"green":"red";return u.createElement(l.a,null,u.createElement("div",null,u.createElement("input",{type:"range",ref:function(t){return e.input=t},onChange:this.handleChange}),u.createElement("button",{onClick:function(){return e.input.focus()}},"Focus Knob"))," ",u.createElement("p",{style:{color:o}},u.createElement("code",null,"onKeyDown")," calls: ",u.createElement("strong",null,n)," vs ",u.createElement("code",null,"onChange")," calls: ",u.createElement("strong",null,r)),u.createElement("button",{onClick:this.handleReset},"Reset counts"))}}]),t}(u.Component);t.default=i},160:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(110),c=n(106),u=n(159),i=n(156),s=n(157),f=n(158),p=n(155),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=window.React,y=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),h(t,[{key:"render",value:function(){return d.createElement(l.a,{title:"Input change events",description:"Tests proper behavior of the onChange event for inputs"},d.createElement(c.a,{title:"Range keyboard changes",description:"\n            Range inputs should fire onChange events for keyboard events\n          "},d.createElement(c.a.Steps,null,d.createElement("li",null,"Focus range input"),d.createElement("li",null,"change value via the keyboard arrow keys")),d.createElement(c.a.ExpectedResult,null,"The ",d.createElement("code",null,"onKeyDown")," call count should be equal to the"," ",d.createElement("code",null,"onChange")," call count."),d.createElement(u.default,null)),d.createElement(c.a,{title:"Radio input clicks",description:"\n            Radio inputs should only fire change events when the checked\n            state changes.\n          ",resolvedIn:"16.0.0"},d.createElement(c.a.Steps,null,d.createElement("li",null,"Click on the Radio input (or label text)")),d.createElement(c.a.ExpectedResult,null,"The ",d.createElement("code",null,"onChange")," call count should remain at 0"),d.createElement(i.default,null)),d.createElement(c.a,{title:"Uncontrolled radio groups",description:"\n            Radio inputs should fire change events when the value moved to\n            another named input\n          ",introducedIn:"15.6.0"},d.createElement(c.a.Steps,null,d.createElement("li",null,'Click on the "Radio 2"'),d.createElement("li",null,'Click back to "Radio 1"'),d.createElement("li",null,'Click back to "Radio 2"')),d.createElement(c.a.ExpectedResult,null,"The ",d.createElement("code",null,"onChange")," call count increment on each value change (at least 3+)"),d.createElement(s.default,null)),d.createElement(c.a,{title:"Inputs with placeholders",description:"\n            Text inputs with placeholders should not trigger changes\n            when the placeholder is altered\n          ",resolvedIn:"15.0.0",resolvedBy:"#5004",affectedBrowsers:"IE9+"},d.createElement(c.a.Steps,null,d.createElement("li",null,"Click on the Text input"),d.createElement("li",null,'Click on the "Change placeholder" button')),d.createElement(c.a.ExpectedResult,null,"The ",d.createElement("code",null,"onChange")," call count should remain at 0"),d.createElement(p.default,null)),d.createElement(c.a,{title:"Radio button groups with name changes",description:"\n            A radio button group should have correct checked value when\n            the names changes\n          ",resolvedBy:"#11227",affectedBrowsers:"IE9+"},d.createElement(c.a.Steps,null,d.createElement("li",null,"Click the toggle button")),d.createElement(c.a.ExpectedResult,null,"The checked radio button should switch between the first and second radio button"),d.createElement(f.default,null)))}}]),t}(d.Component);t.default=y}});
//# sourceMappingURL=2.17ef5c43.chunk.js.map