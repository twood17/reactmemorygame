(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e){e.exports=[{id:1,name:"Vitiate",image:"../images/vitiate.jpg",clicked:!1},{id:2,name:"Darth Krayt",image:"../images/darth_krayt.jpg",clicked:!1},{id:3,name:"Darth Malak",image:"../images/darth_malak.jpg",clicked:!1},{id:4,name:"Darth Nihilius",image:"../images/darth_nihilius.png",clicked:!1},{id:5,name:"Darth Revan",image:"../images/darth_revan.jpg",clicked:!1},{id:6,name:"Darth Sion",image:"../images/darth_sion.jpg",clicked:!1},{id:7,name:"Darth Traya",image:"../images/darth_traya.jpg",clicked:!1},{id:8,name:"Emperor Palpatine",image:"../images/emperor_palpatine.jpg",clicked:!1},{id:9,name:"Exar Kun",image:"../images/ExarKun.jpg",clicked:!1},{id:10,name:"Hero Tython",image:"../images/hero_tython.png",clicked:!1},{id:11,name:"Mace Windu",image:"../images/mace_windu.jpg",clicked:!1},{id:12,name:"Marka Ragnos",image:"../images/marka_ragnos.jpg",clicked:!1}]},,,,,,,,function(e,a,t){e.exports=t(21)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),i=t.n(c),l=t(5),o=t(6),m=t(8),s=t(7),d=t(1),u=t(9);t(16);var g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar sticky-top"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"navbar-brand"},r.a.createElement("a",{href:"/"},"Memory Game")),r.a.createElement("li",{className:"instructions"},"May the Force be with you!"),r.a.createElement("li",{className:"score"},"Score: ",e.score," | Top Score: ",e.topscore)))))};t(17);var h=function(e){return r.a.createElement("div",{className:"container wrapper-background"},e.children)};t(18);var f=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"bottom"},"Star Wars Memory Game ","\xa9"))};t(19);var p=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.handleOnClick(e.id)}})))};t(20);var k=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("h1",null,"Star Wars Memory Game"),r.a.createElement("br",null),r.a.createElement("h2",null,"Click an image to earn points, don't click the same image twice or game over!"))},E=t(2),v=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).shuffleArray=function(e){for(var a,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),a=e[n-=1],e[n]=e[t],e[t]=a;return e},t.handleOnClick=function(e){var a=t.state.images.filter(function(a){return a.id===e})[0],n=t.state.images.filter(function(e){return!0===e.clicked});!1===a.clicked?(a.clicked=!0,t.shuffleArray(E),t.setState({score:t.state.score+1,topscore:t.state.score+1>t.state.topscore?t.state.score+1:t.state.topscore})):!0===a.clicked&&(n.forEach(function(e){e.clicked=!1}),t.shuffleArray(E),t.setState({score:0})),console.log(t.state.images),console.log(t.state.score),console.log(t.state.topscore)},t.state={images:E,score:0,topscore:0},t.handleOnClick=t.handleOnClick.bind(Object(d.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{score:this.state.score,topscore:this.state.topscore}),r.a.createElement(k,null),r.a.createElement(h,null,this.state.images.map(function(a){return r.a.createElement(p,{id:a.id,key:a.id,name:a.name,image:a.image,handleOnClick:e.handleOnClick})})),r.a.createElement(f,null))}}]),a}(n.Component);i.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.f8530b02.chunk.js.map