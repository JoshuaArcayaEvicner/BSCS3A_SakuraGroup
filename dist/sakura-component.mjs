import { openBlock as r, createElementBlock as c, toDisplayString as i } from "vue";
const a = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, s] of n)
    e[o] = s;
  return e;
}, p = {
  props: {
    label: {
      type: String,
      required: !1,
      default: void 0
    }
  }
}, l = { class: "button" };
function m(t, n, e, o, s, _) {
  return r(), c("button", l, i(e.label), 1);
}
const d = /* @__PURE__ */ a(p, [["render", m]]);
const f = {
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
}, b = ["min", "max", "step"];
function y(t, n, e, o, s, _) {
  return r(), c("input", {
    type: "number",
    class: "number-input",
    min: e.min,
    max: e.max,
    step: e.step
  }, null, 8, b);
}
const x = /* @__PURE__ */ a(f, [["render", y]]), v = { SKButton: d, SKNumberinput: x }, u = v, S = {
  install: (t, n) => {
    Object.keys(u).forEach((e) => {
      t.component(e, u[e]);
    });
  }
};
export {
  S as default
};
