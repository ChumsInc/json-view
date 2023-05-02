import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import NodeKey from "./NodeKey";
import { useContext, useState } from "react";
import { JSONViewContext } from "./JSONViewContext";
const StringNode = ({ nodeKey, value }) => {
    const { collapsedStringLength } = useContext(JSONViewContext);
    const [show, setShow] = useState(value.length <= collapsedStringLength);
    return (_jsxs("div", { className: "json-view--node", onClick: () => setShow(!show), children: [_jsx(NodeKey, { expandable: value.length > collapsedStringLength, expanded: show, children: nodeKey }), !show && (_jsxs(_Fragment, { children: [_jsx("dd", { className: "json-view--string", children: _jsx("span", { className: "json-view--collapsed-value", children: value.replace(/[\n\t]/g, ' ').slice(0, collapsedStringLength) }) }), value.length > collapsedStringLength && _jsx("span", { className: "ms-3", children: "[more]" })] })), show && _jsx("dd", { className: "json-view--string", children: value })] }));
};
export default StringNode;
//# sourceMappingURL=StringNode.js.map