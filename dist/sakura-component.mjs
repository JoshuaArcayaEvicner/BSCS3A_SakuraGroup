import { openBlock as s, createElementBlock as u, normalizeClass as i, renderSlot as p, toDisplayString as m } from "vue";
const c = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, r] of n)
    e[o] = r;
  return e;
}, d = {
  props: {
    color: {
      type: String,
      default: "primary",
      validator: (t) => ["primary", "dark", "light", "pink1", "pink2"].includes(t)
    },
    label: {
      type: String,
      default: ""
    }
  },
  computed: {
    computedClasses() {
      return {
        button: !0,
        [`color-${this.color}`]: !0
      };
    }
  }
}, _ = { key: 1 };
function f(t, n, e, o, r, a) {
  return s(), u("button", {
    class: i(a.computedClasses),
    onClick: n[0] || (n[0] = ($) => t.$emit("click"))
  }, [
    e.label ? (s(), u("span", _, m(e.label), 1)) : p(t.$slots, "default", { key: 0 })
  ], 2);
}
const y = /* @__PURE__ */ c(d, [["render", f]]);
const b = {
  name: "NumberInput",
  props: {
    value: {
      type: Number,
      required: !0
    },
    min: {
      type: Number,
      default: void 0
    },
    max: {
      type: Number,
      default: void 0
    },
    step: {
      type: Number,
      default: 1
    }
  }
}, k = ["min", "max", "step"];
function v(t, n, e, o, r, a) {
  return s(), u("input", {
    type: "number",
    class: "number-input",
    min: e.min,
    max: e.max,
    step: e.step
  }, null, 8, k);
}
const x = /* @__PURE__ */ c(b, [["render", v]]), S = { SKButton: y, SKNumberinput: x }, l = S, N = {
  install: (t, n) => {
    Object.keys(l).forEach((e) => {
      t.component(e, l[e]);
    });
  }
};
export {
  N as default
};
