import{_}from"./preload-helper.36518dfa.js";import{q as p,h as a,e as m,j as c}from"./ContentQuery.3f960c54.js";import{b as f}from"./nuxt-link.a31d843b.js";import{u}from"./cookie.fa176984.js";import"./app.config.5ff5ca90.js";import{w as n,s as g}from"./utils.221d5e2c.js";import{n as v}from"./page.95402132.js";const $=async t=>{const{content:e}=f().public;typeof(t==null?void 0:t.params)!="function"&&(t=p(t));const s=t.params(),i=e.experimental.stripQueryParameters?n(`/navigation/${`${a(s)}.${e.integrity}`}/${m(s)}.json`):n(`/navigation/${a(s)}.${e.integrity}.json`);if(g())return(await _(()=>import("./client-db.873fc098.js"),["./client-db.873fc098.js","./index.36486552.js","./nuxt-link.a31d843b.js","./runtime-core.esm-bundler.c9b12900.js","./cookie.fa176984.js","./app.config.5ff5ca90.js","./query.c3f7607a.js","./index.a6ef77ff.js"],import.meta.url).then(r=>r.generateNavigation))(s);const o=await $fetch(i,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:c(s),previewToken:u("previewToken").value}});if(typeof o=="string"&&o.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return o};const x=v("courses",{state:()=>({courseList:{}}),getters:{},actions:{addCourse(t,e){this.courseList={...this.courseList,[t]:e}}}});export{$ as f,x as u};
