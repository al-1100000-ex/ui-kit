import L from "react";
var v = { exports: {} }, _ = {};
var $;
function re() {
  if ($) return _;
  $ = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.fragment");
  function l(c, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var f in o)
        f !== "key" && (s[f] = o[f]);
    } else s = o;
    return o = s.ref, {
      $$typeof: u,
      type: c,
      key: i,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return _.Fragment = d, _.jsx = l, _.jsxs = l, _;
}
var E = {};
var F;
function te() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && (function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case b:
          return "Fragment";
        case J:
          return "Profiler";
        case q:
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
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case T:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function l(e) {
      try {
        d(e);
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
        ), d(e);
      }
    }
    function c(e) {
      if (e === b) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === T)
        return "<...>";
      try {
        var r = u(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(e) {
      if (y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, r) {
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
    function M() {
      var e = u(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, r, t, n, p, A) {
      var a = t.ref;
      return e = {
        $$typeof: w,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: M
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
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function P(e, r, t, n, p, A) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (K(a)) {
            for (n = 0; n < a.length; n++)
              h(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(a);
      if (y.call(r, "key")) {
        a = u(e);
        var m = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", I[a + n] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          m,
          a
        ), I[a + n] = !0);
      }
      if (a = null, t !== void 0 && (l(t), a = "" + t), i(r) && (l(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var S in r)
          S !== "key" && (t[S] = r[S]);
      } else t = r;
      return a && f(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        a,
        t,
        o(),
        p,
        A
      );
    }
    function h(e) {
      j(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === T && (e._payload.status === "fulfilled" ? j(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function j(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    var R = L, w = /* @__PURE__ */ Symbol.for("react.transitional.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), q = /* @__PURE__ */ Symbol.for("react.strict_mode"), J = /* @__PURE__ */ Symbol.for("react.profiler"), V = /* @__PURE__ */ Symbol.for("react.consumer"), z = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), B = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.activity"), Q = /* @__PURE__ */ Symbol.for("react.client.reference"), k = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, K = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var g, N = {}, C = R.react_stack_bottom_frame.bind(
      R,
      s
    )(), Y = O(c(s)), I = {};
    E.Fragment = b, E.jsx = function(e, r, t) {
      var n = 1e4 > k.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : C,
        n ? O(c(e)) : Y
      );
    }, E.jsxs = function(e, r, t) {
      var n = 1e4 > k.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : C,
        n ? O(c(e)) : Y
      );
    };
  })()), E;
}
var D;
function ne() {
  return D || (D = 1, process.env.NODE_ENV === "production" ? v.exports = re() : v.exports = te()), v.exports;
}
var x = ne();
const ae = L.forwardRef(
  ({ label: u, name: d, onChange: l, value: c, ...o }, s) => {
    const i = (f) => {
      l(d, f.target.value);
    };
    return /* @__PURE__ */ x.jsxs("div", { className: "ui-input", children: [
      u ? /* @__PURE__ */ x.jsx("label", { children: u }) : null,
      /* @__PURE__ */ x.jsx("input", { ref: s, onChange: i, value: c, ...o })
    ] });
  }
);
ae.displayName = "Input";
export {
  ae as Input
};
