(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("react")) : typeof define === "function" && define.amd ? define(["exports", "react"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global["json-view"] = {}, global.React));
})(this, (function(exports2, React) {
  "use strict";
  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (e) {
      for (const k in e) {
        if (k !== "default") {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }
  const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production = {};
  /**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactJsxRuntime_production;
  function requireReactJsxRuntime_production() {
    if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
    hasRequiredReactJsxRuntime_production = 1;
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    function jsxProd(type, config, maybeKey) {
      var key = null;
      void 0 !== maybeKey && (key = "" + maybeKey);
      void 0 !== config.key && (key = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          "key" !== propName && (maybeKey[propName] = config[propName]);
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
    reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
    reactJsxRuntime_production.jsx = jsxProd;
    reactJsxRuntime_production.jsxs = jsxProd;
    return reactJsxRuntime_production;
  }
  var reactJsxRuntime_development = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactJsxRuntime_development;
  function requireReactJsxRuntime_development() {
    if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
    hasRequiredReactJsxRuntime_development = 1;
    "production" !== process.env.NODE_ENV && (function() {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
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
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, self2, source, owner, props, debugStack, debugTask) {
        self2 = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== self2 ? self2 : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self2, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                validateChildKeys(children[isStaticChildren]);
              Object.freeze && Object.freeze(children);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function(k) {
            return "key" !== k;
          });
          isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
          didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ), didWarnAboutKeySpread[children + isStaticChildren] = true);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(
          type,
          children,
          self2,
          source,
          getOwner(),
          maybeKey,
          debugStack,
          debugTask
        );
      }
      function validateChildKeys(node2) {
        "object" === typeof node2 && null !== node2 && node2.$$typeof === REACT_ELEMENT_TYPE && node2._store && (node2._store.validated = 1);
      }
      var React$1 = React, REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React$1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      React$1 = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = React$1.react_stack_bottom_frame.bind(
        React$1,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutKeySpread = {};
      reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
      reactJsxRuntime_development.jsx = function(type, config, maybeKey, source, self2) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          false,
          source,
          self2,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      reactJsxRuntime_development.jsxs = function(type, config, maybeKey, source, self2) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          true,
          source,
          self2,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
    })();
    return reactJsxRuntime_development;
  }
  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    if (process.env.NODE_ENV === "production") {
      jsxRuntime.exports = requireReactJsxRuntime_production();
    } else {
      jsxRuntime.exports = requireReactJsxRuntime_development();
    }
    return jsxRuntime.exports;
  }
  var jsxRuntimeExports = requireJsxRuntime();
  const google = {
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
  const monokai = {
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
  const nodeType = (value) => {
    const type = typeof value;
    switch (type) {
      case "object":
        if (value === null) {
          return "null";
        }
        if (Array.isArray(value)) {
          return "array";
        }
        return type;
      default:
        return type;
    }
  };
  const jsonNodeValue = (value) => {
    try {
      return JSON.stringify(value, void 0, 2);
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
      return null;
    }
  };
  var classnames = { exports: {} };
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  var hasRequiredClassnames;
  function requireClassnames() {
    if (hasRequiredClassnames) return classnames.exports;
    hasRequiredClassnames = 1;
    (function(module2) {
      (function() {
        var hasOwn = {}.hasOwnProperty;
        function classNames2() {
          var classes = "";
          for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (arg) {
              classes = appendClass(classes, parseValue(arg));
            }
          }
          return classes;
        }
        function parseValue(arg) {
          if (typeof arg === "string" || typeof arg === "number") {
            return arg;
          }
          if (typeof arg !== "object") {
            return "";
          }
          if (Array.isArray(arg)) {
            return classNames2.apply(null, arg);
          }
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            return arg.toString();
          }
          var classes = "";
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes = appendClass(classes, key);
            }
          }
          return classes;
        }
        function appendClass(value, newClass) {
          if (!newClass) {
            return value;
          }
          if (value) {
            return value + " " + newClass;
          }
          return value + newClass;
        }
        if (module2.exports) {
          classNames2.default = classNames2;
          module2.exports = classNames2;
        } else {
          window.classNames = classNames2;
        }
      })();
    })(classnames);
    return classnames.exports;
  }
  var classnamesExports = requireClassnames();
  const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  function sheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    }
    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
    return void 0;
  }
  function createStyleElement(options) {
    var tag = document.createElement("style");
    tag.setAttribute("data-emotion", options.key);
    if (options.nonce !== void 0) {
      tag.setAttribute("nonce", options.nonce);
    }
    tag.appendChild(document.createTextNode(""));
    tag.setAttribute("data-s", "");
    return tag;
  }
  var StyleSheet = /* @__PURE__ */ (function() {
    function StyleSheet2(options) {
      var _this = this;
      this._insertTag = function(tag) {
        var before;
        if (_this.tags.length === 0) {
          if (_this.insertionPoint) {
            before = _this.insertionPoint.nextSibling;
          } else if (_this.prepend) {
            before = _this.container.firstChild;
          } else {
            before = _this.before;
          }
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }
        _this.container.insertBefore(tag, before);
        _this.tags.push(tag);
      };
      this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce;
      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.insertionPoint = options.insertionPoint;
      this.before = null;
    }
    var _proto = StyleSheet2.prototype;
    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
      if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }
      var tag = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);
        try {
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e) {
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }
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
    return StyleSheet2;
  })();
  var MS = "-ms-";
  var MOZ = "-moz-";
  var WEBKIT = "-webkit-";
  var COMMENT = "comm";
  var RULESET = "rule";
  var DECLARATION = "decl";
  var IMPORT = "@import";
  var KEYFRAMES = "@keyframes";
  var LAYER = "@layer";
  var abs = Math.abs;
  var from = String.fromCharCode;
  var assign = Object.assign;
  function hash(value, length2) {
    return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
  }
  function trim(value) {
    return value.trim();
  }
  function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
  }
  function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
  }
  function indexof(value, search) {
    return value.indexOf(search);
  }
  function charat(value, index) {
    return value.charCodeAt(index) | 0;
  }
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array) {
    return array.push(value), value;
  }
  function combine(array, callback) {
    return array.map(callback).join("");
  }
  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = "";
  function node(value, root, parent, type, props, children, length2) {
    return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
  }
  function copy(root, props) {
    return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10)
      column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10)
      column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice(begin, end) {
    return substr(characters, begin, end);
  }
  function token(type) {
    switch (type) {
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
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type) {
    return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
  }
  function whitespace(type) {
    while (character = peek())
      if (character < 33)
        next();
      else
        break;
    return token(type) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index, count) {
    while (--count && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
        break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type) {
    while (next())
      switch (character) {
        // ] ) " '
        case type:
          return position;
        // " '
        case 34:
        case 39:
          if (type !== 34 && type !== 39)
            delimiter(character);
          break;
        // (
        case 40:
          if (type === 41)
            delimiter(type);
          break;
        // \
        case 92:
          next();
          break;
      }
    return position;
  }
  function commenter(type, index) {
    while (next())
      if (type + character === 47 + 10)
        break;
      else if (type + character === 42 + 42 && peek() === 47)
        break;
    return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
  }
  function identifier(index) {
    while (!token(peek()))
      next();
    return slice(index, position);
  }
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type = "";
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters2 = type;
    while (scanning)
      switch (previous = character2, character2 = next()) {
        // (
        case 40:
          if (previous != 108 && charat(characters2, length2 - 1) == 58) {
            if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
              ampersand = -1;
            break;
          }
        // " ' [
        case 34:
        case 39:
        case 91:
          characters2 += delimit(character2);
          break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace(previous);
          break;
        // \
        case 92:
          characters2 += escaping(caret() - 1, 7);
          continue;
        // /
        case 47:
          switch (peek()) {
            case 42:
            case 47:
              append(comment(commenter(next(), caret()), root, parent), declarations);
              break;
            default:
              characters2 += "/";
          }
          break;
        // {
        case 123 * variable:
          points[index++] = strlen(characters2) * ampersand;
        // } ; \0
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            // \0 }
            case 0:
            case 125:
              scanning = 0;
            // ;
            case 59 + offset:
              if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
              if (property > 0 && strlen(characters2) - length2)
                append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
              break;
            // @ ;
            case 59:
              characters2 += ";";
            // { rule/at-rule
            default:
              append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
              if (character2 === 123)
                if (offset === 0)
                  parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
                else
                  switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                    // d l m s
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                      break;
                    default:
                      parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                  }
          }
          index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
          break;
        // :
        case 58:
          length2 = 1 + strlen(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev() == 125)
              continue;
          }
          switch (characters2 += from(character2), character2 * variable) {
            // &
            case 38:
              ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
              break;
            // ,
            case 44:
              points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
              break;
            // @
            case 64:
              if (peek() === 45)
                characters2 += delimit(next());
              atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
              break;
            // -
            case 45:
              if (previous === 45 && strlen(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [""];
    var size = sizeof(rule);
    for (var i = 0, j = 0, k = 0; i < index; ++i)
      for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
        if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
          props[k++] = z;
    return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
  }
  function comment(value, root, parent) {
    return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
  }
  function declaration(value, root, parent, length2) {
    return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
  }
  function serialize(children, callback) {
    var output = "";
    var length2 = sizeof(children);
    for (var i = 0; i < length2; i++)
      output += callback(children[i], i, children, callback) || "";
    return output;
  }
  function stringify(element, index, children, callback) {
    switch (element.type) {
      case LAYER:
        if (element.children.length) break;
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize(element.children, callback) + "}";
      case RULESET:
        element.value = element.props.join(",");
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }
  function middleware(collection) {
    var length2 = sizeof(collection);
    return function(element, index, children, callback) {
      var output = "";
      for (var i = 0; i < length2; i++)
        output += collection[i](element, index, children, callback) || "";
      return output;
    };
  }
  function rulesheet(callback) {
    return function(element) {
      if (!element.root) {
        if (element = element.return)
          callback(element);
      }
    };
  }
  function memoize(fn) {
    var cache = /* @__PURE__ */ Object.create(null);
    return function(arg) {
      if (cache[arg] === void 0) cache[arg] = fn(arg);
      return cache[arg];
    };
  }
  var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
    var previous = 0;
    var character2 = 0;
    while (true) {
      previous = character2;
      character2 = peek();
      if (previous === 38 && character2 === 12) {
        points[index] = 1;
      }
      if (token(character2)) {
        break;
      }
      next();
    }
    return slice(begin, position);
  };
  var toRules = function toRules2(parsed, points) {
    var index = -1;
    var character2 = 44;
    do {
      switch (token(character2)) {
        case 0:
          if (character2 === 38 && peek() === 12) {
            points[index] = 1;
          }
          parsed[index] += identifierWithPointTracking(position - 1, points, index);
          break;
        case 2:
          parsed[index] += delimit(character2);
          break;
        case 4:
          if (character2 === 44) {
            parsed[++index] = peek() === 58 ? "&\f" : "";
            points[index] = parsed[index].length;
            break;
          }
        // fallthrough
        default:
          parsed[index] += from(character2);
      }
    } while (character2 = next());
    return parsed;
  };
  var getRules = function getRules2(value, points) {
    return dealloc(toRules(alloc(value), points));
  };
  var fixedElements = /* @__PURE__ */ new WeakMap();
  var compat = function compat2(element) {
    if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
      return;
    }
    var value = element.value;
    var parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while (parent.type !== "rule") {
      parent = parent.parent;
      if (!parent) return;
    }
    if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
      return;
    }
    if (isImplicitRule) {
      return;
    }
    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;
    for (var i = 0, k = 0; i < rules.length; i++) {
      for (var j = 0; j < parentRules.length; j++, k++) {
        element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  };
  var removeLabel = function removeLabel2(element) {
    if (element.type === "decl") {
      var value = element.value;
      if (
        // charcode for l
        value.charCodeAt(0) === 108 && // charcode for b
        value.charCodeAt(2) === 98
      ) {
        element["return"] = "";
        element.value = "";
      }
    }
  };
  function prefix(value, length2) {
    switch (hash(value, length2)) {
      // color-adjust
      case 5103:
        return WEBKIT + "print-" + value + value;
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
        return WEBKIT + value + value;
      // appearance, user-select, transform, hyphens, text-size-adjust
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      // flex, flex-direction
      case 6828:
      case 4268:
        return WEBKIT + value + MS + value + value;
      // order
      case 6165:
        return WEBKIT + value + MS + "flex-" + value + value;
      // align-items
      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
      // align-self
      case 5443:
        return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
      // align-content
      case 4675:
        return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
      // flex-shrink
      case 5548:
        return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
      // flex-basis
      case 5292:
        return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
      // flex-grow
      case 6060:
        return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
      // transition
      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
      // cursor
      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
      // background, background-image
      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
      // justify-content
      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
      // (margin|padding)-inline-(start|end)
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
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
        if (strlen(value) - 1 - length2 > 6) switch (charat(value, length2 + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (charat(value, length2 + 4) !== 45) break;
          // (f)ill-available, (f)it-content
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          // (s)tretch
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
        break;
      // position: sticky
      case 4949:
        if (charat(value, length2 + 1) !== 115) break;
      // display: (flex|inline-flex)
      case 6444:
        switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
          // stic(k)y
          case 107:
            return replace(value, ":", ":" + WEBKIT) + value;
          // (inline-)?fl(e)x
          case 101:
            return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        }
        break;
      // writing-mode
      case 5936:
        switch (charat(value, length2 + 11)) {
          // vertical-l(r)
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
          // vertical-r(l)
          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
          // horizontal(-)tb
          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
        }
        return WEBKIT + value + MS + value + value;
    }
    return value;
  }
  var prefixer = function prefixer2(element, index, children, callback) {
    if (element.length > -1) {
      if (!element["return"]) switch (element.type) {
        case DECLARATION:
          element["return"] = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, {
            value: replace(element.value, "@", "@" + WEBKIT)
          })], callback);
        case RULESET:
          if (element.length) return combine(element.props, function(value) {
            switch (match(value, /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                return serialize([copy(element, {
                  props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                })], callback);
              // :placeholder
              case "::placeholder":
                return serialize([copy(element, {
                  props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                }), copy(element, {
                  props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                }), copy(element, {
                  props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                })], callback);
            }
            return "";
          });
      }
    }
  };
  var defaultStylisPlugins = [prefixer];
  var createCache = function createCache2(options) {
    var key = options.key;
    if (key === "css") {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(ssrStyles, function(node2) {
        var dataEmotionAttribute = node2.getAttribute("data-emotion");
        if (dataEmotionAttribute.indexOf(" ") === -1) {
          return;
        }
        document.head.appendChild(node2);
        node2.setAttribute("data-s", "");
      });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    var inserted = {};
    var container;
    var nodesToHydrate = [];
    {
      container = options.container || document.head;
      Array.prototype.forEach.call(
        // this means we will ignore elements which don't have a space in them which
        // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
        document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
        function(node2) {
          var attrib = node2.getAttribute("data-emotion").split(" ");
          for (var i = 1; i < attrib.length; i++) {
            inserted[attrib[i]] = true;
          }
          nodesToHydrate.push(node2);
        }
      );
    }
    var _insert;
    var omnipresentPlugins = [compat, removeLabel];
    {
      var currentSheet;
      var finalizingPlugins = [stringify, rulesheet(function(rule) {
        currentSheet.insert(rule);
      })];
      var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
      var stylis = function stylis2(styles) {
        return serialize(compile(styles), serializer);
      };
      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;
        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    }
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
  var isBrowser = true;
  function getRegisteredStyles(registered, registeredStyles, classNames2) {
    var rawClassName = "";
    classNames2.split(" ").forEach(function(className) {
      if (registered[className] !== void 0) {
        registeredStyles.push(registered[className] + ";");
      } else if (className) {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if (
      // we only need to add the styles to the registered cache if the
      // class name could be used further down
      // the tree but if it's a string tag, we know it won't
      // so we don't have to add it to registered cache.
      // this improves memory usage since we can avoid storing the whole style string
      (isStringTag === false || // we need to always store it if we're in compat mode and
      // in node since emotion-server relies on whether a style is in
      // the registered cache to know whether a style is global or not
      // also, note that this check will be dead code eliminated in the browser
      isBrowser === false) && cache.registered[className] === void 0
    ) {
      cache.registered[className] = serialized.styles;
    }
  };
  var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
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
  function murmur2(str) {
    var h = 0;
    var k, i = 0, len = str.length;
    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
      k = /* Math.imul(k, m): */
      (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
      k ^= /* k >>> r: */
      k >>> 24;
      h = /* Math.imul(k, m): */
      (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 255) << 16;
      case 2:
        h ^= (str.charCodeAt(i + 1) & 255) << 8;
      case 1:
        h ^= str.charCodeAt(i) & 255;
        h = /* Math.imul(h, m): */
        (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }
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
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };
  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
  var isCustomProperty = function isCustomProperty2(property) {
    return property.charCodeAt(1) === 45;
  };
  var isProcessableValue = function isProcessableValue2(value) {
    return value != null && typeof value !== "boolean";
  };
  var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
  });
  var processStyleValue = function processStyleValue2(key, value) {
    switch (key) {
      case "animation":
      case "animationName": {
        if (typeof value === "string") {
          return value.replace(animationRegex, function(match2, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
    }
    if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
      return value + "px";
    }
    return value;
  };
  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return "";
    }
    var componentSelector = interpolation;
    if (componentSelector.__emotion_styles !== void 0) {
      return componentSelector;
    }
    switch (typeof interpolation) {
      case "boolean": {
        return "";
      }
      case "object": {
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
          var next2 = serializedStyles.next;
          if (next2 !== void 0) {
            while (next2 !== void 0) {
              cursor = {
                name: next2.name,
                styles: next2.styles,
                next: cursor
              };
              next2 = next2.next;
            }
          }
          var styles = serializedStyles.styles + ";";
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
      case "function": {
        if (mergedProps !== void 0) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }
        break;
      }
    }
    var asString = interpolation;
    if (registered == null) {
      return asString;
    }
    var cached = registered[asString];
    return cached !== void 0 ? cached : asString;
  }
  function createStringFromObject(mergedProps, registered, obj) {
    var string = "";
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      }
    } else {
      for (var key in obj) {
        var value = obj[key];
        if (typeof value !== "object") {
          var asString = value;
          if (registered != null && registered[asString] !== void 0) {
            string += key + "{" + registered[asString] + "}";
          } else if (isProcessableValue(asString)) {
            string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
          }
        } else {
          if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);
            switch (key) {
              case "animation":
              case "animationName": {
                string += processStyleName(key) + ":" + interpolated + ";";
                break;
              }
              default: {
                string += key + "{" + interpolated + "}";
              }
            }
          }
        }
      }
    }
    return string;
  }
  var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
  var cursor;
  function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
      return args[0];
    }
    var stringMode = true;
    var styles = "";
    cursor = void 0;
    var strings = args[0];
    if (strings == null || strings.raw === void 0) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings);
    } else {
      var asTemplateStringsArr = strings;
      styles += asTemplateStringsArr[0];
    }
    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i]);
      if (stringMode) {
        var templateStringsArr = strings;
        styles += templateStringsArr[i];
      }
    }
    labelPattern.lastIndex = 0;
    var identifierName = "";
    var match2;
    while ((match2 = labelPattern.exec(styles)) !== null) {
      identifierName += "-" + match2[1];
    }
    var name = murmur2(styles) + identifierName;
    return {
      name,
      styles,
      next: cursor
    };
  }
  var syncFallback = function syncFallback2(create) {
    return create();
  };
  var useInsertionEffect = React__namespace["useInsertionEffect"] ? React__namespace["useInsertionEffect"] : false;
  var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
  var EmotionCacheContext = /* @__PURE__ */ React__namespace.createContext(
    // we're doing this to avoid preconstruct's dead code elimination in this one case
    // because this module is primarily intended for the browser and node
    // but it's also required in react native and similar environments sometimes
    // and we could have a special build just for that
    // but this is much easier and the native packages
    // might use a different theme context in the future anyway
    typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
      key: "css"
    }) : null
  );
  EmotionCacheContext.Provider;
  var withEmotionCache = function withEmotionCache2(func) {
    return /* @__PURE__ */ React.forwardRef(function(props, ref) {
      var cache = React.useContext(EmotionCacheContext);
      return func(props, cache, ref);
    });
  };
  var ThemeContext = /* @__PURE__ */ React__namespace.createContext({});
  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
  var isPropValid = /* @__PURE__ */ memoize(
    function(prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    }
    /* Z+1 */
  );
  var testOmitPropsOnStringTag = isPropValid;
  var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
    return key !== "theme";
  };
  var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
    return typeof tag === "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
  };
  var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
    var shouldForwardProp;
    if (options) {
      var optionsShouldForwardProp = options.shouldForwardProp;
      shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
        return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
      } : optionsShouldForwardProp;
    }
    if (typeof shouldForwardProp !== "function" && isReal) {
      shouldForwardProp = tag.__emotion_forwardProp;
    }
    return shouldForwardProp;
  };
  var Insertion = function Insertion2(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag);
    useInsertionEffectAlwaysWithSyncFallback(function() {
      return insertStyles(cache, serialized, isStringTag);
    });
    return null;
  };
  var createStyled = function createStyled2(tag, options) {
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
      if (identifierName !== void 0) {
        styles.push("label:" + identifierName + ";");
      }
      if (args[0] == null || args[0].raw === void 0) {
        styles.push.apply(styles, args);
      } else {
        var templateStringsArr = args[0];
        styles.push(templateStringsArr[0]);
        var len = args.length;
        var i = 1;
        for (; i < len; i++) {
          styles.push(args[i], templateStringsArr[i]);
        }
      }
      var Styled = withEmotionCache(function(props, cache, ref) {
        var FinalTag = shouldUseAs && props.as || baseTag;
        var className = "";
        var classInterpolations = [];
        var mergedProps = props;
        if (props.theme == null) {
          mergedProps = {};
          for (var key in props) {
            mergedProps[key] = props[key];
          }
          mergedProps.theme = React__namespace.useContext(ThemeContext);
        }
        if (typeof props.className === "string") {
          className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }
        var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
        className += cache.key + "-" + serialized.name;
        if (targetClassName !== void 0) {
          className += " " + targetClassName;
        }
        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
        var newProps = {};
        for (var _key in props) {
          if (shouldUseAs && _key === "as") continue;
          if (finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }
        newProps.className = className;
        if (ref) {
          newProps.ref = ref;
        }
        return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(Insertion, {
          cache,
          serialized,
          isStringTag: typeof FinalTag === "string"
        }), /* @__PURE__ */ React__namespace.createElement(FinalTag, newProps));
      });
      Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
      Styled.defaultProps = tag.defaultProps;
      Styled.__emotion_real = Styled;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_styles = styles;
      Styled.__emotion_forwardProp = shouldForwardProp;
      Object.defineProperty(Styled, "toString", {
        value: function value() {
          return "." + targetClassName;
        }
      });
      Styled.withComponent = function(nextTag, nextOptions) {
        var newStyled = createStyled2(nextTag, _extends({}, options, nextOptions, {
          shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
        }));
        return newStyled.apply(void 0, styles);
      };
      return Styled;
    };
  };
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
  ];
  var styled = createStyled.bind(null);
  tags.forEach(function(tagName) {
    styled[tagName] = styled(tagName);
  });
  const StyledNodeKey = styled.dt`
    //padding: 0 0.25rem;
    color: var(--theme-base04);
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
`;
  const NodeToggle = styled.div`
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
  const NodeKey = ({ children, type, expandable, expanded, onClick }) => {
    const clickHandler = () => {
      if (expandable && !!onClick) {
        onClick();
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledNodeKey, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(NodeToggle, { className: classNames(`type--${type}`, { expandable, open: expanded }), onClick: clickHandler }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        children,
        ":"
      ] })
    ] });
  };
  const preferredThemes = {
    dark: monokai,
    light: google
  };
  const defaultSettings = {
    collapsedStringLength: 25,
    maxArrayElements: 25,
    maxObjectElements: 50,
    defaultOpenLevels: 1
  };
  const JSONViewContext = React.createContext(defaultSettings);
  const StyledNode = styled.dl`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: text;
    min-height: 1.25rem;
    gap: 0.5rem;
`;
  const MoreResultsTitle = styled.dt`
    color: var(--theme-base0D);
    display: block;
    font-weight: 700;
    cursor: pointer;
`;
  const MoreResultsLink = styled.dd`
    color: var(--theme-base0D);
    display: block;
    font-weight: 700;
    cursor: pointer;
`;
  const PrevArrayValues = ({ currentIndex, onClick }) => {
    const { maxArrayElements } = React.useContext(JSONViewContext);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledNode, { onClick, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(MoreResultsTitle, { children: [
        "[0 … ",
        currentIndex * maxArrayElements - 1,
        "]"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MoreResultsLink, { className: "json-view--value", children: "prev" })
    ] });
  };
  const NextArrayValues = ({ currentIndex, maxItems, onClick }) => {
    const { maxArrayElements } = React.useContext(JSONViewContext);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "json-view--node", onClick, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("dt", { className: "json-view--key", children: [
        "[",
        (currentIndex + 1) * maxArrayElements,
        " … ",
        maxItems - 1,
        "]"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "json-view--value", children: "next" })
    ] });
  };
  const CollapsedArray = styled.span`
    &::before {
        content: '[ ';
    }

    &::after {
        content: ' ]';
    }
`;
  const ArrayNode = ({ value, nodeKey, open = 0 }) => {
    const expanded = Math.max(open ?? 0, 0) > 0;
    const { maxArrayElements } = React.useContext(JSONViewContext);
    const [show, setShow] = React.useState(expanded);
    const [arrayIndex, setArrayIndex] = React.useState(0);
    const maxIndex = Math.floor(value.length / maxArrayElements);
    const onClickUp = () => {
      setArrayIndex(Math.max(arrayIndex - 1, 0));
    };
    const onClickDown = () => {
      setArrayIndex(Math.min(maxIndex, arrayIndex + 1));
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledNode, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          NodeKey,
          {
            expandable: !!value.length,
            type: typeof value,
            expanded: show,
            onClick: () => setShow(!show),
            children: nodeKey
          }
        ),
        !show && /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsedArray, { children: value.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "… ",
          value.length
        ] }) }) })
      ] }),
      show && /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { children: [
        arrayIndex > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(PrevArrayValues, { currentIndex: arrayIndex, onClick: onClickUp }),
        value.filter((_, index) => Math.floor(index / maxArrayElements) === arrayIndex).map((v, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(JSONNode, { nodeKey: index + arrayIndex * maxArrayElements, value: v }, index)),
        arrayIndex < maxIndex && maxIndex > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(NextArrayValues, { currentIndex: arrayIndex, maxItems: value.length, onClick: onClickDown })
      ] })
    ] });
  };
  const ArrayNode$1 = React.memo(ArrayNode);
  const CollapsedObject = styled.span`
    &::before {
        content: '{ ';
    }
    &::after {
        content: ' }';
    }
`;
  const ObjectNode = ({ value, nodeKey, open = 0 }) => {
    const expanded = Math.max(open ?? 0, 0) > 0;
    const [show, setShow] = React.useState(expanded);
    const { collapsedStringLength } = React.useContext(JSONViewContext);
    const keys = Object.keys(value);
    const collapsedKeys = keys.map((key) => `${key}:${JSON.stringify(value[key])}`).join(", ");
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledNode, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          NodeKey,
          {
            expandable: keys.length > 0,
            expanded: show,
            onClick: () => setShow(!show),
            type: typeof value,
            children: nodeKey
          }
        ),
        !show && /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsedObject, { children: [
          collapsedKeys.slice(0, collapsedStringLength),
          collapsedKeys.length > collapsedStringLength && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ms-1", children: "…" })
        ] }) })
      ] }),
      show && /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { children: keys.map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(JSONNode, { nodeKey: key, value: value[key], open: open - 1 }, key)) })
    ] });
  };
  const ObjectNode$1 = React.memo(ObjectNode);
  const StyledDD$1 = styled.dd`
    color: var(--theme-base09);
`;
  const NumberNode = ({ nodeKey, value }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledNode, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(NodeKey, { type: typeof value, children: nodeKey }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StyledDD$1, { children: jsonNodeValue(value) })
    ] });
  };
  const StyledDD = styled.dd`
    color: var(--theme-base0B);
    width: 100%;
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
  const StringNode = ({ nodeKey, value }) => {
    const { collapsedStringLength } = React.useContext(JSONViewContext);
    const [show, setShow] = React.useState(value.length <= collapsedStringLength);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledNode, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NodeKey,
        {
          expandable: value.length > collapsedStringLength,
          expanded: show,
          onClick: () => setShow(!show),
          type: typeof value,
          children: nodeKey
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledDD, { className: classNames({ collapsed: !show }), children: [
        !show && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: value.replace(/[\n\t]/g, " ") }),
        show && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: value })
      ] })
    ] });
  };
  const JSONNode = ({ nodeKey, value, open = 0 }) => {
    switch (nodeType(value)) {
      case "number":
      case "boolean":
      case "bigint":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(NumberNode, { value, nodeKey, open });
      case "string":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StringNode, { value, nodeKey, open });
      case "object":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ObjectNode$1, { nodeKey, value, open });
      case "array":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ArrayNode$1, { nodeKey, value, open });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledNode, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(NodeKey, { type: typeof value, children: nodeKey }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: jsonNodeValue(value) })
    ] });
  };
  const JSONViewStyleContainer = styled.div`
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
  const JSONView = ({
    data,
    theme,
    dark,
    rootNodeName,
    collapsedStringLength,
    maxArrayElements,
    maxObjectElements,
    defaultOpenLevels
  }) => {
    const [currentTheme, setCurrentTheme] = React.useState(google);
    const [style, setStyle] = React.useState({});
    const [json, setJSON] = React.useState({});
    const parentContext = React.useContext(JSONViewContext);
    const [context, setContext] = React.useState({ ...defaultSettings, ...parentContext });
    React.useEffect(() => {
      setContext({ ...defaultSettings, ...parentContext });
    }, [parentContext]);
    React.useEffect(() => {
      setCurrentTheme(theme || (dark ? preferredThemes.dark : preferredThemes.light));
    }, [theme]);
    React.useEffect(() => {
      setContext({
        ...context,
        ...parentContext,
        collapsedStringLength: collapsedStringLength ?? parentContext.collapsedStringLength,
        maxArrayElements: maxArrayElements ?? parentContext.maxArrayElements,
        maxObjectElements: maxObjectElements ?? parentContext.maxObjectElements,
        defaultOpenLevels: defaultOpenLevels ?? parentContext.defaultOpenLevels
      });
    }, [collapsedStringLength, maxArrayElements, maxObjectElements, defaultOpenLevels]);
    React.useEffect(() => {
      const style2 = {
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
      };
      setStyle(style2);
    }, [currentTheme]);
    React.useEffect(() => {
      setJSON(data);
    }, [data]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(JSONViewContext.Provider, { value: context, children: /* @__PURE__ */ jsxRuntimeExports.jsx(JSONViewStyleContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("json-view", { "json-view--dark": dark }), style, children: /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(JSONNode, { nodeKey: rootNodeName || "root", value: json, open: defaultOpenLevels }) }) }) }) });
  };
  exports2.JSONView = JSONView;
  exports2.JSONViewContext = JSONViewContext;
  exports2.defaultSettings = defaultSettings;
  exports2.google = google;
  exports2.monokai = monokai;
  exports2.preferredThemes = preferredThemes;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
}));
//# sourceMappingURL=index.umd.js.map
