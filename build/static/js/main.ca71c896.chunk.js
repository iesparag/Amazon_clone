(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,a,t){e.exports=t(68)},42:function(e,a,t){},44:function(e,a,t){},46:function(e,a,t){},48:function(e,a,t){},54:function(e,a,t){},56:function(e,a,t){},58:function(e,a,t){},60:function(e,a,t){},65:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(25),l=t.n(r),i=(t(42),t(44),t(0)),m=(t(46),t(3)),o=(t(48),t(16)),s=t.n(o),u=Object(n.createContext)(),d=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(u.Provider,{value:Object(n.useReducer)(a,t)},r)},_=function(){return Object(n.useContext)(u)},g=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,l=e.rating,i=_(),o=Object(m.a)(i,2),u=(o[0].basket,o[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,t),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"product__rating"},Array(l).fill().map(function(e){return c.a.createElement("p",null,c.a.createElement(s.a,null))}))),c.a.createElement("img",{src:n,alt:""}),c.a.createElement("button",{onClick:function(){u({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:r,rating:l}})}},"Add to basket"))},E=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:"movie_add"}),c.a.createElement("div",{className:"home__row"},c.a.createElement(g,{id:"1",title:"Mammon women's cream handbag combo (set of 3)",price:12,rating:5,image:"https://m.media-amazon.com/images/I/71bdgYfofhL._UX625_.jpg"}),c.a.createElement(g,{id:"2",title:"Hornbull Themes Brown RFID Blocking Leather Wallet for Men | Wallets Men Leather",price:18,rating:4,image:"https://m.media-amazon.com/images/I/81ptzVTG0jL._SY450_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(g,{id:"3",title:"realme narzo 50A Prime (Black, 4GB RAM+128GB Storage) T612 Processor | 50MP AI Triple Camera | Charger Included",price:120,rating:4,image:"https://m.media-amazon.com/images/I/71IL+JcuxgL._SX425_.jpg"}),c.a.createElement(g,{id:"4",title:"Arshia Fashions Girl's Net Frock Dress, Girls Birthday Dress",price:30,rating:3,image:"https://m.media-amazon.com/images/I/71YUbf1VygL._UY550_.jpg"}),c.a.createElement(g,{id:"5",title:"PUMA Men's Legacy Disrupt Basketball Shoe",price:73,rating:5,image:"https://m.media-amazon.com/images/I/61YtMfsnB+L._UY500_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(g,{id:"6",title:"Skybags Mint 80 cms Polycarbonate Turquoise Hardsided Check-in Luggage",price:45,rating:5,image:"https://m.media-amazon.com/images/I/81-cDp-605L._UY550_.jpg"})))},p=(t(54),t(7)),h=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),i=Object(m.a)(l,2),o=i[0],s=i[1];return c.a.createElement("div",{className:"login"},c.a.createElement(p.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"email",value:t,onChange:function(e){return r(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:o,onChange:function(e){return s(e.target.value)}}),c.a.createElement("button",{className:"login__signInButton",onClick:function(e){e.preventDefault()},type:"submit"},"Sign in")),c.a.createElement("p",null,"By continuing, you agree to Amazon's Conditions of Use and Privacy Notice."),c.a.createElement("button",{className:"login__registerButton",onClick:function(e){e.preventDefault()}},"Create your Amazon Account")))},b=(t(56),t(58),function(e){var a=e.id,t=e.title,n=e.image,r=e.price,l=e.rating,i=_(),o=Object(m.a)(i,2),u=(o[0].basket,o[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"checkoutProduct__image",src:n,alt:""}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},t),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map(function(e){return c.a.createElement("p",null,c.a.createElement(s.a,null))})),c.a.createElement("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from Basket")))}),f=(t(60),t(27)),v=t.n(f),k=t(6),N=t(22),O=function(e){return e.reduce(function(e,a){return a.price+e},0)},C=function(e,a){switch(console.log(a),a.type){case"ADD_TO_BASKET":return Object(N.a)({},e,{basket:[].concat(Object(k.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=Object(k.a)(e.basket),n=e.basket.findIndex(function(e){return e.id===a.id});return n>=0?t.splice(n,1):console.warn("cant remove the product of this Id"),Object(N.a)({},e,{basket:t});default:return e}},P=function(){var e=_(),a=Object(m.a)(e,2),t=a[0].basket;a[1];return c.a.createElement("div",{className:"subtotal"},c.a.createElement(v.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",t.length," items): ",c.a.createElement("strong",null," ",e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"})," This order contains a gift."))},decimalScale:2,value:O(t),displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement("button",null,"Proceed to Checkout"))},j=function(){var e=_(),a=Object(m.a)(e,1)[0].basket;return c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__add",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),0===a.length?c.a.createElement("div",null,c.a.createElement("h2",null,"Your Shopping Basket is Empty"),c.a.createElement("p",null,'You have no Items in your basket. To buy one or more items, "Add to basket" next to the item.')):c.a.createElement("div",null,c.a.createElement("h2",{className:"checkout__title"},"Your Shopping Basket"),a.map(function(e){return c.a.createElement(b,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))),a.length>0&&c.a.createElement("div",{className:"checkout__right"},c.a.createElement(P,null)))},y=(t(65),t(28)),B=t.n(y),S=t(29),T=t.n(S);var A=function(){var e=_(),a=Object(m.a)(e,1)[0].basket;return c.a.createElement("nav",{className:"header"},c.a.createElement(p.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"amazon_logo"})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{type:"text",className:"header__searchInput"}),c.a.createElement(B.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(p.b,{to:"/login",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello Parag"),c.a.createElement("span",{className:"header__optionLineTwo"},"Sign In"))),c.a.createElement(p.b,{to:"/",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Returns"),c.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),c.a.createElement(p.b,{to:"/",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime"))),c.a.createElement(p.b,{to:"/checkout",className:"header__link"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement("span",null,c.a.createElement(T.a,null)),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},a.length)))))};var w=function(){return c.a.createElement("div",null,c.a.createElement(A,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",element:c.a.createElement(E,null)},"Home Page"),c.a.createElement(i.a,{path:"/login",element:c.a.createElement(h,null)},"Login Page"),c.a.createElement(i.a,{path:"/checkout",element:c.a.createElement(j,null)},"Checkout Page")))},L=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,75)).then(function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,r=a.getLCP,l=a.getTTFB;t(e),n(e),c(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(p.a,null,c.a.createElement(d,{initialState:{basket:[]},reducer:C},c.a.createElement(w,null)))),L()}},[[33,3,2]]]);
//# sourceMappingURL=main.ca71c896.chunk.js.map