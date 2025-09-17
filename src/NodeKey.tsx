import classNames from "classnames";
import {type ReactNode} from "react";
import styled from "@emotion/styled";

export interface NodeKeyProps {
    children: ReactNode;
    type: string;
    expandable?: boolean;
    expanded?: boolean;
    onClick?: () => void;
}

const StyledNodeKey = styled.dt`
    //padding: 0 0.25rem;
    color: var(--theme-base04);
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
`;

const NodeToggle = styled.div`
    padding: 0 0.25rem;
    color: var(--theme-base04);
    display: flex;
    width: 1rem;
    height: 1rem;
    flex-direction: row;
    gap: 0.25rem;
    cursor: default;
    &.expandable {
        transition: all 0.1s ease-in-out;
        border-radius: 0.25rem;
        transform: rotate(0deg);
        transform-origin: center;
        cursor: pointer;
        &.type--string {
            ::before {
                content: '+';
                font-size: 1rem;
            }
            &.open {
                ::before {
                    content: '-';
                }
                transform: rotate(0deg);
            }
        }
        &::before {
            content: '▶';
            font-size: 0.5rem;
        }
        &.open {
            transform: rotate(90deg);
        }
    }
`

const NodeKey = ({children, type, expandable, expanded, onClick}: NodeKeyProps) => {
    const clickHandler = () => {
        if (expandable && !!onClick) {
            onClick();
        }
    }
    return (
        <StyledNodeKey>
            <NodeToggle className={classNames(`type--${type}`, {expandable, open: expanded})} onClick={clickHandler} />
            <div>{children}:</div>
        </StyledNodeKey>
    )
}

export default NodeKey;
