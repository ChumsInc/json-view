import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { jsonNodeValue, nodeType } from "./utils";
import NodeKey from "./NodeKey";
import ArrayNode from "./ArrayNode";
import ObjectNode from "./ObjectNode";
import NumberNode from "./NumberNode";
import StringNode from "./StringNode";
const JSONNode = ({ nodeKey, value, open = 0 }) => {
    switch (nodeType(value)) {
        case 'number':
        case 'boolean':
        case 'bigint':
            return _jsx(NumberNode, { value: value, nodeKey: nodeKey, open: open });
        case 'string':
            return _jsx(StringNode, { value: value, nodeKey: nodeKey, open: open });
        case 'object':
            return _jsx(ObjectNode, { nodeKey: nodeKey, value: value, open: open });
        case 'array':
            return _jsx(ArrayNode, { nodeKey: nodeKey, value: value, open: open });
    }
    return (_jsxs("div", { className: "json-view--node", children: [_jsx(NodeKey, { children: nodeKey }), _jsx("dd", { children: jsonNodeValue(value) })] }));
};
export default JSONNode;
//# sourceMappingURL=JSONNode.js.map