import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { jsonNodeValue } from "./utils";
import NodeKey from "./NodeKey";
const NumberNode = ({ nodeKey, value }) => {
    return (_jsxs("div", { className: "json-view--node", children: [_jsx(NodeKey, { children: nodeKey }), _jsx("dd", { className: "json-view--number", children: jsonNodeValue(value) })] }));
};
export default NumberNode;
//# sourceMappingURL=NumberNode.js.map