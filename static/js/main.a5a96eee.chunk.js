(this["webpackJsonptolaat-app"]=this["webpackJsonptolaat-app"]||[]).push([[0],{67:function(e,t,a){},69:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(25),c=a.n(r),o=(a(67),a(28)),i=a(9),l=a(10),j=a(12),d=a(11),h=(a(68),a(33)),b=a(7),u=(a(69),a(99)),O=a(59),p=a(100),f=a(1),m=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).goToUser=function(){window.location.href="#/user"},s.filterFriends=function(e){s.setState({searchFriend:e.target.value,friendResult:s.props.allUsers.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}))})},s.state={searchFriend:"",friendResult:[]},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;this.handleOption=function(){e.props.friendResult(e.state.friendResult)};var t=this.props.activeUser?null:Object(f.jsx)(u.a.Link,{href:"#/login",children:"\u05d4\u05ea\u05d7\u05d1\u05e8\u05d5\u05ea"}),a=this.props.activeUser?null:Object(f.jsx)(u.a.Link,{href:"#/signup",children:"\u05d4\u05e8\u05e9\u05de\u05d4"}),s=this.props.activeUser?Object(f.jsxs)(u.a.Link,{onClick:this.goToUser,children:["Hello ",this.props.activeUser.name]}):null,n=this.props.activeUser?Object(f.jsx)(u.a.Link,{onClick:function(){return e.props.logout()},href:"#/",children:"\u05d4\u05ea\u05e0\u05ea\u05e7\u05d5\u05ea"}):null,r=this.props.activeUser?Object(f.jsx)(O.a,{type:"text",className:"tolaat-dropdown",placeholder:"\u05d7\u05e4\u05e9 \u05d7\u05d1\u05e8\u05d9\u05dd",onChange:this.filterFriends,value:this.state.searchFriend,list:"datalistOptions"}):null,c=this.state.searchFriend?Object(f.jsx)("button",{onClick:this.handleOption,children:"\u05d1\u05d7\u05e8"}):null;return Object(f.jsxs)(p.a,{expand:"sm",className:"tolaat-navbar navbar justify-space-between",sticky:"top",children:[Object(f.jsx)(p.a.Brand,{href:"#/",children:"\u05ea\u05d5\u05dc\u05e2\u05ea \u05e1\u05e4\u05e8\u05d9\u05dd"}),Object(f.jsxs)(p.a.Collapse,{id:"basic-navbar-nav",children:[Object(f.jsxs)(u.a,{children:[Object(f.jsx)(u.a.Link,{href:"#/forever",children:"\u05e1\u05e4\u05e8\u05d9\u05dd \u05dc\u05e0\u05e6\u05d7"}),Object(f.jsx)(u.a.Link,{href:"#/week",children:"\u05e1\u05e4\u05e8\u05d9\u05dd \u05dc\u05e9\u05d1\u05d5\u05e2"}),Object(f.jsx)(u.a.Link,{href:"#/reasonable",children:"\u05e1\u05e4\u05e8\u05d9\u05dd \u05dc\u05d1\u05d9\u05d3\u05d5\u05d3 \u05e1\u05d1\u05d9\u05e8"}),Object(f.jsx)(u.a.Link,{href:"#/not-for-me",children:"\u05d6\u05d4 \u05dc\u05d0 \u05dc\u05d8\u05e2\u05de\u05d9"})]}),Object(f.jsxs)(u.a,{className:"nav-tolat-left",children:[r,Object(f.jsx)("datalist",{id:"datalistOptions",children:this.state.friendResult.map((function(e){return Object(f.jsx)("option",{children:e.name})}))}),c,n,s,t,a]})]})]})}}]),a}(n.a.Component),x=a(96),v=a(93),g=a(94),w=a(95),k=a(60),U=(a(74),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).clickCtegory=function(){console.log(e.props.goto),window.location.href="#/".concat(e.props.goto)},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)(k.a,{sm:2,md:6,className:"categories",onClick:this.clickCtegory,children:Object(f.jsx)("h1",{children:this.props.category})})}}]),a}(n.a.Component)),C=(a(75),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleNewReview=function(e){window.location.href="#/books/"+e.target.id},s.state={newReview:[{date:"17.3.21",id:31},{date:"15.3.21",id:35},{date:"13.3.21",id:34}]},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.newReview.map((function(t){return Object(f.jsx)(x.a.Item,{id:t.id,onClick:e.handleNewReview,children:t.date})}));return Object(f.jsxs)(v.a,{className:"p-home",children:[Object(f.jsxs)(g.a,{className:"home-jumbo",children:[Object(f.jsxs)(x.a,{children:[Object(f.jsx)(x.a.Toggle,{variant:"success",id:"dropdown-basic",children:"\u05d1\u05d9\u05e7\u05d5\u05e8\u05d5\u05ea \u05d0\u05d7\u05e8\u05d5\u05e0\u05d5\u05ea"}),Object(f.jsx)(x.a.Menu,{children:t})]}),Object(f.jsxs)(w.a,{children:[Object(f.jsx)("h1",{children:"\u05ea\u05d5\u05dc\u05e2\u05ea \u05e1\u05e4\u05e8\u05d9\u05dd"}),Object(f.jsx)("h3",{children:"\u05d4\u05de\u05dc\u05e6\u05d5\u05ea \u05d5\u05d1\u05d9\u05e7\u05d5\u05e8\u05d5\u05ea \u05e1\u05e4\u05e8\u05d9\u05dd \u05dc\u05de\u05ea\u05e7\u05d3\u05de\u05d9\u05dd"})]})]}),Object(f.jsxs)(v.a,{className:"main-text",children:[Object(f.jsx)("p",{children:"\u05d0\u05e0\u05d9 \u05ea\u05d5\u05dc\u05e2\u05ea \u05e1\u05e4\u05e8\u05d9\u05dd. \u05ea\u05de\u05d9\u05d3 \u05d4\u05d9\u05d9\u05ea\u05d9."}),Object(f.jsx)("p",{children:"\u05d5\u05e9\u05e0\u05d9\u05dd \u05e9\u05e7\u05e9\u05d4 \u05dc\u05d9 \u05dc\u05de\u05e6\u05d5\u05d0 \u05d4\u05de\u05dc\u05e6\u05d5\u05ea \u05d8\u05d5\u05d1\u05d5\u05ea \u05dc\u05e1\u05e4\u05e8\u05d9\u05dd."}),Object(f.jsx)("p",{children:"\u05db\u05d5\u05ea\u05d1\u05ea \u05d1\u05d2\u05d5\u05d2\u05dc \"\u05d4\u05de\u05dc\u05e6\u05d5\u05ea \u05dc\u05e1\u05e4\u05e8\u05d9\u05dd\" \u05d5\u05de\u05e7\u05d1\u05dc\u05ea \u05d0\u05d5 \u05d0\u05ea \u05d4\u05e7\u05d0\u05e1\u05d9\u05e7\u05d5\u05ea \u05e9\u05e7\u05e8\u05d0\u05ea\u05d9 \u05d1\u05d2\u05d9\u05dc 15, \u05d0\u05d5 \u05d2'\u05d0\u05e0\u05e7. \u05d4\u05e8\u05d1\u05d4 \u05d2'\u05d0\u05e0\u05e7."}),Object(f.jsx)("p",{children:"\u05d0\u05d6 \u05d4\u05d7\u05dc\u05d8\u05ea\u05d9 \u05dc\u05d9\u05e6\u05d5\u05e8 \u05dc\u05d9 \u05d0\u05ea\u05e8 \u05de\u05e9\u05dc\u05d9, \u05dc\u05d0\u05e0\u05e9\u05d9\u05dd \u05e2\u05dd \u05d8\u05e2\u05dd \u05d3\u05d5\u05de\u05d4 \u05dc\u05e9\u05dc\u05d9."}),Object(f.jsx)("p",{children:"\u05e4\u05d4 \u05ea\u05d5\u05db\u05dc\u05d5 \u05dc\u05de\u05e6\u05d5\u05d0 \u05d4\u05de\u05dc\u05e6\u05d5\u05ea \u05dc\u05e1\u05e4\u05e8\u05d9\u05dd \u05e9\u05d0\u05d4\u05d1\u05ea\u05d9, \u05d5\u05db\u05d0\u05dc\u05d4 \u05e9\u05e4\u05d7\u05d5\u05ea, \u05de\u05d7\u05d5\u05dc\u05e7\u05d9\u05dd \u05dc\u05d0\u05e8\u05d1\u05e2 \u05e7\u05d8\u05d2\u05d5\u05e8\u05d9\u05d5\u05ea, \u05e2\u05dc \u05e4\u05d9 \u05db\u05de\u05d4 \u05e9\u05e9\u05d4\u05ea\u05d7\u05d1\u05e8\u05ea\u05d9 \u05d0\u05dc\u05d9\u05d4\u05dd."}),Object(f.jsx)("p",{children:"\u05d0\u05d1\u05dc \u05e9\u05d9\u05de\u05d5 \u05dc\u05d1, \u05e4\u05d4 \u05d6\u05d4 \u05dc\u05d0 \u05de\u05d9\u05d9\u05e0\u05e1\u05d8\u05e8\u05d9\u05dd \u05d5\u05dc\u05d0 \u05d4\u05de\u05db\u05e0\u05d4 \u05d4\u05de\u05e9\u05d5\u05ea\u05e3 \u05d4\u05d1\u05d9\u05e0\u05d5\u05e0\u05d9 \u05d5\u05de\u05d8\u05d4."}),Object(f.jsx)("p",{children:"\u05dc\u05d0 \u05ea\u05de\u05e6\u05d0\u05d5 \u05e4\u05d4 \u05e8\u05d5\u05de\u05df \u05e8\u05d5\u05de\u05e0\u05d8\u05d9 \u05d5\u05dc\u05d0 \u05e1\u05e4\u05e8\u05d9 \u05de\u05ea\u05d7 \u05dc\u05d8\u05d9\u05e1\u05d5\u05ea."}),Object(f.jsx)("p",{children:"\u05d0\u05d9\u05da \u05ea\u05d3\u05e2\u05d5 \u05d0\u05dd \u05d4\u05d8\u05e2\u05dd \u05e9\u05dc\u05e0\u05d5 \u05d3\u05d5\u05de\u05d4? \u05de\u05d1\u05d7\u05df \u05d7\u05d9\u05d9 \u05e4\u05d0\u05d9!"}),Object(f.jsx)("p",{children:"\u05d0\u05d4\u05d1\u05ea\u05dd? \u05db\u05e0\u05e8\u05d0\u05d4 \u05e9\u05d0\u05e0\u05d7\u05e0\u05d5 \u05d1\u05d0\u05d5\u05ea\u05d5 \u05e8\u05d0\u05e9."}),Object(f.jsx)("p",{children:"\u05dc\u05d0 \u05d0\u05d4\u05d1\u05ea\u05dd? \u05dc\u05db\u05d5 \u05dc\u05e7\u05e8\u05d5\u05d0 \u05d2'\u05d5\u05d2'\u05d5 \u05de\u05d5\u05d9\u05d9\u05e1 \u05d5\u05e0\u05d9\u05e4\u05e8\u05d3 \u05db\u05d9\u05d3\u05d9\u05d3\u05d9\u05dd."}),Object(f.jsx)("p",{children:"\u05d0\u05d4, \u05d5\u05d2\u05dd \u05d0\u05d9\u05df \u05db\u05d0\u05df \u05d0\u05ea \u05d4\u05e7\u05dc\u05d0\u05e1\u05d9\u05e7\u05d5\u05ea \u05d4\u05de\u05d5\u05d1\u05e0\u05d5\u05ea \u05de\u05d0\u05dc\u05d9\u05d4\u05df, \u05de\u05d2\u05e8\u05d5\u05e1\u05de\u05df \u05d3\u05e8\u05da \u05d0\u05d4\u05d1\u05d4 \u05d1\u05d9\u05de\u05d9 \u05db\u05d5\u05dc\u05e8\u05d4, \u05de\u05d0\u05d4 \u05e9\u05e0\u05d9\u05dd \u05e9\u05dc \u05d1\u05d3\u05d9\u05d3\u05d5\u05ea \u05d5\u05db\u05dc \u05d4\u05e9\u05d0\u05e8."}),Object(f.jsx)("p",{children:"\u05d0\u05dd \u05e2\u05d3\u05d9\u05d9\u05df \u05dc\u05d0 \u05e7\u05e8\u05d0\u05ea\u05dd \u05d0\u05d5\u05ea\u05dd \u05d0\u05d6 \u05d1\u05d7\u05d9\u05d9\u05d0\u05ea, \u05d6\u05d4 \u05d4\u05d6\u05de\u05df \u05dc\u05d4\u05ea\u05d7\u05d9\u05dc, \u05d5\u05d0\u05d7\u05e8 \u05db\u05da \u05e0\u05ea\u05e7\u05d3\u05dd."}),Object(f.jsx)("p",{children:"\u05d0\u05d5\u05e7\u05d9\u05d9?"})]}),Object(f.jsxs)(w.a,{className:"books-categories",children:[Object(f.jsx)(U,{category:"\u05db\u05de\u05d5 \u05e9\u05d0\u05d5\u05de\u05e8\u05d9\u05dd \u05d1\u05d2\u05df: \u05d6\u05d4 \u05dc\u05d0 \u05dc\u05d8\u05e2\u05de\u05d9",goto:"not-for-me"}),Object(f.jsx)(U,{category:"\u05e1\u05e4\u05e8\u05d9\u05dd \u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05d9\u05ea\u05dd \u05d1\u05d9\u05d3\u05d5\u05d3 \u05d1\u05e1\u05d1\u05d9\u05e8",goto:"reasonable"}),Object(f.jsx)(U,{category:"\u05e1\u05e4\u05e8\u05d9\u05dd \u05e9\u05d9\u05d2\u05e8\u05de\u05d5 \u05dc\u05db\u05dd \u05dc\u05e4\u05e1\u05e4\u05e1 \u05e9\u05d1\u05d5\u05e2 \u05de\u05d4\u05d7\u05d9\u05d9\u05dd (\u05d1\u05e7\u05d8\u05e2 \u05d8\u05d5\u05d1)",goto:"week"}),Object(f.jsx)(U,{category:"\u05e1\u05e4\u05e8\u05d9\u05dd \u05e9\u05ea\u05d6\u05db\u05e8\u05d5 \u05dc\u05e0\u05e6\u05d7 \u05e0\u05e6\u05d7\u05d9\u05dd",goto:"forever"})]}),Object(f.jsxs)(v.a,{className:"summary",children:[Object(f.jsx)("p",{children:"\u05d4\u05d0\u05ea\u05e8 \u05e2\u05d3\u05d9\u05d9\u05df \u05d1\u05d4\u05e8\u05e6\u05d4 \u05d5\u05d2\u05dd \u05d9\u05e9 \u05dc\u05d9 \u05d7\u05d9\u05d9\u05dd \u05dc\u05ea\u05d7\u05d6\u05e7. \u05de\u05d1\u05d8\u05d9\u05d7\u05d4 \u05dc\u05d4\u05e2\u05dc\u05d5\u05ea \u05e4\u05d4 \u05db\u05dc \u05e1\u05e4\u05e8 \u05d7\u05d3\u05e9 \u05e9\u05d0\u05e7\u05e8\u05d0"}),Object(f.jsx)("p",{children:"\u05de\u05d5\u05d6\u05de\u05e0\u05d9\u05dd \u05dc\u05d4\u05d2\u05d9\u05d1 \u05d5\u05dc\u05db\u05ea\u05d5\u05d1 \u05dc\u05d9"}),Object(f.jsx)("a",{href:"mailto:michal_mor_1@yahoo.com",target:"_blank",rel:"noreferrer nofollow",children:"michal_mor_1@yahoo.com"}),Object(f.jsx)("h3",{children:"\u05ea\u05d4\u05e0\u05d5!"}),Object(f.jsxs)("div",{children:[" \u05d0\u05d4\u05d1\u05ea\u05dd! \u05e9\u05ea\u05e4\u05d5",Object(f.jsx)("div",{class:"fb-like face-buttons","data-href":"https://www.facebook.com/tolaatsfarim.michal","data-width":"","data-layout":"standard","data-action":"like","data-size":"large","data-share":"true"})]})]})]})}}]),a}(n.a.Component)),y=Object(b.f)(C),N=(a(80),a(98)),S=a(61),B=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).updateEmail=function(e){s.setState({email:e.target.value})},s.updatePwd=function(e){s.setState({pwd:e.target.value})},s.handleLogin=function(){var e=s.props.allUsers.find((function(e){return e.pwd===s.state.pwd&&e.email===s.state.email}));e?(s.props.login(e),window.location.href="#/user",s.setState({error:""})):s.setState({error:"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc \u05d0\u05d5 \u05e1\u05d9\u05e1\u05de\u05d0 \u05e9\u05d2\u05d5\u05d9\u05d9\u05dd"})},s.state={email:"",pwd:"",error:""},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"p-login",children:[Object(f.jsx)("h1",{className:"login-title",children:"\u05d4\u05ea\u05d7\u05d1\u05e8\u05d5\u05ea"}),Object(f.jsxs)(N.a,{className:"login-form",children:[Object(f.jsxs)(N.a.Group,{className:"login-form-group",as:w.a,controlId:"formHorizontalEmail",children:[Object(f.jsx)(N.a.Label,{column:!0,sm:2,children:"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc"}),Object(f.jsx)(k.a,{sm:10,children:Object(f.jsx)(N.a.Control,{type:"email",placeholder:"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc",value:this.state.email,onChange:this.updateEmail})})]}),Object(f.jsxs)(N.a.Group,{as:w.a,controlId:"formHorizontalPassword",children:[Object(f.jsx)(N.a.Label,{column:!0,sm:2,children:"\u05e1\u05d9\u05e1\u05de\u05d0"}),Object(f.jsx)(k.a,{sm:10,children:Object(f.jsx)(N.a.Control,{type:"password",placeholder:"\u05e1\u05d9\u05e1\u05de\u05d0",value:this.state.pwd,onChange:this.updatePwd})})]}),Object(f.jsx)("span",{className:"error-login",children:this.state.error}),Object(f.jsx)(N.a.Group,{as:w.a,children:Object(f.jsx)(k.a,{sm:{span:2,offset:10},children:Object(f.jsx)(S.a,{className:"login-button",type:"button",onClick:this.handleLogin,children:"\u05d4\u05ea\u05d7\u05d1\u05e8"})})})]}),Object(f.jsx)(h.b,{to:"/signup",className:"signup-from-login",children:"\u05d4\u05e8\u05e9\u05de\u05d4"}),Object(f.jsx)(h.b,{to:"/",children:"\u05d1\u05d7\u05d6\u05e8\u05d4 \u05dc\u05e2\u05de\u05d5\u05d3 \u05d4\u05d1\u05d9\u05ea"})]})}}]),a}(n.a.Component),R=a(38),M=(a(81),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleChange=function(e){s.setState(Object.assign(s.state.newUser,Object(R.a)({},e.target.name,e.target.value)))},s.validate=function(){var e="",t="",a="",n="";return s.state.newUser.name||(e="\u05e0\u05d0 \u05dc\u05de\u05dc\u05d0 \u05e9\u05dd"),s.state.newUser.email.includes("@")||(t="\u05de\u05d9\u05d9\u05dc \u05dc\u05d0 \u05ea\u05e7\u05d9\u05df"),s.state.newUser.pwd.length<6&&(a="\u05e1\u05d9\u05e1\u05de\u05d0 \u05e6\u05e8\u05d9\u05db\u05d4 \u05dc\u05d4\u05d9\u05d5\u05ea \u05d1\u05e2\u05dc\u05ea \u05e9\u05d9\u05e9\u05d4 \u05ea\u05d5\u05d5\u05d9\u05dd \u05dc\u05e4\u05d7\u05d5\u05ea"),s.state.newUser.pswConformation!==s.state.newUser.pwd&&(n="\u05e1\u05d9\u05e1\u05de\u05d0 \u05d0\u05d9\u05e0\u05d4 \u05d6\u05d4\u05d4"),!(t||e||a||n)||(s.setState({emailError:t,nameError:e,pwdError:a,confiemPwd:n}),!1)},s.handleAddUser=function(e){e.preventDefault(),s.validate()&&(s.props.addUser(s.state.newUser),s.state.emailError="",s.state.nameError="",s.state.pwdError="",s.state.confiemPwd="")},s.state={newUser:{name:"",email:"",pwd:"",pswConformation:"",aboutMe:"",img:"",favorites:[]},nameError:"",emailError:"",pwdError:"",confirmPwdError:""},s}return Object(l.a)(a,[{key:"render",value:function(){var e;return Object(f.jsx)("div",{className:"p-signup",children:Object(f.jsxs)(N.a,{className:"signup-form",noValidate:!0,children:[Object(f.jsx)("h1",{children:"\u05d4\u05d9\u05e8\u05e9\u05dd"}),Object(f.jsxs)(N.a.Group,{className:"login-form-group",as:w.a,controlId:"formHorizontal",children:[Object(f.jsx)(N.a.Label,{column:!0,sm:2,children:"\u05e9\u05dd"}),Object(f.jsx)(k.a,{sm:10,children:Object(f.jsx)(N.a.Control,{required:!0,noValidate:!0,type:"text",name:"name",placeholder:"\u05e9\u05dd",onChange:this.handleChange,value:this.state.name})}),Object(f.jsx)("div",{className:"error-signup",children:this.state.nameError})]}),Object(f.jsxs)(N.a.Group,{className:"login-form-group",as:w.a,controlId:"formHorizontalEmail",children:[Object(f.jsx)(N.a.Label,{column:!0,sm:2,children:"\u05de\u05d9\u05d9\u05dc"}),Object(f.jsx)(k.a,{sm:10,children:Object(f.jsx)(N.a.Control,{required:!0,noValidate:!0,type:"email",name:"email",placeholder:"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc",onChange:this.handleChange,value:this.state.email})}),Object(f.jsx)("div",{className:"error-signup",children:this.state.emailError})]}),Object(f.jsxs)(N.a.Group,{as:w.a,controlId:"formHorizontalPassword",children:[Object(f.jsx)(N.a.Label,{column:!0,sm:2,children:"\u05e1\u05d9\u05e1\u05de\u05d0"}),Object(f.jsx)(k.a,{sm:10,children:Object(f.jsx)(N.a.Control,{type:"password",noValidate:!0,name:"pwd",placeholder:"\u05e1\u05d9\u05e1\u05de\u05d0",onChange:this.handleChange,value:this.state.pwd})}),Object(f.jsx)("div",{className:"error-signup",children:this.state.pwdError})]}),Object(f.jsxs)(N.a.Group,{as:w.a,controlId:"formHorizontalPassword",className:"mt-3",children:[Object(f.jsx)(N.a.Label,{column:!0,sm:2,children:"\u05d0\u05d9\u05de\u05d5\u05ea \u05e1\u05d9\u05e1\u05de\u05d0"}),Object(f.jsx)(k.a,{sm:10,children:Object(f.jsx)(N.a.Control,{type:"password",noValidate:!0,name:"pswConformation",placeholder:"\u05d0\u05d9\u05de\u05d5\u05ea \u05e1\u05d9\u05e1\u05de\u05d0",onChange:this.handleChange,value:this.state.pswConformation})}),Object(f.jsx)("div",{className:"error-signup",children:this.state.confiemPwd})]}),Object(f.jsxs)(N.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(f.jsx)(N.a.Label,{children:"\u05e7\u05e6\u05ea \u05e2\u05dc \u05e2\u05e6\u05de\u05d9"}),Object(f.jsx)(N.a.Control,{as:"textarea",rows:3,name:"aboutMe",onChange:this.handleChange,value:this.state.aboutMe})]}),Object(f.jsx)(N.a.Group,{children:Object(f.jsx)(N.a.File,{className:"position-relative mt-3",name:"img",label:"\u05d4\u05e2\u05dc\u05d0\u05ea \u05ea\u05de\u05d5\u05e0\u05d4",id:"validationFormik107",feedbackTooltip:!0,onChange:this.handleChange,value:this.state.img})}),Object(f.jsx)(N.a.Group,(e={as:w.a,className:"login-button"},Object(R.a)(e,"className","text-center"),Object(R.a)(e,"children",Object(f.jsxs)(k.a,{children:[Object(f.jsx)(S.a,{className:"m-3",type:"button",onClick:this.handleAddUser,children:"\u05d4\u05d9\u05e8\u05e9\u05dd"}),Object(f.jsx)(h.b,{className:"m-3",to:"/",children:"\u05d1\u05d7\u05d6\u05e8\u05d4 \u05dc\u05e2\u05de\u05d5\u05d3 \u05d4\u05d1\u05d9\u05ea"})]})),e))]})})}}]),a}(n.a.Component)),F=a(101),L=a(97),T=(a(82),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).openModal=function(){s.setState({isModalOpen:!0})},s.handleClose=function(){s.setState({isModalOpen:!1})},s.handleshow=function(e){s.setState({isModalOpen:!0,bookId:e.target.id})},s.updateReview=function(e){s.setState({userReview:e.target.value})},s.saveModalInfo=function(){s.props.userReview(s.state.bookId,s.state.userReview)},s.state={isModalOpen:!1,userReview:"",bookId:null},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.favorite.map((function(t){return Object(f.jsx)(k.a,{xs:1,md:2,lg:4,children:Object(f.jsxs)(F.a,{className:"reviewCard",children:[Object(f.jsx)(F.a.Img,{variant:"top",src:t.img,alt:t.alt,id:t.id,className:"user-book",onClick:e.handleshow}),Object(f.jsx)(F.a.Text,{style:{height:"8rem"},children:e.state.userReview})]})})}));return Object(f.jsxs)(v.a,{children:[Object(f.jsx)("h1",{children:"\u05e1\u05e4\u05e8\u05d9\u05dd \u05e9\u05d0\u05d4\u05d1\u05ea\u05d9:"}),Object(f.jsx)(w.a,{children:t}),Object(f.jsxs)(L.a,{show:this.state.isModalOpen,onHide:this.handleClose,animation:!1,children:[Object(f.jsx)(L.a.Header,{children:Object(f.jsx)(L.a.Title,{children:"\u05e8\u05e6\u05d9\u05ea\u05d9 \u05dc\u05d4\u05d5\u05e1\u05d9\u05e3.."})}),Object(f.jsx)(L.a.Body,{children:Object(f.jsx)(N.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(f.jsx)(N.a.Control,{as:"textarea",rows:3,placeholder:"\u05d4\u05d4\u05de\u05dc\u05e6\u05d4 \u05e9\u05dc\u05d9",onChange:this.updateReview})})}),Object(f.jsxs)(L.a.Footer,{children:[Object(f.jsx)(S.a,{variant:"secondary",onClick:this.handleClose,children:"\u05e1\u05d2\u05d5\u05e8"}),Object(f.jsx)(S.a,{variant:"primary",onClick:this.saveModalInfo,children:"\u05e9\u05de\u05d5\u05e8"})]})]})]})}}]),a}(n.a.Component)),I=(a(83),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).getFavoriteBook=function(){var e=s.props.activeUser.favorites.map((function(e){return e.id}));return s.props.allBooks.filter((function(t){return e.includes(t.id)}))},s}return Object(l.a)(a,[{key:"render",value:function(){if(!this.props.activeUser)return Object(f.jsx)(b.a,{to:"/login"});var e=this.getFavoriteBook();return Object(f.jsxs)(v.a,{children:[Object(f.jsx)(F.a,{className:"profile-card",children:Object(f.jsxs)(w.a,{children:[Object(f.jsx)(k.a,{sm:3,children:Object(f.jsx)(F.a.Img,{className:"card-img",variant:"right",src:this.props.activeUser.img})}),Object(f.jsx)(k.a,{sm:9,children:Object(f.jsxs)(F.a.Body,{children:[Object(f.jsx)(F.a.Title,{className:"user-title",children:this.props.activeUser.name}),Object(f.jsx)(F.a.Text,{children:this.props.activeUser.aboutMe})]})})]})}),Object(f.jsx)(T,{favorite:e,userReview:this.props.userReview})]})}}]),a}(n.a.Component)),E=Object(b.f)(I),J=(a(84),a(85),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).addToFavorite=function(t){e.props.favorite(t.id),window.location.href="#/user"},e.goBack=function(){window.history.back()},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.allBooks,a=this.props.match.params.id,s=t.find((function(e){if(e.id==a)return!0}));return Object(f.jsxs)("div",{className:"p-singleBook",children:[Object(f.jsx)("div",{className:"book-review",children:s.review.split("\n").map((function(e){return Object(f.jsx)("p",{children:e})}))}),Object(f.jsxs)("div",{className:"buttons-section",children:[Object(f.jsx)(S.a,{type:"button",onClick:function(){return e.addToFavorite(s)},children:"\u05d4\u05d5\u05e1\u05e3 \u05dc\u05de\u05d5\u05e2\u05d3\u05e4\u05d9\u05dd \u05e9\u05dc\u05d9"}),Object(f.jsx)(S.a,{type:"button",onClick:this.goBack,children:"\u05e1\u05d2\u05d5\u05e8"})]})]})}}]),a}(n.a.Component)),P=Object(b.f)(J),G=(a(86),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).goToSingleBook=function(e){window.location.href="#/books/"+e},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.getBook.map((function(t,a){return Object(f.jsx)(k.a,{sm:1,md:6,lg:4,className:"book-card",children:Object(f.jsx)("img",{src:t.img,alt:t.alt,onClick:function(){return e.goToSingleBook(t.id)}})},a)}));return Object(f.jsx)(w.a,{children:t})}}]),a}(n.a.Component)),H=(a(87),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsxs)(w.a,{className:"category-heder",children:[Object(f.jsx)("img",{src:"./homePageTitle.jpg",alt:"people-reading"}),Object(f.jsx)("h1",{children:this.props.categoryTitle})]})}}]),a}(n.a.Component)),A=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).getBooksCategory=function(){return e.props.book.filter((function(t){if(t.category===e.props.category)return!0}))},e.userBook=function(e){console.log(e)},e}return Object(l.a)(a,[{key:"render",value:function(){if(!this.props.activeUser)return window.location.href="#/login",null;var e=this.getBooksCategory();return Object(f.jsxs)("div",{className:"p-forever",children:[Object(f.jsx)(H,{categoryTitle:this.props.title}),Object(f.jsx)(G,{getBook:e,userBook:this.userBook})]})}}]),a}(n.a.Component),z=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).componentDidMount=function(){fetch("/users.json").then((function(e){return e.json()})).then((function(e){s.setState({allUsers:e}),localStorage.allUsers=JSON.stringify(e)})),fetch("books.json").then((function(e){return e.json()})).then((function(e){s.setState({allBooks:e})})),setTimeout((function(){s.openModal()}),5e3)},s.login=function(e){localStorage.activeUser=JSON.stringify(e),s.setState({activeUser:e})},s.logout=function(){localStorage.activeUser=null,s.setState({activeUser:null})},s.addUser=function(e){localStorage.allUsers=JSON.stringify(s.state.allUsers.concat(e)),s.setState({allUsers:s.state.allUsers.concat(e),activeUser:e}),window.location.href="#/user"},s.addBook=function(e){var t=s.state.activeUser.favorites.concat({id:e,review:""}),a=Object(o.a)(Object(o.a)({},s.state.activeUser),{},{favorites:t});localStorage.activeUser=JSON.stringify(a),s.setState({activeUser:Object(o.a)(Object(o.a)({},s.state.activeUser),{},{favorites:t})})},s.handleUserReview=function(e,t){var a=s.state.activeUser.favorites.concat({id:e,review:t}),n=Object(o.a)(Object(o.a)({},s.state.activeUser),{},{favorites:a});localStorage.activeUser=JSON.stringify(n);var r=s.state.allUsers.filter((function(e){return e.id==s.state.activeUser.id}));localStorage.allUsers=JSON.stringify(s.state.allUsers.concat(n)),s.setState({activeUser:Object(o.a)(Object(o.a)({},s.state.activeUser),{},{favorites:a})}),console.log(s.state.allUsers),console.log(r)},s.openModal=function(){s.setState({isModalOpen:!0})},s.handleClose=function(){s.setState({isModalOpen:!1})},s.handleshow=function(){s.setState({isModalOpen:!0})},s.handlOpenAccount=function(){window.location.href="npm#/signup",s.setState({isModalOpen:!1})},s.handleFriendResult=function(e){var t=e.map((function(e){return e.id}));console.log(t)},s.state={allUsers:localStorage.allUsers?JSON.parse(localStorage.allUsers):[],allBooks:localStorage.allBooks?JSON.parse(localStorage.allBooks):[],activeUser:localStorage.activeUser?JSON.parse(localStorage.activeUser):null,isModalOpen:!1},s}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){localStorage.setItem("allBooks",JSON.stringify(t.allBooks))}},{key:"render",value:function(){return Object(f.jsxs)(h.a,{children:[Object(f.jsxs)("div",{className:"p-app",children:[Object(f.jsx)(b.b,{exact:!0,path:["/","/forever","/week","/reasonable","/not-for-me","/user","/classic"],children:Object(f.jsx)(m,{allUsers:this.state.allUsers,activeUser:this.state.activeUser,logout:this.logout,friendResult:this.handleFriendResult})}),Object(f.jsxs)(v.a,{children:[Object(f.jsx)(b.b,{exact:!0,path:"/",children:Object(f.jsx)(y,{activeUser:this.state.activeUser,book:this.state.allBooks})}),Object(f.jsx)(b.b,{exact:!0,path:"/forever",children:Object(f.jsx)(A,{activeUser:this.state.activeUser,book:this.state.allBooks,title:"\u05e1\u05e4\u05e8\u05d9\u05dd \u05dc\u05d6\u05db\u05d5\u05e8 \u05dc\u05e0\u05e6\u05d7 \u05e0\u05e6\u05d7\u05d9\u05dd",category:"forever"})}),Object(f.jsx)(b.b,{exact:!0,path:"/week",children:Object(f.jsx)(A,{activeUser:this.state.activeUser,book:this.state.allBooks,title:"\u05e1\u05e4\u05e8\u05d9\u05dd \u05e9\u05d9\u05d2\u05e8\u05de\u05d5 \u05dc\u05db\u05dd \u05dc\u05e4\u05e1\u05e4\u05e1 \u05e9\u05d1\u05d5\u05e2 \u05de\u05d4\u05d7\u05d9\u05d9\u05dd",category:"week"})}),Object(f.jsx)(b.b,{exact:!0,path:"/reasonable",children:Object(f.jsx)(A,{activeUser:this.state.activeUser,book:this.state.allBooks,title:"\u05e1\u05e4\u05e8\u05d9\u05dd \u05e9\u05d9\u05e2\u05d1\u05d9\u05e8\u05d5 \u05dc\u05db\u05dd \u05d1\u05d9\u05d3\u05d5\u05d3 \u05d1\u05e1\u05d1\u05d9\u05e8",category:"reasonable"})}),Object(f.jsx)(b.b,{exact:!0,path:"/not-for-me",children:Object(f.jsx)(A,{activeUser:this.state.activeUser,book:this.state.allBooks,title:"\u05db\u05de\u05d5 \u05e9\u05d0\u05d5\u05de\u05e8\u05d9\u05dd \u05d1\u05d2\u05df: \u05d6\u05d4 \u05dc\u05d0 \u05dc\u05d8\u05e2\u05de\u05d9",category:"not-for-me"})}),Object(f.jsx)(b.b,{exact:!0,path:"/books/:id",children:Object(f.jsx)(P,{activeUser:this.state.activeUser,allBooks:this.state.allBooks,favorite:this.addBook})}),Object(f.jsx)(b.b,{exact:!0,path:"/signup",children:Object(f.jsx)(M,{addUser:this.addUser})}),Object(f.jsx)(b.b,{exact:!0,path:"/login",children:Object(f.jsx)(B,{allUsers:this.state.allUsers,login:this.login})}),Object(f.jsx)(b.b,{exact:!0,path:"/user",children:Object(f.jsx)(E,{activeUser:this.state.activeUser,allBooks:this.state.allBooks,userReview:this.handleUserReview})})]})]}),Object(f.jsxs)(L.a,{show:this.state.isModalOpen,onHide:this.handleClose,children:[Object(f.jsx)(L.a.Header,{children:Object(f.jsx)(L.a.Title,{children:"\u05e2\u05d5\u05d3 \u05d0\u05d9\u05df \u05dc\u05db\u05dd \u05d7\u05e9\u05d1\u05d5\u05df?"})}),Object(f.jsx)(L.a.Body,{children:"\u05e8\u05d5\u05e6\u05d9\u05dd \u05dc\u05e7\u05d1\u05dc \u05d4\u05de\u05dc\u05e6\u05d5\u05ea \u05d5\u05dc\u05e9\u05ea\u05e3 \u05d0\u05ea \u05d4\u05e1\u05e4\u05e8\u05d9\u05dd \u05d5\u05d4\u05d4\u05de\u05dc\u05e6\u05d5\u05ea \u05e9\u05dc\u05db\u05dd?  \u05e4\u05ea\u05d7\u05d5 \u05d7\u05e9\u05d1\u05d5\u05df \u05d5\u05d4\u05e6\u05d8\u05e8\u05e4\u05d5 \u05dc\u05e7\u05d4\u05d9\u05dc\u05ea \u05d4\u05ea\u05d5\u05dc\u05e2\u05d9\u05dd"}),Object(f.jsxs)(L.a.Footer,{children:[Object(f.jsx)(S.a,{variant:"secondary",onClick:this.handleClose,children:"\u05e1\u05d2\u05d5\u05e8"}),Object(f.jsx)(S.a,{variant:"primary",onClick:this.handlOpenAccount,children:"\u05e4\u05ea\u05d7 \u05d7\u05e9\u05d1\u05d5\u05df"})]})]})]})}}]),a}(n.a.Component),V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,102)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(z,{})}),document.getElementById("root")),V()}},[[88,1,2]]]);
//# sourceMappingURL=main.a5a96eee.chunk.js.map