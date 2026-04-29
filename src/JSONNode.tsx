import {isKeyedObject, isNumberNode, jsonNodeValue} from "./utils";
import NodeKey from "./NodeKey";
import type {JSONNodeProps} from "./types";
import ArrayNode from "./ArrayNode";
import ObjectNode from "./ObjectNode";
import NumberNode from "./NumberNode";
import StringNode from "./StringNode";
import StyledNode from "./StyledNode";


const JSONNode = ({nodeKey, value, open = 0}: JSONNodeProps) => {
    if (isNumberNode(value)) {
        return <NumberNode value={value} nodeKey={nodeKey} open={open}/>
    }
    if (typeof value === 'string') {
        return <StringNode value={value} nodeKey={nodeKey} open={open}/>
    }
    if (Array.isArray(value)) {
        return <ArrayNode value={value} nodeKey={nodeKey} open={open}/>
    }
    if (isKeyedObject(value)) {
        return <ObjectNode value={value} nodeKey={nodeKey} open={open}/>
    }

    return (
        <StyledNode>
            <NodeKey type={typeof value}>{nodeKey}</NodeKey>
            <dd>{jsonNodeValue(value)}</dd>
        </StyledNode>
    )
}

export default JSONNode;
