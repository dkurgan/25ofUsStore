(this["webpackJsonpulia-store"]=this["webpackJsonpulia-store"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/pants_1.9fec3422.jpeg"},28:function(e,t,a){e.exports=a.p+"static/media/hoodie_1.2747f083.jpeg"},29:function(e,t,a){e.exports=a.p+"static/media/hoodie_2.eba0ea35.jpeg"},32:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),i=a(14),m=a(18),s=a(31),o=a(24),u=a(28),d=a.n(u),p=a(29),E=a.n(p),f=a(21),b=a.n(f),v={items:[{id:1,title:"Black hoodie",desc:"Top hoodie for everyone",price:3200,img:d.a},{id:2,title:"White hoodie",desc:"Top hoodie for everyone",price:3200,img:E.a},{id:3,title:"Black pants",desc:"Top pants for everyone",price:2400,img:b.a},{id:4,title:"White pants",desc:"Top pants for everyone",price:2400,img:b.a}],addedItems:[],total:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;if("ITEM_SELECTED"===t.type){var a=e.items.find((function(e){return e.id===t.id})),n=e.addedItems.find((function(e){return t.id===e.id}));if(n)return a.quantity+=1,Object(o.a)({},e,{total:e.total+a.price});a.quantity=1;var c=e.total+a.price;return Object(o.a)({},e,{addedItems:[].concat(Object(s.a)(e.addedItems),[a]),total:c})}return e},y=a(5),N=a(6),g=a(8),j=a(7),O=a(9),k=a(11),x=a(12),C=function(e){function t(){return Object(y.a)(this,t),Object(g.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-expand bg-dark navbar-dark font-header"},c.a.createElement(k.b,{to:"/",className:"navbar-brand"},"TwentyFiveOfUs"),c.a.createElement("div",{className:"navbar-nav ml-auto"},c.a.createElement(k.b,{to:"/about",className:"nav-link"},"\u041e \u043d\u0430\u0441"),c.a.createElement(k.b,{to:"/delivery",className:"nav-link"},"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"),c.a.createElement(k.b,{to:"/cart",className:"nav-lin center-align mt-2 tomato"},c.a.createElement("i",{className:"fas fa-shopping-cart "}))))}}]),t}(c.a.Component),T=Object(i.b)((function(e){return console.log(e),{items:e.items}}),{addToCart:function(e){return{type:"ITEM_SELECTED",id:e}}})((function(e){var t=e.items.map((function(t){return c.a.createElement("div",{className:"card",key:t.id},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:t.img,alt:t.desc}),c.a.createElement("span",{to:"/",className:"btn-floating halfway-fab red",onClick:function(){e.addToCart(t.id),alert("item aded")}},c.a.createElement("i",null,"add"))),c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,t.desc),c.a.createElement("p",null,c.a.createElement("b",null,"\u041f\u0440\u0430\u0439\u0441: ",t.price," rub"))))}));return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"box center-align"},t))})),w=function(){return c.a.createElement("div",{className:"center-align fonts-body"},c.a.createElement("div",{className:"footer-copyright py-3"},"\xa9 2020 \u0414\u0430\u043d\u0435\u043a \u043f\u043e\u0441\u0442\u0430\u0440\u0430\u043b\u0441\u044f"))},I=function(e){function t(){return Object(y.a)(this,t),Object(g.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container text-center layouts"},c.a.createElement("h3",null,"About"),c.a.createElement("p",null,c.a.createElement("em",null,"25ofus \u044d\u0442\u043e \u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u043f\u0440\u043e\u0435\u043a\u0442")),c.a.createElement("p",null,"\u0422\u0443\u0442\u0430 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u0440\u0435\u043d\u0434\u0430,\u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u0438 \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435.\u041d\u0443 \u0442\u0438\u043f\u043e \u043f\u043e\u0447\u0435\u043c\u0443 \u043a\u0430\u043a\u0438-\u0442\u043e \u043b\u043e\u0448\u043a\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u043d\u0430\u043c \u0437\u0430\u043d\u0435\u0441\u0442\u0438 \u0448\u0435\u043a\u0435\u043b\u0438"),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("a",{href:"https://instagram.com/25_of_us"},c.a.createElement("i",{className:"fab fa-instagram fa-2x"}))),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("a",{href:"https://vk.com"},c.a.createElement("i",{className:"fab fa-vk fa-2x"})))))}}]),t}(c.a.Component),_=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).EmptyCart=function(){return c.a.createElement("div",{className:"container center-align"},c.a.createElement("h3",null,"  \u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u0432\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430:("))},a}return Object(O.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this.props.items.length,t=this.props.items.map((function(e){return c.a.createElement("div",{key:e.id,className:"col-sm-6 mt-3 card"},c.a.createElement("img",{className:"card-img-top",src:e.img,alt:"hoodie"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: ",e.quantity)))}));console.log(this.props.total);var a=c.a.createElement("div",null,c.a.createElement("div",{className:"text-center row m-1"},t),c.a.createElement("div",{className:"center-align"},c.a.createElement("p",null,"Total: ",this.props.total," \u0440\u0443\u0431\u043b\u0435\u0439"),c.a.createElement(k.b,{to:"/",className:"btn btn-danger mt-2 mb-2"},c.a.createElement("i",{className:"fas fa-shopping-cart"}),"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c")));return c.a.createElement("div",null,e?a:this.EmptyCart())}}]),t}(c.a.Component),q=Object(i.b)((function(e){return{items:e.addedItems,total:e.total}}))(_),A=function(e){function t(){return Object(y.a)(this,t),Object(g.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"band",class:"container text-center fonts-body"},c.a.createElement("h3",null,c.a.createElement("i",{className:"fas fa-truck"})," About Delivery"),c.a.createElement("p",null,c.a.createElement("em",null,"\u041a\u0430\u0440\u043e\u0447\u0435")),c.a.createElement("p",null,"\u0412\u044b \u043d\u0430\u043c \u0448\u0435\u043a\u0435\u043b\u0438 \u0434\u0430\u0435\u0442\u0435, \u0430 \u043c\u044b \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0432\u0430\u043c \u0442\u043e \u0448\u043b\u044f\u043f\u0443 \u043a\u043e\u0442\u043e\u0440\u0443\u0435 \u0432\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438.\u0422\u043e\u043b\u044c\u043a\u043e \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u043c\u0441\u043a, \u0441\u043e\u0440\u044f\u043d \u043f\u043e \u0434\u0435\u0440\u0435\u0432\u043d\u044f\u043c \u043c\u044b \u043d\u0435 \u043a\u0430\u0442\u0430\u0435\u043c\u0441\u044f. \u041c\u043e\u0436\u0435\u043c \u0432 \u0432\u0430\u0448\u0443 \u0436\u043e\u043f\u0443 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0447\u0442\u043e\u0439 \u0438 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u043e\u0439,\u043d\u0443 \u043a\u0430\u043a \u0434\u043e\u0433\u043e\u0432\u0440\u0438\u043c\u0441\u044f \u0432\u043e\u043e\u0431\u0449\u0435\u043c. \u0422\u043e\u043a\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u0435\u0441\u043e \u0432\u043f\u0435\u0440\u0435\u0434!"),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("a",{href:"https://instagram.com/25of.us"},c.a.createElement("i",{className:"fab fa-instagram fa-2x"}))),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("a",{href:"https://vk.com"},c.a.createElement("i",{className:"fab fa-vk fa-2x"})))))}}]),t}(c.a.Component),D=(a(42),function(e){function t(){return Object(y.a)(this,t),Object(g.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return c.a.createElement(k.a,null,c.a.createElement(C,null),c.a.createElement("div",{className:"container"},c.a.createElement(x.c,null,c.a.createElement(x.a,{exact:!0,path:"/",component:T}),c.a.createElement(x.a,{exact:!0,path:"/cart",component:q}),c.a.createElement(x.a,{exact:!0,path:"/about",component:I}),c.a.createElement(x.a,{exact:!0,path:"/delivery",component:A}))),c.a.createElement(w,null))}}]),t}(c.a.Component));l.a.render(c.a.createElement(i.a,{store:Object(m.b)(h)},c.a.createElement(D,null)),document.querySelector("#root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.7482dada.chunk.js.map