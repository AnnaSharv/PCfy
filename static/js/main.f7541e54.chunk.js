(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/Vector.324bd5d5.svg"},29:function(e,a,t){e.exports=t.p+"static/media/logo.bf266927.svg"},30:function(e,a,t){e.exports=t.p+"static/media/landing-img.b9f0ed0b.svg"},31:function(e,a,t){e.exports=t.p+"static/media/confetti.a32958e3.svg"},32:function(e,a,t){e.exports=t.p+"static/media/logo-round.62fe69ae.svg"},38:function(e,a,t){e.exports=t(56)},47:function(e,a,t){},49:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(28),c=t.n(r),o=(t(47),t(49),t(2)),s=t(6),m=Object(n.createContext)(""),p=Object(n.createContext)(""),i=function(e){var a=l.a.useState([]),t=Object(s.a)(a,2),n=t[0],r=t[1];return l.a.useEffect(function(){fetch("https://pcfy.redberryinternship.ge/api/teams").then(function(e){return e.json()}).then(function(e){return r(e.data)})},[]),l.a.createElement(m.Provider,{value:n},e.children)},u=t(29),d=t.n(u),f=t(14),b=t(65),E=t(30),_=t.n(E);var g=function(){return l.a.createElement("div",{className:"landing-page"},l.a.createElement("img",{src:d.a,className:"logo"}),l.a.createElement("img",{src:_.a,className:"landing-img"}),l.a.createElement("div",{className:"btn-container"},l.a.createElement(f.b,{to:"fillform"}," ",l.a.createElement(b.a,{variant:"contained"},"\u10e9\u10d0\u10dc\u10d0\u10ec\u10d4\u10e0\u10d8\u10e1 \u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d0")," "),l.a.createElement(f.b,{to:"recordlist"}," ",l.a.createElement(b.a,{variant:"contained"},"\u10e9\u10d0\u10dc\u10d0\u10ec\u10d4\u10e0\u10d4\u10d1\u10d8\u10e1 \u10e1\u10d8\u10d0")," ")))},v=t(34),h=t(5),N=t(18),j=t(31),x=t.n(j);var y=function(){return l.a.createElement("div",{className:"success"},l.a.createElement("div",{className:"success-modal"},l.a.createElement("img",{src:x.a,alt:"confetti "}),l.a.createElement("h1",null,"\u10e9\u10d0\u10dc\u10d0\u10ec\u10d4\u10e0\u10d8 \u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10e3\u10da\u10d8\u10d0!"),l.a.createElement(f.b,{to:"/recordlist"},l.a.createElement(N.a,{variant:"primary",className:"d-block  me-auto d-flex btnreverse"},"\u10e1\u10d8\u10d0\u10e8\u10d8 \u10d2\u10d0\u10d3\u10d0\u10e7\u10d5\u10d0\u10dc\u10d0")),l.a.createElement(f.b,{to:"/"},l.a.createElement(N.a,{variant:"primary",className:"d-block btnnext me-auto d-flex"},"\u10db\u10d7\u10d0\u10d5\u10d0\u10e0\u10d8"))))},O=t(17),k=t.n(O),C=t(32),w=t.n(C);var S=function(){var e=Object(v.a)({mode:"onChange",defaultValues:{},criteriaMode:"all"}),a=e.register,t=e.handleSubmit,r=e.watch,c=e.getValues,p=e.formState,i=p.errors,u=p.touchedFields,d=Object(n.useContext)(m),f=Object(n.useState)([]),b=Object(s.a)(f,2),E=b[0],_=b[1],g=Object(n.useState)([]),j=Object(s.a)(g,2),x=j[0],O=j[1],C=Object(n.useState)([]),S=Object(s.a)(C,2),L=S[0],P=S[1],G=Object(n.useState)(1),V=Object(s.a)(G,2),I=V[0],T=V[1],q=Object(n.useState)(!1),B=Object(s.a)(q,2),D=(B[0],B[1]),R=Object(n.useState)(!1),$=Object(s.a)(R,2),U=($[0],$[1]),A=Object(n.useState)(""),F=Object(s.a)(A,2),M=F[0],z=F[1],H=Object(n.useState)(""),J=Object(s.a)(H,2),Z=J[0],K=J[1],Q=Object(n.useState)(""),W=Object(s.a)(Q,2),X=W[0],Y=W[1],ee=Object(n.useState)(""),ae=Object(s.a)(ee,2),te=(ae[0],ae[1]),ne=Object(n.useState)(!1),le=Object(s.a)(ne,2),re=le[0],ce=le[1],oe=Object(n.useState)(""),se=Object(s.a)(oe,2),me=se[0],pe=se[1],ie=Object(n.useState)([]),ue=Object(s.a)(ie,2),de=ue[0],fe=ue[1],be=Object(n.useState)([]),Ee=Object(s.a)(be,2),_e=Ee[0],ge=Ee[1],ve=Object(n.useState)(),he=Object(s.a)(ve,2),Ne=he[0],je=he[1],xe=Object(n.useState)(""),ye=Object(s.a)(xe,2),Oe=ye[0],ke=ye[1],Ce=r(),we=Object(o.f)(),Se=Object(n.useRef)(),Le=Object(n.useRef)(),Pe=Object(n.useRef)(),Ge=Object(n.useRef)();Object(n.useEffect)(function(){fetch("https://pcfy.redberryinternship.ge/api/positions").then(function(e){return e.json()}).then(function(e){return _(e.data)}),fetch("https://pcfy.redberryinternship.ge/api/brands").then(function(e){return e.json()}).then(function(e){return fe(e.data)}),fetch("https://pcfy.redberryinternship.ge/api/cpus").then(function(e){return e.json()}).then(function(e){return ge(e.data)})},[]),Object(n.useEffect)(function(){window.localStorage.setItem("id",L);var e=[];E.filter(function(a,t){return a.team_id==L&&e.push([a.name,a.id])}),O(e)},[L]),Object(n.useEffect)(function(){var e=!0,a=0!==Object.keys(i).length;e=Object.keys(u).length<6,D(!(!e&&!a)),e||a?(ce(!1),pe("inputError")):(ce(!0),pe("border-ok"))},[Ce]);var Ve=function(){var e=new FormData,a=c();a.token="3ebff5ab018b0675ff671820082b2cb7",e.append("name",a.name),e.append("surname",a.surname),e.append("team_id",a.team_id),e.append("position_id",a.position_id),e.append("phone_number",a.phone_number),e.append("email",a.email),e.append("token",a.token),e.append("laptop_name",a.laptop_name),e.append("laptop_brand_id",a.laptop_brand_id),e.append("laptop_cpu",a.laptop_cpu),e.append("laptop_cpu_cores",a.laptop_cpu_cores),e.append("laptop_cpu_threads",a.laptop_cpu_threads),e.append("laptop_ram",a.laptop_ram),e.append("laptop_hard_drive_type",a.laptop_hard_drive_type),e.append("laptop_state","new"),e.append("laptop_price","2550"),e.append("laptop_purchase_date","9/4/2022"),e.append("laptop_image",Ne),fetch("https://pcfy.redberryinternship.ge/api/laptop/create",{body:e,method:"post"})};return l.a.createElement("div",{className:"fill-form-container"},l.a.createElement("button",{className:"goback position-relative",onClick:function(){1===I&&we(-1),2===I&&(Le.current.classList.add("d-none"),Se.current.classList.add("d-grid"),Pe.current.classList.add("d-none"),Ge.current.innerText="\u10e8\u10d4\u10db\u10d3\u10d4\u10d2\u10d8",T(1))}},l.a.createElement("img",{src:k.a,alt:"arrow"})),l.a.createElement("div",{className:"d-flex menu"},l.a.createElement("h6",{className:1===I?"activelink":"",onClick:function(){re&&2===I&&(Le.current.classList.add("d-none"),Se.current.classList.add("d-grid"),Pe.current.classList.add("d-none"),Ge.current.innerText="\u10e8\u10d4\u10db\u10d3\u10d4\u10d2\u10d8",T(1))}},"\u10d7\u10d0\u10dc\u10d0\u10db\u10e8\u10e0\u10dd\u10db\u10da\u10d8\u10e1 \u10d8\u10dc\u10e4\u10dd "),l.a.createElement("h6",{className:2===I?"activelink":"",onClick:function(){re&&1===I&&(Se.current.classList.add("d-none"),Le.current.classList.add("d-grid"),Ge.current.innerText="\u10e8\u10d4\u10db\u10d3\u10d4\u10d2\u10d8",T(2))}},"\u10da\u10d4\u10de\u10e2\u10dd\u10de\u10d8\u10e1 \u10db\u10d0\u10ee\u10d0\u10e1\u10d8\u10d0\u10d7\u10d4\u10d1\u10da\u10d4\u10d1\u10d8")),l.a.createElement("div",{className:"fill-form"},l.a.createElement(h.a,{className:"employee-form",onSubmit:t(Ve),name:"form"},l.a.createElement(l.a.Fragment,null,l.a.createElement("fieldset",{className:1===I?"employee-form w-100 d-grid":"employee-form w-100 ifdisplay",ref:Se},l.a.createElement("div",{className:"d-flex justify-content-between name-container"},l.a.createElement(h.a.Group,{controlId:"formBasicPassword"},l.a.createElement(h.a.Label,{name:"firstname",className:"firstname noborder ".concat(i.firstname&&me)},"\u10e1\u10d0\u10ee\u10d4\u10da\u10d8"),l.a.createElement(h.a.Control,Object.assign({type:"text",name:"name",className:"name noerrtext ".concat(i.name&&me),placeholder:"\u10d2\u10e0\u10d8\u10e8\u10d0",defaultValue:""},a("name",{required:{value:!0,message:"\u10e8\u10d4\u10d0\u10d5\u10e1\u10d4 \u10d5\u10d4\u10da\u10d8"},minLength:{value:2,message:"\u10d2\u10d0\u10db\u10dd\u10d8\u10e7\u10d4\u10dc\u10d4 \u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 2 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd"},pattern:{value:/^[\u10d0-\u10f0]+$/g,message:"\u10d2\u10d0\u10db\u10dd\u10d8\u10e7\u10d4\u10dc\u10d4 \u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 \u10d0\u10e1\u10dd\u10d4\u10d1\u10d8"}}))),l.a.createElement(h.a.Text,{className:"text-muted"},l.a.createElement("span",{name:"name",className:"name noborder ".concat(i.name&&me)},i.name?i.name.message:"\u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 2 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd, \u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 \u10d0\u10e1\u10dd\u10d4\u10d1\u10d8"))),l.a.createElement(h.a.Group,{controlId:"formBasicText"},l.a.createElement(h.a.Label,{name:"surname",className:"surname noborder ".concat(i.surname&&me)},"\u10d2\u10d5\u10d0\u10e0\u10d8"),l.a.createElement(h.a.Control,Object.assign({type:"text",name:"surname",className:"surname noerrtext ".concat(i.surname&&me),placeholder:"\u10dd\u10dc\u10d8\u10d0\u10dc\u10d8",defaultValue:""},a("surname",{required:{value:!0,message:"\u10e8\u10d4\u10d0\u10d5\u10e1\u10d4 \u10d5\u10d4\u10da\u10d8"},minLength:{value:2,message:"\u10d2\u10d0\u10db\u10dd\u10d8\u10e7\u10d4\u10dc\u10d4 \u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 2 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd"},pattern:{value:/^[\u10d0-\u10f0]+$/g,message:"\u10d2\u10d0\u10db\u10dd\u10d8\u10e7\u10d4\u10dc\u10d4 \u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 \u10d0\u10e1\u10dd\u10d4\u10d1\u10d8"}}))),l.a.createElement(h.a.Text,{className:"text-muted"},l.a.createElement("span",{name:"surname",className:"surname noborder ".concat(i.surname&&me)},i.surname?i.surname.message:"\u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 2 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd, \u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 \u10d0\u10e1\u10dd\u10d4\u10d1\u10d8")))),l.a.createElement(h.a.Group,{controlId:"formBasicPassword"},l.a.createElement(h.a.Select,Object.assign({"aria-label":"Default select example",name:"team_id",className:"team_id noerrtext ".concat(i.team_id&&me," ").concat(M),defaultValue:""},a("team_id",{required:"\u10d0\u10d8\u10e0\u10e9\u10d8\u10d4\u10d7 \u10d2\u10e3\u10dc\u10d3\u10d8"}),{onChange:function(e){P(e.target.value),U(!0),z("border-ok")}}),l.a.createElement("option",{className:"d-none",value:""},"\u10d7\u10d8\u10db\u10d8"),0!==d.length?d.map(function(e,a){return l.a.createElement("option",{value:e.id,key:a,className:"team_id  ".concat(i.team&&me)},e.name)}):l.a.createElement("option",null,"\u10d8\u10e2\u10d5\u10d8\u10e0\u10d7\u10d4\u10d1\u10d0 ..."))),l.a.createElement(h.a.Group,{controlId:"formBasicPassword"},l.a.createElement(h.a.Select,Object.assign({"aria-label":"Default select example",name:"position_id",className:"position_id noerrtext ".concat(i.position_id&&me,"  ").concat(Z),defaultValue:""},a("position_id",{required:"\u10d0\u10d8\u10e0\u10e9\u10d8\u10d4\u10d7 \u10de\u10dd\u10d6\u10d8\u10ea\u10d8\u10d0"}),{onChange:function(e){var a=e.nativeEvent.target.selectedIndex;e.nativeEvent.target[a].innerText,K("border-ok")}}),l.a.createElement("option",{className:"d-none",value:""},"\u10de\u10dd\u10d6\u10d8\u10ea\u10d8\u10d0"),x.map(function(e,a){return l.a.createElement("option",{value:e[1],key:a},e)}))),l.a.createElement(h.a.Group,{controlId:"formBasicEmail"},l.a.createElement(h.a.Label,{name:"email",className:"email noborder ".concat(i.email&&me)},"\u10db\u10d4\u10d8\u10da\u10d8"),l.a.createElement(h.a.Control,Object.assign({type:"email",name:"email",className:"email noerrtext ".concat(i.email&&me),placeholder:"\u10db\u10d4\u10d8\u10da\u10d8",defaultValue:""},a("email",{required:{value:!0,message:"\u10e8\u10d4\u10d0\u10d5\u10e1\u10d4 \u10d5\u10d4\u10da\u10d8"},pattern:{value:/^[A-Za-z0-9._%+-]+@redberry\.ge$/g,message:"\u10e3\u10dc\u10d3\u10d0 \u10db\u10d7\u10d0\u10d5\u10e0\u10d3\u10d4\u10d1\u10dd\u10d3\u10d4\u10e1 @redberry.ge-\u10d7\u10d8"}}))),l.a.createElement(h.a.Text,{className:"text-muted"},l.a.createElement("span",{name:"email",className:"email noborder ".concat(i.email&&me)},i.email?i.email.message:" \u10e3\u10dc\u10d3\u10d0 \u10db\u10d7\u10d0\u10d5\u10e0\u10d3\u10d4\u10d1\u10dd\u10d3\u10d4\u10e1 @redberry.ge-\u10d8\u10d7"))),l.a.createElement(h.a.Group,{controlId:"formBasicPassword"},l.a.createElement(h.a.Label,{name:"phone_number",className:"phone_number noborder ".concat(i.phone_number&&me)},"\u10e2\u10d4\u10da\u10d4\u10e4\u10dd\u10dc\u10d8\u10e1 \u10dc\u10dd\u10db\u10d4\u10e0\u10d8"),l.a.createElement(h.a.Control,Object.assign({type:"text",name:"phone_number",className:"phone_number noerrtext ".concat(i.phone_number&&me),placeholder:"+995 598 00 07 01",defaultValue:""},a("phone_number",{required:{value:!0,message:"\u10e8\u10d4\u10d0\u10d5\u10e1\u10d4 \u10d5\u10d4\u10da\u10d8"},minLength:{value:13},maxLength:{value:13},pattern:{value:/[+0-9]/g}}))),l.a.createElement(h.a.Text,{className:"text-muted noborder ".concat(i.phone_number&&me)},"\u10e3\u10dc\u10d3\u10d0 \u10d0\u10d9\u10db\u10d0\u10e7\u10dd\u10e4\u10d8\u10da\u10d4\u10d1\u10d3\u10d4\u10e1 \u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 \u10db\u10dd\u10d1-\u10dc\u10dd\u10db\u10e0\u10d8\u10e1 \u10e4\u10dd\u10e0\u10db\u10d0\u10e2\u10e1"))),l.a.createElement("fieldset",{ref:Le,className:2===I?"employee-form w-100 d-grid":"employee-form w-100 ifdisplay"},l.a.createElement("div",{className:"d-flex position-relative justify-content-between name-container uploadImageContainer",style:{height:"423px",backgroundColor:"#f6f6f6",borderRadius:"18px",border:"2px dashed #4386a9"}},l.a.createElement("img",{src:Oe,alt:"uploaded_img"}),l.a.createElement("input",Object.assign({type:"file",id:"input",accept:"image/*"},a("laptop_image",{required:{value:!0,message:"\u10e8\u10d4\u10d0\u10d5\u10e1\u10d4 \u10d5\u10d4\u10da\u10d8"},onChange:function(e){je(e.target.files[0]),function(e){var a=new FileReader;a.onload=function(){2===a.readyState&&ke(a.result)},a.readAsDataURL(e.target.files[0])}(e)}})))),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center name-container"},l.a.createElement(h.a.Group,{controlId:"formBasicPassword"},l.a.createElement(h.a.Label,{name:"laptop_name",className:"laptop_name noborder ".concat(i.laptop_name&&me)},"\u10da\u10d4\u10de\u10e2\u10dd\u10de\u10d8\u10e1 \u10e1\u10d0\u10ee\u10d4\u10da\u10d8"),l.a.createElement(h.a.Control,Object.assign({type:"text",name:"laptop_name",className:"laptop_name noerrtext ".concat(i.laptop_name&&me),placeholder:"HP",defaultValue:""},a("laptop_name",{required:{value:!0,message:"\u10e8\u10d4\u10d0\u10d5\u10e1\u10d4 \u10d5\u10d4\u10da\u10d8"},pattern:{value:/^[a-zA-Z0-9!@#$%^&*()_+=]*$/g,message:"\u10da\u10d0\u10d7\u10d8\u10dc\u10e3\u10e0\u10d8 \u10d0\u10e1\u10dd\u10d4\u10d1\u10d8, \u10ea\u10d8\u10e4\u10e0\u10d4\u10d1\u10d8, !@#$%^&*()_+= "}}))),l.a.createElement(h.a.Text,{className:"text-muted"},l.a.createElement("span",{name:"laptop_name",className:"laptop_name noborder ".concat(i.laptop_name&&me)},i.laptop_name?i.laptop_name.message:"\u10da\u10d0\u10d7\u10d8\u10dc\u10e3\u10e0\u10d8 \u10d0\u10e1\u10dd\u10d4\u10d1\u10d8, \u10ea\u10d8\u10e4\u10e0\u10d4\u10d1\u10d8, !@#$%^&*()_+= "))),l.a.createElement(h.a.Group,{controlId:"formBasicPassword"},l.a.createElement(h.a.Select,Object.assign({"aria-label":"Default select example",name:"laptop_brand_id",className:"laptop_brand_id noerrtext ".concat(i.laptop_brand_id&&me," "),defaultValue:""},a("laptop_brand_id",{required:"\u10d0\u10d8\u10e0\u10e9\u10d8\u10d4\u10d7 \u10d1\u10e0\u10d4\u10dc\u10d3\u10d8"}),{onChange:function(e){te("border-ok")}}),l.a.createElement("option",{className:"d-none",value:""},"\u10da\u10d4\u10de\u10e2\u10dd\u10de\u10d8\u10e1 \u10d1\u10e0\u10d4\u10dc\u10d3\u10d8"),0!==de.length?de.map(function(e,a){return l.a.createElement("option",{key:a,className:"laptop_brand_id  ".concat(i.laptopbrand&&me),value:e.id},e.name)}):l.a.createElement("option",null,"\u10d8\u10e2\u10d5\u10d8\u10e0\u10d7\u10d4\u10d1\u10d0 ...")))),l.a.createElement("div",{className:"container-middle-form"},l.a.createElement("div",{className:"d-flex justify-content-between align-items-center name-container "},l.a.createElement(h.a.Group,{controlId:"formBasicPassword"},l.a.createElement(h.a.Select,Object.assign({"aria-label":"Default select example",name:"laptop_cpu",className:"laptop_cpu noerrtext ".concat(i.laptop_cpu&&me," ").concat(X),defaultValue:""},a("laptop_cpu",{required:"\u10d0\u10d8\u10e0\u10e9\u10d8\u10d4\u10d7 laptop_cpu"}),{onChange:function(){Y("border-ok")}}),l.a.createElement("option",{className:"d-none",value:""},"CPU"),0!==_e.length?_e.map(function(e,a){return l.a.createElement("option",{key:a,className:"laptop_cpu  ".concat(i.cpu&&me)},e.name)}):l.a.createElement("option",null,"\u10d8\u10e2\u10d5\u10d8\u10e0\u10d7\u10d4\u10d1\u10d0 ..."))),l.a.createElement(h.a.Group,{controlId:"formBasicPassword"},l.a.createElement(h.a.Label,{name:"laptop_cpu_cores",className:"laptop_cpu_cores noborder ".concat(i.laptop_cpu_cores&&me)},"CPU-\u10e1 \u10d1\u10d8\u10e0\u10d7\u10d5\u10d8"),l.a.createElement(h.a.Control,Object.assign({type:"text",name:"laptop_cpu_cores",className:"laptop_cpu_cores noerrtext ".concat(i.laptop_cpu_cores&&me),placeholder:"14",defaultValue:""},a("laptop_cpu_cores",{required:{value:!0,message:"\u10e8\u10d4\u10d0\u10d5\u10e1\u10d4 \u10d5\u10d4\u10da\u10d8"},pattern:{value:/^[0-9]*$/g,message:"\u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10ea\u10d8\u10e4\u10e0\u10d4\u10d1\u10d8"}}))),l.a.createElement(h.a.Text,{className:"text-muted"},l.a.createElement("span",{name:"laptop_cpu_cores",className:"laptop_cpu_cores noborder ".concat(i.laptop_cpu_cores&&me)},i.laptop_cpu_cores?i.laptop_cpu_cores.message:"\u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10ea\u10d8\u10e4\u10e0\u10d4\u10d1\u10d8"))),l.a.createElement(h.a.Group,{controlId:"formBasicPassword"},l.a.createElement(h.a.Label,{name:"laptop_cpu_threads",className:"laptop_cpu_threads noborder ".concat(i.laptop_cpu_threads&&me)},"CPU-\u10e1 \u10dc\u10d0\u10d9\u10d0\u10d3\u10d8"),l.a.createElement(h.a.Control,Object.assign({type:"text",name:"laptop_cpu_threads",className:"laptop_cpu_threads noerrtext ".concat(i.laptop_cpu_threads&&me),placeholder:"365",defaultValue:""},a("laptop_cpu_threads",{required:{value:!0,message:"\u10e8\u10d4\u10d0\u10d5\u10e1\u10d4 \u10d5\u10d4\u10da\u10d8"},pattern:{value:/^[0-9]*$/g,message:"\u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10ea\u10d8\u10e4\u10e0\u10d4\u10d1\u10d8"}}))),l.a.createElement(h.a.Text,{className:"text-muted"},l.a.createElement("span",{name:"laptop_cpu_threads",className:"laptop_cpu_threads noborder ".concat(i.laptop_cpu_threads&&me)},i.laptop_cpu_threads?i.laptop_cpu_threads.message:"\u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10ea\u10d8\u10e4\u10e0\u10d4\u10d1\u10d8")))),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center name-container"},l.a.createElement(h.a.Group,null,l.a.createElement(h.a.Label,{name:"laptop_ram",className:"laptop_ram noborder ".concat(i.laptop_ram&&me)},"\u10da\u10d4\u10de\u10e2\u10dd\u10de\u10d8\u10e1 RAM (GB)"),l.a.createElement(h.a.Control,Object.assign({type:"text",name:"laptop_ram",className:"laptop_ram noerrtext ".concat(i.laptop_ram&&me),placeholder:"16",defaultValue:""},a("laptop_ram",{required:{value:!0,message:"\u10e8\u10d4\u10d0\u10d5\u10e1\u10d4 \u10d5\u10d4\u10da\u10d8"},pattern:{value:/^[0-9]*$/g,message:"\u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10ea\u10d8\u10e4\u10e0\u10d4\u10d1\u10d8"}}))),l.a.createElement(h.a.Text,{className:"text-muted"},l.a.createElement("span",{name:"laptop_ram",className:"laptop_ram noborder ".concat(i.laptop_ram&&me)},i.laptop_ram?i.laptop_ram.message:"\u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10ea\u10d8\u10e4\u10e0\u10d4\u10d1\u10d8"))),l.a.createElement(h.a.Group,null,l.a.createElement(h.a.Label,{name:"laptop_hard_drive_type",className:"laptop_hard_drive_type noborder choose-div-label ".concat(i.laptop_hard_drive_type&&me)},"\u10db\u10d4\u10ee\u10e1\u10d8\u10d4\u10e0\u10d4\u10d1\u10d8\u10e1 \u10e2\u10d8\u10de\u10d8"),l.a.createElement(h.a.Check,Object.assign({className:"form-check form-check-space",type:"radio",id:"default",label:"SSD",value:"SSD",onClick:function(e){console.log(e.target.checked)}},a("laptop_hard_drive_type"))),l.a.createElement(h.a.Check,Object.assign({className:"form-check",type:"radio",id:"default",label:"HDD",value:"HDD",onClick:function(e){console.log(e.target.checked)}},a("laptop_hard_drive_type")))))),l.a.createElement("div",{className:"d-flex justify-content-between  name-container choose"},l.a.createElement(h.a.Group,null,l.a.createElement(h.a.Label,{name:"laptop_purchase_date",className:"laptop_purchase_date noborder ".concat(i.laptop_purchase_date&&me)},"\u10e8\u10d4\u10eb\u10d4\u10dc\u10d8\u10e1 \u10e0\u10d8\u10ea\u10ee\u10d5\u10d8 (\u10d0\u10e0\u10e9\u10d4\u10d5\u10d8\u10d7\u10d8)"),l.a.createElement(h.a.Control,Object.assign({type:"text",name:"laptop_purchase_date",className:"laptop_purchase_date noerrtext ".concat(i.laptop_purchase_date&&me),placeholder:"\u10d3\u10d3 / \u10d7\u10d7 / \u10ec\u10ec\u10ec\u10ec",defaultValue:""},a("laptop_purchase_date",{required:{value:!1,message:"\u10e8\u10d4\u10d0\u10d5\u10e1\u10d4 \u10d5\u10d4\u10da\u10d8"},pattern:{value:/^[0-9]/g,message:"\u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10ea\u10d8\u10e4\u10e0\u10d4\u10d1\u10d8"}})))),l.a.createElement(h.a.Group,null,l.a.createElement(h.a.Label,{name:"laptop_price",className:"laptop_price noborder ".concat(i.laptop_price&&me)},"\u10da\u10d4\u10de\u10e2\u10dd\u10de\u10d8\u10e1 \u10e4\u10d0\u10e1\u10d8"),l.a.createElement(h.a.Control,Object.assign({type:"text",name:"laptop_price",className:"laptop_price noerrtext ".concat(i.laptop_price&&me),placeholder:"0000",defaultValue:""},a("laptop_price",{required:{value:!0,message:"\u10e8\u10d4\u10d0\u10d5\u10e1\u10d4 \u10d5\u10d4\u10da\u10d8"},pattern:{value:/^[0-9]/g,message:"\u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10ea\u10d8\u10e4\u10e0\u10d4\u10d1\u10d8"}}))),l.a.createElement(h.a.Text,{className:"text-muted"},l.a.createElement("span",{name:"laptop_price",className:"laptop_price noborder ".concat(i.laptop_price&&me)},i.laptop_price?i.laptop_price.message:"\u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10ea\u10d8\u10e4\u10e0\u10d4\u10d1\u10d8")))),l.a.createElement("div",{className:"d-block justify-content-between align-items-center name-container"},l.a.createElement(h.a.Group,null,l.a.createElement(h.a.Label,{name:"laptop_state",className:"laptop_state noborder choose-div-label  ".concat(i.laptop_state&&me)},"\u10da\u10d4\u10de\u10e2\u10dd\u10de\u10d8\u10e1 \u10db\u10d3\u10d2\u10dd\u10db\u10d0\u10e0\u10d4\u10dd\u10d1\u10d0"),l.a.createElement("div",{className:"d-flex"},l.a.createElement(h.a.Check,Object.assign({className:"form-check form-check-space",type:"radio",id:"default",label:"\u10d0\u10ee\u10d0\u10da\u10d8",value:"\u10d0\u10ee\u10d0\u10da\u10d8"},a("laptop_state"))),l.a.createElement(h.a.Check,Object.assign({className:"form-check",type:"radio",id:"default",label:"\u10db\u10d4\u10dd\u10e0\u10d0\u10d3\u10d8",value:"\u10db\u10d4\u10dd\u10e0\u10d0\u10d3\u10d8"},a("laptop_state"))))))),3===I&&l.a.createElement(y,null),l.a.createElement("div",{className:"d-flex"},l.a.createElement(N.a,{variant:"primary",className:1===I?"d-none":"d-block btnreverse me-auto d-flex",ref:Pe,onClick:function(){return T(function(e){return e-1})}},"\u10e3\u10d9\u10d0\u10dc"),l.a.createElement(N.a,{variant:"primary",type:3===I?"submit":"button",className:" btnnext ms-auto d-flex",ref:Ge,onClick:function(){t(Ve),T(!0===re?function(e){return e+1}:function(e){return e}),re&&2===I&&console.log("gaigzavna")}},2===I?" \u10d3\u10d0\u10db\u10d0\u10ee\u10e1\u10dd\u10d5\u10e0\u10d4\u10d1\u10d0 ":" \u10e8\u10d4\u10db\u10d3\u10d4\u10d2\u10d8"))))),l.a.createElement("img",{src:w.a,alt:"redberry-logo",className:"logo-rounded "}))},L=t(19),P=t(22),G=t(33);var V=function(){var e=Object(o.f)(),a=Object(n.useState)([]),t=Object(s.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)(function(){fetch("https://pcfy.redberryinternship.ge/api/laptops?token=".concat("3ebff5ab018b0675ff671820082b2cb7")).then(function(e){return e.json()}).then(function(e){return c(e.data)})},[]),l.a.createElement("div",null,l.a.createElement("button",{className:"goback position-relative gobacklist",onClick:function(){e(-1)}},l.a.createElement("img",{src:k.a,alt:"arrow"})),l.a.createElement("h1",{className:"recordlist-title"},"\u10e9\u10d0\u10dc\u10d0\u10ec\u10d4\u10e0\u10d4\u10d1\u10d8\u10e1 \u10e1\u10d8\u10d0"),0!==r.length?l.a.createElement(G.a,{xs:1,md:2,className:"g-4 card-row"},r.map(function(e,a){return l.a.createElement(P.a,{key:a,className:"p-0"},l.a.createElement(L.a,{className:"recordlist_card flex-row align-items-center"},l.a.createElement(L.a.Img,{variant:"top",className:"record-img",src:"https://pcfy.redberryinternship.ge/"+e.laptop.image}),l.a.createElement(L.a.Body,null,l.a.createElement(L.a.Title,null,e.user.name," ",e.user.surname),l.a.createElement(L.a.Text,null,"hi"),l.a.createElement(f.b,{to:"id=".concat(e.laptop.id)},l.a.createElement("button",{className:"seemore"},"\u10db\u10d4\u10e2\u10d8\u10e1 \u10dc\u10d0\u10ee\u10d5\u10d0")))))})):l.a.createElement("h1",null,"\u10e9\u10d0\u10dc\u10d0\u10ec\u10d4\u10e0\u10d4\u10d1\u10d8\u10e1 \u10e1\u10d8\u10d0 \u10ea\u10d0\u10e0\u10d8\u10d4\u10da\u10d8\u10d0 "))};var I=function(){var e=Object(o.f)();return l.a.createElement("button",{className:"goback position-relative gobacklist"},l.a.createElement("img",{src:k.a,alt:"arrow",onClick:function(){e(-1)}}))};var T=function(){var e=Object(o.e)().pathname.split("id=")[1],a=Object(n.useState)([]),t=Object(s.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)([]),u=Object(s.a)(i,2),d=u[0],f=u[1],b=Object(n.useContext)(m),E=(Object(n.useContext)(p),""),_="";return Object(n.useEffect)(function(){fetch("https://pcfy.redberryinternship.ge/api/laptop/".concat(e,"?token=").concat("3ebff5ab018b0675ff671820082b2cb7")).then(function(e){return e.json()}).then(function(e){return c(e.data)}),fetch("https://pcfy.redberryinternship.ge/api/positions").then(function(e){return e.json()}).then(function(e){return f(e.data)})},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(I,null),l.a.createElement("h1",{className:"detailspage-title"},"\u1c9a\u1c94\u1c9e\u1ca2\u1c9d\u1c9e\u1c98\u1ca1 \u1c98\u1c9c\u1ca4\u1c9d"),0!==r.length?l.a.createElement("div",{className:"infocontainer"},l.a.createElement("div",{className:"info info-row info-1"},l.a.createElement("img",{src:"https://pcfy.redberryinternship.ge/"+r.laptop.image,alt:"laptop_img",className:"laptopimg"}),l.a.createElement("div",null,l.a.createElement("div",{className:"info d-flex"},l.a.createElement("div",null,l.a.createElement("div",null,"\u10e1\u10d0\u10ee\u10d4\u10da\u10d8:"),l.a.createElement("div",null,"\u10d7\u10d8\u10db\u10d8:"),l.a.createElement("div",null,"\u10de\u10dd\u10d6\u10d8\u10ea\u10d8\u10d0:"),l.a.createElement("div",null,"\u10db\u10d4\u10d8\u10da\u10d8:"),l.a.createElement("div",null,"\u10e2\u10d4\u10da. \u10dc\u10dd\u10db\u10d4\u10e0\u10d8:")),l.a.createElement("div",{className:""},l.a.createElement("div",{className:"a"},r.user.name," ",r.user.surname),l.a.createElement("div",null," ",b.filter(function(e,a){e.id===r.user.team_id&&(E=e.name)}),E),l.a.createElement("div",null,d.filter(function(e,a){e.id===r.user.position_id&&(_=e.name)}),_),l.a.createElement("div",null,r.user.email),l.a.createElement("div",null,r.user.phone_number))))),l.a.createElement("div",{className:"info info-row info-2"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null," \u10da\u10d4\u10de\u10e2\u10dd\u10de\u10d8\u10e1 \u10e1\u10d0\u10ee\u10d4\u10da\u10d8:"),l.a.createElement("div",null,"\u10da\u10d4\u10de\u10e2\u10dd\u10de\u10d8\u10e1 \u10d1\u10e0\u10d4\u10dc\u10d3\u10d8:"),l.a.createElement("div",null,"RAM:"),l.a.createElement("div",null,"\u10db\u10d4\u10ee\u10e1\u10d8\u10d4\u10e0\u10d4\u10d1\u10d8\u10e1 \u10e2\u10d8\u10de\u10d8:")),l.a.createElement("div",{className:""},l.a.createElement("div",null,r.laptop.name),l.a.createElement("div",null,r.laptop.brand_id),l.a.createElement("div",null,r.laptop.ram),l.a.createElement("div",null,r.laptop.hard_drive_type))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null," CPU:"),l.a.createElement("div",null,"CPU-\u10e1 \u10d1\u10d8\u10e0\u10d7\u10d5\u10d8:"),l.a.createElement("div",null,"CPU-\u10e1 \u10dc\u10d0\u10d9\u10d0\u10d3\u10d8:")),l.a.createElement("div",{className:""},l.a.createElement("div",null,r.laptop.cpu.name),l.a.createElement("div",null,r.laptop.cpu.cores),l.a.createElement("div",null," ",r.laptop.cpu.threads)))),l.a.createElement("div",{className:"info info-row info-3"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null," \u10da\u10d4\u10de\u10e2\u10dd\u10de\u10d8\u10e1 \u10db\u10d3\u10d2\u10dd\u10db\u10d0\u10e0\u10d4\u10dd\u10d1\u10d0:"),l.a.createElement("div",null,"\u10da\u10d4\u10de\u10e2\u10dd\u10de\u10d8\u10e1 \u10e4\u10d0\u10e1\u10d8:")),l.a.createElement("div",{className:""},l.a.createElement("div",null,r.laptop.state),l.a.createElement("div",null,r.laptop.price))),l.a.createElement("div",null,l.a.createElement("div",null,"\u10e8\u10d4\u10d5\u10e1\u10d4\u10d1\u10d8\u10e1 \u10e0\u10d8\u10ea\u10ee\u10d5\u10d8:"),l.a.createElement("div",null,r.laptop.purchase_date)))):"\u10d8\u10e2\u10d5\u10d8\u10e0\u10d7\u10d4\u10d1\u10d0",console.log(r.laptop))};var q=function(){return l.a.createElement(i,null,l.a.createElement("div",{className:"App"},l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/PCfy/",element:l.a.createElement(g,null)}),l.a.createElement(o.a,{path:"/PCfy/fillform",element:l.a.createElement(S,null)}),l.a.createElement(o.a,{path:"/PCfy/recordlist",element:l.a.createElement(V,null)}),l.a.createElement(o.a,{path:"/PCfy/recordlist/*",element:l.a.createElement(T,null)}))))};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f.a,null,l.a.createElement(q,null))))}},[[38,2,1]]]);
//# sourceMappingURL=main.f7541e54.chunk.js.map