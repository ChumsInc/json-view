import {JSONNodeProps} from "./types";
import {jsonNodeValue} from "./utils";
import NodeKey from "./NodeKey";

interface NumberNodeProps extends JSONNodeProps {
    value: number | bigint | boolean;
}

const NumberNode = ({nodeKey, value, collapsed}: NumberNodeProps) => {
    if (collapsed) {
        return (
            <span className="json-view--number">
                <span className="json-view--collapsed-value">{jsonNodeValue(value)}</span>
            </span>
        )
    }
    return (
        <div className="json-view--node">
            <NodeKey>{nodeKey}</NodeKey>
            <dd className="json-view--number">{jsonNodeValue(value)}</dd>
        </div>
    )
}

export default NumberNode;
