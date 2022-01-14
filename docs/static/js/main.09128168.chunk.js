(this["webpackJsonpticket-app"]=this["webpackJsonpticket-app"]||[]).push([[0],{204:function(e,t,a){e.exports=a(392)},209:function(e,t,a){},235:function(e,t){},392:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=(a(209),a(31)),i=a(175),u=a.n(i),m=Object(n.createContext)(),s=function(e){var t=e.children,a=function(e){var t=Object(n.useMemo)((function(){return u.a.connect(e)}),[e]),a=Object(n.useState)(!1),r=Object(o.a)(a,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){l(t.connected)}),[t]),Object(n.useEffect)((function(){t.on("connect",(function(){l(!0)}))}),[t]),Object(n.useEffect)((function(){t.on("disconnect",(function(){l(!1)}))}),[t]),{socket:t,online:c}}("https://ticket-queue-socketio-server.herokuapp.com"),c=a.socket,l=a.online;return r.a.createElement(m.Provider,{value:{socket:c,online:l}},t)},E=Object(n.createContext)(),p=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(o.a)(a,2),l=c[0],i=c[1];return r.a.createElement(E.Provider,{value:{ocultarMenu:l,showMenu:function(){i(!1)},hideMenu:function(){i(!0)}}},t)},f=a(394),g=a(400),b=a(407),d=a(408),h=a(409),k=a(63),j=a(24),v=a(399),O=a(393),y=a(398),I=a(401),S=a(397),x=a(143),C=a(403),T=function(e){var t=Object(n.useContext)(E),a=t.showMenu,r=t.hideMenu;Object(n.useEffect)((function(){e?r():a()}),[e,r,a])},w=function(){return{agente:localStorage.getItem("agente"),escritorio:localStorage.getItem("escritorio")}},F=v.a.Title,M=v.a.Text,N={labelCol:{span:8},wrapperCol:{span:14}},q={wrapperCol:{offset:8,span:14}},P=function(){var e=Object(j.g)(),t=Object(n.useState)(w()),a=Object(o.a)(t,1)[0];T(!1);return a.agente&&a.escritorio?r.a.createElement(j.a,{to:"/escritorio"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{level:2},"Ingresar"),r.a.createElement(M,null,"Ingrese su nombre y n\xfamero de escritorio"),r.a.createElement(O.a,null),r.a.createElement(y.a,Object.assign({},N,{name:"basic",initialValues:{remember:!0},onFinish:function(t){var a=t.agente,n=t.escritorio;localStorage.setItem("agente",a),localStorage.setItem("escritorio",n),e.push("/escritorio")},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(y.a.Item,{label:"Nombre del agente",name:"agente",rules:[{required:!0,message:"Por favor ingrese su nombre"}]},r.a.createElement(I.a,null)),r.a.createElement(y.a.Item,{label:"Escritorio",name:"escritorio",rules:[{required:!0,message:"Ingrese el n\xfamero de escritorio"}]},r.a.createElement(S.a,{min:1,max:99})),r.a.createElement(y.a.Item,q,r.a.createElement(x.a,{type:"primary",htmlType:"submit",shape:"round"},r.a.createElement(C.a,null),"Ingresar"))))},z=a(80),A=a(49),H=a(396),J=a(395),B=a(402),K=a(44),U=a.n(K),V=a(68),W=function(){var e=Object(V.a)(U.a.mark((function e(){var t,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://ticket-queue-socketio-server.herokuapp.com","/ultimos"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.ultimos);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=v.a.Title,G=v.a.Text,L=function(){T(!0);var e=Object(n.useContext)(m).socket,t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){return e.on("ticket-asignado",(function(e){l(e)})),function(){e.off("ticket-asignado")}}),[e]),Object(n.useEffect)((function(){W().then(l)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{level:1},"Atendiendo al cliente"),r.a.createElement(z.a,null,r.a.createElement(A.a,{span:12},r.a.createElement(H.b,{dataSource:c.slice(0,3),renderItem:function(e){return r.a.createElement(H.b.Item,null,r.a.createElement(J.a,{style:{width:300,marginTop:16},actions:[r.a.createElement(B.a,{color:"volcano"}," ",e.agente," "),r.a.createElement(B.a,{color:"magenta"}," Escritorio: ",e.escritorio," ")]},r.a.createElement(D,null," No. ",e.numero)))}})),r.a.createElement(A.a,{span:12},r.a.createElement(O.a,null," Historial "),r.a.createElement(H.b,{dataSource:c.slice(3),renderItem:function(e){return r.a.createElement(H.b.Item,null,r.a.createElement(H.b.Item.Meta,{title:"Ticket No. ".concat(e.numero),description:r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{type:"secondary"},"En el escritorio: "),r.a.createElement(B.a,{color:"magenta"}," ",e.numero," "),r.a.createElement(G,{type:"secondary"}," Agente: "),r.a.createElement(B.a,{color:"volcano"}," ",e.agente," "))}))}}))))},Q=a(404),R=v.a.Title,X=v.a.Text,Y=function(){T(!0);var e=Object(n.useContext)(m).socket,t=Object(n.useState)(null),a=Object(o.a)(t,2),c=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,null,r.a.createElement(A.a,{span:14,offset:6,align:"center"},r.a.createElement(R,{level:3},"Presione el bot\xf3n para un nuevo ticket"),r.a.createElement(x.a,{type:"primary",shape:"round",icon:r.a.createElement(Q.a,null),size:"large",onClick:function(){e.emit("solicitar-ticket",null,(function(e){l(e)}))}},"Nuevo Ticket"))),c&&r.a.createElement(z.a,{style:{marginTop:100}},r.a.createElement(A.a,{span:14,offset:6,align:"center"},r.a.createElement(X,{level:2},"Su n\xfamero"),r.a.createElement("br",null),r.a.createElement(X,{type:"success",style:{fontSize:55}},c.numero))))},Z=a(405),$=a(406),_=v.a.Title,ee=v.a.Text,te=function(){T(!1);var e=Object(n.useState)(w()),t=Object(o.a)(e,1)[0],a=Object(n.useContext)(m).socket,c=Object(n.useState)(null),l=Object(o.a)(c,2),i=l[0],u=l[1],s=Object(j.g)();return t.agente&&t.escritorio?r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,null,r.a.createElement(A.a,{span:20},r.a.createElement(_,{level:2},t.agente),r.a.createElement(ee,null,"Usted est\xe1 trabajando en el escritorio: "),r.a.createElement(ee,{type:"success"}," ",t.escritorio," ")),r.a.createElement(A.a,{span:4,align:"right"},r.a.createElement(x.a,{shape:"round",type:"danger",onClick:function(){localStorage.clear(),s.replace("/ingresar")}},r.a.createElement(Z.a,null),"Salir"))),r.a.createElement(O.a,null),i&&r.a.createElement(z.a,null,r.a.createElement(A.a,null,r.a.createElement(ee,null,"Est\xe1 atendiendo el ticket n\xfamero: "),r.a.createElement(ee,{style:{fontSize:30},type:"danger"},i.numero))),r.a.createElement(z.a,null,r.a.createElement(A.a,{offset:18,span:6,align:"right"},r.a.createElement(x.a,{onClick:function(){a.emit("siguiente-ticket-trabajar",t,(function(e){u(e)}))},shape:"round",type:"primary"},r.a.createElement($.a,null),"Siguiente")))):r.a.createElement(j.a,{to:"/ingresar"})},ae=f.a.Sider,ne=f.a.Content,re=function(){var e=Object(n.useContext)(E).ocultarMenu;return r.a.createElement(k.a,null,r.a.createElement(f.a,{style:{height:"100vh"}},r.a.createElement(ae,{collapsedWidth:"0",breakpoint:"md",hidden:e},r.a.createElement("div",{className:"logo"}),r.a.createElement(g.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},r.a.createElement(g.a.Item,{key:"1",icon:r.a.createElement(b.a,null)},r.a.createElement(k.b,{to:"/ingresar"},"Ingresar")),r.a.createElement(g.a.Item,{key:"2",icon:r.a.createElement(d.a,null)},r.a.createElement(k.b,{to:"/cola"},"Cola de tickets")),r.a.createElement(g.a.Item,{key:"3",icon:r.a.createElement(h.a,null)},r.a.createElement(k.b,{to:"/crear"},"Crear tickets")))),r.a.createElement(f.a,{className:"site-layout"},r.a.createElement(ne,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280}},r.a.createElement(j.d,null,r.a.createElement(j.b,{path:"/ingresar",component:P}),r.a.createElement(j.b,{path:"/cola",component:L}),r.a.createElement(j.b,{path:"/crear",component:Y}),r.a.createElement(j.b,{path:"/escritorio",component:te}),r.a.createElement(j.a,{to:"/ingresar"}))))))},ce=function(){return r.a.createElement(s,null,r.a.createElement(p,null,r.a.createElement(re,null)))};a(388).config(),l.a.render(r.a.createElement(ce,null),document.getElementById("root"))}},[[204,1,2]]]);
//# sourceMappingURL=main.09128168.chunk.js.map