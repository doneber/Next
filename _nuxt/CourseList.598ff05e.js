import{e as v,o as e,J as s,R as m,Q as u,K as t,U as h,V as x,X as a,Y as y,Z as g,N as w,O as C}from"./entry.1cd2d150.js";import N from"./ContentNavigation.76477669.js";import"./asyncData.2a80e4b3.js";import"./ContentQuery.744b1ad0.js";import"./utils.0b22a3a1.js";import"./navigation.d126aa8c.js";/* empty css                    */import"./ContentDoc.b498adac.js";import"./composables.2e7b18b3.js";import"./ContentRenderer.6bb8e4f5.js";import"./ContentRendererMarkdown.8df76ecf.js";import"./_commonjsHelpers.fed2a411.js";import"./ContentList.e986e622.js";import"./ContentSlot.a58bfa83.js";import"./DocumentDrivenEmpty.b248c615.js";import"./DocumentDrivenNotFound.0cb4bea2.js";import"./Markdown.a9201ad0.js";import"./ProseCode.5b981117.js";const i=n=>(y("data-v-ff1f09ee"),n=n(),g(),n),S={class:"container"},I=i(()=>t("h2",null,"Lista de Re-Cursos:",-1)),L={class:"card-wrapper"},M={key:0},B={class:"card"},V={class:"icon"},q={key:1,class:"card-draft-container"},R={class:"card"},$=i(()=>t("p",{class:"icon"},"\u2754",-1)),z=i(()=>t("div",{class:"glass"},null,-1)),D=v({__name:"CourseList",setup(n){const d=(_,l)=>{const r=["de","la","que","el","en","y","a","que","solo","han","hay","vez","puede","todos"],p=Math.floor(Math.random()*(l-_+1))+_;let c="";for(let o=0;o<p;o++){const f=r[Math.floor(Math.random()*r.length)];c+=f+" "}return c};return(_,l)=>{const r=w,p=N;return e(),s("section",S,[I,m(p,null,{default:u(({navigation:c})=>[t("ul",L,[(e(!0),s(h,null,x(c,o=>(e(),s(h,{key:o._path},[o!=null&&o.draft?(e(),s("li",q,[t("div",R,[t("header",null,[t("h3",null,a(d(7,8)),1),$]),t("p",null,a(d(20,24)),1)]),z])):(e(),s("li",M,[m(r,{to:o._path},{default:u(()=>[t("div",B,[t("header",null,[t("h3",null,a(o.title),1),t("p",V,a(o.icon),1)]),t("p",null,a(o.description),1)])]),_:2},1032,["to"])]))],64))),128))])]),_:1})])}}}),k=C(D,[["__scopeId","data-v-ff1f09ee"]]);export{k as default};