(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{46:function(e,t,a){e.exports=a(57)},51:function(e,t,a){},53:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=(a(51),a(30)),l=a.n(i),s=a(37),u=a(22),m=a(94),p=a(104),d=a(102),h=a(101),f=a(103),g=a(100),b=a(59),v=a(105),w=(a(53),a(97)),x=a(99),E=Object(m.a)((function(e){return{card:{width:"100%",marginTop:e.spacing(1),marginBottom:"15px",background:"#f7f7f7",boxShadow:"0px 2px 2px 1px rgba(13, 15, 47, 0.924)"}}})),y=function(e){var t=E(),a=e.data;return r.a.createElement(w.a,{className:t.card},r.a.createElement(x.a,null,r.a.createElement(b.a,{variant:"h5",className:t.cardTitle},a.city,", ",a.country),r.a.createElement(b.a,{variant:"h5",component:"h2"},"Current Condition: ",a.condition,", ",a.description),r.a.createElement(b.a,{variant:"h5",component:"h2"},"Today's Temperature: ",a.temperature,"\u2109")))},j=Object(m.a)((function(e){return{container:{width:"100%"},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1),marginBottom:"15px",background:"#f7f7f7",boxShadow:"0px 2px 2px rgba(13, 15, 47, 0.924)"},title:{width:"100%",color:"slategrey"},textfield:{marginLeft:"5% "},submit:{margin:e.spacing(3,30.1,2)},card:{width:"100%"},footerLink:{textDecoration:"none",color:"slategrey",alignItems:"center",width:"100%"}}}));var O=function(){var e=j(),t=Object(n.useState)({}),a=Object(u.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),m=Object(u.a)(i,2),w=m[0],x=m[1],E=Object(n.useState)(""),O=Object(u.a)(E,2),N=O[0],k=O[1],S=Object(n.useState)(""),C=Object(u.a)(S,2),T=C[0],q=C[1],I=Object(n.useState)(!1),L=Object(u.a)(I,2),B=L[0],W=L[1],D=function(){var e=Object(s.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(w,T),e.next=4,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(w,",").concat(T,"&units=imperial&appid=8e0be2251dae4a629c7358238b2f7c60"));case 4:(a=e.sent).ok?(a.json().then((function(e){return o({data:c,city:w,country:T.toUpperCase(),condition:e.weather[0].main,description:e.weather[0].description,temperature:Math.round(e.main.temp)})}),W(!0)),k("")):(o({data:"",city:"",country:"",condition:"",description:"",temperature:""}),k("Invalid City or Country"),W(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(B),r.a.createElement(g.a,{className:e.container,maxWidth:"xs"},r.a.createElement("div",{className:e.paper},r.a.createElement("form",{className:e.form,onSubmit:D},r.a.createElement(h.a,{className:e.title},r.a.createElement(b.a,{variant:"h2"},"Weather App")),r.a.createElement(p.a,{className:e.textfield,id:"standard-required",label:"City",value:w,onChange:function(e){x(e.target.value)},inputProps:{maxLength:20},required:!0}),r.a.createElement(p.a,{className:e.textfield,id:"standard-required",label:"Country",value:T,onChange:function(e){q(e.target.value)},inputProps:{maxLength:20},required:!0}),r.a.createElement("br",null),r.a.createElement(d.a,{className:e.submit,variant:"contained",color:"default",endIcon:r.a.createElement(f.a,null,"send"),type:"submit"},"Send")),B?r.a.createElement(y,{className:e.card,data:c}):null,""===N?null:r.a.createElement(v.a,{variant:"filled",severity:"error"},N),r.a.createElement("hr",null),r.a.createElement(b.a,null,r.a.createElement("a",{className:e.footerLink,href:"https://sohanpatel.codes"},"by sohan patel"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.0b0a1aef.chunk.js.map