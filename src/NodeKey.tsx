import classNames from "classnames";
import React from "react";

export interface NodeKeyProps {
    children: React.ReactNode;
    expandable?: boolean;
    expanded?: boolean;
    onClick?: () => void;
}

const NodeKey = ({children, expandable, expanded, onClick}:NodeKeyProps) => {
    const clickHandler = () => {
        if (expandable && !!onClick) {
            onClick();
        }
    }
    return (
        <dt className="json-view--key" onClick={clickHandler}>
            {expandable && (
                <span className={classNames('json-view--node-key', {'collapsed': !expanded, 'open': expanded})} />
            )}
            <span>{children}:</span>
        </dt>
    )
}

export default NodeKey;
