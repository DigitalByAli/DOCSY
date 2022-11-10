import{u as b,e as f,r as _,o as h,c as g,b as y,n as u,t as w,h as D,a as i}from"./app.976319d0.js";var d;const m=typeof window<"u";m&&((d=window==null?void 0:window.navigator)==null?void 0:d.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function C(s){return typeof s=="function"?s():b(s)}function F(s,e){function a(...n){s(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})}return a}function E(s,e={}){let a,n;return o=>{const t=C(s),l=C(e.maxWait);if(a&&clearTimeout(a),t<=0||l!==void 0&&l<=0)return n&&(clearTimeout(n),n=null),o();l&&!n&&(n=setTimeout(()=>{a&&clearTimeout(a),n=null,o()},l)),a=setTimeout(()=>{n&&clearTimeout(n),n=null,o()},t)}}function v(s,e=200,a={}){return F(E(e,a),s)}const A=["value","type","disabled"],T={class:"tw-text-red-500 tw-italic tw-text-sm"},c=f({__name:"BaseInput",props:{errorMessage:{default:null},type:{default:"text"},disabled:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},debounceUpdate:{type:Function,default:()=>null}},setup(s,{expose:e}){const a=s,n=_("");e({inputValue:n});function p(t){n.value=t,o(t)}const o=v(a.debounceUpdate,250);return(t,l)=>(h(),g("div",{class:u(["tw-flex tw-flex-col tw-w-full",{"tw-cursor-not-allowed tw-grayscale":s.disabled,"tw-opacity-[0.35]":s.disabled&&s.errorMessage,"tw-opacity-50":s.disabled&&!s.errorMessage}])},[y("input",{value:n.value,onKeypress:l[0]||(l[0]=r=>p(r.target.value)),onInput:l[1]||(l[1]=r=>p(r.target.value)),type:s.type,class:u(["tw-rounded-md tw-border-gray-300 tw-shadow-sm tw-text-gray-900 tw-text-sm tw-block tw-w-full tw-px-2.5 tw-py-2 focus:tw-outline-none focus:tw-border-gray-500 focus:tw-ring-gray-500 focus:tw-ring-1",{"tw-border-red-500 tw-bg-red-50 focus:tw-border-red-500 focus:tw-ring-red-500":s.errorMessage!==null,"tw-pointer-events-none":s.disabled}]),disabled:s.disabled,style:{"border-style":"inherit"}},null,42,A),y("span",T,w(s.errorMessage),1)],2))}}),x=i(`<h1 id="inputs" tabindex="-1">Inputs <a class="header-anchor" href="#inputs" aria-hidden="true">#</a></h1><h2 id="text-input" tabindex="-1">Text Input <a class="header-anchor" href="#text-input" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Input</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">setter</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">getter</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span></code></pre></div>`,3),I=i(`<h2 id="number-input" tabindex="-1">Number Input <a class="header-anchor" href="#number-input" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Input</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">setter</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">age</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">getter</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">age</span><span style="color:#D4D4D4;">,</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">type:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;number&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span></code></pre></div>`,2),U=i(`<h2 id="disabled-input" tabindex="-1">Disabled Input <a class="header-anchor" href="#disabled-input" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Input</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">setter</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">getter</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">,</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">disabled:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span></code></pre></div>`,2),N=JSON.parse('{"title":"Inputs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Text Input","slug":"text-input","link":"#text-input","children":[]},{"level":2,"title":"Number Input","slug":"number-input","link":"#number-input","children":[]},{"level":2,"title":"Disabled Input","slug":"disabled-input","link":"#disabled-input","children":[]}],"relativePath":"ui/input.md"}'),S={name:"ui/input.md"},P=Object.assign(S,{setup(s){return(e,a)=>(h(),g("div",null,[x,D(c),I,D(c,{type:"number"}),U,D(c,{disabled:""})]))}});export{N as __pageData,P as default};
