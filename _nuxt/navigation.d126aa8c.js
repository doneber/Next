import{l as h,_ as f}from"./entry.1cd2d150.js";import{h as r,e as l,j as g}from"./ContentQuery.744b1ad0.js";import{w as p,s as v,u as w}from"./utils.0b22a3a1.js";const $=async a=>{var s,i;const{content:t}=h().public,e=typeof(a==null?void 0:a.params)=="function"?a.params():a||{};t.locales.length&&((i=(s=e.where)==null?void 0:s.find(n=>n._locale))!=null&&i._locale||(e.where=e.where||[],e.where.push({_locale:t.defaultLocale})));const m=t.experimental.stripQueryParameters?p(`/navigation/${`${r(e)}.${t.integrity}`}/${l(e)}.json`):p(`/navigation/${r(e)}.${t.integrity}.json`);if(v())return(await f(()=>import("./client-db.c4e0f335.js"),["./client-db.c4e0f335.js","./entry.1cd2d150.js","./entry.b9e35051.css","./utils.0b22a3a1.js","./ContentQuery.744b1ad0.js","./asyncData.2a80e4b3.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(n=>n.generateNavigation))(e);const o=await $fetch(m,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:g(e),previewToken:w("previewToken").value}});if(typeof o=="string"&&o.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return o};export{$ as f};