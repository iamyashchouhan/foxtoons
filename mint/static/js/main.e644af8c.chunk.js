(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(n,t){},255:function(n,t){},273:function(n,t){},275:function(n,t){},294:function(n,t){},295:function(n,t){},358:function(n,t){},360:function(n,t){},393:function(n,t){},395:function(n,t){},396:function(n,t){},401:function(n,t){},403:function(n,t){},409:function(n,t){},411:function(n,t){},424:function(n,t){},436:function(n,t){},439:function(n,t){},444:function(n,t){},452:function(n,t){},461:function(n,t){},463:function(n,t){},533:function(n,t,e){},534:function(n,t,e){"use strict";e.r(t);var c,r,o,a,i,s,l,u,d,j,b,x,h,p,f,O,g,y,C=e(1),m=e(85),v=e.n(m),w=e(16),A=e.n(w),E=e(43),S=e(69),T=e(13),N=e(58),_=e(68),k=e.n(_),M=e(220),D=e.n(M),I=e(70),L=e(221),R=e(19),K={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(R.a)(Object(R.a)({},K),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(R.a)(Object(R.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(R.a)(Object(R.a)({},K),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(R.a)(Object(R.a)({},n),{},{account:t.payload.account});default:return n}},U={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(R.a)(Object(R.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(R.a)(Object(R.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(R.a)(Object(R.a)({},U),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},W=Object(I.b)({blockchain:P,data:F}),z=[L.a],Y=Object(I.c)(I.a.apply(void 0,z)),B=Object(I.d)(W,Y),H=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},G=function(){return function(){var n=Object(E.a)(A.a.mark((function n(t){var e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,B.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(H("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},Q=function(n){return{type:"CONNECTION_FAILED",payload:n}},q=function(n){return function(){var t=Object(E.a)(A.a.mark((function t(e){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e(G());case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},X=e(14),J=X.a.div(c||(c=Object(T.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),V=X.a.div(r||(r=Object(T.a)(["\n  height: 8px;\n  width: 8px;\n"]))),Z=X.a.div(o||(o=Object(T.a)(["\n  height: 16px;\n  width: 16px;\n"]))),$=X.a.div(a||(a=Object(T.a)(["\n  height: 24px;\n  width: 24px;\n"]))),nn=X.a.div(i||(i=Object(T.a)(["\n  height: 32px;\n  width: 32px;\n"]))),tn=X.a.div(s||(s=Object(T.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),en=X.a.p(l||(l=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),cn=(X.a.p(u||(u=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),X.a.p(d||(d=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 20px;\n  line-height: 1.6;\n"])))),rn=X.a.p(j||(j=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 14px;\n  line-height: 1.6;\n"]))),on=X.a.p(b||(b=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 10px;\n  line-height: 1.6;\n"]))),an=(X.a.div(x||(x=Object(T.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(3)),sn=X.a.button(h||(h=Object(T.a)(["\n  padding: 20px;\n  border-radius: 50px;\n  border: none;\n  margin-top: 20px;\n  background-color: var(--secondary);\n  font-weight: bold;\n  font-size: 24px;\n  color: var(--secondary-text);\n  width: 250px;\n  cursor: pointer;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ln=X.a.button(p||(p=Object(T.a)(["\n  padding: 15px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  font-weight: bold;\n  font-size: 25px;\n  color: var(--primary-text);\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),un=X.a.div(f||(f=Object(T.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),dn=X.a.img(O||(O=Object(T.a)(["\n  width: 400px;\n  @media (min-width: 767px) {\n    width: 400px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),jn=(X.a.img(g||(g=Object(T.a)(["\n  \n  width: 350px;\n  @media (min-width: 900px) {\n    width: 350px;\n  }\n  @media (min-width: 1000px) {\n    width: 350px;\n  }\n  transition: width 0.5s;\n"]))),X.a.a(y||(y=Object(T.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))));var bn=function(){var n,t,e=Object(N.b)(),c=Object(N.c)((function(n){return n.blockchain})),r=Object(N.c)((function(n){return n.data})),o=Object(C.useState)(!1),a=Object(S.a)(o,2),i=a[0],s=a[1],l=Object(C.useState)("Click buy to mint your NFT."),u=Object(S.a)(l,2),d=u[0],j=u[1],b=Object(C.useState)(1),x=Object(S.a)(b,2),h=x[0],p=x[1],f=Object(C.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),O=Object(S.a)(f,2),g=O[0],y=O[1],m=function(){""!==c.account&&null!==c.smartContract&&e(G(c.account))},v=function(){var n=Object(E.a)(A.a.mark((function n(){var t,e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,y(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(C.useEffect)((function(){v()}),[]),Object(C.useEffect)((function(){m()}),[c.account]),Object(an.jsx)(J,{children:Object(an.jsxs)(tn,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:g.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(an.jsx)(dn,{alt:"logo",src:"/config/images/logo.png"}),Object(an.jsx)(Z,{}),Object(an.jsxs)(un,{flex:1,style:{padding:24},test:!0,children:[Object(an.jsx)(tn,{flex:1,jc:"center",ai:"center"}),Object(an.jsx)(nn,{}),Object(an.jsxs)(tn,{flex:2,jc:"center",ai:"center",style:{padding:24},children:[Object(an.jsxs)(en,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:["43 / ",g.MAX_SUPPLY]}),Object(an.jsx)(cn,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(an.jsx)(jn,{target:"_blank",href:g.SCAN_LINK,children:(n=g.CONTRACT_ADDRESS,t=15,n.length>t?"".concat(n.substring(0,t),"..."):n)})}),Object(an.jsx)(Z,{}),Number(r.totalSupply)>=g.MAX_SUPPLY?Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(an.jsxs)(cn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",g.NFT_NAME," on"]}),Object(an.jsx)(Z,{}),Object(an.jsx)(jn,{target:"_blank",href:g.MARKETPLACE_LINK,children:g.MARKETPLACE})]}):Object(an.jsxs)(an.Fragment,{children:[Object(an.jsxs)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",g.SYMBOL," costs ",g.DISPLAY_COST," ",g.NETWORK.SYMBOL,"."]}),Object(an.jsx)(V,{}),Object(an.jsx)(rn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(an.jsx)(Z,{}),""===c.account||null===c.smartContract?Object(an.jsxs)(tn,{ai:"center",jc:"center",children:[Object(an.jsxs)(cn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",g.NETWORK.NAME," network"]}),Object(an.jsx)(Z,{}),Object(an.jsx)(sn,{onClick:function(n){n.preventDefault(),e(function(){var n=Object(E.a)(A.a.mark((function n(t){var e,c,r,o,a,i,s,l,u;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=n.sent,n.next=12,r.json();case 12:if(o=n.sent,a=window,!(i=a.ethereum)||!i.isMetaMask){n.next=33;break}return k.a.setProvider(i),s=new D.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==o.NETWORK.ID?(u=new k.a(c,o.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(n){t(q(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(Q("Change network to ".concat(o.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),t(Q("Something went wrong."));case 31:n.next=34;break;case 33:t(Q("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(t){return n.apply(this,arguments)}}()),m()},children:"CONNECT"}),""!==c.errorMsg?Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(Z,{}),Object(an.jsx)(cn,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(cn,{style:{textAlign:"center",color:"var(--accent-text)"},children:d}),Object(an.jsx)($,{}),Object(an.jsxs)(tn,{ai:"center",jc:"center",fd:"row",children:[Object(an.jsx)(ln,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=h-1;n<1&&(n=1),p(n)}()},children:"-"}),Object(an.jsx)($,{}),Object(an.jsx)(cn,{style:{textAlign:"center",color:"var(--accent-text)"},children:h}),Object(an.jsx)($,{}),Object(an.jsx)(ln,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=h+1;n>10&&(n=10),p(n)}()},children:"+"})]}),Object(an.jsx)(Z,{}),Object(an.jsx)(tn,{ai:"center",jc:"center",fd:"row",children:Object(an.jsx)(sn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=g.WEI_COST,t=g.GAS_LIMIT,r=String(n*h),o=String(t*h);console.log("Cost: ",r),console.log("Gas limit: ",o),j("Minting your ".concat(g.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(h).send({gasLimit:String(o),to:g.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(n){console.log(n),j("Sorry, something went wrong please try again later."),s(!1)})).then((function(n){console.log(n),j("WOW, the ".concat(g.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),e(G(c.account))}))}(),m()},children:i?"BUSY":"BUY"})})]})]}),Object(an.jsx)($,{})]}),Object(an.jsx)(nn,{}),Object(an.jsx)(tn,{flex:1,jc:"center",ai:"center"})]}),Object(an.jsx)($,{}),Object(an.jsxs)(tn,{jc:"center",ai:"center",style:{width:"30%"},children:[Object(an.jsxs)(on,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",g.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(an.jsx)(Z,{}),Object(an.jsxs)(on,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",g.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},xn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,538)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;e(n),c(n),r(n),o(n),a(n)}))};e(533);v.a.render(Object(an.jsx)(N.a,{store:B,children:Object(an.jsx)(bn,{})}),document.getElementById("root")),xn()}},[[534,1,2]]]);
//# sourceMappingURL=main.e644af8c.chunk.js.map