(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(8),r=n.n(o),c=(n(18),n(1)),s=n(2),u=n(4),i=n(3);n(19),n(20),n(21);function m(){return l.a.createElement("footer",null,l.a.createElement("h3",null,"@ 2018 Code Fellows"))}n(22);function h(){return l.a.createElement("header",null,l.a.createElement("h1",null,"RESTy"))}var d=n(6),p=n.n(d),f=n(12),E=n(9),b=n(10),v=n(11),g=n.n(v),y=(n(109),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).fetchData=function(){console.log("fetch",a.state.methodtemp,a.state.urltemp),fetch(a.state.urltemp,{methodtemp:a.state.methodtemp||"get",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(b.a)(p.a.mark((function e(t){var n,l,o,r,c,s,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},l=Object(E.a)(t.headers.entries());try{for(l.s();!(o=l.n()).done;)r=Object(f.a)(o.value,2),c=r[0],s=r[1],n[c]=s}catch(i){l.e(i)}finally{l.f()}return e.next=5,t.json();case 5:u=e.sent,a.setState({responseJson:{Headers:n,Response:u}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},a.handleClickGO=function(e){e.preventDefault(),console.log("before",a.state),a.setState({_method:a.state.methodtemp}),a.setState({url:a.state.urltemp}),console.log("after",a.state),a.fetchData()},a.handleInputmethod=function(e){var t=e.target.value;console.log("method : ",t),a.setState({methodtemp:t})},a.handleInput=function(e){var t=e.target.value;console.log("url : ",t),a.setState({urltemp:t})},a.state={urltemp:"",methodtemp:"",url:"",_method:"",responseJson:{}},a}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleClickGO},l.a.createElement("label",null,"URL ",l.a.createElement("input",{onChange:this.handleInput})),l.a.createElement("button",{type:"submit"},"GO"),l.a.createElement("br",null),l.a.createElement("label",{id:"label",htmlFor:"get"}," ",l.a.createElement("input",{onChange:this.handleInputmethod,className:"radio-in",type:"radio",id:"get",name:"btnselect",value:"get"}),"GET"),l.a.createElement("label",{id:"label",htmlFor:"post"}," ",l.a.createElement("input",{onChange:this.handleInputmethod,className:"radio-in",type:"radio",id:"post",name:"btnselect",value:"post"}),"POST"),l.a.createElement("label",{id:"label",htmlFor:"put"}," ",l.a.createElement("input",{onChange:this.handleInputmethod,className:"radio-in",type:"radio",id:"put",name:"btnselect",value:"put"}),"PUT"),l.a.createElement("label",{id:"label",htmlFor:"delete"}," ",l.a.createElement("input",{onChange:this.handleInputmethod,className:"radio-in",type:"radio",id:"delete",name:"btnselect",value:"delete"}),"DELETE")),l.a.createElement("section",null,l.a.createElement("h3",null,this.state._method," ",this.state.url),l.a.createElement(g.a,{json:this.state.responseJson})))}}]),n}(l.a.Component)),O=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(y,null),l.a.createElement(m,null))}}]),n}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},13:function(e,t,n){e.exports=n(110)},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.c83f2d84.chunk.js.map