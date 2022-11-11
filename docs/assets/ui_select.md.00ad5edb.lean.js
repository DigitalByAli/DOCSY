import { w as watch, r as ref, e as defineComponent, o as openBlock, c as createElementBlock, k as onMounted, b as createBaseVNode, l as withModifiers, t as toDisplayString, F as Fragment, m as renderList, g as createCommentVNode, n as normalizeClass, p as createBlock, h as createVNode, q as withCtx, T as Transition, s as Teleport, d as createTextVNode, v as withDirectives, x as vShow, y as normalizeStyle, u as unref, z as nextTick, a as createStaticVNode } from "./app.4c7a0c6b.js";
import { i as isClient, a as isString, n as noop, r as resolveUnref, b as identity, t as tryOnScopeDispose, u as useDebounceFn } from "./chunks/index.8cb2feb3.js";
let isLoading = false;
function UseScrollToEnd(onReachEnd) {
  async function scroll(event) {
    const scrollTop = event.target.scrollTop;
    const clientHeight = event.target.clientHeight;
    const scrollHeight = event.target.scrollHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      if (isLoading) {
        return;
      }
      isLoading = true;
      await onReachEnd();
      isLoading = false;
    }
  }
  return {
    scroll
  };
}
function unrefElement(elRef) {
  var _a;
  const plain = resolveUnref(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (isString(args[0]) || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events.flatMap((event) => {
      return listeners.map((listener) => register(el, event, listener));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore, capture = true, detectIframe = false } = options;
  if (!window2)
    return;
  const shouldListen = ref(true);
  let fallback;
  const listener = (event) => {
    window2.clearTimeout(fallback);
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el) || !shouldListen.value)
      return;
    handler(event);
  };
  const shouldIgnore = (event) => {
    return ignore && ignore.some((target2) => {
      const el = unrefElement(target2);
      return el && (event.target === el || event.composedPath().includes(el));
    });
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen.value = !!el && !e.composedPath().includes(el) && !shouldIgnore(e);
    }, { passive: true }),
    useEventListener(window2, "pointerup", (e) => {
      if (e.button === 0) {
        const path = e.composedPath();
        e.composedPath = () => path;
        fallback = window2.setTimeout(() => listener(e), 50);
      }
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      var _a;
      const el = unrefElement(target);
      if (((_a = window2.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
        handler(event);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
const _hoisted_1$2 = ["value"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchField",
  props: {
    onFilter: null
  },
  setup(__props) {
    const props = __props;
    const liveQuery = ref("");
    const requestQuery = ref("");
    function setQueryValue(newValue) {
      liveQuery.value = newValue;
      debouncedFilter(newValue);
    }
    const debouncedFilter = useDebounceFn(async (query) => {
      await props.onFilter(query);
      requestQuery.value = query;
    }, 250);
    watch(liveQuery, debouncedFilter);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("input", {
        name: "search",
        type: "text",
        class: "tw-flex-1 tw-rounded-md tw-border-0 tw-bg-gray-100 tw-px-4 tw-py-2.5 tw-my-2 tw-mx-2 tw-text-gray-900 tw-placeholder-gray-500 focus:tw-ring-0 focus-visible:tw-ring-0 sm:tw-text-sm",
        placeholder: "Search",
        value: liveQuery.value,
        onInput: _cache[0] || (_cache[0] = ($event) => setQueryValue($event.target.value)),
        onKeypress: _cache[1] || (_cache[1] = ($event) => setQueryValue($event.target.value)),
        "aria-autocomplete": "none",
        "aria-controls": "options",
        "aria-expanded": "false",
        autocapitalize: "none",
        autocomplete: "off",
        autocorrect: "off",
        role: "combobox"
      }, null, 40, _hoisted_1$2);
    };
  }
});
function highlight(text, highlight2) {
  if (highlight2 !== null && highlight2 !== void 0 && typeof highlight2 === "string" && highlight2.trim() !== "" && text !== void 0) {
    highlight2.split(" ").forEach((word) => {
      if (word.length === 0)
        return;
      const regex = new RegExp(word, "gi");
      text = text.replaceAll(regex, "<mark>$&</mark>");
    });
    return text;
  }
  return text;
}
const _hoisted_1$1 = {
  key: 0,
  class: "tw-block tw-truncate tw-flex-1 tw-text-gray-800"
};
const _hoisted_2 = {
  key: 1,
  class: "tw-flex tw-flex-wrap tw-gap-2 tw-flex-1"
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", {
  class: "material-symbols-rounded tw-text-xs",
  "remove-btn": ""
}, "close", -1);
const _hoisted_5$1 = [
  _hoisted_4
];
const _hoisted_6 = { class: "tw-flex tw-space-x-1 tw-ml-2 tw-flex-shrink-0" };
const _hoisted_7 = {
  key: 0,
  class: "tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", { class: "material-symbols-rounded tw-text-3xl tw-text-gray-500 mb-4" }, "sentiment_dissatisfied", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "tw-text-base tw-text-gray-700" }, "No data to display", -1);
const _hoisted_10 = [
  _hoisted_8,
  _hoisted_9
];
const _hoisted_11$1 = {
  key: 0,
  class: "tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4"
};
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "material-symbols-rounded tw-text-3xl tw-text-gray-500 mb-4" }, "mood_bad", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("span", { class: "tw-text-base tw-text-gray-700" }, "No matches found", -1);
const _hoisted_14 = [
  _hoisted_12,
  _hoisted_13
];
const _hoisted_15 = {
  key: 1,
  class: "tw-py-1 tw-flex tw-items-stretch tw-flex-col"
};
const _hoisted_16 = ["onClick"];
const _hoisted_17 = ["innerHTML"];
const _hoisted_18 = {
  key: 0,
  class: "material-symbols-rounded tw-shrink-0 tw-text-sm"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseSelect",
  props: {
    request: null,
    selected: { default: () => [] },
    disabled: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false }
  },
  emits: ["deselect", "select"],
  setup(__props, { emit }) {
    const props = __props;
    const open = ref(false);
    const totalWithoutFilter = ref(0);
    const items = ref([]);
    const pageNumber = ref(1);
    const highlightStr = ref("");
    const $select = ref();
    const $menu = ref();
    const top = ref(0);
    const left = ref(0);
    const width = ref(0);
    onMounted(async () => {
      debounceSetPosition();
      const resp = await props.request(pageNumber.value, "");
      items.value = resp.items;
      totalWithoutFilter.value = resp.totalWithoutFilter;
    });
    watch(open, (value) => {
      nextTick(() => {
        if (value) {
          const $input = $menu.value.querySelector('input[name="search"]');
          $input == null ? void 0 : $input.focus();
        }
      });
    });
    onClickOutside($menu, (event) => {
      if (open.value === true) {
        const isRemoveButton = event.target.hasAttribute("remove-btn");
        if (isRemoveButton === false) {
          event.stopPropagation();
        }
        open.value = false;
      }
    });
    const debounceSetPosition = useDebounceFn(() => {
      const bounds = $select.value.getBoundingClientRect();
      top.value = bounds.top + bounds.height;
      left.value = bounds.left;
      width.value = bounds.width;
    }, 10);
    useEventListener("resize", debounceSetPosition);
    function select(item) {
      emit("select", item);
      if (props.multiple === false) {
        open.value = false;
      }
    }
    function deselect(item) {
      emit("deselect", item.id);
      if (props.multiple === false) {
        open.value = false;
      }
    }
    function itemIsSelected(item) {
      return props.selected.some((selectedItem) => selectedItem.id === item.id);
    }
    let reachedTheEnd = false;
    const { scroll } = UseScrollToEnd(async () => {
      if (reachedTheEnd) {
        return;
      }
      pageNumber.value += 1;
      const req = await props.request(pageNumber.value, highlightStr.value);
      if (req.items.length === 0) {
        reachedTheEnd = true;
      } else {
        items.value.push(...req.items);
      }
    });
    async function filter(query) {
      pageNumber.value = 1;
      const req = await props.request(pageNumber.value, query);
      items.value = req.items;
      highlightStr.value = query;
    }
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["tw-flex tw-tw-flex-col tw-w-full", {
          "tw-cursor-not-allowed tw-opacity-50 tw-grayscale": __props.disabled
        }])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["tw-relative tw-inline-block tw-text-left tw-w-full tw-select-none", {
            "tw-pointer-events-none": __props.disabled
          }])
        }, [
          createBaseVNode("div", {
            class: "tw-flex tw-items-center tw-w-full tw-cursor-pointer tw-rounded-md tw-border tw-border-gray-300 tw-bg-white tw-px-2.5 tw-py-1 tw-text-left tw-shadow-sm focus:tw-border-blue-500 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 sm:tw-text-sm",
            onClick: _cache[1] || (_cache[1] = withModifiers(($event) => open.value = !open.value, ["stop"])),
            ref_key: "$select",
            ref: $select
          }, [
            __props.multiple === false ? (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString((_b = (_a = __props.selected[0]) == null ? void 0 : _a.label) != null ? _b : ""), 1)) : (openBlock(), createElementBlock("div", _hoisted_2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.selected, (item) => {
                return openBlock(), createElementBlock("span", {
                  key: item.id,
                  class: "tw-inline-flex tw-items-center tw-rounded tw-bg-gray-200 tw-py-0.5 tw-pl-2 tw-pr-0.5 tw-text-xs tw-font-medium tw-text-gray-700"
                }, [
                  createTextVNode(toDisplayString(item.label) + " ", 1),
                  createBaseVNode("button", {
                    onClick: withModifiers(($event) => deselect(item), ["stop"]),
                    type: "button",
                    class: "tw-ml-0.5 tw-inline-flex tw-h-4 tw-w-4 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded tw-text-gray-400 hover:tw-bg-gray-300 hover:tw-text-gray-500 focus:tw-bg-gray-500 focus:tw-text-white focus:tw-outline-none",
                    "remove-btn": ""
                  }, _hoisted_5$1, 8, _hoisted_3)
                ]);
              }), 128))
            ])),
            createBaseVNode("div", _hoisted_6, [
              __props.multiple === false && __props.selected.length > 0 ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "material-symbols-rounded tw-cursor-pointer tw-text-gray-400 hover:tw-text-red-500 tw-text-xl",
                onClick: _cache[0] || (_cache[0] = withModifiers(($event) => deselect(__props.selected[0]), ["stop"])),
                "remove-btn": ""
              }, "do_not_disturb_on")) : createCommentVNode("", true),
              createBaseVNode("span", {
                class: normalizeClass(["material-symbols-rounded tw-cursor-pointer tw-text-gray-400 hover:tw-text-gray-500 tw-transition-transform tw-text-xl", {
                  "tw-rotate-180": open.value
                }])
              }, "keyboard_arrow_down", 2)
            ])
          ], 512),
          (openBlock(), createBlock(Teleport, { to: "body" }, [
            createVNode(Transition, {
              "enter-active-class": "tw-transition tw-duration-100 tw-ease-out",
              "enter-from-class": "tw-transform tw-scale-95 tw-opacity-0",
              "enter-to-class": "tw-transform tw-scale-100 tw-opacity-100",
              "leave-active-class": "tw-transition tw-duration tw-ease-in",
              "leave-from-class": "tw-transform tw-scale-100 tw-opacity-100",
              "leave-to-class": "tw-transform tw-scale-95 tw-opacity-0"
            }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("div", {
                  ref_key: "$menu",
                  ref: $menu,
                  class: "tw-z-10 tw-flex tw-flex-col tw-absolute tw-overflow-auto tw-max-h-60 tw-mt-2 tw-origin-top tw-divide-y tw-divide-gray-100 tw-rounded-md tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none tw-text-base sm:tw-text-sm",
                  style: normalizeStyle(`left: ${left.value}px; top: ${top.value}px; width: ${width.value}px;`),
                  onScroll: _cache[2] || (_cache[2] = (...args) => unref(scroll) && unref(scroll)(...args))
                }, [
                  totalWithoutFilter.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_7, _hoisted_10)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createVNode(_sfc_main$2, { onFilter: filter }),
                    items.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_11$1, _hoisted_14)) : (openBlock(), createElementBlock("div", _hoisted_15, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item) => {
                        return openBlock(), createElementBlock("button", {
                          key: item.id,
                          class: normalizeClass([
                            "tw-flex tw-cursor-pointer tw-text-sm tw-justify-between tw-items-center tw-select-none tw-py-2 tw-text-left tw-px-4 hover:tw-bg-violet-500 hover:tw-text-white",
                            itemIsSelected(item) ? "tw-bg-violet-500 tw-text-white" : "tw-text-gray-900"
                          ]),
                          onClick: ($event) => itemIsSelected(item) ? deselect(item) : select(item)
                        }, [
                          createBaseVNode("span", {
                            class: "tw-truncate tw-mr-4",
                            innerHTML: unref(highlight)(item.label, highlightStr.value)
                          }, null, 8, _hoisted_17),
                          itemIsSelected(item) ? (openBlock(), createElementBlock("span", _hoisted_18, "check")) : createCommentVNode("", true)
                        ], 10, _hoisted_16);
                      }), 128))
                    ]))
                  ], 64))
                ], 36), [
                  [vShow, open.value]
                ])
              ]),
              _: 1
            })
          ]))
        ], 2)
      ], 2);
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createStaticVNode("", 4);
const _hoisted_5 = /* @__PURE__ */ createStaticVNode("", 6);
const _hoisted_11 = /* @__PURE__ */ createStaticVNode("", 7);
const __pageData = JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[{"level":2,"title":"Select One","slug":"select-one","link":"#select-one","children":[]},{"level":2,"title":"Select Many","slug":"select-many","link":"#select-many","children":[]}],"relativePath":"ui/select.md"}');
const __default__ = { name: "ui/select.md" };
const _sfc_main = Object.assign(__default__, {
  setup(__props) {
    const PER_PAGE = 5;
    const wizards = ref([
      { "id": "W-0", "label": "Harry Potter" },
      { "id": "W-1", "label": "Hermione Granger" },
      { "id": "W-2", "label": "Lord Voldemort" },
      { "id": "W-3", "label": "Professor Albus Dumbledore" },
      { "id": "W-4", "label": "Draco Malfoy" },
      { "id": "W-5", "label": "Professor Severus Snape" },
      { "id": "W-6", "label": "Rubeus Hagrid" },
      { "id": "W-7", "label": "Luna Lovegood" },
      { "id": "W-8", "label": "Ron Weasley" },
      { "id": "W-9", "label": "Dobby" },
      { "id": "W-10", "label": "Professor Minerva McGonagall" },
      { "id": "W-11", "label": "Sirius Black" },
      { "id": "W-12", "label": "Bellatrix Lestrange" },
      { "id": "W-13", "label": "Neville Longbottom" },
      { "id": "W-14", "label": "Remus Lupin" },
      { "id": "W-15", "label": "Dolores Umbridge" }
    ]);
    const users = ref([
      { "id": "U-0", "label": "harry_potter@gmail.com" },
      { "id": "U-1", "label": "hermione_granger@outlook.com" },
      { "id": "U-2", "label": "lord_voldemort@outlook.com" },
      { "id": "U-3", "label": "professor_albus_dumbledore@gmail.com" },
      { "id": "U-4", "label": "draco_malfoy@gmail.com" },
      { "id": "U-5", "label": "professor_severus_snape@outlook.com" },
      { "id": "U-6", "label": "rubeus_hagrid@gmail.com" },
      { "id": "U-7", "label": "luna_lovegood@outlook.com" },
      { "id": "U-8", "label": "ron_weasley@outlook.com" },
      { "id": "U-9", "label": "dobby@outlook.com" },
      { "id": "U-10", "label": "professor_minerva_mcgonagall@gmail.com" },
      { "id": "U-11", "label": "sirius_black@gmail.com" },
      { "id": "U-12", "label": "bellatrix_lestrange@gmail.com" },
      { "id": "U-13", "label": "neville_longbottom@outlook.com" },
      { "id": "U-14", "label": "remus_lupin@gmail.com" },
      { "id": "U-15", "label": "dolores_umbridge@outlook.com" }
    ]);
    const selectedUsers = ref([]);
    const selectedWizards = ref([]);
    function deselectWizard(id) {
      selectedWizards.value = selectedWizards.value.filter((item) => item.id !== id);
    }
    function selectWizard(item) {
      selectedWizards.value.push(item);
    }
    async function requestWizards(pageNumber, query) {
      const from = (pageNumber - 1) * PER_PAGE;
      const to = from + PER_PAGE;
      return {
        totalWithoutFilter: wizards.value.length,
        items: wizards.value.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())).slice(from, to)
      };
    }
    function deselectUser(id) {
      selectedUsers.value = selectedUsers.value.filter((item) => item.id !== id);
    }
    function selectUser(item) {
      selectedUsers.value.push(item);
    }
    async function requestUsers(pageNumber, query) {
      const from = (pageNumber - 1) * PER_PAGE;
      const to = from + PER_PAGE;
      return {
        totalWithoutFilter: users.value.length,
        items: users.value.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())).slice(from, to)
      };
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        createVNode(_sfc_main$1, {
          request: requestWizards,
          selected: selectedWizards.value,
          onDeselect: deselectWizard,
          onSelect: selectWizard
        }, null, 8, ["selected"]),
        _hoisted_5,
        createVNode(_sfc_main$1, {
          request: requestUsers,
          selected: selectedUsers.value,
          onDeselect: deselectUser,
          onSelect: selectUser,
          multiple: ""
        }, null, 8, ["selected"]),
        _hoisted_11
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
