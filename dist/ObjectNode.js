import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import NodeKey from "./NodeKey";
import JSONNode from "./JSONNode";
import CollapsedObjectNode from "./CollapsedObjectNode";
const ObjectNode = ({ value, nodeKey, collapsed }) => {
    const [show, setShow] = useState(false);
    if (collapsed) {
        return _jsx(CollapsedObjectNode, { value: value });
    }
    const keys = Object.keys(value).length;
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "json-view--node", children: [_jsx(NodeKey, { expandable: keys > 0, expanded: show, onClick: () => setShow(!show), children: nodeKey }), _jsx("dd", { children: _jsxs("span", { className: "json-view--collapsed-object", children: ["\u2026", keys] }) })] }), show && (_jsx("dl", { children: Object.keys(value).map(key => (_jsx(JSONNode, { nodeKey: key, value: value[key] }, key))) }))] }));
};
export default React.memo(ObjectNode);
//# sourceMappingURL=ObjectNode.js.map