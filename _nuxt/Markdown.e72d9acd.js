import s from"./ContentSlot.36d700ac.js";import{e as o,f,p,A as u}from"./entry.ee37e9a1.js";import"./utils.9af81c0b.js";const l=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:a}=f(),r=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{l as default};