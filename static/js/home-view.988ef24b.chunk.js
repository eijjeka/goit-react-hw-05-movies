"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[8],{8748:function(n,e,t){t.d(e,{Z:function(){return j}});var r,a,i,c,u,o,s,d=t(6871),p=t(168),m=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],f=t(6031),l=t(184),h=function(n){var e=Object.values(n),t=[];return m.forEach((function(n){e[0].includes(n.id)&&t.push(n.name)})),(0,l.jsx)(g,{children:t.slice(0,2).join(", ")+", Other"})},g=f.ZP.span(r||(r=(0,p.Z)(["\n  color: #ff6b01;\n"]))),x=t(501),v=(0,f.ZP)(x.rU)(a||(a=(0,p.Z)(["\n  text-decoration: none;\n  color: #fff;\n"]))),y=f.ZP.li(i||(i=(0,p.Z)(["\n  overflow: hidden;\n  border-radius: 10px;\n  box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.75);\n  background-color: RGBA(0, 0, 0, 1);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.02);\n  }\n\n  @media screen and (max-width: 480px) {\n    width: 80%;\n  }\n"]))),b=f.ZP.p(c||(c=(0,p.Z)(["\n  font-size: 20px;\n  margin-bottom: 5px;\n"]))),w=f.ZP.div(u||(u=(0,p.Z)(["\n  padding: 10px;\n"]))),Z=f.ZP.img(o||(o=(0,p.Z)(["\n  display: block;\n  max-width: 100%;\n"]))),k=function(n){var e=n.itemData,t=(0,d.TH)(),r=e.poster_path,a=e.title,i=e.id,c=e.genre_ids;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(y,{children:(0,l.jsxs)(v,{to:{pathname:"/movies/".concat(i),state:{from:t}},children:[(0,l.jsx)(Z,{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png",alt:""}),(0,l.jsxs)(w,{children:[(0,l.jsx)(b,{children:a}),(0,l.jsx)(h,{genresId:c})]})]})})})},_=f.ZP.ul(s||(s=(0,p.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1em;\n  list-style: none;\n\n  @media screen and (max-width: 480px) {\n    grid-template-columns: repeat(1, 1fr);\n    justify-items: center;\n  }\n"]))),j=function(n){var e=n.data;return(0,l.jsx)(_,{children:e.map((function(n){return(0,l.jsx)(k,{itemData:n},n.id)}))})}},4621:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var r=t(885),a=t(2791),i=t(8748),c=t(1660),u=t(3742),o=t(184),s=function(){var n=(0,a.useState)([]),e=(0,r.Z)(n,2),t=e[0],s=e[1];return(0,a.useEffect)((function(){c.Zn().then((function(n){u.Loading.circle({svgColor:"#ff6b01"}),s(n)})).finally((function(){u.Loading.remove()}))}),[]),(0,o.jsx)(i.Z,{data:t})}},1660:function(n,e,t){t.d(e,{Hx:function(){return h},Li:function(){return p},Zn:function(){return s},lu:function(){return f},xc:function(){return x}});var r=t(5861),a=t(7757),i=t.n(a),c=t(4569),u=t.n(c),o="cd00d8c55831cbeec8ccdad1db16d6d2";function s(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/popular?api_key=".concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(e,"?api_key=cd00d8c55831cbeec8ccdad1db16d6d2&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u().defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=home-view.988ef24b.chunk.js.map