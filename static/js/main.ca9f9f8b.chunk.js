(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{13:function(e,n,t){e.exports=t.p+"static/media/bg-2.09b38491.png"},24:function(e,n,t){},26:function(e,n,t){e.exports=t.p+"static/media/logo.3743e35e.png"},31:function(e,n,t){e.exports=t.p+"static/media/thumb.44443fb2.png"},33:function(e,n,t){e.exports=t(44)},44:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(25),l=t.n(o),c=(t(24),t(9)),i=t(1),u=t(2),m=t(8),d=t(26),s=t.n(d);function f(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: ",";\n  align-items: ",";\n  padding-inline-start: 0;\n  margin-block-start: 0;\n  margin-block-end: 0;\n  a {\n    color: #fff;\n    text-decoration: none;\n    &:hover {\n      color: #f17105;\n    }\n  }\n  li {\n    list-style: none;\n    margin-right: 2rem;\n    margin-bottom: ",";\n    color: #fff;\n    cursor: pointer;\n  }\n"]);return f=function(){return e},e}function p(){var e=Object(i.a)(["\n  padding: 1rem 3rem;\n  margin: 0 auto;\n  display: block;\n  width: 80%;\n  margin-bottom: 3rem;\n  cursor: pointer;\n  background-color: #f17105;\n  border-radius: 50px;\n  border: none;\n  color: #fff;\n  text-decoration: none;\n  text-align: center;\n  @media only screen and (min-width: 768px) {\n    width: 30%;\n  }\n  &:hover {\n    background-color: #fa9e53;\n  }\n"]);return p=function(){return e},e}function g(){var e=Object(i.a)(["\n  padding: 1rem 3rem;\n  margin: 0 auto;\n  display: block;\n  width: 80%;\n  margin-bottom: 3rem;\n  cursor: pointer;\n  background-color: #f17105;\n  border-radius: 50px;\n  border: none;\n  color: #fff;\n  @media only screen and (min-width: 768px) {\n    width: 30%;\n  }\n  &:hover {\n    background-color: #fa9e53;\n  }\n  &:focus {\n    outline: none;\n  }\n"]);return g=function(){return e},e}function h(){var e=Object(i.a)(["\n  margin: -150px auto 0;\n  background: #fff;\n  height: 300px;\n  z-index: 5;\n  display: flex;\n  flex-direction: column;\n  padding: 3rem 1rem;\n  .row {\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n    @media only screen and (min-width: 768px) {\n      justify-content: space-around;\n    }\n    .col-1 {\n      input {\n        display: block;\n        padding: 1rem;\n        border-radius: 6px;\n        border: 1px solid #000;\n        width: 80%;\n        &:focus {\n          outline: none;\n        }\n        @media only screen and (min-width: 768px) {\n          width: 35rem;\n        }\n      }\n    }\n    label {\n      font-size: 0.8em;\n      color: #999;\n      margin-right: 1rem;\n    }\n    select {\n      padding: 1rem;\n      border-radius: 6px;\n      border: 1px solid #000;\n      @media only screen and (min-width: 768px) {\n        width: 15rem;\n      }\n      &:focus {\n        outline: none;\n      }\n    }\n  }\n"]);return h=function(){return e},e}var b=u.a.section(h()),v=u.a.button(g()),E=(Object(u.a)(m.b)(p()),u.a.ul(f(),(function(e){return e.sidenav?"column":"row"}),(function(e){return e.sidenav?"flex-start":"center"}),(function(e){return e.sidenav?"2rem":"0"})));function x(){var e=Object(i.a)(["\n  display: none;\n  figure {\n    cursor: pointer;\n    margin: 0 3rem;\n    width: 50px;\n    & img {\n      width: 100%;\n    }\n  }\n  @media only screen and (min-width: 768px) {\n    display: flex;\n    padding: 2rem 0;\n  }\n"]);return x=function(){return e},e}function w(){return r.a.createElement(y,null,r.a.createElement("figure",{onClick:function(){window.location="/".concat("/currency-converter")}},r.a.createElement("img",{src:s.a,alt:"logo"})),r.a.createElement(E,null,r.a.createElement("li",null,r.a.createElement("a",{href:"/add"===window.location.pathname?"/#currencies":"#currencies"},"Available currencies")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/add"},"Add currency")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://israel-force.github.io/cv-web"},"About us")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://israel-force.github.io/cv-web"},"Contact us"))))}var y=u.a.div(x()),O=t(6);function C(){var e=Object(i.a)(['\n  padding: 0.8rem 3rem;\n  color: #fff;\n  @media only screen and (min-width: 768px) {\n    display: none;\n  }\n  h2 {\n    margin-left: 0.6rem;\n    font-family: "AvatarNormal";\n  }\n  .aside {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    opacity: 0.98;\n    height: 100vh;\n    z-index: 2;\n    background: #0197f6;\n    transform: translateY(0);\n    transition: all 0.5s ease-in-out;\n    padding: 6rem 2rem;\n  }\n  .menu-btn {\n    position: absolute;\n    z-index: 3;\n    left: 0.5rem;\n    top: 2.5%;\n    height: 20px;\n    width: 28px;\n    cursor: pointer;\n\n    .menu-btn_burger {\n      position: absolute;\n      right: 0;\n      top: 0.5rem;\n      width: 25px;\n      height: 2px;\n      background: #fff;\n      transition: all 0.5s ease-in-out;\n\n      &::before {\n        content: "";\n        position: absolute;\n        top: -8px;\n        width: 25px;\n        height: 2px;\n        background: #fff;\n        transition: all 0.5s ease-in-out;\n      }\n\n      &::after {\n        content: "";\n        position: absolute;\n        top: 8px;\n        width: 18px;\n        height: 2px;\n        background: #fff;\n        transition: all 0.5s ease-in-out;\n      }\n      &.open {\n        transform: rotate(360deg);\n        background: transparent;\n\n        &::before {\n          transform: rotate(45deg) translate(5px, 8px);\n        }\n\n        &::after {\n          width: 25px;\n          transform: rotate(-45deg) translate(3px, -7px);\n        }\n      }\n    }\n  }\n']);return C=function(){return e},e}function k(){var e=r.a.useState(!1),n=Object(O.a)(e,2),t=n[0],a=n[1],o=function(){a(!t)};return r.a.createElement(j,null,r.a.createElement("div",{className:"menu-btn",onClick:o},r.a.createElement("span",{className:t?"menu-btn_burger open":"menu-btn_burger"})),r.a.createElement("div",null,r.a.createElement("h2",{onClick:function(){window.location="/"}},"Coin"),t&&r.a.createElement("div",{className:t?"aside":"aside open"},r.a.createElement(E,{sidenav:"true"},r.a.createElement("li",{onClick:o},r.a.createElement("a",{href:"/add"===window.location.pathname?"/#currencies":"#currencies"},"Available Currencies"))),r.a.createElement(E,{sidenav:"true"},r.a.createElement("li",{onClick:o},r.a.createElement("a",{href:"/add"},"Add currency")),r.a.createElement("li",{onClick:o},r.a.createElement("a",{href:"https://israel-force.github.io/cv-web"},"About us")),r.a.createElement("li",{onClick:o},r.a.createElement("a",{href:"https://israel-force.github.io/cv-web"},"Contact us"))))))}var j=u.a.div(C());function D(){var e=Object(i.a)(["\n  background: ",";\n"]);return D=function(){return e},e}function S(e){return r.a.createElement(N,null,r.a.createElement(k,null),r.a.createElement(w,{props:e}))}var N=u.a.div(D(),"/"===window.location.pathname?"transparent":"#0197f6");function A(){var e=Object(i.a)(["\n  background-color: #0e75b6;\n  padding: 1em;\n  color: white;\n  a {\n    text-decoration: none;\n    color: #fff;\n    &:hover {\n      color: #f17105;\n    }\n  }\n  p {\n    text-align: left;\n  }\n\n  ul {\n    margin-bottom: 1em;\n  }\n\n  & ul li {\n    list-style: none;\n    margin-bottom: 1em;\n  }\n  @media only screen and (min-width: 768px) {\n    p {\n      text-align: center;\n    }\n  }\n"]);return A=function(){return e},e}function T(){return r.a.createElement(U,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://israel-force.github.io/cv-web"},"About us")),r.a.createElement("a",{href:"https://israel-force.github.io/cv-web"},"Contact us")),r.a.createElement("p",null,"Copyright \xa9 2020 Israel-Force"))}var U=u.a.div(A()),z=t(10),F=t(12);function I(){var e=Object(i.a)(["\n  height: ",";\n  background: ",";\n  margin-top: ",";\n padding-top: ",";\n h2{\n  margin: 5rem 1rem 0;\n  font-size: 1.1em;\n  color: #fff;\n  @media only screen and (min-width: 768px){ \n    margin-left: 4rem;\n }\n"]);return I=function(){return e},e}var M=u.a.section(I(),(function(e){return e.home?"400px":"210px"}),(function(e){return e.home?"#0197f6":"#f7f7f7"}),(function(e){return e.home?"-122px":"0"}),(function(e){return e.home?"8rem":"2rem"})),P=function(e){var n=e.home,t=e.children;return r.a.createElement(M,{home:n},t)},Y=t(13),_=t.n(Y),H=t(32),J=function(e,n){switch(n.type){case"UPDATE_DATA":return[].concat(Object(H.a)(e),[n.payload]);default:return e}},L=Object(a.createContext)(),R=[{code:"NGN",toOneDollar:381.25},{code:"ZMW",toOneDollar:21.21},{code:"GBP",toOneDollar:.74},{code:"USD",toOneDollar:1}];function G(e){var n=Object(a.useReducer)(J,R,(function(){var e=localStorage.getItem("data");return e?JSON.parse(e):R})),t=Object(O.a)(n,2),o=t[0],l=t[1];return r.a.useEffect((function(){localStorage.setItem("data",JSON.stringify(o))}),[o]),r.a.createElement(L.Provider,{value:{state:o,dispatch:l}},e.children)}function q(){var e=Object(i.a)(["\n  display: grid;\n  grid-template-columns: 2fr 2fr;\n  grid-gap: 2rem;\n  margin: 3rem 0;\n  @media only screen and (min-width: 768px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  figure {\n    width: 40px;\n    img {\n      width: 100%;\n    }\n  }\n  .box {\n    background: #fff;\n    padding: 2rem 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n  }\n"]);return q=function(){return e},e}function B(){var e=r.a.useContext(L).state,n=r.a.useState({select1:{value:"NGN"},select2:{value:"USD"}}),t=Object(O.a)(n,2),a=t[0],o=t[1],l=r.a.useState({amt:381.25,to:1}),c=Object(O.a)(l,2),i=c[0],u=c[1];return r.a.createElement("div",null,r.a.createElement(P,{home:"true"},r.a.createElement("h2",null,"Converter")),r.a.createElement("div",{className:"page-container",style:{width:"90%",margin:"0 auto"}},r.a.createElement(W,{cur:a,convert:i,handleChange:function(e,n){o(Object(F.a)({},a,Object(z.a)({},e,{value:n}))),u({amt:0,to:0})},handleInputChange:function(n,t,r){u(Object(F.a)({},i,Object(z.a)({},n,t)));var o="input1"===r?a.select1.value:a.select2.value,l="input1"===r?a.select2.value:a.select1.value,c=function(n,t){for(var a=0;a<=e.length;a++){var r=e[a];if(r.code===t){return"USD"===r.code?+n:+n*r.toOneDollar}}}(function(n,t){for(var a=0;a<=e.length;a++){var r=e[a];if(r.code===t){return"USD"===r.code?+n:+n/r.toOneDollar}}}(+t,o).toFixed(2),l).toFixed(2);u("amt"===n?{amt:t,to:c}:{to:t,amt:c})}}),r.a.createElement(Z,{changeState:function(e){o(Object(F.a)({},a,{select1:{value:e}})),u({amt:0,to:0}),window.scroll(0,0)}}),r.a.createElement(m.b,{to:"/add"},"ADD CURRENCY")))}var W=function(e){var n=e.cur,t=e.convert,a=e.handleChange,o=e.handleInputChange,l=r.a.useContext(L).state;return r.a.createElement(b,null,r.a.createElement("form",null,r.a.createElement("div",{className:"row row-1"},r.a.createElement("div",{className:"col-1"},r.a.createElement("label",{htmlFor:"amt"},"Amount"),r.a.createElement("input",{type:"number",name:"amt",placeholder:"e.g 380",id:"input1",value:t.amt,onChange:function(e){o(e.target.name,e.target.value,e.target.id)}})),r.a.createElement("div",{className:"col-2"},r.a.createElement("select",{value:n.select1.value,name:"select1",onChange:function(e){a(e.target.name,e.target.value)}},l.map((function(e,n){return r.a.createElement("option",{value:e.code,key:n},e.code)}))))),r.a.createElement("div",{className:"row row-2"}),r.a.createElement("div",{className:"row row-3"},r.a.createElement("div",{className:"col-1"},r.a.createElement("label",{htmlFor:"to"},"To"),r.a.createElement("input",{type:"number",name:"to",placeholder:"e.g 1",id:"input2",value:t.to,onChange:function(e){o(e.target.name,e.target.value,e.target.id)}})),r.a.createElement("div",{className:"col-2"},r.a.createElement("select",{value:n.select2.value,name:"select2",onChange:function(e){a(e.target.name,e.target.value)}},l.map((function(e,n){return r.a.createElement("option",{value:e.code,key:n},e.code)})))))))},Z=function(e){var n=e.changeState,t=r.a.useContext(L).state;return r.a.createElement($,{id:"currencies"},t.map((function(e,t){return r.a.createElement("div",{className:"box",key:t,onClick:function(t){n(e.code)}},r.a.createElement("figure",null,r.a.createElement("img",{src:_.a,alt:"coin"})),r.a.createElement("p",null,e.code))})))},$=u.a.div(q()),K=t(31),Q=t.n(K);function V(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: ",";\n  background: ",";\n  h1 {\n    font-weight: bold;\n    font-family: 'AvertaDemoPERegular';\n    font-size: 1.8rem;\n    color: #253031;\n    margin-bottom: 0.4rem;\n  }\n  h3 {\n    margin-bottom: 1rem;\n  }\n  .form-1 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  input {\n    padding: 1rem 0.5rem;\n    border-radius: 6px;\n    margin-bottom: 0.5rem;\n    display: block;\n    width: 13rem;\n    border: 1px solid #000;\n    &:focus {\n      outline: none;\n    }\n  }\n  label {\n    color: red;\n    font-size: 0.9em;\n  }\n  h4 {\n    font-weight: lighter;\n  }\n  figure {\n    width: 50px;\n    img {\n      width: 100%;\n    }\n  }\n  @media only screen and (min-width: 768px) {\n    flex-direction: ",";\n    justify-content: center;\n    align-items: center;\n    text-align: left;\n    figure {\n      width: 100px !important;\n      margin-right: ",";\n      margin-left: ",";\n      margin-top: ",";\n    }\n  }\n"]);return V=function(){return e},e}function X(){var e=Object(i.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0);\n  z-index: 100;\n  figure {\n    width: 200px;\n    margin: 200px auto;\n    transform: translateY(-100);\n    transition: all 0.5s ease-in-out;\n    & .clicked {\n      transform: translateY(0);\n      transition: all 0.5s ease-in-out;\n    }\n    img {\n      width: 100%;\n    }\n  }\n"]);return X=function(){return e},e}function ee(){var e,n,t=r.a.useContext(L).dispatch,a=r.a.useState({code:"",toOneDollar:""}),o=Object(O.a)(a,2),l=o[0],c=o[1],i=r.a.useState(!1),u=Object(O.a)(i,2),m=u[0],d=u[1];r.a.useEffect((function(){e=document.querySelector("#code"),n=document.querySelector("#toOneDollar")}),[l]);var s,f,p=function(e,n){c(Object(F.a)({},l,Object(z.a)({},e,n)))},g=function(e,n,t,a,r){return""===e.value?(e.nextElementSibling.innerHTML=t,r.preventDefault(),!1):n.test(e.value)?(e.nextElementSibling.innerHTML="",!0):(e.nextElementSibling.innerHTML=a,r.preventDefault(),!1)},h=/^[a-zA-Z]{1,3}$/,b=/^[0-9|.]{1,50}$/;return r.a.createElement("div",null,r.a.createElement(P,null,r.a.createElement(re,null)),r.a.createElement("form",{onSubmit:function(a){if(a.preventDefault(),function(t){s=g(e,h,"This field cannot be left empty","Code can only be letters and 3 characters long",t),f=g(n,b,"This field cannot be left empty","This field can only be numbers",t)}(a),s&&f){var r=l.code,o=l.toOneDollar;t({type:"UPDATE_DATA",payload:{code:r.toUpperCase(),toOneDollar:o}}),window.scroll(0,0),d(!0),setTimeout((function(){d(!0),window.location="/".concat("/currency-converter","/#currencies")}),1e3)}else a.preventDefault()}},r.a.createElement(ae,{add:l,handleChange:p}),r.a.createElement(te,{add:l,handleChange:p}),r.a.createElement(v,null,"ADD TO LIST"),m?r.a.createElement(ne,{thumbs:m}):null))}var ne=function(e){var n=e.thumbs;return r.a.createElement(oe,null,r.a.createElement("figure",{className:n?"clicked":""},r.a.createElement("img",{src:Q.a,alt:"thumb"})))},te=function(e){var n=e.add,t=e.handleChange;return r.a.createElement(le,{clr:"#fff"},r.a.createElement("figure",null,r.a.createElement("img",{src:_.a,alt:"coin"})),r.a.createElement("div",{className:"form-1"},r.a.createElement("h3",null,"How Much is 1USD to ",n.code.toUpperCase()),r.a.createElement("input",{type:"number",placeholder:"e.g 387.5",name:"toOneDollar",id:"toOneDollar",value:n.toOneDollar,onChange:function(e){t(e.target.name,e.target.value)}}),r.a.createElement("label",{htmlFor:"toOneDollar"})))},ae=function(e){var n=e.add,t=e.handleChange;return r.a.createElement(le,{clr:"#fff",add:"true",dir:"row-reverse"},r.a.createElement("figure",null,r.a.createElement("img",{src:_.a,alt:"coin"})),r.a.createElement("div",{className:"form-1"},r.a.createElement("h3",null,"What Currency?"),r.a.createElement("input",{type:"text",placeholder:"Currency Code e.g USD",name:"code",id:"code",value:n.code,onChange:function(e){t(e.target.name,e.target.value)}}),r.a.createElement("label",{htmlFor:"code"})))},re=function(){return r.a.createElement(le,{hero:"true"},r.a.createElement("figure",null,r.a.createElement("img",{src:_.a,alt:"coin"})),r.a.createElement("div",{className:"txt"},r.a.createElement("h1",null,"Add Currency"),r.a.createElement("h4",null,"You can add a currency"),r.a.createElement("h4",null,"that is not on our list of currencies."),r.a.createElement("h4",null,"Simply follow the guide below")))},oe=u.a.section(X()),le=u.a.section(V(),(function(e){return e.hero?0:"4rem 0"}),(function(e){return e.add?e.clr:"#f7f7f7"}),(function(e){return e.add?e.dir:"row"}),(function(e){return e.add?"0":"10rem"}),(function(e){return e.add?"10rem":"0"}),(function(e){return e.add?e.mg:"0"}));function ce(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(c.a,{exact:!0,path:"/",component:B}),r.a.createElement(c.a,{exact:!0,path:"/add",component:ee}),r.a.createElement(T,null))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null,r.a.createElement(m.a,{basename:"/currency-converter"},r.a.createElement(ce,null)))),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.ca9f9f8b.chunk.js.map