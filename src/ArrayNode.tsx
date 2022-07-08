import NodeKey from "./NodeKey";
import {JSONNodeProps} from "./types";
import React, {useContext, useState} from "react";
import JSONNode from "./JSONNode";
import {CollapsedArrayNode} from "./CollapsedArrayNode";
import {JSONViewContext} from "./JSONViewContext";

interface PrevArrayValuesProps {
    currentIndex: number,
    onClick: () => void,
}
const PrevArrayValues = ({currentIndex, onClick}:PrevArrayValuesProps) => {
    const {maxArrayElements} = useContext(JSONViewContext);
    return (
        <div className="json-view--node" onClick={onClick}>
            <dt className="json-view--key">[0&hellip;{(currentIndex * maxArrayElements) - 1}]</dt>
            <dd className="json-view--collapsed-array">prev</dd>
        </div>
    )
}

interface NextArrayValuesProps {
    currentIndex: number,
    maxItems: number,
    onClick: () => void,
}
const NextArrayValues = ({currentIndex, maxItems, onClick}:NextArrayValuesProps) => {
    const {maxArrayElements} = useContext(JSONViewContext);
    return (
        <div className="json-view--node" onClick={onClick}>
            <dt className="json-view--key">[{(currentIndex + 1) * maxArrayElements}&hellip;{maxItems - 1}]</dt>
            <dd className="json-view--value">next</dd>
        </div>
    )
}

export interface ArrayValueProps extends JSONNodeProps {
    value: any[],
    collapsed?: boolean
}

const ArrayNode = ({value, nodeKey, collapsed}: ArrayValueProps) => {
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
            <CollapsedArrayNode value={value}/>
        );
    }
    return (
        <>
            <div className="json-view--node">
                <NodeKey expandable={!!value.length} expanded={show} onClick={() => setShow(!show)}>{nodeKey}</NodeKey>
                <dd><CollapsedArrayNode value={value}/></dd>
            </div>
            {show && (
                <dl>
                    {arrayIndex > 0 && (
                        <PrevArrayValues currentIndex={arrayIndex} onClick={onClickUp} />
                    )}
                    {value
                        .filter((v, index) => Math.floor(index / maxArrayElements) === arrayIndex)
                        .map((v: any, index: number) => (
                            <JSONNode key={index} nodeKey={index + (arrayIndex * maxArrayElements)} value={v}/>
                        ))}
                    {arrayIndex < maxIndex && maxIndex > 0 && (
                        <NextArrayValues currentIndex={arrayIndex} maxItems={value.length} onClick={onClickDown} />
                    )}
                </dl>
            )}
        </>
    )
}

export default React.memo(ArrayNode);
