import { e as defineComponent, f as computed, o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, g as createCommentVNode, n as normalizeClass, u as unref, _ as _export_sfc, h as createVNode, a as createStaticVNode } from "./app.4c7a0c6b.js";
const _hoisted_1$1 = ["textContent"];
const _hoisted_2 = ["textContent"];
const _hoisted_3 = {
  key: 2,
  class: "loader"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseButton",
  props: {
    disabled: { type: Boolean, default: false },
    ghost: { type: Boolean, default: false },
    icon: { default: null },
    label: { default: null },
    loading: { type: Boolean, default: false },
    size: { default: "md" },
    type: { default: "primary" }
  },
  emits: ["clicked"],
  setup(__props) {
    const props = __props;
    const type = computed(() => {
      if (props.ghost === true) {
        if (props.type === "secondary") {
          return "primary";
        }
      }
      return props.type;
    });
    const size = computed(() => props.size === void 0 ? "md" : props.size);
    const content = computed(() => {
      if (props.icon && props.label)
        return "text-and-icon";
      if (props.loading)
        return "text-and-icon";
      if (props.icon)
        return "only-icon";
      return "only-text";
    });
    const classes = computed(() => `${type.value} ${size.value} ${content.value} ${props.ghost ? "ghost" : "normal"} ${props.loading ? "loading" : ""} ${props.disabled ? "disabled" : ""}`);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["tw-shrink-0", { "tw-cursor-not-allowed": __props.disabled, "tw-cursor-wait": __props.loading }])
      }, [
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("clicked")),
          class: normalizeClass(`${unref(classes)} tw-w-full`),
          style: { "border-style": "inherit" }
        }, [
          __props.label !== null ? (openBlock(), createElementBlock("span", {
            key: 0,
            textContent: toDisplayString(__props.label)
          }, null, 8, _hoisted_1$1)) : createCommentVNode("", true),
          __props.icon !== null && __props.loading === false ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: "material-symbols-rounded",
            textContent: toDisplayString(__props.icon)
          }, null, 8, _hoisted_2)) : createCommentVNode("", true),
          __props.loading ? (openBlock(), createElementBlock("span", _hoisted_3)) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
});
const BaseButton_vue_vue_type_style_index_0_scoped_0548b933_lang = "";
const BaseButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0548b933"]]);
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="buttons" tabindex="-1">Buttons <a class="header-anchor" href="#buttons" aria-hidden="true">#</a></h1><h2 id="primary-button" tabindex="-1">Primary Button <a class="header-anchor" href="#primary-button" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Primary&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onClick</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>\n<span class="line"><span style="color:#D4D4D4;">});</span></span>\n<span class="line"></span></code></pre></div>', 3);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="secondary-button" tabindex="-1">Secondary Button <a class="header-anchor" href="#secondary-button" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Secondary&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">type:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;secondary&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onClick</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>\n<span class="line"><span style="color:#D4D4D4;">});</span></span>\n<span class="line"></span></code></pre></div>', 2);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<h2 id="tertiary-button" tabindex="-1">Tertiary Button <a class="header-anchor" href="#tertiary-button" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Tertiary&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">type:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;tertiary&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onClick</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>\n<span class="line"><span style="color:#D4D4D4;">});</span></span>\n<span class="line"></span></code></pre></div>', 2);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<h2 id="danger-button" tabindex="-1">Danger Button <a class="header-anchor" href="#danger-button" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Danger&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">type:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;danger&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onClick</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>\n<span class="line"><span style="color:#D4D4D4;">});</span></span>\n<span class="line"></span></code></pre></div>', 2);
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<h2 id="button-with-icon" tabindex="-1">Button with Icon <a class="header-anchor" href="#button-with-icon" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Danger&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">type:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;danger&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">icon:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;delete&#39;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">onClick</span><span style="color:#D4D4D4;">: () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>\n<span class="line"><span style="color:#D4D4D4;">});</span></span>\n<span class="line"></span></code></pre></div>', 2);
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<h2 id="icon-only-button" tabindex="-1">Icon only Button <a class="header-anchor" href="#icon-only-button" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">type:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;danger&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">icon:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;delete&#39;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">onClick</span><span style="color:#D4D4D4;">: () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>\n<span class="line"><span style="color:#D4D4D4;">});</span></span>\n<span class="line"></span></code></pre></div>', 2);
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<h2 id="ghosts-buttons" tabindex="-1">Ghosts Buttons <a class="header-anchor" href="#ghosts-buttons" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Danger&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">type:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;danger&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">icon:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;delete&#39;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">ghost</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onClick</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>\n<span class="line"><span style="color:#D4D4D4;">});</span></span>\n<span class="line"></span></code></pre></div>', 2);
const _hoisted_16 = { class: "tw-flex tw-space-x-3" };
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<h2 id="small" tabindex="-1">Small <a class="header-anchor" href="#small" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Primary&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">size:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;sm&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onClick</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>\n<span class="line"><span style="color:#D4D4D4;">});</span></span>\n<span class="line"></span></code></pre></div>', 2);
const _hoisted_19 = { class: "tw-flex tw-space-x-3" };
const _hoisted_20 = /* @__PURE__ */ createStaticVNode('<h2 id="disabled" tabindex="-1">Disabled <a class="header-anchor" href="#disabled" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">UI</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Button</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Primary&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">disabled:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onClick</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> { ... }</span></span>\n<span class="line"><span style="color:#D4D4D4;">});</span></span>\n<span class="line"></span></code></pre></div>', 2);
const _hoisted_22 = { class: "tw-flex tw-space-x-3" };
const __pageData = JSON.parse('{"title":"Buttons","description":"","frontmatter":{},"headers":[{"level":2,"title":"Primary Button","slug":"primary-button","link":"#primary-button","children":[]},{"level":2,"title":"Secondary Button","slug":"secondary-button","link":"#secondary-button","children":[]},{"level":2,"title":"Tertiary Button","slug":"tertiary-button","link":"#tertiary-button","children":[]},{"level":2,"title":"Danger Button","slug":"danger-button","link":"#danger-button","children":[]},{"level":2,"title":"Button with Icon","slug":"button-with-icon","link":"#button-with-icon","children":[]},{"level":2,"title":"Icon only Button","slug":"icon-only-button","link":"#icon-only-button","children":[]},{"level":2,"title":"Ghosts Buttons","slug":"ghosts-buttons","link":"#ghosts-buttons","children":[]},{"level":2,"title":"Small","slug":"small","link":"#small","children":[]},{"level":2,"title":"Disabled","slug":"disabled","link":"#disabled","children":[]}],"relativePath":"ui/button.md"}');
const __default__ = { name: "ui/button.md" };
const _sfc_main = Object.assign(__default__, {
  setup(__props) {
    function clicky() {
      alert("You clicked a button!");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        createVNode(BaseButton, {
          onClicked: clicky,
          class: "tw-inline-flex",
          label: "Primary"
        }),
        _hoisted_4,
        createVNode(BaseButton, {
          onClicked: clicky,
          class: "tw-inline-flex",
          type: "secondary",
          label: "Secondary"
        }),
        _hoisted_6,
        createVNode(BaseButton, {
          onClicked: clicky,
          class: "tw-inline-flex",
          type: "tertiary",
          label: "Tertiary"
        }),
        _hoisted_8,
        createVNode(BaseButton, {
          onClicked: clicky,
          class: "tw-inline-flex",
          type: "danger",
          label: "Danger"
        }),
        _hoisted_10,
        createVNode(BaseButton, {
          onClicked: clicky,
          class: "tw-inline-flex",
          type: "danger",
          label: "Danger",
          icon: "delete"
        }),
        _hoisted_12,
        createVNode(BaseButton, {
          onClicked: clicky,
          class: "tw-inline-flex",
          type: "danger",
          icon: "delete"
        }),
        _hoisted_14,
        createBaseVNode("div", _hoisted_16, [
          createVNode(BaseButton, {
            onClicked: clicky,
            class: "tw-inline-flex",
            label: "Add",
            icon: "add",
            ghost: ""
          }),
          createVNode(BaseButton, {
            onClicked: clicky,
            class: "tw-inline-flex",
            type: "danger",
            label: "Delete",
            icon: "delete",
            ghost: ""
          })
        ]),
        _hoisted_17,
        createBaseVNode("div", _hoisted_19, [
          createVNode(BaseButton, {
            onClicked: clicky,
            size: "sm",
            class: "tw-inline-flex",
            label: "Add"
          }),
          createVNode(BaseButton, {
            onClicked: clicky,
            size: "sm",
            class: "tw-inline-flex",
            type: "danger",
            label: "Delete"
          })
        ]),
        _hoisted_20,
        createBaseVNode("div", _hoisted_22, [
          createVNode(BaseButton, {
            onClicked: clicky,
            class: "tw-inline-flex",
            label: "Add",
            disabled: ""
          }),
          createVNode(BaseButton, {
            onClicked: clicky,
            class: "tw-inline-flex",
            type: "danger",
            label: "Delete",
            disabled: ""
          })
        ])
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
