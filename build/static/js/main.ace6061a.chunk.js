(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{36:function(n,e,t){n.exports=t(49)},49:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(24),o=t.n(c),i=t(3),l=t(2);function u(){var n=Object(i.a)(['\n   \n    *, *::before, *::after {\n        box-sizing: border-box;   \n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale; \n        margin: 0;\n        padding: 0;\n    }\n\n    /* happy rems */\n\n    html {\n        font-size: 62.5%;  /* 1 rem === 10px */\n    }\n\n    body {\n        font-size: 1.6rem; /* 16px */\n        font-family: "Montserrat", sans-serif;\n        background-color: #000;\n        padding-left: 20rem;\n    }\n']);return u=function(){return n},n}var m=Object(l.b)(u()),f={primary:"#000",secondary:"#fff",tertiary:"#e36f1e",light:300,bold:600},d=t(15),p=t(4),s=function(){var n=Object(r.useState)((new Date).toLocaleTimeString()),e=Object(p.a)(n,2),t=e[0],c=e[1];return setInterval((function(){c((new Date).toLocaleTimeString())}),1e3),a.a.createElement("h1",null,t)},g=t(29),h=t.n(g);function b(){var n=Object(i.a)(["\n    display: block;\n    padding-bottom: 3rem;\n    color: ",";\n    text-decoration: none;\n    text-transform: uppercase;\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: .2rem;\n"]);return b=function(){return n},n}function v(){var n=Object(i.a)(["\n    margin-top: auto;\n"]);return v=function(){return n},n}function x(){var n=Object(i.a)(["\n    list-style: none;\n    margin-top: 10rem;\n"]);return x=function(){return n},n}function E(){var n=Object(i.a)(["\n    display: block;\n    width: 50px;\n    height: 50px;\n    margin: 20px;\n    background-color: ",";\n    color: ",";\n"]);return E=function(){return n},n}function j(){var n=Object(i.a)(["\n    position: fixed;\n    left: 0;\n    top: 0;\n    height: 100vh;\n    width: 20rem;\n    padding: 2rem .5rem;\n    background-color: ",";\n    color: ",";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* box-shadow: 0 2px 5px #ccc; */\n    border-right: 1px solid #333333;\n"]);return j=function(){return n},n}var O=l.c.nav(j(),(function(n){return n.theme.primary}),(function(n){return n.theme.secondary})),y=Object(l.c)(d.b)(E(),(function(n){return n.theme.primary}),(function(n){return n.theme.secondary})),w=l.c.ul(x()),k=l.c.span(v()),z={color:"#e5127d"},S=Object(l.c)(d.b)(b(),(function(n){return n.theme.secondary})),C=function(){return a.a.createElement(O,null,a.a.createElement(y,{to:"/dashboard/"},a.a.createElement(h.a,{style:{fontSize:"5rem"}})),a.a.createElement(w,null,a.a.createElement("li",null,a.a.createElement(S,{exact:!0,to:"/dashboard/",activeStyle:z},"Homepage")),a.a.createElement("li",null,a.a.createElement(S,{to:"/notes",activeStyle:z},"Notes")),a.a.createElement("li",null,a.a.createElement(S,{to:"/weather",activeStyle:z},"Weather")),a.a.createElement("li",null,a.a.createElement(S,{to:"/currencies",activeStyle:z},"Currencies"))),a.a.createElement(k,null,a.a.createElement(s,null)))},T=function(n){var e=n.children;return a.a.createElement("div",null,a.a.createElement(m,null),a.a.createElement(l.a,{theme:f},a.a.createElement(a.a.Fragment,null,a.a.createElement(C,null),e)))},F=t(11);function L(){var n=Object(i.a)(["\n    margin: 10px auto;\n    font-size: 2rem;\n    grid-column: 1/-1;\n    display: grid;\n    grid-template-columns: 1fr auto 1fr;\n    grid-gap: 20px;\n    align-items: center;\n\n    &:before, &:after {\n        content: '';\n        height: 5px;\n        display: block;\n        background: linear-gradient(to left, transparent, #f7c626 15%,#f68c2f 45%, #e5127d 65%, transparent);\n    }\n\n    &:after {\n        background: linear-gradient(to right, transparent, #f7c626 15%,#f68c2f 45%, #e5127d 65%, transparent);\n    }\n"]);return L=function(){return n},n}var _=l.c.p(L());function D(){var n=Object(i.a)(["\n    padding-top: 10px; \n    color: ",";\n    font-size: 2rem;\n"]);return D=function(){return n},n}function I(){var n=Object(i.a)(["\n    font-size: 1.8rem;\n"]);return I=function(){return n},n}function N(){var n=Object(i.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    background: #fff;\n    border-radius: 10px;\n    box-shadow: 0 2px 5px #ccc;\n    min-height: 100px;\n"]);return N=function(){return n},n}function A(){var n=Object(i.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n    grid-gap: 3rem;\n    align-items: center;\n    font-weight: 700;\n"]);return A=function(){return n},n}var M=l.c.div(A()),W=l.c.div(N()),J=l.c.p(I()),P=l.c.p(D(),(function(n){var e=n.color;return e||"#000"})),q=function(n){var e=n.covid;n.setCovid,n.countryName;return e?a.a.createElement(a.a.Fragment,null,a.a.createElement(_,null,"Coronavirus pandemic"),a.a.createElement(M,null,a.a.createElement(W,null,a.a.createElement(J,null,"Total infected: "),a.a.createElement(P,{color:"red"},e.confirmed.value.toLocaleString())),a.a.createElement(W,null,a.a.createElement(J,null,"Total deaths: "),a.a.createElement(P,null,e.deaths.value.toLocaleString())),a.a.createElement(W,null,a.a.createElement(J,null,"Total recovered: "),a.a.createElement(P,{color:"green"},e.recovered.value.toLocaleString())))):a.a.createElement("h1",null,"Loading...")};function B(){var n=Object(i.a)(["\n    font-size: 1.4rem;\n"]);return B=function(){return n},n}function H(){var n=Object(i.a)(["\n    font-size: 1.2rem;\n"]);return H=function(){return n},n}function K(){var n=Object(i.a)(["\n    font-size: 2rem;\n"]);return K=function(){return n},n}function R(){var n=Object(i.a)(["\n    /* position: fixed; */\n    /* top: 10px; */\n    /* right: 10px; */\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-around;\n    background: linear-gradient(#c21500, #ffc500);\n    color: #fff;\n    border-radius: 10px;\n    box-shadow: 0 2px 5px #ccc;\n    width: 100%;\n    height: 180px;\n"]);return R=function(){return n},n}var U,G;navigator.geolocation.getCurrentPosition((function(n){U=n.coords.longitude,G=n.coords.latitude}));var Q=l.c.div(R()),V=l.c.p(K()),X=l.c.p(H()),Y=l.c.p(B()),Z=function(){var n=function(n){return Math.floor(n-273.15)},e=Object(r.useState)({city:"",temp:"",temp_min:"",temp_max:"",desciption:"",icon:"",sunrise:"",sunset:""}),t=Object(p.a)(e,2),c=t[0],o=t[1];return Object(r.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(G,"&lon=").concat(U,"&appid=").concat("9e6406cf5fdb38d3be336d69086e660b")).then((function(n){return n.json()})).then((function(e){return o({city:e.name,temp:n(e.main.temp),temp_min:n(e.main.temp_min),temp_max:n(e.main.temp_max),desciption:e.weather[0].description,icon:e.weather[0].icon,sunrise:e.sys.sunrise,sunset:e.sys.sunset})})).catch((function(n){return console.log(n)}))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(Q,null,a.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(c.icon,"@2x.png"),alt:c.desciption}),c.temp?a.a.createElement(V,null,c.temp,"\xb0C"):a.a.createElement("h1",null,"Error"),a.a.createElement(X,null,c.desciption),a.a.createElement(Y,null,c.city)))};function $(){var n=Object(i.a)(["\n    position: absolute;\n    left: 0px;\n    bottom: 0px;\n    padding: 2px 5px 0px 5px;\n    font-size: 1.2rem;\n    font-weight: 600;\n    background-color: rgba(0,0,0,0.8);\n    \n\n    &:hover {\n    text-decoration: underline;\n    }\n\n"]);return $=function(){return n},n}function nn(){var n=Object(i.a)(["\n    width: 100%;\n    height: 220px;\n    background-position: center;\n    background-repeat: no-repeat; \n    background-size: cover; \n"]);return nn=function(){return n},n}function en(){var n=Object(i.a)(["\n    text-decoration: none;\n    color: ",";\n"]);return en=function(){return n},n}function tn(){var n=Object(i.a)(["\n"]);return tn=function(){return n},n}function rn(){var n=Object(i.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    grid-gap: .2rem;\n    padding: .2rem;\n    background: linear-gradient(90deg, #f7c626 15%, #f68c2f 40%, #e5127d 85%);\n\n    /* align-items: center; */\n"]);return rn=function(){return n},n}var an=l.c.div(rn()),cn=l.c.div(tn()),on=l.c.a(en(),(function(n){return n.theme.secondary})),ln=l.c.div(nn()),un=(l.c.p($()),function(){var n=Object(r.useState)([]),e=Object(p.a)(n,2),t=e[0],c=e[1],o=new Request("https://newsapi.org/v2/top-headlines?country=us&apiKey=11ef5bf7a6f04d5995125a5044948ee2&pageSize=6");return Object(r.useEffect)((function(){fetch(o).then((function(n){return n.json()})).then((function(n){console.log(n),c(n.articles)})).catch((function(n){return console.log(n)}))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(_,null,"News"),a.a.createElement(an,null,t.map((function(n,e){return a.a.createElement(cn,{key:e},a.a.createElement(on,{target:"blank",rel:"noopener noreferrer",href:n.url},a.a.createElement(ln,{style:{backgroundImage:"url(".concat(n.urlToImage,")")}})))}))))});function mn(){var n=Object(i.a)(["\n  & li {\n    list-style: none;\n  }\n\n  & a {\n    color: #f68c2f;\n  }\n"]);return mn=function(){return n},n}function fn(){var n=Object(i.a)(["\n  width: 100%;\n  height: 10rem;\n  background-color: #000;\n  color: #e5127d;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 2rem;\n"]);return fn=function(){return n},n}function dn(){var n=Object(i.a)(["\n"]);return dn=function(){return n},n}function pn(){var n=Object(i.a)(["\n\n"]);return pn=function(){return n},n}function sn(){var n=Object(i.a)(["\n  max-width: 120rem;\n  margin: 0 auto;\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 20rem;\n  grid-gap: 1rem;\n"]);return sn=function(){return n},n}var gn=l.c.div(sn()),hn=l.c.div(pn()),bn=l.c.div(dn()),vn=l.c.footer(fn()),xn=l.c.div(mn()),En=function(){var n=Object(r.useState)({confirmed:{value:""},recovered:{value:""},deaths:{value:""}}),e=Object(p.a)(n,2),t=e[0],c=e[1];Object(r.useEffect)((function(){fetch("https://covid19.mathdro.id/api/").then((function(n){return n.json()})).then((function(n){return c({confirmed:{value:n.confirmed.value},recovered:{value:n.recovered.value},deaths:{value:n.deaths.value}})})).catch((function(n){return console.log(n)}))}),[]);var o=Object(r.useState)([]),i=Object(p.a)(o,2),l=(i[0],i[1]),u=Object(r.useState)("World"),m=Object(p.a)(u,2),f=m[0];m[1];Object(r.useEffect)((function(){fetch("https://covid19.mathdro.id/api/countries/").then((function(n){return n.json()})).then((function(n){return l(n.countries)})).catch((function(n){return console.log(n)}))}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(gn,null,a.a.createElement(hn,null,a.a.createElement(q,{covid:t,setCovid:c,countryName:f}),a.a.createElement(un,null)),a.a.createElement(bn,null,a.a.createElement(Z,null))),a.a.createElement(vn,null,a.a.createElement("p",null,"\xa9 waldemarciupa 2020"),a.a.createElement(xn,null,a.a.createElement("p",null,"Used API:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{target:"blank",rel:"noopener",href:"https://openweathermap.org/"},"openweathermap.org")),a.a.createElement("li",null,a.a.createElement("a",{target:"blank",rel:"noopener",href:"https://newsapi.org/"},"newsapi.org")),a.a.createElement("li",null,a.a.createElement("a",{target:"blank",rel:"noopener",href:"https://github.com/mathdroid/covid-19-api"},"mathdroid/covid-19-api"))))))},jn=t(33),On=t(19),yn=t(30);function wn(){var n=Object(i.a)(["\n    width: 38px;\n    height: 38px;\n    border-radius: 50%;\n    border: none;\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n    box-shadow: \n    0px 3px 5px -1px rgba(0,0,0,0.2), \n    0px 6px 10px 0px rgba(0,0,0,0.14), \n    0px 1px 18px 0px rgba(0,0,0,0.12);\n    transition: all 0.4s ease 0s;\n\n    &:hover {\n        color: ",";\n        background: ",";\n    }\n"]);return wn=function(){return n},n}var kn=l.c.button(wn(),(function(n){return n.theme.tertiary}),(function(n){return n.theme.primary}),(function(n){return n.theme.tertiary}),(function(n){return n.theme.primary})),zn=t(31),Sn=t.n(zn);function Cn(){var n=Object(i.a)(["\n    width: 100%;\n    border: none;\n    padding: 4px;\n    outline: none;\n    font-size: 1.2em;\n    font-family: inherit;\n    resize: none;\n"]);return Cn=function(){return n},n}function Tn(){var n=Object(i.a)(["\n    width: 100%;\n    border: none;\n    padding: 4px;\n    outline: none;\n    font-size: 1.2em;\n    font-family: inherit;\n    resize: none;\n"]);return Tn=function(){return n},n}function Fn(){var n=Object(i.a)(["\n    position: relative;\n    max-width: 480px;\n    margin: 30px auto 20px auto;\n    background: #fff;\n    padding: 15px;\n    border-radius: 7px;\n    box-shadow: 0 2px 5px #ccc;\n"]);return Fn=function(){return n},n}var Ln=l.c.form(Fn()),_n=l.c.input(Tn()),Dn=l.c.textarea(Cn()),In=function(n){var e=n.onAdd,t=Object(r.useState)(!1),c=Object(p.a)(t,2),o=c[0],i=c[1],l=Object(r.useState)({title:"",content:""}),u=Object(p.a)(l,2),m=u[0],f=u[1],d=function(n){var e=n.target,t=e.name,r=e.value;f((function(n){return Object(yn.a)({},n,Object(On.a)({},t,r))}))};return a.a.createElement("div",null,a.a.createElement(Ln,null,o&&a.a.createElement(_n,{name:"title",onChange:d,value:m.title,placeholder:"Title"}),a.a.createElement(Dn,{name:"content",onClick:function(){i(!0)},onChange:d,value:m.content,placeholder:"Take a note...",rows:o?3:1}),a.a.createElement(kn,{onClick:function(n){if(n.preventDefault(),!m.content&&!m.title)return null;e(m),f({title:"",content:""})}},a.a.createElement(Sn.a,{style:{fontSize:"2.2rem"}}))))},Nn=t(32),An=t.n(Nn);function Mn(){var n=Object(i.a)(["\n    font-size: 1.6rem;\n    padding-top: 0.5rem;\n"]);return Mn=function(){return n},n}function Wn(){var n=Object(i.a)(["\n    font-size: 2rem;\n    font-weight: 600;\n"]);return Wn=function(){return n},n}function Jn(){var n=Object(i.a)(["\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n"]);return Jn=function(){return n},n}function Pn(){var n=Object(i.a)(["\n    position: relative;\n    background: #fff;\n    border-radius: 10px;\n    box-shadow: 0 2px 5px #ccc;\n    padding: 10px 30px 10px 10px;\n    min-width: 250px;\n    min-height: 100px;\n\n    &:hover {\n        box-shadow: 0 0 30px -15px rgba(0,0,0,0.5)\n    }\n"]);return Pn=function(){return n},n}var qn=l.c.div(Pn()),Bn=Object(l.c)(kn)(Jn()),Hn=l.c.h2(Wn()),Kn=l.c.p(Mn()),Rn=function(n){var e=n.id,t=n.title,r=n.content,c=(n.props,n.onDelete);return a.a.createElement(qn,null,a.a.createElement(Hn,null,t),a.a.createElement(Kn,null,r),a.a.createElement(Bn,{onClick:function(){c(e)}},a.a.createElement(An.a,{style:{fontSize:"2.1rem"}})))};function Un(){var n=Object(i.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-gap: 20px;\n    align-items: center;\n    padding: 3rem;\n"]);return Un=function(){return n},n}var Gn=l.c.div(Un()),Qn=function(){var n=Object(r.useState)([]),e=Object(p.a)(n,2),t=e[0],c=e[1],o=function(n){c((function(e){return e.filter((function(e,t){return t!==n}))}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(In,{onAdd:function(n){c((function(e){return[].concat(Object(jn.a)(e),[n])}))}}),a.a.createElement(Gn,null,t.map((function(n,e){return a.a.createElement(Rn,{key:e,id:e,title:n.title,content:n.content,onDelete:o})}))))},Vn=function(){return a.a.createElement("h1",null," Weather  ")},Xn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Currencies"))},Yn=function(){return a.a.createElement("h1",null,"Error 404, page not found...")},Zn=function(){return a.a.createElement(d.a,null,a.a.createElement(T,null,a.a.createElement(F.c,null,a.a.createElement(F.a,{exact:!0,path:"/dashboard/",component:En}),a.a.createElement(F.a,{path:"/notes",component:Qn}),a.a.createElement(F.a,{path:"/weather",component:Vn}),a.a.createElement(F.a,{path:"/currencies",component:Xn}),a.a.createElement(F.a,{path:"*",component:Yn}))))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Zn,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.ace6061a.chunk.js.map