(this["webpackJsonpemployees-app"]=this["webpackJsonpemployees-app"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"id":1,"name":"\u0418\u043b\u044c\u044f \u0415\u043c\u0435\u043b\u044c\u044f\u043d\u043e\u0432","isArchive":false,"role":"driver","phone":"+7 (883) 508-3269","birthday":"12.02.1982"},{"id":2,"name":"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u041b\u0430\u0440\u0438\u043e\u043d\u043e\u0432","isArchive":true,"role":"waiter","phone":"+7 (823) 440-3602","birthday":"26.01.1986"},{"id":3,"name":"\u0411\u043e\u0433\u0434\u0430\u043d \u0414\u0430\u0432\u044b\u0434\u043e\u0432","isArchive":false,"role":"driver","phone":"+7 (971) 575-2645","birthday":"29.11.1990"},{"id":4,"name":"\u041e\u043b\u0438\u043c\u043f\u0438\u0430\u0434\u0430 \u041c\u0430\u043a\u0430\u0440\u043e\u0432\u0430","isArchive":true,"role":"waiter","phone":"+7 (945) 447-2286","birthday":"06.01.1987"},{"id":5,"name":"\u0410\u043b\u043b\u0430 \u041a\u043e\u0442\u043e\u0432\u0430","isArchive":false,"role":"cook","phone":"+7 (948) 523-2964","birthday":"26.01.1982"},{"id":6,"name":"\u041a\u0438\u0440\u0430 \u041a\u043e\u043b\u0435\u0441\u043d\u0438\u043a\u043e\u0432\u0430","isArchive":true,"role":"cook","phone":"+7 (929) 592-3637","birthday":"25.02.1972"},{"id":7,"name":"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0422\u0440\u0435\u0442\u044c\u044f\u043a\u043e\u0432","isArchive":false,"role":"driver","phone":"+7 (872) 568-2916","birthday":"31.05.1979"},{"id":8,"name":"\u041f\u0435\u043b\u0430\u0433\u0435\u044f \u041c\u043e\u0440\u043e\u0437\u043e\u0432\u0430","isArchive":false,"role":"driver","phone":"+7 (977) 521-3479","birthday":"11.09.1981"},{"id":9,"name":"\u0410\u0433\u0430\u0444\u043e\u043d \u0413\u0440\u043e\u043c\u043e\u0432","isArchive":true,"role":"driver","phone":"+7 (868) 569-3159","birthday":"07.06.1988"},{"id":10,"name":"\u0412\u043b\u0430\u0434\u043b\u0435\u043d \u0422\u0435\u0442\u0435\u0440\u0438\u043d","isArchive":true,"role":"driver","phone":"+7 (808) 592-2480","birthday":"20.06.1978"},{"id":11,"name":"\u0412\u0430\u043b\u0435\u0440\u0438\u0439 \u041f\u0435\u0441\u0442\u043e\u0432","isArchive":false,"role":"cook","phone":"+7 (899) 403-2387","birthday":"20.01.1987"},{"id":12,"name":"\u0414\u0430\u043d\u0438\u0438\u043b \u041a\u0443\u0437\u043d\u0435\u0446\u043e\u0432","isArchive":true,"role":"waiter","phone":"+7 (933) 582-2673","birthday":"25.05.1987"},{"id":13,"name":"\u0424\u0451\u0434\u043e\u0440 \u0412\u0435\u0441\u0435\u043b\u043e\u0432","isArchive":true,"role":"waiter","phone":"+7 (951) 517-3787","birthday":"16.12.1972"},{"id":14,"name":"\u041f\u0430\u043d\u0442\u0435\u043b\u0435\u0439\u043c\u043e\u043d \u0415\u0444\u0438\u043c\u043e\u0432","isArchive":true,"role":"cook","phone":"+7 (807) 492-3627","birthday":"17.04.1986"},{"id":15,"name":"\u0418\u0432\u0430\u043d\u043d\u0430 \u041a\u0430\u043b\u0430\u0448\u043d\u0438\u043a\u043e\u0432\u0430","isArchive":true,"role":"waiter","phone":"+7 (927) 488-2568","birthday":"24.03.1982"},{"id":16,"name":"\u041f\u0440\u0430\u0441\u043a\u043e\u0432\u044c\u044f \u041a\u043e\u043d\u0434\u0440\u0430\u0442\u044c\u0435\u0432\u0430","isArchive":true,"role":"cook","phone":"+7 (875) 517-3873","birthday":"07.06.1983"},{"id":17,"name":"\u0415\u0432\u0434\u043e\u043a\u0438\u044f \u0424\u0438\u043b\u0438\u043f\u043f\u043e\u0432\u0430","isArchive":false,"role":"waiter","phone":"+7 (877) 450-3253","birthday":"03.12.1994"}]')},25:function(e,r,t){},26:function(e,r,t){},27:function(e,r,t){"use strict";t.r(r);var i=t(1),n=t(0),c=t.n(n),a=t(5),s=t.n(a),o=t(4),l=t(10),h=t(3),d=t(2),p="name",j="birthday",u="none",b="cook",y="driver",m="waiter",O={employeesData:[],sortType:p,filterType:u,isArchiveFilter:!1},v="LOAD_EMPLOYEES",f="CHANGE_SORT_TYPE",x="CHANGE_FILTER_TYPE",A="CHANGE_IS_ARCHIVE_FILTER",T=function(e){return{type:v,payload:e}},_=function(e){return{type:f,payload:e}},g=function(e){return{type:x,payload:e}},F=function(e){return{type:A,payload:e}},E=t(12),I=(t(25),t(13)),N=Object(h.b)((function(e){return{employeesData:e.employeesData,sortType:e.sortType,filterType:e.filterType,isArchiveFilter:e.isArchiveFilter}}))((function(e){var r=e.employeesData,t=e.sortType,n=e.filterType,c=e.isArchiveFilter,a=Object(I.a)(r);return n!==u&&(a=a.filter((function(e){switch(n){case y:return e.role===y;case m:return e.role===m;case b:return e.role===b;default:return!0}}))),c&&(a=a.filter((function(e){return e.isArchive}))),a.sort((function(e,r){switch(t){case p:return e.name>r.name?1:-1;case j:var i=e.birthday.split(".").reverse().join("."),n=r.birthday.split(".").reverse().join(".");return Date.parse(i)>Date.parse(n)?1:-1;default:return e.name>r.name?1:-1}})),Object(i.jsx)("section",{className:"employees-section",children:Object(i.jsxs)("table",{className:"employees",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"\u0418\u043c\u044f"}),Object(i.jsx)("td",{children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(i.jsx)("td",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"})]})}),Object(i.jsx)("tbody",{children:a.map((function(e){return Object(i.jsxs)("tr",{className:"employees__field",children:[Object(i.jsx)("td",{className:"employees__name",children:e.name}),Object(i.jsx)("td",{className:"employees__role",children:e.role}),Object(i.jsx)("td",{className:"employees__phone",children:e.phone})]},e.id)}))})]})})})),w=Object(h.b)((function(e){return{sortType:e.sortType,filterType:e.filterType}}),(function(e){return{changeSortType:function(r){e(_(r))},changeFilterType:function(r){e(g(r))},changeIsArchiveFilter:function(r){e(F(r))}}}))((function(e){e.sortType,e.filterType;var r=e.changeSortType,t=e.changeFilterType,n=e.changeIsArchiveFilter;return Object(i.jsxs)("section",{className:"controls",children:[Object(i.jsx)("h2",{children:"Controls"}),Object(i.jsxs)("div",{className:"controls__sorting",children:[Object(i.jsx)("p",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:"}),Object(i.jsx)("input",{type:"radio",name:"sortInput",id:"sortInput-1",defaultChecked:!0,onChange:function(){return r(p)}}),Object(i.jsx)("label",{htmlFor:"sortInput-1",children:"\u0418\u043c\u0435\u043d\u0438"}),Object(i.jsx)("input",{type:"radio",name:"sortInput",id:"sortInput-2",onChange:function(){return r(j)}}),Object(i.jsx)("label",{htmlFor:"sortInput-2",children:"\u0414\u0430\u0442\u0435 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"})]}),Object(i.jsxs)("div",{className:"controls__filters",children:[Object(i.jsx)("p",{children:"\u0424\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:"}),Object(i.jsx)("p",{children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u0438"}),Object(i.jsxs)("select",{onChange:function(e){return t(e.target.value)},children:[Object(i.jsx)("option",{value:u,children:"\u0412\u0441\u0435"}),Object(i.jsx)("option",{value:b,children:"\u041f\u043e\u0432\u0430\u0440"}),Object(i.jsx)("option",{value:m,children:"\u041e\u0444\u0438\u0446\u0438\u0430\u043d\u0442"}),Object(i.jsx)("option",{value:y,children:"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c"})]}),Object(i.jsx)("input",{type:"checkbox",id:"archiveFilter",onChange:function(e){return n(e.target.checked)}}),Object(i.jsx)("label",{htmlFor:"archiveFilter",children:"\u0412 \u0430\u0440\u0445\u0438\u0432\u0435"})]})]})})),k=(t(26),function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:"Employees App"})}),Object(i.jsxs)("main",{children:[Object(i.jsx)(w,{}),Object(i.jsx)(N,{})]})]})}),C=Object(o.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case v:return Object(d.a)(Object(d.a)({},e),{},{employeesData:r.payload});case f:return Object(d.a)(Object(d.a)({},e),{},{sortType:r.payload});case x:return Object(d.a)(Object(d.a)({},e),{},{filterType:r.payload});case A:return Object(d.a)(Object(d.a)({},e),{},{isArchiveFilter:r.payload});default:return Object(d.a)({},e)}}),Object(l.composeWithDevTools)());C.dispatch(T(E)),s.a.render(Object(i.jsx)(h.a,{store:C,children:Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(k,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.54971866.chunk.js.map