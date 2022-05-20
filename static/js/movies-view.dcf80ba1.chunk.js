"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[163],{8748:function(n,e,t){t.d(e,{Z:function(){return _}});var r,a,i,o,c,u,s,d=t(6871),p=t(168),l=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],f=t(6031),m=t(184),h=function(n){var e=Object.values(n),t=[];return l.forEach((function(n){e[0].includes(n.id)&&t.push(n.name)})),(0,m.jsx)(x,{children:t.slice(0,2).join(", ")+", Other"})},x=f.ZP.span(r||(r=(0,p.Z)(["\n  color: #ff6b01;\n"]))),g=t(501),b=(0,f.ZP)(g.rU)(a||(a=(0,p.Z)(["\n  text-decoration: none;\n  color: #fff;\n"]))),v=f.ZP.li(i||(i=(0,p.Z)(["\n  overflow: hidden;\n  border-radius: 10px;\n  box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.75);\n  background-color: RGBA(0, 0, 0, 1);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.02);\n  }\n\n  @media screen and (max-width: 480px) {\n    width: 80%;\n  }\n"]))),y=f.ZP.p(o||(o=(0,p.Z)(["\n  font-size: 20px;\n  margin-bottom: 5px;\n"]))),Z=f.ZP.div(c||(c=(0,p.Z)(["\n  padding: 10px;\n"]))),w=f.ZP.img(u||(u=(0,p.Z)(["\n  display: block;\n  max-width: 100%;\n"]))),j=function(n){var e=n.itemData,t=(0,d.TH)(),r=e.poster_path,a=e.title,i=e.id,o=e.genre_ids;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(v,{children:(0,m.jsxs)(b,{to:{pathname:"/movies/".concat(i),state:{from:t}},children:[(0,m.jsx)(w,{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png",alt:""}),(0,m.jsxs)(Z,{children:[(0,m.jsx)(y,{children:a}),(0,m.jsx)(h,{genresId:o})]})]})})})},k=f.ZP.ul(s||(s=(0,p.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1em;\n  list-style: none;\n\n  @media screen and (max-width: 480px) {\n    grid-template-columns: repeat(1, 1fr);\n    justify-items: center;\n  }\n"]))),_=function(n){var e=n.data;return(0,m.jsx)(k,{children:e.map((function(n){return(0,m.jsx)(j,{itemData:n},n.id)}))})}},2385:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,i,o,c,u=t(168),s=t(885),d=t(2791),p=t(501),l=t(1660),f=t(8748),m=t(6031),h=t(8185),x=m.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n"]))),g=m.ZP.button(a||(a=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  border: none;\n  outline: none;\n  padding: 4.5px;\n  padding-top: 4px;\n  cursor: pointer;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: #212229;\n  &:hover {\n  }\n"]))),b=m.ZP.input(i||(i=(0,u.Z)(["\n  width: 400px;\n  padding: 10px;\n  border: none;\n  outline: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  background-color: #212229;\n  caret-color: #ff6b01;\n  color: #fff;\n\n  @media screen and (max-width: 480px) {\n    max-width: 300px;\n  }\n"]))),v=(0,m.ZP)(h.PxJ)(o||(o=(0,u.Z)(["\n  color: #fff;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    color: #ff6b01;\n  }\n"]))),y=t(184),Z=function(n){var e=n.handleSubmit,t=n.handleInputChange,r=n.query;return(0,y.jsx)("form",{onSubmit:e,children:(0,y.jsxs)(x,{children:[r?(0,y.jsx)(b,{placeholder:"Type to search",type:"text",onChange:t}):(0,y.jsx)(b,{type:"text",placeholder:"Type to search",onChange:t}),(0,y.jsx)(g,{type:"submit",children:(0,y.jsx)(v,{size:30})})]})})},w=t(5264),j=t(3742),k=m.ZP.div(c||(c=(0,u.Z)(["\n  margin-top: 20px;\n"]))),_=function(){var n,e=(0,p.lr)(),t=(0,s.Z)(e,2),r=t[0],a=t[1],i=(0,d.useState)(null!==(n=r.get("query"))&&void 0!==n?n:""),o=(0,s.Z)(i,2),c=o[0],u=o[1],m=(0,d.useState)([]),h=(0,s.Z)(m,2),x=h[0],g=h[1],b=(0,d.useState)(""),v=(0,s.Z)(b,2),_=v[0],P=v[1];(0,d.useEffect)((function(){c&&(a("query=".concat(c)),l.Li(c).then((function(n){j.Loading.circle({svgColor:"#ff6b01"}),g(n)})).finally((function(){j.Loading.remove()})))}),[c,a]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k,{children:(0,y.jsx)(Z,{handleSubmit:function(n){n.preventDefault(),""!==_?u(_):w.Notify.failure("\ud83e\udd84 Please enter the name!")},handleInputChange:function(n){P(n.target.value.toLowerCase().trim())},query:c})}),(0,y.jsx)(f.Z,{data:x})]})}},1660:function(n,e,t){t.d(e,{Hx:function(){return h},Li:function(){return p},Zn:function(){return s},lu:function(){return f},xc:function(){return g}});var r=t(5861),a=t(7757),i=t.n(a),o=t(4569),c=t.n(o),u="cd00d8c55831cbeec8ccdad1db16d6d2";function s(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/popular?api_key=".concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"?api_key=cd00d8c55831cbeec8ccdad1db16d6d2&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c().defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=movies-view.dcf80ba1.chunk.js.map