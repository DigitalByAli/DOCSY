import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app.4c7a0c6b.js";
const __pageData = JSON.parse('{"title":"Models","description":"","frontmatter":{},"headers":[],"relativePath":"introduction/models.md"}');
const _sfc_main = { name: "introduction/models.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="models" tabindex="-1">Models <a class="header-anchor" href="#models" aria-hidden="true">#</a></h1><p>Create a new file <code>/models/Brand.ts</code> and add the following</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Entity</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">Many</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;oksy&#39;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Car</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./Car&#39;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Brand</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Entity</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">cars</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Many</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Car</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;brand&#39;</span><span style="color:#D4D4D4;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre></div><p>And create the <code>/models/Car.ts</code> file with the following contents:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Entity</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">One</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;oksy&#39;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Brand</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./Brand&#39;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Car</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Entity</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">brand</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">One</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Brand</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;cars&#39;</span><span style="color:#D4D4D4;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">model</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre></div><p>You need to restart the server after modifying the <code>/models</code> folder. After restarting the server you should have 2 new tables (<code>brand</code> and <code>car</code>) added to your database (<code>/storage/database.sqlite</code>).</p>', 6);
const _hoisted_7 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_7);
}
const models = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  models as default
};
