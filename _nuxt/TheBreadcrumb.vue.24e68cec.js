import{l as _,_ as p,I as c}from"./entry.ce6b7c86.js";import{q as m,h as o,e as f,j as g}from"./query.cf0ed615.js";import{w as n,s as u,a as v}from"./utils.68122be8.js";const C=async t=>{const{content:e}=_().public;typeof(t==null?void 0:t.params)!="function"&&(t=m(t));const s=t.params(),i=e.experimental.stripQueryParameters?n(`/navigation/${`${o(s)}.${e.integrity}`}/${f(s)}.json`):n(`/navigation/${o(s)}.${e.integrity}.json`);if(u())return(await p(()=>import("./client-db.90704e19.js"),["./client-db.90704e19.js","./entry.ce6b7c86.js","./entry.68c3a477.css","./utils.68122be8.js","./query.cf0ed615.js","./index.a6ef77ff.js"],import.meta.url).then(r=>r.generateNavigation))(s);const a=await $fetch(i,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:g(s),previewToken:v("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const w=c("courses",{state:()=>({courseList:{}}),getters:{},actions:{addCourse(t,e){this.courseList={...this.courseList,[t]:e}}}});export{C as f,w as u};
