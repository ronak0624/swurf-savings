(this.webpackJsonpswurf=this.webpackJsonpswurf||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(25),r=a.n(l),i=(a(71),a(72),a(16)),o=a(21),c=a(6),m=a(7),u=a(10),d=a(8),h=a(11),p=a(34),f=a(35);function g(){var e=Object(p.a)(["\n  display: block;\n  text-align: center;\n  @media (max-width: ",") {\n    display: none;\n  }\n"]);return g=function(){return e},e}function v(){var e=Object(p.a)(["\n  display: none;\n  text-align: center;\n  @media (max-width: ",") {\n    display: block;\n  }\n"]);return v=function(){return e},e}var E=f.a.div(v(),(function(e){return e.size})),b=f.a.div(g(),(function(e){return e.size})),w=function(e){var t=e.onClick,a=e.icon;return s.a.createElement("div",{role:"button",onClick:t},a)},N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(){a.setState({showMenu:!a.state.showMenu})},a.state={showMenu:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.menu,a=e.largeMenuClassName,n=e.smallMenuClassName,l=e.changeMenuOn,r=e.menuOpenButton,i=e.menuCloseButton;return s.a.createElement("div",null,s.a.createElement(b,{className:a,size:l},t),s.a.createElement(E,{className:n,size:l},this.state.showMenu?s.a.createElement(w,{onClick:this.handleClick,icon:i}):s.a.createElement(w,{onClick:this.handleClick,icon:r}),this.state.showMenu?s.a.createElement("div",null,t):null))}}]),t}(n.Component);N.defaultProps={largeMenuClassName:"",smallMenuClassName:""};var y=N,_=a(30),O=a.n(_),k=a(4),C=a.n(k),x=function(e,t){e?(C.a.defaults.headers.common.Authorization=e,C.a.defaults.headers.common.user=t):delete C.a.defaults.headers.common.Authorization},S=a(26),M=function(e){return{type:"SET_CURRENT_USER",payload:e}},j=function(){return function(e){localStorage.removeItem("jwtToken"),localStorage.removeItem("user"),x(!1),e(M({})),console.log("LOGOUT ACTION TRIGGERED")}},T=a(20),z=a(19),R=a(58),A=a(23),I=a(95),L={isAuthenticated:!1,user:{},loading:!1},D={},B=Object(z.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(A.a)({},e,{isAuthenticated:!I(t.payload),user:t.payload});case"USER_LOADING":return Object(A.a)({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),U=[R.a],P=Object(z.e)(B,{},Object(z.d)(z.a.apply(void 0,U),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||z.d)),V=a(13),F=a(3),G=a.n(F),q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).onChange=function(t){e.setState(Object(V.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault(),console.log(e.state);var a={email:e.state.email,password:e.state.password};e.props.loginUser(a)},e.state={email:"",password:"",errors:{}},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/savings")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/savings"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return s.a.createElement("div",{className:"d-flex align-items-center min-vh-100 py-11 mx-auto"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"card mx-auto"},s.a.createElement("div",{className:"card-body p-sm-9"},s.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},s.a.createElement("h2",{className:"mb-5"},"Login"),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("label",{className:"sr-only",htmlFor:"email"},"Email"),s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("svg",{className:"gi gi-person-fill fs-sm",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"}),s.a.createElement("path",{d:"M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"}))),s.a.createElement("input",{className:G()("","form-control","form-control-lg",{invalid:e.email||e.emailnotfound}),id:"email",type:"email",onChange:this.onChange,value:this.state.email,error:e.email,placeholder:"Email"})),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("label",{className:"sr-only",htmlFor:"password"},"Password"),s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("svg",{className:"gi gi-lock-fill fs-sm",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("circle",{cx:"12",cy:"15",r:"1"}),s.a.createElement("path",{d:"M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4zM12 18a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"}))),s.a.createElement("input",{className:G()("","form-control","form-control-lg",{invalid:e.password||e.passwordincorrect}),id:"password",type:"password",onChange:this.onChange,value:this.state.password,error:e.password,placeholder:"Password"})),s.a.createElement("span",{className:"red-text"},e.email,e.emailnotfound,e.password,e.passwordincorrect),s.a.createElement("button",{className:"btn btn-block btn-lg btn-primary mt-3",type:"submit"},"Sign In"),s.a.createElement("p",{className:"mt-5 text-center"},"Don't have account? ",s.a.createElement(i.b,{to:"/register"},"Register"),"."))))))}}]),t}(n.Component),H=Object(T.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){C.a.post(S.apiURL+"/api/auth/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),localStorage.setItem("user",e.data.user);var n=e.data.userName.split(" ").map((function(e){return e[0]})).join("");localStorage.setItem("userInitials",n),x(a,e.data.user);var s=O()(a);t(M(s))})).catch((function(e){return t({type:"GET_ERRORS",payload:e.response.data})}))}}})(q),W=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).onChange=function(t){e.cursor=t.target.selectionStart,e.setState(Object(V.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2};e.props.registerUser(a,e.props.history)},e.onFocus=function(t){t.target.selectionStart=e.cursor},e.state={name:"",email:"",password:"",password2:"",errors:{}},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/savings")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return s.a.createElement("div",{className:"d-flex align-items-center min-vh-100 py-11 mx-auto"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"card mx-auto"},s.a.createElement("div",{className:"card-body p-sm-9"},s.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},s.a.createElement("h2",{className:"mb-5"},"Login"),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("label",{className:"sr-only",htmlFor:"email"},"Email"),s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("svg",{className:"gi gi-person-fill fs-sm",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"}),s.a.createElement("path",{d:"M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"}))),s.a.createElement("input",{className:G()("","form-control","form-control-lg",{invalid:e.name}),id:"name",type:"text",onChange:this.onChange,value:this.state.name,error:e.name,placeholder:"Name"}),s.a.createElement("span",{className:"red-text ml-4"},e.name)),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("label",{className:"sr-only",htmlFor:"email"},"Email"),s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("svg",{className:"gi gi-person-fill fs-sm",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"}),s.a.createElement("path",{d:"M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"}))),s.a.createElement("input",{className:G()("","form-control","form-control-lg",{invalid:e.email}),id:"email",type:"email",onChange:this.onChange,value:this.state.email,error:e.email,placeholder:"Email"}),s.a.createElement("span",{className:"red-text ml-4"},e.email)),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("label",{className:"sr-only",htmlFor:"password"},"Password"),s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("svg",{className:"gi gi-lock-fill fs-sm",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("circle",{cx:"12",cy:"15",r:"1"}),s.a.createElement("path",{d:"M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4zM12 18a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"}))),s.a.createElement("input",{className:G()("","form-control","form-control-lg",{invalid:e.password}),id:"password",type:"password",onChange:this.onChange,value:this.state.password,error:e.password,placeholder:"Password"}),s.a.createElement("span",{className:"red-text ml-4"},e.password)),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("label",{className:"sr-only",htmlFor:"password"},"Confirm password"),s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("svg",{className:"gi gi-lock-fill fs-sm",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("circle",{cx:"12",cy:"15",r:"1"}),s.a.createElement("path",{d:"M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4zM12 18a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"}))),s.a.createElement("input",{className:G()("","form-control","form-control-lg",{invalid:e.password2}),id:"password2",type:"password",onChange:this.onChange,value:this.state.password2,error:e.password2,placeholder:"Confirm password"}),s.a.createElement("span",{className:"red-text ml-4"},e.password2)),s.a.createElement("button",{className:"btn btn-block btn-lg btn-primary mt-3",type:"submit"},"Sign In"),s.a.createElement("p",{className:"mt-5 text-center"},"Already have an account? ",s.a.createElement(i.b,{to:"/login"},"Log In"),"."))))))}}]),t}(n.Component),J=Object(T.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){C.a.post(S.apiURL+"/api/auth/register",e).then((function(e){return t.push("/login")})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(o.g)(W)),X=a(28),$=a.n(X),Z=a(29),K=(a(105),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={listOpen:!1,headerTitle:a.props.title,classes:"dd-wrapper "+a.props.className},a.close=a.close.bind(Object(Z.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(){var e=this,t=this.state.listOpen;setTimeout((function(){t?window.addEventListener("click",e.close):window.removeEventListener("click",e.close)}),0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.close)}},{key:"close",value:function(e){this.setState({listOpen:!1})}},{key:"selectItem",value:function(e,t,a){this.setState({headerTitle:e,listOpen:!1},this.props.resetThenSet(t,a))}},{key:"toggleList",value:function(){this.setState((function(e){return{listOpen:!e.listOpen}}))}},{key:"render",value:function(){var e=this,t=this.props.list,a=this.state,n=a.listOpen,l=a.headerTitle;return s.a.createElement("div",{className:this.state.classes},s.a.createElement("div",{className:"dd-header",onClick:function(){return e.toggleList()}},s.a.createElement("div",{className:"dd-header-title"},l)),n&&s.a.createElement("ul",{className:"dd-list",onClick:function(e){return e.stopPropagation()}},t.map((function(t){return s.a.createElement("li",{className:"dd-list-item",key:t.id,onClick:function(){return e.selectItem(t.title,t.id,t.key)}},t.title)}))))}}]),t}(n.Component)),Q=a(24),Y=a(61),ee=a(41);a(106);function te(e){var t=function(e,t){var a=parseInt(e.substring(0,2)),n=parseInt(t.substring(0,2)),s=n-a;return a>n&&(s=12-a+n),s+" hours, "+Math.abs(parseInt(t.substring(3,5))-parseInt(e.substring(3,5)))+" minutes"}(e.shiftStart,e.shiftEnd);return s.a.createElement(Q.a,{className:"mb-5 card-shift mx-auto",bsClass:"card-shift"},s.a.createElement(Q.a.Body,null,s.a.createElement(Y.a,null,s.a.createElement(ee.a,null,s.a.createElement(Q.a.Title,null,"Earnings"),s.a.createElement(Q.a.Text,{className:"text-center"},"$",e.earnings)),s.a.createElement(ee.a,null,s.a.createElement(Q.a.Title,null,"Shift"),s.a.createElement(Q.a.Text,{className:"text-center"},t)))))}var ae=a(31),ne=S.apiURL,se=function(e){return C.a.get(ne+"/api/shifts",{headers:{user:localStorage.user}})},le=function(e){return C()({method:"post",url:"api/shifts",headers:{user:localStorage.user},data:e})},re=function(){return C.a.get(ne+"/api/savings/goals",{headers:{user:localStorage.user}})},ie=function(e){return C()({method:"post",url:"api/savings/goals",headers:{user:localStorage.user},data:e})},oe=function(e){return C()({method:"get",url:"api/savings/goals/active/"+e,headers:{user:localStorage.user}}).then((function(e){return console.log(e)}))},ce=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={earnings:0,shift_start:"",shift_end:"",shift_start_suffix:"",shift_end_suffix:"",shifts:[],showModal:!1,shift_start_suffix_list:[{id:0,title:"AM",key:"shift_start_suffix_list"},{id:1,title:"PM",key:"shift_start_suffix_list"}],shift_end_suffix_list:[{id:0,title:"AM",key:"shift_end_suffix_list"},{id:1,title:"PM",key:"shift_end_suffix_list"}],shift_start_list:[{id:0,title:"1:00",key:"shift_start_list"},{id:1,title:"2:00",key:"shift_start_list"},{id:2,title:"3:00",key:"shift_start_list"},{id:3,title:"4:00",key:"shift_start_list"},{id:4,title:"5:00",key:"shift_start_list"},{id:5,title:"6:00",key:"shift_start_list"},{id:6,title:"7:00",key:"shift_start_list"},{id:7,title:"8:00",key:"shift_start_list"},{id:8,title:"9:00",key:"shift_start_list"},{id:9,title:"10:00",key:"shift_start_list"},{id:10,title:"11:00",key:"shift_start_list"},{id:11,title:"12:00",key:"shift_start_list"}],shift_end_list:[{id:1,title:"1:00",key:"shift_end_list"},{id:1,title:"2:00",key:"shift_end_list"},{id:2,title:"3:00",key:"shift_end_list"},{id:3,title:"4:00",key:"shift_end_list"},{id:4,title:"5:00",key:"shift_end_list"},{id:5,title:"6:00",key:"shift_end_list"},{id:6,title:"7:00",key:"shift_end_list"},{id:7,title:"8:00",key:"shift_end_list"},{id:8,title:"9:00",key:"shift_end_list"},{id:9,title:"10:00",key:"shift_end_list"},{id:10,title:"11:00",key:"shift_end_list"},{id:11,title:"12:00",key:"shift_end_list"}]},a.handleChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState((function(e){return Object(A.a)({},e,Object(V.a)({},n,s))}))},a.loadShifts=function(){se().then((function(e){a.setState({shifts:e.data}),console.log(a.state.shifts)})).catch((function(e){return console.log(e)}))},a.handleOpenModal=function(){a.setState({showModal:!0})},a.handleCloseModal=function(){a.setState({showModal:!1})},a.handleSubmit=function(e,t){var n=a.state,s=n.shift_start,l=n.shift_end,r=n.earnings;s+=a.state.shift_start_suffix,l+=a.state.shift_end_suffix,r=Number.parseInt(r),e.body={shift_start:s,shift_end:l,earnings:r},console.log(e.body),le(e.body).then((function(e){200===e.status&&(a.handleCloseModal(),a.loadShifts())}))},a.resetThenSet=function(e,t){var n=a.state[t][e].title,s=t.substring(0,t.length-5);a.setState(Object(V.a)({},s,n))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadShifts()}},{key:"render",value:function(){return s.a.createElement(ae.a,null,s.a.createElement("button",{className:"btn btn-block btn-lg btn-primary w-50 mx-auto mt-5",onClick:this.handleOpenModal},"Add new shift"),s.a.createElement($.a,{isOpen:this.state.showModal,contentLabel:"onRequestClose Example",onRequestClose:this.handleCloseModal,className:"Modal",overlayClassName:"Overlay",shouldCloseOnOverlayClick:!0},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h2",{className:"fs-xs",id:"modalLabel"},"New Shift"),s.a.createElement("button",{onClick:this.handleCloseModal,className:"btn btn-sm btn-circle btn-neutral align-self-start",type:"button","aria-label":"Close"},s.a.createElement("svg",{className:"gi gi-close fs-sm",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"})))),s.a.createElement("div",{className:"modal-body"},s.a.createElement("form",null,s.a.createElement("label",{className:"mt-3",htmlFor:"cost"},"Earnings"),s.a.createElement("div",{className:"input-group"},s.a.createElement("div",{className:"input-group-prepend"},"$"),s.a.createElement("input",{name:"earnings",onChange:this.handleChange,value:this.state.earnings,className:"form-control form-control-lg",id:"earnings",type:"number",placeholder:"55"})),s.a.createElement("label",{className:"mt-3",htmlFor:"shift_start"},"Shift starting time"),s.a.createElement("div",{className:"row pl-3"},s.a.createElement(K,{title:"3:00",list:this.state.shift_start_list,resetThenSet:this.resetThenSet,id:"shift_start"}),s.a.createElement(K,{className:"ml-3",title:"PM",list:this.state.shift_start_suffix_list,resetThenSet:this.resetThenSet,id:"shift_start_suffix"})),s.a.createElement("label",{className:"mt-3",htmlFor:"shift_end"},"Shift ending time"),s.a.createElement("div",{className:"row pl-3"},s.a.createElement(K,{title:"6:00",list:this.state.shift_end_list,resetThenSet:this.resetThenSet,id:"shift_end"}),s.a.createElement(K,{className:"ml-3",title:"PM",list:this.state.shift_end_suffix_list,resetThenSet:this.resetThenSet,id:"shift_end_suffix"})))),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{onClick:this.handleSubmit,className:"btn btn-block btn-lg btn-primary",type:"submit"},"Submit")))),s.a.createElement("div",{className:"container mt-5"},this.state.shifts.length?this.state.shifts.map((function(e){return s.a.createElement(te,{shiftEnd:e.shift_end,shiftStart:e.shift_start,earnings:e.earnings})})):s.a.createElement("h3",{className:"text-center"},"Add a previous shift!")))}}]),t}(n.Component),me=a(65),ue=(a(107),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).progress=Math.round(a.props.cost_remaining/a.props.cost*100),a.progressInstance=s.a.createElement(me.a,{now:a.progress}),a.setState=function(e){return{active:!e.active}},a.toggleActive=function(e){oe(e).then((function(){console.log(a.state.id)})),window.location.reload()},a.state={active:a.props.active,id:a.props.id},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"card card-savings mb-5"},s.a.createElement("div",{className:"card-body"},this.progressInstance,s.a.createElement("div",{className:"d-flex mb-4"},s.a.createElement("div",{className:"mr-auto"},s.a.createElement("div",{className:"d-flex align-items-center mb-3"},s.a.createElement("div",{onClick:function(){return e.toggleActive(e.state.id)},classNameName:"task-button"},this.props.active?s.a.createElement("svg",{className:"gi gi-radio-button-on-fill mr-3 fs-sm text-success",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"}),s.a.createElement("path",{d:"M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"})):s.a.createElement("svg",{className:"gi gi-radio-button-on-fill mr-3 fs-sm text-success",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"}))),s.a.createElement("h3",{className:"lead lh-lg"},s.a.createElement("p",null,this.props.title))),s.a.createElement("p",null,this.props.description))),s.a.createElement("div",{className:"d-flex"},s.a.createElement("div",{className:"d-flex mr-auto"},s.a.createElement("svg",{className:"gi gi-checkmark-square mr-2 fs-sm",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M20 11.83a1 1 0 0 0-1 1v5.57a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6h9.57a1 1 0 1 0 0-2H5.6A2.61 2.61 0 0 0 3 5.6v12.8A2.61 2.61 0 0 0 5.6 21h12.8a2.61 2.61 0 0 0 2.6-2.6v-5.57a1 1 0 0 0-1-1z"}),s.a.createElement("path",{d:"M10.72 11a1 1 0 0 0-1.44 1.38l2.22 2.33a1 1 0 0 0 .72.31 1 1 0 0 0 .72-.3l6.78-7a1 1 0 1 0-1.44-1.4l-6.05 6.26z"})),s.a.createElement("p",null,this.props.cost_remaining+" / "+this.props.cost)),s.a.createElement("div",{className:"d-flex"},s.a.createElement("svg",{className:"gi gi-clock-outline mr-2 fs-sm",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"}),s.a.createElement("path",{d:"M16 11h-3V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2z"})),s.a.createElement("p",null,this.props.priority)))))}}]),t}(n.Component));a(108);$.a.setAppElement("#root");var de=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={title:"",priority:"",cost:0,savings:[],dropdownTitle:"Priority",showModal:!1,priorityDropdown:[{id:0,title:"1 (I NEED this NOW)",selected:!1,key:"priorityDropdown"},{id:1,title:"2 (I WANT this really badly)",selected:!1,key:"priorityDropdown"},{id:2,title:"3 (I want this but can wait)",selected:!1,key:"priorityDropdown"}]},a.handleChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState((function(e){return Object(A.a)({},e,Object(V.a)({},n,s))}))},a.loadSavings=function(){re().then((function(e){a.setState({savings:e.data}),console.log(a.state.savings)})).catch((function(e){return console.log(e)}))},a.handleOpenModal=function(){a.setState({showModal:!0})},a.handleCloseModal=function(){a.setState({showModal:!1})},a.handleSubmit=function(e,t){var n=a.state,s=n.title,l=n.priority,r=n.cost;e.body={title:s,priority:l,cost:r},console.log(e.body),ie(e.body).then((function(e){200===e.status&&(a.handleCloseModal(),a.loadSavings())}))},a.resetThenSet=function(e,t){var n,s=JSON.parse(JSON.stringify(a.state[t]));s.forEach((function(e){return e.selected=!1})),s[e].selected=!0,a.setState((n={},Object(V.a)(n,t,s),Object(V.a)(n,"priority",s[e].title),n))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadSavings()}},{key:"render",value:function(){return s.a.createElement(ae.a,null,s.a.createElement("button",{className:"btn btn-block btn-lg btn-primary w-50 mx-auto mt-5",onClick:this.handleOpenModal},"Add new goal"),s.a.createElement($.a,{isOpen:this.state.showModal,contentLabel:"onRequestClose Example",onRequestClose:this.handleCloseModal,className:"Modal",overlayClassName:"Overlay",shouldCloseOnOverlayClick:!0},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h2",{className:"fs-xs",id:"modalLabel"},"New Savings Goal"),s.a.createElement("button",{onClick:this.handleCloseModal,className:"btn btn-sm btn-circle btn-neutral align-self-start",type:"button","aria-label":"Close"},s.a.createElement("svg",{className:"gi gi-close fs-sm",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"})))),s.a.createElement("div",{className:"modal-body"},s.a.createElement("form",null,s.a.createElement("label",{htmlFor:"title"},"Title"),s.a.createElement("input",{name:"title",onChange:this.handleChange,value:this.state.title,className:"form-control form-control-lg",id:"title",type:"text",placeholder:"New skis"}),s.a.createElement("label",{className:"mt-3",htmlFor:"priorityDropdown"},"Priority Level"),s.a.createElement(K,{title:"Priority Level",list:this.state.priorityDropdown,resetThenSet:this.resetThenSet,id:"priorityDropdown"}),s.a.createElement("label",{className:"mt-3",htmlFor:"cost"},"Cost"),s.a.createElement("div",{className:"input-group"},s.a.createElement("div",{className:"input-group-prepend"},"$"),s.a.createElement("input",{name:"cost",onChange:this.handleChange,value:this.state.cost,className:"form-control form-control-lg",id:"cost",type:"number",placeholder:"55"})))),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{onClick:this.handleSubmit,className:"btn btn-block btn-lg btn-primary",type:"submit"},"Submit")))),s.a.createElement("div",{className:"container mt-5"},this.state.savings.length?this.state.savings.map((function(e){return s.a.createElement(ue,{priority:e.priority,title:e.title,cost:e.cost,cost_remaining:e.cost_remaining,id:e._id,active:e.active})})):s.a.createElement("h3",{className:"text-center mt-3"},"No goals yet!")))}}]),t}(n.Component),he=a(62),pe=Object(T.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(he.a)(e,["component","auth"]);return s.a.createElement(o.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?s.a.createElement(t,e):s.a.createElement(o.a,{to:"/login"})}}))}));if(localStorage.jwtToken){var fe=localStorage.jwtToken;x(fe);var ge=O()(fe);P.dispatch(M(ge));var ve=Date.now()/1e3;ge.exp<ve&&(P.dispatch(j()),window.location.href="./login")}var Ee=function(e){console.log("LOGGING OUT"),e.preventDefault(),P.dispatch(j()),window.location.href="./login"};function be(){return s.a.createElement(y,{menuOpenButton:s.a.createElement("div",null,"V"),menuCloseButton:s.a.createElement("div",null,"^"),changeMenuOn:"500px",largeMenuClassName:"large-menu-classname",smallMenuClassName:"small-menu-classname",menu:s.a.createElement("nav",{className:"navbar navbar-expand-lg"},s.a.createElement("div",{className:"container"},s.a.createElement(i.b,{className:"link-body",rel:"home",to:"/"},s.a.createElement("i",{className:"gi-animation-hover"},s.a.createElement("svg",{className:"swurf-logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 248.798 343"},s.a.createElement("defs",null),s.a.createElement("g",{transform:"translate(-140.692 -88.5)"},s.a.createElement("path",{class:"a",d:"M24.144,370.753l91.218-14.448c53.118-8.413,87.588-28.155,87.588-64.605,0-44.1-27.807-58.938-70.107-67.938-36-7.65-52.743-9.912-52.743-22.962s26.254-18.224,46.009-21.353c32.6-5.109,103.429-16.382,103.429-16.382l-6.57-41.483L119.261,138.008C62.192,147.047,27,166.6,27,199.9c0,40.5,36.9,58.5,79.2,67.5,32.4,6.75,42.3,9.45,42.3,23.4,0,13.05-17.11,17.406-40.228,21.068L17.1,326.307Z",transform:"translate(181.797 3.035) rotate(9)"}),s.a.createElement("path",{class:"b",d:"M0,0V75",transform:"translate(279.5 88.5)"}),s.a.createElement("line",{class:"b",y2:"75",transform:"translate(238.5 356.5)"}))))),s.a.createElement("ul",{className:"navbar-nav"},s.a.createElement("li",{className:"nav-item active"},s.a.createElement("div",{className:"nav-link",onClick:Ee},"Logout")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(i.b,{className:"nav-link",to:"/savings"},"Savings")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(i.b,{className:"nav-link",to:"/shifts"},"Shifts"))),s.a.createElement("div",null,s.a.createElement("span",{className:"avatar avatar-md lead bg-primary rounded-circle"},localStorage.userInitials))))})}var we=function(){return s.a.createElement("div",null,s.a.createElement(o.b,{path:"/login",component:H}),s.a.createElement(o.b,{path:"/register",exact:!0,component:J}))},Ne=function(){return s.a.createElement("div",null,s.a.createElement(be,null),s.a.createElement(o.d,null,s.a.createElement(pe,{exact:!0,path:"/savings",component:de}),s.a.createElement(pe,{exact:!0,path:"/shifts",component:ce})))};var ye=function(){return s.a.createElement(T.a,{store:P},s.a.createElement(i.a,null,s.a.createElement(o.d,null,s.a.createElement(o.b,{exact:!0,path:"/(login)",component:we}),s.a.createElement(o.b,{exact:!0,path:"/(register)",component:we}),s.a.createElement(o.b,{component:Ne}))))};r.a.render(s.a.createElement(ye,null),document.getElementById("root"))},26:function(e,t){e.exports={apiURL:"https://swurfapi.herokuapp.com"}},66:function(e,t,a){e.exports=a(109)},71:function(e,t,a){},72:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.533c6b68.chunk.js.map