import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import NodeKey from "./NodeKey";
import { useContext } from "react";
import { JSONViewContext } from "./JSONViewContext";
const StringNode = ({ nodeKey, value, collapsed }) => {
    const { collapsedStringLength } = useContext(JSONViewContext);
    if (collapsed) {
        return (_jsx("span", { className: "json-view--string", children: _jsxs("span", { className: "json-view--collapsed-value", children: [value.slice(0, collapsedStringLength), value.length > collapsedStringLength && _jsx(_Fragment, { children: "\u2026" })] }) }));
    }
    return (_jsxs("div", { className: "json-view--node", children: [_jsx(NodeKey, { children: nodeKey }), _jsx("dd", { className: "json-view--string", children: value })] }));
};
export default StringNode;
//# sourceMappingURL=StringNode.js.map