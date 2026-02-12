import * as le from "react";
import Zt, { forwardRef as Mn, useContext as jn, useState as jr, useRef as Dn, useMemo as Bn, useCallback as Fn, useEffect as ft } from "react";
function Ln(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ar = { exports: {} }, Ue = {};
var dt;
function Vn() {
  if (dt) return Ue;
  dt = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function t(n, o, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      i = {};
      for (var c in o)
        c !== "key" && (i[c] = o[c]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return Ue.Fragment = r, Ue.jsx = t, Ue.jsxs = t, Ue;
}
var qe = {};
var pt;
function Wn() {
  return pt || (pt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === H ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case b:
          return "Fragment";
        case R:
          return "Profiler";
        case _:
          return "StrictMode";
        case T:
          return "Suspense";
        case I:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case l:
            return "Portal";
          case w:
            return u.displayName || "Context";
          case N:
            return (u._context.displayName || "Context") + ".Consumer";
          case S:
            var x = u.render;
            return u = u.displayName, u || (u = x.displayName || x.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case re:
            return x = u.displayName || null, x !== null ? x : e(u.type) || "Memo";
          case z:
            x = u._payload, u = u._init;
            try {
              return e(u(x));
            } catch {
            }
        }
      return null;
    }
    function r(u) {
      return "" + u;
    }
    function t(u) {
      try {
        r(u);
        var x = !1;
      } catch {
        x = !0;
      }
      if (x) {
        x = console;
        var A = x.error, k = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return A.call(
          x,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), r(u);
      }
    }
    function n(u) {
      if (u === b) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === z)
        return "<...>";
      try {
        var x = e(u);
        return x ? "<" + x + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var u = a.A;
      return u === null ? null : u.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(u) {
      if (O.call(u, "key")) {
        var x = Object.getOwnPropertyDescriptor(u, "key").get;
        if (x && x.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function c(u, x) {
      function A() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          x
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: A,
        configurable: !0
      });
    }
    function d() {
      var u = e(this.type);
      return ie[u] || (ie[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function f(u, x, A, k, B, j) {
      var P = A.ref;
      return u = {
        $$typeof: y,
        type: u,
        key: x,
        props: A,
        _owner: k
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function p(u, x, A, k, B, j) {
      var P = x.children;
      if (P !== void 0)
        if (k)
          if (C(P)) {
            for (k = 0; k < P.length; k++)
              m(P[k]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(P);
      if (O.call(x, "key")) {
        P = e(u);
        var D = Object.keys(x).filter(function(L) {
          return L !== "key";
        });
        k = 0 < D.length ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}", E[P + k] || (D = 0 < D.length ? "{" + D.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          P,
          D,
          P
        ), E[P + k] = !0);
      }
      if (P = null, A !== void 0 && (t(A), P = "" + A), s(x) && (t(x.key), P = "" + x.key), "key" in x) {
        A = {};
        for (var V in x)
          V !== "key" && (A[V] = x[V]);
      } else A = x;
      return P && c(
        A,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), f(
        u,
        P,
        A,
        o(),
        B,
        j
      );
    }
    function m(u) {
      g(u) ? u._store && (u._store.validated = 1) : typeof u == "object" && u !== null && u.$$typeof === z && (u._payload.status === "fulfilled" ? g(u._payload.value) && u._payload.value._store && (u._payload.value._store.validated = 1) : u._store && (u._store.validated = 1));
    }
    function g(u) {
      return typeof u == "object" && u !== null && u.$$typeof === y;
    }
    var v = Zt, y = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), _ = /* @__PURE__ */ Symbol.for("react.strict_mode"), R = /* @__PURE__ */ Symbol.for("react.profiler"), N = /* @__PURE__ */ Symbol.for("react.consumer"), w = /* @__PURE__ */ Symbol.for("react.context"), S = /* @__PURE__ */ Symbol.for("react.forward_ref"), T = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.suspense_list"), re = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), ee = /* @__PURE__ */ Symbol.for("react.activity"), H = /* @__PURE__ */ Symbol.for("react.client.reference"), a = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = Object.prototype.hasOwnProperty, C = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var F, ie = {}, fe = v.react_stack_bottom_frame.bind(
      v,
      i
    )(), Ne = M(n(i)), E = {};
    qe.Fragment = b, qe.jsx = function(u, x, A) {
      var k = 1e4 > a.recentlyCreatedOwnerStacks++;
      return p(
        u,
        x,
        A,
        !1,
        k ? Error("react-stack-top-frame") : fe,
        k ? M(n(u)) : Ne
      );
    }, qe.jsxs = function(u, x, A) {
      var k = 1e4 > a.recentlyCreatedOwnerStacks++;
      return p(
        u,
        x,
        A,
        !0,
        k ? Error("react-stack-top-frame") : fe,
        k ? M(n(u)) : Ne
      );
    };
  })()), qe;
}
var mt;
function zn() {
  return mt || (mt = 1, process.env.NODE_ENV === "production" ? ar.exports = Vn() : ar.exports = Wn()), ar.exports;
}
var se = zn();
const ht = (e) => e, Yn = () => {
  let e = ht;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = ht;
    }
  };
}, Un = Yn();
function $e(e, ...r) {
  const t = new URL(`https://mui.com/production-error/?code=${e}`);
  return r.forEach((n) => t.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${t} for the full message.`;
}
function Ie(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : $e(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var sr = { exports: {} }, cr = { exports: {} }, q = {};
var gt;
function qn() {
  if (gt) return q;
  gt = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, t = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, s = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, c = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, d = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, f = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, p = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, m = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, g = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, v = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, y = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, l = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, b = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, _ = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, R = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function N(S) {
    if (typeof S == "object" && S !== null) {
      var T = S.$$typeof;
      switch (T) {
        case r:
          switch (S = S.type, S) {
            case d:
            case f:
            case n:
            case i:
            case o:
            case m:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case c:
                case p:
                case y:
                case v:
                case s:
                  return S;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  function w(S) {
    return N(S) === f;
  }
  return q.AsyncMode = d, q.ConcurrentMode = f, q.ContextConsumer = c, q.ContextProvider = s, q.Element = r, q.ForwardRef = p, q.Fragment = n, q.Lazy = y, q.Memo = v, q.Portal = t, q.Profiler = i, q.StrictMode = o, q.Suspense = m, q.isAsyncMode = function(S) {
    return w(S) || N(S) === d;
  }, q.isConcurrentMode = w, q.isContextConsumer = function(S) {
    return N(S) === c;
  }, q.isContextProvider = function(S) {
    return N(S) === s;
  }, q.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }, q.isForwardRef = function(S) {
    return N(S) === p;
  }, q.isFragment = function(S) {
    return N(S) === n;
  }, q.isLazy = function(S) {
    return N(S) === y;
  }, q.isMemo = function(S) {
    return N(S) === v;
  }, q.isPortal = function(S) {
    return N(S) === t;
  }, q.isProfiler = function(S) {
    return N(S) === i;
  }, q.isStrictMode = function(S) {
    return N(S) === o;
  }, q.isSuspense = function(S) {
    return N(S) === m;
  }, q.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === f || S === i || S === o || S === m || S === g || typeof S == "object" && S !== null && (S.$$typeof === y || S.$$typeof === v || S.$$typeof === s || S.$$typeof === c || S.$$typeof === p || S.$$typeof === b || S.$$typeof === _ || S.$$typeof === R || S.$$typeof === l);
  }, q.typeOf = N, q;
}
var G = {};
var yt;
function Gn() {
  return yt || (yt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, t = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, s = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, c = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, d = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, f = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, p = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, m = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, g = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, v = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, y = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, l = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, b = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, _ = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, R = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function N($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === n || $ === f || $ === i || $ === o || $ === m || $ === g || typeof $ == "object" && $ !== null && ($.$$typeof === y || $.$$typeof === v || $.$$typeof === s || $.$$typeof === c || $.$$typeof === p || $.$$typeof === b || $.$$typeof === _ || $.$$typeof === R || $.$$typeof === l);
    }
    function w($) {
      if (typeof $ == "object" && $ !== null) {
        var ve = $.$$typeof;
        switch (ve) {
          case r:
            var ir = $.type;
            switch (ir) {
              case d:
              case f:
              case n:
              case i:
              case o:
              case m:
                return ir;
              default:
                var ut = ir && ir.$$typeof;
                switch (ut) {
                  case c:
                  case p:
                  case y:
                  case v:
                  case s:
                    return ut;
                  default:
                    return ve;
                }
            }
          case t:
            return ve;
        }
      }
    }
    var S = d, T = f, I = c, re = s, z = r, ee = p, H = n, a = y, O = v, C = t, M = i, F = o, ie = m, fe = !1;
    function Ne($) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E($) || w($) === d;
    }
    function E($) {
      return w($) === f;
    }
    function u($) {
      return w($) === c;
    }
    function x($) {
      return w($) === s;
    }
    function A($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === r;
    }
    function k($) {
      return w($) === p;
    }
    function B($) {
      return w($) === n;
    }
    function j($) {
      return w($) === y;
    }
    function P($) {
      return w($) === v;
    }
    function D($) {
      return w($) === t;
    }
    function V($) {
      return w($) === i;
    }
    function L($) {
      return w($) === o;
    }
    function de($) {
      return w($) === m;
    }
    G.AsyncMode = S, G.ConcurrentMode = T, G.ContextConsumer = I, G.ContextProvider = re, G.Element = z, G.ForwardRef = ee, G.Fragment = H, G.Lazy = a, G.Memo = O, G.Portal = C, G.Profiler = M, G.StrictMode = F, G.Suspense = ie, G.isAsyncMode = Ne, G.isConcurrentMode = E, G.isContextConsumer = u, G.isContextProvider = x, G.isElement = A, G.isForwardRef = k, G.isFragment = B, G.isLazy = j, G.isMemo = P, G.isPortal = D, G.isProfiler = V, G.isStrictMode = L, G.isSuspense = de, G.isValidElementType = N, G.typeOf = w;
  })()), G;
}
var bt;
function en() {
  return bt || (bt = 1, process.env.NODE_ENV === "production" ? cr.exports = qn() : cr.exports = Gn()), cr.exports;
}
var Dr, vt;
function Hn() {
  if (vt) return Dr;
  vt = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var d = Object.getOwnPropertyNames(s).map(function(p) {
        return s[p];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        f[p] = p;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Dr = o() ? Object.assign : function(i, s) {
    for (var c, d = n(i), f, p = 1; p < arguments.length; p++) {
      c = Object(arguments[p]);
      for (var m in c)
        r.call(c, m) && (d[m] = c[m]);
      if (e) {
        f = e(c);
        for (var g = 0; g < f.length; g++)
          t.call(c, f[g]) && (d[f[g]] = c[f[g]]);
      }
    }
    return d;
  }, Dr;
}
var Br, St;
function rt() {
  if (St) return Br;
  St = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Br = e, Br;
}
var Fr, Et;
function rn() {
  return Et || (Et = 1, Fr = Function.call.bind(Object.prototype.hasOwnProperty)), Fr;
}
var Lr, Tt;
function Kn() {
  if (Tt) return Lr;
  Tt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = /* @__PURE__ */ rt(), t = {}, n = /* @__PURE__ */ rn();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, c, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (n(i, p)) {
          var m;
          try {
            if (typeof i[p] != "function") {
              var g = Error(
                (d || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            m = i[p](s, p, d, c, null, r);
          } catch (y) {
            m = y;
          }
          if (m && !(m instanceof Error) && e(
            (d || "React class") + ": type specification of " + c + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in t)) {
            t[m.message] = !0;
            var v = f ? f() : "";
            e(
              "Failed " + c + " type: " + m.message + (v ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Lr = o, Lr;
}
var Vr, Ct;
function Xn() {
  if (Ct) return Vr;
  Ct = 1;
  var e = en(), r = Hn(), t = /* @__PURE__ */ rt(), n = /* @__PURE__ */ rn(), o = /* @__PURE__ */ Kn(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var d = "Warning: " + c;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Vr = function(c, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(E) {
      var u = E && (f && E[f] || E[p]);
      if (typeof u == "function")
        return u;
    }
    var g = "<<anonymous>>", v = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: R(),
      arrayOf: N,
      element: w(),
      elementType: S(),
      instanceOf: T,
      node: ee(),
      objectOf: re,
      oneOf: I,
      oneOfType: z,
      shape: a,
      exact: O
    };
    function y(E, u) {
      return E === u ? E !== 0 || 1 / E === 1 / u : E !== E && u !== u;
    }
    function l(E, u) {
      this.message = E, this.data = u && typeof u == "object" ? u : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function b(E) {
      if (process.env.NODE_ENV !== "production")
        var u = {}, x = 0;
      function A(B, j, P, D, V, L, de) {
        if (D = D || g, L = L || P, de !== t) {
          if (d) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = D + ":" + P;
            !u[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            x < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + D + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), u[ve] = !0, x++);
          }
        }
        return j[P] == null ? B ? j[P] === null ? new l("The " + V + " `" + L + "` is marked as required " + ("in `" + D + "`, but its value is `null`.")) : new l("The " + V + " `" + L + "` is marked as required in " + ("`" + D + "`, but its value is `undefined`.")) : null : E(j, P, D, V, L);
      }
      var k = A.bind(null, !1);
      return k.isRequired = A.bind(null, !0), k;
    }
    function _(E) {
      function u(x, A, k, B, j, P) {
        var D = x[A], V = F(D);
        if (V !== E) {
          var L = ie(D);
          return new l(
            "Invalid " + B + " `" + j + "` of type " + ("`" + L + "` supplied to `" + k + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return b(u);
    }
    function R() {
      return b(s);
    }
    function N(E) {
      function u(x, A, k, B, j) {
        if (typeof E != "function")
          return new l("Property `" + j + "` of component `" + k + "` has invalid PropType notation inside arrayOf.");
        var P = x[A];
        if (!Array.isArray(P)) {
          var D = F(P);
          return new l("Invalid " + B + " `" + j + "` of type " + ("`" + D + "` supplied to `" + k + "`, expected an array."));
        }
        for (var V = 0; V < P.length; V++) {
          var L = E(P, V, k, B, j + "[" + V + "]", t);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return b(u);
    }
    function w() {
      function E(u, x, A, k, B) {
        var j = u[x];
        if (!c(j)) {
          var P = F(j);
          return new l("Invalid " + k + " `" + B + "` of type " + ("`" + P + "` supplied to `" + A + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(E);
    }
    function S() {
      function E(u, x, A, k, B) {
        var j = u[x];
        if (!e.isValidElementType(j)) {
          var P = F(j);
          return new l("Invalid " + k + " `" + B + "` of type " + ("`" + P + "` supplied to `" + A + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(E);
    }
    function T(E) {
      function u(x, A, k, B, j) {
        if (!(x[A] instanceof E)) {
          var P = E.name || g, D = Ne(x[A]);
          return new l("Invalid " + B + " `" + j + "` of type " + ("`" + D + "` supplied to `" + k + "`, expected ") + ("instance of `" + P + "`."));
        }
        return null;
      }
      return b(u);
    }
    function I(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function u(x, A, k, B, j) {
        for (var P = x[A], D = 0; D < E.length; D++)
          if (y(P, E[D]))
            return null;
        var V = JSON.stringify(E, function(de, $) {
          var ve = ie($);
          return ve === "symbol" ? String($) : $;
        });
        return new l("Invalid " + B + " `" + j + "` of value `" + String(P) + "` " + ("supplied to `" + k + "`, expected one of " + V + "."));
      }
      return b(u);
    }
    function re(E) {
      function u(x, A, k, B, j) {
        if (typeof E != "function")
          return new l("Property `" + j + "` of component `" + k + "` has invalid PropType notation inside objectOf.");
        var P = x[A], D = F(P);
        if (D !== "object")
          return new l("Invalid " + B + " `" + j + "` of type " + ("`" + D + "` supplied to `" + k + "`, expected an object."));
        for (var V in P)
          if (n(P, V)) {
            var L = E(P, V, k, B, j + "." + V, t);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return b(u);
    }
    function z(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var u = 0; u < E.length; u++) {
        var x = E[u];
        if (typeof x != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(x) + " at index " + u + "."
          ), s;
      }
      function A(k, B, j, P, D) {
        for (var V = [], L = 0; L < E.length; L++) {
          var de = E[L], $ = de(k, B, j, P, D, t);
          if ($ == null)
            return null;
          $.data && n($.data, "expectedType") && V.push($.data.expectedType);
        }
        var ve = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new l("Invalid " + P + " `" + D + "` supplied to " + ("`" + j + "`" + ve + "."));
      }
      return b(A);
    }
    function ee() {
      function E(u, x, A, k, B) {
        return C(u[x]) ? null : new l("Invalid " + k + " `" + B + "` supplied to " + ("`" + A + "`, expected a ReactNode."));
      }
      return b(E);
    }
    function H(E, u, x, A, k) {
      return new l(
        (E || "React class") + ": " + u + " type `" + x + "." + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + k + "`."
      );
    }
    function a(E) {
      function u(x, A, k, B, j) {
        var P = x[A], D = F(P);
        if (D !== "object")
          return new l("Invalid " + B + " `" + j + "` of type `" + D + "` " + ("supplied to `" + k + "`, expected `object`."));
        for (var V in E) {
          var L = E[V];
          if (typeof L != "function")
            return H(k, B, j, V, ie(L));
          var de = L(P, V, k, B, j + "." + V, t);
          if (de)
            return de;
        }
        return null;
      }
      return b(u);
    }
    function O(E) {
      function u(x, A, k, B, j) {
        var P = x[A], D = F(P);
        if (D !== "object")
          return new l("Invalid " + B + " `" + j + "` of type `" + D + "` " + ("supplied to `" + k + "`, expected `object`."));
        var V = r({}, x[A], E);
        for (var L in V) {
          var de = E[L];
          if (n(E, L) && typeof de != "function")
            return H(k, B, j, L, ie(de));
          if (!de)
            return new l(
              "Invalid " + B + " `" + j + "` key `" + L + "` supplied to `" + k + "`.\nBad object: " + JSON.stringify(x[A], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var $ = de(P, L, k, B, j + "." + L, t);
          if ($)
            return $;
        }
        return null;
      }
      return b(u);
    }
    function C(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(C);
          if (E === null || c(E))
            return !0;
          var u = m(E);
          if (u) {
            var x = u.call(E), A;
            if (u !== E.entries) {
              for (; !(A = x.next()).done; )
                if (!C(A.value))
                  return !1;
            } else
              for (; !(A = x.next()).done; ) {
                var k = A.value;
                if (k && !C(k[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function M(E, u) {
      return E === "symbol" ? !0 : u ? u["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && u instanceof Symbol : !1;
    }
    function F(E) {
      var u = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : M(u, E) ? "symbol" : u;
    }
    function ie(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var u = F(E);
      if (u === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return u;
    }
    function fe(E) {
      var u = ie(E);
      switch (u) {
        case "array":
        case "object":
          return "an " + u;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + u;
        default:
          return u;
      }
    }
    function Ne(E) {
      return !E.constructor || !E.constructor.name ? g : E.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, Vr;
}
var Wr, wt;
function Jn() {
  if (wt) return Wr;
  wt = 1;
  var e = /* @__PURE__ */ rt();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Wr = function() {
    function n(s, c, d, f, p, m) {
      if (m !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, Wr;
}
var xt;
function Qn() {
  if (xt) return sr.exports;
  if (xt = 1, process.env.NODE_ENV !== "production") {
    var e = en(), r = !0;
    sr.exports = /* @__PURE__ */ Xn()(e.isElement, r);
  } else
    sr.exports = /* @__PURE__ */ Jn()();
  return sr.exports;
}
var Zn = /* @__PURE__ */ Qn();
const W = /* @__PURE__ */ Ln(Zn);
function tn(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (r = 0; r < o; r++) e[r] && (t = tn(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function nn() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (r = tn(e)) && (n && (n += " "), n += r);
  return n;
}
function eo(e, r, t = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let s = "", c = !0;
    for (let d = 0; d < i.length; d += 1) {
      const f = i[d];
      f && (s += (c === !0 ? "" : " ") + r(f), c = !1, t && t[f] && (s += " " + t[f]));
    }
    n[o] = s;
  }
  return n;
}
var lr = { exports: {} }, J = {};
var _t;
function ro() {
  if (_t) return J;
  _t = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), t = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), o = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.consumer"), s = /* @__PURE__ */ Symbol.for("react.context"), c = /* @__PURE__ */ Symbol.for("react.forward_ref"), d = /* @__PURE__ */ Symbol.for("react.suspense"), f = /* @__PURE__ */ Symbol.for("react.suspense_list"), p = /* @__PURE__ */ Symbol.for("react.memo"), m = /* @__PURE__ */ Symbol.for("react.lazy"), g = /* @__PURE__ */ Symbol.for("react.view_transition"), v = /* @__PURE__ */ Symbol.for("react.client.reference");
  function y(l) {
    if (typeof l == "object" && l !== null) {
      var b = l.$$typeof;
      switch (b) {
        case e:
          switch (l = l.type, l) {
            case t:
            case o:
            case n:
            case d:
            case f:
            case g:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case s:
                case c:
                case m:
                case p:
                  return l;
                case i:
                  return l;
                default:
                  return b;
              }
          }
        case r:
          return b;
      }
    }
  }
  return J.ContextConsumer = i, J.ContextProvider = s, J.Element = e, J.ForwardRef = c, J.Fragment = t, J.Lazy = m, J.Memo = p, J.Portal = r, J.Profiler = o, J.StrictMode = n, J.Suspense = d, J.SuspenseList = f, J.isContextConsumer = function(l) {
    return y(l) === i;
  }, J.isContextProvider = function(l) {
    return y(l) === s;
  }, J.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, J.isForwardRef = function(l) {
    return y(l) === c;
  }, J.isFragment = function(l) {
    return y(l) === t;
  }, J.isLazy = function(l) {
    return y(l) === m;
  }, J.isMemo = function(l) {
    return y(l) === p;
  }, J.isPortal = function(l) {
    return y(l) === r;
  }, J.isProfiler = function(l) {
    return y(l) === o;
  }, J.isStrictMode = function(l) {
    return y(l) === n;
  }, J.isSuspense = function(l) {
    return y(l) === d;
  }, J.isSuspenseList = function(l) {
    return y(l) === f;
  }, J.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === t || l === o || l === n || l === d || l === f || typeof l == "object" && l !== null && (l.$$typeof === m || l.$$typeof === p || l.$$typeof === s || l.$$typeof === i || l.$$typeof === c || l.$$typeof === v || l.getModuleId !== void 0);
  }, J.typeOf = y, J;
}
var Q = {};
var $t;
function to() {
  return $t || ($t = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l) {
      if (typeof l == "object" && l !== null) {
        var b = l.$$typeof;
        switch (b) {
          case r:
            switch (l = l.type, l) {
              case n:
              case i:
              case o:
              case f:
              case p:
              case v:
                return l;
              default:
                switch (l = l && l.$$typeof, l) {
                  case c:
                  case d:
                  case g:
                  case m:
                    return l;
                  case s:
                    return l;
                  default:
                    return b;
                }
            }
          case t:
            return b;
        }
      }
    }
    var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), i = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.consumer"), c = /* @__PURE__ */ Symbol.for("react.context"), d = /* @__PURE__ */ Symbol.for("react.forward_ref"), f = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.suspense_list"), m = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), v = /* @__PURE__ */ Symbol.for("react.view_transition"), y = /* @__PURE__ */ Symbol.for("react.client.reference");
    Q.ContextConsumer = s, Q.ContextProvider = c, Q.Element = r, Q.ForwardRef = d, Q.Fragment = n, Q.Lazy = g, Q.Memo = m, Q.Portal = t, Q.Profiler = i, Q.StrictMode = o, Q.Suspense = f, Q.SuspenseList = p, Q.isContextConsumer = function(l) {
      return e(l) === s;
    }, Q.isContextProvider = function(l) {
      return e(l) === c;
    }, Q.isElement = function(l) {
      return typeof l == "object" && l !== null && l.$$typeof === r;
    }, Q.isForwardRef = function(l) {
      return e(l) === d;
    }, Q.isFragment = function(l) {
      return e(l) === n;
    }, Q.isLazy = function(l) {
      return e(l) === g;
    }, Q.isMemo = function(l) {
      return e(l) === m;
    }, Q.isPortal = function(l) {
      return e(l) === t;
    }, Q.isProfiler = function(l) {
      return e(l) === i;
    }, Q.isStrictMode = function(l) {
      return e(l) === o;
    }, Q.isSuspense = function(l) {
      return e(l) === f;
    }, Q.isSuspenseList = function(l) {
      return e(l) === p;
    }, Q.isValidElementType = function(l) {
      return typeof l == "string" || typeof l == "function" || l === n || l === i || l === o || l === f || l === p || typeof l == "object" && l !== null && (l.$$typeof === g || l.$$typeof === m || l.$$typeof === c || l.$$typeof === s || l.$$typeof === d || l.$$typeof === y || l.getModuleId !== void 0);
    }, Q.typeOf = e;
  })()), Q;
}
var Ot;
function no() {
  return Ot || (Ot = 1, process.env.NODE_ENV === "production" ? lr.exports = /* @__PURE__ */ ro() : lr.exports = /* @__PURE__ */ to()), lr.exports;
}
var gr = /* @__PURE__ */ no();
function xe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function on(e) {
  if (/* @__PURE__ */ le.isValidElement(e) || gr.isValidElementType(e) || !xe(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = on(e[t]);
  }), r;
}
function he(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? {
    ...e
  } : e;
  return xe(e) && xe(r) && Object.keys(r).forEach((o) => {
    /* @__PURE__ */ le.isValidElement(r[o]) || gr.isValidElementType(r[o]) ? n[o] = r[o] : xe(r[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && xe(e[o]) ? n[o] = he(e[o], r[o], t) : t.clone ? n[o] = xe(r[o]) ? on(r[o]) : r[o] : n[o] = r[o];
  }), n;
}
function Je(e, r) {
  return r ? he(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ke = process.env.NODE_ENV !== "production" ? W.oneOfType([W.number, W.string, W.object, W.array]) : {};
function kt(e, r) {
  if (!e.containerQueries)
    return r;
  const t = Object.keys(r).filter((n) => n.startsWith("@container")).sort((n, o) => {
    const i = /min-width:\s*([0-9.]+)/;
    return +(n.match(i)?.[1] || 0) - +(o.match(i)?.[1] || 0);
  });
  return t.length ? t.reduce((n, o) => {
    const i = r[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...r
  }) : r;
}
function oo(e, r) {
  return r === "@" || r.startsWith("@") && (e.some((t) => r.startsWith(`@${t}`)) || !!r.match(/^@\d/));
}
function io(e, r) {
  const t = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!t) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${r})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : $e(18, `(${r})`));
    return null;
  }
  const [, n, o] = t, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function ao(e) {
  const r = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function t(i, s) {
    i.up = (...c) => r(e.breakpoints.up(...c), s), i.down = (...c) => r(e.breakpoints.down(...c), s), i.between = (...c) => r(e.breakpoints.between(...c), s), i.only = (...c) => r(e.breakpoints.only(...c), s), i.not = (...c) => {
      const d = r(e.breakpoints.not(...c), s);
      return d.includes("not all and") ? d.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : d;
    };
  }
  const n = {}, o = (i) => (t(n, i), n);
  return t(o), {
    ...e,
    containerQueries: o
  };
}
const Sr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Rt = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Sr[e]}px)`
}, so = {
  containerQueries: (e) => ({
    up: (r) => {
      let t = typeof r == "number" ? r : Sr[r] || r;
      return typeof t == "number" && (t = `${t}px`), e ? `@container ${e} (min-width:${t})` : `@container (min-width:${t})`;
    }
  })
};
function _e(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || Rt;
    return r.reduce((s, c, d) => (s[i.up(i.keys[d])] = t(r[d]), s), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || Rt;
    return Object.keys(r).reduce((s, c) => {
      if (oo(i.keys, c)) {
        const d = io(n.containerQueries ? n : so, c);
        d && (s[d] = t(r[c], c));
      } else if (Object.keys(i.values || Sr).includes(c)) {
        const d = i.up(c);
        s[d] = t(r[c], c);
      } else {
        const d = c;
        s[d] = r[d];
      }
      return s;
    }, {});
  }
  return t(r);
}
function co(e = {}) {
  return e.keys?.reduce((t, n) => {
    const o = e.up(n);
    return t[o] = {}, t;
  }, {}) || {};
}
function At(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function Er(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function yr(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = Er(e, t) || n, r && (o = r(o, n, e)), o;
}
function oe(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[r] == null)
      return null;
    const c = s[r], d = s.theme, f = Er(d, n) || {};
    return _e(s, c, (m) => {
      let g = yr(f, o, m);
      return m === g && typeof m == "string" && (g = yr(f, o, `${r}${m === "default" ? "" : Ie(m)}`, m)), t === !1 ? g : {
        [t]: g
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: ke
  } : {}, i.filterProps = [r], i;
}
function lo(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const uo = {
  m: "margin",
  p: "padding"
}, fo = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Pt = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, po = lo((e) => {
  if (e.length > 2)
    if (Pt[e])
      e = Pt[e];
    else
      return [e];
  const [r, t] = e.split(""), n = uo[r], o = fo[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Tr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Cr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], mo = [...Tr, ...Cr];
function tr(e, r, t, n) {
  const o = Er(e, r, !0) ?? t;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`)));
    const c = o[s];
    return i >= 0 ? c : typeof c == "number" ? -c : typeof c == "string" && c.startsWith("var(") ? `calc(-1 * ${c})` : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function tt(e) {
  return tr(e, "spacing", 8, "spacing");
}
function nr(e, r) {
  return typeof r == "string" || r == null ? r : e(r);
}
function ho(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = nr(r, t), n), {});
}
function go(e, r, t, n) {
  if (!r.includes(t))
    return null;
  const o = po(t), i = ho(o, n), s = e[t];
  return _e(e, s, i);
}
function an(e, r) {
  const t = tt(e.theme);
  return Object.keys(e).map((n) => go(e, r, n, t)).reduce(Je, {});
}
function te(e) {
  return an(e, Tr);
}
te.propTypes = process.env.NODE_ENV !== "production" ? Tr.reduce((e, r) => (e[r] = ke, e), {}) : {};
te.filterProps = Tr;
function ne(e) {
  return an(e, Cr);
}
ne.propTypes = process.env.NODE_ENV !== "production" ? Cr.reduce((e, r) => (e[r] = ke, e), {}) : {};
ne.filterProps = Cr;
process.env.NODE_ENV !== "production" && mo.reduce((e, r) => (e[r] = ke, e), {});
function wr(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? Je(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function ye(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function be(e, r) {
  return oe({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const yo = be("border", ye), bo = be("borderTop", ye), vo = be("borderRight", ye), So = be("borderBottom", ye), Eo = be("borderLeft", ye), To = be("borderColor"), Co = be("borderTopColor"), wo = be("borderRightColor"), xo = be("borderBottomColor"), _o = be("borderLeftColor"), $o = be("outline", ye), Oo = be("outlineColor"), xr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = tr(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: nr(r, n)
    });
    return _e(e, e.borderRadius, t);
  }
  return null;
};
xr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ke
} : {};
xr.filterProps = ["borderRadius"];
wr(yo, bo, vo, So, Eo, To, Co, wo, xo, _o, xr, $o, Oo);
const _r = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = tr(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: nr(r, n)
    });
    return _e(e, e.gap, t);
  }
  return null;
};
_r.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ke
} : {};
_r.filterProps = ["gap"];
const $r = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = tr(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: nr(r, n)
    });
    return _e(e, e.columnGap, t);
  }
  return null;
};
$r.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ke
} : {};
$r.filterProps = ["columnGap"];
const Or = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = tr(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: nr(r, n)
    });
    return _e(e, e.rowGap, t);
  }
  return null;
};
Or.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ke
} : {};
Or.filterProps = ["rowGap"];
const ko = oe({
  prop: "gridColumn"
}), Ro = oe({
  prop: "gridRow"
}), Ao = oe({
  prop: "gridAutoFlow"
}), Po = oe({
  prop: "gridAutoColumns"
}), Io = oe({
  prop: "gridAutoRows"
}), No = oe({
  prop: "gridTemplateColumns"
}), Mo = oe({
  prop: "gridTemplateRows"
}), jo = oe({
  prop: "gridTemplateAreas"
}), Do = oe({
  prop: "gridArea"
});
wr(_r, $r, Or, ko, Ro, Ao, Po, Io, No, Mo, jo, Do);
function Le(e, r) {
  return r === "grey" ? r : e;
}
const Bo = oe({
  prop: "color",
  themeKey: "palette",
  transform: Le
}), Fo = oe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Le
}), Lo = oe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Le
});
wr(Bo, Fo, Lo);
function me(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Vo = oe({
  prop: "width",
  transform: me
}), nt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      const n = e.theme?.breakpoints?.values?.[t] || Sr[t];
      return n ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: me(t)
      };
    };
    return _e(e, e.maxWidth, r);
  }
  return null;
};
nt.filterProps = ["maxWidth"];
const Wo = oe({
  prop: "minWidth",
  transform: me
}), zo = oe({
  prop: "height",
  transform: me
}), Yo = oe({
  prop: "maxHeight",
  transform: me
}), Uo = oe({
  prop: "minHeight",
  transform: me
});
oe({
  prop: "size",
  cssProperty: "width",
  transform: me
});
oe({
  prop: "size",
  cssProperty: "height",
  transform: me
});
const qo = oe({
  prop: "boxSizing"
});
wr(Vo, nt, Wo, zo, Yo, Uo, qo);
const kr = {
  // borders
  border: {
    themeKey: "borders",
    transform: ye
  },
  borderTop: {
    themeKey: "borders",
    transform: ye
  },
  borderRight: {
    themeKey: "borders",
    transform: ye
  },
  borderBottom: {
    themeKey: "borders",
    transform: ye
  },
  borderLeft: {
    themeKey: "borders",
    transform: ye
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: ye
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: xr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Le
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Le
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Le
  },
  // spacing
  p: {
    style: ne
  },
  pt: {
    style: ne
  },
  pr: {
    style: ne
  },
  pb: {
    style: ne
  },
  pl: {
    style: ne
  },
  px: {
    style: ne
  },
  py: {
    style: ne
  },
  padding: {
    style: ne
  },
  paddingTop: {
    style: ne
  },
  paddingRight: {
    style: ne
  },
  paddingBottom: {
    style: ne
  },
  paddingLeft: {
    style: ne
  },
  paddingX: {
    style: ne
  },
  paddingY: {
    style: ne
  },
  paddingInline: {
    style: ne
  },
  paddingInlineStart: {
    style: ne
  },
  paddingInlineEnd: {
    style: ne
  },
  paddingBlock: {
    style: ne
  },
  paddingBlockStart: {
    style: ne
  },
  paddingBlockEnd: {
    style: ne
  },
  m: {
    style: te
  },
  mt: {
    style: te
  },
  mr: {
    style: te
  },
  mb: {
    style: te
  },
  ml: {
    style: te
  },
  mx: {
    style: te
  },
  my: {
    style: te
  },
  margin: {
    style: te
  },
  marginTop: {
    style: te
  },
  marginRight: {
    style: te
  },
  marginBottom: {
    style: te
  },
  marginLeft: {
    style: te
  },
  marginX: {
    style: te
  },
  marginY: {
    style: te
  },
  marginInline: {
    style: te
  },
  marginInlineStart: {
    style: te
  },
  marginInlineEnd: {
    style: te
  },
  marginBlock: {
    style: te
  },
  marginBlockStart: {
    style: te
  },
  marginBlockEnd: {
    style: te
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: _r
  },
  rowGap: {
    style: Or
  },
  columnGap: {
    style: $r
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: me
  },
  maxWidth: {
    style: nt
  },
  minWidth: {
    transform: me
  },
  height: {
    transform: me
  },
  maxHeight: {
    transform: me
  },
  minHeight: {
    transform: me
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Go(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function Ho(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Ko() {
  function e(t, n, o, i) {
    const s = {
      [t]: n,
      theme: o
    }, c = i[t];
    if (!c)
      return {
        [t]: n
      };
    const {
      cssProperty: d = t,
      themeKey: f,
      transform: p,
      style: m
    } = c;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const g = Er(o, f) || {};
    return m ? m(s) : _e(s, n, (y) => {
      let l = yr(g, p, y);
      return y === l && typeof y == "string" && (l = yr(g, p, `${t}${y === "default" ? "" : Ie(y)}`, y)), d === !1 ? l : {
        [d]: l
      };
    });
  }
  function r(t) {
    const {
      sx: n,
      theme: o = {},
      nested: i
    } = t || {};
    if (!n)
      return null;
    const s = o.unstable_sxConfig ?? kr;
    function c(d) {
      let f = d;
      if (typeof d == "function")
        f = d(o);
      else if (typeof d != "object")
        return d;
      if (!f)
        return null;
      const p = co(o.breakpoints), m = Object.keys(p);
      let g = p;
      return Object.keys(f).forEach((v) => {
        const y = Ho(f[v], o);
        if (y != null)
          if (typeof y == "object")
            if (s[v])
              g = Je(g, e(v, y, o, s));
            else {
              const l = _e({
                theme: o
              }, y, (b) => ({
                [v]: b
              }));
              Go(l, y) ? g[v] = r({
                sx: y,
                theme: o,
                nested: !0
              }) : g = Je(g, l);
            }
          else
            g = Je(g, e(v, y, o, s));
      }), !i && o.modularCssLayers ? {
        "@layer sx": kt(o, At(m, g))
      } : kt(o, At(m, g));
    }
    return Array.isArray(n) ? n.map(c) : c(n);
  }
  return r;
}
const We = Ko();
We.filterProps = ["sx"];
function Gr() {
  return Gr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Gr.apply(null, arguments);
}
function Xo(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Jo(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Qo = /* @__PURE__ */ (function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Jo(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Xo(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
})(), ue = "-ms-", br = "-moz-", Y = "-webkit-", sn = "comm", ot = "rule", it = "decl", Zo = "@import", cn = "@keyframes", ei = "@layer", ri = Math.abs, Rr = String.fromCharCode, ti = Object.assign;
function ni(e, r) {
  return ce(e, 0) ^ 45 ? (((r << 2 ^ ce(e, 0)) << 2 ^ ce(e, 1)) << 2 ^ ce(e, 2)) << 2 ^ ce(e, 3) : 0;
}
function ln(e) {
  return e.trim();
}
function oi(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function U(e, r, t) {
  return e.replace(r, t);
}
function Hr(e, r) {
  return e.indexOf(r);
}
function ce(e, r) {
  return e.charCodeAt(r) | 0;
}
function Qe(e, r, t) {
  return e.slice(r, t);
}
function Ee(e) {
  return e.length;
}
function at(e) {
  return e.length;
}
function ur(e, r) {
  return r.push(e), e;
}
function ii(e, r) {
  return e.map(r).join("");
}
var Ar = 1, ze = 1, un = 0, pe = 0, ae = 0, Ye = "";
function Pr(e, r, t, n, o, i, s) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: Ar, column: ze, length: s, return: "" };
}
function Ge(e, r) {
  return ti(Pr("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function ai() {
  return ae;
}
function si() {
  return ae = pe > 0 ? ce(Ye, --pe) : 0, ze--, ae === 10 && (ze = 1, Ar--), ae;
}
function ge() {
  return ae = pe < un ? ce(Ye, pe++) : 0, ze++, ae === 10 && (ze = 1, Ar++), ae;
}
function Ce() {
  return ce(Ye, pe);
}
function dr() {
  return pe;
}
function or(e, r) {
  return Qe(Ye, e, r);
}
function Ze(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function fn(e) {
  return Ar = ze = 1, un = Ee(Ye = e), pe = 0, [];
}
function dn(e) {
  return Ye = "", e;
}
function pr(e) {
  return ln(or(pe - 1, Kr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ci(e) {
  for (; (ae = Ce()) && ae < 33; )
    ge();
  return Ze(e) > 2 || Ze(ae) > 3 ? "" : " ";
}
function li(e, r) {
  for (; --r && ge() && !(ae < 48 || ae > 102 || ae > 57 && ae < 65 || ae > 70 && ae < 97); )
    ;
  return or(e, dr() + (r < 6 && Ce() == 32 && ge() == 32));
}
function Kr(e) {
  for (; ge(); )
    switch (ae) {
      // ] ) " '
      case e:
        return pe;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Kr(ae);
        break;
      // (
      case 40:
        e === 41 && Kr(e);
        break;
      // \
      case 92:
        ge();
        break;
    }
  return pe;
}
function ui(e, r) {
  for (; ge() && e + ae !== 57; )
    if (e + ae === 84 && Ce() === 47)
      break;
  return "/*" + or(r, pe - 1) + "*" + Rr(e === 47 ? e : ge());
}
function fi(e) {
  for (; !Ze(Ce()); )
    ge();
  return or(e, pe);
}
function di(e) {
  return dn(mr("", null, null, null, [""], e = fn(e), 0, [0], e));
}
function mr(e, r, t, n, o, i, s, c, d) {
  for (var f = 0, p = 0, m = s, g = 0, v = 0, y = 0, l = 1, b = 1, _ = 1, R = 0, N = "", w = o, S = i, T = n, I = N; b; )
    switch (y = R, R = ge()) {
      // (
      case 40:
        if (y != 108 && ce(I, m - 1) == 58) {
          Hr(I += U(pr(R), "&", "&\f"), "&\f") != -1 && (_ = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        I += pr(R);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        I += ci(y);
        break;
      // \
      case 92:
        I += li(dr() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ce()) {
          case 42:
          case 47:
            ur(pi(ui(ge(), dr()), r, t), d);
            break;
          default:
            I += "/";
        }
        break;
      // {
      case 123 * l:
        c[f++] = Ee(I) * _;
      // } ; \0
      case 125 * l:
      case 59:
      case 0:
        switch (R) {
          // \0 }
          case 0:
          case 125:
            b = 0;
          // ;
          case 59 + p:
            _ == -1 && (I = U(I, /\f/g, "")), v > 0 && Ee(I) - m && ur(v > 32 ? Nt(I + ";", n, t, m - 1) : Nt(U(I, " ", "") + ";", n, t, m - 2), d);
            break;
          // @ ;
          case 59:
            I += ";";
          // { rule/at-rule
          default:
            if (ur(T = It(I, r, t, f, p, o, c, N, w = [], S = [], m), i), R === 123)
              if (p === 0)
                mr(I, r, T, T, w, i, m, c, S);
              else
                switch (g === 99 && ce(I, 3) === 110 ? 100 : g) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mr(e, T, T, n && ur(It(e, T, T, 0, 0, o, c, N, o, w = [], m), S), o, S, m, c, n ? w : S);
                    break;
                  default:
                    mr(I, T, T, T, [""], S, 0, c, S);
                }
        }
        f = p = v = 0, l = _ = 1, N = I = "", m = s;
        break;
      // :
      case 58:
        m = 1 + Ee(I), v = y;
      default:
        if (l < 1) {
          if (R == 123)
            --l;
          else if (R == 125 && l++ == 0 && si() == 125)
            continue;
        }
        switch (I += Rr(R), R * l) {
          // &
          case 38:
            _ = p > 0 ? 1 : (I += "\f", -1);
            break;
          // ,
          case 44:
            c[f++] = (Ee(I) - 1) * _, _ = 1;
            break;
          // @
          case 64:
            Ce() === 45 && (I += pr(ge())), g = Ce(), p = m = Ee(N = I += fi(dr())), R++;
            break;
          // -
          case 45:
            y === 45 && Ee(I) == 2 && (l = 0);
        }
    }
  return i;
}
function It(e, r, t, n, o, i, s, c, d, f, p) {
  for (var m = o - 1, g = o === 0 ? i : [""], v = at(g), y = 0, l = 0, b = 0; y < n; ++y)
    for (var _ = 0, R = Qe(e, m + 1, m = ri(l = s[y])), N = e; _ < v; ++_)
      (N = ln(l > 0 ? g[_] + " " + R : U(R, /&\f/g, g[_]))) && (d[b++] = N);
  return Pr(e, r, t, o === 0 ? ot : c, d, f, p);
}
function pi(e, r, t) {
  return Pr(e, r, t, sn, Rr(ai()), Qe(e, 2, -2), 0);
}
function Nt(e, r, t, n) {
  return Pr(e, r, t, it, Qe(e, 0, n), Qe(e, n + 1, -1), n);
}
function Ve(e, r) {
  for (var t = "", n = at(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function mi(e, r, t, n) {
  switch (e.type) {
    case ei:
      if (e.children.length) break;
    case Zo:
    case it:
      return e.return = e.return || e.value;
    case sn:
      return "";
    case cn:
      return e.return = e.value + "{" + Ve(e.children, n) + "}";
    case ot:
      e.value = e.props.join(",");
  }
  return Ee(t = Ve(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function hi(e) {
  var r = at(e);
  return function(t, n, o, i) {
    for (var s = "", c = 0; c < r; c++)
      s += e[c](t, n, o, i) || "";
    return s;
  };
}
function gi(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function pn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var yi = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = Ce(), o === 38 && i === 12 && (t[n] = 1), !Ze(i); )
    ge();
  return or(r, pe);
}, bi = function(r, t) {
  var n = -1, o = 44;
  do
    switch (Ze(o)) {
      case 0:
        o === 38 && Ce() === 12 && (t[n] = 1), r[n] += yi(pe - 1, t, n);
        break;
      case 2:
        r[n] += pr(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = Ce() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      // fallthrough
      default:
        r[n] += Rr(o);
    }
  while (o = ge());
  return r;
}, vi = function(r, t) {
  return dn(bi(fn(r), t));
}, Mt = /* @__PURE__ */ new WeakMap(), Si = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Mt.get(n)) && !o) {
      Mt.set(r, !0);
      for (var i = [], s = vi(t, i), c = n.props, d = 0, f = 0; d < s.length; d++)
        for (var p = 0; p < c.length; p++, f++)
          r.props[f] = i[d] ? s[d].replace(/&\f/g, c[p]) : c[p] + " " + s[d];
    }
  }
}, Ei = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function mn(e, r) {
  switch (ni(e, r)) {
    // color-adjust
    case 5103:
      return Y + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Y + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Y + e + br + e + ue + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Y + e + ue + e + e;
    // order
    case 6165:
      return Y + e + ue + "flex-" + e + e;
    // align-items
    case 5187:
      return Y + e + U(e, /(\w+).+(:[^]+)/, Y + "box-$1$2" + ue + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Y + e + ue + "flex-item-" + U(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return Y + e + ue + "flex-line-pack" + U(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return Y + e + ue + U(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Y + e + ue + U(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Y + "box-" + U(e, "-grow", "") + Y + e + ue + U(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Y + U(e, /([^-])(transform)/g, "$1" + Y + "$2") + e;
    // cursor
    case 6187:
      return U(U(U(e, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return U(e, /(image-set\([^]*)/, Y + "$1$`$1");
    // justify-content
    case 4968:
      return U(U(e, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + ue + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Y + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return U(e, /(.+)-inline(.+)/, Y + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ee(e) - 1 - r > 6) switch (ce(e, r + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ce(e, r + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return U(e, /(.+:)(.+)-([^]+)/, "$1" + Y + "$2-$3$1" + br + (ce(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Hr(e, "stretch") ? mn(U(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (ce(e, r + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ce(e, Ee(e) - 3 - (~Hr(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return U(e, ":", ":" + Y) + e;
        // (inline-)?fl(e)x
        case 101:
          return U(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Y + (ce(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Y + "$2$3$1" + ue + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (ce(e, r + 11)) {
        // vertical-l(r)
        case 114:
          return Y + e + ue + U(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Y + e + ue + U(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Y + e + ue + U(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Y + e + ue + e + e;
  }
  return e;
}
var Ti = function(r, t, n, o) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case it:
      r.return = mn(r.value, r.length);
      break;
    case cn:
      return Ve([Ge(r, {
        value: U(r.value, "@", "@" + Y)
      })], o);
    case ot:
      if (r.length) return ii(r.props, function(i) {
        switch (oi(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Ve([Ge(r, {
              props: [U(i, /:(read-\w+)/, ":" + br + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Ve([Ge(r, {
              props: [U(i, /:(plac\w+)/, ":" + Y + "input-$1")]
            }), Ge(r, {
              props: [U(i, /:(plac\w+)/, ":" + br + "$1")]
            }), Ge(r, {
              props: [U(i, /:(plac\w+)/, ue + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Ci = [Ti], wi = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(l) {
      var b = l.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(l), l.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || Ci, i = {}, s, c = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(l) {
      for (var b = l.getAttribute("data-emotion").split(" "), _ = 1; _ < b.length; _++)
        i[b[_]] = !0;
      c.push(l);
    }
  );
  var d, f = [Si, Ei];
  {
    var p, m = [mi, gi(function(l) {
      p.insert(l);
    })], g = hi(f.concat(o, m)), v = function(b) {
      return Ve(di(b), g);
    };
    d = function(b, _, R, N) {
      p = R, v(b ? b + "{" + _.styles + "}" : _.styles), N && (y.inserted[_.name] = !0);
    };
  }
  var y = {
    key: t,
    sheet: new Qo({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: d
  };
  return y.sheet.hydrate(c), y;
}, xi = !0;
function _i(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var hn = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  xi === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, $i = function(r, t, n) {
  hn(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Oi(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var ki = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ri = /[A-Z]|^ms/g, Ai = /_EMO_([^_]+?)_([^]*?)_EMO_/g, gn = function(r) {
  return r.charCodeAt(1) === 45;
}, jt = function(r) {
  return r != null && typeof r != "boolean";
}, zr = /* @__PURE__ */ pn(function(e) {
  return gn(e) ? e : e.replace(Ri, "-$&").toLowerCase();
}), Dt = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Ai, function(n, o, i) {
          return Te = {
            name: o,
            styles: i,
            next: Te
          }, o;
        });
  }
  return ki[r] !== 1 && !gn(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function er(e, r, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var o = t;
      if (o.anim === 1)
        return Te = {
          name: o.name,
          styles: o.styles,
          next: Te
        }, o.name;
      var i = t;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Te = {
              name: s.name,
              styles: s.styles,
              next: Te
            }, s = s.next;
        var c = i.styles + ";";
        return c;
      }
      return Pi(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var d = Te, f = t(e);
        return Te = d, er(e, r, f);
      }
      break;
    }
  }
  var p = t;
  if (r == null)
    return p;
  var m = r[p];
  return m !== void 0 ? m : p;
}
function Pi(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += er(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var s = t[i];
      if (typeof s != "object") {
        var c = s;
        r != null && r[c] !== void 0 ? n += i + "{" + r[c] + "}" : jt(c) && (n += zr(i) + ":" + Dt(i, c) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
        for (var d = 0; d < s.length; d++)
          jt(s[d]) && (n += zr(i) + ":" + Dt(i, s[d]) + ";");
      else {
        var f = er(e, r, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += zr(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
  return n;
}
var Bt = /label:\s*([^\s;{]+)\s*(;|$)/g, Te;
function yn(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Te = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += er(t, r, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += er(t, r, e[c]), n) {
      var d = i;
      o += d[c];
    }
  Bt.lastIndex = 0;
  for (var f = "", p; (p = Bt.exec(o)) !== null; )
    f += "-" + p[1];
  var m = Oi(o) + f;
  return {
    name: m,
    styles: o,
    next: Te
  };
}
var Ii = function(r) {
  return r();
}, Ni = le.useInsertionEffect ? le.useInsertionEffect : !1, Mi = Ni || Ii, bn = /* @__PURE__ */ le.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ wi({
    key: "css"
  }) : null
);
bn.Provider;
var ji = function(r) {
  return /* @__PURE__ */ Mn(function(t, n) {
    var o = jn(bn);
    return r(t, o, n);
  });
}, Di = /* @__PURE__ */ le.createContext({}), Bi = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Fi = /* @__PURE__ */ pn(
  function(e) {
    return Bi.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Li = Fi, Vi = function(r) {
  return r !== "theme";
}, Ft = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Li : Vi;
}, Lt = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(s) {
      return r.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, Wi = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return hn(t, n, o), Mi(function() {
    return $i(t, n, o);
  }), null;
}, zi = function e(r, t) {
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, s;
  t !== void 0 && (i = t.label, s = t.target);
  var c = Lt(r, t, n), d = c || Ft(o), f = !d("as");
  return function() {
    var p = arguments, m = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), p[0] == null || p[0].raw === void 0)
      m.push.apply(m, p);
    else {
      var g = p[0];
      m.push(g[0]);
      for (var v = p.length, y = 1; y < v; y++)
        m.push(p[y], g[y]);
    }
    var l = ji(function(b, _, R) {
      var N = f && b.as || o, w = "", S = [], T = b;
      if (b.theme == null) {
        T = {};
        for (var I in b)
          T[I] = b[I];
        T.theme = le.useContext(Di);
      }
      typeof b.className == "string" ? w = _i(_.registered, S, b.className) : b.className != null && (w = b.className + " ");
      var re = yn(m.concat(S), _.registered, T);
      w += _.key + "-" + re.name, s !== void 0 && (w += " " + s);
      var z = f && c === void 0 ? Ft(N) : d, ee = {};
      for (var H in b)
        f && H === "as" || z(H) && (ee[H] = b[H]);
      return ee.className = w, R && (ee.ref = R), /* @__PURE__ */ le.createElement(le.Fragment, null, /* @__PURE__ */ le.createElement(Wi, {
        cache: _,
        serialized: re,
        isStringTag: typeof N == "string"
      }), /* @__PURE__ */ le.createElement(N, ee));
    });
    return l.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", l.defaultProps = r.defaultProps, l.__emotion_real = l, l.__emotion_base = o, l.__emotion_styles = m, l.__emotion_forwardProp = c, Object.defineProperty(l, "toString", {
      value: function() {
        return "." + s;
      }
    }), l.withComponent = function(b, _) {
      var R = e(b, Gr({}, t, _, {
        shouldForwardProp: Lt(l, _, !0)
      }));
      return R.apply(void 0, m);
    }, l;
  };
}, Yi = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Xr = zi.bind(null);
Yi.forEach(function(e) {
  Xr[e] = Xr(e);
});
function Ui(e, r) {
  const t = Xr(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
function qi(e, r) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}
const Vt = [];
function Pe(e) {
  return Vt[0] = e, yn(Vt);
}
const Gi = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => ({
    ...t,
    [n.key]: n.val
  }), {});
};
function Hi(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5,
    ...o
  } = e, i = Gi(r), s = Object.keys(i);
  function c(g) {
    return `@media (min-width:${typeof r[g] == "number" ? r[g] : g}${t})`;
  }
  function d(g) {
    return `@media (max-width:${(typeof r[g] == "number" ? r[g] : g) - n / 100}${t})`;
  }
  function f(g, v) {
    const y = s.indexOf(v);
    return `@media (min-width:${typeof r[g] == "number" ? r[g] : g}${t}) and (max-width:${(y !== -1 && typeof r[s[y]] == "number" ? r[s[y]] : v) - n / 100}${t})`;
  }
  function p(g) {
    return s.indexOf(g) + 1 < s.length ? f(g, s[s.indexOf(g) + 1]) : c(g);
  }
  function m(g) {
    const v = s.indexOf(g);
    return v === 0 ? c(s[1]) : v === s.length - 1 ? d(s[v]) : f(g, s[s.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: c,
    down: d,
    between: f,
    only: p,
    not: m,
    unit: t,
    ...o
  };
}
const Ki = {
  borderRadius: 4
};
function vn(e = 8, r = tt({
  spacing: e
})) {
  if (e.mui)
    return e;
  const t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = r(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return t.mui = !0, t;
}
function Xi(e, r) {
  const t = this;
  if (t.vars) {
    if (!t.colorSchemes?.[e] || typeof t.getColorSchemeSelector != "function")
      return {};
    let n = t.getColorSchemeSelector(e);
    return n === "&" ? r : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/, "")}) &`), {
      [n]: r
    });
  }
  return t.palette.mode === e ? r : {};
}
function Sn(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, c = Hi(t), d = vn(o);
  let f = he({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: d,
    shape: {
      ...Ki,
      ...i
    }
  }, s);
  return f = ao(f), f.applyStyles = Xi, f = r.reduce((p, m) => he(p, m), f), f.unstable_sxConfig = {
    ...kr,
    ...s?.unstable_sxConfig
  }, f.unstable_sx = function(m) {
    return We({
      sx: m,
      theme: this
    });
  }, f;
}
const Ji = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function st(e, r, t = "Mui") {
  const n = Ji[r];
  return n ? `${t}-${n}` : `${Un.generate(e)}-${r}`;
}
function Qi(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = st(e, o, t);
  }), n;
}
function En(e, r = "") {
  return e.displayName || e.name || r;
}
function Wt(e, r, t) {
  const n = En(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function Zi(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return En(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case gr.ForwardRef:
          return Wt(e, e.render, "ForwardRef");
        case gr.Memo:
          return Wt(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Tn(e) {
  const {
    variants: r,
    ...t
  } = e, n = {
    variants: r,
    style: Pe(t),
    isProcessed: !0
  };
  return n.style === t || r && r.forEach((o) => {
    typeof o.style != "function" && (o.style = Pe(o.style));
  }), n;
}
const ea = Sn();
function Yr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ae(e, r) {
  return r && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${r}{${String(e.styles)}}`), e;
}
function ra(e) {
  return e ? (r, t) => t[e] : null;
}
function ta(e, r, t) {
  e.theme = aa(e.theme) ? t : e.theme[r] || e.theme;
}
function hr(e, r, t) {
  const n = typeof r == "function" ? r(e) : r;
  if (Array.isArray(n))
    return n.flatMap((o) => hr(e, o, t));
  if (Array.isArray(n?.variants)) {
    let o;
    if (n.isProcessed)
      o = t ? Ae(n.style, t) : n.style;
    else {
      const {
        variants: i,
        ...s
      } = n;
      o = t ? Ae(Pe(s), t) : s;
    }
    return Cn(e, n.variants, [o], t);
  }
  return n?.isProcessed ? t ? Ae(Pe(n.style), t) : n.style : t ? Ae(Pe(n), t) : n;
}
function Cn(e, r, t = [], n = void 0) {
  let o;
  e: for (let i = 0; i < r.length; i += 1) {
    const s = r[i];
    if (typeof s.props == "function") {
      if (o ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !s.props(o))
        continue;
    } else
      for (const c in s.props)
        if (e[c] !== s.props[c] && e.ownerState?.[c] !== s.props[c])
          continue e;
    typeof s.style == "function" ? (o ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, t.push(n ? Ae(Pe(s.style(o)), n) : s.style(o))) : t.push(n ? Ae(Pe(s.style), n) : s.style);
  }
  return t;
}
function na(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = ea,
    rootShouldForwardProp: n = Yr,
    slotShouldForwardProp: o = Yr
  } = e;
  function i(c) {
    ta(c, r, t);
  }
  return (c, d = {}) => {
    qi(c, (T) => T.filter((I) => I !== We));
    const {
      name: f,
      slot: p,
      skipVariantsResolver: m,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: v = ra(wn(p)),
      ...y
    } = d, l = f && f.startsWith("Mui") || p ? "components" : "custom", b = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), _ = g || !1;
    let R = Yr;
    p === "Root" || p === "root" ? R = n : p ? R = o : sa(c) && (R = void 0);
    const N = Ui(c, {
      shouldForwardProp: R,
      label: ia(f, p),
      ...y
    }), w = (T) => {
      if (T.__emotion_real === T)
        return T;
      if (typeof T == "function")
        return function(re) {
          return hr(re, T, re.theme.modularCssLayers ? l : void 0);
        };
      if (xe(T)) {
        const I = Tn(T);
        return function(z) {
          return I.variants ? hr(z, I, z.theme.modularCssLayers ? l : void 0) : z.theme.modularCssLayers ? Ae(I.style, l) : I.style;
        };
      }
      return T;
    }, S = (...T) => {
      const I = [], re = T.map(w), z = [];
      if (I.push(i), f && v && z.push(function(O) {
        const M = O.theme.components?.[f]?.styleOverrides;
        if (!M)
          return null;
        const F = {};
        for (const ie in M)
          F[ie] = hr(O, M[ie], O.theme.modularCssLayers ? "theme" : void 0);
        return v(O, F);
      }), f && !b && z.push(function(O) {
        const M = O.theme?.components?.[f]?.variants;
        return M ? Cn(O, M, [], O.theme.modularCssLayers ? "theme" : void 0) : null;
      }), _ || z.push(We), Array.isArray(re[0])) {
        const a = re.shift(), O = new Array(I.length).fill(""), C = new Array(z.length).fill("");
        let M;
        M = [...O, ...a, ...C], M.raw = [...O, ...a.raw, ...C], I.unshift(M);
      }
      const ee = [...I, ...re, ...z], H = N(...ee);
      return c.muiName && (H.muiName = c.muiName), process.env.NODE_ENV !== "production" && (H.displayName = oa(f, p, c)), H;
    };
    return N.withConfig && (S.withConfig = N.withConfig), S;
  };
}
function oa(e, r, t) {
  return e ? `${e}${Ie(r || "")}` : `Styled(${Zi(t)})`;
}
function ia(e, r) {
  let t;
  return process.env.NODE_ENV !== "production" && e && (t = `${e}-${wn(r || "Root")}`), t;
}
function aa(e) {
  for (const r in e)
    return !1;
  return !0;
}
function sa(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function wn(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Jr(e, r, t = !1) {
  const n = {
    ...r
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const i = o;
      if (i === "components" || i === "slots")
        n[i] = {
          ...e[i],
          ...n[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const s = e[i], c = r[i];
        if (!c)
          n[i] = s || {};
        else if (!s)
          n[i] = c;
        else {
          n[i] = {
            ...c
          };
          for (const d in s)
            if (Object.prototype.hasOwnProperty.call(s, d)) {
              const f = d;
              n[i][f] = Jr(s[f], c[f], t);
            }
        }
      } else i === "className" && t && r.className ? n.className = nn(e?.className, r?.className) : i === "style" && t && r.style ? n.style = {
        ...e?.style,
        ...r?.style
      } : n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
function ca(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
function ct(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), ca(e, r, t);
}
function la(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Oe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Oe(la(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(t))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : $e(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : $e(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const ua = (e) => {
  const r = Oe(e);
  return r.values.slice(0, 3).map((t, n) => r.type.includes("hsl") && n !== 0 ? `${t}%` : t).join(" ");
}, Ke = (e, r) => {
  try {
    return ua(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
function Ir(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.includes("color") ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function xn(e) {
  e = Oe(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), s = (f, p = (f + t / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let c = "rgb";
  const d = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", d.push(r[3])), Ir({
    type: c,
    values: d
  });
}
function Qr(e) {
  e = Oe(e);
  let r = e.type === "hsl" || e.type === "hsla" ? Oe(xn(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function zt(e, r) {
  const t = Qr(e), n = Qr(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function _n(e, r) {
  return e = Oe(e), r = ct(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, Ir(e);
}
function Re(e, r, t) {
  try {
    return _n(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Nr(e, r) {
  if (e = Oe(e), r = ct(r), e.type.includes("hsl"))
    e.values[2] *= 1 - r;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return Ir(e);
}
function K(e, r, t) {
  try {
    return Nr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Mr(e, r) {
  if (e = Oe(e), r = ct(r), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.includes("rgb"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return Ir(e);
}
function X(e, r, t) {
  try {
    return Mr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function fa(e, r = 0.15) {
  return Qr(e) > 0.5 ? Nr(e, r) : Mr(e, r);
}
function fr(e, r, t) {
  try {
    return fa(e, r);
  } catch {
    return e;
  }
}
const da = /* @__PURE__ */ le.createContext(void 0);
process.env.NODE_ENV !== "production" && (W.node, W.object);
function pa(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  if (!r || !r.components || !r.components[t])
    return n;
  const o = r.components[t];
  return o.defaultProps ? Jr(o.defaultProps, n, r.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Jr(o, n, r.components.mergeClassNameAndStyle) : n;
}
function ma({
  props: e,
  name: r
}) {
  const t = le.useContext(da);
  return pa({
    props: e,
    name: r,
    theme: {
      components: t
    }
  });
}
const Yt = {
  theme: void 0
};
function ha(e) {
  let r, t;
  return function(o) {
    let i = r;
    return (i === void 0 || o.theme !== t) && (Yt.theme = o.theme, i = Tn(e(Yt)), r = i, t = o.theme), i;
  };
}
function ga(e = "") {
  function r(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${r(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${r(...o)})`;
}
const Ut = (e, r, t, n = []) => {
  let o = e;
  r.forEach((i, s) => {
    s === r.length - 1 ? Array.isArray(o) ? o[Number(i)] = t : o && typeof o == "object" && (o[i] = t) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, ya = (e, r, t) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([c, d]) => {
      (!t || t && !t([...i, c])) && d != null && (typeof d == "object" && Object.keys(d).length > 0 ? n(d, [...i, c], Array.isArray(d) ? [...s, c] : s) : r([...i, c], d, s));
    });
  }
  n(e);
}, ba = (e, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function Ur(e, r) {
  const {
    prefix: t,
    shouldSkipGeneratingVar: n
  } = r || {}, o = {}, i = {}, s = {};
  return ya(
    e,
    (c, d, f) => {
      if ((typeof d == "string" || typeof d == "number") && (!n || !n(c, d))) {
        const p = `--${t ? `${t}-` : ""}${c.join("-")}`, m = ba(c, d);
        Object.assign(o, {
          [p]: m
        }), Ut(i, c, `var(${p})`, f), Ut(s, c, `var(${p}, ${m})`, f);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function va(e, r = {}) {
  const {
    getSelector: t = _,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = r, {
    colorSchemes: s = {},
    components: c,
    defaultColorScheme: d = "light",
    ...f
  } = e, {
    vars: p,
    css: m,
    varsWithDefaults: g
  } = Ur(f, r);
  let v = g;
  const y = {}, {
    [d]: l,
    ...b
  } = s;
  if (Object.entries(b || {}).forEach(([w, S]) => {
    const {
      vars: T,
      css: I,
      varsWithDefaults: re
    } = Ur(S, r);
    v = he(v, re), y[w] = {
      css: I,
      vars: T
    };
  }), l) {
    const {
      css: w,
      vars: S,
      varsWithDefaults: T
    } = Ur(l, r);
    v = he(v, T), y[d] = {
      css: w,
      vars: S
    };
  }
  function _(w, S) {
    let T = o;
    if (o === "class" && (T = ".%s"), o === "data" && (T = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (T = `[${o}="%s"]`), w) {
      if (T === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${s[w]?.palette?.mode || w})`]: {
            ":root": S
          }
        };
      if (T)
        return e.defaultColorScheme === w ? `:root, ${T.replace("%s", String(w))}` : T.replace("%s", String(w));
    }
    return ":root";
  }
  return {
    vars: v,
    generateThemeVars: () => {
      let w = {
        ...p
      };
      return Object.entries(y).forEach(([, {
        vars: S
      }]) => {
        w = he(w, S);
      }), w;
    },
    generateStyleSheets: () => {
      const w = [], S = e.defaultColorScheme || "light";
      function T(z, ee) {
        Object.keys(ee).length && w.push(typeof z == "string" ? {
          [z]: {
            ...ee
          }
        } : z);
      }
      T(t(void 0, {
        ...m
      }), m);
      const {
        [S]: I,
        ...re
      } = y;
      if (I) {
        const {
          css: z
        } = I, ee = s[S]?.palette?.mode, H = !n && ee ? {
          colorScheme: ee,
          ...z
        } : {
          ...z
        };
        T(t(S, {
          ...H
        }), H);
      }
      return Object.entries(re).forEach(([z, {
        css: ee
      }]) => {
        const H = s[z]?.palette?.mode, a = !n && H ? {
          colorScheme: H,
          ...ee
        } : {
          ...ee
        };
        T(t(z, {
          ...a
        }), a);
      }), i && w.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), w;
    }
  };
}
function Sa(e) {
  return function(t) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && t !== "light" && t !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`), `@media (prefers-color-scheme: ${t})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${t}"] &` : e === "class" ? `.${t} &` : e === "data" ? `[data-${t}] &` : `${e.replace("%s", t)} &` : "&";
  };
}
const rr = {
  black: "#000",
  white: "#fff"
}, Ea = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Me = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, je = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, He = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, De = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Be = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Fe = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function $n() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: rr.white,
      default: rr.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const On = $n();
function kn() {
  return {
    text: {
      primary: rr.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: rr.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Zr = kn();
function qt(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = Mr(e.main, o) : r === "dark" && (e.dark = Nr(e.main, i)));
}
function Gt(e, r, t, n, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  r[t] || (r.hasOwnProperty(n) ? r[t] = r[n] : t === "light" ? r.light = `color-mix(in ${e}, ${r.main}, #fff ${(i * 100).toFixed(0)}%)` : t === "dark" && (r.dark = `color-mix(in ${e}, ${r.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Ta(e = "light") {
  return e === "dark" ? {
    main: De[200],
    light: De[50],
    dark: De[400]
  } : {
    main: De[700],
    light: De[400],
    dark: De[800]
  };
}
function Ca(e = "light") {
  return e === "dark" ? {
    main: Me[200],
    light: Me[50],
    dark: Me[400]
  } : {
    main: Me[500],
    light: Me[300],
    dark: Me[700]
  };
}
function wa(e = "light") {
  return e === "dark" ? {
    main: je[500],
    light: je[300],
    dark: je[700]
  } : {
    main: je[700],
    light: je[400],
    dark: je[800]
  };
}
function xa(e = "light") {
  return e === "dark" ? {
    main: Be[400],
    light: Be[300],
    dark: Be[700]
  } : {
    main: Be[700],
    light: Be[500],
    dark: Be[900]
  };
}
function _a(e = "light") {
  return e === "dark" ? {
    main: Fe[400],
    light: Fe[300],
    dark: Fe[700]
  } : {
    main: Fe[800],
    light: Fe[500],
    dark: Fe[900]
  };
}
function $a(e = "light") {
  return e === "dark" ? {
    main: He[400],
    light: He[300],
    dark: He[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: He[500],
    dark: He[900]
  };
}
function Oa(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function lt(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || Ta(r), c = e.secondary || Ca(r), d = e.error || wa(r), f = e.info || xa(r), p = e.success || _a(r), m = e.warning || $a(r);
  function g(b) {
    if (o)
      return Oa(b);
    const _ = zt(b, Zr.text.primary) >= t ? Zr.text.primary : On.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const R = zt(b, _);
      R < 3 && console.error([`MUI: The contrast ratio of ${R}:1 for ${_} on ${b}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return _;
  }
  const v = ({
    color: b,
    name: _,
    mainShade: R = 500,
    lightShade: N = 300,
    darkShade: w = 700
  }) => {
    if (b = {
      ...b
    }, !b.main && b[R] && (b.main = b[R]), !b.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${_ ? ` (${_})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : $e(11, _ ? ` (${_})` : "", R));
    if (typeof b.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${_ ? ` (${_})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(b.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : $e(12, _ ? ` (${_})` : "", JSON.stringify(b.main)));
    return o ? (Gt(o, b, "light", N, n), Gt(o, b, "dark", w, n)) : (qt(b, "light", N, n), qt(b, "dark", w, n)), b.contrastText || (b.contrastText = g(b.main)), b;
  };
  let y;
  return r === "light" ? y = $n() : r === "dark" && (y = kn()), process.env.NODE_ENV !== "production" && (y || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), he({
    // A collection of common colors.
    common: {
      ...rr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: v({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: v({
      color: c,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: v({
      color: d,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: v({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: v({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: v({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: Ea,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: g,
    // Generate a rich color object.
    augmentColor: v,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...y
  }, i);
}
function ka(e) {
  const r = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (r[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), r;
}
function Ra(e, r) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...r
  };
}
function Aa(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ht = {
  textTransform: "uppercase"
}, Kt = '"Roboto", "Helvetica", "Arial", sans-serif';
function Pa(e, r) {
  const {
    fontFamily: t = Kt,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: p,
    ...m
  } = typeof r == "function" ? r(e) : r;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, v = p || ((b) => `${b / d * g}rem`), y = (b, _, R, N, w) => ({
    fontFamily: t,
    fontWeight: b,
    fontSize: v(_),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...t === Kt ? {
      letterSpacing: `${Aa(N / _)}em`
    } : {},
    ...w,
    ...f
  }), l = {
    h1: y(o, 96, 1.167, -1.5),
    h2: y(o, 60, 1.2, -0.5),
    h3: y(i, 48, 1.167, 0),
    h4: y(i, 34, 1.235, 0.25),
    h5: y(i, 24, 1.334, 0),
    h6: y(s, 20, 1.6, 0.15),
    subtitle1: y(i, 16, 1.75, 0.15),
    subtitle2: y(s, 14, 1.57, 0.1),
    body1: y(i, 16, 1.5, 0.15),
    body2: y(i, 14, 1.43, 0.15),
    button: y(s, 14, 1.75, 0.4, Ht),
    caption: y(i, 12, 1.66, 0.4),
    overline: y(i, 12, 2.66, 1, Ht),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return he({
    htmlFontSize: d,
    pxToRem: v,
    fontFamily: t,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: c,
    ...l
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Ia = 0.2, Na = 0.14, Ma = 0.12;
function Z(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ia})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Na})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ma})`].join(",");
}
const ja = ["none", Z(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Z(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Z(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Z(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Z(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Z(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Z(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Z(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Z(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Z(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Z(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Z(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Z(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Z(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Z(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Z(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Z(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Z(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Z(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Z(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Z(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Z(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Z(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Z(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Da = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ba = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Xt(e) {
  return `${Math.round(e)}ms`;
}
function Fa(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function La(e) {
  const r = {
    ...Da,
    ...e.easing
  }, t = {
    ...Ba,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Fa,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = t.standard,
        easing: c = r.easeInOut,
        delay: d = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (g) => typeof g == "string", m = (g) => !Number.isNaN(parseFloat(g));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !p(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), p(c) || console.error('MUI: Argument "easing" must be a string.'), !m(d) && !p(d) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof s == "string" ? s : Xt(s)} ${c} ${typeof d == "string" ? d : Xt(d)}`).join(",");
    },
    ...e,
    easing: r,
    duration: t
  };
}
const Va = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Wa(e) {
  return xe(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Rn(e = {}) {
  const r = {
    ...e
  };
  function t(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, c] = o[i];
      !Wa(c) || s.startsWith("unstable_") ? delete n[s] : xe(c) && (n[s] = {
        ...c
      }, t(n[s]));
    }
  }
  return t(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Jt(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const za = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const r = e.match(/\d*\.?\d+/g);
  if (!r)
    return 0;
  let t = 0;
  for (let n = 0; n < r.length; n += 1)
    t += +r[n];
  return t;
};
function Ya(e) {
  Object.assign(e, {
    alpha(r, t) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${r} l c h / ${typeof t == "string" ? `calc(${t})` : t})` : n.vars ? `rgba(${r.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof t == "string" ? `calc(${t})` : t})` : _n(r, za(t));
    },
    lighten(r, t) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${r}, #fff ${Jt(t)})` : Mr(r, t);
    },
    darken(r, t) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${r}, #000 ${Jt(t)})` : Nr(r, t);
    }
  });
}
function et(e = {}, ...r) {
  const {
    breakpoints: t,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: c = {},
    shape: d,
    colorSpace: f,
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : $e(20));
  const m = lt({
    ...i,
    colorSpace: f
  }), g = Sn(e);
  let v = he(g, {
    mixins: Ra(g.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ja.slice(),
    typography: Pa(m, c),
    transitions: La(s),
    zIndex: {
      ...Va
    }
  });
  if (v = he(v, p), v = r.reduce((y, l) => he(y, l), v), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], l = (b, _) => {
      let R;
      for (R in b) {
        const N = b[R];
        if (y.includes(R) && Object.keys(N).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const w = st("", R);
            console.error([`MUI: The \`${_}\` component increases the CSS specificity of the \`${R}\` internal state.`, "You can not override it like this: ", JSON.stringify(b, null, 2), "", `Instead, you need to use the '&.${w}' syntax:`, JSON.stringify({
              root: {
                [`&.${w}`]: N
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          b[R] = {};
        }
      }
    };
    Object.keys(v.components).forEach((b) => {
      const _ = v.components[b].styleOverrides;
      _ && b.startsWith("Mui") && l(_, b);
    });
  }
  return v.unstable_sxConfig = {
    ...kr,
    ...p?.unstable_sxConfig
  }, v.unstable_sx = function(l) {
    return We({
      sx: l,
      theme: this
    });
  }, v.toRuntimeSource = Rn, Ya(v), v;
}
function Ua(e) {
  let r;
  return e < 1 ? r = 5.11916 * e ** 2 : r = 4.5 * Math.log(e + 1) + 2, Math.round(r * 10) / 1e3;
}
const qa = [...Array(25)].map((e, r) => {
  if (r === 0)
    return "none";
  const t = Ua(r);
  return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
});
function An(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Pn(e) {
  return e === "dark" ? qa : [];
}
function Ga(e) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: t,
    overlays: n,
    colorSpace: o,
    ...i
  } = e, s = lt({
    ...r,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...An(s.mode),
      ...t
    },
    overlays: n || Pn(s.mode),
    ...i
  };
}
function Ha(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const Ka = (e) => [...[...Array(25)].map((r, t) => `--${e ? `${e}-` : ""}overlays-${t}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Xa = (e) => (r, t) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === r) {
    if (r === "dark") {
      const s = {};
      return Ka(e.cssVarPrefix).forEach((c) => {
        s[c] = t[c], delete t[c];
      }), i === "media" ? {
        [n]: t,
        "@media (prefers-color-scheme: dark)": {
          [n]: s
        }
      } : i ? {
        [i.replace("%s", r)]: s,
        [`${n}, ${i.replace("%s", r)}`]: t
      } : {
        [n]: {
          ...t,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(r))}`;
  } else if (r) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(r)})`]: {
          [n]: t
        }
      };
    if (i)
      return i.replace("%s", String(r));
  }
  return n;
};
function Ja(e, r) {
  r.forEach((t) => {
    e[t] || (e[t] = {});
  });
}
function h(e, r, t) {
  !e[r] && t && (e[r] = t);
}
function Xe(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : xn(e);
}
function we(e, r) {
  `${r}Channel` in e || (e[`${r}Channel`] = Ke(Xe(e[r]), `MUI: Can't create \`palette.${r}Channel\` because \`palette.${r}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${r}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Qa(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Se = (e) => {
  try {
    return e();
  } catch {
  }
}, Za = (e = "mui") => ga(e);
function qr(e, r, t, n, o) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    r[o] = Ga({
      ...t,
      palette: {
        mode: i,
        ...t?.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: s,
    ...c
  } = et({
    ...n,
    palette: {
      mode: i,
      ...t?.palette
    },
    colorSpace: e
  });
  return r[o] = {
    ...t,
    palette: s,
    opacity: {
      ...An(i),
      ...t?.opacity
    },
    overlays: t?.overlays || Pn(i)
  }, c;
}
function es(e = {}, ...r) {
  const {
    colorSchemes: t = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: c = Ha,
    colorSchemeSelector: d = t.light && t.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...p
  } = e, m = Object.keys(t)[0], g = n || (t.light && m !== "light" ? "light" : m), v = Za(i), {
    [g]: y,
    light: l,
    dark: b,
    ..._
  } = t, R = {
    ..._
  };
  let N = y;
  if ((g === "dark" && !("dark" in t) || g === "light" && !("light" in t)) && (N = !0), !N)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${g}\` option is either missing or invalid.` : $e(21, g));
  let w;
  s && (w = "oklch");
  const S = qr(w, R, N, p, g);
  l && !R.light && qr(w, R, l, void 0, "light"), b && !R.dark && qr(w, R, b, void 0, "dark");
  let T = {
    defaultColorScheme: g,
    ...S,
    cssVarPrefix: i,
    colorSchemeSelector: d,
    rootSelector: f,
    getCssVar: v,
    colorSchemes: R,
    font: {
      ...ka(S.typography),
      ...S.font
    },
    spacing: Qa(p.spacing)
  };
  Object.keys(T.colorSchemes).forEach((H) => {
    const a = T.colorSchemes[H].palette, O = (M) => {
      const F = M.split("-"), ie = F[1], fe = F[2];
      return v(M, a[ie][fe]);
    };
    a.mode === "light" && (h(a.common, "background", "#fff"), h(a.common, "onBackground", "#000")), a.mode === "dark" && (h(a.common, "background", "#000"), h(a.common, "onBackground", "#fff"));
    function C(M, F, ie) {
      if (w) {
        let fe;
        return M === Re && (fe = `transparent ${((1 - ie) * 100).toFixed(0)}%`), M === K && (fe = `#000 ${(ie * 100).toFixed(0)}%`), M === X && (fe = `#fff ${(ie * 100).toFixed(0)}%`), `color-mix(in ${w}, ${F}, ${fe})`;
      }
      return M(F, ie);
    }
    if (Ja(a, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), a.mode === "light") {
      h(a.Alert, "errorColor", C(K, a.error.light, 0.6)), h(a.Alert, "infoColor", C(K, a.info.light, 0.6)), h(a.Alert, "successColor", C(K, a.success.light, 0.6)), h(a.Alert, "warningColor", C(K, a.warning.light, 0.6)), h(a.Alert, "errorFilledBg", O("palette-error-main")), h(a.Alert, "infoFilledBg", O("palette-info-main")), h(a.Alert, "successFilledBg", O("palette-success-main")), h(a.Alert, "warningFilledBg", O("palette-warning-main")), h(a.Alert, "errorFilledColor", Se(() => a.getContrastText(a.error.main))), h(a.Alert, "infoFilledColor", Se(() => a.getContrastText(a.info.main))), h(a.Alert, "successFilledColor", Se(() => a.getContrastText(a.success.main))), h(a.Alert, "warningFilledColor", Se(() => a.getContrastText(a.warning.main))), h(a.Alert, "errorStandardBg", C(X, a.error.light, 0.9)), h(a.Alert, "infoStandardBg", C(X, a.info.light, 0.9)), h(a.Alert, "successStandardBg", C(X, a.success.light, 0.9)), h(a.Alert, "warningStandardBg", C(X, a.warning.light, 0.9)), h(a.Alert, "errorIconColor", O("palette-error-main")), h(a.Alert, "infoIconColor", O("palette-info-main")), h(a.Alert, "successIconColor", O("palette-success-main")), h(a.Alert, "warningIconColor", O("palette-warning-main")), h(a.AppBar, "defaultBg", O("palette-grey-100")), h(a.Avatar, "defaultBg", O("palette-grey-400")), h(a.Button, "inheritContainedBg", O("palette-grey-300")), h(a.Button, "inheritContainedHoverBg", O("palette-grey-A100")), h(a.Chip, "defaultBorder", O("palette-grey-400")), h(a.Chip, "defaultAvatarColor", O("palette-grey-700")), h(a.Chip, "defaultIconColor", O("palette-grey-700")), h(a.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), h(a.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), h(a.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), h(a.LinearProgress, "primaryBg", C(X, a.primary.main, 0.62)), h(a.LinearProgress, "secondaryBg", C(X, a.secondary.main, 0.62)), h(a.LinearProgress, "errorBg", C(X, a.error.main, 0.62)), h(a.LinearProgress, "infoBg", C(X, a.info.main, 0.62)), h(a.LinearProgress, "successBg", C(X, a.success.main, 0.62)), h(a.LinearProgress, "warningBg", C(X, a.warning.main, 0.62)), h(a.Skeleton, "bg", w ? C(Re, a.text.primary, 0.11) : `rgba(${O("palette-text-primaryChannel")} / 0.11)`), h(a.Slider, "primaryTrack", C(X, a.primary.main, 0.62)), h(a.Slider, "secondaryTrack", C(X, a.secondary.main, 0.62)), h(a.Slider, "errorTrack", C(X, a.error.main, 0.62)), h(a.Slider, "infoTrack", C(X, a.info.main, 0.62)), h(a.Slider, "successTrack", C(X, a.success.main, 0.62)), h(a.Slider, "warningTrack", C(X, a.warning.main, 0.62));
      const M = w ? C(K, a.background.default, 0.6825) : fr(a.background.default, 0.8);
      h(a.SnackbarContent, "bg", M), h(a.SnackbarContent, "color", Se(() => w ? Zr.text.primary : a.getContrastText(M))), h(a.SpeedDialAction, "fabHoverBg", fr(a.background.paper, 0.15)), h(a.StepConnector, "border", O("palette-grey-400")), h(a.StepContent, "border", O("palette-grey-400")), h(a.Switch, "defaultColor", O("palette-common-white")), h(a.Switch, "defaultDisabledColor", O("palette-grey-100")), h(a.Switch, "primaryDisabledColor", C(X, a.primary.main, 0.62)), h(a.Switch, "secondaryDisabledColor", C(X, a.secondary.main, 0.62)), h(a.Switch, "errorDisabledColor", C(X, a.error.main, 0.62)), h(a.Switch, "infoDisabledColor", C(X, a.info.main, 0.62)), h(a.Switch, "successDisabledColor", C(X, a.success.main, 0.62)), h(a.Switch, "warningDisabledColor", C(X, a.warning.main, 0.62)), h(a.TableCell, "border", C(X, C(Re, a.divider, 1), 0.88)), h(a.Tooltip, "bg", C(Re, a.grey[700], 0.92));
    }
    if (a.mode === "dark") {
      h(a.Alert, "errorColor", C(X, a.error.light, 0.6)), h(a.Alert, "infoColor", C(X, a.info.light, 0.6)), h(a.Alert, "successColor", C(X, a.success.light, 0.6)), h(a.Alert, "warningColor", C(X, a.warning.light, 0.6)), h(a.Alert, "errorFilledBg", O("palette-error-dark")), h(a.Alert, "infoFilledBg", O("palette-info-dark")), h(a.Alert, "successFilledBg", O("palette-success-dark")), h(a.Alert, "warningFilledBg", O("palette-warning-dark")), h(a.Alert, "errorFilledColor", Se(() => a.getContrastText(a.error.dark))), h(a.Alert, "infoFilledColor", Se(() => a.getContrastText(a.info.dark))), h(a.Alert, "successFilledColor", Se(() => a.getContrastText(a.success.dark))), h(a.Alert, "warningFilledColor", Se(() => a.getContrastText(a.warning.dark))), h(a.Alert, "errorStandardBg", C(K, a.error.light, 0.9)), h(a.Alert, "infoStandardBg", C(K, a.info.light, 0.9)), h(a.Alert, "successStandardBg", C(K, a.success.light, 0.9)), h(a.Alert, "warningStandardBg", C(K, a.warning.light, 0.9)), h(a.Alert, "errorIconColor", O("palette-error-main")), h(a.Alert, "infoIconColor", O("palette-info-main")), h(a.Alert, "successIconColor", O("palette-success-main")), h(a.Alert, "warningIconColor", O("palette-warning-main")), h(a.AppBar, "defaultBg", O("palette-grey-900")), h(a.AppBar, "darkBg", O("palette-background-paper")), h(a.AppBar, "darkColor", O("palette-text-primary")), h(a.Avatar, "defaultBg", O("palette-grey-600")), h(a.Button, "inheritContainedBg", O("palette-grey-800")), h(a.Button, "inheritContainedHoverBg", O("palette-grey-700")), h(a.Chip, "defaultBorder", O("palette-grey-700")), h(a.Chip, "defaultAvatarColor", O("palette-grey-300")), h(a.Chip, "defaultIconColor", O("palette-grey-300")), h(a.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), h(a.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), h(a.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), h(a.LinearProgress, "primaryBg", C(K, a.primary.main, 0.5)), h(a.LinearProgress, "secondaryBg", C(K, a.secondary.main, 0.5)), h(a.LinearProgress, "errorBg", C(K, a.error.main, 0.5)), h(a.LinearProgress, "infoBg", C(K, a.info.main, 0.5)), h(a.LinearProgress, "successBg", C(K, a.success.main, 0.5)), h(a.LinearProgress, "warningBg", C(K, a.warning.main, 0.5)), h(a.Skeleton, "bg", w ? C(Re, a.text.primary, 0.13) : `rgba(${O("palette-text-primaryChannel")} / 0.13)`), h(a.Slider, "primaryTrack", C(K, a.primary.main, 0.5)), h(a.Slider, "secondaryTrack", C(K, a.secondary.main, 0.5)), h(a.Slider, "errorTrack", C(K, a.error.main, 0.5)), h(a.Slider, "infoTrack", C(K, a.info.main, 0.5)), h(a.Slider, "successTrack", C(K, a.success.main, 0.5)), h(a.Slider, "warningTrack", C(K, a.warning.main, 0.5));
      const M = w ? C(X, a.background.default, 0.985) : fr(a.background.default, 0.98);
      h(a.SnackbarContent, "bg", M), h(a.SnackbarContent, "color", Se(() => w ? On.text.primary : a.getContrastText(M))), h(a.SpeedDialAction, "fabHoverBg", fr(a.background.paper, 0.15)), h(a.StepConnector, "border", O("palette-grey-600")), h(a.StepContent, "border", O("palette-grey-600")), h(a.Switch, "defaultColor", O("palette-grey-300")), h(a.Switch, "defaultDisabledColor", O("palette-grey-600")), h(a.Switch, "primaryDisabledColor", C(K, a.primary.main, 0.55)), h(a.Switch, "secondaryDisabledColor", C(K, a.secondary.main, 0.55)), h(a.Switch, "errorDisabledColor", C(K, a.error.main, 0.55)), h(a.Switch, "infoDisabledColor", C(K, a.info.main, 0.55)), h(a.Switch, "successDisabledColor", C(K, a.success.main, 0.55)), h(a.Switch, "warningDisabledColor", C(K, a.warning.main, 0.55)), h(a.TableCell, "border", C(K, C(Re, a.divider, 1), 0.68)), h(a.Tooltip, "bg", C(Re, a.grey[700], 0.92));
    }
    we(a.background, "default"), we(a.background, "paper"), we(a.common, "background"), we(a.common, "onBackground"), we(a, "divider"), Object.keys(a).forEach((M) => {
      const F = a[M];
      M !== "tonalOffset" && F && typeof F == "object" && (F.main && h(a[M], "mainChannel", Ke(Xe(F.main))), F.light && h(a[M], "lightChannel", Ke(Xe(F.light))), F.dark && h(a[M], "darkChannel", Ke(Xe(F.dark))), F.contrastText && h(a[M], "contrastTextChannel", Ke(Xe(F.contrastText))), M === "text" && (we(a[M], "primary"), we(a[M], "secondary")), M === "action" && (F.active && we(a[M], "active"), F.selected && we(a[M], "selected")));
    });
  }), T = r.reduce((H, a) => he(H, a), T);
  const I = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: c,
    getSelector: Xa(T),
    enableContrastVars: s
  }, {
    vars: re,
    generateThemeVars: z,
    generateStyleSheets: ee
  } = va(T, I);
  return T.vars = re, Object.entries(T.colorSchemes[T.defaultColorScheme]).forEach(([H, a]) => {
    T[H] = a;
  }), T.generateThemeVars = z, T.generateStyleSheets = ee, T.generateSpacing = function() {
    return vn(p.spacing, tt(this));
  }, T.getColorSchemeSelector = Sa(d), T.spacing = T.generateSpacing(), T.shouldSkipGeneratingVar = c, T.unstable_sxConfig = {
    ...kr,
    ...p?.unstable_sxConfig
  }, T.unstable_sx = function(a) {
    return We({
      sx: a,
      theme: this
    });
  }, T.toRuntimeSource = Rn, T;
}
function Qt(e, r, t) {
  e.colorSchemes && t && (e.colorSchemes[r] = {
    ...t !== !0 && t,
    palette: lt({
      ...t === !0 ? {} : t.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function rs(e = {}, ...r) {
  const {
    palette: t,
    cssVariables: n = !1,
    colorSchemes: o = t ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = t?.mode,
    ...s
  } = e, c = i || "light", d = o?.[c], f = {
    ...o,
    ...t ? {
      [c]: {
        ...typeof d != "boolean" && d,
        palette: t
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return et(e, ...r);
    let p = t;
    "palette" in e || f[c] && (f[c] !== !0 ? p = f[c].palette : c === "dark" && (p = {
      mode: "dark"
    }));
    const m = et({
      ...e,
      palette: p
    }, ...r);
    return m.defaultColorScheme = c, m.colorSchemes = f, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: m.palette
    }, Qt(m, "dark", f.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: m.palette
    }, Qt(m, "light", f.light)), m;
  }
  return !t && !("light" in f) && c === "light" && (f.light = !0), es({
    ...s,
    colorSchemes: f,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...r);
}
const ts = rs(), ns = "$$material";
function os(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const is = (e) => os(e) && e !== "classes", as = na({
  themeId: ns,
  defaultTheme: ts,
  rootShouldForwardProp: is
}), ss = ha;
process.env.NODE_ENV !== "production" && (W.node, W.object.isRequired);
function cs(e) {
  return ma(e);
}
function ls(e) {
  return st("MuiSvgIcon", e);
}
Qi("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const us = (e) => {
  const {
    color: r,
    fontSize: t,
    classes: n
  } = e, o = {
    root: ["root", r !== "inherit" && `color${Ie(r)}`, `fontSize${Ie(t)}`]
  };
  return eo(o, ls, n);
}, fs = as("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, t.color !== "inherit" && r[`color${Ie(t.color)}`], r[`fontSize${Ie(t.fontSize)}`]];
  }
})(ss(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  transition: e.transitions?.create?.("fill", {
    duration: (e.vars ?? e).transitions?.duration?.shorter
  }),
  variants: [
    {
      props: (r) => !r.hasSvgAsChild,
      style: {
        // the <svg> will define the property that has `currentColor`
        // for example heroicons uses fill="none" and stroke="currentColor"
        fill: "currentColor"
      }
    },
    {
      props: {
        fontSize: "inherit"
      },
      style: {
        fontSize: "inherit"
      }
    },
    {
      props: {
        fontSize: "small"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(20) || "1.25rem"
      }
    },
    {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(24) || "1.5rem"
      }
    },
    {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(35) || "2.1875rem"
      }
    },
    // TODO v5 deprecate color prop, v6 remove for sx
    ...Object.entries((e.vars ?? e).palette).filter(([, r]) => r && r.main).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        color: (e.vars ?? e).palette?.[r]?.main
      }
    })),
    {
      props: {
        color: "action"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.active
      }
    },
    {
      props: {
        color: "disabled"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.disabled
      }
    },
    {
      props: {
        color: "inherit"
      },
      style: {
        color: void 0
      }
    }
  ]
}))), vr = /* @__PURE__ */ le.forwardRef(function(r, t) {
  const n = cs({
    props: r,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: c = "svg",
    fontSize: d = "medium",
    htmlColor: f,
    inheritViewBox: p = !1,
    titleAccess: m,
    viewBox: g = "0 0 24 24",
    ...v
  } = n, y = /* @__PURE__ */ le.isValidElement(o) && o.type === "svg", l = {
    ...n,
    color: s,
    component: c,
    fontSize: d,
    instanceFontSize: r.fontSize,
    inheritViewBox: p,
    viewBox: g,
    hasSvgAsChild: y
  }, b = {};
  p || (b.viewBox = g);
  const _ = us(l);
  return /* @__PURE__ */ se.jsxs(fs, {
    as: c,
    className: nn(_.root, i),
    focusable: "false",
    color: f,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: t,
    ...b,
    ...v,
    ...y && o.props,
    ownerState: l,
    children: [y ? o.props.children : o, m ? /* @__PURE__ */ se.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (vr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: W.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: W.object,
  /**
   * @ignore
   */
  className: W.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: W.oneOfType([W.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), W.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: W.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: W.oneOfType([W.oneOf(["inherit", "large", "medium", "small"]), W.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: W.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: W.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: W.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: W.oneOfType([W.arrayOf(W.oneOfType([W.func, W.object, W.bool])), W.func, W.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: W.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: W.string
});
vr.muiName = "SvgIcon";
function In(e, r) {
  function t(n, o) {
    return /* @__PURE__ */ se.jsx(vr, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${r}Icon` : void 0,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (t.displayName = `${r}Icon`), t.muiName = vr.muiName, /* @__PURE__ */ le.memo(/* @__PURE__ */ le.forwardRef(t));
}
const ds = In(/* @__PURE__ */ se.jsx("path", {
  d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9zM18 20H6V10h12z"
}), "LockOutline"), ps = In(/* @__PURE__ */ se.jsx("path", {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"
}), "MailOutline"), Nn = Zt.forwardRef(
  ({ label: e, name: r, onChange: t, value: n, errorText: o, warningText: i, type: s, ...c }, d) => {
    let f = null;
    switch (s) {
      case "email":
        f = /* @__PURE__ */ se.jsx(ps, {});
        break;
      case "password":
        f = /* @__PURE__ */ se.jsx(ds, {});
        break;
    }
    let p = "ui-input";
    return f && (p += " ui-input--with-icon"), /* @__PURE__ */ se.jsxs("div", { className: p, children: [
      e ? /* @__PURE__ */ se.jsx("label", { htmlFor: r, children: e }) : null,
      f && f,
      /* @__PURE__ */ se.jsx(
        "input",
        {
          ref: d,
          id: r,
          name: r,
          type: s,
          value: n,
          onChange: (m) => t ? t(r, m.target.value) : null,
          "aria-invalid": !!o,
          ...c
        }
      ),
      o ? /* @__PURE__ */ se.jsx("div", { className: "ui-error", children: o }) : null,
      !o && i ? /* @__PURE__ */ se.jsx("div", { className: "ui-warning", children: i }) : null
    ] });
  }
);
Nn.displayName = "Input";
const ys = ({ children: e, className: r, width: t }) => /* @__PURE__ */ se.jsx("div", { className: `ui-view--view ${r}`, style: { width: t }, children: e }), bs = ({ children: e, className: r, width: t }) => /* @__PURE__ */ se.jsx("div", { className: `ui-view--flex ${r}`, style: { width: t }, children: e }), vs = ({
  label: e,
  onClick: r,
  disabled: t = !1,
  type: n = "primary"
}) => {
  let o = ["ui-button"];
  t || o.push(`ui-button--${n}`), t && o.push("ui-button--disabled");
  const i = o.join(" ");
  return /* @__PURE__ */ se.jsx("div", { className: i, onClick: r, children: e });
}, Ss = ({ icon: e, text: r }) => /* @__PURE__ */ se.jsxs("span", { className: "ui-icon-text", children: [
  e,
  " ",
  r
] }), Es = ({ children: e, onSubmit: r, submitValue: t }) => {
  const n = (o) => {
    o.preventDefault(), r();
  };
  return /* @__PURE__ */ se.jsxs("form", { onSubmit: n, children: [
    e,
    /* @__PURE__ */ se.jsx(Nn, { name: "form__submit", value: t ?? "Save", type: "submit" })
  ] });
};
async function ms(e) {
  const { route: r, payload: t, signal: n, headers: o, credentials: i } = e, s = t === void 0 ? "GET" : "POST", c = {
    Accept: "application/json",
    ...t === void 0 ? {} : { "Content-Type": "application/json" },
    ...o
  };
  try {
    const d = await fetch(r, {
      method: s,
      headers: c,
      body: t === void 0 ? void 0 : JSON.stringify(t),
      signal: n,
      credentials: i
    });
    let f;
    try {
      f = await d.json();
    } catch {
      f = null;
    }
    if (!hs(f)) {
      const p = `dataRequest: Unexpected response format (HTTP ${d.status}).`;
      return console.error(p, { route: r, method: s, httpStatus: d.status, body: f }), null;
    }
    return f && f.code !== 200 ? (console.error(f.error_msg, { route: r, method: s, code: f.code }), null) : f?.data;
  } catch (d) {
    return d instanceof DOMException && d.name === "AbortError" || console.error("dataRequest: fetch failed", { route: r, method: s, err: d }), null;
  }
}
function hs(e) {
  if (typeof e != "object" || e === null || !("code" in e)) return !1;
  const r = e.code;
  if (typeof r != "number") return !1;
  const t = e.data;
  if (r === 200)
    return "data" in e;
  const n = e.error_msg;
  return t === null && typeof n == "string";
}
function Ts(e) {
  const { enabled: r = !0, ...t } = e, [n, o] = jr(null), [i, s] = jr(null), [c, d] = jr(!1), f = Dn(null), p = Bn(() => {
    const g = t.payload === void 0 ? "no-payload" : JSON.stringify(t.payload), v = t.headers ? JSON.stringify(t.headers) : "no-headers", y = t.credentials ?? "default";
    return `${t.route}::${g}::${v}::${y}`;
  }, [t.route, t.payload, t.headers, t.credentials]), m = Fn(async () => {
    f.current?.abort();
    const g = new AbortController();
    f.current = g, d(!0), s(null);
    try {
      const v = await ms({
        ...t,
        signal: g.signal
      });
      return v === null ? (o(null), s("Request failed"), null) : (o(v), v);
    } finally {
      d(!1);
    }
  }, [t, p]);
  return ft(() => {
    if (r)
      return m(), () => {
        f.current?.abort();
      };
  }, [r, m, p]), ft(() => () => f.current?.abort(), []), { data: n, error: i, loading: c, refetch: m };
}
export {
  vs as Button,
  bs as Flex,
  Es as Form,
  Ss as IconText,
  Nn as Input,
  ys as View,
  ms as dataRequest,
  Ts as useDataRequest
};
