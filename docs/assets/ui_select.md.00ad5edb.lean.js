import{w as U,r as i,e as j,o as y,c as w,k as Y,b as h,l as k,t as R,F as S,m as $,g as M,n as x,p as Z,h as A,q as ss,T as es,s as as,d as ls,v as ns,x as os,y as ts,u as I,z as ps,a as O}from"./app.4c7a0c6b.js";import{i as rs,a as cs,n as Ds,r as is,b as ys,t as ds,u as G}from"./chunks/index.8cb2feb3.js";let B=!1;function us(s){async function a(e){const l=e.target.scrollTop,c=e.target.clientHeight,t=e.target.scrollHeight;if(l+c>=t){if(B)return;B=!0,await s(),B=!1}}return{scroll:a}}function _(s){var a;const e=is(s);return(a=e==null?void 0:e.$el)!=null?a:e}const K=rs?window:void 0;function F(...s){let a,e,l,c;if(cs(s[0])||Array.isArray(s[0])?([e,l,c]=s,a=K):[a,e,l,c]=s,!a)return Ds;Array.isArray(e)||(e=[e]),Array.isArray(l)||(l=[l]);const t=[],D=()=>{t.forEach(f=>f()),t.length=0},d=(f,b,p)=>(f.addEventListener(b,p,c),()=>f.removeEventListener(b,p,c)),v=U(()=>_(a),f=>{D(),f&&t.push(...e.flatMap(b=>l.map(p=>d(f,b,p))))},{immediate:!0,flush:"post"}),g=()=>{v(),D()};return ds(g),g}function Cs(s,a,e={}){const{window:l=K,ignore:c,capture:t=!0,detectIframe:D=!1}=e;if(!l)return;const d=i(!0);let v;const g=n=>{l.clearTimeout(v);const r=_(s);!r||r===n.target||n.composedPath().includes(r)||!d.value||a(n)},f=n=>c&&c.some(r=>{const m=_(r);return m&&(n.target===m||n.composedPath().includes(m))}),b=[F(l,"click",g,{passive:!0,capture:t}),F(l,"pointerdown",n=>{const r=_(s);d.value=!!r&&!n.composedPath().includes(r)&&!f(n)},{passive:!0}),F(l,"pointerup",n=>{if(n.button===0){const r=n.composedPath();n.composedPath=()=>r,v=l.setTimeout(()=>g(n),50)}},{passive:!0}),D&&F(l,"blur",n=>{var r;const m=_(s);((r=l.document.activeElement)==null?void 0:r.tagName)==="IFRAME"&&!(m!=null&&m.contains(l.document.activeElement))&&a(n)})].filter(Boolean);return()=>b.forEach(n=>n())}const T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W="__vueuse_ssr_handlers__";T[W]=T[W]||{};T[W];var V;(function(s){s.UP="UP",s.RIGHT="RIGHT",s.DOWN="DOWN",s.LEFT="LEFT",s.NONE="NONE"})(V||(V={}));var ws=Object.defineProperty,Q=Object.getOwnPropertySymbols,fs=Object.prototype.hasOwnProperty,ms=Object.prototype.propertyIsEnumerable,q=(s,a,e)=>a in s?ws(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,vs=(s,a)=>{for(var e in a||(a={}))fs.call(a,e)&&q(s,e,a[e]);if(Q)for(var e of Q(a))ms.call(a,e)&&q(s,e,a[e]);return s};const hs={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};vs({linear:ys},hs);const gs=["value"],bs=j({__name:"SearchField",props:{onFilter:null},setup(s){const a=s,e=i(""),l=i("");function c(D){e.value=D,t(D)}const t=G(async D=>{await a.onFilter(D),l.value=D},250);return U(e,t),(D,d)=>(y(),w("input",{name:"search",type:"text",class:"tw-flex-1 tw-rounded-md tw-border-0 tw-bg-gray-100 tw-px-4 tw-py-2.5 tw-my-2 tw-mx-2 tw-text-gray-900 tw-placeholder-gray-500 focus:tw-ring-0 focus-visible:tw-ring-0 sm:tw-text-sm",placeholder:"Search",value:e.value,onInput:d[0]||(d[0]=v=>c(v.target.value)),onKeypress:d[1]||(d[1]=v=>c(v.target.value)),"aria-autocomplete":"none","aria-controls":"options","aria-expanded":"false",autocapitalize:"none",autocomplete:"off",autocorrect:"off",role:"combobox"},null,40,gs))}});function Es(s,a){return a!=null&&typeof a=="string"&&a.trim()!==""&&s!==void 0&&a.split(" ").forEach(e=>{if(e.length===0)return;const l=new RegExp(e,"gi");s=s.replaceAll(l,"<mark>$&</mark>")}),s}const _s={key:0,class:"tw-block tw-truncate tw-flex-1 tw-text-gray-800"},Fs={key:1,class:"tw-flex tw-flex-wrap tw-gap-2 tw-flex-1"},xs=["onClick"],As=h("span",{class:"material-symbols-rounded tw-text-xs","remove-btn":""},"close",-1),ks=[As],Ss={class:"tw-flex tw-space-x-1 tw-ml-2 tw-flex-shrink-0"},Is={key:0,class:"tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4"},Bs=h("span",{class:"material-symbols-rounded tw-text-3xl tw-text-gray-500 mb-4"},"sentiment_dissatisfied",-1),Ts=h("span",{class:"tw-text-base tw-text-gray-700"},"No data to display",-1),Ws=[Bs,Ts],Us={key:0,class:"tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4"},Os=h("span",{class:"material-symbols-rounded tw-text-3xl tw-text-gray-500 mb-4"},"mood_bad",-1),Ps=h("span",{class:"tw-text-base tw-text-gray-700"},"No matches found",-1),zs=[Os,Ps],Ns={key:1,class:"tw-py-1 tw-flex tw-items-stretch tw-flex-col"},Ls=["onClick"],Rs=["innerHTML"],$s={key:0,class:"material-symbols-rounded tw-shrink-0 tw-text-sm"},H=j({__name:"BaseSelect",props:{request:null,selected:{default:()=>[]},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1}},emits:["deselect","select"],setup(s,{emit:a}){const e=s,l=i(!1),c=i(0),t=i([]),D=i(1),d=i(""),v=i(),g=i(),f=i(0),b=i(0),p=i(0);Y(async()=>{n();const o=await e.request(D.value,"");t.value=o.items,c.value=o.totalWithoutFilter}),U(l,o=>{ps(()=>{if(o){const u=g.value.querySelector('input[name="search"]');u==null||u.focus()}})}),Cs(g,o=>{l.value===!0&&(o.target.hasAttribute("remove-btn")===!1&&o.stopPropagation(),l.value=!1)});const n=G(()=>{const o=v.value.getBoundingClientRect();f.value=o.top+o.height,b.value=o.left,p.value=o.width},10);F("resize",n);function r(o){a("select",o),e.multiple===!1&&(l.value=!1)}function m(o){a("deselect",o.id),e.multiple===!1&&(l.value=!1)}function E(o){return e.selected.some(u=>u.id===o.id)}let P=!1;const{scroll:z}=us(async()=>{if(P)return;D.value+=1;const o=await e.request(D.value,d.value);o.items.length===0?P=!0:t.value.push(...o.items)});async function J(o){D.value=1;const u=await e.request(D.value,o);t.value=u.items,d.value=o}return(o,u)=>{var N,L;return y(),w("div",{class:x(["tw-flex tw-tw-flex-col tw-w-full",{"tw-cursor-not-allowed tw-opacity-50 tw-grayscale":s.disabled}])},[h("div",{class:x(["tw-relative tw-inline-block tw-text-left tw-w-full tw-select-none",{"tw-pointer-events-none":s.disabled}])},[h("div",{class:"tw-flex tw-items-center tw-w-full tw-cursor-pointer tw-rounded-md tw-border tw-border-gray-300 tw-bg-white tw-px-2.5 tw-py-1 tw-text-left tw-shadow-sm focus:tw-border-blue-500 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 sm:tw-text-sm",onClick:u[1]||(u[1]=k(C=>l.value=!l.value,["stop"])),ref_key:"$select",ref:v},[s.multiple===!1?(y(),w("span",_s,R((L=(N=s.selected[0])==null?void 0:N.label)!=null?L:""),1)):(y(),w("div",Fs,[(y(!0),w(S,null,$(s.selected,C=>(y(),w("span",{key:C.id,class:"tw-inline-flex tw-items-center tw-rounded tw-bg-gray-200 tw-py-0.5 tw-pl-2 tw-pr-0.5 tw-text-xs tw-font-medium tw-text-gray-700"},[ls(R(C.label)+" ",1),h("button",{onClick:k(X=>m(C),["stop"]),type:"button",class:"tw-ml-0.5 tw-inline-flex tw-h-4 tw-w-4 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded tw-text-gray-400 hover:tw-bg-gray-300 hover:tw-text-gray-500 focus:tw-bg-gray-500 focus:tw-text-white focus:tw-outline-none","remove-btn":""},ks,8,xs)]))),128))])),h("div",Ss,[s.multiple===!1&&s.selected.length>0?(y(),w("span",{key:0,class:"material-symbols-rounded tw-cursor-pointer tw-text-gray-400 hover:tw-text-red-500 tw-text-xl",onClick:u[0]||(u[0]=k(C=>m(s.selected[0]),["stop"])),"remove-btn":""},"do_not_disturb_on")):M("",!0),h("span",{class:x(["material-symbols-rounded tw-cursor-pointer tw-text-gray-400 hover:tw-text-gray-500 tw-transition-transform tw-text-xl",{"tw-rotate-180":l.value}])},"keyboard_arrow_down",2)])],512),(y(),Z(as,{to:"body"},[A(es,{"enter-active-class":"tw-transition tw-duration-100 tw-ease-out","enter-from-class":"tw-transform tw-scale-95 tw-opacity-0","enter-to-class":"tw-transform tw-scale-100 tw-opacity-100","leave-active-class":"tw-transition tw-duration tw-ease-in","leave-from-class":"tw-transform tw-scale-100 tw-opacity-100","leave-to-class":"tw-transform tw-scale-95 tw-opacity-0"},{default:ss(()=>[ns(h("div",{ref_key:"$menu",ref:g,class:"tw-z-10 tw-flex tw-flex-col tw-absolute tw-overflow-auto tw-max-h-60 tw-mt-2 tw-origin-top tw-divide-y tw-divide-gray-100 tw-rounded-md tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none tw-text-base sm:tw-text-sm",style:ts(`left: ${b.value}px; top: ${f.value}px; width: ${p.value}px;`),onScroll:u[2]||(u[2]=(...C)=>I(z)&&I(z)(...C))},[c.value===0?(y(),w("div",Is,Ws)):(y(),w(S,{key:1},[A(bs,{onFilter:J}),t.value.length===0?(y(),w("div",Us,zs)):(y(),w("div",Ns,[(y(!0),w(S,null,$(t.value,C=>(y(),w("button",{key:C.id,class:x(["tw-flex tw-cursor-pointer tw-text-sm tw-justify-between tw-items-center tw-select-none tw-py-2 tw-text-left tw-px-4 hover:tw-bg-violet-500 hover:tw-text-white",E(C)?"tw-bg-violet-500 tw-text-white":"tw-text-gray-900"]),onClick:X=>E(C)?m(C):r(C)},[h("span",{class:"tw-truncate tw-mr-4",innerHTML:I(Es)(C.label,d.value)},null,8,Rs),E(C)?(y(),w("span",$s,"check")):M("",!0)],10,Ls))),128))]))],64))],36),[[os,l.value]])]),_:1})]))],2)],2)}}}),Ms=O("",4),Vs=O("",6),Qs=O("",7),Gs=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[{"level":2,"title":"Select One","slug":"select-one","link":"#select-one","children":[]},{"level":2,"title":"Select Many","slug":"select-many","link":"#select-many","children":[]}],"relativePath":"ui/select.md"}'),qs={name:"ui/select.md"},Ks=Object.assign(qs,{setup(s){const e=i([{id:"W-0",label:"Harry Potter"},{id:"W-1",label:"Hermione Granger"},{id:"W-2",label:"Lord Voldemort"},{id:"W-3",label:"Professor Albus Dumbledore"},{id:"W-4",label:"Draco Malfoy"},{id:"W-5",label:"Professor Severus Snape"},{id:"W-6",label:"Rubeus Hagrid"},{id:"W-7",label:"Luna Lovegood"},{id:"W-8",label:"Ron Weasley"},{id:"W-9",label:"Dobby"},{id:"W-10",label:"Professor Minerva McGonagall"},{id:"W-11",label:"Sirius Black"},{id:"W-12",label:"Bellatrix Lestrange"},{id:"W-13",label:"Neville Longbottom"},{id:"W-14",label:"Remus Lupin"},{id:"W-15",label:"Dolores Umbridge"}]),l=i([{id:"U-0",label:"harry_potter@gmail.com"},{id:"U-1",label:"hermione_granger@outlook.com"},{id:"U-2",label:"lord_voldemort@outlook.com"},{id:"U-3",label:"professor_albus_dumbledore@gmail.com"},{id:"U-4",label:"draco_malfoy@gmail.com"},{id:"U-5",label:"professor_severus_snape@outlook.com"},{id:"U-6",label:"rubeus_hagrid@gmail.com"},{id:"U-7",label:"luna_lovegood@outlook.com"},{id:"U-8",label:"ron_weasley@outlook.com"},{id:"U-9",label:"dobby@outlook.com"},{id:"U-10",label:"professor_minerva_mcgonagall@gmail.com"},{id:"U-11",label:"sirius_black@gmail.com"},{id:"U-12",label:"bellatrix_lestrange@gmail.com"},{id:"U-13",label:"neville_longbottom@outlook.com"},{id:"U-14",label:"remus_lupin@gmail.com"},{id:"U-15",label:"dolores_umbridge@outlook.com"}]),c=i([]),t=i([]);function D(p){t.value=t.value.filter(n=>n.id!==p)}function d(p){t.value.push(p)}async function v(p,n){const r=(p-1)*5,m=r+5;return{totalWithoutFilter:e.value.length,items:e.value.filter(E=>E.label.toLowerCase().includes(n.toLowerCase())).slice(r,m)}}function g(p){c.value=c.value.filter(n=>n.id!==p)}function f(p){c.value.push(p)}async function b(p,n){const r=(p-1)*5,m=r+5;return{totalWithoutFilter:l.value.length,items:l.value.filter(E=>E.label.toLowerCase().includes(n.toLowerCase())).slice(r,m)}}return(p,n)=>(y(),w("div",null,[Ms,A(H,{request:v,selected:t.value,onDeselect:D,onSelect:d},null,8,["selected"]),Vs,A(H,{request:b,selected:c.value,onDeselect:g,onSelect:f,multiple:""},null,8,["selected"]),Qs]))}});export{Gs as __pageData,Ks as default};