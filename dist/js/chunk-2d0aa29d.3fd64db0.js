(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa29d"],{"109a":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a={key:0,class:"row"},s={class:"col-xl-8 col-lg-7"},r={class:"card shadow mb-4"},i=Object(n["g"])("div",{class:"card-header py-3 d-flex flex-row align-items-center justify-content-between"},[Object(n["g"])("h6",{class:"m-0 font-weight-bold text-primary"},"My Notifications")],-1),o={class:"card-body"},l=Object(n["g"])("div",{class:"text-center"},[Object(n["g"])("img",{class:"img-fluid px-3 px-sm-4 mt-3 mb-4",style:{width:"25rem"},src:"img/undraw_posting_photo.svg",alt:"..."})],-1),b=Object(n["g"])("p",null,[Object(n["i"])("Hello there, "),Object(n["g"])("br"),Object(n["i"])("Always be reminded you can only see posts of people you folllow on your timeline.")],-1),u=Object(n["i"])("Browse My Timeline Now →"),d={class:"card-header py-3 d-flex flex-row align-items-center justify-content-between"},j=Object(n["g"])("img",{class:"home-img rounded-circle float-start",src:"img/undraw_profile.svg"},null,-1),O={class:"my-0 mx-3 font-weight-bold text-primary inline text-start"},f={class:"card-body"},g={class:"my-1 mx-3"},m={class:"card-footer"},p=Object(n["i"])("Check Profile");function y(e,t,c,y,h,w){var x=Object(n["C"])("router-link"),v=Object(n["C"])("StatCheck"),k=Object(n["C"])("MainLayout");return Object(n["u"])(),Object(n["d"])(k,{header:"My Notifications"},{"body-content":Object(n["J"])((function(){return[y.user?(Object(n["u"])(),Object(n["f"])("div",a,[Object(n["g"])("div",s,[Object(n["g"])("div",r,[i,Object(n["g"])("div",o,[l,b,Object(n["j"])(x,{to:"/dashboard",rel:"nofollow"},{default:Object(n["J"])((function(){return[u]})),_:1})])]),(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(y.notifications,(function(e){return Object(n["u"])(),Object(n["f"])("div",{key:e.index,class:"card shadow mb-4"},[Object(n["g"])("div",d,[Object(n["g"])("div",null,[j,Object(n["g"])("span",O,[Object(n["g"])("span",null," New "+Object(n["E"])(e.type),1)])])]),Object(n["g"])("div",f,[y.statCheck?(Object(n["u"])(),Object(n["d"])(v,{key:0,statCheck:y.statCheck},null,8,["statCheck"])):Object(n["e"])("",!0),Object(n["g"])("p",g,Object(n["E"])(e.body),1)]),Object(n["g"])("div",m,[Object(n["j"])(x,{to:"/user/profile/"+e.senderId,class:"my-0 mx-3 inline font-weight-bold text-primary text-start"},{default:Object(n["J"])((function(){return[p]})),_:2},1032,["to"])])])})),128))])])):Object(n["e"])("",!0)]})),_:1})}var h=c("1da1"),w=(c("96cf"),c("be7f")),x=c("579d"),v=c("9c93"),k=c("5c40"),C=c("5502"),M={name:"Home",components:{MainLayout:w["a"],StatCheck:x["a"],Post:v["a"]},setup:function(){var e=!0,t=Object(C["b"])(),c=Object(n["z"])([]),a=Object(n["z"])(null),s=Object(n["z"])({status:"",err:""});return Object(k["z"])(Object(h["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getters.user;case 2:return a.value=e.sent,e.next=5,t.dispatch("getNotifications");case 5:return n=e.sent,e.next=8,t.dispatch("updateNotifications");case 8:return e.next=10,t.getters.getPostsState;case 10:return s.value.status=e.sent,e.next=13,n.data;case 13:c.value=e.sent;case 14:case"end":return e.stop()}}),e)})))),{trueM:e,statCheck:s,user:a,notifications:c}}},N=c("6b0d"),_=c.n(N);const J=_()(M,[["render",y]]);t["default"]=J}}]);
//# sourceMappingURL=chunk-2d0aa29d.3fd64db0.js.map