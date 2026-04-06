import { createContext as e, memo as t, useContext as n, useEffect as r, useState as i } from "react";
import a from "@emotion/styled";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var l = Object.create, u = Object.defineProperty, d = Object.getOwnPropertyDescriptor, f = Object.getOwnPropertyNames, p = Object.getPrototypeOf, m = Object.prototype.hasOwnProperty, h = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), g = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = f(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !m.call(e, s) && s !== n && u(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = d(t, s)) || r.enumerable
	});
	return e;
}, _ = (e, t, n) => (n = e == null ? {} : l(p(e)), g(t || !e || !e.__esModule ? u(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), v = {
	scheme: "google",
	author: "seth wright (http://sethawright.com)",
	base00: "#1d1f21",
	base01: "#282a2e",
	base02: "#373b41",
	base03: "#969896",
	base04: "#b4b7b4",
	base05: "#c5c8c6",
	base06: "#e0e0e0",
	base07: "#ffffff",
	base08: "#CC342B",
	base09: "#F96A38",
	base0A: "#FBA922",
	base0B: "#198844",
	base0C: "#3971ED",
	base0D: "#3971ED",
	base0E: "#A36AC7",
	base0F: "#3971ED"
}, y = {
	scheme: "monokai",
	author: "wimer hazenberg (http://www.monokai.nl)",
	base00: "#272822",
	base01: "#383830",
	base02: "#49483e",
	base03: "#75715e",
	base04: "#a59f85",
	base05: "#f8f8f2",
	base06: "#f5f4f1",
	base07: "#f9f8f5",
	base08: "#f92672",
	base09: "#fd971f",
	base0A: "#f4bf75",
	base0B: "#a6e22e",
	base0C: "#a1efe4",
	base0D: "#66d9ef",
	base0E: "#ae81ff",
	base0F: "#cc6633"
}, b = (e) => {
	let t = typeof e;
	switch (t) {
		case "object": return e === null ? "null" : Array.isArray(e) ? "array" : t;
		default: return t;
	}
}, x = (e) => {
	try {
		return JSON.stringify(e, void 0, 2);
	} catch (e) {
		return e instanceof Error ? e.message : null;
	}
}, S = /* @__PURE__ */ _((/* @__PURE__ */ h(((e, t) => {
	(function() {
		var e = {}.hasOwnProperty;
		function n() {
			for (var e = "", t = 0; t < arguments.length; t++) {
				var n = arguments[t];
				n && (e = i(e, r(n)));
			}
			return e;
		}
		function r(t) {
			if (typeof t == "string" || typeof t == "number") return t;
			if (typeof t != "object") return "";
			if (Array.isArray(t)) return n.apply(null, t);
			if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
			var r = "";
			for (var a in t) e.call(t, a) && t[a] && (r = i(r, a));
			return r;
		}
		function i(e, t) {
			return t ? e ? e + " " + t : e + t : e;
		}
		t !== void 0 && t.exports ? (n.default = n, t.exports = n) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
			return n;
		}) : window.classNames = n;
	})();
})))(), 1), C = a.dt`
    //padding: 0 0.25rem;
    color: var(--theme-base04);
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
`, w = a.div`
    padding: 0 0.25rem;
    color: var(--theme-base04);
    display: flex;
    width: 1rem;
    height: 1rem;
    flex-direction: row;
    gap: 0.25rem;
    cursor: default;
    &.expandable {
        transition: all 0.1s ease-in-out;
        border-radius: 0.25rem;
        transform: rotate(0deg);
        transform-origin: center;
        cursor: pointer;
        &.type--string {
            ::before {
                content: '+';
                font-size: 1rem;
            }
            &.open {
                ::before {
                    content: '-';
                }
                transform: rotate(0deg);
            }
        }
        &::before {
            content: '▶';
            font-size: 0.5rem;
        }
        &.open {
            transform: rotate(90deg);
        }
    }
`, T = ({ children: e, type: t, expandable: n, expanded: r, onClick: i }) => /* @__PURE__ */ c(C, { children: [/* @__PURE__ */ s(w, {
	className: (0, S.default)(`type--${t}`, {
		expandable: n,
		open: r
	}),
	onClick: () => {
		n && i && i();
	}
}), /* @__PURE__ */ c("div", { children: [e, ":"] })] }), E = {
	dark: y,
	light: v
}, D = {
	collapsedStringLength: 25,
	maxArrayElements: 25,
	maxObjectElements: 50,
	defaultOpenLevels: 1
}, O = e(D), k = a.dl`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: text;
    min-height: 1.25rem;
    gap: 0.5rem;
`, A = a.dt`
    color: var(--theme-base0D);
    display: block;
    font-weight: 700;
    cursor: pointer;
`, j = a.dd`
    color: var(--theme-base0D);
    display: block;
    font-weight: 700;
    cursor: pointer;
`, M = ({ currentIndex: e, onClick: t }) => {
	let { maxArrayElements: r } = n(O);
	return /* @__PURE__ */ c(k, {
		onClick: t,
		children: [/* @__PURE__ */ c(A, { children: [
			"[0 … ",
			e * r - 1,
			"]"
		] }), /* @__PURE__ */ s(j, {
			className: "json-view--value",
			children: "prev"
		})]
	});
}, N = ({ currentIndex: e, maxItems: t, onClick: r }) => {
	let { maxArrayElements: i } = n(O);
	return /* @__PURE__ */ c("div", {
		className: "json-view--node",
		onClick: r,
		children: [/* @__PURE__ */ c("dt", {
			className: "json-view--key",
			children: [
				"[",
				(e + 1) * i,
				" … ",
				t - 1,
				"]"
			]
		}), /* @__PURE__ */ s("dd", {
			className: "json-view--value",
			children: "next"
		})]
	});
}, P = a.span`
    &::before {
        content: '[ ';
    }

    &::after {
        content: ' ]';
    }
`, F = t(({ value: e, nodeKey: t, open: r = 0 }) => {
	let a = Math.max(r ?? 0, 0) > 0, { maxArrayElements: l } = n(O), [u, d] = i(a), [f, p] = i(0), m = Math.floor(e.length / l);
	return /* @__PURE__ */ c(o, { children: [/* @__PURE__ */ c(k, { children: [/* @__PURE__ */ s(T, {
		expandable: !!e.length,
		type: typeof e,
		expanded: u,
		onClick: () => d(!u),
		children: t
	}), !u && /* @__PURE__ */ s("dd", { children: /* @__PURE__ */ s(P, { children: e.length > 0 && /* @__PURE__ */ c("span", { children: ["… ", e.length] }) }) })] }), u && /* @__PURE__ */ c("dl", { children: [
		f > 0 && /* @__PURE__ */ s(M, {
			currentIndex: f,
			onClick: () => {
				p(Math.max(f - 1, 0));
			}
		}),
		e.filter((e, t) => Math.floor(t / l) === f).map((e, t) => /* @__PURE__ */ s(H, {
			nodeKey: t + f * l,
			value: e
		}, t)),
		f < m && m > 0 && /* @__PURE__ */ s(N, {
			currentIndex: f,
			maxItems: e.length,
			onClick: () => {
				p(Math.min(m, f + 1));
			}
		})
	] })] });
}), I = a.span`
    &::before {
        content: '{ ';
    }
    &::after {
        content: ' }';
    }
`, L = t(({ value: e, nodeKey: t, open: r = 0 }) => {
	let [a, l] = i(Math.max(r ?? 0, 0) > 0), { collapsedStringLength: u } = n(O), d = Object.keys(e), f = d.map((t) => `${t}:${JSON.stringify(e[t])}`).join(", ");
	return /* @__PURE__ */ c(o, { children: [/* @__PURE__ */ c(k, { children: [/* @__PURE__ */ s(T, {
		expandable: d.length > 0,
		expanded: a,
		onClick: () => l(!a),
		type: typeof e,
		children: t
	}), !a && /* @__PURE__ */ s("dd", { children: /* @__PURE__ */ c(I, { children: [f.slice(0, u), f.length > u && /* @__PURE__ */ s("span", {
		className: "ms-1",
		children: "…"
	})] }) })] }), a && /* @__PURE__ */ s("dl", { children: d.map((t) => /* @__PURE__ */ s(H, {
		nodeKey: t,
		value: e[t],
		open: r - 1
	}, t)) })] });
}), R = a.dd`
    color: var(--theme-base09);
`, z = ({ nodeKey: e, value: t }) => /* @__PURE__ */ c(k, { children: [/* @__PURE__ */ s(T, {
	type: typeof t,
	children: e
}), /* @__PURE__ */ s(R, { children: x(t) })] }), B = a.dd`
    color: var(--theme-base0B);
    width: 100%;
    &:not(.collapsed) {
        white-space: pre-wrap;
        word-break: break-all;
    }
    &.collapsed {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &::before {
        content: '"';
    }

    &::after {
        content: '"';
    }
`, V = ({ nodeKey: e, value: t }) => {
	let { collapsedStringLength: r } = n(O), [a, l] = i(t.length <= r);
	return /* @__PURE__ */ c(k, { children: [/* @__PURE__ */ s(T, {
		expandable: t.length > r,
		expanded: a,
		onClick: () => l(!a),
		type: typeof t,
		children: e
	}), /* @__PURE__ */ c(B, {
		className: (0, S.default)({ collapsed: !a }),
		children: [!a && /* @__PURE__ */ s(o, { children: t.replace(/[\n\t]/g, " ") }), a && /* @__PURE__ */ s(o, { children: t })]
	})] });
}, H = ({ nodeKey: e, value: t, open: n = 0 }) => {
	switch (b(t)) {
		case "number":
		case "boolean":
		case "bigint": return /* @__PURE__ */ s(z, {
			value: t,
			nodeKey: e,
			open: n
		});
		case "string": return /* @__PURE__ */ s(V, {
			value: t,
			nodeKey: e,
			open: n
		});
		case "object": return /* @__PURE__ */ s(L, {
			nodeKey: e,
			value: t,
			open: n
		});
		case "array": return /* @__PURE__ */ s(F, {
			nodeKey: e,
			value: t,
			open: n
		});
	}
	return /* @__PURE__ */ c(k, { children: [/* @__PURE__ */ s(T, {
		type: typeof t,
		children: e
	}), /* @__PURE__ */ s("dd", { children: x(t) })] });
}, U = a.div`
    .json-view {
        --theme-base00: #002b36;
        --theme-base01: #073642;
        --theme-base02: #586e75;
        --theme-base03: #657b83;
        --theme-base04: #839496;
        --theme-base05: #93a1a1;
        --theme-base06: #eee8d5;
        --theme-base07: #fdf6e3;
        --theme-base08: #dc322f;
        --theme-base09: #cb4b16;
        --theme-base0A: #b58900;
        --theme-base0B: #859900;
        --theme-base0C: #2aa198;
        --theme-base0D: #268bd2;
        --theme-base0E: #6c71c4;
        --theme-base0F: #d33682;

        font-size: 0.7rem;
        line-height: 0.85rem;
        max-height: 90vh;
        overflow: auto;
        font-family: Roboto Mono, monospace;
        white-space: pre-wrap;
        background-color: var(--theme-base07);
        color: var(--theme-base04);
        padding: 1rem;

        &--dark {
            background-color: var(--theme-base00);
            color: var(--theme-base05);
        }
        @media (prefers-color-scheme: dark) {
            background-color: var(--theme-base00);
            color: var(--theme-base05);
        }

        dl {
            margin-left: 0;
            margin-bottom: 0;
            & dl {
                margin-left: 1rem;
            }
            dd {
                margin-bottom: 0.25rem;
            }
        }
    }

`, W = ({ data: e, theme: t, dark: a, rootNodeName: o, collapsedStringLength: c, maxArrayElements: l, maxObjectElements: u, defaultOpenLevels: d }) => {
	let [f, p] = i(v), [m, h] = i({}), [g, _] = i({}), y = n(O), [b, x] = i({
		...D,
		...y
	});
	return r(() => {
		x({
			...D,
			...y
		});
	}, [y]), r(() => {
		p(t || (a ? E.dark : E.light));
	}, [t]), r(() => {
		x({
			...b,
			...y,
			collapsedStringLength: c ?? y.collapsedStringLength,
			maxArrayElements: l ?? y.maxArrayElements,
			maxObjectElements: u ?? y.maxObjectElements,
			defaultOpenLevels: d ?? y.defaultOpenLevels
		});
	}, [
		c,
		l,
		u,
		d
	]), r(() => {
		h({
			"--theme-base00": f.base00,
			"--theme-base01": f.base01,
			"--theme-base02": f.base02,
			"--theme-base03": f.base03,
			"--theme-base04": f.base04,
			"--theme-base05": f.base05,
			"--theme-base06": f.base06,
			"--theme-base07": f.base07,
			"--theme-base08": f.base08,
			"--theme-base09": f.base09,
			"--theme-base0A": f.base0A,
			"--theme-base0B": f.base0B,
			"--theme-base0C": f.base0C,
			"--theme-base0D": f.base0D,
			"--theme-base0E": f.base0E,
			"--theme-base0F": f.base0F
		});
	}, [f]), r(() => {
		_(e);
	}, [e]), /* @__PURE__ */ s(O.Provider, {
		value: b,
		children: /* @__PURE__ */ s(U, { children: /* @__PURE__ */ s("div", {
			className: (0, S.default)("json-view", { "json-view--dark": a }),
			style: m,
			children: /* @__PURE__ */ s("dl", { children: /* @__PURE__ */ s(H, {
				nodeKey: o || "root",
				value: g,
				open: d
			}) })
		}) })
	});
};
//#endregion
export { W as JSONView, O as JSONViewContext, D as defaultSettings, v as google, y as monokai, E as preferredThemes };

//# sourceMappingURL=index.es.js.map