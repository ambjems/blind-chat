(this.webpackJsonpfirebase_crud=this.webpackJsonpfirebase_crud||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/delete.ee46ca53.svg"},17:function(e,t,a){e.exports=a.p+"static/media/send.02511973.svg"},18:function(e,t,a){e.exports=a.p+"static/media/reply.293aaae5.svg"},19:function(e,t,a){e.exports=a.p+"static/media/cancel.98d54ace.svg"},20:function(e,t,a){e.exports=a(39)},25:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),l=a(13),r=a.n(l);a(25);function i(){return c.a.createElement("div",{style:{height:"20vh",width:"50vw",backgroundColor:"#B3D3EA",margin:"auto"}},c.a.createElement("div",{style:{width:"35%",margin:"auto"}},c.a.createElement("p",{style:{margin:0}},"welcome to"),c.a.createElement("h1",null,"blind chat"),c.a.createElement("p",{style:{margin:0}},"powered by memers academy")))}var o=a(11),s=a.n(o),d=a(14),u=a(7),m=a(8),g=a(15).initializeApp({apiKey:"AIzaSyC9W5cYsUEf_5agt2ftKCETzaBmYeckLhs",authDomain:"fir-crud-ae48f.firebaseapp.com",databaseURL:"https://blind-chat-1c200-default-rtdb.firebaseio.com/",projectId:"fir-crud-ae48f",storageBucket:"fir-crud-ae48f.appspot.com",messagingSenderId:"724765812562",appId:"1:724765812562:web:bf74f6ea635fbd654b7c8b"}).database().ref(),p=a(16),h=a.n(p),f=a(17),y=a.n(f),b=a(18),E=a.n(b),v=a(19),w=a.n(v);a(38);function x(){var e=Object(n.useState)({message:"",dateTime:"",repliedTo:""}),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)({}),i=Object(m.a)(r,2),o=i[0],p=i[1],f=Object(n.useState)(!0),b=Object(m.a)(f,2),v=b[0],x=b[1],k=Object(n.useState)(""),C=Object(m.a)(k,2),I=C[0],j=C[1];Object(n.useEffect)((function(){B()}),[]);var B=function(){g.child("chats-new").on("value",(function(e){var t=document.getElementById("messageBody");t.scrollTop=t.scrollHeight,null!=e.val()?(p(Object(u.a)({},e.val())),x(!1)):(p({}),x(!1))}))},O=function(){var e=Object(d.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),document.getElementById("messageInput").focus(),a.message?g.child("chats-new").push(a)&&(l({message:"",dateTime:"",repliedTo:""}),j("")):alert("Empty message can not be sent."),(n=document.getElementById("messageBody")).scrollTop=n.scrollHeight;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{style:{height:"80vh",width:"50vw",backgroundColor:"#b2e8be",margin:"auto"}},c.a.createElement("div",{style:{height:"75%",padding:"2% 0 2% 2%"}},c.a.createElement("div",{id:"messageBody",style:{height:"100%",width:"100%",padding:"0 0 8% 0",overflow:"scroll",overflowX:"hidden"}},Object.keys(o).length>0?Object.keys(o).map((function(e){return c.a.createElement("div",{key:e,style:{backgroundColor:"#ffffff",borderRadius:"5px",marginBottom:"2px",display:"flex"}},c.a.createElement("div",{style:{width:"85%",height:"auto",wordWrap:"break-word"}},c.a.createElement("p",{style:{margin:"0",padding:"2px",fontSize:"12px",fontWeight:"bold"}},o[e].repliedTo),c.a.createElement("p",{style:{margin:"0",padding:"2px"}},o[e].message)),c.a.createElement("div",{style:{width:"15%",display:"flex",flexDirection:"column",alignItems:"center"}},c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("img",{src:h.a,alt:"Delete",height:"20",onClick:function(){var t;t=e,window.confirm("Are you sure to delete this message?")&&g.child("chats-new/".concat(t)).remove(),document.getElementById("messageInput").focus()},style:{cursor:"pointer"}}),c.a.createElement("img",{src:E.a,alt:"Delete",height:"20",onClick:function(){var t;t=o[e].message,l(Object(u.a)({},a,{repliedTo:t})),j(t),document.getElementById("messageInput").focus()},style:{cursor:"pointer"}})),c.a.createElement("p",{style:{margin:"0",padding:"2px",textAlign:"right",fontSize:"10px"}},o[e].dateTime)))})):v?c.a.createElement("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement("p",null,"Loading...Please wait !")):c.a.createElement("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement("p",null,"No messages in the conversation.")))),""!==I?c.a.createElement("div",{style:{padding:"0 2% 0 2%",backgroundColor:"#B3D3EA",width:"100%",overflow:"hidden",wordWrap:"break-word",height:"7%",display:"flex",justifyContent:"space-between"}},I.length>50?c.a.createElement("p",null,c.a.createElement("b",null,"Replying to:")," ",I.substring(0,40),".......",I.slice(I.length-10)):c.a.createElement("p",null,c.a.createElement("b",null,"Replying to:")," ",I),c.a.createElement("img",{src:w.a,height:"20",alt:"cancel",style:{cursor:"pointer"},onClick:function(){j(""),l(Object(u.a)({},a,{repliedTo:""})),document.getElementById("messageInput").focus()}})):c.a.createElement("div",{style:{height:"7%"}}),c.a.createElement("div",{style:{height:"7%",backgroundColor:"#B3D3EA",marginBottom:"-0.5%"}},c.a.createElement("form",null,c.a.createElement("input",{type:"text",name:"message",id:"messageInput",value:a.message,onChange:function(e){var t=new Date,n=[t.getDate(),t.getMonth()+1,t.getFullYear(),t.getHours(),t.getMinutes()],c=n[0],r=n[1],i=n[2],o=n[3],s=n[4];c<10&&(c="0".concat(c)),r<10&&(r="0".concat(r)),o<10&&(o="0".concat(o)),s<10&&(s="0".concat(s));var d="".concat(c,"/").concat(r,"/").concat(i," ").concat(o,":").concat(s);l(Object(u.a)({},a,{message:e.target.value,dateTime:d})),g.child("chats-new").on("value",(function(e){null!=e.val()?p(Object(u.a)({},e.val())):p({})}))},autoFocus:!0,placeholder:"Type your message and hit ENTER...",onKeyPress:function(e){13===e.keyCode&&O()},style:{width:"90%",padding:"2px",borderRadius:"5px",border:"1px solid black"}}),c.a.createElement("button",{style:{width:"10%",padding:"2px",backgroundColor:"#B3D3EA",borderRadius:"5px",border:"1px solid black"},onClick:O},c.a.createElement("img",{src:y.a,alt:"Delete",height:"20"})))),c.a.createElement("div",{style:{height:"11.5%",width:"50vw",backgroundColor:"#EFF4F0",margin:"auto",display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement("button",{style:{width:"25%",padding:"2px",backgroundColor:"#B3D3EA",borderRadius:"5px",border:"1px solid black"},onClick:function(){window.confirm("Are you sure to clear all the chats?")&&g.child("chats-new").remove(),document.getElementById("messageInput").focus(),j("")}},"Clear all the chats")))}var k=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement(x,null))},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)}))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),C()}},[[20,1,2]]]);
//# sourceMappingURL=main.16d7da92.chunk.js.map