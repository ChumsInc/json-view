import classNames from "classnames";
import {type ReactNode} from "react";

export interface NodeKeyProps {
    children: ReactNode;
    type: string;
    expandable?: boolean;
    expanded?: boolean;
    onClick?: () => void;
}

const NodeKey = ({children, type, expandable, expanded, onClick}: NodeKeyProps) => {
    const clickHandler = () => {
        if (expandable && !!onClick) {
            onClick();
        }
    }
    return (
        <dt className="json-view--key">
            {expandable && (
                <span className={classNames('json-view--node-key', `type--${type}`, {
                    expandable: true,
                    'collapsed': !expanded,
                    'open': expanded
                })} onClick={clickHandler}/>
            )}
            {!expandable && (
                <span className={classNames('json-view--node-key', `type--${type}`)}/>
            )}
            <span>{children}:</span>
        </dt>
    )
}

export default NodeKey;
