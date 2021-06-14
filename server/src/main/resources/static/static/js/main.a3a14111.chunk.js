(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{182:function(e,n,t){"use strict";t.r(n);var r,a,o,i,c,s,u,d,l,h,j,b,f,p,g,m=t(0),O=t.n(m),x=t(33),v=t.n(x),y=(t(78),t(7)),w=t(34),C=t(22),S=t(10),_=t(3),k=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},L={_url:"",_validateStringField:function(e,n){if("string"!==typeof n||!n.trim().length)throw Error("".concat(e," is not valid"))},_validateEmail:function(e){if(!k(e))throw Error("".concat(e," is not a valid email"))},_username:function(e){if("undefined"===typeof e)return sessionStorage.getItem("username");sessionStorage.setItem("username",e)},_token:function(e){if("undefined"===typeof e)return sessionStorage.getItem("token");sessionStorage.setItem("token",e)},isLoggedIn:function(){return!(!this._username()||!this._token())},register:function(e,n,t,r,a,o){var i=this;return Promise.resolve().then((function(){return i._validateStringField("username",e),i._validateEmail(n),i._validateStringField("password",t),i._validateStringField("studentId",r),i._validateStringField("firstName",a),i._validateStringField("lastName",o),fetch("".concat(i._url,"/register"),{method:"POST",body:JSON.stringify({username:e,email:n,password:t,studentId:r,firstName:a,lastName:o}),headers:{"content-type":"application/json"}}).then((function(e){return 201===e.status?e:e.json().then((function(e){var n=e.message;throw Error(n)}))})).then((function(e){return e.json()})).then((function(){return!0}))}))},login:function(e,n){var t=this;return Promise.resolve().then((function(){return t._validateStringField("username",e),t._validateStringField("password",n),fetch("".concat(t._url,"/authenticate"),{method:"POST",body:JSON.stringify({username:e,password:n}),headers:{"content-type":"application/json"}}).then((function(e){return 200===e.status?e:e.json().then((function(e){var n=e.message;throw Error(n)}))})).then((function(e){return e.json()})).then((function(e){return t._token(e.jwt),t._username(e.username),!0}))}))},logout:function(){return Promise.resolve().then((function(){return sessionStorage.clear(),!0}))},retrieveUser:function(){return fetch("".concat(this._url,"/user/").concat(this._username()),{method:"GET",headers:{"content-type":"application/json",authorization:"Bearer ".concat(this._token())}}).then((function(e){return 200===e.status?e:e.json().then((function(e){var n=e.message;throw Error(n)}))})).then((function(e){return e.json()})).then((function(e){return e}))}},I=t(1),E=Object(m.createContext)(),P=Object(m.createContext)(),F="update",R="login_success",T="login_error",D="logout",N="user_loaded",z="user_load_failed",A="clear_errors",U="error",B=(r={},Object(S.a)(r,F,(function(e,n){var t=n.payload,r=t.name,a=t.value;return Object(_.a)(Object(_.a)({},e),{},Object(S.a)({},r,a))})),Object(S.a)(r,R,(function(e){return Object(_.a)(Object(_.a)({},e),{},{isLoggedIn:!0})})),Object(S.a)(r,N,(function(e,n){return Object(_.a)(Object(_.a)({},e),{},{userData:n.payload.userData})})),Object(S.a)(r,T,(function(e,n){var t=n.payload.error;return Object(_.a)(Object(_.a)({},e),{},{isLoggedIn:!1,error:t})})),Object(S.a)(r,D,(function(){return{name:"",password:"",error:"",isLoggedIn:!1}})),Object(S.a)(r,U,(function(e,n){var t=n.payload.error;return Object(_.a)(Object(_.a)({},e),{},{error:t})})),Object(S.a)(r,z,(function(e,n){var t=n.payload.error;return Object(_.a)(Object(_.a)({},e),{},{error:t})})),Object(S.a)(r,A,(function(e){return Object(_.a)(Object(_.a)({},e),{},{error:""})})),r),H={isLoggedIn:L.isLoggedIn(),token:L._token(),username:"",email:"",password:"",userData:void 0,error:""},M=function(e,n){return B[n.type](e,n)||e},J=function(e){var n=e.children,t=Object(m.useReducer)(M,H),r=Object(C.a)(t,2),a=r[0],o=r[1],i=function(){var e=a.username,n=a.password;L.login(e,n).then((function(){o({type:R})})).catch((function(e){var n=e.message;o({type:T,payload:{error:n}})}))},c={onUpdate:function(e){var n=e.target.name,t=e.target.value;o({type:F,payload:{name:n,value:t}})},onRegister:function(e,n,t){var r=a.username,c=a.email,s=a.password;L.register(r,c,s,e,n,t).then((function(){return i()})).catch((function(e){var n=e.message;o({type:U,payload:{error:n}})}))},onLogin:i,onLogout:function(){L.logout().then((function(){o({type:D})}))},onLoadUserData:function(){L.retrieveUser().then((function(e){o({type:N,payload:{userData:e}})})).catch((function(e){var n=e.message;o({type:z,payload:{error:n}})}))},onClearErrors:function(){o({type:A})}};return Object(I.jsx)(E.Provider,{value:a,children:Object(I.jsx)(P.Provider,{value:c,children:n})})},G=function(){var e=Object(m.useContext)(E);if(void 0===e)throw new Error("useAuthState must be used within a AuthProvider");return e},Z=function(){var e=Object(m.useContext)(P);if(void 0===e)throw new Error("useAuthDispatch must be used within a AuthProvider");return e},Y=t(5),$=t(6),q=$.a.div(a||(a=Object(Y.a)(["\n  width: 100vw;\n  height: 100vh;\n"]))),K=t(35),Q=function(e){var n=e.children,t=e.redirectTo,r=Object(K.a)(e,["children","redirectTo"]),a=G().isLoggedIn;return Object(I.jsx)(y.b,Object(_.a)(Object(_.a)({},r),{},{render:function(){return a?n:Object(I.jsx)(y.a,{to:t})}}))},V=t(72),W=t.n(V),X=t(73),ee=t.n(X),ne=$.a.div(o||(o=Object(Y.a)(["\n  position: relative;\n  text-align: left;\n  height: 100%;\n  background: rgb(220, 220, 220);\n  opacity: 0.8;\n\n  ul {\n    list-style: none;\n    padding: 15px;\n    margin: 0;\n    border: 1px solid rgb(180, 180, 180);\n    height: 100%;\n    overflow-y: scroll;\n    width: 50vw;\n    height: 50vh;\n  }\n\n  li {\n    height: 80px;\n    height: auto;\n    width: 100%;\n    padding: 1em;\n  }\n\n  p {\n    font-size: 22px;\n    padding: 5px 0;\n  }\n\n  h1 {\n    font-weight: 300;\n  }\n"]))),te=$.a.div(i||(i=Object(Y.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0px 4px 8px 0px rgba(122,122,122,1);\n"]))),re=$.a.h1(c||(c=Object(Y.a)(["\n  display: flex;\n  align-items: center;\n  background: var(--primary-color);\n  color: white;\n  padding: 1em;\n\n  button {\n    background: darkred;\n    font-size: 16px;\n  }\n\n  button:hover {\n    background: rgb(180, 0, 0);\n  }\n"]))),ae=$.a.form(s||(s=Object(Y.a)(["\n  display: flex;\n  margin: 1em 0;\n"]))),oe=$.a.div(u||(u=Object(Y.a)(["\n  background: white;\n  padding: 2em;\n  border-radius: 5px;\n\n  textarea {\n    flex: 4;\n    border: 1px solid rgb(180, 180, 180);\n    width: 100%;\n    resize: none;\n    font-size: 16px;\n    padding: 10px;\n  }\n\n  button {\n    flex: 1;\n    margin: 0;\n  }\n\n  textarea:focus {\n    outline: none;\n  }\n"]))),ie=$.a.textarea(d||(d=Object(Y.a)(["\n  \n"]))),ce=function(e){var n=Object.assign({},e);return Object(I.jsx)(m.Fragment,{children:Object(I.jsx)(ie,Object(_.a)({},n))})},se=$.a.button(l||(l=Object(Y.a)(["\n\tpadding: 10px 20px;\n\tfont-size: 1em;\n\tmargin: 10px 0;\n\twidth: 100%;\n\toutline: none;\n\tborder: none;\n\tbackground-color: var(--primary-color);\n\tcolor: white;\n\ttransition: all .3s ease-out;\n\n\t:hover {\n\t\tbackground-color: var(--primary-color-hover);\n\t\tcursor: pointer;\n\t}\n\n\t:active {\n\t\tbackground-color: var(--primary-color);\n\t}\n"]))),ue=function(e){return Object(I.jsx)(se,Object(_.a)(Object(_.a)({},e),{},{children:e.children}))},de={_url:"",loadChat:function(e,n){return fetch("".concat(this._url,"/history/").concat(e),{method:"GET",headers:{"content-type":"application/json",authorization:"Bearer ".concat(n)}}).then((function(e){return 200===e.status?e:e.json().then((function(e){var n=e.message;throw Error(n)}))})).then((function(e){return e.json()})).then((function(e){return e}))}},le=Object(m.createContext)(),he=Object(m.createContext)(),je="chat_loaded",be="chat_load_failed",fe={chatHistory:[],isChatLoaded:!1},pe=(h={},Object(S.a)(h,je,(function(e,n){return Object(_.a)(Object(_.a)({},e),{},{chatHistory:n.payload.chatHistory,isChatLoaded:!0})})),Object(S.a)(h,be,(function(e,n){var t=n.payload.error;return Object(_.a)(Object(_.a)({},e),{},{error:t})})),h),ge=function(e,n){return pe[n.type](e,n)||e},me=function(e){var n=e.children,t=Object(m.useReducer)(ge,fe),r=Object(C.a)(t,2),a=r[0],o=r[1],i={onLoadChat:function(e){de.loadChat("main",sessionStorage.getItem("token")).then((function(e){o({type:je,payload:{chatHistory:e}})})).catch((function(e){var n=e.message;o({type:be,payload:{error:n}})}))}};return Object(I.jsx)(le.Provider,{value:a,children:Object(I.jsx)(he.Provider,{value:i,children:n})})},Oe=function(){var e=Object(m.useRef)(),n=Object(m.useState)(""),t=Object(C.a)(n,2),r=t[0],a=t[1],o=function(){var e=Object(m.useContext)(le);if(void 0===e)throw new Error("useChatState must be used within a ChatProvider");return e}(),i=o.chatHistory,c=o.isChatLoaded,s=function(){var e=Object(m.useContext)(he);if(void 0===e)throw new Error("useChatDispatch must be used within a ChatProvider");return e}().onLoadChat,u=Z().onLogout,d=G(),l=d.userData,h=d.token;Object(m.useEffect)((function(){c||s()}),[s,c]);var j=function(e){return e.from.split(" ")[0]===l.firstName},b=l?l.firstName+" "+l.lastName:"";return l?Object(I.jsxs)(ne,{children:[Object(I.jsx)(W.a,{headers:{Authorization:"Bearer ".concat(h)},url:"http://localhost:8080/ws",topics:["/topic/message/main"],onConnect:function(){w.b.info("You are now connected to chat session.",{position:"top-right",autoClose:5e3,hideProgressBar:!0})},onMessage:function(e){s()},onConnectFailure:function(e){throw console.log("Cannot connect to server. please try to reconnect again."),e},debug:!1,ref:e}),Object(I.jsxs)(te,{children:[Object(I.jsxs)(re,{children:[Object(I.jsxs)("div",{style:{flex:"10"},children:["SIT CHAT - ",b]}),Object(I.jsx)(ue,{style:{flex:"1"},onClick:u,children:"Logout"})]}),Object(I.jsxs)(oe,{children:[Object(I.jsx)("ul",{children:i.map((function(e,n){return Object(I.jsxs)("li",{children:[Object(I.jsxs)("div",{children:[Object(I.jsxs)("h4",{children:[e.from," ",j(e)?"(Me)":"",":"]}),Object(I.jsx)("p",{children:e.content})]}),Object(I.jsx)("p",{style:{textAlign:"right",fontSize:"14px"},children:ee()(parseInt(e.dateTime)).fromNow()})]},n)}))}),Object(I.jsxs)(ae,{onSubmit:function(n){n.preventDefault(),e.current.sendMessage("/app/message/main",JSON.stringify({from:b,to:"main",content:r,dateTime:(new Date).getTime().toString()})),a("")},children:[Object(I.jsx)(ce,{cols:"60",rows:"5",placeholder:"Enter your message",onChange:function(e){var n=e.target.value;a(n)},value:r}),Object(I.jsx)(ue,{type:"submit",children:"Send"})]})]})]})]}):Object(I.jsx)(m.Fragment,{})},xe=t(17),ve=$.a.div(j||(j=Object(Y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n  background: rgb(220, 220, 220);\n\n  a {\n    text-decoration: none;\n    color: var(--primary-color);\n    transition: all .3s ease-out;\n  }\n\n  a:hover {\n    color: var(--primary-color-hover);\n    transform: scale(1.01);\n  }\n\n  h1 {\n    font-weight: 300;\n    padding: 1em 0;\n  }\n"]))),ye=$.a.div(b||(b=Object(Y.a)(["\n  max-width: 1020px;\n  background: white;\n  padding: 2em;\n  border-radius: 5px;\n  box-shadow: 0px 4px 8px 0px rgba(122,122,122,1);\n"]))),we=$.a.form(f||(f=Object(Y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Ce=$.a.input(p||(p=Object(Y.a)(["\n\tdisplay: block;\n\tpadding: 0.5em 1em;\n\tmargin: 5px 0;\n\twidth: 300px;\n\theight: 40px;\n\tborder: 1px solid rgba(0, 0, 0, 0.2);\n\tborder-bottom: 2px solid ",";\n\ttransition: all .3s ease-out;\n\tfont-size: 1em;\n\n\t:focus {\n\t\toutline: none;\n\t\tborder-bottom-color: ",";\n\t\tbox-shadow: var(--inner-shadow);\n\t}\n"])),(function(e){return e.invalid?"red":"rgba(0, 0, 0, 0.2)"}),(function(e){return e.invalid?"red":"rgba(0, 0, 0, 0.2)"})),Se=$.a.span(g||(g=Object(Y.a)(["\n\ttext-align: left;\n\tcolor: red;\n\twidth: 100%;\n\tfont-size: 14px;\n"]))),_e=function(e){var n=e.invalidMsg,t=Object(K.a)(e,["invalidMsg"]);return Object(I.jsxs)(m.Fragment,{children:[Object(I.jsx)(Ce,Object(_.a)(Object(_.a)({},t),{},{ref:t.innerRef,invalid:""!==n})),Object(I.jsx)(Se,{children:n})]})};_e.defaultProps={invalidMsg:""};var ke,Le,Ie,Ee=_e,Pe=function(){var e=Z(),n=e.onUpdate,t=e.onLogin,r=G(),a=r.username,o=r.password;return Object(I.jsx)(ve,{children:Object(I.jsxs)(ye,{children:[Object(I.jsx)("h1",{children:"SIT CHAT"}),Object(I.jsxs)(we,{onSubmit:function(e){e.preventDefault(),t()},children:[Object(I.jsxs)("div",{children:[Object(I.jsx)(Ee,{name:"username",value:a||"",type:"text",placeholder:"Username",onChange:n}),Object(I.jsx)(Ee,{name:"password",value:o||"",type:"password",placeholder:"Password",onChange:n})]}),Object(I.jsx)(ue,{type:"submit",children:"Login"}),Object(I.jsx)(xe.b,{to:"/register",children:"I don't have an account yet."})]})]})})},Fe=$.a.div(ke||(ke=Object(Y.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ntext-align: center;\nheight: 100%;\nbackground: rgb(220, 220, 220);\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n  transition: all .3s ease-out;\n}\n\na:hover {\n  color: var(--primary-color-hover);\n  transform: scale(1.01);\n}\n\nh1 {\n  font-weight: 300;\n  padding: 1em 0;\n}\n"]))),Re=$.a.div(Le||(Le=Object(Y.a)(["\n  max-width: 1020px;\n  background: white;\n  padding: 2em;\n  border-radius: 5px;\n  box-shadow: 0px 4px 8px 0px rgba(122,122,122,1);\n"]))),Te=$.a.form(Ie||(Ie=Object(Y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),De=function(){var e=Z(),n=e.onUpdate,t=e.onRegister,r=G(),a=r.username,o=r.password,i=r.email,c=Object(m.useRef)(),s=Object(m.useRef)(),u=Object(m.useRef)(),d=Object(m.useRef)();return Object(I.jsx)(Fe,{children:Object(I.jsxs)(Re,{children:[Object(I.jsx)("h1",{children:"REGISTER"}),Object(I.jsxs)(Te,{onSubmit:function(e){e.preventDefault(),u.current.value===o&&t(d.current.value,c.current.value,s.current.value)},children:[Object(I.jsxs)("div",{style:{marginBottom:"8px"},children:[Object(I.jsx)(Ee,{name:"username",value:a||"",type:"text",placeholder:"Username",onChange:n}),Object(I.jsx)(Ee,{name:"password",value:o||"",type:"password",placeholder:"Password",onChange:n}),Object(I.jsx)(Ee,{name:"confirmPassword",innerRef:u,type:"password",placeholder:"Confirm Password"})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)(Ee,{name:"firstName",innerRef:c,type:"text",placeholder:"First Name"}),Object(I.jsx)(Ee,{name:"lastName",innerRef:s,type:"text",placeholder:"Last Name"}),Object(I.jsx)(Ee,{name:"studentId",innerRef:d,type:"text",placeholder:"Student ID"}),Object(I.jsx)(Ee,{name:"email",value:i||"",type:"email",placeholder:"Email",onChange:n})]}),Object(I.jsx)(ue,{type:"submit",children:"Register"}),Object(I.jsx)(xe.b,{to:"/login",children:"Already have an account? Login"})]})]})})},Ne=(t(181),function(){var e=Z(),n=e.onClearErrors,t=e.onLoadUserData,r=G(),a=r.error,o=r.isLoggedIn,i=r.userData,c=Object(y.g)();return Object(m.useEffect)((function(){var e=c.listen((function(){a&&n()}));return o&&!i&&t(),function(){return e()}}),[c,a,n,o,i,t]),Object(I.jsxs)(q,{children:[Object(I.jsxs)(y.d,{children:[Object(I.jsx)(Q,{exact:!0,path:"/",redirectTo:"/login",children:Object(I.jsx)(Oe,{})}),Object(I.jsx)(y.b,{exact:!0,path:"/login",children:o?Object(I.jsx)(y.a,{to:"/"}):Object(I.jsx)(Pe,{})}),Object(I.jsx)(y.b,{exact:!0,path:"/register",children:o?Object(I.jsx)(y.a,{to:"/"}):Object(I.jsx)(De,{})})]}),Object(I.jsx)(w.a,{})]})}),ze=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,183)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),o(e),i(e)}))};v.a.render(Object(I.jsx)(O.a.StrictMode,{children:Object(I.jsx)(J,{children:Object(I.jsx)(me,{children:Object(I.jsx)(xe.a,{children:Object(I.jsx)(Ne,{})})})})}),document.getElementById("root")),ze()},78:function(e,n,t){}},[[182,1,2]]]);
//# sourceMappingURL=main.a3a14111.chunk.js.map