import NodeKey from "./NodeKey";
import type {ArrayValueProps} from "./types";
import {memo, useContext, useState} from "react";
import JSONNode from "./JSONNode";
import {JSONViewContext} from "./JSONViewContext";
import PrevArrayValues from "./PrevArrayValues";
import NextArrayValues from "./NextArrayValues";
import StyledNode from "./StyledNode.tsx";
import styled from "@emotion/styled";


const CollapsedArray = styled.span`
    &::before {
        content: '[ ';
    }

    &::after {
        content: ' ]';
    }
`
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
            <StyledNode>
                <NodeKey expandable={!!value.length} type={typeof value}
                         expanded={show} onClick={() => setShow(!show)}>{nodeKey}</NodeKey>
                {!show && (
                    <dd>
                        <CollapsedArray>{value.length > 0 && (<span>&hellip; {value.length}</span>)}</CollapsedArray>
                    </dd>
                )}
            </StyledNode>
            {show && (
                <dl>
                    {arrayIndex > 0 && (
                        <PrevArrayValues currentIndex={arrayIndex} onClick={onClickUp}/>
                    )}
                    {value
                        .filter((_, index) => Math.floor(index / maxArrayElements) === arrayIndex)
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

export default memo(ArrayNode);
