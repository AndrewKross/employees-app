(this["webpackJsonpemployees-app"]=this["webpackJsonpemployees-app"]||[]).push([[0],{152:function(e){e.exports=JSON.parse('[{"id":1,"name":"\u0418\u043b\u044c\u044f \u0415\u043c\u0435\u043b\u044c\u044f\u043d\u043e\u0432","isArchive":false,"role":"driver","phone":"+7 (883) 508-3269","birthday":"12.02.1982"},{"id":2,"name":"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u041b\u0430\u0440\u0438\u043e\u043d\u043e\u0432","isArchive":true,"role":"waiter","phone":"+7 (823) 440-3602","birthday":"26.01.1986"},{"id":3,"name":"\u0411\u043e\u0433\u0434\u0430\u043d \u0414\u0430\u0432\u044b\u0434\u043e\u0432","isArchive":false,"role":"driver","phone":"+7 (971) 575-2645","birthday":"29.11.1990"},{"id":4,"name":"\u041e\u043b\u0438\u043c\u043f\u0438\u0430\u0434\u0430 \u041c\u0430\u043a\u0430\u0440\u043e\u0432\u0430","isArchive":true,"role":"waiter","phone":"+7 (945) 447-2286","birthday":"06.01.1987"},{"id":5,"name":"\u0410\u043b\u043b\u0430 \u041a\u043e\u0442\u043e\u0432\u0430","isArchive":false,"role":"cook","phone":"+7 (948) 523-2964","birthday":"26.01.1982"},{"id":6,"name":"\u041a\u0438\u0440\u0430 \u041a\u043e\u043b\u0435\u0441\u043d\u0438\u043a\u043e\u0432\u0430","isArchive":true,"role":"cook","phone":"+7 (929) 592-3637","birthday":"25.02.1972"},{"id":7,"name":"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0422\u0440\u0435\u0442\u044c\u044f\u043a\u043e\u0432","isArchive":false,"role":"driver","phone":"+7 (872) 568-2916","birthday":"31.05.1979"},{"id":8,"name":"\u041f\u0435\u043b\u0430\u0433\u0435\u044f \u041c\u043e\u0440\u043e\u0437\u043e\u0432\u0430","isArchive":false,"role":"driver","phone":"+7 (977) 521-3479","birthday":"11.09.1981"},{"id":9,"name":"\u0410\u0433\u0430\u0444\u043e\u043d \u0413\u0440\u043e\u043c\u043e\u0432","isArchive":true,"role":"driver","phone":"+7 (868) 569-3159","birthday":"07.06.1988"},{"id":10,"name":"\u0412\u043b\u0430\u0434\u043b\u0435\u043d \u0422\u0435\u0442\u0435\u0440\u0438\u043d","isArchive":true,"role":"driver","phone":"+7 (808) 592-2480","birthday":"20.06.1978"},{"id":11,"name":"\u0412\u0430\u043b\u0435\u0440\u0438\u0439 \u041f\u0435\u0441\u0442\u043e\u0432","isArchive":false,"role":"cook","phone":"+7 (899) 403-2387","birthday":"20.01.1987"},{"id":12,"name":"\u0414\u0430\u043d\u0438\u0438\u043b \u041a\u0443\u0437\u043d\u0435\u0446\u043e\u0432","isArchive":true,"role":"waiter","phone":"+7 (933) 582-2673","birthday":"25.05.1987"},{"id":13,"name":"\u0424\u0451\u0434\u043e\u0440 \u0412\u0435\u0441\u0435\u043b\u043e\u0432","isArchive":true,"role":"waiter","phone":"+7 (951) 517-3787","birthday":"16.12.1972"},{"id":14,"name":"\u041f\u0430\u043d\u0442\u0435\u043b\u0435\u0439\u043c\u043e\u043d \u0415\u0444\u0438\u043c\u043e\u0432","isArchive":true,"role":"cook","phone":"+7 (807) 492-3627","birthday":"17.04.1986"},{"id":15,"name":"\u0418\u0432\u0430\u043d\u043d\u0430 \u041a\u0430\u043b\u0430\u0448\u043d\u0438\u043a\u043e\u0432\u0430","isArchive":true,"role":"waiter","phone":"+7 (927) 488-2568","birthday":"24.03.1982"},{"id":16,"name":"\u041f\u0440\u0430\u0441\u043a\u043e\u0432\u044c\u044f \u041a\u043e\u043d\u0434\u0440\u0430\u0442\u044c\u0435\u0432\u0430","isArchive":true,"role":"cook","phone":"+7 (875) 517-3873","birthday":"07.06.1983"},{"id":17,"name":"\u0415\u0432\u0434\u043e\u043a\u0438\u044f \u0424\u0438\u043b\u0438\u043f\u043f\u043e\u0432\u0430","isArchive":false,"role":"waiter","phone":"+7 (877) 450-3253","birthday":"03.12.1994"}]')},189:function(e,t,r){},190:function(e,t,r){},192:function(e,t,r){},306:function(e,t,r){},311:function(e,t,r){},318:function(e,t,r){"use strict";r.r(t);var n=r(7),a=r(0),i=r.n(a),c=r(37),o=r.n(c),l=r(83),s=r(150),h=r(65),d=r(17),p="name",j="birthday",u="none",b="cook",m="driver",y="waiter",O="/",f="/employee/",v={employeesData:[],sortType:p,filterType:u,isArchiveFilter:!1},x="LOAD_EMPLOYEES",A="CHANGE_SORT_TYPE",g="CHANGE_FILTER_TYPE",w="CHANGE_IS_ARCHIVE_FILTER",N=function(e){return{type:x,payload:e}},_=function(e){return{type:A,payload:e}},k=function(e){return{type:g,payload:e}},F=function(e){return{type:w,payload:e}},T=r(152),D=(r(189),r(70)),E=r(32),C=(r(190),r(191),r(90)),I=r(114),S=r(91),Y=r(51),L=(r(192),C.a.Option),R=Object(E.f)(Object(h.b)(null,(function(e){return{changeSortType:function(t){e(_(t))},changeFilterType:function(t){e(k(t))},changeIsArchiveFilter:function(t){e(F(t))}}}))((function(e){var t=e.changeSortType,r=e.changeFilterType,a=e.changeIsArchiveFilter,i=e.history;return Object(n.jsxs)("section",{className:"controls",children:[Object(n.jsxs)("div",{className:"controls__sorting",children:[Object(n.jsx)("p",{className:"controls__sorting__label",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:"}),Object(n.jsxs)(I.a.Group,{onChange:function(e){return t(e.target.value)},defaultValue:p,children:[Object(n.jsx)(I.a,{value:p,children:"\u0418\u043c\u0435\u043d\u0438"}),Object(n.jsx)(I.a,{value:j,children:"\u0414\u0430\u0442\u0435 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"})]})]}),Object(n.jsxs)("div",{className:"controls__filters",children:[Object(n.jsx)("p",{children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b: "}),Object(n.jsxs)(C.a,{className:"role-filter",defaultValue:u,onChange:function(e){return r(e.valueOf().toString())},children:[Object(n.jsx)(L,{value:u,children:"\u0412\u0441\u0435"}),Object(n.jsx)(L,{value:b,children:"\u041f\u043e\u0432\u0430\u0440"}),Object(n.jsx)(L,{value:y,children:"\u041e\u0444\u0438\u0446\u0438\u0430\u043d\u0442"}),Object(n.jsx)(L,{value:m,children:"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c"})]}),Object(n.jsx)("label",{htmlFor:"archiveFilter",children:"\u0412 \u0430\u0440\u0445\u0438\u0432\u0435: "}),Object(n.jsx)(S.a,{type:"checkbox",id:"archiveFilter",onChange:function(e){return a(e.target.checked)}})]}),Object(n.jsx)(Y.a,{className:"add-new-btn",onClick:function(){return i.push("".concat(f,"new"))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"})]})}))),G=r(115),H=r(321),M=Object(E.f)(Object(h.b)((function(e){return{employeesData:e.employeesData,sortType:e.sortType,filterType:e.filterType,isArchiveFilter:e.isArchiveFilter}}))((function(e){var t=e.employeesData,r=e.sortType,a=e.filterType,i=e.isArchiveFilter,c=e.history,o=Object(G.a)(t);a!==u&&(o=o.filter((function(e){switch(a){case m:return e.role===m;case y:return e.role===y;case b:return e.role===b;default:return!0}}))),i&&(o=o.filter((function(e){return e.isArchive}))),o.sort((function(e,t){switch(r){case p:return e.name>t.name?1:-1;case j:var n=e.birthday.split(".").reverse().join("."),a=t.birthday.split(".").reverse().join(".");return Date.parse(n)>Date.parse(a)?1:-1;default:return e.name>t.name?1:-1}}));return Object(n.jsx)("section",{className:"employees-section",children:Object(n.jsx)(H.a,{columns:[{title:"\u0418\u043c\u044f",dataIndex:"name",key:"name"},{title:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",dataIndex:"role",key:"role"},{title:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",dataIndex:"phone",key:"phone"}],dataSource:o,style:{cursor:"pointer"},tableLayout:"fixed",rowKey:function(e){return e.id},onRow:function(e){return{onClick:function(){c.push("".concat(f+e.id))}}}})})}))),P=(r(306),function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{children:Object(n.jsx)("h1",{className:"app-header",children:"Employees App"})}),Object(n.jsxs)("main",{children:[Object(n.jsx)(R,{}),Object(n.jsx)(M,{})]})]})}),V=r(175),J=r(172),q=r(52),B=r.n(q),K=r(323),W=r(322),$=(r(311),C.a.Option),z="DD.MM.YYYY",Q=Object(h.b)((function(e){return{employeesData:e.employeesData}}),(function(e){return{saveEmployee:function(t){e(N(t))}}}))((function(e){var t=e.employeeId,r=e.employeesData,i=e.saveEmployee,c=e.history,o={id:r[r.length-1].id+1,name:"Name",phone:"Phone",birthday:"01.01.2000",role:"driver",isArchive:!1};"new"!==t&&(o=r.find((function(e){return e.id===+t})));var l=Object(a.useState)(o),s=Object(V.a)(l,2),h=s[0],p=s[1];return o?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{children:Object(n.jsx)("h1",{className:"employee-card-header",children:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"})}),Object(n.jsx)("section",{className:"employee-page",children:Object(n.jsxs)("form",{className:"employee-form",onSubmit:function(e){e.preventDefault();var n=Object(G.a)(r);"new"!==t?n[r.findIndex((function(e){return e.id===+t}))]=h:n.push(h);i(n),c.goBack()},children:[Object(n.jsxs)("div",{className:"name-input-wrapper employee-form__wrapper",children:[Object(n.jsx)("label",{className:"name-input-label",htmlFor:"employee-name-input",children:"\u0418\u043c\u044f: "}),Object(n.jsx)(K.a,{className:"name-input",type:"text",id:"employee-name-input",value:h.name,required:!0,maxLength:30,onChange:function(e){return p(Object(d.a)(Object(d.a)({},h),{},{name:e.target.value}))}})]}),Object(n.jsxs)("div",{className:"phone-input-wrapper employee-form__wrapper",children:[Object(n.jsx)("label",{className:"phone-input-label",htmlFor:"employee-phone-input",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: "}),Object(n.jsx)(J.a,{type:"tel",id:"employee-phone-input",value:h.phone,required:!0,mask:"+7 (111) 111-1111",pattern:"^\\+?\\d\\s(\\()?\\d{3}(\\))?(-|\\s)?\\d{3}(-|\\s)\\d{4}$",onChange:function(e){return p(Object(d.a)(Object(d.a)({},h),{},{phone:e.target.value}))}})]}),Object(n.jsxs)("div",{className:"birthday-input-wrapper employee-form__wrapper",children:[Object(n.jsx)("label",{htmlFor:"employee-birthday-input",children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: "}),Object(n.jsx)(W.a,{id:"employee-birthday-input",defaultValue:B()(h.birthday,z),format:z,onChange:function(e){p(Object(d.a)(Object(d.a)({},h),{},{birthday:B()(e).format(z)}))}})]}),Object(n.jsxs)("div",{className:"role-input-wrapper employee-form__wrapper",children:[Object(n.jsx)("label",{children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c: "}),Object(n.jsxs)(C.a,{className:"role-input",value:h.role,onChange:function(e){return p(Object(d.a)(Object(d.a)({},h),{},{role:e.valueOf()}))},children:[Object(n.jsx)($,{value:b,children:"\u041f\u043e\u0432\u0430\u0440"}),Object(n.jsx)($,{value:y,children:"\u041e\u0444\u0438\u0446\u0438\u0430\u043d\u0442"}),Object(n.jsx)($,{value:m,children:"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c"})]})]}),Object(n.jsxs)("div",{className:"archive-input-wrapper employee-form__wrapper",children:[Object(n.jsx)("label",{htmlFor:"employee-archive-checkbox",children:"\u0412 \u0430\u0440\u0445\u0438\u0432\u0435? "}),Object(n.jsx)(S.a,{id:"employee-archive-checkbox",checked:h.isArchive,onChange:function(e){return p(Object(d.a)(Object(d.a)({},h),{},{isArchive:e.target.checked}))}})]}),Object(n.jsx)(Y.a,{className:"form-submit-btn",type:"primary",htmlType:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"\u041e\u0448\u0438\u0431\u043a\u0430! \u0422\u0430\u043a\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430 \u043d\u0435\u0442 \u0432 \u0431\u0430\u0437\u0435."}),Object(n.jsx)(D.b,{to:O,children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})})),U=function(){return Object(n.jsx)(D.a,{children:Object(n.jsxs)(E.c,{children:[Object(n.jsx)(E.a,{exact:!0,path:O,component:P}),Object(n.jsx)(E.a,{exact:!0,path:"".concat(f,":id"),render:function(e){var t=e.match,r=e.history;return Object(n.jsx)(Q,{employeeId:t.params.id,history:r})}}),Object(n.jsx)(E.a,{render:function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)("h1",{children:"\u041e\u0448\u0438\u0431\u043a\u0430: 404. \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430."}),Object(n.jsx)(D.b,{to:O,children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})}})]})})},X=Object(l.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(d.a)(Object(d.a)({},e),{},{employeesData:t.payload});case A:return Object(d.a)(Object(d.a)({},e),{},{sortType:t.payload});case g:return Object(d.a)(Object(d.a)({},e),{},{filterType:t.payload});case w:return Object(d.a)(Object(d.a)({},e),{},{isArchiveFilter:t.payload});default:return Object(d.a)({},e)}}),Object(s.composeWithDevTools)());X.dispatch(N(T)),o.a.render(Object(n.jsx)(h.a,{store:X,children:Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(U,{})})}),document.getElementById("root"))}},[[318,1,2]]]);
//# sourceMappingURL=main.3be023aa.chunk.js.map