(this["webpackJsonpfacial-check"]=this["webpackJsonpfacial-check"]||[]).push([[0],{304:function(e,t,a){},305:function(e,t,a){},306:function(e,t,a){},307:function(e,t,a){},308:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(87),s=a.n(i),o=(a(95),a(18)),l=a(19),c=a(21),m=a(20),u=function(e){var t=e.onRouteChange;return e.isSignedIn?r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end",zIndex:"99",position:"relative"}},r.a.createElement("p",{onClick:function(){return t("signOut")},className:"f3 link dim white underline pa3 pointer"},"Sign Out")):r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end",zIndex:"99",position:"relative"}},r.a.createElement("p",{onClick:function(){return t("signIn")},className:"f3 link dim white underline pa3 pointer"},"Sign In"),r.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim white underline pa3 pointer"},"Register"))},p=(a(96),function(){return r.a.createElement("div",{className:"ma4 mt0"},r.a.createElement("h1",{className:"tc f-subheadline white center"},"iDemograph"),r.a.createElement("h2",{className:"tc f3 white center pt3 pb3"},"Place image URLs; the app will detect the people in the photos, and then guess their age, ethnic group, and sex"),r.a.createElement("h3",{className:"tc f4 white center"},"*working on beta 2.0 with ability to upload photos, responsiveness"))}),d=(a(97),function(){return r.a.createElement("div",{className:"footerWrapper"},r.a.createElement("p",null,"\xa9 2020 coded : ",r.a.createElement("a",{href:"http://maximilianlau.com",target:"_blank",rel:"noopener noreferrer",tabIndex:"0"},"Maximilian Lau")," using clarifai"))}),h=(a(98),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return r.a.createElement("div",null,r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"form center pa4 br3"},r.a.createElement("input",{placeholder:"Place Image URL HERE",className:"f3 pa2 w-70 center",type:"text",onChange:t}),r.a.createElement("button",{className:"f4 w-30 grow link ph3 pv2 dib white buttonBackground",onClick:a},"ANALYZE"))))}),g=(a(99),function(e){var t=e.name,a=e.entries;return r.a.createElement("div",{className:"LeaderWrapper"},r.a.createElement("p",null,"".concat(t,", you have put this number of pictures into the machine...")),r.a.createElement("h3",null,a))}),f=a(88),b=a.n(f),E=a(89),v=a.n(E),w=(a(46),function(e){var t=e.top,a=e.right,n=e.bottom,i=e.left,s=e.i;console.log(s);var o="styleBox"+s+" boundingBox";return r.a.createElement("div",{className:o,style:{top:t,right:a,bottom:n,left:i}},r.a.createElement("p",{className:"boundingNumber"},s))}),N=function(e){var t=e.resultAll;return t?r.a.createElement("div",{className:"demographicGrid"},t.map((function(e,t){var a="style"+t+" demographicResults";return r.a.createElement("div",{className:a},r.a.createElement("p",null," ",function(){switch(e.demograph.name){case"hispanic, latino, or spanish origin":return"Latino / Spanish";case"black or african american":return"black / AA";default:return e.demograph.name}}()," : ",(100*e.demograph.value).toFixed(2),"%"),r.a.createElement("p",null,r.a.createElement("span",null,e.age.name)," y/o : ",(100*e.age.value).toFixed(2),"%"),r.a.createElement("p",null,r.a.createElement("span",null,e.sex.name)," : ",(100*e.sex.value).toFixed(2),"%"))}))):r.a.createElement("div",null,r.a.createElement("p",null))},y=function(e){var t=e.imageUrl,a=e.boxAll,n=e.resultAll;return r.a.createElement("div",{className:"center ma demographicsWrapper"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("img",{id:"inputImage",src:t,alt:""}),a.map((function(e,t){return r.a.createElement(w,{key:a[t],top:a[t].topRow,right:a[t].rightCol,bottom:a[t].bottomRow,left:a[t].leftCol,i:t})}))),r.a.createElement(N,{resultAll:n}))},C=(a(304),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(e){e.preventDefault(),fetch("https://protected-ravine-28114.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("article",{className:"br3 ba dark-gray b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 white-80"},r.a.createElement("form",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"center f1 fw6 ph0 mh0"},"Login"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"center db fw6 lh-copy f3",htmlFor:"email-address"},"Email"),r.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100 f3",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"center db fw6 lh-copy f3",htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100 f3",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:"center"},r.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f3 dib",type:"submit",value:"Sign in"})),r.a.createElement("div",{className:"lh-copy mt3 center"},r.a.createElement("a",{onClick:function(){return e.props.onRouteChange("register")},href:"#0",className:"f3 link dim white db"},"Register")))))}}]),a}(n.Component)),k=(a(305),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitSignIn=function(e){e.preventDefault(),fetch("https://protected-ravine-28114.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={email:"",password:"",name:""},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("article",{className:"br3 ba dark-gray b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 white-80"},r.a.createElement("form",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"center f1 fw6 ph0 mh0"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"center db fw6 lh-copy f3",htmlFor:"name"},"Name"),r.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 f3",type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"center db fw6 lh-copy f3",htmlFor:"email-address"},"Email"),r.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 f3",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"center db fw6 lh-copy f3",htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 f3",type:"password",name:"password",id:"password"}),r.a.createElement("p",{className:"center f3"},"bcypt encrypted passwords!"))),r.a.createElement("div",{className:"center"},r.a.createElement("input",{onClick:this.onSubmitSignIn,className:"white b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib",type:"submit",value:"Register"})))))}}]),a}(n.Component)),S=(a(306),new v.a.App({apiKey:"da3d93a7977f494fa2c56a0ac2b7e991"})),I={particles:{number:{value:60,density:{enable:!0,value_area:1500}},line_linked:{enable:!0,opacity:.02},move:{direction:"right",speed:.05},size:{value:1},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0},x=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.facialLocation=function(e){var t=e.outputs[0].data.regions,a=document.getElementById("inputImage"),n=Number(a.width),r=Number(a.height);return t.map((function(e){return{leftCol:e.region_info.bounding_box.left_col*n,topRow:e.region_info.bounding_box.top_row*r+250,rightCol:n-e.region_info.bounding_box.right_col*n,bottomRow:r-e.region_info.bounding_box.bottom_row*r}}))},e.displayFace=function(t){e.setState({boxAll:t})},e.facialInformation=function(e){return e.outputs[0].data.regions.map((function(e){return{demograph:e.data.concepts[22],age:e.data.concepts[0],sex:e.data.concepts[20]}}))},e.displayInformation=function(t){e.setState({resultAll:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onSubmit=function(){e.setState({imageUrl:e.state.input}),S.models.predict("c0c0ac362b03416da06ab3fa36fb58e3",e.state.input).then((function(t){t&&fetch("https://protected-ravine-28114.herokuapp.com/image",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFace(e.facialLocation(t),e.displayInformation(e.facialInformation(t)))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signOut"===t?e.setState({isSignedIn:!1}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},boxAll:[],route:"signIn",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""},resultInfo:{demograph:{name:"",value:""},age:{name:"",value:""},sex:{name:"",value:""},resultAll:[]}},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"contentWrapper"},r.a.createElement(b.a,{className:"particles",params:I}),r.a.createElement(u,{onRouteChange:this.onRouteChange,isSignedIn:this.state.isSignedIn}),"home"===this.state.route?r.a.createElement("div",null,r.a.createElement(g,{name:this.state.user.name,entries:this.state.user.entries}),r.a.createElement(h,{onInputChange:this.onInputChange,onButtonSubmit:this.onSubmit}),r.a.createElement(y,{boxAll:this.state.boxAll,imageUrl:this.state.imageUrl,resultAll:this.state.resultAll})):"signIn"===this.state.route?r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(C,{onRouteChange:this.onRouteChange,loadUser:this.loadUser})):r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(k,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}))),r.a.createElement(d,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(307);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,t,a){},90:function(e,t,a){e.exports=a(308)},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.2aa9f3f5.chunk.js.map