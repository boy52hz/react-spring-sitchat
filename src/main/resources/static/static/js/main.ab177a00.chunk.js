(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{185:function(e,n,t){"use strict";t.r(n);var r,o,a,i,c,s,u,d,l,j,h,b,f,g,p,O,m,x,v=t(0),y=t(34),w=t.n(y),_=(t(81),t(7)),S=t(36),C=t(22),T=t(9),E=t(2),P=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},R={_url:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL||"",_validateStringField:function(e,n){if("string"!==typeof n||!n.trim().length)throw Error("".concat(e[0].toUpperCase()," is not valid"))},_validateEmail:function(e){if(!P(e))throw Error("".concat(e," is not a valid email"))},setUsername:function(e){e&&sessionStorage.setItem("username",e)},getUsername:function(){return sessionStorage.getItem("username")},setToken:function(e){e&&sessionStorage.setItem("token",e)},getToken:function(){return sessionStorage.getItem("token")},isLoggedIn:function(){return!(!this.getUsername()||!this.getToken())},register:function(e,n,t,r,o,a){var i=this;return Promise.resolve().then((function(){return i._validateStringField("username",e),i._validateEmail(n),i._validateStringField("password",t),i._validateStringField("studentId",r),i._validateStringField("firstName",o),i._validateStringField("lastName",a),fetch("".concat(i._url,"/register"),{method:"POST",body:JSON.stringify({username:e,email:n,password:t,studentId:r,firstName:o,lastName:a}),headers:{"content-type":"application/json"}}).then((function(e){return 201===e.status?e:e.json().then((function(e){var n=e.message;throw Error(n)}))})).then((function(e){return e.json()})).then((function(){return!0}))}))},login:function(e,n){var t=this;return Promise.resolve().then((function(){return t._validateStringField("username",e),t._validateStringField("password",n),fetch("".concat(t._url,"/authenticate"),{method:"POST",body:JSON.stringify({username:e,password:n}),headers:{"content-type":"application/json"}}).then((function(e){return 200===e.status?e:e.json().then((function(e){var n=e.message;throw Error(n)}))})).then((function(e){return e.json()})).then((function(e){return t.setToken(e.jwt),t.setUsername(e.username),!0}))}))},logout:function(){return Promise.resolve().then((function(){return sessionStorage.clear(),!0}))},retrieveUser:function(){return fetch("".concat(this._url,"/user/").concat(this.getUsername()),{method:"GET",headers:{"content-type":"application/json",authorization:"Bearer ".concat(this.getToken())}}).then((function(e){return 200===e.status?e:e.json().then((function(e){var n=e.message;throw Error(n)}))})).then((function(e){return e.json()})).then((function(e){return e}))}},L=t(1),I=Object(v.createContext)(),D=Object(v.createContext)(),k="update",A="login_success",U="login_error",F="logout",N="user_loaded",H="user_load_failed",K="clear_errors",M="error",z=(r={},Object(T.a)(r,k,(function(e,n){var t=n.payload,r=t.name,o=t.value;return Object(E.a)(Object(E.a)({},e),{},Object(T.a)({},r,o))})),Object(T.a)(r,A,(function(e){return Object(E.a)(Object(E.a)({},e),{},{isLoggedIn:!0})})),Object(T.a)(r,N,(function(e,n){return Object(E.a)(Object(E.a)({},e),{},{userData:n.payload.userData})})),Object(T.a)(r,U,(function(e,n){var t=n.payload.error;return Object(E.a)(Object(E.a)({},e),{},{isLoggedIn:!1,error:t})})),Object(T.a)(r,F,(function(){return{name:"",password:"",error:"",isLoggedIn:!1}})),Object(T.a)(r,M,(function(e,n){var t=n.payload.error;return Object(E.a)(Object(E.a)({},e),{},{error:t})})),Object(T.a)(r,H,(function(e,n){var t=n.payload.error;return Object(E.a)(Object(E.a)({},e),{},{error:t})})),Object(T.a)(r,K,(function(e){return Object(E.a)(Object(E.a)({},e),{},{error:""})})),r),W={isLoggedIn:R.isLoggedIn(),token:R.getToken(),username:"",email:"",password:"",userData:void 0,error:""},B=function(e,n){return z[n.type](e,n)||e},q=function(e){var n=e.children,t=Object(v.useReducer)(B,W),r=Object(C.a)(t,2),o=r[0],a=r[1],i=function(){var e=o.username,n=o.password;R.login(e,n).then((function(){a({type:A})})).catch((function(e){var n=e.message;a({type:U,payload:{error:n}})}))},c={onUpdate:function(e){var n=e.target.name,t=e.target.value;a({type:k,payload:{name:n,value:t}})},onRegister:function(e,n,t){var r=o.username,c=o.email,s=o.password;R.register(r,c,s,e,n,t).then((function(){return i()})).catch((function(e){var n=e.message;a({type:M,payload:{error:n}})}))},onLogin:i,onLogout:function(){R.logout().then((function(){a({type:F})}))},onLoadUserData:function(){R.retrieveUser().then((function(e){a({type:N,payload:{userData:e}})})).catch((function(e){var n=e.message;a({type:H,payload:{error:n}})}))},onClearErrors:function(){a({type:K})}};return Object(L.jsx)(I.Provider,{value:o,children:Object(L.jsx)(D.Provider,{value:c,children:n})})},G=function(){var e=Object(v.useContext)(I);if(void 0===e)throw new Error("useAuthState must be used within a AuthProvider");return e},J=function(){var e=Object(v.useContext)(D);if(void 0===e)throw new Error("useAuthDispatch must be used within a AuthProvider");return e},V=t(4),Z=t(5),Y=Z.a.div(o||(o=Object(V.a)(["\n  width: 100vw;\n  height: 100vh;\n"]))),$=t(37),Q=function(e){var n=e.children,t=e.redirectTo,r=Object($.a)(e,["children","redirectTo"]),o=G().isLoggedIn;return Object(L.jsx)(_.b,Object(E.a)(Object(E.a)({},r),{},{render:function(){return o?n:Object(L.jsx)(_.a,{to:t})}}))},X=t(75),ee=t.n(X),ne=t(38),te=t.n(ne),re=Z.a.div(a||(a=Object(V.a)(["\n  position: relative;\n  text-align: left;\n  height: 100%;\n  background: rgb(220, 220, 220);\n  opacity: 0.8;\n\n  ul {\n    list-style: none;\n    padding: 24px;\n    margin: 0;\n    border: 1px solid rgb(180, 180, 180);\n    background: rgba(80, 160, 240, 0.1);\n    height: 100%;\n    overflow-y: scroll;\n    width: 50vw;\n    height: 50vh;\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n\n  p {\n    font-size: 22px;\n    padding: 5px 0;\n  }\n\n  h1 {\n    font-weight: 300;\n  }\n"]))),oe=Z.a.li(i||(i=Object(V.a)(["\n  height: auto;\n  min-width: 60%;\n  max-width: 90%;\n  padding-top: ",";\n  text-align: ",";\n  align-self: ",";\n"])),(function(e){return e.newGrouping?"2em":".5em"}),(function(e){return e.isMe?"right":"left"}),(function(e){return e.isMe?"flex-end":"flex-start"})),ae=Z.a.div(c||(c=Object(V.a)(["\n  padding: 1em;\n  border-radius: 10px;\n  background: ",";\n  color: ",";\n  text-align: ",";\n"])),(function(e){return e.isMe?"var(--primary-color)":"rgba(200, 200, 200)"}),(function(e){return e.isMe?"white":""}),(function(e){return e.isMe?"right":"left"})),ie=Z.a.div(s||(s=Object(V.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0px 4px 8px 0px rgba(122,122,122,1);\n"]))),ce=Z.a.h1(u||(u=Object(V.a)(["\n  display: flex;\n  align-items: center;\n  background: var(--primary-color);\n  color: white;\n  padding: 1em;\n\n  button {\n    background: darkred;\n    font-size: 16px;\n  }\n\n  button:hover {\n    background: rgb(180, 0, 0);\n  }\n"]))),se=Z.a.form(d||(d=Object(V.a)(["\n  display: flex;\n  margin: 1em 0;\n"]))),ue=Z.a.div(l||(l=Object(V.a)(["\n  background: white;\n  padding: 2em;\n  border-radius: 5px;\n\n  textarea {\n    flex: 4;\n    border: 1px solid rgb(180, 180, 180);\n    width: 100%;\n    resize: none;\n    font-size: 16px;\n    padding: 10px;\n  }\n\n  button {\n    flex: 1;\n    margin: 0;\n  }\n\n  textarea:focus {\n    outline: none;\n  }\n"]))),de=Z.a.textarea(j||(j=Object(V.a)(["\n  \n"]))),le=function(e){var n=Object.assign({},e);return Object(L.jsx)(v.Fragment,{children:Object(L.jsx)(de,Object(E.a)({},n))})},je=Z.a.button(h||(h=Object(V.a)(["\n\tpadding: 10px 20px;\n\tfont-size: 1em;\n\tmargin: 10px 0;\n\twidth: 100%;\n\toutline: none;\n\tborder: none;\n\tbackground-color: var(--primary-color);\n\tcolor: white;\n\ttransition: all .3s ease-out;\n\n\t:hover {\n\t\tbackground-color: var(--primary-color-hover);\n\t\tcursor: pointer;\n\t}\n\n\t:active {\n\t\tbackground-color: var(--primary-color);\n\t}\n"]))),he=function(e){return Object(L.jsx)(je,Object(E.a)(Object(E.a)({},e),{},{children:e.children}))},be=t(76),fe={_url:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL||"",loadChat:function(e,n){return fetch("".concat(this._url,"/history/").concat(e),{method:"GET",headers:{"content-type":"application/json",authorization:"Bearer ".concat(n)}}).then((function(e){return 200===e.status?e:e.json().then((function(e){var n=e.message;throw Error(n)}))})).then((function(e){return e.json()})).then((function(e){return e}))}},ge=Object(v.createContext)(),pe=Object(v.createContext)(),Oe="chat_loaded",me="chat_load_failed",xe="message_received",ve={chatHistory:[],isChatLoaded:!1},ye=(b={},Object(T.a)(b,Oe,(function(e,n){return Object(E.a)(Object(E.a)({},e),{},{chatHistory:n.payload.chatHistory,isChatLoaded:!0})})),Object(T.a)(b,me,(function(e,n){var t=n.payload.error;return Object(E.a)(Object(E.a)({},e),{},{error:t})})),Object(T.a)(b,xe,(function(e,n){return Object(E.a)(Object(E.a)({},e),{},{chatHistory:[n.payload].concat(Object(be.a)(e.chatHistory))})})),b),we=function(e,n){return ye[n.type](e,n)||e},_e=function(e){var n=e.children,t=Object(v.useReducer)(we,ve),r=Object(C.a)(t,2),o=r[0],a=r[1],i={onLoadChat:function(e){fe.loadChat("main",sessionStorage.getItem("token")).then((function(e){a({type:Oe,payload:{chatHistory:e}})})).catch((function(e){var n=e.message;a({type:me,payload:{error:n}})}))},onMessageReceive:function(e){a({type:xe,payload:e})}};return Object(L.jsx)(ge.Provider,{value:o,children:Object(L.jsx)(pe.Provider,{value:i,children:n})})},Se="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL?Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL:window.location.origin,"/ws"),Ce=function(){var e=Object(v.useRef)(),n=Object(v.useState)(""),t=Object(C.a)(n,2),r=t[0],o=t[1],a=function(){var e=Object(v.useContext)(ge);if(void 0===e)throw new Error("useChatState must be used within a ChatProvider");return e}(),i=a.chatHistory,c=a.isChatLoaded,s=function(){var e=Object(v.useContext)(pe);if(void 0===e)throw new Error("useChatDispatch must be used within a ChatProvider");return e}(),u=s.onLoadChat,d=s.onMessageReceive,l=J().onLogout,j=G(),h=j.userData,b=j.token;Object(v.useEffect)((function(){c||u()}),[u,c,b]);var f=function(e){return e.from.username===h.username},g=function(e){return e?e.firstName+" "+e.lastName:""},p=function(n){n.preventDefault(),""!==r.trim()&&(e.current.sendMessage("/app/message/main",JSON.stringify({from:h,to:"main",content:r,dateTime:(new Date).getTime().toString()})),o(""))};return h?Object(L.jsxs)(re,{children:[Object(L.jsx)(ee.a,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))},url:Se,topics:["/topic/message/main"],onConnect:function(){S.b.info("You are now connected to chat session.",{position:"top-right",autoClose:5e3,hideProgressBar:!0})},onMessage:function(e){return d(e)},onConnectFailure:function(e){throw console.log("Cannot connect to server. please try to reconnect again."),e},debug:!0,ref:e,autoReconnect:!0}),Object(L.jsxs)(ie,{children:[Object(L.jsxs)(ce,{children:[Object(L.jsxs)("div",{style:{flex:"10"},children:["SIT CHAT - ",g(h)]}),Object(L.jsx)(he,{style:{flex:"1"},onClick:l,children:"Logout"})]}),Object(L.jsxs)(ue,{children:[Object(L.jsx)("ul",{children:i.map((function(e,n,t){return Object(L.jsx)(oe,{isMe:f(e),newGrouping:n+1<t.length&&te()(parseInt(e.dateTime))-te()(parseInt(t[n+1].dateTime))>1e4,children:Object(L.jsxs)(ae,{isMe:f(e),children:[f(e)?"":Object(L.jsxs)("h4",{children:["(",e.from.studentId,") ",g(e.from),":"]}),Object(L.jsx)("p",{children:e.content}),Object(L.jsx)("p",{style:{textAlign:f(e)?"left":"right",fontSize:"14px"},children:te()(parseInt(e.dateTime)).fromNow()})]})},e.dateTime)}))}),Object(L.jsxs)(se,{onSubmit:p,children:[Object(L.jsx)(le,{cols:"60",rows:"5",placeholder:"Enter your message",onChange:function(e){var n=e.target.value;o(n)},value:r,onKeyPress:function(e){13!==e.which&&13!==e.charCode||e.shiftKey||p(e)}}),Object(L.jsx)(he,{type:"submit",children:"Send"})]})]})]})]}):Object(L.jsx)(v.Fragment,{})},Te=t(17),Ee=Z.a.div(f||(f=Object(V.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n  background: rgb(220, 220, 220);\n\n  a {\n    text-decoration: none;\n    color: var(--primary-color);\n    transition: all .3s ease-out;\n  }\n\n  a:hover {\n    color: var(--primary-color-hover);\n    transform: scale(1.01);\n  }\n\n  h1 {\n    font-weight: 300;\n    padding: 1em 0;\n  }\n"]))),Pe=Z.a.div(g||(g=Object(V.a)(["\n  max-width: 1020px;\n  background: white;\n  padding: 2em;\n  border-radius: 5px;\n  box-shadow: 0px 4px 8px 0px rgba(122,122,122,1);\n"]))),Re=Z.a.form(p||(p=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Le=Z.a.div(O||(O=Object(V.a)(["\n  font-weight: 500;\n  color: red;\n  margin: 10px 0;\n"]))),Ie=Z.a.input(m||(m=Object(V.a)(["\n\tdisplay: block;\n\tpadding: 0.5em 1em;\n\tmargin: 5px 0;\n\twidth: 300px;\n\theight: 40px;\n\tborder: 1px solid rgba(0, 0, 0, 0.2);\n\tborder-bottom: 2px solid ",";\n\ttransition: all .3s ease-out;\n\tfont-size: 1em;\n\n\t:focus {\n\t\toutline: none;\n\t\tborder-bottom-color: ",";\n\t\tbox-shadow: var(--inner-shadow);\n\t}\n"])),(function(e){return e.invalid?"red":"rgba(0, 0, 0, 0.2)"}),(function(e){return e.invalid?"red":"var(--primary-color)"})),De=Z.a.span(x||(x=Object(V.a)(["\n\ttext-align: left;\n\tcolor: red;\n\twidth: 100%;\n\tfont-size: 14px;\n"]))),ke=function(e){var n=e.invalidMsg,t=Object($.a)(e,["invalidMsg"]);return Object(L.jsxs)(v.Fragment,{children:[Object(L.jsx)(Ie,Object(E.a)(Object(E.a)({},t),{},{ref:t.innerRef,invalid:""!==n})),Object(L.jsx)(De,{children:n})]})};ke.defaultProps={invalidMsg:""};var Ae,Ue,Fe,Ne=ke,He=function(){var e=J(),n=e.onUpdate,t=e.onLogin,r=G(),o=r.username,a=r.password,i=r.error,c=i||"";return Object(L.jsx)(Ee,{children:Object(L.jsxs)(Pe,{children:[Object(L.jsx)("h1",{children:"SIT CHAT"}),Object(L.jsx)(Le,{children:c}),Object(L.jsxs)(Re,{onSubmit:function(e){e.preventDefault(),t()},autoComplete:"off",children:[Object(L.jsxs)("div",{children:[Object(L.jsx)(Ne,{name:"username",value:o||"",type:"text",placeholder:"Username",onChange:n,required:!0}),Object(L.jsx)(Ne,{name:"password",value:a||"",type:"password",placeholder:"Password",onChange:n,required:!0})]}),Object(L.jsx)(he,{type:"submit",children:"Login"}),Object(L.jsx)(Te.b,{to:"/register",children:"I don't have an account yet."})]})]})})},Ke=Z.a.div(Ae||(Ae=Object(V.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ntext-align: center;\nheight: 100%;\nbackground: rgb(220, 220, 220);\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n  transition: all .3s ease-out;\n}\n\na:hover {\n  color: var(--primary-color-hover);\n  transform: scale(1.01);\n}\n\nh1 {\n  font-weight: 300;\n  padding: 1em 0;\n}\n"]))),Me=Z.a.div(Ue||(Ue=Object(V.a)(["\n  max-width: 1020px;\n  background: white;\n  padding: 2em;\n  border-radius: 5px;\n  box-shadow: 0px 4px 8px 0px rgba(122,122,122,1);\n"]))),ze=Z.a.form(Fe||(Fe=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),We=function(){var e=J(),n=e.onUpdate,t=e.onRegister,r=G(),o=r.username,a=r.password,i=r.email,c=Object(v.useRef)(),s=Object(v.useRef)(),u=Object(v.useRef)(),d=Object(v.useRef)();return Object(L.jsx)(Ke,{children:Object(L.jsxs)(Me,{children:[Object(L.jsx)("h1",{children:"REGISTER"}),Object(L.jsxs)(ze,{onSubmit:function(e){e.preventDefault(),u.current.value===a&&t(d.current.value,c.current.value,s.current.value)},children:[Object(L.jsxs)("div",{style:{marginBottom:"8px"},children:[Object(L.jsx)(Ne,{name:"username",value:o||"",type:"text",placeholder:"Username",onChange:n,required:!0}),Object(L.jsx)(Ne,{name:"password",value:a||"",type:"password",placeholder:"Password",onChange:n,required:!0}),Object(L.jsx)(Ne,{name:"confirmPassword",innerRef:u,type:"password",placeholder:"Confirm Password",required:!0})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)(Ne,{name:"firstName",innerRef:c,type:"text",placeholder:"First Name",required:!0}),Object(L.jsx)(Ne,{name:"lastName",innerRef:s,type:"text",placeholder:"Last Name",required:!0}),Object(L.jsx)(Ne,{name:"studentId",innerRef:d,type:"number",placeholder:"Student ID",required:!0}),Object(L.jsx)(Ne,{name:"email",value:i||"",type:"email",placeholder:"Email",onChange:n,required:!0})]}),Object(L.jsx)(he,{type:"submit",children:"Register"}),Object(L.jsx)(Te.b,{to:"/login",children:"Already have an account? Login"})]})]})})},Be=(t(184),function(){var e=J(),n=e.onClearErrors,t=e.onLoadUserData,r=G(),o=r.error,a=r.isLoggedIn,i=r.userData,c=Object(_.g)();return Object(v.useEffect)((function(){var e=c.listen((function(){o&&n()}));return a&&!i&&t(),function(){return e()}}),[c,o,n,a,i,t]),Object(L.jsxs)(Y,{children:[Object(L.jsxs)(_.d,{children:[Object(L.jsx)(Q,{exact:!0,path:"/",redirectTo:"/login",children:Object(L.jsx)(Ce,{})}),Object(L.jsx)(_.b,{exact:!0,path:"/login",children:a?Object(L.jsx)(_.a,{to:"/"}):Object(L.jsx)(He,{})}),Object(L.jsx)(_.b,{exact:!0,path:"/register",children:a?Object(L.jsx)(_.a,{to:"/"}):Object(L.jsx)(We,{})})]}),Object(L.jsx)(S.a,{})]})}),qe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,186)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),o(e),a(e),i(e)}))};w.a.render(Object(L.jsx)(q,{children:Object(L.jsx)(_e,{children:Object(L.jsx)(Te.a,{children:Object(L.jsx)(Be,{})})})}),document.getElementById("root")),qe()},81:function(e,n,t){}},[[185,1,2]]]);
//# sourceMappingURL=main.ab177a00.chunk.js.map