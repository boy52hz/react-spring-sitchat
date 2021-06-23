(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{185:function(e,t,n){"use strict";n.r(t);var r,o,a,i,c,s,u,d,l,j,h,b,f,g,p,O,m,v,x=n(0),y=n(35),w=n.n(y),_=(n(81),n(7)),S=n(29),C=n(22),T=n(9),E=n(2),P=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},R={_url:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL||"",_validateStringField:function(e,t){if("string"!==typeof t||!t.trim().length)throw Error("".concat(e[0].toUpperCase()," is not valid"))},_validateEmail:function(e){if(!P(e))throw Error("".concat(e," is not a valid email"))},setUsername:function(e){e&&sessionStorage.setItem("username",e)},getUsername:function(){return sessionStorage.getItem("username")},setToken:function(e){e&&sessionStorage.setItem("token",e)},getToken:function(){return sessionStorage.getItem("token")},isLoggedIn:function(){return!(!this.getUsername()||!this.getToken())},register:function(e,t,n,r,o,a){var i=this;return Promise.resolve().then((function(){return i._validateStringField("username",e),i._validateEmail(t),i._validateStringField("password",n),i._validateStringField("studentId",r),i._validateStringField("firstName",o),i._validateStringField("lastName",a),fetch("".concat(i._url,"/register"),{method:"POST",body:JSON.stringify({username:e,email:t,password:n,studentId:r,firstName:o,lastName:a}),headers:{"content-type":"application/json"}}).then((function(e){return 201===e.status?e:e.json().then((function(e){var t=e.message;throw Error(t)}))})).then((function(e){return e.json()})).then((function(){return!0}))}))},login:function(e,t){var n=this;return Promise.resolve().then((function(){return n._validateStringField("username",e),n._validateStringField("password",t),fetch("".concat(n._url,"/authenticate"),{method:"POST",body:JSON.stringify({username:e,password:t}),headers:{"content-type":"application/json"}}).then((function(e){return 200===e.status?e:e.json().then((function(e){var t=e.message;throw Error(t)}))})).then((function(e){return e.json()})).then((function(e){return n.setToken(e.jwt),n.setUsername(e.username),!0}))}))},logout:function(){return Promise.resolve().then((function(){return sessionStorage.clear(),!0}))},retrieveUser:function(){return fetch("".concat(this._url,"/user/").concat(this.getUsername()),{method:"GET",headers:{"content-type":"application/json",authorization:"Bearer ".concat(this.getToken())}}).then((function(e){return 200===e.status?e:e.json().then((function(e){var t=e.message;throw Error(t)}))})).then((function(e){return e.json()})).then((function(e){return e}))}},L=n(1),I=Object(x.createContext)(),D=Object(x.createContext)(),A="update",k="login_success",U="login_error",F="logout",N="user_loaded",H="user_load_failed",K="clear_errors",M="error",z=(r={},Object(T.a)(r,A,(function(e,t){var n=t.payload,r=n.name,o=n.value;return Object(E.a)(Object(E.a)({},e),{},Object(T.a)({},r,o))})),Object(T.a)(r,k,(function(e){return Object(E.a)(Object(E.a)({},e),{},{isLoggedIn:!0})})),Object(T.a)(r,N,(function(e,t){return Object(E.a)(Object(E.a)({},e),{},{userData:t.payload.userData})})),Object(T.a)(r,U,(function(e,t){var n=t.payload.error;return Object(E.a)(Object(E.a)({},e),{},{isLoggedIn:!1,error:n})})),Object(T.a)(r,F,(function(){return{name:"",password:"",error:"",isLoggedIn:!1}})),Object(T.a)(r,M,(function(e,t){var n=t.payload.error;return Object(E.a)(Object(E.a)({},e),{},{error:n})})),Object(T.a)(r,H,(function(e,t){var n=t.payload.error;return Object(E.a)(Object(E.a)({},e),{},{error:n})})),Object(T.a)(r,K,(function(e){return Object(E.a)(Object(E.a)({},e),{},{error:""})})),r),B={isLoggedIn:R.isLoggedIn(),token:R.getToken(),username:"",email:"",password:"",userData:void 0,error:""},W=function(e,t){return z[t.type](e,t)||e},q=function(e){var t=e.children,n=Object(x.useReducer)(W,B),r=Object(C.a)(n,2),o=r[0],a=r[1],i=function(){var e=o.username,t=o.password;R.login(e,t).then((function(){a({type:k})})).catch((function(e){var t=e.message;a({type:U,payload:{error:t}})}))},c={onUpdate:function(e){var t=e.target.name,n=e.target.value;a({type:A,payload:{name:t,value:n}})},onRegister:function(e,t,n){var r=o.username,c=o.email,s=o.password;R.register(r,c,s,e,t,n).then((function(){return i()})).catch((function(e){var t=e.message;a({type:M,payload:{error:t}})}))},onLogin:i,onLogout:function(){R.logout().then((function(){a({type:F})}))},onLoadUserData:function(){R.retrieveUser().then((function(e){a({type:N,payload:{userData:e}})})).catch((function(e){var t=e.message;a({type:H,payload:{error:t}})}))},onClearErrors:function(){a({type:K})}};return Object(L.jsx)(I.Provider,{value:o,children:Object(L.jsx)(D.Provider,{value:c,children:t})})},G=function(){var e=Object(x.useContext)(I);if(void 0===e)throw new Error("useAuthState must be used within a AuthProvider");return e},J=function(){var e=Object(x.useContext)(D);if(void 0===e)throw new Error("useAuthDispatch must be used within a AuthProvider");return e},V=n(5),Z=n(6),Y=Z.a.div(o||(o=Object(V.a)(["\n  width: 100vw;\n  height: 100vh;\n"]))),$=n(37),Q=function(e){var t=e.children,n=e.redirectTo,r=Object($.a)(e,["children","redirectTo"]),o=G().isLoggedIn;return Object(L.jsx)(_.b,Object(E.a)(Object(E.a)({},r),{},{render:function(){return o?t:Object(L.jsx)(_.a,{to:n})}}))},X=n(75),ee=n.n(X),te=n(38),ne=n.n(te),re=Z.a.div(a||(a=Object(V.a)(["\n  position: relative;\n  text-align: left;\n  height: 100%;\n  background: rgb(220, 220, 220);\n  opacity: 0.8;\n\n  ul {\n    list-style: none;\n    padding: 24px;\n    margin: 0;\n    border: 1px solid rgb(180, 180, 180);\n    background: rgba(80, 160, 240, 0.1);\n    height: 100%;\n    overflow-y: scroll;\n    width: 50vw;\n    height: 50vh;\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n\n  p {\n    font-size: 22px;\n    padding: 5px 0;\n  }\n\n  h1 {\n    font-weight: 300;\n  }\n"]))),oe=Z.a.li(i||(i=Object(V.a)(["\n  height: auto;\n  min-width: 60%;\n  max-width: 90%;\n  padding-top: ",";\n  text-align: ",";\n  align-self: ",";\n"])),(function(e){return e.newGrouping?"2em":".5em"}),(function(e){return e.isMe?"right":"left"}),(function(e){return e.isMe?"flex-end":"flex-start"})),ae=Z.a.div(c||(c=Object(V.a)(["\n  padding: 1em;\n  border-radius: 10px;\n  background: ",";\n  color: ",";\n  text-align: ",";\n"])),(function(e){return e.isMe?"var(--primary-color)":"rgba(200, 200, 200)"}),(function(e){return e.isMe?"white":""}),(function(e){return e.isMe?"right":"left"})),ie=Z.a.div(s||(s=Object(V.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0px 4px 8px 0px rgba(122,122,122,1);\n"]))),ce=Z.a.h1(u||(u=Object(V.a)(["\n  display: flex;\n  align-items: center;\n  background: var(--primary-color);\n  color: white;\n  padding: 1em;\n\n  button {\n    background: darkred;\n    font-size: 16px;\n  }\n\n  button:hover {\n    background: rgb(180, 0, 0);\n  }\n"]))),se=Z.a.form(d||(d=Object(V.a)(["\n  display: flex;\n  margin: 1em 0;\n"]))),ue=Z.a.div(l||(l=Object(V.a)(["\n  background: white;\n  padding: 2em;\n  border-radius: 5px;\n\n  textarea {\n    flex: 4;\n    border: 1px solid rgb(180, 180, 180);\n    width: 100%;\n    resize: none;\n    font-size: 16px;\n    padding: 10px;\n  }\n\n  button {\n    flex: 1;\n    margin: 0;\n  }\n\n  textarea:focus {\n    outline: none;\n  }\n"]))),de=Z.a.textarea(j||(j=Object(V.a)(["\n  \n"]))),le=function(e){var t=Object.assign({},e);return Object(L.jsx)(x.Fragment,{children:Object(L.jsx)(de,Object(E.a)({},t))})},je=Z.a.button(h||(h=Object(V.a)(["\n\tpadding: 10px 20px;\n\tfont-size: 1em;\n\tmargin: 10px 0;\n\twidth: 100%;\n\toutline: none;\n\tborder: none;\n\tbackground-color: var(--primary-color);\n\tcolor: white;\n\ttransition: all .3s ease-out;\n\n\t:hover {\n\t\tbackground-color: var(--primary-color-hover);\n\t\tcursor: pointer;\n\t}\n\n\t:active {\n\t\tbackground-color: var(--primary-color);\n\t}\n"]))),he=function(e){return Object(L.jsx)(je,Object(E.a)(Object(E.a)({},e),{},{children:e.children}))},be=n(76),fe={_url:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL||"",loadChat:function(e,t){return fetch("".concat(this._url,"/history/").concat(e),{method:"GET",headers:{"content-type":"application/json",authorization:"Bearer ".concat(t)}}).then((function(e){return 200===e.status?e:e.json().then((function(e){var t=e.message;throw Error(t)}))})).then((function(e){return e.json()})).then((function(e){return e}))}},ge=Object(x.createContext)(),pe=Object(x.createContext)(),Oe="chat_loaded",me="chat_load_failed",ve="message_received",xe={chatHistory:[],isChatLoaded:!1},ye=(b={},Object(T.a)(b,Oe,(function(e,t){return Object(E.a)(Object(E.a)({},e),{},{chatHistory:t.payload.chatHistory,isChatLoaded:!0})})),Object(T.a)(b,me,(function(e,t){var n=t.payload.error;return Object(E.a)(Object(E.a)({},e),{},{error:n})})),Object(T.a)(b,ve,(function(e,t){return Object(E.a)(Object(E.a)({},e),{},{chatHistory:[t.payload].concat(Object(be.a)(e.chatHistory))})})),b),we=function(e,t){return ye[t.type](e,t)||e},_e=function(e){var t=e.children,n=Object(x.useReducer)(we,xe),r=Object(C.a)(n,2),o=r[0],a=r[1],i={onLoadChat:function(e){fe.loadChat("main",sessionStorage.getItem("token")).then((function(e){a({type:Oe,payload:{chatHistory:e}})})).catch((function(e){var t=e.message;a({type:me,payload:{error:t}})}))},onMessageReceive:function(e){a({type:ve,payload:e})}};return Object(L.jsx)(ge.Provider,{value:o,children:Object(L.jsx)(pe.Provider,{value:i,children:t})})},Se="Invalid token",Ce="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL?Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL:window.location.origin,"/ws"),Te=function(){var e=Object(x.useRef)(),t=Object(x.useState)(""),n=Object(C.a)(t,2),r=n[0],o=n[1],a=function(){var e=Object(x.useContext)(ge);if(void 0===e)throw new Error("useChatState must be used within a ChatProvider");return e}().chatHistory,i=function(){var e=Object(x.useContext)(pe);if(void 0===e)throw new Error("useChatDispatch must be used within a ChatProvider");return e}(),c=i.onLoadChat,s=i.onMessageReceive,u=J(),d=u.onLogout,l=u.onLoadUserData,j=G(),h=j.userData,b=j.error;Object(x.useEffect)((function(){h||l(),b&&(S.b.error(b,{position:"top-right",autoClose:5e3,hideProgressBar:!0}),d()),c()}),[b,h,d,c,l]);var f=h?function(e){return e.from.username===h.username}:function(){return!1},g=function(e){return e?e.firstName+" "+e.lastName:""},p=function(t){t.preventDefault(),""!==r.trim()&&(e.current.sendMessage("/app/message/main",JSON.stringify({from:h,to:"main",content:r,dateTime:(new Date).getTime().toString()})),o(""))};return!h&&Object(L.jsx)(x.Fragment,{})||b===Se&&Object(L.jsx)(_.a,{to:"/"})||Object(L.jsxs)(re,{children:[Object(L.jsx)(ee.a,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))},url:Ce,topics:["/topic/message/main"],onConnect:function(){S.b.info("You are now connected to chat session.",{position:"top-right",autoClose:5e3,hideProgressBar:!0})},onMessage:function(e){return s(e)},onConnectFailure:function(e){throw console.log("Cannot connect to server. please try to reconnect again."),e},debug:!1,ref:e}),Object(L.jsxs)(ie,{children:[Object(L.jsxs)(ce,{children:[Object(L.jsxs)("div",{style:{flex:"10"},children:["SIT CHAT - ",g(h)]}),Object(L.jsx)(he,{style:{flex:"1"},onClick:d,children:"Logout"})]}),Object(L.jsxs)(ue,{children:[Object(L.jsx)("ul",{children:a.map((function(e,t,n){return Object(L.jsx)(oe,{isMe:f(e),newGrouping:t+1<n.length&&ne()(parseInt(e.dateTime))-ne()(parseInt(n[t+1].dateTime))>1e4,children:Object(L.jsxs)(ae,{isMe:f(e),children:[f(e)?"":Object(L.jsxs)("h4",{children:["(",e.from.studentId,") ",g(e.from),":"]}),Object(L.jsx)("p",{children:e.content}),Object(L.jsx)("p",{style:{textAlign:f(e)?"left":"right",fontSize:"14px"},children:ne()(parseInt(e.dateTime)).fromNow()})]})},e.dateTime)}))}),Object(L.jsxs)(se,{onSubmit:p,children:[Object(L.jsx)(le,{cols:"60",rows:"5",placeholder:"Enter your message",onChange:function(e){var t=e.target.value;o(t)},value:r,onKeyPress:function(e){13!==e.which&&13!==e.charCode||e.shiftKey||p(e)}}),Object(L.jsx)(he,{type:"submit",children:"Send"})]})]})]})]})},Ee=n(16),Pe=Z.a.div(f||(f=Object(V.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n  background: rgb(220, 220, 220);\n\n  a {\n    text-decoration: none;\n    color: var(--primary-color);\n    transition: all .3s ease-out;\n  }\n\n  a:hover {\n    color: var(--primary-color-hover);\n    transform: scale(1.01);\n  }\n\n  h1 {\n    font-weight: 300;\n    padding: 1em 0;\n  }\n"]))),Re=Z.a.div(g||(g=Object(V.a)(["\n  max-width: 1020px;\n  background: white;\n  padding: 2em;\n  border-radius: 5px;\n  box-shadow: 0px 4px 8px 0px rgba(122,122,122,1);\n"]))),Le=Z.a.form(p||(p=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Ie=Z.a.div(O||(O=Object(V.a)(["\n  font-weight: 500;\n  color: red;\n  margin: 10px 0;\n"]))),De=Z.a.input(m||(m=Object(V.a)(["\n\tdisplay: block;\n\tpadding: 0.5em 1em;\n\tmargin: 5px 0;\n\twidth: 300px;\n\theight: 40px;\n\tborder: 1px solid rgba(0, 0, 0, 0.2);\n\tborder-bottom: 2px solid ",";\n\ttransition: all .3s ease-out;\n\tfont-size: 1em;\n\n\t:focus {\n\t\toutline: none;\n\t\tborder-bottom-color: ",";\n\t\tbox-shadow: var(--inner-shadow);\n\t}\n"])),(function(e){return e.invalid?"red":"rgba(0, 0, 0, 0.2)"}),(function(e){return e.invalid?"red":"var(--primary-color)"})),Ae=Z.a.span(v||(v=Object(V.a)(["\n\ttext-align: left;\n\tcolor: red;\n\twidth: 100%;\n\tfont-size: 14px;\n"]))),ke=function(e){var t=e.invalidMsg,n=Object($.a)(e,["invalidMsg"]);return Object(L.jsxs)(x.Fragment,{children:[Object(L.jsx)(De,Object(E.a)(Object(E.a)({},n),{},{ref:n.innerRef,invalid:""!==t})),Object(L.jsx)(Ae,{children:t})]})};ke.defaultProps={invalidMsg:""};var Ue=ke,Fe=function(){var e=J(),t=e.onUpdate,n=e.onLogin,r=G(),o=r.username,a=r.password,i=r.error,c=i||"";return Object(L.jsx)(Pe,{children:Object(L.jsxs)(Re,{children:[Object(L.jsx)("h1",{children:"SIT CHAT"}),Object(L.jsx)(Ie,{children:c}),Object(L.jsxs)(Le,{onSubmit:function(e){e.preventDefault(),n()},autoComplete:"off",children:[Object(L.jsxs)("div",{children:[Object(L.jsx)(Ue,{name:"username",value:o||"",type:"text",placeholder:"Username",onChange:t,required:!0}),Object(L.jsx)(Ue,{name:"password",value:a||"",type:"password",placeholder:"Password",onChange:t,required:!0})]}),Object(L.jsx)(he,{type:"submit",children:"Login"}),Object(L.jsx)(Ee.b,{to:"/register",children:"I don't have an account yet."})]})]})})},Ne=function(){var e=J(),t=e.onUpdate,n=e.onRegister,r=G(),o=r.username,a=r.password,i=r.email,c=r.error,s=Object(x.useRef)(),u=Object(x.useRef)(),d=Object(x.useRef)(),l=Object(x.useRef)(),j=c||"";return Object(L.jsx)(Pe,{children:Object(L.jsxs)(Re,{children:[Object(L.jsx)("h1",{children:"REGISTER"}),Object(L.jsx)(Ie,{children:j}),Object(L.jsxs)(Le,{onSubmit:function(e){e.preventDefault(),d.current.value===a&&n(l.current.value,s.current.value,u.current.value)},children:[Object(L.jsxs)("div",{style:{marginBottom:"8px"},children:[Object(L.jsx)(Ue,{name:"username",value:o||"",type:"text",placeholder:"Username",onChange:t,required:!0}),Object(L.jsx)(Ue,{name:"password",value:a||"",type:"password",placeholder:"Password",onChange:t,required:!0}),Object(L.jsx)(Ue,{name:"confirmPassword",innerRef:d,type:"password",placeholder:"Confirm Password",required:!0})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)(Ue,{name:"firstName",innerRef:s,type:"text",placeholder:"First Name",required:!0}),Object(L.jsx)(Ue,{name:"lastName",innerRef:u,type:"text",placeholder:"Last Name",required:!0}),Object(L.jsx)(Ue,{name:"studentId",innerRef:l,type:"number",placeholder:"Student ID",required:!0}),Object(L.jsx)(Ue,{name:"email",value:i||"",type:"email",placeholder:"Email",onChange:t,required:!0})]}),Object(L.jsx)(he,{type:"submit",children:"Register"}),Object(L.jsx)(Ee.b,{to:"/login",children:"Already have an account? Login"})]})]})})},He=(n(184),function(){var e=J(),t=e.onClearErrors,n=e.onLoadUserData,r=G(),o=r.error,a=r.isLoggedIn,i=r.userData,c=Object(_.g)();return Object(x.useEffect)((function(){var e=c.listen((function(){o&&t()}));return a&&!i&&n(),function(){return e()}}),[c,o,a,i]),Object(L.jsxs)(Y,{children:[Object(L.jsxs)(_.d,{children:[Object(L.jsx)(Q,{exact:!0,path:"/",redirectTo:"/login",children:Object(L.jsx)(Te,{})}),Object(L.jsx)(_.b,{exact:!0,path:"/login",children:a?Object(L.jsx)(_.a,{to:"/"}):Object(L.jsx)(Fe,{})}),Object(L.jsx)(_.b,{exact:!0,path:"/register",children:a?Object(L.jsx)(_.a,{to:"/"}):Object(L.jsx)(Ne,{})})]}),Object(L.jsx)(S.a,{})]})}),Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,186)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),a(e),i(e)}))};w.a.render(Object(L.jsx)(q,{children:Object(L.jsx)(_e,{children:Object(L.jsx)(Ee.a,{children:Object(L.jsx)(He,{})})})}),document.getElementById("root")),Ke()},81:function(e,t,n){}},[[185,1,2]]]);
//# sourceMappingURL=main.f4cd9f58.chunk.js.map