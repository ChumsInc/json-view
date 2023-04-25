import NodeKey from "./NodeKey";
import {JSONNodeProps} from "./types";
import React, {useContext, useState} from "react";
import JSONNode from "./JSONNode";
import {CollapsedArrayNode} from "./CollapsedArrayNode";
import {JSONViewContext} from "./JSONViewContext";
import PrevArrayValues from "./PrevArrayValues";
import NextArrayValues from "./NextArrayValues";

export interface ArrayValueProps extends JSONNodeProps {
    value: any[],
    collapsed?: boolean
}

const ArrayNode = ({value, nodeKey, collapsed, preview}: ArrayValueProps) => {
    const {maxArrayElements} = useContext(JSONViewContext);
    const [show, setShow] = useState(false);
    const [arrayIndex, setArrayIndex] = useState(0);

    const maxIndex = Math.floor(value.length / maxArrayElements);

    const onClickUp = () => {
        setArrayIndex(Math.max(arrayIndex - 1, 0));
    }

    const onClickDown = () => {
        setArrayIndex(Math.min(maxIndex, arrayIndex + 1));
    }

    if (collapsed) {
        return (
            <CollapsedArrayNode value={value} preview={preview}/>
        );
    }
    return (
        <>
            <div className="json-view--node">
                <NodeKey expandable={!!value.length} expanded={show} onClick={() => setShow(!show)}>{nodeKey}</NodeKey>
                <dd><CollapsedArrayNode value={value} preview={preview}/></dd>
            </div>
            {show && (
                <dl>
                    {arrayIndex > 0 && (
                        <PrevArrayValues currentIndex={arrayIndex} onClick={onClickUp}/>
                    )}
                    {value
                        .filter((v, index) => Math.floor(index / maxArrayElements) === arrayIndex)
                        .map((v: any, index: number) => (
                            <JSONNode key={index} nodeKey={index + (arrayIndex * maxArrayElements)} value={v}
                                      preview={preview}/>
                        ))}
                    {arrayIndex < maxIndex && maxIndex > 0 && (
                        <NextArrayValues currentIndex={arrayIndex} maxItems={value.length} onClick={onClickDown}/>
                    )}
                </dl>
            )}
        </>
    )
}

export default React.memo(ArrayNode);
