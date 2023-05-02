import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useContext, useState } from "react";
import NodeKey from "./NodeKey";
import JSONNode from "./JSONNode";
import { JSONViewContext } from "./JSONViewContext";
const ObjectNode = ({ value, nodeKey, open = 0 }) => {
    const expanded = Math.max(open ?? 0, 0) > 0;
    const [show, setShow] = useState(expanded);
    const { collapsedStringLength } = useContext(JSONViewContext);
    const keys = Object.keys(value);
    const collapsedKeys = keys.map(key => `${key}:${JSON.stringify(value[key])}`).join(', ');
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "json-view--node", onClick: () => setShow(!show), children: [_jsx(NodeKey, { expandable: keys.length > 0, expanded: show, children: nodeKey }), !show && (_jsx("dd", { children: _jsxs("span", { className: "json-view--collapsed-object", children: [collapsedKeys.slice(0, collapsedStringLength), collapsedKeys.length > collapsedStringLength && _jsx("span", { className: "ms-1", children: "\u2026" })] }) }))] }), show && (_jsx("dl", { children: keys.map(key => (_jsx(JSONNode, { nodeKey: key, value: value[key], open: open - 1 }, key))) }))] }));
};
export default React.memo(ObjectNode);
//# sourceMappingURL=ObjectNode.js.map