(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(7),c=n.n(i),r=(n(14),n(15),n(1)),o=n(2),s=n(4),u=n(3),h=n(5),m=(n(16),n(17),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",id:"Capa_1",viewBox:"0 0 485.411 485.411"},l.a.createElement("g",null,l.a.createElement("path",{d:"M0,81.824v321.763h485.411V81.824H0z M242.708,280.526L43.612,105.691h398.187L242.708,280.526z    M163.397,242.649L23.867,365.178V120.119L163.397,242.649z M181.482,258.533l61.22,53.762l61.22-53.762L441.924,379.72H43.487   L181.482,258.533z M322.008,242.655l139.535-122.536v245.059L322.008,242.655z"})),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null))}}]),t}(l.a.Component)),v=(n(18),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("svg",{class:"arrow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}),l.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}))}}]),t}(l.a.Component)),f=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"RightSlide"},l.a.createElement("ul",{className:"main-navigation"},l.a.createElement("li",null,l.a.createElement("span",null,"item 1"),l.a.createElement(v,null)),l.a.createElement("li",null,l.a.createElement("span",null,"item 2"),l.a.createElement(v,null)),l.a.createElement("li",null,l.a.createElement("span",null,"item 3"),l.a.createElement(v,null))),l.a.createElement("ul",{className:"aside-navigation"},l.a.createElement("li",null,"item 1"),l.a.createElement("li",null,"item 2"),l.a.createElement("li",null,"item 3"),l.a.createElement("li",null,"item 4")))}}]),t}(l.a.Component),g=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={leftActive:!1,rightActive:!1},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleLeftClick",value:function(){!0===this.state.rightActive&&this.setState({rightActive:!this.state.rightActive}),this.setState({leftActive:!this.state.leftActive})}},{key:"handleRightClick",value:function(){!0===this.state.leftActive&&this.setState({leftActive:!this.state.leftActive}),this.setState({rightActive:!this.state.rightActive})}},{key:"render",value:function(){return l.a.createElement("div",{className:"navigation-container"},l.a.createElement("div",{className:"nav-left ".concat(this.state.leftActive?"left-active":"left-hidden")}),l.a.createElement("nav",null,l.a.createElement("button",{className:this.state.leftActive?"button-active":null,id:"left-icon",onClick:this.handleLeftClick.bind(this)},l.a.createElement(m,null)),l.a.createElement("a",{href:"/#",title:"logo",className:"logo"},l.a.createElement("h1",null,"APP")),l.a.createElement("button",{className:this.state.rightActive?"button-active":null,id:"right-icon",onClick:this.handleRightClick.bind(this)},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("div",{className:"nav-right ".concat(this.state.rightActive?"right-active":"right-hidden")},l.a.createElement(f,null)))}}]),t}(l.a.Component),d=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={leftSideOpen:!1,rightSideOpen:!1},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g,null))}}]),t}(a.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(l.a.createElement(d,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/appie",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/appie","/service-worker.js");E?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):p(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):p(t,e)})}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.6a76da05.chunk.js.map