"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[610],{396:function(e,r,t){t.d(r,{IR:function(){return u},JS:function(){return i},M1:function(){return l},YJ:function(){return p},tx:function(){return v}});var n=t(861),a=t(757),c=t.n(a),s=t(243),o="8ac13a6e4c030357e0a4de2fb59da064",i=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(r));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get(" https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get(" https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},610:function(e,r,t){t.r(r),t.d(r,{default:function(){return m}});var n,a=t(861),c=t(439),s=t(757),o=t.n(s),i=t(791),u=t(87),p=t(689),l=t(168),v=t(128),h=t(444),d=t(184),f=(0,h.ZP)(u.rU)(n||(n=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),x=function(e){var r=e.to,t=e.children;return(0,d.jsxs)(f,{to:r,children:[(0,d.jsx)(v.jTe,{size:"24"}),t]})},g=t(396),m=function(){var e,r,t=(0,i.useState)({}),n=(0,c.Z)(t,2),s=n[0],l=n[1],v=(0,p.UO)().id,h=null!==(e=null===(r=(0,p.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(o().mark((function e(r){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.YJ)(r);case 3:t=e.sent,n={title:t.title,poster:t.poster_path,year:t.release_date.slice(0,4),overview:t.overview,genres:t.genres.map((function(e){return e.name})).join(", "),userscore:Math.round(10*t.vote_average)},l(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}();e(v)}),[v]),(0,d.jsxs)("main",{children:[(0,d.jsx)(x,{to:h,children:"Back to movies"}),(0,d.jsx)("img",{src:s.poster?"https://image.tmdb.org/t/p/w500".concat(s.poster):"https://via.placeholder.com/100x150.png?text=No+Image",alt:s.title}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h2",{children:[s.title?s.title:"???"," (",s.year?s.year:"???",")"]}),(0,d.jsxs)("p",{children:["Userscore: ",s.userscore?"".concat(s.userscore,"%"):"Not scored"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:s.overview?s.overview:"No describe"}),(0,d.jsx)("h4",{children:"Genres"}),(0,d.jsx)("p",{children:s.genres?s.genres:"No genres"})]}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading subpage..."}),children:(0,d.jsx)(p.j3,{})})]})}}}]);
//# sourceMappingURL=610.aa985ef8.chunk.js.map