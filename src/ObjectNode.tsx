import React, {useContext, useState} from "react";
import NodeKey from "./NodeKey";
import {JSONNodeProps, KeyedObject} from "./types";
import JSONNode from "./JSONNode";
import {JSONViewContext} from "./JSONViewContext";

export interface ObjectNodeProps extends JSONNodeProps {
    value: KeyedObject,
}

const ObjectNode = ({value, nodeKey, open = 0}: ObjectNodeProps) => {
    const expanded = Math.max(open ?? 0, 0) > 0;
    const [show, setShow] = useState(expanded);
    const {collapsedStringLength} = useContext(JSONViewContext)
    const keys = Object.keys(value);
    const collapsedKeys = keys.map(key => `${key}:${JSON.stringify(value[key])}`).join(', ');
    return (
        <>
            <div className="json-view--node" onClick={() => setShow(!show)}>
                <NodeKey expandable={keys.length > 0} expanded={show}>{nodeKey}</NodeKey>
                {!show && (
                    <dd>
                        <span className="json-view--collapsed-object">
                            {collapsedKeys.slice(0, collapsedStringLength)}
                            {collapsedKeys.length > collapsedStringLength && <span className="ms-1">&hellip;</span>}
                        </span>
                    </dd>
                )}
            </div>
            {show && (
                <dl>
                    {keys.map(key => (
                        <JSONNode key={key} nodeKey={key} value={value[key]} open={open - 1}/>))}
                </dl>
            )}
        </>
    )
}

export default React.memo(ObjectNode);
