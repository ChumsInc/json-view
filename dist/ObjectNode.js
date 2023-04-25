import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React, { useState } from "react";
import NodeKey from "./NodeKey";
import JSONNode from "./JSONNode";
import CollapsedObjectNode from "./CollapsedObjectNode";
const defaultPreview = (obj) => _jsxs(_Fragment, { children: ["\u2026", Object.keys(obj).length] });
const ObjectNode = ({ value, nodeKey, collapsed, preview }) => {
    const [show, setShow] = useState(false);
    if (collapsed) {
        return _jsx(CollapsedObjectNode, { value: value });
    }
    const keys = Object.keys(value).length;
    const previewFunction = preview ?? defaultPreview;
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "json-view--node", children: [_jsx(NodeKey, { expandable: keys > 0, expanded: show, onClick: () => setShow(!show), children: nodeKey }), _jsx("dd", { children: _jsx("span", { className: "json-view--collapsed-object", children: previewFunction(value) }) })] }), show && (_jsx("dl", { children: Object.keys(value).map(key => (_jsx(JSONNode, { nodeKey: key, value: value[key], preview: preview }, key))) }))] }));
};
export default React.memo(ObjectNode);
//# sourceMappingURL=ObjectNode.js.map