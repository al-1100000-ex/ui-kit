import y from "react";
var b = { exports: {} }, E = {};
var D;
function re() {
  if (D) return E;
  D = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(i, t, u) {
    var d = null;
    if (u !== void 0 && (d = "" + u), t.key !== void 0 && (d = "" + t.key), "key" in t) {
      u = {};
      for (var m in t)
        m !== "key" && (u[m] = t[m]);
    } else u = t;
    return t = u.ref, {
      $$typeof: a,
      type: i,
      key: d,
      ref: t !== void 0 ? t : null,
      props: u
    };
  }
  return E.Fragment = o, E.jsx = c, E.jsxs = c, E;
}
var _ = {};
var L;
function te() {
  return L || (L = 1, process.env.NODE_ENV !== "production" && (function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case J:
          return "Profiler";
        case V:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case z:
            return e.displayName || "Context";
          case q:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : a(e.type) || "Memo";
          case x:
            r = e._payload, e = e._init;
            try {
              return a(e(r));
            } catch {
            }
        }
      return null;
    }
    function o(e) {
      return "" + e;
    }
    function c(e) {
      try {
        o(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), o(e);
      }
    }
    function i(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === x)
        return "<...>";
      try {
        var r = a(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function t() {
      var e = j.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (g.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function n() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function T() {
      var e = a(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, r, n, s, R, w) {
      var l = n.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: r,
        props: n,
        _owner: s
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: T
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function A(e, r, n, s, R, w) {
      var l = r.children;
      if (l !== void 0)
        if (s)
          if (K(l)) {
            for (s = 0; s < l.length; s++)
              N(l[s]);
            Object.freeze && Object.freeze(l);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else N(l);
      if (g.call(r, "key")) {
        l = a(e);
        var v = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        s = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", I[l + s] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          l,
          v,
          l
        ), I[l + s] = !0);
      }
      if (l = null, n !== void 0 && (c(n), l = "" + n), d(r) && (c(r.key), l = "" + r.key), "key" in r) {
        n = {};
        for (var O in r)
          O !== "key" && (n[O] = r[O]);
      } else n = r;
      return l && m(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        l,
        n,
        t(),
        R,
        w
      );
    }
    function N(e) {
      S(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === x && (e._payload.status === "fulfilled" ? S(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function S(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var p = y, P = /* @__PURE__ */ Symbol.for("react.transitional.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), k = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), J = /* @__PURE__ */ Symbol.for("react.profiler"), q = /* @__PURE__ */ Symbol.for("react.consumer"), z = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), B = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), x = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.activity"), Q = /* @__PURE__ */ Symbol.for("react.client.reference"), j = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, g = Object.prototype.hasOwnProperty, K = Array.isArray, h = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var C, Y = {}, F = p.react_stack_bottom_frame.bind(
      p,
      u
    )(), $ = h(i(u)), I = {};
    _.Fragment = k, _.jsx = function(e, r, n) {
      var s = 1e4 > j.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        n,
        !1,
        s ? Error("react-stack-top-frame") : F,
        s ? h(i(e)) : $
      );
    }, _.jsxs = function(e, r, n) {
      var s = 1e4 > j.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        n,
        !0,
        s ? Error("react-stack-top-frame") : F,
        s ? h(i(e)) : $
      );
    };
  })()), _;
}
var M;
function ne() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? b.exports = re() : b.exports = te()), b.exports;
}
var f = ne();
const ae = y.forwardRef(
  ({ label: a, name: o, onChange: c, value: i, errorText: t, warningText: u, ...d }, m) => /* @__PURE__ */ f.jsxs("div", { className: "ui-input", children: [
    a ? /* @__PURE__ */ f.jsx("label", { htmlFor: o, children: a }) : null,
    /* @__PURE__ */ f.jsx(
      "input",
      {
        ref: m,
        id: o,
        name: o,
        value: i,
        onChange: (T) => c(o, T.target.value),
        "aria-invalid": !!t,
        ...d
      }
    ),
    t ? /* @__PURE__ */ f.jsx("div", { className: "ui-error", children: t }) : null,
    !t && u ? /* @__PURE__ */ f.jsx("div", { className: "ui-warning", children: u }) : null
  ] })
);
ae.displayName = "Input";
const le = ({ children: a, className: o, width: c }) => /* @__PURE__ */ f.jsx("div", { className: `ui-view--view ${o}`, style: { width: c }, children: a }), ue = ({ children: a, className: o, width: c }) => /* @__PURE__ */ f.jsx("div", { className: `ui-view--flex ${o}`, style: { width: c }, children: a }), ce = ({
  label: a,
  onClick: o,
  disabled: c = !1,
  type: i = "primary"
}) => {
  let t = ["ui-button"];
  c || t.push(`ui-button--${i}`), c && t.push("ui-button--disabled");
  const u = t.join(" ");
  return /* @__PURE__ */ f.jsx("div", { className: u, onClick: o, children: a });
}, ie = ({ icon: a, text: o }) => /* @__PURE__ */ f.jsxs("span", { className: "ui-icon-text", children: [
  a,
  " ",
  o
] }), oe = y.forwardRef(
  ({ onSubmit: a, ...o }, c) => /* @__PURE__ */ f.jsx(
    "form",
    {
      ref: c,
      onSubmit: (i) => {
        if (i.preventDefault(), !a) return;
        const t = new FormData(i.currentTarget), u = {};
        t.forEach((d, m) => {
          u[m] = d;
        }), a(u, i);
      },
      ...o
    }
  )
);
oe.displayName = "Form";
export {
  ce as Button,
  ue as Flex,
  oe as Form,
  ie as IconText,
  ae as Input,
  le as View
};
