(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("react")) : typeof define === "function" && define.amd ? define(["exports", "react"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global["json-view"] = {}, global.React));
})(this, function(exports, react) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	//#endregion
	react = __toESM(react);
	//#region node_modules/base16/src/google.js
	var google_default = {
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
	};
	//#endregion
	//#region node_modules/base16/src/monokai.js
	var monokai_default = {
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
	};
	//#endregion
	//#region src/utils.ts
	var nodeType = (value) => {
		const type = typeof value;
		switch (type) {
			case "object":
				if (value === null) return "null";
				if (Array.isArray(value)) return "array";
				return type;
			default: return type;
		}
	};
	var jsonNodeValue = (value) => {
		try {
			return JSON.stringify(value, void 0, 2);
		} catch (err) {
			if (err instanceof Error) return err.message;
			return null;
		}
	};
	//#endregion
	//#region node_modules/@babel/runtime/helpers/esm/extends.js
	var import_classnames = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
		/*!
		Copyright (c) 2018 Jed Watson.
		Licensed under the MIT License (MIT), see
		http://jedwatson.github.io/classnames
		*/
		(function() {
			"use strict";
			var hasOwn = {}.hasOwnProperty;
			function classNames() {
				var classes = "";
				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (arg) classes = appendClass(classes, parseValue(arg));
				}
				return classes;
			}
			function parseValue(arg) {
				if (typeof arg === "string" || typeof arg === "number") return arg;
				if (typeof arg !== "object") return "";
				if (Array.isArray(arg)) return classNames.apply(null, arg);
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) return arg.toString();
				var classes = "";
				for (var key in arg) if (hasOwn.call(arg, key) && arg[key]) classes = appendClass(classes, key);
				return classes;
			}
			function appendClass(value, newClass) {
				if (!newClass) return value;
				if (value) return value + " " + newClass;
				return value + newClass;
			}
			if (typeof module !== "undefined" && module.exports) {
				classNames.default = classNames;
				module.exports = classNames;
			} else if (typeof define === "function" && typeof define.amd === "object" && define.amd) define("classnames", [], function() {
				return classNames;
			});
			else window.classNames = classNames;
		})();
	})))(), 1);
	function _extends() {
		return _extends = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends.apply(null, arguments);
	}
	//#endregion
	//#region node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
	var isDevelopment$2 = false;
	function sheetForTag(tag) {
		if (tag.sheet) return tag.sheet;
		/* istanbul ignore next */
		for (var i = 0; i < document.styleSheets.length; i++) if (document.styleSheets[i].ownerNode === tag) return document.styleSheets[i];
	}
	function createStyleElement(options) {
		var tag = document.createElement("style");
		tag.setAttribute("data-emotion", options.key);
		if (options.nonce !== void 0) tag.setAttribute("nonce", options.nonce);
		tag.appendChild(document.createTextNode(""));
		tag.setAttribute("data-s", "");
		return tag;
	}
	var StyleSheet = /* @__PURE__ */ function() {
		function StyleSheet(options) {
			var _this = this;
			this._insertTag = function(tag) {
				var before;
				if (_this.tags.length === 0) if (_this.insertionPoint) before = _this.insertionPoint.nextSibling;
				else if (_this.prepend) before = _this.container.firstChild;
				else before = _this.before;
				else before = _this.tags[_this.tags.length - 1].nextSibling;
				_this.container.insertBefore(tag, before);
				_this.tags.push(tag);
			};
			this.isSpeedy = options.speedy === void 0 ? !isDevelopment$2 : options.speedy;
			this.tags = [];
			this.ctr = 0;
			this.nonce = options.nonce;
			this.key = options.key;
			this.container = options.container;
			this.prepend = options.prepend;
			this.insertionPoint = options.insertionPoint;
			this.before = null;
		}
		var _proto = StyleSheet.prototype;
		_proto.hydrate = function hydrate(nodes) {
			nodes.forEach(this._insertTag);
		};
		_proto.insert = function insert(rule) {
			if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) this._insertTag(createStyleElement(this));
			var tag = this.tags[this.tags.length - 1];
			if (this.isSpeedy) {
				var sheet = sheetForTag(tag);
				try {
					sheet.insertRule(rule, sheet.cssRules.length);
				} catch (e) {}
			} else tag.appendChild(document.createTextNode(rule));
			this.ctr++;
		};
		_proto.flush = function flush() {
			this.tags.forEach(function(tag) {
				var _tag$parentNode;
				return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
			});
			this.tags = [];
			this.ctr = 0;
		};
		return StyleSheet;
	}();
	//#endregion
	//#region node_modules/stylis/src/Enum.js
	var MS = "-ms-";
	var MOZ = "-moz-";
	var WEBKIT = "-webkit-";
	var COMMENT = "comm";
	var RULESET = "rule";
	var DECLARATION = "decl";
	var IMPORT = "@import";
	var KEYFRAMES = "@keyframes";
	var LAYER = "@layer";
	//#endregion
	//#region node_modules/stylis/src/Utility.js
	/**
	* @param {number}
	* @return {number}
	*/
	var abs = Math.abs;
	/**
	* @param {number}
	* @return {string}
	*/
	var from = String.fromCharCode;
	/**
	* @param {object}
	* @return {object}
	*/
	var assign = Object.assign;
	/**
	* @param {string} value
	* @param {number} length
	* @return {number}
	*/
	function hash(value, length) {
		return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
	}
	/**
	* @param {string} value
	* @return {string}
	*/
	function trim(value) {
		return value.trim();
	}
	/**
	* @param {string} value
	* @param {RegExp} pattern
	* @return {string?}
	*/
	function match(value, pattern) {
		return (value = pattern.exec(value)) ? value[0] : value;
	}
	/**
	* @param {string} value
	* @param {(string|RegExp)} pattern
	* @param {string} replacement
	* @return {string}
	*/
	function replace(value, pattern, replacement) {
		return value.replace(pattern, replacement);
	}
	/**
	* @param {string} value
	* @param {string} search
	* @return {number}
	*/
	function indexof(value, search) {
		return value.indexOf(search);
	}
	/**
	* @param {string} value
	* @param {number} index
	* @return {number}
	*/
	function charat(value, index) {
		return value.charCodeAt(index) | 0;
	}
	/**
	* @param {string} value
	* @param {number} begin
	* @param {number} end
	* @return {string}
	*/
	function substr(value, begin, end) {
		return value.slice(begin, end);
	}
	/**
	* @param {string} value
	* @return {number}
	*/
	function strlen(value) {
		return value.length;
	}
	/**
	* @param {any[]} value
	* @return {number}
	*/
	function sizeof(value) {
		return value.length;
	}
	/**
	* @param {any} value
	* @param {any[]} array
	* @return {any}
	*/
	function append(value, array) {
		return array.push(value), value;
	}
	/**
	* @param {string[]} array
	* @param {function} callback
	* @return {string}
	*/
	function combine(array, callback) {
		return array.map(callback).join("");
	}
	//#endregion
	//#region node_modules/stylis/src/Tokenizer.js
	var line = 1;
	var column = 1;
	var length = 0;
	var position = 0;
	var character = 0;
	var characters = "";
	/**
	* @param {string} value
	* @param {object | null} root
	* @param {object | null} parent
	* @param {string} type
	* @param {string[] | string} props
	* @param {object[] | string} children
	* @param {number} length
	*/
	function node(value, root, parent, type, props, children, length) {
		return {
			value,
			root,
			parent,
			type,
			props,
			children,
			line,
			column,
			length,
			return: ""
		};
	}
	/**
	* @param {object} root
	* @param {object} props
	* @return {object}
	*/
	function copy(root, props) {
		return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
	}
	/**
	* @return {number}
	*/
	function char() {
		return character;
	}
	/**
	* @return {number}
	*/
	function prev() {
		character = position > 0 ? charat(characters, --position) : 0;
		if (column--, character === 10) column = 1, line--;
		return character;
	}
	/**
	* @return {number}
	*/
	function next() {
		character = position < length ? charat(characters, position++) : 0;
		if (column++, character === 10) column = 1, line++;
		return character;
	}
	/**
	* @return {number}
	*/
	function peek() {
		return charat(characters, position);
	}
	/**
	* @return {number}
	*/
	function caret() {
		return position;
	}
	/**
	* @param {number} begin
	* @param {number} end
	* @return {string}
	*/
	function slice(begin, end) {
		return substr(characters, begin, end);
	}
	/**
	* @param {number} type
	* @return {number}
	*/
	function token(type) {
		switch (type) {
			case 0:
			case 9:
			case 10:
			case 13:
			case 32: return 5;
			case 33:
			case 43:
			case 44:
			case 47:
			case 62:
			case 64:
			case 126:
			case 59:
			case 123:
			case 125: return 4;
			case 58: return 3;
			case 34:
			case 39:
			case 40:
			case 91: return 2;
			case 41:
			case 93: return 1;
		}
		return 0;
	}
	/**
	* @param {string} value
	* @return {any[]}
	*/
	function alloc(value) {
		return line = column = 1, length = strlen(characters = value), position = 0, [];
	}
	/**
	* @param {any} value
	* @return {any}
	*/
	function dealloc(value) {
		return characters = "", value;
	}
	/**
	* @param {number} type
	* @return {string}
	*/
	function delimit(type) {
		return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
	}
	/**
	* @param {number} type
	* @return {string}
	*/
	function whitespace(type) {
		while (character = peek()) if (character < 33) next();
		else break;
		return token(type) > 2 || token(character) > 3 ? "" : " ";
	}
	/**
	* @param {number} index
	* @param {number} count
	* @return {string}
	*/
	function escaping(index, count) {
		while (--count && next()) if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
		return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
	}
	/**
	* @param {number} type
	* @return {number}
	*/
	function delimiter(type) {
		while (next()) switch (character) {
			case type: return position;
			case 34:
			case 39:
				if (type !== 34 && type !== 39) delimiter(character);
				break;
			case 40:
				if (type === 41) delimiter(type);
				break;
			case 92:
				next();
				break;
		}
		return position;
	}
	/**
	* @param {number} type
	* @param {number} index
	* @return {number}
	*/
	function commenter(type, index) {
		while (next()) if (type + character === 57) break;
		else if (type + character === 84 && peek() === 47) break;
		return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
	}
	/**
	* @param {number} index
	* @return {string}
	*/
	function identifier(index) {
		while (!token(peek())) next();
		return slice(index, position);
	}
	//#endregion
	//#region node_modules/stylis/src/Parser.js
	/**
	* @param {string} value
	* @return {object[]}
	*/
	function compile(value) {
		return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
	}
	/**
	* @param {string} value
	* @param {object} root
	* @param {object?} parent
	* @param {string[]} rule
	* @param {string[]} rules
	* @param {string[]} rulesets
	* @param {number[]} pseudo
	* @param {number[]} points
	* @param {string[]} declarations
	* @return {object}
	*/
	function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
		var index = 0;
		var offset = 0;
		var length = pseudo;
		var atrule = 0;
		var property = 0;
		var previous = 0;
		var variable = 1;
		var scanning = 1;
		var ampersand = 1;
		var character = 0;
		var type = "";
		var props = rules;
		var children = rulesets;
		var reference = rule;
		var characters = type;
		while (scanning) switch (previous = character, character = next()) {
			case 40: if (previous != 108 && charat(characters, length - 1) == 58) {
				if (indexof(characters += replace(delimit(character), "&", "&\f"), "&\f") != -1) ampersand = -1;
				break;
			}
			case 34:
			case 39:
			case 91:
				characters += delimit(character);
				break;
			case 9:
			case 10:
			case 13:
			case 32:
				characters += whitespace(previous);
				break;
			case 92:
				characters += escaping(caret() - 1, 7);
				continue;
			case 47:
				switch (peek()) {
					case 42:
					case 47:
						append(comment(commenter(next(), caret()), root, parent), declarations);
						break;
					default: characters += "/";
				}
				break;
			case 123 * variable: points[index++] = strlen(characters) * ampersand;
			case 125 * variable:
			case 59:
			case 0:
				switch (character) {
					case 0:
					case 125: scanning = 0;
					case 59 + offset:
						if (ampersand == -1) characters = replace(characters, /\f/g, "");
						if (property > 0 && strlen(characters) - length) append(property > 32 ? declaration(characters + ";", rule, parent, length - 1) : declaration(replace(characters, " ", "") + ";", rule, parent, length - 2), declarations);
						break;
					case 59: characters += ";";
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
						if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
						else switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
							case 100:
							case 108:
							case 109:
							case 115:
								parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
								break;
							default: parse(characters, reference, reference, reference, [""], children, 0, points, children);
						}
				}
				index = offset = property = 0, variable = ampersand = 1, type = characters = "", length = pseudo;
				break;
			case 58: length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1) {
					if (character == 123) --variable;
					else if (character == 125 && variable++ == 0 && prev() == 125) continue;
				}
				switch (characters += from(character), character * variable) {
					case 38:
						ampersand = offset > 0 ? 1 : (characters += "\f", -1);
						break;
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break;
					case 64:
						if (peek() === 45) characters += delimit(next());
						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
						break;
					case 45: if (previous === 45 && strlen(characters) == 2) variable = 0;
				}
		}
		return rulesets;
	}
	/**
	* @param {string} value
	* @param {object} root
	* @param {object?} parent
	* @param {number} index
	* @param {number} offset
	* @param {string[]} rules
	* @param {number[]} points
	* @param {string} type
	* @param {string[]} props
	* @param {string[]} children
	* @param {number} length
	* @return {object}
	*/
	function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
		var post = offset - 1;
		var rule = offset === 0 ? rules : [""];
		var size = sizeof(rule);
		for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
		return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length);
	}
	/**
	* @param {number} value
	* @param {object} root
	* @param {object?} parent
	* @return {object}
	*/
	function comment(value, root, parent) {
		return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
	}
	/**
	* @param {string} value
	* @param {object} root
	* @param {object?} parent
	* @param {number} length
	* @return {object}
	*/
	function declaration(value, root, parent, length) {
		return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length);
	}
	//#endregion
	//#region node_modules/stylis/src/Serializer.js
	/**
	* @param {object[]} children
	* @param {function} callback
	* @return {string}
	*/
	function serialize(children, callback) {
		var output = "";
		var length = sizeof(children);
		for (var i = 0; i < length; i++) output += callback(children[i], i, children, callback) || "";
		return output;
	}
	/**
	* @param {object} element
	* @param {number} index
	* @param {object[]} children
	* @param {function} callback
	* @return {string}
	*/
	function stringify(element, index, children, callback) {
		switch (element.type) {
			case LAYER: if (element.children.length) break;
			case IMPORT:
			case DECLARATION: return element.return = element.return || element.value;
			case COMMENT: return "";
			case KEYFRAMES: return element.return = element.value + "{" + serialize(element.children, callback) + "}";
			case RULESET: element.value = element.props.join(",");
		}
		return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
	}
	//#endregion
	//#region node_modules/stylis/src/Middleware.js
	/**
	* @param {function[]} collection
	* @return {function}
	*/
	function middleware(collection) {
		var length = sizeof(collection);
		return function(element, index, children, callback) {
			var output = "";
			for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || "";
			return output;
		};
	}
	/**
	* @param {function} callback
	* @return {function}
	*/
	function rulesheet(callback) {
		return function(element) {
			if (!element.root) {
				if (element = element.return) callback(element);
			}
		};
	}
	//#endregion
	//#region node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
	function memoize(fn) {
		var cache = Object.create(null);
		return function(arg) {
			if (cache[arg] === void 0) cache[arg] = fn(arg);
			return cache[arg];
		};
	}
	//#endregion
	//#region node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
	var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
		var previous = 0;
		var character = 0;
		while (true) {
			previous = character;
			character = peek();
			if (previous === 38 && character === 12) points[index] = 1;
			if (token(character)) break;
			next();
		}
		return slice(begin, position);
	};
	var toRules = function toRules(parsed, points) {
		var index = -1;
		var character = 44;
		do
			switch (token(character)) {
				case 0:
					if (character === 38 && peek() === 12) points[index] = 1;
					parsed[index] += identifierWithPointTracking(position - 1, points, index);
					break;
				case 2:
					parsed[index] += delimit(character);
					break;
				case 4: if (character === 44) {
					parsed[++index] = peek() === 58 ? "&\f" : "";
					points[index] = parsed[index].length;
					break;
				}
				default: parsed[index] += from(character);
			}
		while (character = next());
		return parsed;
	};
	var getRules = function getRules(value, points) {
		return dealloc(toRules(alloc(value), points));
	};
	var fixedElements = /* @__PURE__ */ new WeakMap();
	var compat = function compat(element) {
		if (element.type !== "rule" || !element.parent || element.length < 1) return;
		var value = element.value;
		var parent = element.parent;
		var isImplicitRule = element.column === parent.column && element.line === parent.line;
		while (parent.type !== "rule") {
			parent = parent.parent;
			if (!parent) return;
		}
		if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) return;
		if (isImplicitRule) return;
		fixedElements.set(element, true);
		var points = [];
		var rules = getRules(value, points);
		var parentRules = parent.props;
		for (var i = 0, k = 0; i < rules.length; i++) for (var j = 0; j < parentRules.length; j++, k++) element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
	};
	var removeLabel = function removeLabel(element) {
		if (element.type === "decl") {
			var value = element.value;
			if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
				element["return"] = "";
				element.value = "";
			}
		}
	};
	function prefix(value, length) {
		switch (hash(value, length)) {
			case 5103: return WEBKIT + "print-" + value + value;
			case 5737:
			case 4201:
			case 3177:
			case 3433:
			case 1641:
			case 4457:
			case 2921:
			case 5572:
			case 6356:
			case 5844:
			case 3191:
			case 6645:
			case 3005:
			case 6391:
			case 5879:
			case 5623:
			case 6135:
			case 4599:
			case 4855:
			case 4215:
			case 6389:
			case 5109:
			case 5365:
			case 5621:
			case 3829: return WEBKIT + value + value;
			case 5349:
			case 4246:
			case 4810:
			case 6968:
			case 2756: return WEBKIT + value + MOZ + value + MS + value + value;
			case 6828:
			case 4268: return WEBKIT + value + MS + value + value;
			case 6165: return WEBKIT + value + MS + "flex-" + value + value;
			case 5187: return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
			case 5443: return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
			case 4675: return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
			case 5548: return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
			case 5292: return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
			case 6060: return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
			case 4554: return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
			case 6187: return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
			case 5495:
			case 3959: return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
			case 4968: return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
			case 4095:
			case 3583:
			case 4068:
			case 2532: return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
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
				if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
					case 109: if (charat(value, length + 4) !== 45) break;
					case 102: return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
					case 115: return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length) + value : value;
				}
				break;
			case 4949: if (charat(value, length + 1) !== 115) break;
			case 6444:
				switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
					case 107: return replace(value, ":", ":" + WEBKIT) + value;
					case 101: return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
				}
				break;
			case 5936:
				switch (charat(value, length + 11)) {
					case 114: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
					case 108: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
					case 45: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
				}
				return WEBKIT + value + MS + value + value;
		}
		return value;
	}
	var defaultStylisPlugins = [function prefixer(element, index, children, callback) {
		if (element.length > -1) {
			if (!element["return"]) switch (element.type) {
				case DECLARATION:
					element["return"] = prefix(element.value, element.length);
					break;
				case KEYFRAMES: return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
				case RULESET: if (element.length) return combine(element.props, function(value) {
					switch (match(value, /(::plac\w+|:read-\w+)/)) {
						case ":read-only":
						case ":read-write": return serialize([copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
						case "::placeholder": return serialize([
							copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }),
							copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }),
							copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] })
						], callback);
					}
					return "";
				});
			}
		}
	}];
	var createCache = function createCache(options) {
		var key = options.key;
		if (key === "css") {
			var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
			Array.prototype.forEach.call(ssrStyles, function(node) {
				if (node.getAttribute("data-emotion").indexOf(" ") === -1) return;
				document.head.appendChild(node);
				node.setAttribute("data-s", "");
			});
		}
		var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
		var inserted = {};
		var container;
		var nodesToHydrate = [];
		container = options.container || document.head;
		Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function(node) {
			var attrib = node.getAttribute("data-emotion").split(" ");
			for (var i = 1; i < attrib.length; i++) inserted[attrib[i]] = true;
			nodesToHydrate.push(node);
		});
		var _insert;
		var omnipresentPlugins = [compat, removeLabel];
		var currentSheet;
		var finalizingPlugins = [stringify, rulesheet(function(rule) {
			currentSheet.insert(rule);
		})];
		var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
		var stylis = function stylis(styles) {
			return serialize(compile(styles), serializer);
		};
		_insert = function insert(selector, serialized, sheet, shouldCache) {
			currentSheet = sheet;
			stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
			if (shouldCache) cache.inserted[serialized.name] = true;
		};
		var cache = {
			key,
			sheet: new StyleSheet({
				key,
				container,
				nonce: options.nonce,
				speedy: options.speedy,
				prepend: options.prepend,
				insertionPoint: options.insertionPoint
			}),
			nonce: options.nonce,
			inserted,
			registered: {},
			insert: _insert
		};
		cache.sheet.hydrate(nodesToHydrate);
		return cache;
	};
	//#endregion
	//#region node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
	var isBrowser = true;
	function getRegisteredStyles(registered, registeredStyles, classNames) {
		var rawClassName = "";
		classNames.split(" ").forEach(function(className) {
			if (registered[className] !== void 0) registeredStyles.push(registered[className] + ";");
			else if (className) rawClassName += className + " ";
		});
		return rawClassName;
	}
	var registerStyles = function registerStyles(cache, serialized, isStringTag) {
		var className = cache.key + "-" + serialized.name;
		if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) cache.registered[className] = serialized.styles;
	};
	var insertStyles = function insertStyles(cache, serialized, isStringTag) {
		registerStyles(cache, serialized, isStringTag);
		var className = cache.key + "-" + serialized.name;
		if (cache.inserted[serialized.name] === void 0) {
			var current = serialized;
			do {
				cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
				current = current.next;
			} while (current !== void 0);
		}
	};
	//#endregion
	//#region node_modules/@emotion/hash/dist/emotion-hash.esm.js
	function murmur2(str) {
		var h = 0;
		var k, i = 0, len = str.length;
		for (; len >= 4; ++i, len -= 4) {
			k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
			k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
			k ^= k >>> 24;
			h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
		}
		switch (len) {
			case 3: h ^= (str.charCodeAt(i + 2) & 255) << 16;
			case 2: h ^= (str.charCodeAt(i + 1) & 255) << 8;
			case 1:
				h ^= str.charCodeAt(i) & 255;
				h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
		}
		h ^= h >>> 13;
		h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
		return ((h ^ h >>> 15) >>> 0).toString(36);
	}
	//#endregion
	//#region node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
	var unitlessKeys = {
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
		fillOpacity: 1,
		floodOpacity: 1,
		stopOpacity: 1,
		strokeDasharray: 1,
		strokeDashoffset: 1,
		strokeMiterlimit: 1,
		strokeOpacity: 1,
		strokeWidth: 1
	};
	//#endregion
	//#region node_modules/@emotion/serialize/dist/emotion-serialize.esm.js
	var isDevelopment$1 = false;
	var hyphenateRegex = /[A-Z]|^ms/g;
	var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
	var isCustomProperty = function isCustomProperty(property) {
		return property.charCodeAt(1) === 45;
	};
	var isProcessableValue = function isProcessableValue(value) {
		return value != null && typeof value !== "boolean";
	};
	var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
		return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
	});
	var processStyleValue = function processStyleValue(key, value) {
		switch (key) {
			case "animation":
			case "animationName": if (typeof value === "string") return value.replace(animationRegex, function(match, p1, p2) {
				cursor = {
					name: p1,
					styles: p2,
					next: cursor
				};
				return p1;
			});
		}
		if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) return value + "px";
		return value;
	};
	var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
	function handleInterpolation(mergedProps, registered, interpolation) {
		if (interpolation == null) return "";
		var componentSelector = interpolation;
		if (componentSelector.__emotion_styles !== void 0) return componentSelector;
		switch (typeof interpolation) {
			case "boolean": return "";
			case "object":
				var keyframes = interpolation;
				if (keyframes.anim === 1) {
					cursor = {
						name: keyframes.name,
						styles: keyframes.styles,
						next: cursor
					};
					return keyframes.name;
				}
				var serializedStyles = interpolation;
				if (serializedStyles.styles !== void 0) {
					var next = serializedStyles.next;
					if (next !== void 0) while (next !== void 0) {
						cursor = {
							name: next.name,
							styles: next.styles,
							next: cursor
						};
						next = next.next;
					}
					return serializedStyles.styles + ";";
				}
				return createStringFromObject(mergedProps, registered, interpolation);
			case "function":
				if (mergedProps !== void 0) {
					var previousCursor = cursor;
					var result = interpolation(mergedProps);
					cursor = previousCursor;
					return handleInterpolation(mergedProps, registered, result);
				}
				break;
		}
		var asString = interpolation;
		if (registered == null) return asString;
		var cached = registered[asString];
		return cached !== void 0 ? cached : asString;
	}
	function createStringFromObject(mergedProps, registered, obj) {
		var string = "";
		if (Array.isArray(obj)) for (var i = 0; i < obj.length; i++) string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
		else for (var key in obj) {
			var value = obj[key];
			if (typeof value !== "object") {
				var asString = value;
				if (registered != null && registered[asString] !== void 0) string += key + "{" + registered[asString] + "}";
				else if (isProcessableValue(asString)) string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
			} else {
				if (key === "NO_COMPONENT_SELECTOR" && isDevelopment$1) throw new Error(noComponentSelectorMessage);
				if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
					for (var _i = 0; _i < value.length; _i++) if (isProcessableValue(value[_i])) string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
				} else {
					var interpolated = handleInterpolation(mergedProps, registered, value);
					switch (key) {
						case "animation":
						case "animationName":
							string += processStyleName(key) + ":" + interpolated + ";";
							break;
						default: string += key + "{" + interpolated + "}";
					}
				}
			}
		}
		return string;
	}
	var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
	var cursor;
	function serializeStyles(args, registered, mergedProps) {
		if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) return args[0];
		var stringMode = true;
		var styles = "";
		cursor = void 0;
		var strings = args[0];
		if (strings == null || strings.raw === void 0) {
			stringMode = false;
			styles += handleInterpolation(mergedProps, registered, strings);
		} else styles += strings[0];
		for (var i = 1; i < args.length; i++) {
			styles += handleInterpolation(mergedProps, registered, args[i]);
			if (stringMode) styles += strings[i];
		}
		labelPattern.lastIndex = 0;
		var identifierName = "";
		var match;
		while ((match = labelPattern.exec(styles)) !== null) identifierName += "-" + match[1];
		return {
			name: murmur2(styles) + identifierName,
			styles,
			next: cursor
		};
	}
	//#endregion
	//#region node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
	var syncFallback = function syncFallback(create) {
		return create();
	};
	var useInsertionEffect = react["useInsertionEffect"] ? react["useInsertionEffect"] : false;
	var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
	useInsertionEffect || react.useLayoutEffect;
	//#endregion
	//#region node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js
	var EmotionCacheContext = /* @__PURE__ */ react.createContext(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({ key: "css" }) : null);
	EmotionCacheContext.Provider;
	var withEmotionCache = function withEmotionCache(func) {
		return /* @__PURE__ */ (0, react.forwardRef)(function(props, ref) {
			return func(props, (0, react.useContext)(EmotionCacheContext), ref);
		});
	};
	var ThemeContext = /* @__PURE__ */ react.createContext({});
	({}).hasOwnProperty;
	//#endregion
	//#region node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
	var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
	var isPropValid = /* @__PURE__ */ memoize(function(prop) {
		return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
	});
	//#endregion
	//#region node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
	var isDevelopment = false;
	var testOmitPropsOnStringTag = isPropValid;
	var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
		return key !== "theme";
	};
	var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
		return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
	};
	var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
		var shouldForwardProp;
		if (options) {
			var optionsShouldForwardProp = options.shouldForwardProp;
			shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
				return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
			} : optionsShouldForwardProp;
		}
		if (typeof shouldForwardProp !== "function" && isReal) shouldForwardProp = tag.__emotion_forwardProp;
		return shouldForwardProp;
	};
	var Insertion = function Insertion(_ref) {
		var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
		registerStyles(cache, serialized, isStringTag);
		useInsertionEffectAlwaysWithSyncFallback(function() {
			return insertStyles(cache, serialized, isStringTag);
		});
		return null;
	};
	var createStyled = function createStyled(tag, options) {
		var isReal = tag.__emotion_real === tag;
		var baseTag = isReal && tag.__emotion_base || tag;
		var identifierName;
		var targetClassName;
		if (options !== void 0) {
			identifierName = options.label;
			targetClassName = options.target;
		}
		var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
		var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
		var shouldUseAs = !defaultShouldForwardProp("as");
		return function() {
			var args = arguments;
			var styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
			if (identifierName !== void 0) styles.push("label:" + identifierName + ";");
			if (args[0] == null || args[0].raw === void 0) styles.push.apply(styles, args);
			else {
				var templateStringsArr = args[0];
				styles.push(templateStringsArr[0]);
				var len = args.length;
				var i = 1;
				for (; i < len; i++) styles.push(args[i], templateStringsArr[i]);
			}
			var Styled = withEmotionCache(function(props, cache, ref) {
				var FinalTag = shouldUseAs && props.as || baseTag;
				var className = "";
				var classInterpolations = [];
				var mergedProps = props;
				if (props.theme == null) {
					mergedProps = {};
					for (var key in props) mergedProps[key] = props[key];
					mergedProps.theme = react.useContext(ThemeContext);
				}
				if (typeof props.className === "string") className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
				else if (props.className != null) className = props.className + " ";
				var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
				className += cache.key + "-" + serialized.name;
				if (targetClassName !== void 0) className += " " + targetClassName;
				var finalShouldForwardProp = shouldUseAs && shouldForwardProp === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
				var newProps = {};
				for (var _key in props) {
					if (shouldUseAs && _key === "as") continue;
					if (finalShouldForwardProp(_key)) newProps[_key] = props[_key];
				}
				newProps.className = className;
				if (ref) newProps.ref = ref;
				return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Insertion, {
					cache,
					serialized,
					isStringTag: typeof FinalTag === "string"
				}), /* @__PURE__ */ react.createElement(FinalTag, newProps));
			});
			Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
			Styled.defaultProps = tag.defaultProps;
			Styled.__emotion_real = Styled;
			Styled.__emotion_base = baseTag;
			Styled.__emotion_styles = styles;
			Styled.__emotion_forwardProp = shouldForwardProp;
			Object.defineProperty(Styled, "toString", { value: function value() {
				if (targetClassName === void 0 && isDevelopment) return "NO_COMPONENT_SELECTOR";
				return "." + targetClassName;
			} });
			Styled.withComponent = function(nextTag, nextOptions) {
				return createStyled(nextTag, _extends({}, options, nextOptions, { shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true) })).apply(void 0, styles);
			};
			return Styled;
		};
	};
	//#endregion
	//#region node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
	var tags = [
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
	];
	var styled = createStyled.bind(null);
	tags.forEach(function(tagName) {
		styled[tagName] = styled(tagName);
	});
	//#endregion
	//#region node_modules/react/cjs/react-jsx-runtime.production.js
	/**
	* @license React
	* react-jsx-runtime.production.js
	*
	* Copyright (c) Meta Platforms, Inc. and affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
		var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
		function jsxProd(type, config, maybeKey) {
			var key = null;
			void 0 !== maybeKey && (key = "" + maybeKey);
			void 0 !== config.key && (key = "" + config.key);
			if ("key" in config) {
				maybeKey = {};
				for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
			} else maybeKey = config;
			config = maybeKey.ref;
			return {
				$$typeof: REACT_ELEMENT_TYPE,
				type,
				key,
				ref: void 0 !== config ? config : null,
				props: maybeKey
			};
		}
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.jsx = jsxProd;
		exports.jsxs = jsxProd;
	}));
	//#endregion
	//#region node_modules/react/cjs/react-jsx-runtime.development.js
	/**
	* @license React
	* react-jsx-runtime.development.js
	*
	* Copyright (c) Meta Platforms, Inc. and affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_react_jsx_runtime_development = /* @__PURE__ */ __commonJSMin(((exports) => {
		"production" !== process.env.NODE_ENV && (function() {
			function getComponentNameFromType(type) {
				if (null == type) return null;
				if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
				if ("string" === typeof type) return type;
				switch (type) {
					case REACT_FRAGMENT_TYPE: return "Fragment";
					case REACT_PROFILER_TYPE: return "Profiler";
					case REACT_STRICT_MODE_TYPE: return "StrictMode";
					case REACT_SUSPENSE_TYPE: return "Suspense";
					case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
					case REACT_ACTIVITY_TYPE: return "Activity";
				}
				if ("object" === typeof type) switch ("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
					case REACT_PORTAL_TYPE: return "Portal";
					case REACT_CONTEXT_TYPE: return type.displayName || "Context";
					case REACT_CONSUMER_TYPE: return (type._context.displayName || "Context") + ".Consumer";
					case REACT_FORWARD_REF_TYPE:
						var innerType = type.render;
						type = type.displayName;
						type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
						return type;
					case REACT_MEMO_TYPE: return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
					case REACT_LAZY_TYPE:
						innerType = type._payload;
						type = type._init;
						try {
							return getComponentNameFromType(type(innerType));
						} catch (x) {}
				}
				return null;
			}
			function testStringCoercion(value) {
				return "" + value;
			}
			function checkKeyStringCoercion(value) {
				try {
					testStringCoercion(value);
					var JSCompiler_inline_result = !1;
				} catch (e) {
					JSCompiler_inline_result = !0;
				}
				if (JSCompiler_inline_result) {
					JSCompiler_inline_result = console;
					var JSCompiler_temp_const = JSCompiler_inline_result.error;
					var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
					JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
					return testStringCoercion(value);
				}
			}
			function getTaskName(type) {
				if (type === REACT_FRAGMENT_TYPE) return "<>";
				if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
				try {
					var name = getComponentNameFromType(type);
					return name ? "<" + name + ">" : "<...>";
				} catch (x) {
					return "<...>";
				}
			}
			function getOwner() {
				var dispatcher = ReactSharedInternals.A;
				return null === dispatcher ? null : dispatcher.getOwner();
			}
			function UnknownOwner() {
				return Error("react-stack-top-frame");
			}
			function hasValidKey(config) {
				if (hasOwnProperty.call(config, "key")) {
					var getter = Object.getOwnPropertyDescriptor(config, "key").get;
					if (getter && getter.isReactWarning) return !1;
				}
				return void 0 !== config.key;
			}
			function defineKeyPropWarningGetter(props, displayName) {
				function warnAboutAccessingKey() {
					specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
				}
				warnAboutAccessingKey.isReactWarning = !0;
				Object.defineProperty(props, "key", {
					get: warnAboutAccessingKey,
					configurable: !0
				});
			}
			function elementRefGetterWithDeprecationWarning() {
				var componentName = getComponentNameFromType(this.type);
				didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
				componentName = this.props.ref;
				return void 0 !== componentName ? componentName : null;
			}
			function ReactElement(type, key, props, owner, debugStack, debugTask) {
				var refProp = props.ref;
				type = {
					$$typeof: REACT_ELEMENT_TYPE,
					type,
					key,
					props,
					_owner: owner
				};
				null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
					enumerable: !1,
					get: elementRefGetterWithDeprecationWarning
				}) : Object.defineProperty(type, "ref", {
					enumerable: !1,
					value: null
				});
				type._store = {};
				Object.defineProperty(type._store, "validated", {
					configurable: !1,
					enumerable: !1,
					writable: !0,
					value: 0
				});
				Object.defineProperty(type, "_debugInfo", {
					configurable: !1,
					enumerable: !1,
					writable: !0,
					value: null
				});
				Object.defineProperty(type, "_debugStack", {
					configurable: !1,
					enumerable: !1,
					writable: !0,
					value: debugStack
				});
				Object.defineProperty(type, "_debugTask", {
					configurable: !1,
					enumerable: !1,
					writable: !0,
					value: debugTask
				});
				Object.freeze && (Object.freeze(type.props), Object.freeze(type));
				return type;
			}
			function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
				var children = config.children;
				if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
					for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++) validateChildKeys(children[isStaticChildren]);
					Object.freeze && Object.freeze(children);
				} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
				else validateChildKeys(children);
				if (hasOwnProperty.call(config, "key")) {
					children = getComponentNameFromType(type);
					var keys = Object.keys(config).filter(function(k) {
						return "key" !== k;
					});
					isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
					didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
				}
				children = null;
				void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
				hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
				if ("key" in config) {
					maybeKey = {};
					for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
				} else maybeKey = config;
				children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
				return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
			}
			function validateChildKeys(node) {
				isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
			}
			function isValidElement(object) {
				return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
			}
			var React = require("react"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
				return null;
			};
			React = { react_stack_bottom_frame: function(callStackForError) {
				return callStackForError();
			} };
			var specialPropKeyWarningShown;
			var didWarnAboutElementRef = {};
			var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
			var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
			var didWarnAboutKeySpread = {};
			exports.Fragment = REACT_FRAGMENT_TYPE;
			exports.jsx = function(type, config, maybeKey) {
				var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
				return jsxDEVImpl(type, config, maybeKey, !1, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
			};
			exports.jsxs = function(type, config, maybeKey) {
				var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
				return jsxDEVImpl(type, config, maybeKey, !0, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
			};
		})();
	}));
	//#endregion
	//#region src/NodeKey.tsx
	var import_jsx_runtime = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
		if (process.env.NODE_ENV === "production") module.exports = require_react_jsx_runtime_production();
		else module.exports = require_react_jsx_runtime_development();
	})))();
	var StyledNodeKey = styled.dt`
    //padding: 0 0.25rem;
    color: var(--theme-base04);
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
`;
	var NodeToggle = styled.div`
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
`;
	var NodeKey = ({ children, type, expandable, expanded, onClick }) => {
		const clickHandler = () => {
			if (expandable && !!onClick) onClick();
		};
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledNodeKey, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeToggle, {
			className: (0, import_classnames.default)(`type--${type}`, {
				expandable,
				open: expanded
			}),
			onClick: clickHandler
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [children, ":"] })] });
	};
	//#endregion
	//#region src/JSONViewContext.tsx
	var preferredThemes = {
		dark: monokai_default,
		light: google_default
	};
	var defaultSettings = {
		collapsedStringLength: 25,
		maxArrayElements: 25,
		maxObjectElements: 50,
		defaultOpenLevels: 1
	};
	var JSONViewContext = (0, react.createContext)(defaultSettings);
	//#endregion
	//#region src/StyledNode.tsx
	var StyledNode = styled.dl`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: text;
    min-height: 1.25rem;
    gap: 0.5rem;
`;
	//#endregion
	//#region src/MoreResultsTitle.tsx
	var MoreResultsTitle = styled.dt`
    color: var(--theme-base0D);
    display: block;
    font-weight: 700;
    cursor: pointer;
`;
	//#endregion
	//#region src/MoreResultsLink.tsx
	var MoreResultsLink = styled.dd`
    color: var(--theme-base0D);
    display: block;
    font-weight: 700;
    cursor: pointer;
`;
	//#endregion
	//#region src/PrevArrayValues.tsx
	var PrevArrayValues = ({ currentIndex, onClick }) => {
		const { maxArrayElements } = (0, react.useContext)(JSONViewContext);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledNode, {
			onClick,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MoreResultsTitle, { children: [
				"[0 … ",
				currentIndex * maxArrayElements - 1,
				"]"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreResultsLink, {
				className: "json-view--value",
				children: "prev"
			})]
		});
	};
	//#endregion
	//#region src/NextArrayValues.tsx
	var NextArrayValues = ({ currentIndex, maxItems, onClick }) => {
		const { maxArrayElements } = (0, react.useContext)(JSONViewContext);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "json-view--node",
			onClick,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
				className: "json-view--key",
				children: [
					"[",
					(currentIndex + 1) * maxArrayElements,
					" … ",
					maxItems - 1,
					"]"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "json-view--value",
				children: "next"
			})]
		});
	};
	//#endregion
	//#region src/ArrayNode.tsx
	var CollapsedArray = styled.span`
    &::before {
        content: '[ ';
    }

    &::after {
        content: ' ]';
    }
`;
	var ArrayNode = ({ value, nodeKey, open = 0 }) => {
		const expanded = Math.max(open ?? 0, 0) > 0;
		const { maxArrayElements } = (0, react.useContext)(JSONViewContext);
		const [show, setShow] = (0, react.useState)(expanded);
		const [arrayIndex, setArrayIndex] = (0, react.useState)(0);
		const maxIndex = Math.floor(value.length / maxArrayElements);
		const onClickUp = () => {
			setArrayIndex(Math.max(arrayIndex - 1, 0));
		};
		const onClickDown = () => {
			setArrayIndex(Math.min(maxIndex, arrayIndex + 1));
		};
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledNode, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeKey, {
			expandable: !!value.length,
			type: typeof value,
			expanded: show,
			onClick: () => setShow(!show),
			children: nodeKey
		}), !show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsedArray, { children: value.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["… ", value.length] }) }) })] }), show && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
			arrayIndex > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrevArrayValues, {
				currentIndex: arrayIndex,
				onClick: onClickUp
			}),
			value.filter((_, index) => Math.floor(index / maxArrayElements) === arrayIndex).map((v, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JSONNode, {
				nodeKey: index + arrayIndex * maxArrayElements,
				value: v
			}, index)),
			arrayIndex < maxIndex && maxIndex > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextArrayValues, {
				currentIndex: arrayIndex,
				maxItems: value.length,
				onClick: onClickDown
			})
		] })] });
	};
	var ArrayNode_default = (0, react.memo)(ArrayNode);
	//#endregion
	//#region src/ObjectNode.tsx
	var CollapsedObject = styled.span`
    &::before {
        content: '{ ';
    }
    &::after {
        content: ' }';
    }
`;
	var ObjectNode = ({ value, nodeKey, open = 0 }) => {
		const [show, setShow] = (0, react.useState)(Math.max(open ?? 0, 0) > 0);
		const { collapsedStringLength } = (0, react.useContext)(JSONViewContext);
		const keys = Object.keys(value);
		const collapsedKeys = keys.map((key) => `${key}:${JSON.stringify(value[key])}`).join(", ");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledNode, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeKey, {
			expandable: keys.length > 0,
			expanded: show,
			onClick: () => setShow(!show),
			type: typeof value,
			children: nodeKey
		}), !show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsedObject, { children: [collapsedKeys.slice(0, collapsedStringLength), collapsedKeys.length > collapsedStringLength && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ms-1",
			children: "…"
		})] }) })] }), show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", { children: keys.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JSONNode, {
			nodeKey: key,
			value: value[key],
			open: open - 1
		}, key)) })] });
	};
	var ObjectNode_default = (0, react.memo)(ObjectNode);
	//#endregion
	//#region src/NumberNode.tsx
	var StyledDD$1 = styled.dd`
    color: var(--theme-base09);
`;
	var NumberNode = ({ nodeKey, value }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledNode, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeKey, {
			type: typeof value,
			children: nodeKey
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledDD$1, { children: jsonNodeValue(value) })] });
	};
	//#endregion
	//#region src/StringNode.tsx
	var StyledDD = styled.dd`
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
`;
	var StringNode = ({ nodeKey, value }) => {
		const { collapsedStringLength } = (0, react.useContext)(JSONViewContext);
		const [show, setShow] = (0, react.useState)(value.length <= collapsedStringLength);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledNode, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeKey, {
			expandable: value.length > collapsedStringLength,
			expanded: show,
			onClick: () => setShow(!show),
			type: typeof value,
			children: nodeKey
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledDD, {
			className: (0, import_classnames.default)({ collapsed: !show }),
			children: [!show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: value.replace(/[\n\t]/g, " ") }), show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: value })]
		})] });
	};
	//#endregion
	//#region src/JSONNode.tsx
	var JSONNode = ({ nodeKey, value, open = 0 }) => {
		switch (nodeType(value)) {
			case "number":
			case "boolean":
			case "bigint": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberNode, {
				value,
				nodeKey,
				open
			});
			case "string": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StringNode, {
				value,
				nodeKey,
				open
			});
			case "object": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ObjectNode_default, {
				nodeKey,
				value,
				open
			});
			case "array": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrayNode_default, {
				nodeKey,
				value,
				open
			});
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledNode, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeKey, {
			type: typeof value,
			children: nodeKey
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: jsonNodeValue(value) })] });
	};
	//#endregion
	//#region src/JSONViewStyleContainer.tsx
	var JSONViewStyleContainer = styled.div`
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
	var JSONView = ({ data, theme, dark, rootNodeName, collapsedStringLength, maxArrayElements, maxObjectElements, defaultOpenLevels }) => {
		const [currentTheme, setCurrentTheme] = (0, react.useState)(google_default);
		const [style, setStyle] = (0, react.useState)({});
		const [json, setJSON] = (0, react.useState)({});
		const parentContext = (0, react.useContext)(JSONViewContext);
		const [context, setContext] = (0, react.useState)({
			...defaultSettings,
			...parentContext
		});
		(0, react.useEffect)(() => {
			setContext({
				...defaultSettings,
				...parentContext
			});
		}, [parentContext]);
		(0, react.useEffect)(() => {
			setCurrentTheme(theme || (dark ? preferredThemes.dark : preferredThemes.light));
		}, [theme]);
		(0, react.useEffect)(() => {
			setContext({
				...context,
				...parentContext,
				collapsedStringLength: collapsedStringLength ?? parentContext.collapsedStringLength,
				maxArrayElements: maxArrayElements ?? parentContext.maxArrayElements,
				maxObjectElements: maxObjectElements ?? parentContext.maxObjectElements,
				defaultOpenLevels: defaultOpenLevels ?? parentContext.defaultOpenLevels
			});
		}, [
			collapsedStringLength,
			maxArrayElements,
			maxObjectElements,
			defaultOpenLevels
		]);
		(0, react.useEffect)(() => {
			setStyle({
				"--theme-base00": currentTheme.base00,
				"--theme-base01": currentTheme.base01,
				"--theme-base02": currentTheme.base02,
				"--theme-base03": currentTheme.base03,
				"--theme-base04": currentTheme.base04,
				"--theme-base05": currentTheme.base05,
				"--theme-base06": currentTheme.base06,
				"--theme-base07": currentTheme.base07,
				"--theme-base08": currentTheme.base08,
				"--theme-base09": currentTheme.base09,
				"--theme-base0A": currentTheme.base0A,
				"--theme-base0B": currentTheme.base0B,
				"--theme-base0C": currentTheme.base0C,
				"--theme-base0D": currentTheme.base0D,
				"--theme-base0E": currentTheme.base0E,
				"--theme-base0F": currentTheme.base0F
			});
		}, [currentTheme]);
		(0, react.useEffect)(() => {
			setJSON(data);
		}, [data]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JSONViewContext.Provider, {
			value: context,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JSONViewStyleContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: (0, import_classnames.default)("json-view", { "json-view--dark": dark }),
				style,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JSONNode, {
					nodeKey: rootNodeName || "root",
					value: json,
					open: defaultOpenLevels
				}) })
			}) })
		});
	};
	//#endregion
	exports.JSONView = JSONView;
	exports.JSONViewContext = JSONViewContext;
	exports.defaultSettings = defaultSettings;
	exports.google = google_default;
	exports.monokai = monokai_default;
	exports.preferredThemes = preferredThemes;
});

//# sourceMappingURL=index.umd.js.map