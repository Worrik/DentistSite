(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"05b5":function(t,e,a){},"4b56":function(t,e,a){"use strict";a("05b5")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{style:{background:t.$vuetify.theme.themes[t.theme].background}},[a("router-view")],1)},i=[],r={name:"App",computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}}},s=r,c=(a("5c0b"),a("2877")),l=a("6544"),d=a.n(l),u=a("7496"),p=Object(c["a"])(s,o,i,!1,null,null,null),h=p.exports;d()(p,{VApp:u["a"]});var v=a("f309"),f=a("fcf4");n["a"].use(v["a"]);var m=new v["a"]({theme:{dark:!0,themes:{light:{primary:f["a"].purple,secondary:f["a"].grey.darken1,accent:f["a"].shades.black,error:f["a"].red.accent3,background:f["a"].indigo.lighten5},dark:{primary:"#FDFFFF",background:"#A79C86",secondary:"#8D4745",navbar:"#9d8f7e",appbar:"#d57d5e",delete:"#857d6d",update:"#857d6d",create:"#857d6d"}}}}),g=a("8c4f"),b=a("bc3a"),y=a.n(b),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4",lg:"4"}},[a("v-card",{attrs:{color:"navbar",elevation:"0"}},[a("v-card-text",[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[t.error?a("v-alert",{attrs:{color:"secondary",dense:"",type:"error"}},[t._v(t._s(t.error))]):t._e(),a("v-text-field",{staticClass:"rounded-0",attrs:{label:"Enter your name",name:"username","prepend-inner-icon":"mdi-email",outlined:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("v-text-field",{staticClass:"rounded-0",attrs:{label:"Enter your password",name:"password","prepend-inner-icon":"mdi-lock",type:"password",outlined:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-btn",{attrs:{type:"submit",color:"secondary","x-large":"",block:""}},[t._v("Login")])],1)],1)],1)],1)],1)],1)],1)},_=[],x=(a("99af"),{name:"Login",data:function(){return{username:"",password:"",error:""}},methods:{login:function(){var t=this,e=this.username,a=this.password;this.$http.post("".concat(this.$hostname,"/token/"),"username=".concat(e,"&password=").concat(a)).then((function(e){e.data.access_token&&(n["a"].prototype.$http.defaults.headers.common["Authorization"]="bearer ".concat(e.data.access_token),t.$router.push("/dashboard"),localStorage.setItem("token","bearer ".concat(e.data.access_token)))})).catch((function(){t.error="Incorrect name or password"}))}}}),k=x,C=a("0798"),V=a("8336"),P=a("b0af"),S=a("99d9"),$=a("62ad"),T=a("a523"),A=a("4bd4"),O=a("f6c4"),I=a("0fd9"),D=a("8654"),j=Object(c["a"])(k,w,_,!1,null,"5fd7740a",null),F=j.exports;d()(j,{VAlert:C["a"],VBtn:V["a"],VCard:P["a"],VCardText:S["b"],VCol:$["a"],VContainer:T["a"],VForm:A["a"],VMain:O["a"],VRow:I["a"],VTextField:D["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{app:"",flat:"",color:"appbar"}},[t.drawer?t._e():a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-app-bar-title",{domProps:{textContent:t._s(t.activePatient||"History")}}),a("v-spacer"),t.activePatient?a("AddOperation",{attrs:{"active-patient-id":t.activePatientId,"active-patient":t.activePatient,onSelect:t.onSelect,fetchPatients:t.fetchPatients}}):t._e()],1),a("v-progress-linear",{style:t.loader?"z-index: 100":"",attrs:{indeterminate:t.loader,color:"red darken-2"}}),a("v-navigation-drawer",{attrs:{app:"",color:"navbar"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",[a("v-text-field",{staticClass:"search",attrs:{label:"Search","append-icon":"mdi-magnify","hide-details":"",outlined:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("SpeechControl",{attrs:{onSelect:t.onSelect,fetchPatients:t.fetchPatients,fetchHistory:t.fetchHistory}}),a("AddPatient",{attrs:{"fetch-patients":t.fetchPatients}}),a("v-list-item-group",t._l(t.filteredPatients,(function(e){return a("v-list-item",{key:e.id},[a("v-list-item-content",{on:{click:function(a){return t.onSelect(e.id,e.surname+" "+e.name)}}},[a("v-list-item-title",{domProps:{textContent:t._s(e.surname+" "+e.name)}}),a("v-list-item-subtitle",{domProps:{textContent:t._s(e.debt+" $")}})],1),a("DeletePatient",{attrs:{"patient-id":e.id,"fetch-patients":t.fetchPatients}})],1)})),1)],1)],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[t.historyChanges.length&&t.showHistory?a("div",{staticClass:"operation-list"},t._l(t.historyChanges,(function(e){return a("v-list-item",{key:e.id,staticClass:"operation",class:e.type},[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.type)}}),a("v-list-item-subtitle",{domProps:{textContent:t._s(e.description)}})],1)],1)})),1):t._e(),t.operations.length&&!t.showHistory?a("div",{staticClass:"operation-list"},t._l(t.operations,(function(e){return a("v-list-item",{key:e.id,staticClass:"operation",class:!1!==e.paid?"create":"delete"},[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(""+e.type)}}),a("v-list-item-subtitle",{domProps:{textContent:t._s(e.price+" $")}})],1),a("div",{staticClass:"toggle checkcross"},[a("input",{ref:"operation-toggle-"+e.id,refInFor:!0,staticClass:"checkcross",attrs:{id:"operation-toggle-"+e.id,type:"checkbox"},domProps:{checked:!e.paid},on:{change:function(a){return t.payForOperation(e.id)}}}),a("label",{staticClass:"toggle-item",attrs:{for:"operation-toggle-"+e.id}},[a("div",{staticClass:"check"})])])],1)})),1):t._e()])],1)],1)},E=[],H=(a("4de4"),a("d3b7"),a("b0c0"),a("caad"),a("2532"),a("ac1f"),a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"600px","hide-overlay":"","no-click-animation":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"add-patient",attrs:{color:"secondary"}},"v-btn",o,!1),n),[t._v(" Add patient ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{color:"background"}},[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v("Add Patient")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-col",[a("v-row",[a("v-text-field",{attrs:{rules:t.rules,label:"Surname",required:""},model:{value:t.surname,callback:function(e){t.surname=e},expression:"surname"}})],1),a("v-row",[a("v-text-field",{attrs:{rules:t.rules,label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){return t.addPatient()}}},[t._v(" Add ")])],1)],1)],1)}),L=[],q={name:"AddPatient",props:["fetchPatients"],data:function(){return{dialog:!1,valid:!0,name:"",surname:"",rules:[function(t){return!!t||"This field is required"}]}},methods:{addPatient:function(){var t=this;this.$refs.form.validate()&&(this.loader=!0,this.$http.post("".concat(this.$hostname,"/patients/create"),{surname:this.surname,name:this.name}).then((function(e){console.log(e),t.loader=!1,t.dialog=!1,t.fetchPatients()})))}}},B=q,z=a("169a"),M=a("2fa4"),N=Object(c["a"])(B,H,L,!1,null,"831bd58a",null),U=N.exports;d()(N,{VBtn:V["a"],VCard:P["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VCol:$["a"],VContainer:T["a"],VDialog:z["a"],VForm:A["a"],VRow:I["a"],VSpacer:M["a"],VTextField:D["a"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"600px","hide-overlay":"","no-click-animation":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{icon:""}},n),[a("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v("Add Operation")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-col",[a("v-row",[a("v-select",{attrs:{items:t.operationTypes,color:"secondary",label:"Type",rules:t.rules,dense:"",solo:"",required:""},model:{value:t.operationType,callback:function(e){t.operationType=e},expression:"operationType"}})],1),a("v-row",[a("v-text-field",{attrs:{rules:t.rules,type:"number",label:"Price",required:""},model:{value:t.operationPrice,callback:function(e){t.operationPrice=e},expression:"operationPrice"}})],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){return t.closeDialog()}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){return t.addOperation()}}},[t._v(" Add ")])],1)],1)],1)},G=[],Q={name:"AddOperation",props:["activePatient","activePatientId","onSelect","fetchPatients"],data:function(){return{dialog:!1,valid:!0,operationType:"",operationPrice:"",operationTypes:["Удаление зуба","Еще что-то","Протезирование","Пломбирование","Имплантация"],rules:[function(t){return!!t||"This field is required"}]}},methods:{addOperation:function(){var t=this;this.$refs.form.validate()&&(this.loader=!0,this.$http.post("".concat(this.$hostname,"/operations/create"),{patient_id:this.activePatientId,type:this.operationType,price:this.operationPrice}).then((function(){t.loader=!1,t.dialog=!1,t.onSelect(t.activePatientId,t.activePatient),t.fetchPatients()})))},closeDialog:function(){this.dialog=!1}}},Y=Q,K=a("132d"),W=a("b974"),X=Object(c["a"])(Y,J,G,!1,null,"18f07594",null),Z=X.exports;d()(X,{VBtn:V["a"],VCard:P["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VCol:$["a"],VContainer:T["a"],VDialog:z["a"],VForm:A["a"],VIcon:K["a"],VRow:I["a"],VSelect:W["a"],VSpacer:M["a"],VTextField:D["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"400","hide-overlay":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"#faa",icon:""}},"v-btn",o,!1),n),[a("v-icon",[t._v("mdi-delete")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[t._v(" Вы действительно хотите удалить? ")]),a("v-card-text",[t._v("Это действие необратимо.")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" No ")]),a("v-btn",{attrs:{color:"white",text:""},on:{click:t.deletePatient}},[t._v(" Yes ")])],1)],1)],1)},et=[],at={props:["patientId","fetchPatients"],data:function(){return{dialog:!1}},methods:{deletePatient:function(){var t=this;console.log(this.patientId),this.$http.delete("".concat(this.$hostname,"/patients/delete?id=").concat(this.patientId)).then((function(e){t.fetchPatients(),console.log(e),t.dialog=!1}))}}},nt=at,ot=Object(c["a"])(nt,tt,et,!1,null,null,null),it=ot.exports;d()(ot,{VBtn:V["a"],VCard:P["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VDialog:z["a"],VIcon:K["a"],VSpacer:M["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"400","hide-overlay":"","no-click-animation":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[t.isSupport?a("v-btn",t._g(t._b({staticClass:"add-patient",attrs:{color:"secondary"},on:{click:function(e){return t.prepare()}}},"v-btn",o,!1),n),[t._v(" Speech Control ")]):t._e()]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[t._v(" Speech Control ")]),a("v-card-text",[a("p",[t._v("- "+t._s(t.queryToDialogflow))]),a("p",[t._v("- "+t._s(t.dialogflowAnswer))]),a("v-btn",{staticClass:"button",attrs:{color:t.buttonColor,icon:""},on:{click:function(e){return t.start()}}},[a("v-icon",{attrs:{size:"40"}},[t._v("mdi-microphone")])],1)],1),t._v(" "+t._s(t.speechText)+" "),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){return t.closeDialog()}}},[t._v(" Close ")])],1)],1)],1)},st=[],ct={name:"SpeechControl",props:["fetchPatients","fetchHistory"],data:function(){return{isSupport:window.SpeechRecognition||window.webkitSpeechRecognition,dialog:!1,speechText:"",buttonColor:"white",recognition:window.SpeechRecognition||window.webkitSpeechRecognition,recognitionStart:!1,queryToDialogflow:"Query",dialogflowAnswer:"Answer",speech:SpeechSynthesisUtterance}},created:function(){},methods:{closeDialog:function(){this.onSpeechEnd(),this.dialog=!1},prepare:function(){var t=window.SpeechRecognition||window.webkitSpeechRecognition;this.recognition=new t,this.recognition.lang="ru-RU",this.recognition.onaudiostart=this.onAudioStart,this.recognition.onresult=this.onResult,this.recognition.onspeechend=this.onSpeechEnd,this.recognition.onerror=function(t){alert("Speech recognition error detected: "+t.error),alert("Additional information: "+t.message)},this.speech=new SpeechSynthesisUtterance,this.speech.lang="ru-RU"},start:function(){this.recognitionStart?(this.buttonColor="white",this.onSpeechEnd()):(this.recognition.start(),console.log("Ready to receive command."),this.buttonColor="red"),this.recognitionStart=!this.recognitionStart},onAudioStart:function(){console.log("start")},onResult:function(t){var e=this,a=t.results.length-1;console.log("".concat(t.results[a][0].transcript,", ").concat(t)),console.log("Confidence: "+t.results[0][0].confidence),this.queryToDialogflow=t.results[a][0].transcript,this.recognitionStart=!1,this.$http.post("".concat(this.$hostname,"/speechcontrol/1/"),{text:t.results[a][0].transcript}).then((function(t){e.dialogflowAnswer=t.data["answer"],e.speech.text=t.data["answer"],window.speechSynthesis.speak(e.speech),t.data.need_update&&(e.fetchHistory(),e.fetchPatients())}))},onSpeechEnd:function(){this.recognition.stop(),window.speechSynthesis.cancel(),this.buttonColor="white",this.recognitionStart=!1}}},lt=ct,dt=(a("4b56"),Object(c["a"])(lt,rt,st,!1,null,"08e25592",null)),ut=dt.exports;d()(dt,{VBtn:V["a"],VCard:P["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VDialog:z["a"],VIcon:K["a"],VSpacer:M["a"]});var pt={name:"Dashboard",components:{SpeechControl:ut,DeletePatient:it,AddOperation:Z,AddPatient:U},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"},filteredPatients:function(){var t=this;return this.patients!==[]?this.patients.filter((function(e){var a="".concat(e.surname," ").concat(e.name);return a.toLowerCase().includes(t.search.toLowerCase())})):[]}},data:function(){return{drawer:null,loader:!0,search:"",patients:[],operations:[],activePatient:"",activePatientId:-1,historyChanges:[],showHistory:!0,model:1}},created:function(){this.fetchPatients(),this.fetchHistory(!0)},methods:{fetchPatients:function(){var t=this;this.$http.get("".concat(this.$hostname,"/patients/")).then((function(e){t.patients=e.data,t.loader=!1,console.log(e.data)})).catch((function(t){console.log(t),localStorage.removeItem("token")}))},onSelect:function(t,e){var a=this;this.showHistory=!1,this.loader=!0,this.$http.get("".concat(this.$hostname,"/operations?user=").concat(t)).then((function(t){a.operations=t.data,a.loader=!1})),this.activePatient=e,this.activePatientId=t},payForOperation:function(t){for(var e=this,a=this.operations.length-1;a>=0;a--)if(this.operations[a].id===t){this.$http.put("".concat(this.$hostname,"/operations/").concat(t,"/pay?value=").concat(!this.operations[a].paid)).then((function(){return e.fetchPatients()})),this.operations[a].paid=!this.operations[a].paid;break}},fetchHistory:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.showHistory=!0,e&&this.$http.get("".concat(this.$hostname,"/history")).then((function(e){t.historyChanges=e.data}))}}},ht=pt,vt=a("40dc"),ft=a("5bc1"),mt=a("bb78"),gt=a("8860"),bt=a("da13"),yt=a("5d23"),wt=a("1baa"),_t=a("f774"),xt=a("8e36"),kt=Object(c["a"])(ht,R,E,!1,null,"4d52fcd8",null),Ct=kt.exports;d()(kt,{VAppBar:vt["a"],VAppBarNavIcon:ft["a"],VAppBarTitle:mt["a"],VContainer:T["a"],VList:gt["a"],VListItem:bt["a"],VListItemContent:yt["a"],VListItemGroup:wt["a"],VListItemSubtitle:yt["b"],VListItemTitle:yt["c"],VMain:O["a"],VNavigationDrawer:_t["a"],VProgressLinear:xt["a"],VSpacer:M["a"],VTextField:D["a"]}),n["a"].use(g["a"]),n["a"].config.productionTip=!1,n["a"].prototype.$http=y.a,n["a"].prototype.$hostname="https://course-work-rp.herokuapp.com";var Vt=[{path:"/login",component:{render:function(t){return t(F)}}},{path:"/dashboard",component:{render:function(t){return t(Ct)}}}],Pt=new g["a"]({routes:Vt,mode:"history"}),St=localStorage.getItem("token");St?(n["a"].prototype.$http.defaults.headers.common["Authorization"]=St,Pt.push("dashboard")):Pt.push("login"),new n["a"]({router:Pt,vuetify:m,iconfont:"fa",render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.4f3a6b96.js.map
