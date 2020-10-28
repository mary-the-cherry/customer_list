(this["webpackJsonpmoz-todo-react"]=this["webpackJsonpmoz-todo-react"]||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),s=(a(18),a(6)),m=a(11),o=a(2),i=a(4),u=Object(n.createContext)(),d=function(e){return r.a.createElement(u.Provider,{value:{colors:{female:"pink",male:"blue",other:"yellow"}}},e.children)};function f(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}function b(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(e.firstname),m=Object(o.a)(s,2),d=m[0],b=m[1],g=Object(n.useState)(e.lastname),E=Object(o.a)(g,2),p=E[0],v=E[1],y=Object(n.useState)(e.age),N=Object(o.a)(y,2),h=N[0],O=N[1],j=Object(n.useState)(!1),C=Object(o.a)(j,2),k=C[0],w=C[1],P=Object(i.d)(),S=Object(n.useContext)(u).colors,x=Object(n.useRef)(null),F=Object(n.useRef)(null),R=Object(n.useRef)(null),B=Object(n.useRef)(null),A=f(l),M=f(k),T={borderColor:"female"===e.gender?S.female:"male"===e.gender?S.male:S.other};function q(){e.dispatch({type:"deleteCustomer",id:e.id})}Object(n.useEffect)((function(){!A&&l&&x.current.focus(),A&&!l&&F.current.focus()}),[A,l]),Object(n.useEffect)((function(){!M&&k&&B.current.focus(),M&&!k&&R.current.focus()}),[k,M]);var L=r.a.createElement("div",{className:"card edit-customer"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group row input-edit-name"},r.a.createElement("label",{htmlFor:"firstname-edit",className:"col-lg-4 col-form-label"},"Firstname"),r.a.createElement("div",{className:"col-lg-8 input-check"},r.a.createElement("input",{type:"text",id:"firstname-edit",className:"form-control form-control-sm",name:"firstname",value:d,onChange:function(e){b(e.target.value)},ref:x}))),r.a.createElement("div",{className:"form-group row input-edit-name"},r.a.createElement("label",{htmlFor:"lastname-edit",className:"col-lg-4 col-form-label"},"Lastname"),r.a.createElement("div",{className:"col-lg-8 input-check"},r.a.createElement("input",{type:"text",id:"lastname-edit",className:"form-control form-control-sm",name:"lastname",value:p,onChange:function(e){v(e.target.value)}}))),r.a.createElement("div",{className:"form-group row input-edit-age"},r.a.createElement("label",{htmlFor:"age-edit",className:"col-lg-4 col-form-label"},"Age"),r.a.createElement("div",{className:"col-lg-8 input-check"},r.a.createElement("input",{type:"number",id:"age-edit",min:"1",max:"110",name:"age",className:"form-control form-control-sm",value:h,onChange:function(e){O(e.target.value)}}))),r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("button",{type:"button",className:"btn btn-light btn-sm",onClick:function(){""!==d&&""!==p&&""!==h?(e.dispatch({type:"editCustomer",firstname:d,lastname:p,age:h,id:e.id}),c(!1)):""===d&&""!==p&&""!==h?P.error("Please enter your firstname!"):""===p&&""!==d&&""!==h?P.error("Please enter your lastname!"):""===h&&""!==p&&""!==d?P.error("Please enter your age!"):""===d&&""===p&&""!==h?P.error("Please enter your firstname and lastname!"):""===d&&""===h&&""!==p?P.error("Please enter your firstname and age!"):""===h&&""===p&&""!==d?P.error("Please enter your lastname and age!"):""===d&&""===p&&""===h&&P.error("Please enter your firstname, lastname and age!")}},"Save"),r.a.createElement("button",{type:"button",className:"btn btn-light btn-sm",onClick:q},"Delete",r.a.createElement("span",{className:"visually-hidden"},e.firstname," ",e.lastname))))),H=r.a.createElement("div",{className:"card",style:T},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},e.firstname," ",e.lastname),r.a.createElement("p",{className:"card-text"},"Age: ",e.age),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-outline-dark btn-lg",type:"button",onClick:function(){w(!0),e.dispatch({type:"sendBirthdayCard",id:e.id})},ref:R},"Send Birthday Card",r.a.createElement("span",{className:"visually-hidden"}," to Maren Meyer"))),r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("button",{type:"button",className:"btn btn-light btn-sm",onClick:function(){c(!0)},ref:F},"Edit"," ",r.a.createElement("span",{className:"visually-hidden"},e.firstname," ",e.lastname)),r.a.createElement("button",{type:"button",className:"btn btn-light btn-sm",onClick:q},"Delete"," ",r.a.createElement("span",{className:"visually-hidden"},e.firstname," ",e.lastname)))),k&&r.a.createElement("div",{className:"birthdayCard-full"},r.a.createElement("div",{className:"birthdayCard-body"},r.a.createElement("div",{className:"birthdayCard-wish"},r.a.createElement("h2",null,"Happy Birthday ",e.firstname),r.a.createElement("p",{className:"birthdaywish"},"The secret to staying young is lying about your age."),r.a.createElement("p",{className:"birthdayTextEnding"},"Best wishes!"),r.a.createElement("button",{className:"btn btn-outline-light btn-sm",onClick:function(){w(!1)},ref:B},"Close")))));return l?L:H}function g(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(""),m=Object(o.a)(s,2),u=m[0],d=m[1],f=Object(n.useState)(""),b=Object(o.a)(f,2),g=b[0],E=b[1],p=Object(n.useState)(""),v=Object(o.a)(p,2),y=v[0],N=v[1],h=Object(n.useState)("..."),O=Object(o.a)(h,2),j=O[0],C=O[1],k=Object(i.d)(),w=Object(n.useRef)(null),P=Object(n.useRef)(null),S=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(l);Object(n.useEffect)((function(){!S&&l&&P.current.focus(),S&&!l&&w.current.focus()}),[S,l]);var x=r.a.createElement("div",{className:"new-customer-button"},r.a.createElement("button",{type:"button",className:"btn btn-outline-dark btn-lg",onClick:function(){c(!0)},ref:w},"New Customer"));return l?r.a.createElement("div",{className:"new-customer-form"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body-new-customer card-body"},r.a.createElement("div",{className:"form-group row input-name"},r.a.createElement("label",{htmlFor:"firstname-edit",className:"col-sm-3 col-form-label"},"Firstname"),r.a.createElement("div",{className:"col-sm-9 input-check"},r.a.createElement("input",{type:"text",id:"firstname-edit",name:"firstname",className:"form-control form-control-sm",value:u,onChange:function(e){d(e.target.value)},ref:P,required:!0}),r.a.createElement("span",{className:"validity"}),r.a.createElement("div",{className:"invalid-feedback"},"Please enter your firstname!"))),r.a.createElement("div",{className:"form-group row input-name"},r.a.createElement("label",{htmlFor:"lastname-edit",className:"col-sm-3 col-form-label"},"Lastname"),r.a.createElement("div",{className:"col-sm-9 input-check"},r.a.createElement("input",{type:"text",id:"lastname-edit",name:"lastname",className:"form-control form-control-sm",value:g,onChange:function(e){E(e.target.value)},required:!0}),r.a.createElement("span",{className:"validity"}))),r.a.createElement("div",{className:"form-group row input-gender"},r.a.createElement("label",{htmlFor:"gender-selection",className:"col-sm-3 col-form-label"},"Gender"),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("select",{name:"gender",id:"gender-selection",className:"form-control form-control-sm",onChange:function(e){C(e.target.value)},defaultValue:"...",required:!0},r.a.createElement("option",{value:"other"},"..."),r.a.createElement("option",{value:"female"},"Female"),r.a.createElement("option",{value:"male"},"Male"),r.a.createElement("option",{value:"other"},"Other")))),r.a.createElement("div",{className:"form-group row input-age"},r.a.createElement("label",{htmlFor:"age-edit",className:"col-sm-3 col-form-label"},"Age"),r.a.createElement("div",{className:"col-sm-9 input-check"},r.a.createElement("input",{type:"number",id:"age-edit",min:"1",max:"110",name:"age",value:y,onChange:function(e){N(e.target.value)},className:"form-control form-control-sm",required:!0}),r.a.createElement("span",{className:"validity"}))),r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("button",{type:"button",className:"btn btn-light btn-sm",onClick:function(){""!==u&&""!==g&&""!==y?(e.dispatch({type:"addCustomer",firstname:u,lastname:g,gender:j,age:y}),c(!1),d(""),E(""),C("..."),N("")):""===u&&""!==g&&""!==y?k.error("Please enter your firstname!"):""===g&&""!==u&&""!==y?k.error("Please enter your lastname!"):""===y&&""!==g&&""!==u?k.error("Please enter your age!"):""===u&&""===g&&""!==y?k.error("Please enter your firstname and lastname!"):""===u&&""===y&&""!==g?k.error("Please enter your firstname and age!"):""===y&&""===g&&""!==u?k.error("Please enter your lastname and age!"):""===u&&""===g&&""===y&&k.error("Please enter your firstname, lastname and age!")}},"Save"),r.a.createElement("button",{type:"button",className:"btn btn-light btn-sm",onClick:function(){c(!1)}},"Quit"))))):x}var E=a(12),p=a(9),v=[{firstname:"Harry",lastname:"Potter",gender:"male",age:"30",id:"1"},{firstname:"Mary",lastname:"Poppins",gender:"female",age:"45",id:"2"},{firstname:"Hermione",lastname:"Granger",gender:"female",age:"30",id:"3"}];function y(e){var t=e.error,a=e.resetErrorBoundary;return r.a.createElement("div",{className:"error-message",role:"alert"},r.a.createElement("h2",null,"Something went wrong:"),r.a.createElement("pre",null,t.message),r.a.createElement("button",{className:"btn btn-outline-dark btn-sm",onClick:a},"Try again"))}var N=function(){var e=Object(n.useReducer)((function(e,t){switch(t.type){case"addCustomer":var a={firstname:t.firstname,lastname:t.lastname,gender:t.gender,age:t.age,id:Object(E.a)()};return[].concat(Object(m.a)(e),[a]);case"deleteCustomer":return e.filter((function(e){return e.id!==t.id}));case"editCustomer":return e.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{firstname:t.firstname,lastname:t.lastname,age:t.age}):e}));case"sendBirthdayCard":return e.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{age:parseInt(e.age)+1}):e}));default:throw new Error("Action is not existing!")}}),v),t=Object(o.a)(e,2),a=t[0],l=t[1],c=function(e,t){for(var a=[],n=0,r=e.length;n<r;)a.push(e.slice(n,n+=t));return a}(a,3).map((function(e,t){return r.a.createElement("div",{className:"card-deck",key:t},e.map((function(e){return r.a.createElement(b,{firstname:e.firstname,lastname:e.lastname,gender:e.gender,age:e.age,id:e.id,key:e.id,dispatch:l})})))}));return r.a.createElement(p.ErrorBoundary,{FallbackComponent:y,onReset:function(){}},r.a.createElement(d,null,r.a.createElement("div",{className:"App container"},r.a.createElement("header",null,r.a.createElement("h1",{className:"title-api"},"Customer List"),r.a.createElement("h3",{className:"subtitle-api"},"All you customers on one view!")),c,r.a.createElement("div",{className:"new-customer"},r.a.createElement(g,{dispatch:l})))))},h=(a(21),a(10)),O={position:i.b.BOTTOM_CENTER,timeout:5e3,offset:"30px",transition:i.c.SCALE};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,Object.assign({template:h.a},O),r.a.createElement(N,null))),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.8de8b1fb.chunk.js.map