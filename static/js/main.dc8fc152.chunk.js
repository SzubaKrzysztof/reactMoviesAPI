(this.webpackJsonpmovies_api=this.webpackJsonpmovies_api||[]).push([[0],{16:function(e,t,a){e.exports=a(40)},21:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),s=(a(21),a(2)),o=a(15),i=a(3),u=a.n(i),m=a(14);var p=function(e){var t=e.handleInput,a=e.search;return r.a.createElement("section",{className:"searchbox-wrap"},r.a.createElement("input",{type:"text",placeholder:"Search for a movie...",className:"searchbox",onChange:t,onKeyPress:a}))};var d=function(e){var t=e.result,a=e.openPopup;return r.a.createElement("div",{className:"result br3 grow shadow-5 b--white-70 ",onClick:function(){return a(t.imdbID)}},r.a.createElement("img",{src:t.Poster})," ",r.a.createElement("h3",null," ",t.Title," "))};var v=function(e){var t=e.results,a=e.openPopup;return r.a.createElement("section",{className:"results"},t.map((function(e){return r.a.createElement(d,{key:e.imdbID,result:e,openPopup:a})})))};var E=function(e){var t=e.selected,a=e.closePopup;return r.a.createElement("section",{className:"popup"},r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,t.Title," ",r.a.createElement("span",null,"(",t.Year,")")),r.a.createElement("p",{className:"rating"},"Rating: ",t.imdbRating),r.a.createElement("div",{className:"plot"},r.a.createElement("img",{src:t.Poster}),r.a.createElement("p",null,t.Plot)),r.a.createElement("button",{className:"close",onClick:a},"Close")))};var f=function(){var e=Object(n.useState)({s:"",results:[],selected:{}}),t=Object(o.a)(e,2),a=t[0],c=t[1],l="https://www.omdbapi.com/?apikey=dfe6d885";return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(m.a,{className:"parallax-effect-glare-scale",perspective:650,scale:1.02},r.a.createElement("div",{className:"inner-element"},r.a.createElement("div",null,"Search"),r.a.createElement("div",null,"for movies"),r.a.createElement("div",null,"\ud83d\udc40")))),r.a.createElement("main",null,r.a.createElement(p,{handleInput:function(e){var t=e.target.value;c((function(e){return Object(s.a)(Object(s.a)({},e),{},{s:t})}))},search:function(e){"Enter"===e.key&&u()(l+"&s="+a.s).then((function(e){var t=e.data.Search;c((function(e){return Object(s.a)(Object(s.a)({},e),{},{results:t})}))}))}}),r.a.createElement(v,{results:a.results,openPopup:function(e){u()(l+"&i="+e).then((function(e){var t=e.data;console.log(t),c((function(e){return Object(s.a)(Object(s.a)({},e),{},{selected:t})}))}))}})," ","undefined"!=typeof a.selected.Title&&r.a.createElement(E,{selected:a.selected,closePopup:function(){c((function(e){return Object(s.a)(Object(s.a)({},e),{},{selected:{}})}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39);l.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.dc8fc152.chunk.js.map