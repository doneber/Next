import{e as d,i as s,a as R,C as b,p as c,D as V,E as y,F as B,G as j,u as N,v,q as S,H as k,I as O,J as T,K as P,L as $,d as r,_ as o,t as x,M,f as C,N as z}from"./entry.ee37e9a1.js";import{u as q}from"./asyncData.7d6a7a24.js";import{h as H}from"./ContentQuery.e0236b1b.js";import{f as w}from"./navigation.2c410438.js";import{a as F}from"./utils.9af81c0b.js";/* empty css                    */import"./ContentDoc.4019add2.js";import"./ContentList.a33b38a3.js";import"./ContentRenderer.2130777c.js";import"./ContentRendererMarkdown.cdecba18.js";import"./ContentSlot.36d700ac.js";import"./DocumentDrivenEmpty.1335c74f.js";import"./DocumentDrivenNotFound.370daea6.js";import"./Markdown.e72d9acd.js";import"./ProseCode.44c40104.js";import{u as U}from"./composables.43e2e1a7.js";import"./_commonjsHelpers.fed2a411.js";const L={},G=d({props:{name:String},async setup(t,e){const n=await L[t.name]().then(a=>a.default||a);return()=>s(n,{},e.slots)}}),J=d({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const n=j("_route"),a=n===R()?b():n,u=c(()=>{var i,l;return(l=(i=N(t.name))!=null?i:a.meta.layout)!=null?l:"default"});return()=>{var m;const i=u.value&&u.value in L,l=(m=a.meta.layoutTransition)!=null?m:V;return y(B,i&&l,{default:()=>y(G,i&&{key:u.value,name:u.value,hasTransition:void 0},e.slots).default()}).default()}}}),K=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),W=d({emits:{error(t){return!0}},setup(t,{slots:e,emit:n}){const a=v(null),u=S();return k(i=>{if(!u.isHydrating)return n("error",i),a.value=i,!1}),()=>{var i,l;return a.value?(i=e.error)==null?void 0:i.call(e,{error:a}):(l=e.default)==null?void 0:l.call(e)}}}),Q=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),X=d({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:n}){const a=v(!1);return O(()=>{a.value=!0}),u=>{var _;if(a.value)return(_=e.default)==null?void 0:_.call(e);const i=e.fallback||e.placeholder;if(i)return i();const l=u.fallback||u.placeholder||"",m=u.fallbackTag||u.placeholderTag||"span";return T(m,n,l)}}}),g=new WeakMap;function Y(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(n,...a)=>{var u;if(n.mounted$){const i=t.render(n,...a);return i.children===null||typeof i.children=="string"?P(i.type,i.props,i.children,i.patchFlag,i.dynamicProps,i.shapeFlag):s(i)}else return s("div",(u=n.$attrs)!=null?u:n._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(n,a)=>{var i;const u=v(!1);return O(()=>{u.value=!0}),Promise.resolve(((i=t.setup)==null?void 0:i.call(t,n,a))||{}).then(l=>typeof l!="function"?{...l,mounted$:u}:(...m)=>{if(u.value){const _=l(...m);return _.children===null||typeof _.children=="string"?P(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):s(_)}else return s("div",a.attrs)})},g.set(t,e),e}const Z=Object.freeze(Object.defineProperty({__proto__:null,default:X,createClientOnly:Y},Symbol.toStringTag,{value:"Module"})),tt=d({name:"DevOnly",setup(t,e){return()=>null}}),et=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"})),rt=d({name:"ServerPlaceholder",render(){return T("div")}}),ot=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"})),it=d({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const n=nt({duration:t.duration,throttle:t.throttle}),a=S();return a.hook("page:start",n.start),a.hook("page:finish",n.finish),$(()=>n.clear),()=>s("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${n.progress.value}%`,height:`${t.height}px`,opacity:n.isLoading.value?1:0,background:t.color,backgroundSize:`${100/n.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function nt(t){const e=v(0),n=v(!1),a=c(()=>1e4/t.duration);let u=null,i=null;function l(){_(),e.value=0,n.value=!0,t.throttle?i=setTimeout(E,t.throttle):E()}function m(){e.value=100,I()}function _(){clearInterval(u),clearTimeout(i),u=null,i=null}function A(D){e.value=Math.min(100,e.value+D)}function I(){_(),setTimeout(()=>{n.value=!1,setTimeout(()=>{e.value=0},400)},500)}function E(){u=setInterval(()=>{A(a.value)},100)}return{progress:e,isLoading:n,start:l,finish:m,clear:_}}const at=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"})),ut=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(n,a)=>(U(()=>t({...ut(n),...a.attrs},a)),()=>{var u,i;return e?(i=(u=a.slots).default)==null?void 0:i.call(u):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},lt=d({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u;const n={...t},a=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:i})=>i).map(({children:i})=>i).join("");return a&&(n.children=a),{noscript:[n]}})}),_t=d({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),dt=d({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),mt=d({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var a,u,i;return{title:((i=(u=(a=e.default)==null?void 0:a.call(e))==null?void 0:u[0])==null?void 0:i.children)||null}})}),st=d({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),pt=d({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u,i,l;const n={...t},a=(l=(i=(u=e.default)==null?void 0:u.call(e))==null?void 0:i[0])==null?void 0:l.children;return a&&(n.children=a),{style:[n]}})}),ft=d({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,a;return(a=(n=e.slots).default)==null?void 0:a.call(n)}}),ht=d({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),vt=d({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,NoScript:lt,Link:_t,Base:dt,Title:mt,Meta:st,Style:pt,Head:ft,Html:ht,Body:vt},Symbol.toStringTag,{value:"Module"}));r(()=>o(()=>import("./entry.ee37e9a1.js").then(t=>t.a1),["./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./Breadcrumb.24a8bbd9.js"),["./Breadcrumb.24a8bbd9.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css","./ContentQuery.e0236b1b.js","./asyncData.7d6a7a24.js","./utils.9af81c0b.js","./SideBar.f2a94bea.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./CourseList.1fadf1f8.js"),["./CourseList.1fadf1f8.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css","./asyncData.7d6a7a24.js","./ContentQuery.e0236b1b.js","./utils.9af81c0b.js","./navigation.2c410438.js","./ContentDoc.4019add2.js","./composables.43e2e1a7.js","./ContentRenderer.2130777c.js","./ContentRendererMarkdown.cdecba18.js","./_commonjsHelpers.fed2a411.js","./ContentList.a33b38a3.js","./ContentSlot.36d700ac.js","./DocumentDrivenEmpty.1335c74f.js","./DocumentDrivenNotFound.370daea6.js","./Markdown.e72d9acd.js","./ProseCode.44c40104.js","./ProseCode.e63e49c6.css","./SideBar.f2a94bea.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./SideBar.258f3203.js"),["./SideBar.258f3203.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css","./asyncData.7d6a7a24.js","./navigation.2c410438.js","./ContentQuery.e0236b1b.js","./utils.9af81c0b.js","./SideBar.f2a94bea.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ContentDoc.4019add2.js"),["./ContentDoc.4019add2.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css","./composables.43e2e1a7.js","./ContentRenderer.2130777c.js","./ContentRendererMarkdown.cdecba18.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.e0236b1b.js","./asyncData.7d6a7a24.js","./utils.9af81c0b.js"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ContentList.a33b38a3.js"),["./ContentList.a33b38a3.js","./ContentQuery.e0236b1b.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css","./asyncData.7d6a7a24.js","./utils.9af81c0b.js"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>ct),void 0,import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ContentQuery.e0236b1b.js").then(t=>t.C),["./ContentQuery.e0236b1b.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css","./asyncData.7d6a7a24.js","./utils.9af81c0b.js"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ContentRenderer.2130777c.js"),["./ContentRenderer.2130777c.js","./ContentRendererMarkdown.cdecba18.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ContentRendererMarkdown.cdecba18.js"),["./ContentRendererMarkdown.cdecba18.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ContentSlot.36d700ac.js"),["./ContentSlot.36d700ac.js","./utils.9af81c0b.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./DocumentDrivenEmpty.1335c74f.js"),["./DocumentDrivenEmpty.1335c74f.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./DocumentDrivenNotFound.370daea6.js"),["./DocumentDrivenNotFound.370daea6.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./Markdown.e72d9acd.js"),["./Markdown.e72d9acd.js","./ContentSlot.36d700ac.js","./utils.9af81c0b.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseA.ab7631fe.js"),["./ProseA.ab7631fe.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseBlockquote.68096b51.js"),["./ProseBlockquote.68096b51.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseCode.44c40104.js"),["./ProseCode.44c40104.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseCodeInline.248d39cb.js"),["./ProseCodeInline.248d39cb.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseEm.da228ef0.js"),["./ProseEm.da228ef0.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH1.18bf8e52.js"),["./ProseH1.18bf8e52.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH2.d9c45f6e.js"),["./ProseH2.d9c45f6e.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH3.6dfca689.js"),["./ProseH3.6dfca689.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH4.42fb4fb3.js"),["./ProseH4.42fb4fb3.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH5.033ef4b2.js"),["./ProseH5.033ef4b2.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH6.36eeb4b8.js"),["./ProseH6.36eeb4b8.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseHr.6db90765.js"),["./ProseHr.6db90765.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseImg.5c1a8273.js"),["./ProseImg.5c1a8273.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseLi.9d3552d6.js"),["./ProseLi.9d3552d6.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseOl.d1c43244.js"),["./ProseOl.d1c43244.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseP.bc3a09e5.js"),["./ProseP.bc3a09e5.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseStrong.4e21c73f.js"),["./ProseStrong.4e21c73f.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseTable.463bf775.js"),["./ProseTable.463bf775.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseTbody.bb2d8ba8.js"),["./ProseTbody.bb2d8ba8.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseTd.c9f1d6b1.js"),["./ProseTd.c9f1d6b1.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseTh.328b6ff3.js"),["./ProseTh.328b6ff3.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseThead.80701a50.js"),["./ProseThead.80701a50.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseTr.1c6823aa.js"),["./ProseTr.1c6823aa.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseUl.a237ba6a.js"),["./ProseUl.a237ba6a.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./welcome.cd7ec4d2.js"),["./welcome.cd7ec4d2.js","./composables.43e2e1a7.js","./entry.ee37e9a1.js","./entry.a6fd7e2e.css","./asyncData.7d6a7a24.js","./ContentQuery.e0236b1b.js","./utils.9af81c0b.js","./navigation.2c410438.js","./ContentDoc.4019add2.js","./ContentRenderer.2130777c.js","./ContentRendererMarkdown.cdecba18.js","./_commonjsHelpers.fed2a411.js","./ContentList.a33b38a3.js","./ContentSlot.36d700ac.js","./DocumentDrivenEmpty.1335c74f.js","./DocumentDrivenNotFound.370daea6.js","./Markdown.e72d9acd.js","./ProseCode.44c40104.js","./ProseCode.e63e49c6.css","./SideBar.f2a94bea.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>K),void 0,import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>Q),void 0,import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>Z),void 0,import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>ot),void 0,import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./entry.ee37e9a1.js").then(t=>t.a0),["./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>at),void 0,import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./entry.ee37e9a1.js").then(t=>t.a2),["./entry.ee37e9a1.js","./entry.a6fd7e2e.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));r(()=>o(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));r(()=>o(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));r(()=>o(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));r(()=>o(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));r(()=>o(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));r(()=>o(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));r(()=>o(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));r(()=>o(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const gt=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=x(t),n=c(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!n.value&&M("dd-navigation").value){const{navigation:u}=F();return{navigation:u}}const{data:a}=await q(`content-navigation-${H(n.value)}`,()=>w(n.value));return{navigation:a}},render(t){const e=C(),{navigation:n}=t,a=l=>s(z,{to:l._path},()=>l.title),u=(l,m)=>s("ul",m?{"data-level":m}:null,l.map(_=>_.children?s("li",null,[a(_),u(_.children,m+1)]):s("li",null,a(_)))),i=l=>u(l,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):i(n)}}),ct=Object.freeze(Object.defineProperty({__proto__:null,default:gt},Symbol.toStringTag,{value:"Module"}));export{gt as default};
