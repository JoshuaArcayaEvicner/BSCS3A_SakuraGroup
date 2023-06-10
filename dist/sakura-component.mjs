import { openBlock as r, createElementBlock as a, toDisplayString as _ } from "vue";
const l = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, s] of n)
    t[o] = s;
  return t;
}, p = {
  props: {
    label: {
      type: String,
      required: !1,
      default: void 0
    }
  }
}, i = { class: "button" };
function u(e, n, t, o, s, m) {
  return r(), a("button", i, _(t.label), 1);
}
const d = /* @__PURE__ */ l(p, [["render", u]]), f = { SKButton: d }, c = f, b = {
  install: (e, n) => {
    Object.keys(c).forEach((t) => {
      e.component(t, c[t]);
    });
  }
};
export {
  b as default
};
