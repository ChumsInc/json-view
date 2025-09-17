import type {JSONNodeProps} from "./types";
import {jsonNodeValue} from "./utils";
import NodeKey from "./NodeKey";
import StyledNode from "./StyledNode.tsx";
import styled from "@emotion/styled";

interface NumberNodeProps extends JSONNodeProps {
    value: number | bigint | boolean;
}

const StyledDD = styled.dd`
    color: var(--theme-base09);
`
const NumberNode = ({nodeKey, value}: NumberNodeProps) => {
    return (
        <StyledNode>
            <NodeKey type={typeof value}>{nodeKey}</NodeKey>
            <StyledDD>{jsonNodeValue(value)}</StyledDD>
        </StyledNode>
    )
}

export default NumberNode;
