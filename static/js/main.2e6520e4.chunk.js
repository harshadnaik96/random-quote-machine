(this["webpackJsonprandom-quotes-machine"]=this["webpackJsonprandom-quotes-machine"]||[]).push([[0],{11:function(e,t,n){e.exports=n(25)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(7),c=n.n(o),l=(n(16),n(17),n(18),n(3)),i=n.n(l),s=n(8),u=n(5),m=n(9),h=n(10),f=Math.floor(1500*Math.random()+1),d="#"+Math.floor(16777215*Math.random()).toString(16),p=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(null),l=Object(u.a)(c,2),p=l[0],E=l[1];return Object(a.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://type.fit/api/quotes");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n[f].text),E(n[f].author),document.body.style.backgroundColor=d;case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),n&&p?r.a.createElement("div",null,r.a.createElement("h1",{style:{color:d,transition:"ease-in"}},n),r.a.createElement("p",{style:{color:d,textAlign:"right"}},"~ ",p)):r.a.createElement("h1",{style:{fontSize:"18px",color:"grey",textAlign:"center"}},r.a.createElement(m.a,{icon:h.a}))},E=function(){return r.a.createElement("div",{className:"box"},r.a.createElement(p,null))};var v=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("p",{style:{color:"white",textAlign:"center",fontSize:"12px"}},"by harshad")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.2e6520e4.chunk.js.map