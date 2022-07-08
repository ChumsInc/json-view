import {JSONNodeProps} from "./types";
import NodeKey from "./NodeKey";
import {useContext} from "react";
import {JSONViewContext} from "./JSONViewContext";

interface StringNodeProps extends JSONNodeProps {
    value: string,
}

const StringNode = ({nodeKey, value, collapsed}: StringNodeProps) => {
    const {collapsedStringLength} = useContext(JSONViewContext);

    if (collapsed) {
        return (
            <span className="json-view--string">
                <span className="json-view--collapsed-value">
                    {value.slice(0, collapsedStringLength)}
                    {value.length > collapsedStringLength && <>&hellip;</>}
                </span>
            </span>
        )
    }
    return (
        <div className="json-view--node">
            <NodeKey>{nodeKey}</NodeKey>
            <dd className="json-view--string">{value}</dd>
        </div>
    )
}

export default StringNode;
