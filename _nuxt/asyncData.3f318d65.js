import{x as P,A as y,B as D,e as x,C as b,D as _,p as w,u as C}from"./entry.ce6b7c86.js";const O=()=>null;function M(...i){var m;const l=typeof i[i.length-1]=="string"?i.pop():void 0;typeof i[0]!="string"&&i.unshift(l);let[t,f,a={}]=i;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof f!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");a.server=a.server??!0,a.default=a.default??O,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0;const e=P(),u=()=>e.isHydrating?e.payload.data[t]:e.static.data[t],d=()=>u()!==void 0;e._asyncData[t]||(e._asyncData[t]={data:y(u()??((m=a.default)==null?void 0:m.call(a))??null),pending:y(!d()),error:y(e.payload._errors[t]?D(e.payload._errors[t]):null)});const r={...e._asyncData[t]};r.refresh=r.execute=(s={})=>{if(e._asyncDataPromises[t]){if(s.dedupe===!1)return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if(s._initial&&d())return u();r.pending.value=!0;const o=new Promise((n,c)=>{try{n(f(e))}catch(g){c(g)}}).then(n=>{if(o.cancelled)return e._asyncDataPromises[t];a.transform&&(n=a.transform(n)),a.pick&&(n=k(n,a.pick)),r.data.value=n,r.error.value=null}).catch(n=>{var c;if(o.cancelled)return e._asyncDataPromises[t];r.error.value=n,r.data.value=C(((c=a.default)==null?void 0:c.call(a))??null)}).finally(()=>{o.cancelled||(r.pending.value=!1,e.payload.data[t]=r.data.value,r.error.value&&(e.payload._errors[t]=D(r.error.value)),delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=o,e._asyncDataPromises[t]};const p=()=>r.refresh({_initial:!0}),v=a.server!==!1&&e.payload.serverRendered;{const s=x();if(s&&!s._nuxtOnBeforeMountCbs){s._nuxtOnBeforeMountCbs=[];const n=s._nuxtOnBeforeMountCbs;s&&(b(()=>{n.forEach(c=>{c()}),n.splice(0,n.length)}),_(()=>n.splice(0,n.length)))}v&&e.isHydrating&&d()?r.pending.value=!1:s&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?s._nuxtOnBeforeMountCbs.push(p):a.immediate&&p(),a.watch&&w(a.watch,()=>r.refresh());const o=e.hook("app:data:refresh",n=>{if(!n||n.includes(t))return r.refresh()});s&&_(o)}const h=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(h,r),h}function k(i,l){const t={};for(const f of l)t[f]=i[f];return t}export{M as u};
