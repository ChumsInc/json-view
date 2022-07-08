import React, {useState} from "react";
import NodeKey from "./NodeKey";
import {JSONNodeProps, KeyedObject} from "./types";
import JSONNode from "./JSONNode";
import CollapsedObjectNode from "./CollapsedObjectNode";


export interface ObjectNodeProps extends JSONNodeProps {
    value: KeyedObject,
    collapsed?: boolean,
}

const ObjectNode = ({value, nodeKey, collapsed}:ObjectNodeProps) => {
    const [show, setShow] = useState(false);
    if (collapsed) {
        return <CollapsedObjectNode value={value} />
    }
    const keys = Object.keys(value).length;
    return (
        <>
            <div className="json-view--node">
                <NodeKey expandable={keys > 0} expanded={show} onClick={() => setShow(!show)}>{nodeKey}</NodeKey>
                <dd><span className="json-view--collapsed-object">&hellip;{keys}</span></dd>
            </div>
            {show && (
                <dl>
                    {Object.keys(value).map(key => (<JSONNode key={key} nodeKey={key} value={value[key]} />))}
                </dl>
            )}
        </>
    )
}

export default React.memo(ObjectNode);
