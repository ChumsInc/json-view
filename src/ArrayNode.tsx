import NodeKey from "./NodeKey";
import {ArrayValueProps} from "./types";
import React, {useContext, useState} from "react";
import JSONNode from "./JSONNode";
import {CollapsedArrayNode} from "./CollapsedArrayNode";
import {JSONViewContext} from "./JSONViewContext";
import PrevArrayValues from "./PrevArrayValues";
import NextArrayValues from "./NextArrayValues";

const ArrayNode = ({value, nodeKey, open = 0}: ArrayValueProps) => {
    const expanded = Math.max(open ?? 0, 0) > 0;
    const {maxArrayElements} = useContext(JSONViewContext);
    const [show, setShow] = useState(expanded);
    const [arrayIndex, setArrayIndex] = useState(0);

    const maxIndex = Math.floor(value.length / maxArrayElements);

    const onClickUp = () => {
        setArrayIndex(Math.max(arrayIndex - 1, 0));
    }

    const onClickDown = () => {
        setArrayIndex(Math.min(maxIndex, arrayIndex + 1));
    }
    return (
        <>
            <div className="json-view--node">
                <NodeKey expandable={!!value.length} expanded={show} onClick={() => setShow(!show)}>{nodeKey}</NodeKey>
                {!show && <dd><CollapsedArrayNode value={value}/></dd>}
            </div>
            {show && (
                <dl>
                    {arrayIndex > 0 && (
                        <PrevArrayValues currentIndex={arrayIndex} onClick={onClickUp}/>
                    )}
                    {value
                        .filter((v, index) => Math.floor(index / maxArrayElements) === arrayIndex)
                        .map((v: any, index: number) => (
                            <JSONNode key={index} nodeKey={index + (arrayIndex * maxArrayElements)} value={v}/>
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
