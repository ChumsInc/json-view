import { createContext as e, memo as t, useContext as n, useEffect as r, useState as i } from "react";
import a from "@emotion/styled";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var l = Object.create, u = Object.defineProperty, d = Object.getOwnPropertyDescriptor, f = Object.getOwnPropertyNames, p = Object.getPrototypeOf, m = Object.prototype.hasOwnProperty, h = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), g = (e, t, n, r) => {
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
	try {
		return JSON.stringify(e, void 0, 2);
	} catch (e) {
		return e instanceof Error ? e.message : null;
	}
}, x = (e) => {
	let t = typeof e;
	return t === "number" || t === "bigint" || t === "boolean";
}, S = (e) => typeof e == "object" && !!e, C = /* @__PURE__ */ _((/* @__PURE__ */ h(((e, t) => {
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
})))(), 1), w = a.dt`
    //padding: 0 0.25rem;
    color: var(--theme-base04);
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
`, T = a.div`
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
`, E = ({ children: e, type: t, expandable: n, expanded: r, onClick: i }) => /* @__PURE__ */ c(w, { children: [/* @__PURE__ */ s(T, {
	className: (0, C.default)(`type--${t}`, {
		expandable: n,
		open: r
	}),
	onClick: () => {
		n && i && i();
	}
}), /* @__PURE__ */ c("div", { children: [e, ":"] })] }), D = {
	dark: y,
	light: v
}, O = {
	collapsedStringLength: 25,
	maxArrayElements: 25,
	maxObjectElements: 50,
	defaultOpenLevels: 1
}, k = e(O), A = a.dl`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: text;
    min-height: 1.25rem;
    gap: 0.5rem;
`, j = a.dt`
    color: var(--theme-base0D);
    display: block;
    font-weight: 700;
    cursor: pointer;
`, M = a.dd`
    color: var(--theme-base0D);
    display: block;
    font-weight: 700;
    cursor: pointer;
`, N = ({ currentIndex: e, onClick: t }) => {
	let { maxArrayElements: r } = n(k);
	return /* @__PURE__ */ c(A, {
		onClick: t,
		children: [/* @__PURE__ */ c(j, { children: [
			"[0 … ",
			e * r - 1,
			"]"
		] }), /* @__PURE__ */ s(M, {
			className: "json-view--value",
			children: "prev"
		})]
	});
}, P = ({ currentIndex: e, maxItems: t, onClick: r }) => {
	let { maxArrayElements: i } = n(k);
	return /* @__PURE__ */ c(A, {
		onClick: r,
		children: [/* @__PURE__ */ c(j, { children: [
			"[",
			(e + 1) * i,
			" … ",
			t - 1,
			"]"
		] }), /* @__PURE__ */ s(M, { children: "next" })]
	});
}, F = a.span`
    &::before {
        content: '[ ';
    }

    &::after {
        content: ' ]';
    }
`, I = t(({ value: e, nodeKey: t, open: r = 0 }) => {
	let a = Math.max(r ?? 0, 0) > 0, { maxArrayElements: l } = n(k), [u, d] = i(a), [f, p] = i(0), m = Math.floor(e.length / l);
	return /* @__PURE__ */ c(o, { children: [/* @__PURE__ */ c(A, { children: [/* @__PURE__ */ s(E, {
		expandable: !!e.length,
		type: typeof e,
		expanded: u,
		onClick: () => d(!u),
		children: t
	}), !u && /* @__PURE__ */ s("dd", { children: /* @__PURE__ */ s(F, { children: e.length > 0 && /* @__PURE__ */ c("span", { children: ["… ", e.length] }) }) })] }), u && /* @__PURE__ */ c("dl", { children: [
		f > 0 && /* @__PURE__ */ s(N, {
			currentIndex: f,
			onClick: () => {
				p(Math.max(f - 1, 0));
			}
		}),
		e.filter((e, t) => Math.floor(t / l) === f).map((e, t) => /* @__PURE__ */ s(U, {
			nodeKey: t + f * l,
			value: e
		}, t)),
		f < m && m > 0 && /* @__PURE__ */ s(P, {
			currentIndex: f,
			maxItems: e.length,
			onClick: () => {
				p(Math.min(m, f + 1));
			}
		})
	] })] });
}), L = a.span`
    &::before {
        content: '{ ';
    }
    &::after {
        content: ' }';
    }
`, R = t(({ value: e, nodeKey: t, open: r = 0 }) => {
	let [a, l] = i(Math.max(r ?? 0, 0) > 0), { collapsedStringLength: u } = n(k), d = Object.keys(e), f = d.map((t) => `${t}:${JSON.stringify(e[t])}`).join(", ");
	return /* @__PURE__ */ c(o, { children: [/* @__PURE__ */ c(A, { children: [/* @__PURE__ */ s(E, {
		expandable: d.length > 0,
		expanded: a,
		onClick: () => l(!a),
		type: typeof e,
		children: t
	}), !a && /* @__PURE__ */ s(A, { children: /* @__PURE__ */ c(L, { children: [f.slice(0, u), f.length > u && /* @__PURE__ */ s("span", {
		className: "ms-1",
		children: "…"
	})] }) })] }), a && /* @__PURE__ */ s("dl", { children: d.map((t) => /* @__PURE__ */ s(U, {
		nodeKey: t,
		value: e[t],
		open: r - 1
	}, t)) })] });
}), z = a.dd`
    color: var(--theme-base09);
`, B = ({ nodeKey: e, value: t }) => /* @__PURE__ */ c(A, { children: [/* @__PURE__ */ s(E, {
	type: typeof t,
	children: e
}), /* @__PURE__ */ s(z, { children: b(t) })] }), V = a.dd`
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
`, H = ({ nodeKey: e, value: t }) => {
	let { collapsedStringLength: r } = n(k), [a, l] = i(t.length <= r);
	return /* @__PURE__ */ c(A, { children: [/* @__PURE__ */ s(E, {
		expandable: t.length > r,
		expanded: a,
		onClick: () => l(!a),
		type: typeof t,
		children: e
	}), /* @__PURE__ */ c(V, {
		className: (0, C.default)({ collapsed: !a }),
		children: [!a && /* @__PURE__ */ s(o, { children: t.replace(/[\n\t]/g, " ") }), a && /* @__PURE__ */ s(o, { children: t })]
	})] });
}, U = ({ nodeKey: e, value: t, open: n = 0 }) => x(t) ? /* @__PURE__ */ s(B, {
	value: t,
	nodeKey: e,
	open: n
}) : typeof t == "string" ? /* @__PURE__ */ s(H, {
	value: t,
	nodeKey: e,
	open: n
}) : Array.isArray(t) ? /* @__PURE__ */ s(I, {
	value: t,
	nodeKey: e,
	open: n
}) : S(t) ? /* @__PURE__ */ s(R, {
	value: t,
	nodeKey: e,
	open: n
}) : /* @__PURE__ */ c(A, { children: [/* @__PURE__ */ s(E, {
	type: typeof t,
	children: e
}), /* @__PURE__ */ s("dd", { children: b(t) })] }), W = a.div`
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

`;
//#endregion
//#region src/JSONView.tsx
function G({ data: e, theme: t, dark: a, rootNodeName: o, collapsedStringLength: c, maxArrayElements: l, maxObjectElements: u, defaultOpenLevels: d }) {
	let [f, p] = i({}), [m, h] = i(e), g = n(k);
	r(() => {
		Promise.resolve().then(() => {
			let e = t ?? (a ? D.dark : D.light);
			p({
				"--theme-base00": e.base00,
				"--theme-base01": e.base01,
				"--theme-base02": e.base02,
				"--theme-base03": e.base03,
				"--theme-base04": e.base04,
				"--theme-base05": e.base05,
				"--theme-base06": e.base06,
				"--theme-base07": e.base07,
				"--theme-base08": e.base08,
				"--theme-base09": e.base09,
				"--theme-base0A": e.base0A,
				"--theme-base0B": e.base0B,
				"--theme-base0C": e.base0C,
				"--theme-base0D": e.base0D,
				"--theme-base0E": e.base0E,
				"--theme-base0F": e.base0F
			});
		});
	}, [t, a]);
	let _ = {
		collapsedStringLength: c ?? g?.collapsedStringLength ?? O.collapsedStringLength,
		maxArrayElements: l ?? g.maxArrayElements ?? O.maxArrayElements,
		maxObjectElements: u ?? g.maxObjectElements ?? O.maxObjectElements,
		defaultOpenLevels: d ?? g.defaultOpenLevels ?? O.defaultOpenLevels
	};
	return r(() => {
		Promise.resolve().then(() => {
			h(e);
		});
	}, [e]), /* @__PURE__ */ s(k.Provider, {
		value: _,
		children: /* @__PURE__ */ s(W, { children: /* @__PURE__ */ s("div", {
			className: (0, C.default)("json-view", { "json-view--dark": a }),
			style: f,
			children: /* @__PURE__ */ s("dl", { children: /* @__PURE__ */ s(U, {
				nodeKey: o || "root",
				value: e,
				open: d
			}) })
		}) })
	});
}
//#endregion
export { G as JSONView, k as JSONViewContext, O as defaultSettings, v as google, y as monokai, D as preferredThemes };

//# sourceMappingURL=json-view.js.map