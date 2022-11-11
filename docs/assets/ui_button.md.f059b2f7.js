import{e as b,f as p,o,c as t,b as c,t as d,g as D,n as C,u as g,_ as A,h as n,a as e}from"./app.af1d8c24.js";const T=["textContent"],E=["textContent"],F={key:2,class:"loader"},f=b({__name:"BaseButton",props:{disabled:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1},icon:{default:null},label:{default:null},loading:{type:Boolean,default:!1},size:{default:"md"},type:{default:"primary"}},emits:["clicked"],setup(l){const s=l,r=p(()=>s.ghost===!0&&s.type==="secondary"?"primary":s.type),i=p(()=>s.size===void 0?"md":s.size),u=p(()=>s.icon&&s.label||s.loading?"text-and-icon":s.icon?"only-icon":"only-text"),_=p(()=>`${r.value} ${i.value} ${u.value} ${s.ghost?"ghost":"normal"} ${s.loading?"loading":""} ${s.disabled?"disabled":""}`);return(h,y)=>(o(),t("div",{class:C(["tw-shrink-0",{"tw-cursor-not-allowed":l.disabled,"tw-cursor-wait":l.loading}])},[c("button",{onClick:y[0]||(y[0]=U=>h.$emit("clicked")),class:C(`${g(_)} tw-w-full`),style:{"border-style":"inherit"}},[l.label!==null?(o(),t("span",{key:0,textContent:d(l.label)},null,8,T)):D("",!0),l.icon!==null&&l.loading===!1?(o(),t("span",{key:1,class:"material-symbols-rounded",textContent:d(l.icon)},null,8,E)):D("",!0),l.loading?(o(),t("span",F)):D("",!0)],2)],2))}});const a=A(f,[["__scopeId","data-v-0548b933"]]),k=e(`<h1 id="buttons" tabindex="-1">Buttons <a class="header-anchor" href="#buttons" aria-hidden="true">#</a></h1><h2 id="primary-button" tabindex="-1">Primary Button <a class="header-anchor" href="#primary-button" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Primary&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onClick</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span></code></pre></div>`,3),m=e(`<h2 id="secondary-button" tabindex="-1">Secondary Button <a class="header-anchor" href="#secondary-button" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Secondary&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">type:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;secondary&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onClick</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span></code></pre></div>`,2),v=e(`<h2 id="tertiary-button" tabindex="-1">Tertiary Button <a class="header-anchor" href="#tertiary-button" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Tertiary&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">type:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;tertiary&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onClick</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span></code></pre></div>`,2),x=e(`<h2 id="danger-button" tabindex="-1">Danger Button <a class="header-anchor" href="#danger-button" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Danger&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">type:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;danger&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onClick</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span></code></pre></div>`,2),B=e(`<h2 id="button-with-icon" tabindex="-1">Button with Icon <a class="header-anchor" href="#button-with-icon" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Danger&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">type:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;danger&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">icon:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;delete&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">onClick</span><span style="color:#D4D4D4;">: () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span></code></pre></div>`,2),S=e(`<h2 id="icon-only-button" tabindex="-1">Icon only Button <a class="header-anchor" href="#icon-only-button" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">type:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;danger&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">icon:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;delete&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">onClick</span><span style="color:#D4D4D4;">: () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span></code></pre></div>`,2),I=e(`<h2 id="ghosts-buttons" tabindex="-1">Ghosts Buttons <a class="header-anchor" href="#ghosts-buttons" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Danger&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">type:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;danger&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">icon:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;delete&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">ghost</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onClick</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span></code></pre></div>`,2),w={class:"tw-flex tw-space-x-3"},P=e(`<h2 id="small" tabindex="-1">Small <a class="header-anchor" href="#small" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Primary&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">size:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;sm&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onClick</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span></code></pre></div>`,2),V={class:"tw-flex tw-space-x-3"},N=e(`<h2 id="disabled" tabindex="-1">Disabled <a class="header-anchor" href="#disabled" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Primary&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">disabled:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onClick</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span></code></pre></div>`,2),$={class:"tw-flex tw-space-x-3"},G=JSON.parse('{"title":"Buttons","description":"","frontmatter":{},"headers":[{"level":2,"title":"Primary Button","slug":"primary-button","link":"#primary-button","children":[]},{"level":2,"title":"Secondary Button","slug":"secondary-button","link":"#secondary-button","children":[]},{"level":2,"title":"Tertiary Button","slug":"tertiary-button","link":"#tertiary-button","children":[]},{"level":2,"title":"Danger Button","slug":"danger-button","link":"#danger-button","children":[]},{"level":2,"title":"Button with Icon","slug":"button-with-icon","link":"#button-with-icon","children":[]},{"level":2,"title":"Icon only Button","slug":"icon-only-button","link":"#icon-only-button","children":[]},{"level":2,"title":"Ghosts Buttons","slug":"ghosts-buttons","link":"#ghosts-buttons","children":[]},{"level":2,"title":"Small","slug":"small","link":"#small","children":[]},{"level":2,"title":"Disabled","slug":"disabled","link":"#disabled","children":[]}],"relativePath":"ui/button.md"}'),R={name:"ui/button.md"},O=Object.assign(R,{setup(l){function s(){alert("You clicked a button!")}return(r,i)=>(o(),t("div",null,[k,n(a,{onClicked:s,class:"tw-inline-flex",label:"Primary"}),m,n(a,{onClicked:s,class:"tw-inline-flex",type:"secondary",label:"Secondary"}),v,n(a,{onClicked:s,class:"tw-inline-flex",type:"tertiary",label:"Tertiary"}),x,n(a,{onClicked:s,class:"tw-inline-flex",type:"danger",label:"Danger"}),B,n(a,{onClicked:s,class:"tw-inline-flex",type:"danger",label:"Danger",icon:"delete"}),S,n(a,{onClicked:s,class:"tw-inline-flex",type:"danger",icon:"delete"}),I,c("div",w,[n(a,{onClicked:s,class:"tw-inline-flex",label:"Add",icon:"add",ghost:""}),n(a,{onClicked:s,class:"tw-inline-flex",type:"danger",label:"Delete",icon:"delete",ghost:""})]),P,c("div",V,[n(a,{onClicked:s,size:"sm",class:"tw-inline-flex",label:"Add"}),n(a,{onClicked:s,size:"sm",class:"tw-inline-flex",type:"danger",label:"Delete"})]),N,c("div",$,[n(a,{onClicked:s,class:"tw-inline-flex",label:"Add",disabled:""}),n(a,{onClicked:s,class:"tw-inline-flex",type:"danger",label:"Delete",disabled:""})])]))}});export{G as __pageData,O as default};
