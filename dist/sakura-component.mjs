import { openBlock as u, createElementBlock as l, normalizeClass as i, renderSlot as p, toDisplayString as d } from "vue";
const c = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [r, o] of n)
    e[r] = o;
  return e;
}, m = {
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
function y(t, n, e, r, o, s) {
  return u(), l("button", {
    class: i(s.computedClasses),
    onClick: n[0] || (n[0] = (x) => t.$emit("click"))
  }, [
    e.label ? (u(), l("span", _, d(e.label), 1)) : p(t.$slots, "default", { key: 0 })
  ], 2);
}
const f = /* @__PURE__ */ c(m, [["render", y]]);
const b = {
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
    },
    color: {
      type: String,
      default: "primary",
      validator(t) {
        return ["primary", "dark", "light", "pink1", "pink2"].includes(t);
      }
    }
  },
  computed: {
    colorClass() {
      return `number-input-${this.color}`;
    }
  }
}, k = ["min", "max", "step"];
function v(t, n, e, r, o, s) {
  return u(), l("input", {
    type: "number",
    class: i(["number-input", s.colorClass]),
    min: e.min,
    max: e.max,
    step: e.step
  }, null, 10, k);
}
const S = /* @__PURE__ */ c(b, [["render", v]]), g = { SKButton: f, SKNumberinput: S }, a = g, h = {
  install: (t, n) => {
    Object.keys(a).forEach((e) => {
      t.component(e, a[e]);
    });
  }
};
export {
  h as default
};
