import JSONNode from "./JSONNode";
import {ObjectNodeProps} from "./ObjectNode";
import React, {Fragment} from "react";
import NodeKey from "./NodeKey";
import CollapsedNodeKey from "./CollapsedNodeKey";

const CollapsedObjectNode = ({value}:Pick<ObjectNodeProps, 'value'>) => {
    const keys = Object.keys(value);

    return (
        <span className="json-view--collapsed-object">
            {keys.filter((key, index) => index < 1)
                .map((key, index) => (
                    <Fragment key={index}>
                        <CollapsedNodeKey>{key}</CollapsedNodeKey>
                        <JSONNode key={key} nodeKey={key} value={value[key]} collapsed />
                        {index < 4  && index < keys.length - 1 && (<>, </>)}
                    </Fragment>

                ))
            }
            {Object.keys(value).length > 1 && (<span>&hellip;{keys.length}</span>)}
        </span>
    )
}
export default React.memo(CollapsedObjectNode);
