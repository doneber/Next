import{u as I,_ as M,a as V,b as y}from"./AuthorInfo.294c89ac.js";import B from"./ContentDoc.4d23ab3f.js";import{j as D,q as N,L as R,C as b,M as T,k as j,N as e,O as C,P as L,u as a,Q as i,o as E,R as H,S as A,U as G}from"./entry.124ecdc8.js";import{u as $}from"./asyncData.71a3af07.js";import{f as P}from"./navigation.da6b5504.js";import"./query.4627c092.js";import"./utils.65eb0818.js";import"./preview.1a302631.js";import"./ContentRenderer.34d8b387.js";import"./ContentRendererMarkdown.19b3311b.js";import"./index.a6ef77ff.js";import"./ContentQuery.36d800f7.js";const W=c=>(A("data-v-bf3cbc73"),c=c(),G(),c),q={class:"wrapper"},O={class:"container"},Q=W(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -3 20 20"},[e("g",{fill:"none","fill-rule":"evenodd",stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[e("path",{d:"M1 1h18M1 7h13M1 13h8"})])],-1)),U=[Q],Z=H('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bf3cbc73><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-bf3cbc73></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-bf3cbc73></g><g id="SVGRepo_iconCarrier" data-v-bf3cbc73><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#ffffff" data-v-bf3cbc73></path></g></svg>',1),z=[Z],F={__name:"[...class]",async setup(c){let r,f;const{path:l}=N(),o=l.split("/").slice(0,-1).join("/"),{data:k}=([r,f]=R(()=>$(l,()=>P(o),"$emlIg3d52m")),r=await r,f(),r),h=k._rawValue.find(t=>t._path===o).children,x=h.find(t=>t._path===o).author,_=I();if(!_.courseList[o]){let t=h.filter(n=>n._path!==o);t.forEach(n=>{n.seen=!1}),_.addCourse(o,t)}let m=_.courseList[o];const S=t=>{const n=t.target.clientHeight,p=t.target.scrollHeight;if(t.target.scrollTop>=p-n-130){const d=m.find(u=>u._path===l);d.seen=!0}},g=b(null);let s=b(!1);const v=()=>{console.log({drawerToggle:s}),s.value=!s.value};return T(()=>{g.value.dispatchEvent(new Event("scroll")),s.value=window.innerWidth>768}),(t,n)=>{const p=M,w=y,d=V,u=B;return E(),j("div",q,[e("main",{ref_key:"input",ref:g,class:"rich-content",onScroll:S},[C(i(p,{class:"lesson-list",path:a(o),"lesson-list":a(m)},null,8,["path","lesson-list"]),[[L,a(s)]]),e("div",O,[i(w),i(d,{author:a(x)},null,8,["author"]),i(u)])],544),e("button",{class:"btn-open-drawer",onClick:v},U),C(e("button",{class:"btn-close-drawer",onClick:v},z,512),[[L,a(s)]])])}}},lt=D(F,[["__scopeId","data-v-bf3cbc73"]]);export{lt as default};