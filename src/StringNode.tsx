import {JSONNodeProps} from "./types";
import NodeKey from "./NodeKey";
import {useContext, useState} from "react";
import {JSONViewContext} from "./JSONViewContext";

interface StringNodeProps extends JSONNodeProps {
    value: string,
}

const StringNode = ({nodeKey, value}: StringNodeProps) => {
    const {collapsedStringLength} = useContext(JSONViewContext)
    const [show, setShow] = useState(value.length <= collapsedStringLength)
    return (
        <div className="json-view--node" onClick={() => setShow(!show)}>
            <NodeKey expandable={value.length > collapsedStringLength} expanded={show}>{nodeKey}</NodeKey>
            {!show && (
                <>
                    <dd className="json-view--string">
                    <span className="json-view--collapsed-value">
                        {value.replace(/[\n\t]/g, ' ').slice(0, collapsedStringLength)}
                    </span>
                    </dd>
                    {value.length > collapsedStringLength && <span className="ms-3">[more]</span>}
                </>
            )}
            {show && <dd className="json-view--string">{value}</dd>}
        </div>
    )
}

export default StringNode;
