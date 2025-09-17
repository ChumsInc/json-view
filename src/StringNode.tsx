import type {JSONNodeProps} from "./types";
import NodeKey from "./NodeKey";
import {useContext, useState} from "react";
import {JSONViewContext} from "./JSONViewContext";
import StyledNode from "./StyledNode.tsx";
import styled from "@emotion/styled";
import classNames from "classnames";

interface StringNodeProps extends JSONNodeProps {
    value: string,
}

const StyledDD = styled.dd`
    color: var(--theme-base0B);
    width: 100%;
    word-break: break-all;
    white-space: pre-wrap;
    overflow: auto;
    &.collapsed {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &::before {
        content: '"';
    }

    &::after {
        content: '"';
    }
`

const StringNode = ({nodeKey, value}: StringNodeProps) => {
    const {collapsedStringLength} = useContext(JSONViewContext)
    const [show, setShow] = useState(value.length <= collapsedStringLength)
    return (
        <StyledNode>
            <NodeKey expandable={value.length > collapsedStringLength}
                     expanded={show} onClick={() => setShow(!show)}
                     type={typeof value}>{nodeKey}
            </NodeKey>
            <StyledDD className={classNames({collapsed: !show})}>
                {!show && (
                    <>{value.replace(/[\n\t]/g, ' ')}</>
                )}
                {show && (<>
                    {value}
                </>)}
            </StyledDD>
        </StyledNode>
    )
}

export default StringNode;
