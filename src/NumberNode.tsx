import {JSONNodeProps} from "./types";
import {jsonNodeValue} from "./utils";
import NodeKey from "./NodeKey";

interface NumberNodeProps extends JSONNodeProps {
    value: number | bigint | boolean;
}

const NumberNode = ({nodeKey, value}: NumberNodeProps) => {
    return (
        <div className="json-view--node">
            <NodeKey>{nodeKey}</NodeKey>
            <dd className="json-view--number">{jsonNodeValue(value)}</dd>
        </div>
    )
}

export default NumberNode;
