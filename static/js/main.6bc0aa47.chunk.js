(this.webpackJsonppelispedia=this.webpackJsonppelispedia||[]).push([[0],{25:function(e,a,s){},26:function(e,a,s){},68:function(e,a,s){"use strict";s.r(a);var t=s(1),c=s.n(t),r=s(19),n=s.n(r),l=(s(25),s(26),s(0)),i=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar px-3 navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:"PelisPedia"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarColor02","aria-controls":"navbarColor02","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarColor02",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)("a",{className:"nav-link active",href:"#",children:["Peliculas",Object(l.jsx)("span",{className:"visually-hidden",children:"(current)"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"#",children:"Series"})}),Object(l.jsxs)("li",{className:"nav-item dropdown",children:[Object(l.jsx)("a",{className:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Ver m\xe1s"}),Object(l.jsxs)("div",{className:"dropdown-menu",children:[Object(l.jsx)("a",{className:"dropdown-item",href:"#",children:"Favoritos"}),Object(l.jsx)("a",{className:"dropdown-item",href:"#",children:"Ultimos a\xf1adidos"}),Object(l.jsx)("a",{className:"dropdown-item",href:"#",children:"Ver por genero"}),Object(l.jsx)("div",{className:"dropdown-divider"}),Object(l.jsx)("a",{className:"dropdown-item",href:"#",children:"Proximamente"})]})]})]}),Object(l.jsxs)("form",{className:"d-flex",children:[Object(l.jsx)("input",{className:"form-control me-sm-2",type:"text",placeholder:"Buscar"}),Object(l.jsx)("button",{className:"btn btn-secondary my-2 my-sm-0",type:"submit",children:"Buscar"})]})]})]})})})},d=s.p+"static/media/img1.6217da66.jpg",o=s.p+"static/media/img2.38706f3b.jpeg",j=s.p+"static/media/img3.5306c44e.jpg",b=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{id:"carouselExampleControls",className:"carousel slide","data-bs-ride":"carousel",children:[Object(l.jsxs)("div",{className:"carousel-inner",children:[Object(l.jsx)("div",{className:"carousel-item active",style:{height:"500px",objectFit:"cover"},children:Object(l.jsx)("img",{src:d,className:"d-block w-100",alt:"Spiderman No Way Home"})}),Object(l.jsx)("div",{className:"carousel-item",style:{height:"500px"},children:Object(l.jsx)("img",{src:o,className:"d-block w-100",alt:"Dune"})}),Object(l.jsx)("div",{className:"carousel-item",style:{height:"500px"},children:Object(l.jsx)("img",{src:j,className:"d-block w-100",alt:"Eternals"})})]}),Object(l.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"prev",children:[Object(l.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(l.jsx)("span",{className:"visually-hidden",children:"Anterior"})]}),Object(l.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"next",children:[Object(l.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(l.jsx)("span",{className:"visually-hidden",children:"Posterior"})]})]})})},m=s(5),x=s(20),h=s.n(x),u=Object(t.createContext)([]),p=function(e){var a=e.children,s=Object(t.useState)([]),c=Object(m.a)(s,2),r=c[0],n=c[1];return Object(l.jsx)(u.Provider,{value:{state:r,setState:n},children:a})},O=function(){var e=Object(t.useState)(null),a=Object(m.a)(e,2),s=a[0],c=a[1],r=Object(t.useContext)(u),n=r.state,i=r.setState,d=[];return Object(t.useEffect)((function(){h.a.get("https://api.themoviedb.org/3/movie/popular?api_key=647e2d6ce4e1a6848a1b1c26a3107048&language=es").then((function(e){var a=e.data.results.map((function(e,a){return Object(l.jsx)("div",{className:"d-flex card mb-3 mx-auto",style:{width:"15em"},children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-header",children:e.original_title}),Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w200"+e.poster_path,className:"card-img-top w-50",alt:"..."}),Object(l.jsxs)("p",{className:"card-text",children:[" Estreno: ",e.release_date]}),Object(l.jsx)("p",{className:"card-text",style:{display:"none"},children:e.overview}),Object(l.jsx)("button",{className:"btn btn-dark",onClick:function(e){return function(e){d=n;var a={nombre:e.children[0].innerText,imagen:e.children[1].src,fecha:e.children[2].innerText,descripcion:e.children[3].innerText};d.push(a),i(d)}(e.target.parentNode)},children:" VER MAS! "})]})},a)}));c(a)}))})),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("h1",{children:" Peliculas populares "}),s]})};var v=function(){var e=Object(t.useContext)(u).state;return console.log(e),Object(l.jsx)("div",{})};var N=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(i,{sticky:"top"}),Object(l.jsx)(b,{}),Object(l.jsx)(O,{}),Object(l.jsx)(v,{})]})};s(46),s(47);n.a.render(Object(l.jsx)(p,{children:Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(N,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.6bc0aa47.chunk.js.map