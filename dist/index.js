import M from "react";
var b = { exports: {} }, E = {};
var F;
function re() {
  if (F) return E;
  F = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(c, o, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), o.key !== void 0 && (f = "" + o.key), "key" in o) {
      u = {};
      for (var d in o)
        d !== "key" && (u[d] = o[d]);
    } else u = o;
    return o = u.ref, {
      $$typeof: s,
      type: c,
      key: f,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return E.Fragment = l, E.jsx = i, E.jsxs = i, E;
}
var v = {};
var D;
function te() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(e) {
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
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case O:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
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
    function c(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === O)
        return "<...>";
      try {
        var r = s(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = j.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (g.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function t() {
        N || (N = !0, console.error(
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
      var e = s(this.type);
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
    function y(e, r, t, n, p, x) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (K(a)) {
            for (n = 0; n < a.length; n++)
              S(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(a);
      if (g.call(r, "key")) {
        a = s(e);
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
      if (a = null, t !== void 0 && (i(t), a = "" + t), f(r) && (i(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var A in r)
          A !== "key" && (t[A] = r[A]);
      } else t = r;
      return a && d(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        a,
        t,
        o(),
        p,
        x
      );
    }
    function S(e) {
      h(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === O && (e._payload.status === "fulfilled" ? h(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function h(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var R = M, P = /* @__PURE__ */ Symbol.for("react.transitional.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), k = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), q = /* @__PURE__ */ Symbol.for("react.profiler"), J = /* @__PURE__ */ Symbol.for("react.consumer"), z = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), B = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), O = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.activity"), Q = /* @__PURE__ */ Symbol.for("react.client.reference"), j = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, g = Object.prototype.hasOwnProperty, K = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, C = {}, Y = R.react_stack_bottom_frame.bind(
      R,
      u
    )(), $ = w(c(u)), I = {};
    v.Fragment = k, v.jsx = function(e, r, t) {
      var n = 1e4 > j.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : Y,
        n ? w(c(e)) : $
      );
    }, v.jsxs = function(e, r, t) {
      var n = 1e4 > j.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : Y,
        n ? w(c(e)) : $
      );
    };
  })()), v;
}
var L;
function ne() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? b.exports = re() : b.exports = te()), b.exports;
}
var m = ne();
const ae = M.forwardRef(
  ({ label: s, name: l, onChange: i, value: c, errorText: o, warningText: u, ...f }, d) => /* @__PURE__ */ m.jsxs("div", { className: "ui-input", children: [
    s ? /* @__PURE__ */ m.jsx("label", { htmlFor: l, children: s }) : null,
    /* @__PURE__ */ m.jsx(
      "input",
      {
        ref: d,
        id: l,
        name: l,
        value: c,
        onChange: (T) => i(l, T.target.value),
        "aria-invalid": !!o,
        ...f
      }
    ),
    o ? /* @__PURE__ */ m.jsx("div", { className: "ui-error", children: o }) : null,
    !o && u ? /* @__PURE__ */ m.jsx("div", { className: "ui-warning", children: u }) : null
  ] })
);
ae.displayName = "Input";
const se = ({ children: s, className: l, width: i }) => /* @__PURE__ */ m.jsx("div", { className: `ui-view--view ${l}`, style: { width: i }, children: s }), le = ({ children: s, className: l, width: i }) => /* @__PURE__ */ m.jsx("div", { className: `ui-view--flex ${l}`, style: { width: i }, children: s });
export {
  le as Flex,
  ae as Input,
  se as View
};
