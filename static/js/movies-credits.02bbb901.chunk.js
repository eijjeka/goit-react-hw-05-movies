"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[19],{3109:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,c,i,u,o,s,p=t(885),d=t(2791),f=t(6871),l=t(168),h=t(6031),g=h.ZP.div(r||(r=(0,l.Z)(["\n  text-align: center;\n"]))),m=h.ZP.p(a||(a=(0,l.Z)(["\n  font-size: 16px;\n  color: #ff6b01;\n"]))),x=h.ZP.h2(c||(c=(0,l.Z)(["\n  font-size: 20px;\n"]))),v=h.ZP.img(i||(i=(0,l.Z)(["\n  display: block;\n  max-width: 100%;\n"]))),w=h.ZP.li(u||(u=(0,l.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n"]))),Z=h.ZP.div(o||(o=(0,l.Z)(["\n  height: 100%;\n  color: #fff;\n  background-color: #000;\n"]))),b=h.ZP.ul(s||(s=(0,l.Z)(["\n  padding: 10px;\n  margin-top: 30px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  list-style: none;\n\n  @media screen and (min-width: 768px) and (max-width: 1024px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  @media screen and (min-width: 1024px) {\n    grid-template-columns: repeat(6, 1fr);\n  }\n"]))),y=t(184),k=function(n){var e=n.data;return(0,y.jsx)(b,{children:e.map((function(n){return(0,y.jsx)(w,{children:(0,y.jsxs)(Z,{children:[(0,y.jsx)(v,{src:n.profile_path?"https://image.tmdb.org/t/p/original/".concat(n.profile_path):"https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png",alt:"Photo Actors"}),(0,y.jsxs)(g,{children:[(0,y.jsx)(x,{children:n.name}),(0,y.jsxs)(m,{children:["Character: ",n.character]})]})]})},n.id)}))})},_=t(1660),j=t(3742),P=function(){var n=(0,f.UO)(),e=(0,d.useState)([]),t=(0,p.Z)(e,2),r=t[0],a=t[1];return(0,d.useEffect)((function(){_.xc(n.filmId).then((function(n){j.Loading.circle({svgColor:"#ff6b01"}),a(n)})).finally((function(){j.Loading.remove()}))}),[n.filmId]),(0,y.jsx)(y.Fragment,{children:r&&(0,y.jsx)(k,{data:r})})}},1660:function(n,e,t){t.d(e,{Hx:function(){return g},Li:function(){return d},Zn:function(){return s},lu:function(){return l},xc:function(){return x}});var r=t(5861),a=t(7757),c=t.n(a),i=t(4569),u=t.n(i),o="cd00d8c55831cbeec8ccdad1db16d6d2";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/popular?api_key=".concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(e,"?api_key=cd00d8c55831cbeec8ccdad1db16d6d2&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u().defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=movies-credits.02bbb901.chunk.js.map