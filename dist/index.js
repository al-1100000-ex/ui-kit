import M from "react";
var b = { exports: {} }, E = {};
var F;
function re() {
  if (F) return E;
  F = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(f, s, u) {
    var d = null;
    if (u !== void 0 && (d = "" + u), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      u = {};
      for (var m in s)
        m !== "key" && (u[m] = s[m]);
    } else u = s;
    return s = u.ref, {
      $$typeof: o,
      type: f,
      key: d,
      ref: s !== void 0 ? s : null,
      props: u
    };
  }
  return E.Fragment = l, E.jsx = i, E.jsxs = i, E;
}
var v = {};
var D;
function te() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && (function() {
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case q:
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
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : o(e.type) || "Memo";
          case j:
            r = e._payload, e = e._init;
            try {
              return o(e(r));
            } catch {
            }
        }
      return null;
    }
    function l(e) {
      return "" + e;
    }
    function i(e) {
      try {
        l(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), l(e);
      }
    }
    function f(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === j)
        return "<...>";
      try {
        var r = o(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function t() {
        g || (g = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function T() {
      var e = o(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, r, t, n, p, x) {
      var a = t.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
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
        value: p
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: x
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, r, t, n, p, x) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (K(a)) {
            for (n = 0; n < a.length; n++)
              y(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(a);
      if (N.call(r, "key")) {
        a = o(e);
        var _ = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}", I[a + n] || (_ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          _,
          a
        ), I[a + n] = !0);
      }
      if (a = null, t !== void 0 && (i(t), a = "" + t), d(r) && (i(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var A in r)
          A !== "key" && (t[A] = r[A]);
      } else t = r;
      return a && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        a,
        t,
        s(),
        p,
        x
      );
    }
    function y(e) {
      S(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === j && (e._payload.status === "fulfilled" ? S(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function S(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var R = M, P = /* @__PURE__ */ Symbol.for("react.transitional.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), k = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), q = /* @__PURE__ */ Symbol.for("react.profiler"), J = /* @__PURE__ */ Symbol.for("react.consumer"), z = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), B = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), j = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.activity"), Q = /* @__PURE__ */ Symbol.for("react.client.reference"), O = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, K = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var g, C = {}, Y = R.react_stack_bottom_frame.bind(
      R,
      u
    )(), $ = w(f(u)), I = {};
    v.Fragment = k, v.jsx = function(e, r, t) {
      var n = 1e4 > O.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : Y,
        n ? w(f(e)) : $
      );
    }, v.jsxs = function(e, r, t) {
      var n = 1e4 > O.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : Y,
        n ? w(f(e)) : $
      );
    };
  })()), v;
}
var L;
function ne() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? b.exports = re() : b.exports = te()), b.exports;
}
var c = ne();
const ae = M.forwardRef(
  ({ label: o, name: l, onChange: i, value: f, errorText: s, warningText: u, ...d }, m) => /* @__PURE__ */ c.jsxs("div", { className: "ui-input", children: [
    o ? /* @__PURE__ */ c.jsx("label", { htmlFor: l, children: o }) : null,
    /* @__PURE__ */ c.jsx(
      "input",
      {
        ref: m,
        id: l,
        name: l,
        value: f,
        onChange: (T) => i(l, T.target.value),
        "aria-invalid": !!s,
        ...d
      }
    ),
    s ? /* @__PURE__ */ c.jsx("div", { className: "ui-error", children: s }) : null,
    !s && u ? /* @__PURE__ */ c.jsx("div", { className: "ui-warning", children: u }) : null
  ] })
);
ae.displayName = "Input";
const se = ({ children: o, className: l, width: i }) => /* @__PURE__ */ c.jsx("div", { className: `ui-view--view ${l}`, style: { width: i }, children: o }), le = ({ children: o, className: l, width: i }) => /* @__PURE__ */ c.jsx("div", { className: `ui-view--flex ${l}`, style: { width: i }, children: o }), ue = ({ label: o, onClick: l }) => /* @__PURE__ */ c.jsx("div", { className: "ui-button", onClick: l, children: o });
export {
  ue as Button,
  le as Flex,
  ae as Input,
  se as View
};
