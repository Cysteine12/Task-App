(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-669dfd6a"],{"266b":function(e,t,c){"use strict";c("4769")},4769:function(e,t,c){},a8c2:function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),a=function(e){return Object(n["x"])("data-v-2b6c995d"),e=e(),Object(n["v"])(),e},r={class:"row"},s={class:"col-xl-8 col-lg-7"},l={key:0,class:"profile-container d-flex justify-content-center align-items-center"},o={class:"profile-card"},u=a((function(){return Object(n["g"])("div",{class:"upper"},[Object(n["g"])("img",{src:"/img/Desert.jpg",class:"img-fluid"})],-1)})),i={class:"user text-center"},b={class:"profile"},d=["src"],j={class:"mt-5 text-center"},O={class:"mb-0"},f={class:"text-muted d-block mb-2"},g=a((function(){return Object(n["g"])("i",{class:"fas fa-envelope"},null,-1)})),m={class:"text-muted d-block mb-2"},p=a((function(){return Object(n["g"])("i",{class:"fas fa-phone-alt"},null,-1)})),h={class:"d-flex justify-content-between align-items-center my-4 px-4"},v=a((function(){return Object(n["g"])("h6",{class:"mb-0"},"Followers",-1)})),y=a((function(){return Object(n["g"])("h6",{class:"mb-0"},"Following",-1)})),w=a((function(){return Object(n["g"])("h6",{class:"mb-0"},"Saved Events",-1)})),k={class:"my-2"},x=Object(n["i"])(" Edit "),C=a((function(){return Object(n["g"])("i",{class:"fas fa-edit","aria-hidden":"true"},null,-1)})),D=Object(n["i"])(" Photo "),A=a((function(){return Object(n["g"])("i",{class:"fas fa-image","aria-hidden":"true"},null,-1)})),E=Object(n["i"])(" Delete "),_=a((function(){return Object(n["g"])("i",{class:"far fa-trash-alt","aria-hidden":"true"},null,-1)})),L=[E,_];function S(e,t,c,a,E,_){var S=Object(n["C"])("router-link"),J=Object(n["C"])("StatCheck"),M=Object(n["C"])("Alert"),F=Object(n["C"])("MainLayout");return Object(n["u"])(),Object(n["d"])(F,{header:"My Profile"},{"body-content":Object(n["J"])((function(){return[Object(n["g"])("div",r,[Object(n["g"])("div",s,[a.user?(Object(n["u"])(),Object(n["f"])("div",l,[Object(n["g"])("div",o,[u,Object(n["g"])("div",i,[Object(n["g"])("div",b,[Object(n["g"])("img",{src:a.user.photo,class:"rounded-circle",width:"80"},null,8,d)])]),Object(n["g"])("div",j,[Object(n["g"])("h4",O,Object(n["E"])(a.user.name),1),Object(n["g"])("span",f,[g,Object(n["i"])(" "+Object(n["E"])(a.user.email),1)]),Object(n["g"])("span",m,[p,Object(n["i"])(" 0"+Object(n["E"])(a.user.phone),1)]),Object(n["g"])("div",h,[Object(n["j"])(S,{to:"/followers/".concat(a.user._id),class:"stats"},{default:Object(n["J"])((function(){return[v,Object(n["g"])("span",null,Object(n["E"])(a.user.follower.length),1)]})),_:1},8,["to"]),Object(n["j"])(S,{to:"/followings/".concat(a.user._id),class:"stats"},{default:Object(n["J"])((function(){return[y,Object(n["g"])("span",null,Object(n["E"])(a.user.following.length),1)]})),_:1},8,["to"]),Object(n["j"])(S,{to:"/my-events",class:"stats"},{default:Object(n["J"])((function(){return[w,Object(n["g"])("span",null,Object(n["E"])(a.user.savedEvent.length),1)]})),_:1})]),Object(n["g"])("div",k,[Object(n["j"])(S,{to:"/profile/edit",class:"btn btn-primary btn-sm mr-2 small"},{default:Object(n["J"])((function(){return[x,C]})),_:1}),Object(n["j"])(S,{to:"/profile/edit-photo",class:"btn btn-primary btn-sm mr-2 small"},{default:Object(n["J"])((function(){return[D,A]})),_:1}),Object(n["g"])("button",{onClick:t[0]||(t[0]=Object(n["L"])((function(){return a.showAlertF&&a.showAlertF.apply(a,arguments)}),["prevent"])),class:"btn btn-danger btn-sm small"},L)]),a.statCheck?(Object(n["u"])(),Object(n["d"])(J,{key:0,statCheck:a.statCheck},null,8,["statCheck"])):Object(n["e"])("",!0)])])])):Object(n["e"])("",!0),a.alertData.show?(Object(n["u"])(),Object(n["d"])(M,{key:1,alertData:a.alertData,onSuccessAlert:a.deleteSubmit,onCloseAlert:t[1]||(t[1]=function(e){return a.alertData.show=!1})},null,8,["alertData","onSuccessAlert"])):Object(n["e"])("",!0)])])]})),_:1})}var J=c("1da1"),M=(c("96cf"),c("be7f")),F=c("579d"),P={class:"alert fade show",id:"logoutModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",style:{display:"block","padding-right":"17px"}},z={class:"modal-dialog",role:"document"},R={class:"modal-content"},$={class:"modal-header"},T={class:"modal-title",id:"exampleModalLabel"},q=Object(n["g"])("span",{"aria-hidden":"true"},"×",-1),B=[q],I={class:"modal-body"},N={class:"modal-footer"};function G(e,t,c,a,r,s){return Object(n["u"])(),Object(n["f"])("div",P,[Object(n["g"])("div",z,[Object(n["g"])("div",R,[Object(n["g"])("div",$,[Object(n["g"])("h5",T,Object(n["E"])(c.alertData.header),1),Object(n["g"])("button",{onClick:t[0]||(t[0]=Object(n["L"])((function(t){return e.$emit("closeAlert")}),["prevent"])),class:"close",type:"button","data-dismiss":"alert","aria-label":"Close"},B)]),Object(n["g"])("div",I,Object(n["E"])(c.alertData.body),1),Object(n["g"])("div",N,[Object(n["g"])("button",{onClick:t[1]||(t[1]=Object(n["L"])((function(t){return e.$emit("closeAlert")}),["prevent"])),class:"btn btn-secondary",type:"button","data-dismiss":"alert"},"Cancel"),Object(n["g"])("button",{onClick:t[2]||(t[2]=Object(n["L"])((function(t){return e.$emit("successAlert")}),["prevent"])),class:"btn btn-primary","data-dismiss":"modal"},Object(n["E"])(c.alertData.button),1)])])])])}var H={name:"Alert",props:{alertData:{type:Object,required:!0}},setup:function(){return{}}},K=(c("e8f0"),c("6b0d")),Q=c.n(K);const U=Q()(H,[["render",G]]);var V=U,W=c("5c40"),X=c("5502"),Y={name:"Profile",components:{MainLayout:M["a"],StatCheck:F["a"],Alert:V},setup:function(){var e=Object(n["z"])({show:!1,header:"Delete This Account?",body:'Select "Delete" below if you are ready to delete your account.',button:"Delete"}),t=Object(n["z"])(null),c=Object(n["z"])({status:"",err:""}),a=Object(X["b"])();Object(W["z"])(Object(J["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.dispatch("getProfile");case 2:return e.next=4,a.getters.authState;case 4:return c.value.status=e.sent,e.next=7,a.getters.user;case 7:t.value=e.sent;case 8:case"end":return e.stop()}}),e)}))));var r=function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.dispatch("deleteProfile");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){e.value.show=!0;var t=document.getElementsByTagName("body")[0];t.classList.toggle("modal-open")};return{alertData:e,showAlertF:s,statCheck:c,user:t,deleteSubmit:r}}};c("266b");const Z=Q()(Y,[["render",S],["__scopeId","data-v-2b6c995d"]]);t["default"]=Z},e8f0:function(e,t,c){"use strict";c("f95c")},f95c:function(e,t,c){}}]);
//# sourceMappingURL=chunk-669dfd6a.6188f22d.js.map