var k=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var o=(s,e,t)=>(k(s,e,"read from private field"),t?t.call(s):e.get(s)),b=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},E=(s,e,t,n)=>(k(s,e,"write to private field"),n?n.call(s,t):e.set(s,t),t);var v=(s,e,t)=>(k(s,e,"access private method"),t);import{bm as A,bn as H,bo as U,bp as R,bq as M,m as q,r as m,br as L,bs as K,E as F,c as B,a as I,u as P,b as $,j as u,d as W}from"./index-COdFNi2n.js";var p,g,a,d,x,j,N,S,V,z=(V=class extends A{constructor(e,t){super();b(this,x);b(this,N);b(this,p,void 0);b(this,g,void 0);b(this,a,void 0);b(this,d,void 0);E(this,p,e),this.setOptions(t),this.bindMethods(),v(this,x,j).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var n;const t=this.options;this.options=o(this,p).defaultMutationOptions(e),H(this.options,t)||o(this,p).getMutationCache().notify({type:"observerOptionsUpdated",mutation:o(this,a),observer:this}),t!=null&&t.mutationKey&&this.options.mutationKey&&U(t.mutationKey)!==U(this.options.mutationKey)?this.reset():((n=o(this,a))==null?void 0:n.state.status)==="pending"&&o(this,a).setOptions(this.options)}onUnsubscribe(){var e;this.hasListeners()||(e=o(this,a))==null||e.removeObserver(this)}onMutationUpdate(e){v(this,x,j).call(this),v(this,N,S).call(this,e)}getCurrentResult(){return o(this,g)}reset(){var e;(e=o(this,a))==null||e.removeObserver(this),E(this,a,void 0),v(this,x,j).call(this),v(this,N,S).call(this)}mutate(e,t){var n;return E(this,d,t),(n=o(this,a))==null||n.removeObserver(this),E(this,a,o(this,p).getMutationCache().build(o(this,p),this.options)),o(this,a).addObserver(this),o(this,a).execute(e)}},p=new WeakMap,g=new WeakMap,a=new WeakMap,d=new WeakMap,x=new WeakSet,j=function(){var t;const e=((t=o(this,a))==null?void 0:t.state)??R();E(this,g,{...e,isPending:e.status==="pending",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset})},N=new WeakSet,S=function(e){M.batch(()=>{var t,n,c,l,h,f,y,O;if(o(this,d)&&this.hasListeners()){const r=o(this,g).variables,i=o(this,g).context;(e==null?void 0:e.type)==="success"?((n=(t=o(this,d)).onSuccess)==null||n.call(t,e.data,r,i),(l=(c=o(this,d)).onSettled)==null||l.call(c,e.data,null,r,i)):(e==null?void 0:e.type)==="error"&&((f=(h=o(this,d)).onError)==null||f.call(h,e.error,r,i),(O=(y=o(this,d)).onSettled)==null||O.call(y,void 0,e.error,r,i))}this.listeners.forEach(r=>{r(o(this,g))})})},V);function G(s,e){const t=q(e),[n]=m.useState(()=>new z(t,s));m.useEffect(()=>{n.setOptions(s)},[n,s]);const c=m.useSyncExternalStore(m.useCallback(h=>n.subscribe(M.batchCalls(h)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),l=m.useCallback((h,f)=>{n.mutate(h,f).catch(L)},[n]);if(c.error&&K(n.options.throwOnError,[c.error]))throw c.error;return{...c,mutate:l,mutateAsync:c.mutate}}const{Axios:X,AxiosError:Z,CanceledError:_,isCancel:ee,CancelToken:te,VERSION:se,all:ne,Cancel:oe,isAxiosError:re,spread:ie,toFormData:ae,AxiosHeaders:le,HttpStatusCode:ue,formToJSON:ce,getAdapter:de,mergeConfig:he}=F,J=({helloBar:s,setHelloBar:e,handleNavigation:t=()=>{},tab:n=""})=>{const{userName:c}=B(r=>r.user),l=B(r=>{var i;return((i=r.user.plan)==null?void 0:i.trial)??null}),h=I(),f=P(),y=$(),O=!window.location.pathname.includes("agent")&&!window.location.pathname.includes("onboarding")&&!window.location.pathname.includes("dashboard");return m.useEffect(()=>{const r=document.querySelector(".hello-bar"),i=document.querySelector(".hello-p"),D=document.querySelector(".ai-bot-wrapper"),w=document.querySelector(".ai-bot-container");if(!s&&i){i.style.paddingTop="";return}if(!s&&(D||w)){window.screen.width>990?D.style.marginTop="":w.style.paddingTop="";return}if(r){r.style.zIndex="98";const C=window.screen.width>540?30:20,T=r.offsetHeight+C;i&&(i.style.paddingTop=T+"px")}else i&&(i.style.paddingTop="");if(D||w){const C=r.offsetHeight;window.screen.width>990?D.style.marginTop=C+20+"px":w.style.paddingTop=C+"px"}},[l,s,n]),m.useEffect(()=>{(l||l==null)&&e(!0)},[l]),u.jsxDEV(m.Fragment,{children:s&&(l||l===null)?u.jsxDEV("div",{className:`hello-bar ${O?"builder-hello-bar":""}`,children:[u.jsxDEV("div",{className:"bar-close",onClick:()=>e(!1),children:u.jsxDEV("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:u.jsxDEV("path",{d:"M14.6693 14.6667L1.33594 1.33337M14.6693 1.33337L1.33594 14.6667",stroke:"white",strokeWidth:"2",strokeLinecap:"round"},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/helloBar.tsx",lineNumber:83,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/helloBar.tsx",lineNumber:76,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/helloBar.tsx",lineNumber:75,columnNumber:11},void 0),u.jsxDEV("div",{className:"bar-content flex-cnt",children:[u.jsxDEV("p",{className:"bar-text",children:["Hey ",u.jsxDEV("span",{className:"bar-username",children:c},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/helloBar.tsx",lineNumber:94,columnNumber:19},void 0),", You can get an extra 15% off on annual plans (so 30% less than the monthly rate!)"]},void 0,!0,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/helloBar.tsx",lineNumber:93,columnNumber:13},void 0),u.jsxDEV("button",{className:"bar-cta",onClick:()=>{if(y.pathname==="/agent/cynthia"){t();return}f("/settings?checked=true"),h(W.actions.setSettings(2))},children:"Upgrade now"},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/helloBar.tsx",lineNumber:98,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/helloBar.tsx",lineNumber:92,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/helloBar.tsx",lineNumber:74,columnNumber:9},void 0):u.jsxDEV(u.Fragment,{},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/helloBar.tsx",lineNumber:114,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/helloBar.tsx",lineNumber:72,columnNumber:5},void 0)},me=J;export{Z as A,me as H,G as u};
//# sourceMappingURL=helloBar-fYIvMcdt.js.map
