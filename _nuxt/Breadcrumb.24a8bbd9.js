import{a as h,S as r,o as m,J as f,K as a,R as _,Q as i,X as p,u as e,N as x}from"./entry.ee37e9a1.js";import{q as l}from"./ContentQuery.e0236b1b.js";/* empty css                    */import"./asyncData.7d6a7a24.js";import"./utils.9af81c0b.js";const w={class:"breadcrumb"},y=a("span",{class:"parent-title"}," ...",-1),B=a("span",{class:"dash"}," / ",-1),N={class:"parent-title"},b=a("span",{class:"dash"}," / ",-1),S={__name:"Breadcrumb",async setup(k){let t,s;const{path:n}=h(),u=([t,s]=r(()=>l(n).findOne()),t=await t,s(),t),o=n.split("/").slice(0,-1).join("/"),d=([t,s]=r(()=>l(o).findOne()),t=await t,s(),t);return(C,D)=>{const c=x;return m(),f("header",w,[a("h3",null,[_(c,{to:"/"},{default:i(()=>[y]),_:1}),B,_(c,{to:e(o)},{default:i(()=>[a("span",N,p(e(d).navigation.title),1)]),_:1},8,["to"]),b,a("span",null,p(e(u).title),1)])])}}};export{S as default};