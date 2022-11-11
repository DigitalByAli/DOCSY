import{w as U,r as i,e as z,o as d,c as w,k as X,b as v,l as k,t as $,F as A,m as M,g as R,n as x,p as Y,h as W,q as Z,T as ss,s as es,d as as,v as ls,x as ns,y as os,u as B,z as ts,a as j}from"./app.af1d8c24.js";import{i as ps,a as rs,n as cs,r as Ds,b as is,t as ys,u as G}from"./chunks/index.c56cd550.js";let S=!1;function ds(s){async function l(e){const a=e.target.scrollTop,D=e.target.clientHeight,r=e.target.scrollHeight;if(a+D>=r){if(S)return;S=!0,await s(),S=!1}}return{scroll:l}}function E(s){var l;const e=Ds(s);return(l=e==null?void 0:e.$el)!=null?l:e}const V=ps?window:void 0;function F(...s){let l,e,a,D;if(rs(s[0])||Array.isArray(s[0])?([e,a,D]=s,l=V):[l,e,a,D]=s,!l)return cs;Array.isArray(e)||(e=[e]),Array.isArray(a)||(a=[a]);const r=[],p=()=>{r.forEach(f=>f()),r.length=0},t=(f,g,b)=>(f.addEventListener(g,b,D),()=>f.removeEventListener(g,b,D)),y=U(()=>E(l),f=>{p(),f&&r.push(...e.flatMap(g=>a.map(b=>t(f,g,b))))},{immediate:!0,flush:"post"}),m=()=>{y(),p()};return ys(m),m}function us(s,l,e={}){const{window:a=V,ignore:D,capture:r=!0,detectIframe:p=!1}=e;if(!a)return;const t=i(!0);let y;const m=o=>{a.clearTimeout(y);const u=E(s);!u||u===o.target||o.composedPath().includes(u)||!t.value||l(o)},f=o=>D&&D.some(u=>{const h=E(u);return h&&(o.target===h||o.composedPath().includes(h))}),g=[F(a,"click",m,{passive:!0,capture:r}),F(a,"pointerdown",o=>{const u=E(s);t.value=!!u&&!o.composedPath().includes(u)&&!f(o)},{passive:!0}),F(a,"pointerup",o=>{if(o.button===0){const u=o.composedPath();o.composedPath=()=>u,y=a.setTimeout(()=>m(o),50)}},{passive:!0}),p&&F(a,"blur",o=>{var u;const h=E(s);((u=a.document.activeElement)==null?void 0:u.tagName)==="IFRAME"&&!(h!=null&&h.contains(a.document.activeElement))&&l(o)})].filter(Boolean);return()=>g.forEach(o=>o())}const I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O="__vueuse_ssr_handlers__";I[O]=I[O]||{};I[O];var Q;(function(s){s.UP="UP",s.RIGHT="RIGHT",s.DOWN="DOWN",s.LEFT="LEFT",s.NONE="NONE"})(Q||(Q={}));var Cs=Object.defineProperty,H=Object.getOwnPropertySymbols,ws=Object.prototype.hasOwnProperty,fs=Object.prototype.propertyIsEnumerable,q=(s,l,e)=>l in s?Cs(s,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[l]=e,ms=(s,l)=>{for(var e in l||(l={}))ws.call(l,e)&&q(s,e,l[e]);if(H)for(var e of H(l))fs.call(l,e)&&q(s,e,l[e]);return s};const vs={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ms({linear:is},vs);const gs=["value"],hs=z({__name:"SearchField",props:{onFilter:null},setup(s){const l=s,e=i(""),a=i("");function D(p){e.value=p,r(p)}const r=G(async p=>{await l.onFilter(p),a.value=p},250);return U(e,r),(p,t)=>(d(),w("input",{name:"search",type:"text",class:"tw-flex-1 tw-rounded-md tw-border-0 tw-bg-gray-100 tw-px-4 tw-py-2.5 tw-my-2 tw-mx-2 tw-text-gray-900 tw-placeholder-gray-500 focus:tw-ring-0 focus-visible:tw-ring-0 sm:tw-text-sm",placeholder:"Search",value:e.value,onInput:t[0]||(t[0]=y=>D(y.target.value)),onKeypress:t[1]||(t[1]=y=>D(y.target.value)),"aria-autocomplete":"none","aria-controls":"options","aria-expanded":"false",autocapitalize:"none",autocomplete:"off",autocorrect:"off",role:"combobox"},null,40,gs))}});function bs(s,l){return l!=null&&typeof l=="string"&&l.trim()!==""&&s!==void 0&&l.split(" ").forEach(e=>{if(e.length===0)return;const a=new RegExp(e,"gi");s=s.replaceAll(a,"<mark>$&</mark>")}),s}const Es={key:0,class:"tw-block tw-truncate tw-flex-1 tw-text-gray-800"},Fs={key:1,class:"tw-flex tw-flex-wrap tw-gap-2 tw-flex-1"},xs=["onClick"],_s=v("span",{class:"material-symbols-rounded tw-text-xs","remove-btn":""},"close",-1),ks=[_s],As={class:"tw-flex tw-space-x-1 tw-ml-2 tw-flex-shrink-0"},Bs={key:0,class:"tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4"},Ss=v("span",{class:"material-symbols-rounded tw-text-3xl tw-text-gray-500 mb-4"},"sentiment_dissatisfied",-1),Ws=v("span",{class:"tw-text-base tw-text-gray-700"},"No data to display",-1),Is=[Ss,Ws],Os={key:0,class:"tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4"},Us=v("span",{class:"material-symbols-rounded tw-text-3xl tw-text-gray-500 mb-4"},"mood_bad",-1),zs=v("span",{class:"tw-text-base tw-text-gray-700"},"No matches found",-1),Ps=[Us,zs],Ts={key:1,class:"tw-py-1 tw-flex tw-items-stretch tw-flex-col"},Ls=["onClick"],Ns=["innerHTML"],$s={key:0,class:"material-symbols-rounded tw-shrink-0 tw-text-sm"},Ms=z({__name:"BaseSelect",props:{request:null,selected:{default:()=>[]},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1}},emits:["deselect","select"],setup(s,{emit:l}){const e=s,a=i(!1),D=i(0),r=i([]),p=i(1),t=i(""),y=i(),m=i(),f=i(0),g=i(0),b=i(0);X(async()=>{o();const n=await e.request(p.value,"");r.value=n.items,D.value=n.totalWithoutFilter}),U(a,n=>{ts(()=>{if(n){const c=m.value.querySelector('input[name="search"]');c==null||c.focus()}})}),us(m,n=>{a.value===!0&&(n.target.hasAttribute("remove-btn")===!1&&n.stopPropagation(),a.value=!1)});const o=G(()=>{var c;const n=(c=y.value)==null?void 0:c.getBoundingClientRect();n!==void 0&&(f.value=n.top+n.height,g.value=n.left,b.value=n.width)},10);F("resize",o);function u(n){l("select",n),e.multiple===!1&&(a.value=!1)}function h(n){l("deselect",n.id),e.multiple===!1&&(a.value=!1)}function _(n){return e.selected.some(c=>c.id===n.id)}let P=!1;const{scroll:T}=ds(async()=>{if(P)return;p.value+=1;const n=await e.request(p.value,t.value);n.items.length===0?P=!0:r.value.push(...n.items)});async function K(n){p.value=1;const c=await e.request(p.value,n);r.value=c.items,t.value=n}return(n,c)=>{var L,N;return d(),w("div",{class:x(["tw-flex tw-tw-flex-col tw-w-full",{"tw-cursor-not-allowed tw-opacity-50 tw-grayscale":s.disabled}])},[v("div",{class:x(["tw-relative tw-inline-block tw-text-left tw-w-full tw-select-none",{"tw-pointer-events-none":s.disabled}])},[v("div",{class:"tw-flex tw-items-center tw-w-full tw-cursor-pointer tw-rounded-md tw-border tw-border-gray-300 tw-bg-white tw-px-2.5 tw-py-1 tw-text-left tw-shadow-sm focus:tw-border-blue-500 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 sm:tw-text-sm",onClick:c[1]||(c[1]=k(C=>a.value=!a.value,["stop"])),ref_key:"$select",ref:y},[s.multiple===!1?(d(),w("span",Es,$((N=(L=s.selected[0])==null?void 0:L.label)!=null?N:""),1)):(d(),w("div",Fs,[(d(!0),w(A,null,M(s.selected,C=>(d(),w("span",{key:C.id,class:"tw-inline-flex tw-items-center tw-rounded tw-bg-gray-200 tw-py-0.5 tw-pl-2 tw-pr-0.5 tw-text-xs tw-font-medium tw-text-gray-700"},[as($(C.label)+" ",1),v("button",{onClick:k(J=>h(C),["stop"]),type:"button",class:"tw-ml-0.5 tw-inline-flex tw-h-4 tw-w-4 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded tw-text-gray-400 hover:tw-bg-gray-300 hover:tw-text-gray-500 focus:tw-bg-gray-500 focus:tw-text-white focus:tw-outline-none","remove-btn":""},ks,8,xs)]))),128))])),v("div",As,[s.multiple===!1&&s.selected.length>0?(d(),w("span",{key:0,class:"material-symbols-rounded tw-cursor-pointer tw-text-gray-400 hover:tw-text-red-500 tw-text-xl",onClick:c[0]||(c[0]=k(C=>h(s.selected[0]),["stop"])),"remove-btn":""},"do_not_disturb_on")):R("",!0),v("span",{class:x(["material-symbols-rounded tw-cursor-pointer tw-text-gray-400 hover:tw-text-gray-500 tw-transition-transform tw-text-xl",{"tw-rotate-180":a.value}])},"keyboard_arrow_down",2)])],512),(d(),Y(es,{to:"#teleported"},[W(ss,{"enter-active-class":"tw-transition tw-duration-100 tw-ease-out","enter-from-class":"tw-transform tw-scale-95 tw-opacity-0","enter-to-class":"tw-transform tw-scale-100 tw-opacity-100","leave-active-class":"tw-transition tw-duration tw-ease-in","leave-from-class":"tw-transform tw-scale-100 tw-opacity-100","leave-to-class":"tw-transform tw-scale-95 tw-opacity-0"},{default:Z(()=>[ls(v("div",{ref_key:"$menu",ref:m,class:"tw-z-10 tw-flex tw-flex-col tw-absolute tw-overflow-auto tw-max-h-60 tw-mt-2 tw-origin-top tw-divide-y tw-divide-gray-100 tw-rounded-md tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none tw-text-base sm:tw-text-sm",style:os(`left: ${g.value}px; top: ${f.value}px; width: ${b.value}px;`),onScroll:c[2]||(c[2]=(...C)=>B(T)&&B(T)(...C))},[D.value===0?(d(),w("div",Bs,Is)):(d(),w(A,{key:1},[W(hs,{onFilter:K}),r.value.length===0?(d(),w("div",Os,Ps)):(d(),w("div",Ts,[(d(!0),w(A,null,M(r.value,C=>(d(),w("button",{key:C.id,class:x(["tw-flex tw-cursor-pointer tw-text-sm tw-justify-between tw-items-center tw-select-none tw-py-2 tw-text-left tw-px-4 hover:tw-bg-violet-500 hover:tw-text-white",_(C)?"tw-bg-violet-500 tw-text-white":"tw-text-gray-900"]),onClick:J=>_(C)?h(C):u(C)},[v("span",{class:"tw-truncate tw-mr-4",innerHTML:B(bs)(C.label,t.value)},null,8,Ns),_(C)?(d(),w("span",$s,"check")):R("",!0)],10,Ls))),128))]))],64))],36),[[ns,a.value]])]),_:1})]))],2)],2)}}}),Rs=j(`<h1 id="select" tabindex="-1">Select <a class="header-anchor" href="#select" aria-hidden="true">#</a></h1><p>The select can be used for <code>One to Many</code> and <code>Many to Many</code> relationships. We will use the following 2 models in the examples below.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">User</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">BaseUser</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">favoriteWizard</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">null</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">One</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Wizard</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;favoriteOfUsers&#39;</span><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Wizard</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Entity</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">favoriteOfUsers</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Many</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">User</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;favoriteWizard&#39;</span><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="select-one" tabindex="-1">Select One <a class="header-anchor" href="#select-one" aria-hidden="true">#</a></h2>`,4),Qs=j(`<div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">SelectOne</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">options</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">database</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">getAll</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Wizard&#39;</span><span style="color:#D4D4D4;">).</span><span style="color:#DCDCAA;">map</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">wizard</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">id:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">wizard</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">wizard</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> }</span></span>
<span class="line"><span style="color:#D4D4D4;">        })</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onSelect</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">favoriteWizard</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">favoriteWizard</span><span style="color:#D4D4D4;"> === </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">favoriteWizard</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">        } </span><span style="color:#C586C0;">else</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">favoriteWizard</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">database</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">getById</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Wizard&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">favoriteWizard</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">selected</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">favoriteWizard</span><span style="color:#D4D4D4;"> === </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">        } </span><span style="color:#C586C0;">else</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> { </span></span>
<span class="line"><span style="color:#D4D4D4;">                </span><span style="color:#9CDCFE;">id:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">favoriteWizard</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">                </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">favoriteWizard</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">}),</span></span>
<span class="line"></span></code></pre></div><ol><li>The <code>options</code> key expects an array of <code>SelectItem</code> items.</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">SelectItem</span><span style="color:#D4D4D4;"> = { </span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">label</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> }</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li><p>The <code>selected</code> key should return the current selected value as a <code>SelectItem</code> object or <code>null</code> if no value is selected</p></li><li><p>The <code>onSelect</code> is fired when a user selected a value or clears the value in the select (the value will be <code>null</code> if the user deselects or clears the select).</p></li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">onSelect</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">selectedItem</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">null</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">SelectItem</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">void</span></span>
<span class="line"></span></code></pre></div><h2 id="select-many" tabindex="-1">Select Many <a class="header-anchor" href="#select-many" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">SelectMany</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">options</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">database</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">getAll</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;User&#39;</span><span style="color:#D4D4D4;">).</span><span style="color:#DCDCAA;">map</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">user</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">id:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">user</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">user</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">email</span><span style="color:#D4D4D4;"> }</span></span>
<span class="line"><span style="color:#D4D4D4;">        })</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">selected</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">wizard</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">favoriteOfUsers</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">map</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">user</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">id:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">user</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">user</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">email</span><span style="color:#D4D4D4;"> }</span></span>
<span class="line"><span style="color:#D4D4D4;">        })</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onSelect</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">user</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">database</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">getById</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;User&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">wizard</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">favoriteOfUsers</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">add</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">user</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onDeselect</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">user</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">database</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">getById</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;User&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">wizard</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">favoriteOfUsers</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">remove</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">user</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">}),</span></span>
<span class="line"></span></code></pre></div><ol><li>The <code>options</code> key expects an array of <code>SelectItem</code> items.</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">SelectItem</span><span style="color:#D4D4D4;"> = { </span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">label</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> }</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li><p>The <code>selected</code> key should return an array of currently selected <code>SelectItem</code> objects.</p></li><li><p>The <code>onSelect</code> is fired when a user <strong>selected</strong> a value.</p></li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">onSelect</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">selectedItem</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">SelectItem</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">void</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>The <code>onDeselect</code> is fired when a user <strong>de-selected</strong> a value.</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">onDeselect</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">selectedItem</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">SelectItem</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">void</span></span>
<span class="line"></span></code></pre></div>`,13),Gs=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[{"level":2,"title":"Select One","slug":"select-one","link":"#select-one","children":[]},{"level":2,"title":"Select Many","slug":"select-many","link":"#select-many","children":[]}],"relativePath":"ui/select.md"}'),Hs={name:"ui/select.md"},Vs=z({...Hs,setup(s){const e=i([{id:"W-0",label:"Harry Potter"},{id:"W-1",label:"Hermione Granger"},{id:"W-2",label:"Lord Voldemort"},{id:"W-3",label:"Professor Albus Dumbledore"},{id:"W-4",label:"Draco Malfoy"},{id:"W-5",label:"Professor Severus Snape"},{id:"W-6",label:"Rubeus Hagrid"},{id:"W-7",label:"Luna Lovegood"},{id:"W-8",label:"Ron Weasley"},{id:"W-9",label:"Dobby"},{id:"W-10",label:"Professor Minerva McGonagall"},{id:"W-11",label:"Sirius Black"},{id:"W-12",label:"Bellatrix Lestrange"},{id:"W-13",label:"Neville Longbottom"},{id:"W-14",label:"Remus Lupin"},{id:"W-15",label:"Dolores Umbridge"}]);i([{id:"U-0",label:"harry_potter@gmail.com"},{id:"U-1",label:"hermione_granger@outlook.com"},{id:"U-2",label:"lord_voldemort@outlook.com"},{id:"U-3",label:"professor_albus_dumbledore@gmail.com"},{id:"U-4",label:"draco_malfoy@gmail.com"},{id:"U-5",label:"professor_severus_snape@outlook.com"},{id:"U-6",label:"rubeus_hagrid@gmail.com"},{id:"U-7",label:"luna_lovegood@outlook.com"},{id:"U-8",label:"ron_weasley@outlook.com"},{id:"U-9",label:"dobby@outlook.com"},{id:"U-10",label:"professor_minerva_mcgonagall@gmail.com"},{id:"U-11",label:"sirius_black@gmail.com"},{id:"U-12",label:"bellatrix_lestrange@gmail.com"},{id:"U-13",label:"neville_longbottom@outlook.com"},{id:"U-14",label:"remus_lupin@gmail.com"},{id:"U-15",label:"dolores_umbridge@outlook.com"}]),i([]);const a=i([]);function D(t){a.value=a.value.filter(y=>y.id!==t)}function r(t){a.value.push(t)}async function p(t,y){const m=(t-1)*5,f=m+5;return{totalWithoutFilter:e.value.length,items:e.value.filter(g=>g.label.toLowerCase().includes(y.toLowerCase())).slice(m,f)}}return(t,y)=>(d(),w("div",null,[Rs,W(Ms,{request:p,selected:a.value,onDeselect:D,onSelect:r},null,8,["selected"]),Qs]))}});export{Gs as __pageData,Vs as default};
