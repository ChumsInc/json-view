import {jsonNodeValue, nodeType} from "./utils";
import NodeKey from "./NodeKey";
import {JSONNodeProps} from "./types";
import ArrayNode from "./ArrayNode";
import ObjectNode from "./ObjectNode";
import NumberNode from "./NumberNode";
import StringNode from "./StringNode";

const JSONNode = ({nodeKey, value, open = 0}: JSONNodeProps) => {
    switch (nodeType(value)) {
        case 'number':
        case 'boolean':
        case 'bigint':
            return <NumberNode value={value} nodeKey={nodeKey} open={open}/>
        case 'string':
            return <StringNode value={value} nodeKey={nodeKey} open={open}/>
        case 'object':
            return <ObjectNode nodeKey={nodeKey} value={value} open={open}/>
        case 'array':
            return <ArrayNode nodeKey={nodeKey} value={value} open={open}/>
    }

    return (
        <div className="json-view--node">
            <NodeKey>{nodeKey}</NodeKey>
            <dd>{jsonNodeValue(value)}</dd>
        </div>
    )
}

export default JSONNode;
