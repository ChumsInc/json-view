import React, {useState} from "react";
import NodeKey from "./NodeKey";
import {JSONNodeProps, KeyedObject, PreviewFunction} from "./types";
import JSONNode from "./JSONNode";

export interface ObjectNodeProps extends JSONNodeProps {
    value: KeyedObject,
}

const ObjectNode = ({value, nodeKey, open = 0}: ObjectNodeProps) => {
    const expanded = Math.max(open ?? 0, 0) > 0;
    const [show, setShow] = useState(expanded);
    const keys = Object.keys(value);
    return (
        <>
            <div className="json-view--node" onClick={() => setShow(!show)}>
                <NodeKey expandable={keys.length > 0} expanded={show}>{nodeKey}</NodeKey>
                {!show && (
                    <dd>
                        <span className="json-view--collapsed-object">
                            &hellip;
                            {keys.length}
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
