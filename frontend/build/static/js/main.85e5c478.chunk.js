(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),s=a.n(l);a(72),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(73);var o=a(20),i=a.n(o),c=a(28),u=a(14),m=a(15),d=a(17),p=a(16),g=a(36),h=a(18),b=a(30),E=a(12),v=a(25),f=a.n(v),S=a(26),w=a.n(S),C=a(111),y=a(110),I=(a(94),a(11)),k=a(23),O=a(37),j=a(38),N=a(33),L=a(5),x=a(43),B=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object(O.a)({},e,t.target.value))}},a.handleSubmit=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({loading:!0}),n={email:a.state.email,password:a.state.password},e.prev=3,e.next=6,f.a.post("/api/login",n);case 6:r=e.sent,l=r.data.token,localStorage.setItem("jwtToken",l),a.setState({loading:!1,loggedIn:!0}),a.props.onToggleLogin(a.state.loggedIn),console.log("10"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0),a.setState({loading:!1,error:"Login Failed"});case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",password:"",loading:!1,loggedIn:!1,error:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("jwtToken");e&&(console.log("token",e),w()(e)&&(this.setState({loggedIn:!0}),console.log("11")))}},{key:"render",value:function(){return console.log(this.props),!0===this.state.loggedIn?r.a.createElement(k.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement(N.a,null,r.a.createElement(N.a.Body,null,r.a.createElement("p",null,r.a.createElement(I.b,{to:"/"},"Close")),r.a.createElement(L.a,{onSubmit:this.handleSubmit},r.a.createElement(L.a.Group,{controlId:"formGroupEmail"},r.a.createElement(L.a.Label,null,"Email address"),r.a.createElement(L.a.Control,{type:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleChange("email")})),r.a.createElement(L.a.Group,{controlId:"formGroupPassword"},r.a.createElement(L.a.Label,null,"Password"),r.a.createElement(L.a.Control,{type:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange("password")})),this.state.loading?r.a.createElement(E.a,{variant:"primary",disabled:!0},r.a.createElement(b.a,{as:"span",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):r.a.createElement(E.a,{variant:"primary",type:"submit"},"Submit")),this.state.error?r.a.createElement(x.a,{variant:"danger"},this.state.error):r.a.createElement(r.a.Fragment,null)))))}}]),t}(r.a.Component),U=Object(k.g)(B),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object(O.a)({},e,t.target.value))}},a.handleSubmit=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.setState({loading:!0}),a.state.password===a.state.password2){e.next=6;break}a.setState({loading:!1,msg:"Passwords don't match"}),e.next=17;break;case 6:return n={name:a.state.name,email:a.state.email,password:a.state.password},e.prev=7,e.next=10,f.a.post("/api/register",n);case 10:a.setState({loading:!1,msg:"Registration Successful."}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(7),console.log(e.t0),a.setState({loading:!1,msg:"Registration Failed."});case 17:case"end":return e.stop()}}),e,null,[[7,13]])})));return function(t){return e.apply(this,arguments)}}(),a.state={name:"",email:"",password:"",password2:"",loading:!1,error:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("jwtToken");e&&(console.log("token",e),console.log(e),w()(e)&&this.setState({loggedIn:!0}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement(N.a,null,r.a.createElement(N.a.Body,null,r.a.createElement("p",null,r.a.createElement(I.b,{to:"/"},"Close")),r.a.createElement(L.a,{onSubmit:this.handleSubmit},r.a.createElement(L.a.Group,{controlId:"formGroupEmail"},r.a.createElement(L.a.Label,null,"Name"),r.a.createElement(L.a.Control,{type:"text",placeholder:"Enter name",value:this.state.name,onChange:this.handleChange("name")})),r.a.createElement(L.a.Group,{controlId:"formGroupEmail"},r.a.createElement(L.a.Label,null,"Email address"),r.a.createElement(L.a.Control,{type:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleChange("email")})),r.a.createElement(L.a.Group,{controlId:"formGroupPassword"},r.a.createElement(L.a.Label,null,"Password"),r.a.createElement(L.a.Control,{type:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange("password")})),r.a.createElement(L.a.Group,{controlId:"formGroupPassword"},r.a.createElement(L.a.Label,null,"Confirm Password"),r.a.createElement(L.a.Control,{type:"password",placeholder:"Confirm Password",value:this.state.password2,onChange:this.handleChange("password2")})),this.state.loading?r.a.createElement(E.a,{variant:"primary",disabled:!0},r.a.createElement(b.a,{as:"span",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):r.a.createElement(E.a,{variant:"primary",type:"submit"},"Submit")),this.state.msg?r.a.createElement(x.a,{variant:"danger"},this.state.msg):r.a.createElement(r.a.Fragment,null)))))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.order;return r.a.createElement("div",{className:"shadow rounded-20 orderList card text-white bg-dark mb-3 rounded-2"},r.a.createElement("div",{className:" card-header border-primary"},e.title),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},e.price)))}}]),t}(n.Component),$=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.orders.map((function(e,t){return r.a.createElement(T,{key:t,order:e,index:t})}));return this.props.loggedIn?r.a.createElement("div",{id:"ordercardList",className:"container"},e):r.a.createElement(k.a,{to:"/login"})}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).logout=function(e){a.state.loggedIn&&(e.preventDefault(),localStorage.removeItem("jwtToken"),a.setState({loggedIn:!1,signUpStatus:"Sign Up"}))},a.handlePriceChange=function(e){a.setState({priceInput:e.target.value})},a.placeBuy=function(){var e=a.state.priceInput;if(isNaN(e)||0===e.length)alert("Please enter a number!");else{alert("Successfully placed order of $"+e+" BTC!");var t={title:"$"+e,price:"BUY"},n=a.state.orders;n.unshift(t);var r=parseInt(a.state.invest);r=(r+=parseInt(e)).toString(),a.setState({orders:n,priceInput:"",invest:r})}},a.placeSell=function(){var e=a.state.priceInput;if(isNaN(e)||0===e.length)alert("Please enter a number!");else{alert("Successfully placed order of $"+e+" BTC!");var t={title:"$"+e,price:"SELL"},n=a.state.orders;n.unshift(t);var r=parseInt(a.state.invest);r=(r-=parseInt(e)).toString(),a.setState({orders:n,priceInput:"",invest:r})}},a.navbar=function(){var e;return e=a.state.loggedIn?r.a.createElement(I.b,{to:"/",onClick:a.logout},r.a.createElement(E.a,{variant:"outline-light",className:"navbtnn"},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(I.b,{to:"/login"},r.a.createElement(E.a,{variant:"outline-light",className:"navbtnn"},"Login")),r.a.createElement(I.b,{to:"/register"},r.a.createElement(E.a,{variant:"outline-light",className:"navbtnn"},a.state.signUpStatus))),r.a.createElement(C.a,{sticky:"top",className:"theNav",variant:"dark",expand:"lg"},r.a.createElement(C.a.Brand,{className:"navbar-brand mb-0 h1",href:"#home"},"Crypto Watch"),r.a.createElement(C.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(C.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(y.a,{className:"mr-auto"}),r.a.createElement(y.a,null,r.a.createElement(I.b,{to:"/"},r.a.createElement(E.a,{variant:"outline-light",className:"navbtnn"},"Home")),r.a.createElement(I.b,{to:"/orders"},r.a.createElement(E.a,{variant:"outline-light",className:"navbtnn"},"Orders")),e)))},a.formInput=function(){return r.a.createElement("form",null,r.a.createElement("input",{className:"form-control form-control-lg btcEnter",placeholder:"Enter BTC Price $",type:"text",name:"order",value:a.state.priceInput,onChange:a.handlePriceChange}),r.a.createElement("input",{onClick:a.placeBuy,className:"btn btn-primary placeOrder btn-sm",type:"button",value:"Store Buy Order"}),"\xa0\xa0",r.a.createElement("input",{onClick:a.placeSell,className:"btn btn-primary placeOrder btn-sm",type:"button",value:"Store Sell Order"}))},a.setLoginStatus=function(e){a.setState({loggedIn:e}),e?a.setState({loginStatus:"Logout",signUpStatus:""}):a.setState({loginStatus:"Login",signUpStatus:"Sign Up"})},a.registerRoutes=function(){return r.a.createElement("div",{className:"auth-box"},r.a.createElement(k.d,null,r.a.createElement(k.b,{path:"/login"},r.a.createElement(U,{onToggleLogin:a.setLoginStatus})),r.a.createElement(k.b,{path:"/register"},r.a.createElement(P,null)),r.a.createElement(k.b,{path:"/home"},r.a.createElement(t,null)),r.a.createElement(k.b,{path:"/"})))},a.setLoginStatus=a.setLoginStatus.bind(Object(g.a)(a)),a.state={loading:!0,user:null,loggedIn:!1,msg:"",orders:[{title:"$5",price:"SELL"},{title:"$50",price:"BUY"},{title:"$200",price:"SELL"},{title:"$20",price:"BUY"},{title:"$100",price:"BUY"},{title:"$150",price:"BUY"}],price:"",priceInput:"",loginStatus:"",signUpStatus:"Sign Up",invest:"115"},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(i.a.mark((function e(){var t,a,n=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("jwtToken")){e.next=5;break}this.setState({loading:!1,loggedIn:!1,signUpStatus:"Sign Up"}),e.next=18;break;case 5:if(!this.state.loading){e.next=18;break}return e.prev=6,e.next=9,f.a.get("/api/protected",{headers:{Authorization:"Bearer ".concat(t)}});case 9:a=e.sent,console.log(a.data),this.setState({loading:!1,loggedIn:!0,signUpStatus:"",user:w()(t,{header:!0}),msg:a.data.msg}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0),this.setState({loading:!1,loggedIn:!0,user:w()(t,{header:!0}),msg:"The protected route failed :( Check console for errors",signUpStatus:""});case 18:return e.next=20,f.a.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(e){e=e.data,n.setState({price:e.bpi.USD.rate})})).catch((function(e){console.error(e)}));case 20:case"end":return e.stop()}}),e,this,[[6,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement(b.a,{as:"span",size:"lg",role:"status","aria-hidden":"true"}):r.a.createElement("div",{className:"App"},r.a.createElement(I.a,null,r.a.createElement(k.d,null,r.a.createElement(k.b,{path:"/register"},this.navbar(),r.a.createElement(P,null)),r.a.createElement(k.b,{path:"/login"},this.navbar(),r.a.createElement(U,{onToggleLogin:this.setLoginStatus})),r.a.createElement(k.b,{path:"/orders"},r.a.createElement("div",{className:"OrderTable App"},this.navbar(),r.a.createElement("h1",{className:"portfolio"},"Investing in BTC: $",this.state.invest),r.a.createElement($,{loggedIn:this.state.loggedIn,orders:this.state.orders}))),r.a.createElement(k.b,{path:"/"},this.navbar(),this.registerRoutes(),r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:""},"Crypto Watch"),r.a.createElement("img",{src:"https://bit.ly/2NAyCIX",className:"HeaderImg",alt:"Header"})),r.a.createElement("div",{className:"priceView"},r.a.createElement("h1",null,"Current BTC Price: $",this.state.price.substring(0,this.state.price.indexOf("."))),this.formInput())))))}}]),t}(n.Component);s.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e,t,a){e.exports=a(107)},72:function(e,t,a){},94:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.85e5c478.chunk.js.map