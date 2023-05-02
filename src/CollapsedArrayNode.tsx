import React from "react";
import {ArrayValueProps} from "./ArrayNode";

export const CollapsedArrayNode = ({value}: Pick<ArrayValueProps, 'value'>) => {
    return (
        <span className="json-view--collapsed-array">
            {value.length > 0 && (<span>&hellip;{value.length}</span>)}
        </span>
    )
}

export default React.memo(CollapsedArrayNode);
