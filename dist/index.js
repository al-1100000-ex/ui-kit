import M from "react";
var b = { exports: {} }, E = {};
var F;
function re() {
  if (F) return E;
  F = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(c, n, u) {
    var d = null;
    if (u !== void 0 && (d = "" + u), n.key !== void 0 && (d = "" + n.key), "key" in n) {
      u = {};
      for (var m in n)
        m !== "key" && (u[m] = n[m]);
    } else u = n;
    return n = u.ref, {
      $$typeof: s,
      type: c,
      key: d,
      ref: n !== void 0 ? n : null,
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
          case x:
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
        var t = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), l(e);
      }
    }
    function c(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === x)
        return "<...>";
      try {
        var r = s(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = j.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (P.call(e, "key")) {
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
      var e = s(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, r, t, a, R, O) {
      var o = t.ref;
      return e = {
        $$typeof: N,
        type: e,
        key: r,
        props: t,
        _owner: a
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
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
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function y(e, r, t, a, R, O) {
      var o = r.children;
      if (o !== void 0)
        if (a)
          if (K(o)) {
            for (a = 0; a < o.length; a++)
              A(o[a]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else A(o);
      if (P.call(r, "key")) {
        o = s(e);
        var _ = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        a = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}", I[o + a] || (_ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          o,
          _,
          o
        ), I[o + a] = !0);
      }
      if (o = null, t !== void 0 && (i(t), o = "" + t), d(r) && (i(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var w in r)
          w !== "key" && (t[w] = r[w]);
      } else t = r;
      return o && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        o,
        t,
        n(),
        R,
        O
      );
    }
    function A(e) {
      S(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === x && (e._payload.status === "fulfilled" ? S(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function S(e) {
      return typeof e == "object" && e !== null && e.$$typeof === N;
    }
    var p = M, N = /* @__PURE__ */ Symbol.for("react.transitional.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), k = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), q = /* @__PURE__ */ Symbol.for("react.profiler"), J = /* @__PURE__ */ Symbol.for("react.consumer"), z = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), B = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), x = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.activity"), Q = /* @__PURE__ */ Symbol.for("react.client.reference"), j = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, K = Array.isArray, h = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var g, C = {}, Y = p.react_stack_bottom_frame.bind(
      p,
      u
    )(), $ = h(c(u)), I = {};
    v.Fragment = k, v.jsx = function(e, r, t) {
      var a = 1e4 > j.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        t,
        !1,
        a ? Error("react-stack-top-frame") : Y,
        a ? h(c(e)) : $
      );
    }, v.jsxs = function(e, r, t) {
      var a = 1e4 > j.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        t,
        !0,
        a ? Error("react-stack-top-frame") : Y,
        a ? h(c(e)) : $
      );
    };
  })()), v;
}
var L;
function ne() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? b.exports = re() : b.exports = te()), b.exports;
}
var f = ne();
const ae = M.forwardRef(
  ({ label: s, name: l, onChange: i, value: c, errorText: n, warningText: u, ...d }, m) => /* @__PURE__ */ f.jsxs("div", { className: "ui-input", children: [
    s ? /* @__PURE__ */ f.jsx("label", { htmlFor: l, children: s }) : null,
    /* @__PURE__ */ f.jsx(
      "input",
      {
        ref: m,
        id: l,
        name: l,
        value: c,
        onChange: (T) => i(l, T.target.value),
        "aria-invalid": !!n,
        ...d
      }
    ),
    n ? /* @__PURE__ */ f.jsx("div", { className: "ui-error", children: n }) : null,
    !n && u ? /* @__PURE__ */ f.jsx("div", { className: "ui-warning", children: u }) : null
  ] })
);
ae.displayName = "Input";
const se = ({ children: s, className: l, width: i }) => /* @__PURE__ */ f.jsx("div", { className: `ui-view--view ${l}`, style: { width: i }, children: s }), le = ({ children: s, className: l, width: i }) => /* @__PURE__ */ f.jsx("div", { className: `ui-view--flex ${l}`, style: { width: i }, children: s }), ue = ({
  label: s,
  onClick: l,
  disabled: i = !1,
  type: c = "primary"
}) => {
  let n = ["ui-button"];
  i || n.push(`ui-button--${c}`), i && n.push("ui-button--disabled");
  const u = n.join(" ");
  return /* @__PURE__ */ f.jsx("div", { className: u, onClick: l, children: s });
}, ie = ({ icon: s, text: l }) => /* @__PURE__ */ f.jsxs("span", { className: "ui-icon-text", children: [
  s,
  " ",
  l
] });
export {
  ue as Button,
  le as Flex,
  ie as IconText,
  ae as Input,
  se as View
};
