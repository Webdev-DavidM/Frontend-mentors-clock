(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(18),r=n.n(a),i=(n(25),n(3)),o=n.n(i),j=n(5),l=n(6),m=(n(27),n(20)),d=n(7),p=n.n(d),u=n(0);var b=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(),r=Object(l.a)(a,2),i=r[0],d=r[1],b=Object(c.useState)(!1),O=Object(l.a)(b,2),x=O[0],h=O[1],f=Object(c.useState)(),g=Object(l.a)(f,2),v=g[0],k=g[1],N=Object(c.useState)(!1),w=Object(l.a)(N,2),y=w[0],E=w[1],F=Object(c.useState)(),T=Object(l.a)(F,2),S=T[0],R=T[1];Object(c.useEffect)((function(){try{!function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("https://worldtimeapi.org/api/ip");case 2:t=e.sent,n=t.data.datetime.split("T")[1].substr(0,5),s(n),R(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("https://freegeoip.app/json/");case 2:t=e.sent,k(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("https://api.quotable.io/random");case 2:t=e.sent,d(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}catch(e){}}),[]);var z=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(!0),function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("https://api.quotable.io/random");case 2:t=e.sent,d(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),setTimeout((function(){h(!1)}),1e3);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return setTimeout(Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("https://worldtimeapi.org/api/ip");case 2:t=e.sent,n=t.data.datetime.split("T")[1].substr(0,5),s(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 1:case"end":return e.stop()}}),e)}))),1e3),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"image-container",children:[Object(u.jsx)("div",{className:"opacity-layer",children:" "}),Object(u.jsx)(m.a,{queries:{small:"(max-width: 768px)",medium:"(min-width: 769px) and (max-width: 1440px)",large:"(min-width: 1440px)"},children:function(e){return Object(u.jsxs)(u.Fragment,{children:[e.small&&(n?n.split(":")[0]>5&&n.split(":")[0]<18?Object(u.jsx)("img",{src:"".concat("/Frontend-mentors-clock","/images/mobile-daytime-375x667.jpg"),alt:""}):Object(u.jsx)("img",{src:"".concat("/Frontend-mentors-clock","/images/mobile-nighttime-375x667.jpg"),alt:""}):Object(u.jsx)("img",{src:"".concat("/Frontend-mentors-clock","/images/mobile-daytime-375x667.jpg"),alt:""})),e.medium&&(n?n.split(":")[0]>5&&n.split(":")[0]<18?Object(u.jsx)("img",{src:"".concat("/Frontend-mentors-clock","/images/tablet-daytime-768x1024.jpg"),alt:""}):Object(u.jsx)("img",{src:"".concat("/Frontend-mentors-clock","/images/tablet-nighttime-768-1024.jpg"),alt:""}):Object(u.jsx)("img",{src:"".concat("/Frontend-mentors-clock","/images/tablet-daytime-768x1024.jpg"),alt:""})),e.large&&(n?n.split(":")[0]>5&&n.split(":")[0]<18?Object(u.jsx)("img",{src:"".concat("/Frontend-mentors-clock","/images/desktop-daytime-1440-800.jpg"),alt:""}):Object(u.jsx)("img",{src:"".concat("/Frontend-mentors-clock","/images/desktop-nighttime-1440-800.jpg"),alt:""}):Object(u.jsx)("img",{src:"".concat("/Frontend-mentors-clock","/images/desktop-daytime-1440-800.jpg"),alt:""}))]})}}),Object(u.jsxs)("div",{className:"".concat(y?"data-container move-data-container":"data-container"),children:[Object(u.jsxs)("div",{className:"info-flex-container",children:[Object(u.jsxs)("section",{className:"quote",children:[Object(u.jsxs)("p",{children:[" ",i&&i.content]}),Object(u.jsx)("button",{className:"".concat(x?"refresh-svg-container refresh-rotate":"refresh-svg-container"," "),onClick:function(){return z()},children:Object(u.jsx)("img",{src:"".concat("/Frontend-mentors-clock","/images/icons/icon-refresh.svg"),alt:""})}),Object(u.jsx)("p",{className:"author",children:i&&i.author})]}),Object(u.jsxs)("section",{className:"time",children:[Object(u.jsxs)("div",{className:"intro",children:[n&&n.split(":")[0]>5&&n.split(":")[0]<18?Object(u.jsx)("img",{src:"".concat("/Frontend-mentors-clock","/images/icons/icon-sun.svg"),alt:""}):Object(u.jsx)("img",{src:"".concat("/Frontend-mentors-clock","/images/icons/icon-moon.svg"),alt:""}),Object(u.jsxs)("span",{className:"time-of-day",children:["\xa0",n&&n.split(":")[0]>5&&n.split(":")[0]<12?Object(u.jsx)("span",{children:"GOOD MORNING"}):n&&n.split(":")[0]>12&&n.split(":")[0]<18?Object(u.jsx)("span",{children:"GOOD AFTERNOON"}):Object(u.jsx)("span",{children:"GOOD EVENING"}),", IT'S CURRENTLY"]})]}),Object(u.jsxs)("div",{className:"main-time",children:[Object(u.jsx)("h1",{children:n&&n})," ",Object(u.jsx)("span",{className:"time-zone",children:"BST"})]}),Object(u.jsxs)("div",{className:"place",children:[" ",Object(u.jsxs)("span",{children:[" ","IN ",v&&v.city.toUpperCase(),","," ",v&&v.country_name.toUpperCase()]}),Object(u.jsxs)("button",{className:"expand-btn",onClick:function(){E((function(e){return!e}))},children:[y?Object(u.jsx)("span",{children:"LESS"}):Object(u.jsx)("span",{children:"MORE"}),Object(u.jsxs)("div",{className:"".concat(y?"arrow-image-container arrow-move":"arrow-image-container"),children:[" ",Object(u.jsx)("img",{src:"".concat("/Frontend-mentors-clock","/images/icons/icon-arrow-up.svg"),alt:""})," "]})]})]})]})]}),Object(u.jsxs)("section",{className:"".concat(n?n.split(":")[0]>5&&n.split(":")[0]<18?"timezone-expand-info":"timezone-expand-info-dark":"timezone-expand-info"),children:[Object(u.jsxs)("div",{className:"timezone",children:[Object(u.jsx)("span",{children:"CURRENT TIMEZONE"}),Object(u.jsx)("span",{children:S&&S.timezone})]}),Object(u.jsxs)("div",{className:"day-of-the-year",children:[Object(u.jsx)("span",{children:"DAY OF THE YEAR"}),Object(u.jsx)("span",{children:S&&S.day_of_year})]}),Object(u.jsxs)("div",{className:"day-of-the-week",children:[Object(u.jsx)("span",{children:"DAY OF THE WEEK"}),Object(u.jsx)("span",{children:S&&S.day_of_week})]}),Object(u.jsxs)("div",{className:"week-number",children:[Object(u.jsx)("span",{children:"WEEK NUMBER"}),Object(u.jsx)("span",{children:S&&S.week_number})]})]})]})]})})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.cfb7d8d4.chunk.js.map