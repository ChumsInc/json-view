import React, {useState} from "react";
import NodeKey from "./NodeKey";
import {JSONNodeProps, KeyedObject, PreviewFunction} from "./types";
import JSONNode from "./JSONNode";
import CollapsedObjectNode from "./CollapsedObjectNode";

const defaultPreview: PreviewFunction = (obj: KeyedObject) => <>&hellip;{Object.keys(obj).length}</>;

export interface ObjectNodeProps extends JSONNodeProps {
    value: KeyedObject,
    collapsed?: boolean,
}

const ObjectNode = ({value, nodeKey, collapsed, preview}: ObjectNodeProps) => {
    const [show, setShow] = useState(false);
    if (collapsed) {
        return <CollapsedObjectNode value={value}/>
    }
    const keys = Object.keys(value).length;
    const previewFunction = preview ?? defaultPreview;
    return (
        <>
            <div className="json-view--node">
                <NodeKey expandable={keys > 0} expanded={show} onClick={() => setShow(!show)}>{nodeKey}</NodeKey>
                <dd><span className="json-view--collapsed-object">{previewFunction(value)}</span></dd>
            </div>
            {show && (
                <dl>
                    {Object.keys(value).map(key => (
                        <JSONNode key={key} nodeKey={key} value={value[key]} preview={preview}/>))}
                </dl>
            )}
        </>
    )
}

export default React.memo(ObjectNode);
