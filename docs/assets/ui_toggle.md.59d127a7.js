import { e as defineComponent, r as ref, f as computed, o as openBlock, c as createElementBlock, b as createBaseVNode, n as normalizeClass, u as unref, h as createVNode, a as createStaticVNode } from "./app.4c7a0c6b.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseToggle",
  props: {
    disabled: { type: Boolean, default: false },
    onToggle: { type: Function, default: async () => true },
    initState: { type: Boolean, default: false }
  },
  setup(__props, { expose }) {
    const props = __props;
    const state = ref(props.initState);
    const enabled = computed({
      get: () => state.value,
      set: async (newState) => {
        state.value = newState;
        const resp = await props.onToggle(newState);
        if (resp === false) {
          state.value = !newState;
        }
      }
    });
    expose({ state });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["tw-flex", { "tw-cursor-not-allowed tw-opacity-50": __props.disabled }])
      }, [
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = ($event) => enabled.value = !unref(enabled)),
          type: "button",
          class: normalizeClass([{
            "tw-bg-blue-600": unref(enabled),
            "tw-bg-gray-200": !unref(enabled),
            "tw-pointer-events-none": __props.disabled
          }, "tw-relative tw-inline-flex tw-h-6 tw-w-11 tw-flex-shrink-0 tw-cursor-pointer tw-rounded-full tw-border-2 tw-border-transparent tw-transition-colors tw-duration-200 tw-ease-in-out focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-ring-offset-2"]),
          role: "switch",
          "aria-checked": "false",
          style: { "border-style": "inherit" }
        }, [
          createBaseVNode("span", {
            "aria-hidden": "true",
            class: normalizeClass([{
              "tw-translate-x-5": unref(enabled),
              "tw-translate-x-0": !unref(enabled)
            }, "tw-pointer-events-none tw-inline-block tw-h-5 tw-w-5 tw-transform tw-rounded-full tw-bg-white tw-shadow tw-ring-0 tw-transition tw-duration-200 tw-ease-in-out"])
          }, null, 2)
        ], 2)
      ], 2);
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="toggle" tabindex="-1">Toggle <a class="header-anchor" href="#toggle" aria-hidden="true">#</a></h1><h2 id="default" tabindex="-1">Default <a class="header-anchor" href="#default" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Toggle</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">state</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isCool</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onToggle</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">newState</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isCool</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">newState</span></span>\n<span class="line"><span style="color:#D4D4D4;">});</span></span>\n<span class="line"></span></code></pre></div>', 3);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="disabled" tabindex="-1">Disabled <a class="header-anchor" href="#disabled" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Toggle</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">state</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isCool</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onToggle</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">newState</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isCool</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">newState</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line highlighted"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">disabled:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">});</span></span>\n<span class="line"></span></code></pre></div>', 2);
const __pageData = JSON.parse('{"title":"Toggle","description":"","frontmatter":{},"headers":[{"level":2,"title":"Default","slug":"default","link":"#default","children":[]},{"level":2,"title":"Disabled","slug":"disabled","link":"#disabled","children":[]}],"relativePath":"ui/toggle.md"}');
const __default__ = { name: "ui/toggle.md" };
const _sfc_main = Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        createVNode(_sfc_main$1),
        _hoisted_4,
        createVNode(_sfc_main$1, { disabled: "" })
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
