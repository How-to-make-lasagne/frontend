(this["webpackJsonpjunior-playground"]=this["webpackJsonpjunior-playground"]||[]).push([[0],{120:function(e,t,n){},220:function(e,t,n){e.exports=n(401)},247:function(e,t,n){},249:function(e,t,n){},250:function(e,t,n){},401:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(36),c=n.n(s),l=n(23),o=n(38),i=n(194),u=n(26),p=n(42),d=n(17),m=n(18),h=n(19),g=n(20),f=n(21),E=n(15),v=n.n(E),b=n(33),k=n(195),w=n.n(k).a.create({baseURL:"https://thawing-tundra-50143.herokuapp.com/"}),y=function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,w.get("user/"+e);case 5:a=t.sent,t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(2),t.abrupt("return",console.log("fetchUser error: ",t.t0));case 11:n({type:"FETCH_USER",payload:a.data});case 12:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}()},O=(n(247),function(e){function t(e){var n;Object(d.a)(this,t),n=Object(h.a)(this,Object(g.a)(t).call(this,e));window.innerWidth,window.innerHeight;return n.state={redirectToLogin:!1,width1:10,height1:60,width2:30,height2:30,width3:60,height3:10,width4:65,height4:60,width5:80,height5:55},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.user._id||this.setState({redirectToLogin:!0}),this.props.user.username||this.props.fetchUser(this.props.user._id)}},{key:"render",value:function(){var e=this.state,t=e.width1,n=e.height1,a=e.width2,s=e.height2,c=e.width3,l=e.height3,o=e.width4,i=e.height4,d=e.width5,m=e.height5;return r.a.createElement("div",{className:"map"},this.state.redirectToLogin?r.a.createElement(p.a,{push:!0,to:"/login"}):"",r.a.createElement(u.b,{to:"/tasks/1",className:"button-element",style:{left:t+"%",top:n+"%"}},r.a.createElement("span",null,"Ksi\u0119ga 1")),r.a.createElement(u.b,{to:"/tasks/2",className:"button-element",style:{left:a+"%",top:s+"%"}},r.a.createElement("span",null,"Ksi\u0119ga 2")),r.a.createElement(u.b,{to:"/tasks/3",className:"button-element",style:{left:c+"%",top:l+"%"}},r.a.createElement("span",null,"Ksi\u0119ga 3")),r.a.createElement(u.b,{to:"/tasks/4",className:"button-element",style:{left:o+"%",top:i+"%"}},r.a.createElement("span",null,"Ksi\u0119ga 4")),r.a.createElement(u.b,{to:"/tasks/5",className:"button-element",style:{left:d+"%",top:m+"%"}},r.a.createElement("span",null,"Ksi\u0119ga 5")))}}]),t}(r.a.Component)),N=Object(l.b)((function(e){return{user:e.user,section:e.section}}),{fetchUser:y})(O),j=(n(249),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){switch(e.target.name){case"username":n.setState({username:e.target.value});break;case"password":n.setState({password:e.target.value})}},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password;n.props.login(a,r)},n.state={username:"",password:""},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui middle aligned center aligned grid"},this.props.user._id?r.a.createElement(p.a,{push:!0,to:"/"}):"",r.a.createElement("div",{className:"column"},r.a.createElement("form",{className:"ui large form",id:"formLogin",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"ui stacked segment"},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("i",{className:"user icon"}),r.a.createElement("input",{type:"text",name:"username",placeholder:"Login",value:this.state.username,onChange:this.handleChange,required:!0}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("i",{className:"lock icon"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Has\u0142o",value:this.state.password,onChange:this.handleChange,required:!0}))),r.a.createElement("button",{className:"ui fluid large submit button",form:"formLogin"},"Zaloguj")),r.a.createElement("div",{className:"ui error message"}))))}}]),t}(r.a.Component)),T=Object(l.b)((function(e){return{user:e.user}}),{login:function(e,t){return function(){var n=Object(b.a)(v.a.mark((function n(a){var r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&t){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,w.post("login/",{username:e,password:t});case 5:r=n.sent,n.next=11;break;case 8:return n.prev=8,n.t0=n.catch(2),n.abrupt("return",console.log("login error: ",n.t0));case 11:if(r.data._id){n.next=13;break}return n.abrupt("return");case 13:localStorage.setItem("userId",r.data._id),a({type:"LOGIN",payload:r.data});case 15:case"end":return n.stop()}}),n,null,[[2,8]])})));return function(e){return n.apply(this,arguments)}}()}})(j),x=n(408),S=(n(250),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={isModalOpen:!1},n.clickLogout=function(e){n.props.logout()},n.handleToggleModal=function(){n.setState({isModalOpen:!n.state.isModalOpen})},n.handleSelectKnowledge=function(e){n.props.fetchKnowledgeBaseElement(e),n.setState({selectedId:e})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.user.name||this.props.fetchUser(localStorage.getItem("userId")),e.next=3,this.props.fetchKnowledgeBaseList();case 3:this.props.fetchKnowledgeBaseElement(this.props.knowledgeList[0].knowledgeId),this.setState({selectedId:this.props.knowledgeList[0].knowledgeId});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.user;if(this.props.section.tasks.length&&!this.state.currentNumber){var n=this.props.section.tasks.find((function(t){return t._id===e.props.section.currentTask})).number;this.setState({currentNumber:n})}return console.log(this.state.currentNumber),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"user-bar-container"},r.a.createElement(u.b,{to:"/"},r.a.createElement("button",{className:"ui button"},r.a.createElement("i",{className:"reply icon"}))),r.a.createElement("div",null,t.name),r.a.createElement("div",null,r.a.createElement("div",{className:"ui indicating progress active","data-percent":"50"},r.a.createElement("div",{className:"bar",style:{width:"".concat(this.state.currentNumber/4*100,"%")}}),r.a.createElement("div",{className:"label"},"Post\u0119p"))),r.a.createElement("div",null,t.coins,r.a.createElement("img",{src:"dollar.png",alt:"dollar"})),r.a.createElement("div",null,t.experience," ",r.a.createElement("img",{src:"goal.png",alt:"goal"})),r.a.createElement("div",{className:"right-buttons"},r.a.createElement("div",{className:"spellbook",onClick:this.handleToggleModal},r.a.createElement("img",{src:"open-book.png",alt:"open book"}),r.a.createElement("div",null,"Ksi\u0119ga zakl\u0119\u0107")),r.a.createElement("div",null,r.a.createElement("button",{className:"ui button",onClick:this.clickLogout},r.a.createElement("img",{src:"logout.png",alt:"logout"}))))),r.a.createElement(x.a,{open:this.state.isModalOpen,style:{background:"black"}},r.a.createElement(x.a.Header,null,r.a.createElement("div",{onClick:this.handleToggleModal,className:"modal-header"},r.a.createElement("span",null,"X"))),r.a.createElement(x.a.Content,null,r.a.createElement("div",{className:"content-inner"},r.a.createElement("div",{className:"left-list"},this.props.knowledgeList.map((function(t){return r.a.createElement("div",{key:t.knowledgeId,className:"left-list-element ".concat(e.state.selectedId===t.knowledgeId?"selected":""),onClick:function(){return e.handleSelectKnowledge(t.knowledgeId)}},t.title)}))),r.a.createElement("div",{className:"right-content"},this.props.knowledgeElement&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"right-header"},this.props.knowledgeElement.title),r.a.createElement("div",{className:"right-description"},this.props.knowledgeElement.description),r.a.createElement("div",{className:"right-content"},this.props.knowledgeElement.content?this.props.knowledgeElement.content.split(";").map((function(e){return r.a.createElement("div",{key:e},e)})):null)))))))}}]),t}(r.a.Component)),L=Object(l.b)((function(e){return{user:e.user,section:e.section,knowledgeList:e.knowledge.knowledgeList,knowledgeElement:e.knowledge.knowledgeElement,tasksAmount:e.tasksAmount}}),{fetchUser:y,logout:function(){return function(e){localStorage.setItem("userId",""),e({type:"LOGOUT"})}},fetchKnowledgeBaseList:function(){return function(){var e=Object(b.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("/knowledge");case 3:n=e.sent,t({type:"FETCH_KNOWLEDGE_BASE_LIST",payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},fetchKnowledgeBaseElement:function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.get("/knowledge/"+e);case 3:a=t.sent,n({type:"FETCH_KNOWLEDGE_BASE_ELEMENT",payload:a.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(S),I=(n(120),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).clickTask=function(e){n.props.fetchTask(e)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.section.tasks&&0!==this.props.section.tasks.length&&this.props.fetchTask(this.props.section.tasks[0].taskId)}},{key:"render",value:function(){return r.a.createElement("div",null," ",this.renderTasks())}},{key:"renderTasks",value:function(){var e=this;if(0===this.props.section.tasks.length)return r.a.createElement("div",null);var t=this.props.section.tasks.map((function(t){return r.a.createElement("button",{key:t.number,onClick:function(){return e.clickTask(t.taskId)},className:"step"},r.a.createElement("i",{className:"wrench icon"}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},t.number+". "+(t.name||t.title)),r.a.createElement("div",{className:"description"},"Skompletuj ekwipunek")))}));return r.a.createElement("div",{className:"ui vertical steps"},t)}}]),t}(r.a.Component)),_=Object(l.b)((function(e){return{user:e.user,section:e.section}}),{fetchTask:function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){var a,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=localStorage.getItem("userId"),e&&a){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,w.get("task/"+e,{headers:{userId:a}});case 6:r=t.sent,t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(3),t.abrupt("return",console.log("fetchTask error: ",t.t0));case 12:n({type:"FETCH_TASK",payload:r.data});case 13:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e){return t.apply(this,arguments)}}()}})(I),C=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).renderQuestions=function(){if(!n.props.task.questions||0===n.props.task.questions.length)return r.a.createElement("div",null);var e=n.props.task.questions.map((function(e){var t=e.question,n=e.answers.map((function(e){return r.a.createElement("label",{key:e.number},r.a.createElement("input",{type:"radio",name:"key"}),e.content)}));return r.a.createElement("div",{key:t},r.a.createElement("br",null)," Test: ",r.a.createElement("br",null),e.question,r.a.createElement("br",null),n)}));return r.a.createElement("div",null," ",e," ")},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.task;return r.a.createElement("div",{className:"task"},r.a.createElement("div",{className:"taskText"},r.a.createElement("div",null,e.description),r.a.createElement("div",null,r.a.createElement("br",null)," Nagroda: ",r.a.createElement("br",null),"Do\u015bwiadczenie: ",e.prize.exp," ",r.a.createElement("br",null)," Monety: ",e.prize.coins),r.a.createElement("div",null,this.renderQuestions(),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))))}}]),t}(r.a.Component),K=Object(l.b)((function(e){return{user:e.user,section:e.section,task:e.task}}))(C),M=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(g.a)(t).call(this,e))).state={redirectToLogin:!1},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.user._id||this.setState({redirectToLogin:!0}),this.props.fetchSection(this.props.match.params.id)}},{key:"render",value:function(){return r.a.createElement("div",{style:{color:"white"}},this.props.user._id?"":r.a.createElement(p.a,{push:!0,to:"/login"}),r.a.createElement(L,null),r.a.createElement("div",{className:"flex"},r.a.createElement(_,null),r.a.createElement(K,null)))}}]),t}(r.a.Component),H=Object(l.b)((function(e){return{user:e.user,section:e.section}}),{fetchSection:function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){var a,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=localStorage.getItem("userId"),e&&a){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,w.get("section/"+e,{headers:{userId:a}});case 6:r=t.sent,t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(3),t.abrupt("return",console.log("fetchSection error: ",t.t0));case 12:n({type:"FETCH_SECTION",payload:r.data});case 13:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e){return t.apply(this,arguments)}}()}})(M),U=function(){return r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,component:N}),r.a.createElement(p.b,{path:"/login",exact:!0,component:T}),r.a.createElement(p.b,{path:"/tasks/:id",exact:!0,component:H}))},A=function(){return r.a.createElement(u.a,null,r.a.createElement(U,null))},F=n(212),G=Object(o.c)({knowledgeList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_KNOWLEDGE_BASE_LIST":return t.payload;default:return e}},knowledgeElement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_KNOWLEDGE_BASE_ELEMENT":return t.payload;default:return e}}}),q=Object(o.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{_id:"",username:"",name:"",email:"",currentTask:null,coins:0,experience:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.payload;case"LOGOUT":return{_id:"",username:"",name:"",email:"",currentTask:null,coins:0,experience:0};case"FETCH_USER":return t.payload;default:return e}},section:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tasks:[],currentTask:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SECTION":return t.payload;case"LOGOUT":return{tasks:[],currentTask:""};default:return e}},answers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_ANSWER":return[].concat(Object(F.a)(e),[t.payload]);case"LOGOUT":return[];default:return e}},knowledge:G,knowledgeList:G,task:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{description:"",prize:{exp:0,coins:0},questions:[],answers:{number:0,content:[]}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TASK":return t.payload;case"LOGOUT":return{description:"",prize:{exp:0,coins:0},questions:[],answers:{number:0,content:[]}};default:return e}}}),D={user:{_id:localStorage.getItem("userId")||""}},B=Object(o.d)(q,D,Object(o.a)(i.a));c.a.render(r.a.createElement(l.a,{store:B},r.a.createElement(A,null)),document.querySelector("#root"))}},[[220,1,2]]]);
//# sourceMappingURL=main.ff78a954.chunk.js.map