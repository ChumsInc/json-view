import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { jsonNodeValue, nodeType } from "./utils";
import NodeKey from "./NodeKey";
import ArrayNode from "./ArrayNode";
import ObjectNode from "./ObjectNode";
import NumberNode from "./NumberNode";
import StringNode from "./StringNode";
const JSONNode = ({ nodeKey, value, collapsed }) => {
    const type = nodeType(value);
    switch (type) {
        case 'number':
        case 'boolean':
        case 'bigint':
            return _jsx(NumberNode, { value: value, nodeKey: nodeKey, collapsed: collapsed });
        case 'string':
            return _jsx(StringNode, { value: value, nodeKey: nodeKey, collapsed: collapsed });
        case 'object':
            return (_jsx(ObjectNode, { nodeKey: nodeKey, value: value, collapsed: collapsed }));
        case 'array':
            return (_jsx(ArrayNode, { nodeKey: nodeKey, value: value, collapsed: collapsed }));
        case 'null':
    }
    return (_jsxs("div", { className: "json-view--node", children: [_jsx(NodeKey, { children: nodeKey }), _jsx("dd", { children: jsonNodeValue(value) })] }));
};
export default JSONNode;
//# sourceMappingURL=JSONNode.js.map