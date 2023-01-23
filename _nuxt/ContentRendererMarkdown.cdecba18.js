import{e as $,l as Z,i as M,r as A,T as S,a as J,s as G}from"./entry.ee37e9a1.js";import{g as Q,p as nn}from"./_commonjsHelpers.fed2a411.js";class x{constructor(e,o,t){this.property=e,this.normal=o,t&&(this.space=t)}}x.prototype.property={};x.prototype.normal={};x.prototype.space=null;function E(l,e){const o={},t={};let r=-1;for(;++r<l.length;)Object.assign(o,l[r].property),Object.assign(t,l[r].normal);return new x(o,t,e)}function P(l){return l.toLowerCase()}class f{constructor(e,o){this.property=e,this.attribute=o}}f.prototype.space=null;f.prototype.boolean=!1;f.prototype.booleanish=!1;f.prototype.overloadedBoolean=!1;f.prototype.number=!1;f.prototype.commaSeparated=!1;f.prototype.spaceSeparated=!1;f.prototype.commaOrSpaceSeparated=!1;f.prototype.mustUseProperty=!1;f.prototype.defined=!1;let ln=0;const u=v(),d=v(),U=v(),n=v(),c=v(),b=v(),m=v();function v(){return 2**++ln}const D=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:d,overloadedBoolean:U,number:n,spaceSeparated:c,commaSeparated:b,commaOrSpaceSeparated:m},Symbol.toStringTag,{value:"Module"})),w=Object.keys(D);class L extends f{constructor(e,o,t,r){let a=-1;if(super(e,o),T(this,"space",r),typeof t=="number")for(;++a<w.length;){const i=w[a];T(this,w[a],(t&D[i])===D[i])}}}L.prototype.defined=!0;function T(l,e,o){o&&(l[e]=o)}const en={}.hasOwnProperty;function k(l){const e={},o={};let t;for(t in l.properties)if(en.call(l.properties,t)){const r=l.properties[t],a=new L(t,l.transform(l.attributes||{},t),r,l.space);l.mustUseProperty&&l.mustUseProperty.includes(t)&&(a.mustUseProperty=!0),e[t]=a,o[P(t)]=t,o[P(a.attribute)]=t}return new x(e,o,l.space)}const z=k({space:"xlink",transform(l,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),B=k({space:"xml",transform(l,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function I(l,e){return e in l?l[e]:e}function j(l,e){return I(l,e.toLowerCase())}const F=k({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:j,properties:{xmlns:null,xmlnsXLink:null}}),H=k({transform(l,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:d,ariaAutoComplete:null,ariaBusy:d,ariaChecked:d,ariaColCount:n,ariaColIndex:n,ariaColSpan:n,ariaControls:c,ariaCurrent:null,ariaDescribedBy:c,ariaDetails:null,ariaDisabled:d,ariaDropEffect:c,ariaErrorMessage:null,ariaExpanded:d,ariaFlowTo:c,ariaGrabbed:d,ariaHasPopup:null,ariaHidden:d,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:c,ariaLevel:n,ariaLive:null,ariaModal:d,ariaMultiLine:d,ariaMultiSelectable:d,ariaOrientation:null,ariaOwns:c,ariaPlaceholder:null,ariaPosInSet:n,ariaPressed:d,ariaReadOnly:d,ariaRelevant:null,ariaRequired:d,ariaRoleDescription:c,ariaRowCount:n,ariaRowIndex:n,ariaRowSpan:n,ariaSelected:d,ariaSetSize:n,ariaSort:null,ariaValueMax:n,ariaValueMin:n,ariaValueNow:n,ariaValueText:null,role:null}}),on=k({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:j,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:b,acceptCharset:c,accessKey:c,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:c,autoFocus:u,autoPlay:u,capture:u,charSet:null,checked:u,cite:null,className:c,cols:n,colSpan:null,content:null,contentEditable:d,controls:u,controlsList:c,coords:n|b,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:U,draggable:d,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:c,height:n,hidden:u,high:n,href:null,hrefLang:null,htmlFor:c,httpEquiv:c,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:c,itemRef:c,itemScope:u,itemType:c,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:n,manifest:null,max:null,maxLength:n,media:null,method:null,min:null,minLength:n,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:n,pattern:null,ping:c,placeholder:null,playsInline:u,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:c,required:u,reversed:u,rows:n,rowSpan:n,sandbox:c,scope:null,scoped:u,seamless:u,selected:u,shape:null,size:n,sizes:null,slot:null,span:n,spellCheck:d,src:null,srcDoc:null,srcLang:null,srcSet:null,start:n,step:null,style:null,tabIndex:n,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:d,width:n,wrap:null,align:null,aLink:null,archive:c,axis:null,background:null,bgColor:null,border:n,borderColor:null,bottomMargin:n,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:n,leftMargin:n,link:null,longDesc:null,lowSrc:null,marginHeight:n,marginWidth:n,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:n,rules:null,scheme:null,scrolling:d,standby:null,summary:null,text:null,topMargin:n,valueType:null,version:null,vAlign:null,vLink:null,vSpace:n,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:n,security:null,unselectable:null}}),tn=k({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:I,properties:{about:m,accentHeight:n,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:n,amplitude:n,arabicForm:null,ascent:n,attributeName:null,attributeType:null,azimuth:n,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:n,by:null,calcMode:null,capHeight:n,className:c,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:n,diffuseConstant:n,direction:null,display:null,dur:null,divisor:n,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:n,enableBackground:null,end:null,event:null,exponent:n,externalResourcesRequired:null,fill:null,fillOpacity:n,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:b,g2:b,glyphName:b,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:n,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:n,horizOriginX:n,horizOriginY:n,id:null,ideographic:n,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:n,k:n,k1:n,k2:n,k3:n,k4:n,kernelMatrix:m,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:n,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:n,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:n,overlineThickness:n,paintOrder:null,panose1:null,path:null,pathLength:n,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:c,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:n,pointsAtY:n,pointsAtZ:n,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:m,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:m,rev:m,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:m,requiredFeatures:m,requiredFonts:m,requiredFormats:m,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:n,specularExponent:n,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:n,strikethroughThickness:n,string:null,stroke:null,strokeDashArray:m,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:n,strokeOpacity:n,strokeWidth:null,style:null,surfaceScale:n,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:m,tabIndex:n,tableValues:null,target:null,targetX:n,targetY:n,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:m,to:null,transform:null,u1:null,u2:null,underlinePosition:n,underlineThickness:n,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:n,values:null,vAlphabetic:n,vMathematical:n,vectorEffect:null,vHanging:n,vIdeographic:n,version:null,vertAdvY:n,vertOriginX:n,vertOriginY:n,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:n,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),rn=/^data[-\w.:]+$/i,R=/-[a-z]/g,an=/[A-Z]/g;function un(l,e){const o=P(e);let t=e,r=f;if(o in l.normal)return l.property[l.normal[o]];if(o.length>4&&o.slice(0,4)==="data"&&rn.test(e)){if(e.charAt(4)==="-"){const a=e.slice(5).replace(R,cn);t="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=e.slice(4);if(!R.test(a)){let i=a.replace(an,sn);i.charAt(0)!=="-"&&(i="-"+i),e="data"+i}}r=L}return new r(t,e)}function sn(l){return"-"+l.toLowerCase()}function cn(l){return l.charAt(1).toUpperCase()}const pn=E([B,z,F,H,on],"html");E([B,z,F,H,tn],"svg");var _={exports:{}};const dn=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];(function(l){l.exports=dn})(_);const N=Q(_.exports),O="default",V=/^@|^v-on:/,q=/^:|^v-bind:/,W=/^v-model/,gn=["select","textarea","input"],On=$({name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})}},async setup(l){var o;const{content:{tags:e={}}}=Z().public;return await wn(l.value.body,{tags:{...e,...((o=l.value)==null?void 0:o._components)||{},...l.components}}),{tags:e}},render(l){var p;const{tags:e,tag:o,value:t,components:r}=l;if(!t)return null;let a=t.body||t;l.excerpt&&t.excerpt&&(a=t.excerpt);const i={...t,tags:{...e,...(t==null?void 0:t._components)||{},...r}};let s=i.component||o;return typeof i.component=="object"&&(s=i.component.name),s=X(s),M(s,{...(p=i.component)==null?void 0:p.props,...this.$attrs},K(a,M,i,i))}});function hn(l,e,o,t={}){var p;if(l.type==="text")return e(S,l.value);const r=l.tag,a=typeof((p=l.props)==null?void 0:p.__ignoreMap)>"u"&&o.tags[r]||r;if(l.tag==="binding")return mn(l,e,o,t);const i=X(a);typeof i=="object"&&(i.tag=r);const s=fn(l,o);return e(i,s,K(l,e,o,{...t,...s}))}function mn(l,e,o,t={}){var p;const r={...t,$route:()=>J(),$document:o,$doc:o},a=/\.|\[(\d+)\]/,s=((p=l.props)==null?void 0:p.value.trim().split(a).filter(Boolean)).reduce((g,y)=>y in g?typeof g[y]=="function"?g[y]():g[y]:{},r);return e(S,s)}function K(l,e,o,t){const a=(l.children||[]).reduce((s,p)=>{if(!Sn(p))return s[O].push(p),s;const g=xn(p);return s[g]=s[g]||[],s[g].push(...p.children||[]),s},{[O]:[]});return Object.entries(a).reduce((s,[p,g])=>(g.length&&(s[p]=()=>{const y=g.map(h=>hn(h,e,o,t));return Cn(y)}),s),{})}function fn(l,e){const{tag:o="",props:t={}}=l;return Object.keys(t).reduce(function(r,a){if(a==="__ignoreMap")return r;const i=t[a];if(W.test(a)&&!gn.includes(o))return yn(a,i,r,e);if(a==="v-bind")return vn(a,i,r,e);if(V.test(a))return bn(a,i,r,e);if(q.test(a))return kn(a,i,r,e);const{attribute:s}=un(pn,a);return Array.isArray(i)&&i.every(p=>typeof p=="string")?(r[s]=i.join(" "),r):(r[s]=i,r)},{})}function yn(l,e,o,t){const r=h=>+h,a=h=>h.trim(),i=h=>h,s=l.replace(W,"").split(".").filter(h=>h).reduce((h,Y)=>(h[Y]=!0,h),{}),p="value",g=s.lazy?"change":"input",y=s.number?r:s.trim?a:i;return o[p]=C(e,t),o.on=o.on||{},o.on[g]=h=>t[e]=y(h),o}function vn(l,e,o,t){const r=C(e,t);return o=Object.assign(o,r),o}function bn(l,e,o,t){return l=l.replace(V,""),o.on=o.on||{},o.on[l]=()=>C(e,t),o}function kn(l,e,o,t){return l=l.replace(q,""),o[l]=C(e,t),o}const X=l=>{if(!N.includes(l)){const e=A(nn(l),!1);if(typeof e=="object")return e}return l};function C(l,e){const o=l.split(".").reduce((t,r)=>typeof t=="object"?t[r]:void 0,e);return typeof o>"u"?G(l):o}function xn(l){let e="";for(const o of Object.keys(l.props||{}))if(!(!o.startsWith("#")&&!o.startsWith("v-slot:"))){e=o.split(/[:#]/,2)[1];break}return e||O}function Sn(l){return l.tag==="template"}function Cn(l){const e=[];for(const o of l){const t=e[e.length-1];o.type===S&&(t==null?void 0:t.type)===S?t.children=t.children+o.children:e.push(o)}return e}async function wn(l,e){const o=Array.from(new Set(t(l,e)));await Promise.all(o.map(async r=>{const a=A(r);(a==null?void 0:a.__asyncLoader)&&!a.__asyncResolved&&await a.__asyncLoader()}));function t(r,a){var p;if(r.type==="text"||r.tag==="binding")return[];const i=typeof((p=r.props)==null?void 0:p.__ignoreMap)>"u"&&a.tags[r.tag]||r.tag,s=[];r.type!=="root"&&!N.includes(i)&&s.push(i);for(const g of r.children||[])s.push(...t(g,a));return s}}export{On as default};
