import {memo, useContext, useState} from "react";
import NodeKey from "./NodeKey";
import type {JSONNodeProps, KeyedObject} from "./types";
import JSONNode from "./JSONNode";
import {JSONViewContext} from "./JSONViewContext";
import StyledNode from "./StyledNode.tsx";
import styled from "@emotion/styled";

export interface ObjectNodeProps extends JSONNodeProps {
    value: KeyedObject,
}

const CollapsedObject = styled.span`
    &::before {
        content: '{ ';
    }
    &::after {
        content: ' }';
    }
`

const ObjectNode = ({value, nodeKey, open = 0}: ObjectNodeProps) => {
    const expanded = Math.max(open ?? 0, 0) > 0;
    const [show, setShow] = useState(expanded);
    const {collapsedStringLength} = useContext(JSONViewContext)
    const keys = Object.keys(value);
    const collapsedKeys = keys.map(key => `${key}:${JSON.stringify(value[key])}`).join(', ');
    return (
        <>
            <StyledNode>
                <NodeKey expandable={keys.length > 0}
                         expanded={show} onClick={() => setShow(!show)}
                         type={typeof value}>{nodeKey}</NodeKey>
                {!show && (
                    <dd>
                        <CollapsedObject>
                            {collapsedKeys.slice(0, collapsedStringLength)}
                            {collapsedKeys.length > collapsedStringLength && <span className="ms-1">&hellip;</span>}
                        </CollapsedObject>
                    </dd>
                )}
            </StyledNode>
            {show && (
                <dl>
                    {keys.map(key => (
                        <JSONNode key={key} nodeKey={key} value={value[key]} open={open - 1}/>))}
                </dl>
            )}
        </>
    )
}

export default memo(ObjectNode);
