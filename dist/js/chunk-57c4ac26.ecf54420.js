(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57c4ac26"],{"79df":function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),a=function(e){return Object(n["x"])("data-v-17ef7518"),e=e(),Object(n["v"])(),e},s={class:"row"},r={class:"col-md-8 col-xl-6 chat"},u={key:0,class:"card",id:"body"},i={class:"card-header msg_head"},l={class:"d-flex bd-highlight"},o={class:"img_cont"},b=["src"],g=a((function(){return Object(n["g"])("span",{class:"online_icon"},null,-1)})),d={class:"user_info"},j={key:0},O=a((function(){return Object(n["g"])("i",{class:"fas fa-ellipsis-v"},null,-1)})),f=[O],m={class:"action_menu menu-toggle"},p=a((function(){return Object(n["g"])("li",null,[Object(n["g"])("i",{class:"fas fa-user-circle"}),Object(n["i"])(" View Profile ")],-1)})),v=a((function(){return Object(n["g"])("li",null,[Object(n["g"])("i",{class:"fas fa-users"}),Object(n["i"])(" View Timeline ")],-1)})),h={key:0,class:"card-body scroll-container msg_card_body"},_={key:0,class:"d-flex justify-content-start mb-4"},x={class:"img_cont_msg"},y=["src"],k={class:"msg_cotainer"},w={class:"msg_time"},A={key:1,class:"d-flex justify-content-end mb-4"},D={class:"msg_cotainer_send"},S={class:"msg_time_send"},E={key:0},C={key:1},T={key:0},z={key:1},M={class:"img_cont_msg"},I=["src"],J={key:1,class:"card-body scroll-container msg_card_body"},L={class:"text-white"},R=a((function(){return Object(n["g"])("i",{class:"fas fa-laugh-wink"},null,-1)})),B={class:"card-footer"},N=a((function(){return Object(n["g"])("div",{class:"input-group-append"},[Object(n["g"])("span",{class:"input-group-text attach_btn"},[Object(n["g"])("i",{class:"fas fa-envelope"})])],-1)})),P=a((function(){return Object(n["g"])("button",{class:"form-button input-group-append"},[Object(n["g"])("span",{class:"input-group-text send_btn"},[Object(n["g"])("i",{class:"far fa-paper-plane"})])],-1)}));function V(e,t,c,a,O,V){var H=Object(n["C"])("router-link"),q=Object(n["C"])("MainLayout");return Object(n["u"])(),Object(n["d"])(q,null,{"body-content":Object(n["J"])((function(){return[Object(n["g"])("div",s,[Object(n["g"])("div",r,[a.user&&a.friendData?(Object(n["u"])(),Object(n["f"])("div",u,[Object(n["g"])("div",i,[Object(n["g"])("div",l,[Object(n["g"])("div",o,[Object(n["g"])("img",{src:a.friendData.photo,class:"rounded-circle user_img"},null,8,b),g]),Object(n["g"])("div",d,[Object(n["g"])("span",null,"Chat with "+Object(n["E"])(a.friendData.name),1),a.chats?(Object(n["u"])(),Object(n["f"])("p",j,Object(n["E"])(a.chats.message.length)+" Messages",1)):Object(n["e"])("",!0)])]),Object(n["g"])("span",{onClick:t[0]||(t[0]=Object(n["L"])((function(){return a.toggleMenu&&a.toggleMenu.apply(a,arguments)}),["prevent"])),id:"action_menu_btn"},f),Object(n["g"])("div",m,[Object(n["g"])("ul",null,[Object(n["j"])(H,{to:"/user/profile/".concat(a.friendData._id)},{default:Object(n["J"])((function(){return[p]})),_:1},8,["to"]),Object(n["j"])(H,{to:"/user/timeline/".concat(a.friendData._id)},{default:Object(n["J"])((function(){return[v]})),_:1},8,["to"])])])]),a.chats&&a.user?(Object(n["u"])(),Object(n["f"])("div",h,[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(a.chats.message,(function(e){return Object(n["u"])(),Object(n["f"])("div",{key:e.index,class:"my-1"},[e.userId!=a.user._id?(Object(n["u"])(),Object(n["f"])("div",_,[Object(n["g"])("div",x,[Object(n["g"])("img",{src:a.friendData.photo,class:"rounded-circle user_img_msg"},null,8,y)]),Object(n["g"])("div",k,[Object(n["i"])(Object(n["E"])(e.message)+" ",1),Object(n["g"])("span",w,Object(n["E"])(a.getTime(e.createdAt))+", "+Object(n["E"])(a.getDate(e.createdAt)),1)])])):(Object(n["u"])(),Object(n["f"])("div",A,[Object(n["g"])("div",D,[Object(n["i"])(Object(n["E"])(e.message)+" ",1),Object(n["g"])("span",S,[e.createdAt&&"Sending"!==e.createdAt&&"Sent"!==e.createdAt?(Object(n["u"])(),Object(n["f"])("span",E,Object(n["E"])(a.getTime(e.createdAt))+", "+Object(n["E"])(a.getDate(e.createdAt)),1)):(Object(n["u"])(),Object(n["f"])("span",C,[e.createdAt?(Object(n["u"])(),Object(n["f"])("span",T,Object(n["E"])(e.createdAt),1)):(Object(n["u"])(),Object(n["f"])("span",z,"Now"))]))])]),Object(n["g"])("div",M,[Object(n["g"])("img",{src:a.user.photo,class:"rounded-circle user_img_msg"},null,8,I)])]))])})),128))])):(Object(n["u"])(),Object(n["f"])("div",J,[Object(n["g"])("span",L,[Object(n["i"])(" Hello there, start a conversation with "+Object(n["E"])(a.friendData.name)+" now ",1),R])])),Object(n["g"])("div",B,[Object(n["g"])("form",{onSubmit:t[2]||(t[2]=Object(n["L"])((function(){return a.formSubmit&&a.formSubmit.apply(a,arguments)}),["prevent"])),class:"input-group"},[N,Object(n["K"])(Object(n["g"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.form.text=e}),class:"form-control type_msg",placeholder:"Type your message...",required:""},"\r\n              ",512),[[n["G"],a.form.text]]),P],32)])])):Object(n["e"])("",!0)])])]})),_:1})}var H=c("1da1"),q=(c("d3b7"),c("25f0"),c("96cf"),c("be7f")),G=c("579d"),K=c("9c93"),U=c("5c40"),F=c("5502"),Q={name:"ChatBox",components:{MainLayout:q["a"],StatCheck:G["a"],Post:K["a"]},props:["id"],setup:function(e){var t=Object(n["z"])(null),c=Object(n["z"])(null),a=Object(n["z"])(null),s=Object(n["z"])({text:""}),r=Object(n["z"])({status:"",err:""}),u=Object(F["b"])();Object(U["z"])(Object(H["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s={friendId:e.id},n.next=3,u.dispatch("getChats",s);case 3:return n.next=5,u.getters.getPostsState;case 5:return r.value.status=n.sent,n.next=8,u.getters.user;case 8:return a.value=n.sent,n.next=11,u.getters.chats.chat;case 11:return t.value=n.sent,n.next=14,u.getters.chats.friendData;case 14:return c.value=n.sent,n.next=17,t.value;case 17:if(n.t0=n.sent,!n.t0){n.next=22;break}return n.next=21,a.value;case 21:n.t0=n.sent;case 22:if(!n.t0){n.next=24;break}o();case 24:case"end":return n.stop()}}),n)}))));var i=function(){var c=Object(H["a"])(regeneratorRuntime.mark((function c(){var n,r;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return null===t.value&&(t.value={message:[]}),t.value.message.push({userId:a.value._id,message:s.value.text,createdAt:"Sending"}),s.value.text="",setTimeout((function(){o()}),500),n={friendId:e.id,message:t.value.message[t.value.message.length-1].message},c.next=7,u.dispatch("saveChat",n);case 7:if(r=c.sent,!0!==r.success){c.next=13;break}t.value.message[t.value.message.length-1].createdAt="Sent",setTimeout((function(){t.value.message[t.value.message.length-1].createdAt=null}),3e3),c.next=19;break;case 13:return c.next=15,u.getters.authState;case 15:c.t0=c.sent,c.t1=c.t0+" ",c.t2=r.err,t.value.message[t.value.message.length-1].createdAt=c.t1+c.t2;case 19:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),l=function(){var e=document.getElementsByClassName("action_menu")[0];e.classList.toggle("menu-toggle")},o=function(){var e=document.getElementsByClassName("scroll-container")[0];e.scrollTop=e.scrollHeight},b=function(e){var t=new Date(e).toString();return t.substring(0,10)},g=function(e){var t=new Date(e).toString();return t.substring(16,21)};return{form:s,formSubmit:i,statCheck:r,chats:t,user:a,friendData:c,toggleMenu:l,getDate:b,getTime:g}}},W=(c("f24c"),c("6b0d")),X=c.n(W);const Y=X()(Q,[["render",V],["__scopeId","data-v-17ef7518"]]);t["default"]=Y},"7cb9":function(e,t,c){},f24c:function(e,t,c){"use strict";c("7cb9")}}]);
//# sourceMappingURL=chunk-57c4ac26.ecf54420.js.map