import{e as u,r as g,f as h,o as y,c as d,b as D,n as p,u as a,h as c,a as C}from"./app.b1d9eda6.js";const i=u({__name:"BaseToggle",props:{disabled:{type:Boolean,default:!1},onToggle:{type:Function,default:async()=>!0},initState:{type:Boolean,default:!1}},setup(n,{expose:r}){const t=n,l=g(t.initState),s=h({get:()=>l.value,set:async e=>{l.value=e,await t.onToggle(e)===!1&&(l.value=!e)}});return r({state:l}),(e,o)=>(y(),d("div",{class:p(["tw-flex",{"tw-cursor-not-allowed tw-opacity-50":n.disabled}])},[D("button",{onClick:o[0]||(o[0]=b=>s.value=!a(s)),type:"button",class:p([{"tw-bg-blue-600":a(s),"tw-bg-gray-200":!a(s),"tw-pointer-events-none":n.disabled},"tw-relative tw-inline-flex tw-h-6 tw-w-11 tw-flex-shrink-0 tw-cursor-pointer tw-rounded-full tw-border-2 tw-border-transparent tw-transition-colors tw-duration-200 tw-ease-in-out focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-ring-offset-2"]),role:"switch","aria-checked":"false"},[D("span",{"aria-hidden":"true",class:p([{"tw-translate-x-5":a(s),"tw-translate-x-0":!a(s)},"tw-pointer-events-none tw-inline-block tw-h-5 tw-w-5 tw-transform tw-rounded-full tw-bg-white tw-shadow tw-ring-0 tw-transition tw-duration-200 tw-ease-in-out"])},null,2)],2)],2))}}),w=C(`<h1 id="toggle" tabindex="-1">Toggle <a class="header-anchor" href="#toggle" aria-hidden="true">#</a></h1><h2 id="default" tabindex="-1">Default <a class="header-anchor" href="#default" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Toggle</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">state</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isCool</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onToggle</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">newState</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isCool</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">newState</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span></code></pre></div>`,3),_=C(`<h2 id="disabled" tabindex="-1">Disabled <a class="header-anchor" href="#disabled" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Toggle</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">state</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isCool</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onToggle</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">newState</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isCool</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">newState</span><span style="color:#D4D4D4;">,</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">disabled:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span></code></pre></div>`,2),T=JSON.parse('{"title":"Toggle","description":"","frontmatter":{},"headers":[{"level":2,"title":"Default","slug":"default","link":"#default","children":[]},{"level":2,"title":"Disabled","slug":"disabled","link":"#disabled","children":[]}],"relativePath":"ui/toggle.md"}'),f={name:"ui/toggle.md"},E=Object.assign(f,{setup(n){return(r,t)=>(y(),d("div",null,[w,c(i),_,c(i,{disabled:""})]))}});export{T as __pageData,E as default};
