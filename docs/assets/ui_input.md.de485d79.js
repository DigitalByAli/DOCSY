import { u as useDebounceFn } from "./chunks/index.8cb2feb3.js";
import { e as defineComponent, r as ref, o as openBlock, c as createElementBlock, b as createBaseVNode, n as normalizeClass, t as toDisplayString, h as createVNode, a as createStaticVNode } from "./app.4c7a0c6b.js";
const _hoisted_1$1 = ["value", "type", "disabled"];
const _hoisted_2 = { class: "tw-text-red-500 tw-italic tw-text-sm" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseInput",
  props: {
    errorMessage: { default: null },
    type: { default: "text" },
    disabled: { type: Boolean, default: false },
    inline: { type: Boolean, default: false },
    debounceUpdate: { type: Function, default: () => null }
  },
  setup(__props, { expose }) {
    const props = __props;
    const inputValue = ref("");
    expose({ inputValue });
    function setInputValue(newValue) {
      inputValue.value = newValue;
      debouncedUpdate(newValue);
    }
    const debouncedUpdate = useDebounceFn(props.debounceUpdate, 250);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["tw-flex tw-flex-col tw-w-full", {
          "tw-cursor-not-allowed tw-grayscale": __props.disabled,
          "tw-opacity-[0.35]": __props.disabled && __props.errorMessage,
          "tw-opacity-50": __props.disabled && !__props.errorMessage
        }])
      }, [
        createBaseVNode("input", {
          value: inputValue.value,
          onKeypress: _cache[0] || (_cache[0] = ($event) => setInputValue($event.target.value)),
          onInput: _cache[1] || (_cache[1] = ($event) => setInputValue($event.target.value)),
          type: __props.type,
          class: normalizeClass(["tw-rounded-md tw-border-gray-300 tw-shadow-sm tw-text-gray-900 tw-text-sm tw-block tw-w-full tw-px-2.5 tw-py-2 focus:tw-outline-none focus:tw-border-gray-500 focus:tw-ring-gray-500 focus:tw-ring-1", {
            "tw-border-red-500 tw-bg-red-50 focus:tw-border-red-500 focus:tw-ring-red-500": __props.errorMessage !== null,
            "tw-pointer-events-none": __props.disabled
          }]),
          disabled: __props.disabled,
          style: { "border-style": "inherit" }
        }, null, 42, _hoisted_1$1),
        createBaseVNode("span", _hoisted_2, toDisplayString(__props.errorMessage), 1)
      ], 2);
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="inputs" tabindex="-1">Inputs <a class="header-anchor" href="#inputs" aria-hidden="true">#</a></h1><h2 id="text-input" tabindex="-1">Text Input <a class="header-anchor" href="#text-input" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Input</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">setter</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">getter</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">});</span></span>\n<span class="line"></span></code></pre></div>', 3);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="number-input" tabindex="-1">Number Input <a class="header-anchor" href="#number-input" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Input</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">setter</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">age</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">getter</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">age</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line highlighted"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">type:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;number&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">});</span></span>\n<span class="line"></span></code></pre></div>', 2);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<h2 id="disabled-input" tabindex="-1">Disabled Input <a class="header-anchor" href="#disabled-input" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Input</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">setter</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">getter</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authUser</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line highlighted"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">disabled:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">});</span></span>\n<span class="line"></span></code></pre></div>', 2);
const __pageData = JSON.parse('{"title":"Inputs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Text Input","slug":"text-input","link":"#text-input","children":[]},{"level":2,"title":"Number Input","slug":"number-input","link":"#number-input","children":[]},{"level":2,"title":"Disabled Input","slug":"disabled-input","link":"#disabled-input","children":[]}],"relativePath":"ui/input.md"}');
const __default__ = { name: "ui/input.md" };
const _sfc_main = Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        createVNode(_sfc_main$1),
        _hoisted_4,
        createVNode(_sfc_main$1, { type: "number" }),
        _hoisted_6,
        createVNode(_sfc_main$1, { disabled: "" })
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
