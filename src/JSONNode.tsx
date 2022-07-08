import {jsonNodeValue, nodeType} from "./utils";
import NodeKey from "./NodeKey";
import {JSONNodeProps} from "./types";
import ArrayNode from "./ArrayNode";
import ObjectNode from "./ObjectNode";
import NumberNode from "./NumberNode";
import StringNode from "./StringNode";

const JSONNode = ({nodeKey, value, collapsed}: JSONNodeProps) => {
    const type = nodeType(value);
    switch (type) {
    case 'number':
    case 'boolean':
    case 'bigint':
        return <NumberNode value={value} nodeKey={nodeKey} collapsed={collapsed} />
    case 'string':
        return <StringNode value={value} nodeKey={nodeKey} collapsed={collapsed} />
    case 'object':
        return (
            <ObjectNode nodeKey={nodeKey} value={value} collapsed={collapsed}/>
        )
    case 'array':
        return (
            <ArrayNode nodeKey={nodeKey} value={value} collapsed={collapsed}/>
        )
    case 'null':

    }

    return (
        <div className="json-view--node">
            <NodeKey>{nodeKey}</NodeKey>
            <dd>{jsonNodeValue(value)}</dd>
        </div>
    )
}

export default JSONNode;
