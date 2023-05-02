import classNames from "classnames";
import React from "react";
import {NodeKeyProps} from "./NodeKey";


/**
 * CollapsedNodeKey mimics the NodeKey element, except that it returns a <span> Element instead of a <dt> Element.
 */

const CollapsedNodeKey = ({children, expandable, expanded, onClick}:NodeKeyProps) => {
    const clickHandler = () => {
        if (expandable && !!onClick) {
            onClick();
        }
    }
    return (
        <span className="json-view--key" onClick={clickHandler}>
            {expandable && (
                <span className={classNames('json-view--node-key', {'collapsed': !expanded, 'open': expanded})} />
            )}
            <span>{children}:</span>
        </span>
    )
}

export default CollapsedNodeKey;
