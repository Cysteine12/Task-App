(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r={class:"row"},s={class:"col-xl-8 col-lg-7"},c={key:0},u={key:1,class:"card shadow mb-4"},o=Object(a["g"])("div",{class:"card-header py-3"},"No Posts on your dashboard yet. Create new posts now",-1),i=[o],l=Object(a["g"])("br",null,null,-1),b=Object(a["g"])("br",null,null,-1),d={key:2};function p(e,t,n,o,p,g){var j=Object(a["C"])("Post"),O=Object(a["C"])("Pagination"),v=Object(a["C"])("MainLayout");return Object(a["u"])(),Object(a["d"])(v,{header:"Dashboard"},{"body-content":Object(a["J"])((function(){return[Object(a["g"])("div",r,[Object(a["g"])("div",s,[o.posts.length>0?(Object(a["u"])(),Object(a["f"])("div",c,[(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(o.posts,(function(e){return Object(a["u"])(),Object(a["d"])(j,{key:e.index,post:e,showbutton:o.trueM},null,8,["post","showbutton"])})),128))])):(Object(a["u"])(),Object(a["f"])("div",u,i)),l,b,o.pagination.totalCount?(Object(a["u"])(),Object(a["f"])("div",d,[Object(a["j"])(O,{pagination:o.pagination},null,8,["pagination"])])):Object(a["e"])("",!0)])])]})),_:1})}var g=n("1da1"),j=(n("96cf"),n("a9e3"),n("be7f")),O=n("579d"),v=n("9c93"),w=n("1799"),f=n("5c40"),h=n("5502"),x={name:"Home",components:{MainLayout:j["a"],StatCheck:O["a"],Post:v["a"],Pagination:w["a"]},props:{pageId:{type:Number,default:1}},setup:function(e){var t,n=!0,r=Object(a["z"])([]),s=Object(a["z"])(null),c=Object(a["z"])({currentPage:null!==(t=e.pageId)&&void 0!==t?t:1,totalCount:null,perPage:2}),u=Object(a["z"])({status:"",err:""}),o=Object(h["b"])();return Object(f["z"])(Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.dispatch("getProfile");case 2:return t.next=4,o.getters.authState;case 4:return u.value.status=t.sent,t.next=7,o.getters.user;case 7:s.value=t.sent,Object(f["T"])(Object(g["a"])(regeneratorRuntime.mark((function t(){var n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return window.scrollTo(0,0),i={userId:s.value._id,pageId:null!==(n=e.pageId)&&void 0!==n?n:1},t.next=4,o.dispatch("getPostsByOwner",i);case 4:return t.next=6,o.getters.getPostState;case 6:return u.value.status=t.sent,t.next=9,o.getters.postError;case 9:return u.value.err=t.sent,t.next=12,o.getters.post.data;case 12:return r.value=t.sent,t.next=15,o.getters.post.postCount;case 15:c.value.totalCount=t.sent,c.value.currentPage=null!==(a=e.pageId)&&void 0!==a?a:1;case 17:case"end":return t.stop()}}),t)}))));case 9:case"end":return t.stop()}}),t)})))),{trueM:n,statCheck:u,posts:r,pagination:c}}},y=n("6b0d"),k=n.n(y);const m=k()(x,[["render",p]]);t["default"]=m}}]);
//# sourceMappingURL=chunk-2d0d63f1.a1fab981.js.map