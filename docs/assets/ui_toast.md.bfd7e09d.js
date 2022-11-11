import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app.4c7a0c6b.js";
const __pageData = JSON.parse('{"title":"Toast","description":"","frontmatter":{},"headers":[{"level":2,"title":"Success toast","slug":"success-toast","link":"#success-toast","children":[]},{"level":2,"title":"Error toast","slug":"error-toast","link":"#error-toast","children":[]}],"relativePath":"ui/toast.md"}');
const _sfc_main = { name: "ui/toast.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="toast" tabindex="-1">Toast <a class="header-anchor" href="#toast" aria-hidden="true">#</a></h1><h2 id="success-toast" tabindex="-1">Success toast <a class="header-anchor" href="#success-toast" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Click me!&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onClick</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line highlighted"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">client</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">toast</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;success&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;You clicked the button&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">    }</span></span>\n<span class="line"><span style="color:#D4D4D4;">})</span></span>\n<span class="line"></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#D4D4D4;">TODO: SCREENSHOT</span></span>\n<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div><h2 id="error-toast" tabindex="-1">Error toast <a class="header-anchor" href="#error-toast" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Click me!&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onClick</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line highlighted"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">client</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">toast</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;error&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;You clicked the button&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">    }</span></span>\n<span class="line"><span style="color:#D4D4D4;">})</span></span>\n<span class="line"></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#D4D4D4;">TODO: SCREENSHOT</span></span>\n<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>', 7);
const _hoisted_8 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_8);
}
const toast = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  toast as default
};
