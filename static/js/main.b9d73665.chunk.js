(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/pants_1.9fec3422.jpeg"},19:function(e,t,a){e.exports=a.p+"static/media/hoodie_2.eba0ea35.jpeg"},20:function(e,t,a){e.exports=a.p+"static/media/hoodie_1.2747f083.jpeg"},33:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),i=a(8),s=a(2),o=a(3),m=a(4),u=a(5),d=a(14),p=a(13),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"ui menu navPos"},r.a.createElement(d.b,{to:"/",className:"header item fonts-header"},"TwentyFiveOfUs"),r.a.createElement("div",{className:"right menu fonts-body"},r.a.createElement(d.b,{to:"/about",className:"item"},"\u041e \u043d\u0430\u0441"),r.a.createElement(d.b,{to:"/delivery",className:"item"},"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"),r.a.createElement(d.b,{to:"/cart",className:"item basket"},r.a.createElement("i",{className:"large shopping basket icon"}))))}}]),a}(r.a.Component),E=Object(i.b)((function(e){return{cart:null}}))(f),h=(a(43),a(45)),v=Object(i.b)((function(e){return{alert:e.alert}}))((function(e){var t=e.alert;return null!=t&&t.length>0?r.a.createElement("div",{key:t[0].alId,role:"alert",className:"ui ".concat(t[0].color," message")},t[0].msg):null})),b=function(e,t){return function(a){var n=Object(h.a)();a({type:"ADD_ALERT",payload:{msg:e,color:t,id:n}}),setTimeout((function(){return a({type:"REMOVE_ALERT",payload:n})}),3e3)}},N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={size:null},e.handeleSize=function(t){t.preventDefault(),e.setState({size:t.target.value})},e.addCart=function(t){null!=e.state.size?(e.props.addToCart(t,e.state.size),e.props.setAlert("\u0420\u0430\u0437\u043c\u0435\u0440: ".concat(e.state.size," \u0431\u044b\u043b \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),"green"),e.setState({size:null}),setTimeout((function(){return document.getElementById(t).value=""}),500)):e.props.setAlert("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440!","red")},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.items.map((function(t){return r.a.createElement("div",{key:t.id,className:"ui centered card"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{alt:t.desc,src:t.src})),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"nine wide column"},r.a.createElement("select",{id:t.id,onChange:function(t){return e.handeleSize(t)},className:"ui dropdown"},r.a.createElement("option",{value:""},"Size"),r.a.createElement("option",{value:"M"},"M"),r.a.createElement("option",{value:"L"},"L"))),r.a.createElement("div",{className:"six wide column"},r.a.createElement("button",{onClick:function(a){return e.addCart(t.id)},className:"ui positive basic button cartBtn"},"\u041a\u0443\u043f\u0438\u0442\u044c ",r.a.createElement("i",{className:"shopping cart icon"})))),r.a.createElement("div",{className:"content"},t.desc,r.a.createElement("h5",null,"Price: ",t.price," \u0440\u0443\u0431\u043b\u044f\u0443")),e.props.alert?r.a.createElement(v,null):null)}));return r.a.createElement("div",{className:"container"},t)}}]),a}(r.a.Component),g=Object(i.b)((function(e){return{items:e.items.items,alert:e.alert}}),{addToCart:function(e,t){return function(a){var n=Object(h.a)();a({type:"ADD_ITEM",payload:{id:e,size:t,uid:n}})}},setAlert:b})(N),y=function(){return r.a.createElement("div",{className:"ui center aligned header"},r.a.createElement("footer",{className:"copyright"},"\xa92020 \u0414\u0430\u043d\u0435\u043a \u043f\u043e\u0441\u0442\u0430\u0440\u0430\u043b\u0441\u044f"))},O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container text-center fonts-body"},r.a.createElement("h3",null,"About"),r.a.createElement("p",null,r.a.createElement("em",null,"25ofus \u044d\u0442\u043e \u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u043f\u0440\u043e\u0435\u043a\u0442")),r.a.createElement("p",null,"\u0422\u0443\u0442\u0430 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u0440\u0435\u043d\u0434\u0430,\u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u0438 \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435.\u041d\u0443 \u0442\u0438\u043f\u043e \u043f\u043e\u0447\u0435\u043c\u0443 \u043a\u0430\u043a\u0438-\u0442\u043e \u043b\u043e\u0448\u043a\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u043d\u0430\u043c \u0437\u0430\u043d\u0435\u0441\u0442\u0438 \u0448\u0435\u043a\u0435\u043b\u0438"),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("a",{href:"https://instagram.com/25_of_us"},r.a.createElement("i",{className:"fab fa-instagram fa-2x"}))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("a",{href:"https://vk.com"},r.a.createElement("i",{className:"fab fa-vk fa-2x"})))))}}]),a}(r.a.Component),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"band",className:"container text-center fonts-body"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fas fa-truck"})," About Delivery"),r.a.createElement("p",null,r.a.createElement("em",null,"\u041a\u0430\u0440\u043e\u0447\u0435")),r.a.createElement("p",null,"\u0412\u044b \u043d\u0430\u043c \u0448\u0435\u043a\u0435\u043b\u0438 \u0434\u0430\u0435\u0442\u0435, \u0430 \u043c\u044b \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0432\u0430\u043c \u0442\u043e \u0448\u043b\u044f\u043f\u0443 \u043a\u043e\u0442\u043e\u0440\u0443\u0435 \u0432\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438.\u0422\u043e\u043b\u044c\u043a\u043e \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u043c\u0441\u043a, \u0441\u043e\u0440\u044f\u043d \u043f\u043e \u0434\u0435\u0440\u0435\u0432\u043d\u044f\u043c \u043c\u044b \u043d\u0435 \u043a\u0430\u0442\u0430\u0435\u043c\u0441\u044f. \u041c\u043e\u0436\u0435\u043c \u0432 \u0432\u0430\u0448\u0443 \u0436\u043e\u043f\u0443 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0447\u0442\u043e\u0439 \u0438 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u043e\u0439,\u043d\u0443 \u043a\u0430\u043a \u0434\u043e\u0433\u043e\u0432\u0440\u0438\u043c\u0441\u044f \u0432\u043e\u043e\u0431\u0449\u0435\u043c. \u0422\u043e\u043a\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u0435\u0441\u043e \u0432\u043f\u0435\u0440\u0435\u0434!"),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("a",{href:"https://instagram.com/25_of_us"},r.a.createElement("i",{className:"fab fa-instagram fa-2x"}))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("a",{href:"https://vk.com"},r.a.createElement("i",{className:"fab fa-vk fa-2x"})))))}}]),a}(r.a.Component),k=function(e){var t={};return e.firstName.length<3&&(t.fName=1),e.secondName.length<3&&(t.sName=1),e.mobile.length<11&&(t.mob=1),e.email.length<5&&(t.email=1),6!==e.postIndex.length&&(t.pIndex=1),e.postAdress.length<10&&(t.pAdress=1),t},T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={firstName:"",secondName:"",mobile:"",email:"",postIndex:"",postAdress:"",comment:"",errors:{fName:null,sName:null,mob:null,email:null,pIndex:null,pAdress:null}},e.handelSubmit=function(t){t.preventDefault();var a=k(e.state);e.setState({errors:a}),console.log(a),0===Object.keys(a).length?e.props.setAlert("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0432\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435","red"):e.props.setAlert("\u0412\u0441\u0435 \u0442\u0443\u0442\u0438-\u0444\u0440\u0443\u0442\u0442\u0438","green")},e.formArea=function(){var t=e.state.errors,a=t.fName,n=t.sName,l=t.mob,c=t.email,i=t.pIndex,s=t.pAdress;return r.a.createElement("form",{style:{marginTop:15},onSubmit:e.handelSubmit,className:"ui form"},r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field ".concat(a?"error":null)},r.a.createElement("label",null,"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"),r.a.createElement("input",{onChange:function(t){return e.setState({firstName:t.target.value})},className:"name",placeholder:"\u0418\u043c\u044f",type:"text"})),r.a.createElement("div",{className:"field ".concat(n?"error":null)},r.a.createElement("label",null,"\u0412\u0430\u0448\u0430 \u0424\u0430\u043c\u0438\u043b\u0438\u044f"),r.a.createElement("input",{placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",onChange:function(t){return e.setState({secondName:t.target.value})},className:"name",type:"text"}))),r.a.createElement("div",{className:"field ".concat(l?"error":null)},r.a.createElement("label",null,"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440"),r.a.createElement("input",{id:"mobForm",onChange:function(t){return e.setState({mobile:t.target.value})},placeholder:"\u043d\u043e\u043c\u0435\u0440 \u0441\u043e\u0442\u043a\u0438",type:"text"})),r.a.createElement("div",{className:"field ".concat(c?"error":null)},r.a.createElement("label",null,"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430"),r.a.createElement("input",{id:"mobForm",onChange:function(t){return e.setState({email:t.target.value})},placeholder:"email",type:"email"})),r.a.createElement("div",{className:"field ".concat(i?"error":null)},r.a.createElement("label",null,"\u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441"),r.a.createElement("input",{id:"postId",onChange:function(t){return e.setState({postIndex:t.target.value})},placeholder:"\u0418\u043d\u0434\u0435\u043a\u0441",type:"text"})),r.a.createElement("div",{className:"field ".concat(s?"error":null)},r.a.createElement("label",null,"\u0410\u0434\u0440\u0435\u0441"),r.a.createElement("input",{onChange:function(t){return e.setState({postAdress:t.target.value})},placeholder:"\u0423\u043b\u0438\u0446\u0430, \u0434\u043e\u043c, \u0433\u043e\u0440\u043e\u0434",type:"text"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0437\u0430\u043a\u0430\u0437\u0443"),r.a.createElement("input",{placeholder:"\u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",onChange:function(t){return e.setState({comment:t.target.value})},type:"text"})),e.props.alert?r.a.createElement(v,null):r.a.createElement("h4",null," Total: ",e.props.total," \u0434\u0435\u043d\u0435\u0433"),r.a.createElement("button",{className:"ui primary button",type:"submit"},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"))},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui centered grid"},this.formArea())}}]),a}(r.a.Component),A=Object(i.b)((function(e){return{items:e.items,alert:e.alert}}),{setAlert:b})(T),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={clicked:!1},e.handeleSize=function(e){e.preventDefault()},e.handeleDelivery=function(t){e.setState({clicked:!e.state.clicked})},e.removeCart=function(t){e.props.removeFromCart(t),e.props.setAlert("\u0422\u043e\u0432\u0430\u0440 \u0443\u0434\u0430\u043b\u0435\u043d \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b","green")},e}return Object(o.a)(a,[{key:"EmptyCart",value:function(){return r.a.createElement("div",{style:{marginTop:50},className:"ui center aligned header"},r.a.createElement("h3",null,"  \u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u0432\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430:("))}},{key:"render",value:function(){var e=this,t=[];return this.newTotal=0,this.props.addItems&&(t=this.props.addItems.map((function(t){e.newTotal+=t.price;var a="";return a="M"===t.size?"L":"M",r.a.createElement("div",{className:"item ui centered grid",key:t.uid},r.a.createElement("div",{className:"eight wide column"},r.a.createElement("img",{className:"List",src:t.src})),r.a.createElement("div",{className:"five wide column itemDesc"},r.a.createElement("h3",null,"Item Name here"),r.a.createElement("p",{className:""}," \u0420\u0430\u0437\u043c\u0435\u0440:",r.a.createElement("select",{onChange:function(t){return e.handeleSize(t)},className:"ui dropdown"},r.a.createElement("option",{value:t.size},t.size),r.a.createElement("option",{value:a},a))," "),r.a.createElement("p",{className:""},"\u0426\u0435\u043d\u0430 ",t.price),r.a.createElement("button",{onClick:function(a){return e.removeCart(t.uid)},type:"button",className:"ui button red"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))}))),this.clicked=!1,this.props.addItems.length>0?r.a.createElement("div",null,r.a.createElement("div",{style:{marginTop:40},className:"ui middle aligned divided list"},this.props.alert?r.a.createElement(v,null):null,t),r.a.createElement("div",{className:"content"},r.a.createElement("h4",null," Total: ",this.newTotal," \u0434\u0435\u043d\u0435\u0433")),r.a.createElement("div",{className:"ui attached message centered grid"},r.a.createElement("div",{onClick:this.handeleDelivery,className:"ui header"},"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"),this.state.clicked?r.a.createElement(A,{total:this.newTotal}):null)):this.EmptyCart()}}]),a}(r.a.Component),x=Object(i.b)((function(e){return{addItems:e.cart,alert:e.alert}}),{removeFromCart:function(e){return{type:"REMOVE_ITEM",payload:{uid:e}}},setAlert:b})(C),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(E,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:g}),r.a.createElement(p.a,{exact:!0,path:"/cart",component:x}),r.a.createElement(p.a,{exact:!0,path:"/about",component:O}),r.a.createElement(p.a,{exact:!0,path:"/delivery",component:j}),r.a.createElement(p.a,{exact:!0,path:"/submit",component:A}))),r.a.createElement(y,null))}}]),a}(r.a.Component),S=a(30),I=a(31),z=a(11),D=a(12),_=a.n(D),M=a(19),R=a.n(M),L=a(20),B=a.n(L),F={items:[{id:1,title:"Black hoodie",desc:"Top hoodie for everyone",price:3200,src:_.a},{id:2,title:"White hoodie",desc:"Top hoodie for everyone",price:3200,src:R.a},{id:3,title:"Black pants",desc:"Top pants for everyone",price:2400,src:_.a},{id:4,title:"White pants",desc:"Top pants for everyone",price:2400,src:B.a}]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F;return e},V=a(21),J=[],P=[{id:1,title:"Black hoodie",desc:"Top hoodie for everyone",price:3200,src:_.a},{id:2,title:"White hoodie",desc:"Top hoodie for everyone",price:3200,src:R.a},{id:3,title:"Black pants",desc:"Top pants for everyone",price:2400,src:_.a},{id:4,title:"White pants",desc:"Top pants for everyone",price:2400,src:B.a}],U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_ITEM":var r=P.find((function(e){return e.id===n.id}));return r.size=n.size,r.uid=n.uid,[].concat(Object(V.a)(e),[r]);case"REMOVE_ITEM":return e.filter((function(e){return e.uid!==n.uid}));default:return e}},q=[],G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_ALERT":return[].concat(Object(V.a)(e),[n]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==n}));default:return e}},H=Object(z.combineReducers)({items:W,cart:U,alert:G}),K=Object(z.createStore)(H,Object(I.composeWithDevTools)(Object(z.applyMiddleware)(S.a))),Q=document.getElementById("root");c.a.render(r.a.createElement(i.a,{store:K},r.a.createElement(w,null)),Q)}},[[33,1,2]]]);
//# sourceMappingURL=main.b9d73665.chunk.js.map