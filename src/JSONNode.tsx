import {jsonNodeValue, nodeType} from "./utils";
import NodeKey from "./NodeKey";
import type {JSONNodeProps} from "./types";
import ArrayNode from "./ArrayNode";
import ObjectNode from "./ObjectNode";
import NumberNode from "./NumberNode";
import StringNode from "./StringNode";
import StyledNode from "./StyledNode";


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
        <StyledNode>
            <NodeKey type={typeof value}>{nodeKey}</NodeKey>
            <dd>{jsonNodeValue(value)}</dd>
        </StyledNode>
    )
}

export default JSONNode;
