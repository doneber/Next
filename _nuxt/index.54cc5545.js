import{a as I,_ as y,b as C}from"./TheBreadcrumb.373febbb.js";import b from"./ContentDoc.ba1d4fac.js";import{_ as w}from"./TheFooter.d7df89a7.js";import{u as S}from"./asyncData.a0e3735e.js";import{j as V,q as g,L as A,k as B,N as r,Q as s,V as N,u as c,o as $,S as k,U as D}from"./entry.8c8026e7.js";import{u as j,f as E}from"./TheBreadcrumb.vue.2dcee00e.js";import"./query.cc9eeba1.js";import"./utils.529c29d2.js";import"./ContentRenderer.68150555.js";import"./ContentRendererMarkdown.b9c5ea1b.js";import"./index.a6ef77ff.js";import"./ContentQuery.b8775f2f.js";/* empty css                      */const R=e=>(k("data-v-b2a540df"),e=e(),D(),e),T={class:"wrapper"},q={class:"rich-content"},F={class:"container"},M={class:"course-title"},Q=R(()=>r("h2",null,"Lista de clases:",-1)),U={__name:"index",async setup(e){let n,p;const{path:t}=g(),{data:m}=([n,p]=A(()=>S(t,()=>E(t),"$gV0Cj6AsRI")),n=await n,p(),n),u=m._rawValue.find(o=>o._path===t).children,a=u.find(o=>o._path===t),d=a==null?void 0:a.author,i=j();if(!i.courseList[t]){let o=u.filter(_=>_._path!==t);o.forEach(_=>{_.seen=!1}),i.addCourse(t,o)}let l=i.courseList[t];return(o,_)=>{const h=C,f=I,x=b,L=y,v=w;return $(),B("div",T,[r("main",q,[r("div",F,[s(h),r("h1",M,N(c(a).title),1),s(f,{author:c(d)},null,8,["author"]),s(x),Q,s(L,{path:c(t),"lesson-list":c(l)},null,8,["path","lesson-list"])]),s(v)])])}}},st=V(U,[["__scopeId","data-v-b2a540df"]]);export{st as default};
